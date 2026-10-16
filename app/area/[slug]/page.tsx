import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";
import FelmatBanner from "@/app/components/FelmatBanner";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { ALL_AREAS, type AreaDef } from "@/data/areas-def";
import areasData from "@/data/areas-data.json";

/*
 * エリア別「エアコン修理業者おすすめ」量産テンプレート。
 * 掲載データは全て data/areas-data.json(公式・調査値のみ・確認日を記録)から差し込む。
 * 提携各社の表示可否は公式対応エリアの照合ルールで自動判定(捏造ゼロ)。
 * 大阪府ページのみ手書きの /area/osaka/ が担当(静的ルート優先)。
 */

const D = areasData as {
  confirmedAt: string;
  prefStats: Record<string, {
    curama: { count: number | null; priceGas: string | null; priceWater: string | null; minPrice: string | null };
    mitsumoa: { pros: number | null; souba: string | null; reviews: number | null };
  }>;
  seifuAreas: Record<string, string[]>;
  rcleaningPrefs: string[];
  laboCities: Record<string, string[]>;
  yamadaOffices: { name: string; pref: string; address: string }[];
  shohiCenters: Record<string, { name: string; tel: string } | null>;
};

export function generateStaticParams() {
  return ALL_AREAS.map((a) => ({ slug: a.slug }));
}

function getArea(slug: string): AreaDef | undefined {
  return ALL_AREAS.find((a) => a.slug === slug);
}

type Vendor = {
  slug: string;
  badge: string;
  name: string;
  category: string;
  aff: "a8" | "felmat" | null;
  paras: string[];
  recommend: string[];
  table: [string, string][];
  note: string;
};

function buildVendors(area: AreaDef) {
  const stats = D.prefStats[area.prefSlug];
  const curama = stats?.curama;
  const mitsumoa = stats?.mitsumoa;
  const office = D.yamadaOffices.find((o) => o.pref === area.prefName);
  const seifuList = D.seifuAreas[area.prefName] || [];
  const seifuOk = area.type === "pref" ? seifuList.length > 0 : seifuList.some((c) => area.name.startsWith(c) || c.startsWith(area.name.replace("市", "")));
  const seifuCityListed = area.type === "city" && seifuList.includes(area.name);
  const rOk = D.rcleaningPrefs.includes(area.prefName);
  const laboList = D.laboCities[area.prefName] || [];
  const laboOk = area.type === "pref" ? laboList.length > 0 : laboList.includes(area.name);

  const repair: Vendor[] = [];

  repair.push({
    slug: "aircon-trouble-center",
    badge: "24時間365日受付・全国対応",
    name: "エアコントラブルセンター",
    category: "エアコン修理（紹介型）",
    aff: "felmat",
    paras: [
      `エアコントラブルセンターは、全国2,000社以上の加盟店ネットワークを持つエアコン修理の受付窓口です。公式サイトでは「全国どこでも対応」と案内されており、${area.name}の修理依頼も受け付けています。`,
      `受付は24時間365日です。公式サイトには「30分以内に駆け付けます」との案内もあり（地域・混雑状況により変動）、早急な対応を希望する場合に適した窓口です。料金は基本料金8,800円〜で、最終的な費用は現地見積もりで確定します。実際の施工は加盟店が行う紹介型のため、施工前に見積もり内容を書面やメールで残しておくことをおすすめします。`,
    ],
    recommend: [
      "・当日・翌日中の修理を希望する方",
      "・夜間や休日にエアコンが故障し、受付先を探している方",
      "・メーカーや量販店の修理予約が数日〜数週間先と案内された方",
    ],
    table: [
      ["費用の目安", "基本料金8,800円〜（最終費用は現地見積もりで確定）"],
      ["受付時間", "24時間365日（電話 050-5369-1348）"],
      [`${area.prefName}の対応`, "公式サイトに「全国どこでも対応」と記載"],
      ["対応スピード", "公式サイトに「30分以内に駆け付けます」との案内あり"],
      ["確認日", "2026年8月10日（公式サイト調査）"],
    ],
    note: "公式サイトに「出張費用・見積もり料金はいただいておりません」と明記されています。一方で、運営会社名・許認可の記載は公式サイトで確認できないため、依頼時には見積もり書面の確認をおすすめします。",
  });

  const curamaParas = [
    `くらしのマーケットは、地域の事業者を料金と口コミで比較して直接予約できるマッチングサイトです。${
      curama?.count ? `${area.prefName}のエアコン修理カテゴリには${curama.count}件の事業者が登録されています（${D.confirmedAt}）。` : `${area.prefName}のエアコン修理カテゴリページから、地域の登録事業者を探せます。`
    }`,
    `事業者ごとに税込料金・口コミ・評価・返信スピードを比較して選べる点が特徴で、地域密着の事業者も多数登録されています。`,
  ];
  const curamaTable: [string, string][] = [];
  if (curama?.priceGas) curamaTable.push(["ガス漏れ修理の掲載相場", curama.priceGas]);
  if (curama?.priceWater) curamaTable.push(["水漏れ修理の掲載相場", curama.priceWater]);
  curamaTable.push([`${area.prefName}の登録`, curama?.count ? `エアコン修理${curama.count}件（${D.confirmedAt}）` : "都道府県ページで要確認"]);
  curamaTable.push(["予約方法", "Webで事業者を選び直接予約（メッセージでの相談可）"]);
  curamaTable.push(["確認日", `${D.confirmedAt}（${area.prefName}ページ調査）`]);
  repair.push({
    slug: "kurashi-market",
    badge: curama?.count ? `${area.prefName}の修理事業者${curama.count}件を比較` : `${area.prefName}の事業者を料金と口コミで比較`,
    name: "くらしのマーケット",
    category: "マッチングサイト",
    aff: null,
    paras: curamaParas,
    recommend: [
      "・複数の業者を口コミと料金で比較してから決めたい方",
      "・地域密着の個人事業者に費用を抑えて依頼したい方",
      "・急ぎではなく、数日以内の都合の良い日時で予約したい方",
    ],
    table: curamaTable,
    note: "出店者が直接施工する方式で、最大1億円の損害賠償補償制度があります（適用条件あり）。料金・品質は事業者ごとに異なるため、口コミ件数の多い事業者を選ぶことをおすすめします。",
  });

  const mitsuTable: [string, string][] = [];
  if (mitsumoa?.souba) mitsuTable.push(["掲載の料金相場", mitsumoa.souba]);
  mitsuTable.push([`${area.prefName}の登録`, mitsumoa?.pros ? `エアコン修理のプロ${mitsumoa.pros}人（${D.confirmedAt}）` : "都道府県ページで要確認"]);
  if (mitsumoa?.reviews) mitsuTable.push(["口コミ", `${mitsumoa.reviews}件（${D.confirmedAt}）`]);
  mitsuTable.push(["見積もり", "無料・最大5件・契約義務なし（公式明記）"]);
  mitsuTable.push(["確認日", `${D.confirmedAt}（${area.prefName}ページ調査）`]);
  repair.push({
    slug: "mitsumoa",
    badge: mitsumoa?.pros ? `${area.prefName}の修理プロ${mitsumoa.pros}人・無料一括見積もり` : "無料一括見積もり・契約義務なし",
    name: "ミツモア",
    category: "マッチングサイト",
    aff: null,
    paras: [
      `ミツモアは、質問に回答すると最大5件の見積もりが届く一括見積もりサイトです。${
        mitsumoa?.pros ? `${area.prefName}のエアコン修理には${mitsumoa.pros}人のプロが登録されています（${D.confirmedAt}）。` : ""
      }見積もりを受け取った後に依頼するかどうかを選ぶことができ、契約義務はないと公式に明記されています。`,
      "複数社の金額と口コミを比較したい方に適しています。",
    ],
    recommend: [
      "・相場を把握してから依頼を決めたい方",
      "・複数社の見積もりを一度に集めたい方",
      "・口コミ・資格・実績を確認して自分で選びたい方",
    ],
    table: mitsuTable,
    note: "見積もり後の依頼は任意です。手数料は事業者側の負担のため、依頼者は無料で利用できます。",
  });

  repair.push({
    slug: "yamada-repair",
    badge: office ? `${office.name}あり・家電量販店系` : "家電量販店系・他店購入品も相談可",
    name: "ヤマダデンキ 出張修理（ヤマダテクニカルサービス）",
    category: "家電量販店系",
    aff: null,
    paras: [
      `ヤマダデンキの出張修理を担う株式会社ヤマダテクニカルサービスは、訪問修理事業とエアコンクリーニング事業を公式に掲げています。${
        office ? `${area.prefName}には${office.name}（${office.address}）が置かれています。` : `${area.prefName}を担当する拠点は公式の事業所一覧から確認できます。`
      }`,
      "他店で購入したエアコンも、申込フォームに「他社購入」の選択肢があり、相談できます。ただし、消費者向けの料金表は公式サイトに掲載されていないため、費用は申込時に確認が必要です。地域によっては出張修理に対応できない場合がある旨も、公式に明記されています。",
    ],
    recommend: [
      "・ヤマダデンキで購入したエアコンが故障した方（特に保証書をお持ちの方）",
      "・大手系列の窓口に依頼したい方",
      "・急ぎではなく、確実な手配を優先したい方",
    ],
    table: [
      ["費用の目安", "公式サイトに料金表の掲載なし（申込時に確認が必要）"],
      [`${area.prefName}の拠点`, office ? `${office.name}: ${office.address}` : "公式の事業所一覧で確認が必要（地域により対応不可の場合あり）"],
      ["対応範囲", "訪問修理・エアコンクリーニング（他店購入品も相談可）"],
      ["確認日", "2026年8月10日（yamada-ts.co.jp調査）"],
    ],
    note: "保証条件によっては自己負担が発生する場合があります。ヤマダの長期保証に加入している場合は、保証適用の可否を先に確認することで、費用を抑えられる可能性があります。",
  });

  const cleaning: Vendor[] = [];

  if (laboOk) {
    cleaning.push({
      slug: "osoji-labo",
      badge: "大阪・兵庫密着・100%自社作業",
      name: "おそうじLabo",
      category: "エアコンクリーニング（地域密着）",
      aff: "felmat",
      paras: [
        `おそうじLaboは、大阪市中央区南船場に拠点を置く関西密着のエアコンクリーニング専門業者です。${area.type === "city" ? `対応エリアに${area.name}が含まれています（公式サイトの対応エリア記載・2026年8月10日確認）。` : "対応エリアは大阪府の広域と兵庫県の一部（尼崎市・西宮市など）です。"}`,
        "公式サイトでは「100%自社作業」で外注しないと案内されています。料金はノーマルエアコンが初回8,800円、お掃除機能付きが初回17,000円で、大手より低い価格設定です。",
      ],
      recommend: [
        "・地域の専門業者に依頼したい方",
        "・外注ではなく自社スタッフによる作業を希望する方",
        "・LINEで問い合わせたい方（24時間受付）",
      ],
      table: [
        ["費用の目安", "ノーマル初回8,800円／お掃除機能付き初回17,000円（2台目以降割引あり）"],
        ["受付時間", "電話10:00〜19:00（050-8893-3636）・LINEは24時間"],
        ["運営会社", "株式会社ペイストレージ（大阪市中央区南船場1-11-9）"],
        ["確認日", "2026年8月10日（公式サイト調査）"],
      ],
      note: "キャンセル・日時変更は前日までです。当日のキャンセルには見積もり料金の100%がかかると公式に明記されています。",
    });
  }

  if (seifuOk) {
    cleaning.push({
      slug: "seifu-ac",
      badge: seifuCityListed ? `${area.name}は対応エリアに明記・一律料金` : "機種を問わない一律料金の専門店",
      name: "エアコンクリーニング清風",
      category: "エアコンクリーニング（専門店）",
      aff: "a8",
      paras: [
        `清風は、大阪市中央区南船場に本社を置くエアコンクリーニング専門店です（運営: 株式会社アロン）。対応エリアは関東・関西・東海の主要都市圏で、${
          area.type === "city"
            ? seifuCityListed
              ? `公式の対応エリア一覧に${area.name}が明記されています（2026年8月12日確認）。`
              : `${area.prefName}内の対応市町は公式の対応エリア一覧で確認できます。`
            : `${area.prefName}では${seifuList.length}市区町村が公式の対応エリア一覧に列挙されています（2026年8月12日確認）。`
        }`,
        "料金は家庭用壁掛け13,200円・お掃除機能付き18,700円で、機種を問わない一律制です。見積もり後の追加料金が発生しにくい料金体系が特徴で、専門店として年間3万台の実績を掲げています。",
      ],
      recommend: [
        "・機種による追加料金のない料金体系で依頼したい方",
        "・お掃除機能付きなど、構造が複雑な機種のクリーニングを依頼したい方",
      ],
      table: [
        ["費用の目安", "壁掛け13,200円／お掃除機能付き18,700円／天井埋込26,400円（税込・一律）"],
        ["受付時間", "0120-770-102（月〜金9:00〜18:00・サービス実施は年末年始除き無休）"],
        ["運営会社", "株式会社アロン（大阪市中央区南船場1-7-8）"],
        ["確認日", "2026年8月12日（公式対応エリアページ調査）"],
      ],
      note: "キャンセルは前日正午（12時）まで無料で、それ以降は全額のキャンセル料がかかると公式料金ページに明記されています。受付は平日のみのため、希望日がある場合は早めのご相談をおすすめします。",
    });
  }

  if (rOk) {
    cleaning.push({
      slug: "r-cleaning",
      badge: "首都圏対応のクリーニング業者",
      name: "アールクリーニング",
      category: "エアコンクリーニング（首都圏）",
      aff: "a8",
      paras: [
        `アールクリーニングは、東京・埼玉・神奈川・千葉の首都圏に対応エリアを絞ったクリーニング業者です。${area.prefName}は公式の対応エリアに含まれています。`,
        "対応エリアを絞ることで移動効率を高め、価格を抑えたサービスの提供を掲げています。詳しい料金・キャンペーンは公式サイトで確認できます。",
      ],
      recommend: [
        "・首都圏で費用を抑えてクリーニングを依頼したい方",
        "・複数台をまとめて依頼することを検討している方",
      ],
      table: [
        [`${area.prefName}の対応`, "公式の対応エリア（東京・埼玉・神奈川・千葉）に含まれます"],
        ["確認日", "2026年8月12日（公式サイト調査）"],
      ],
      note: "料金・対応条件の詳細は時期により変わるため、公式サイトの最新情報をご確認ください。",
    });
  }

  cleaning.push({
    slug: "duskin-servicemaster",
    badge: "47都道府県に店舗・全国大手",
    name: "ダスキン サービスマスター",
    category: "エアコンクリーニング（全国大手）",
    aff: "a8",
    paras: [
      `ダスキンは47都道府県すべてに店舗を展開する全国大手で、${area.name}でも地域の加盟店がエアコンクリーニングに対応します（店舗により対応状況が異なる場合があります）。内部を分解洗浄し、カビ・ホコリによるニオイや効きの低下の改善を図るサービスです。`,
      "料金は壁掛け1台15,400円で、地域密着の業者より高めの設定ですが、大手の品質管理・サポート体制を評価する声が多く見られます。離れて暮らすご家族の住まいの手配にも利用しやすいサービスです。",
    ],
    recommend: [
      "・価格より大手の品質・サポート体制を優先したい方",
      "・離れて暮らすご家族の住まいのクリーニングを手配したい方",
    ],
    table: [
      ["費用の目安", "壁掛け15,400円／お掃除機能付き26,400円／室外機6,600円（税込）"],
      ["受付", "0120-100-309（Web申込あり・要予約型）"],
      [`${area.prefName}の対応`, "47都道府県すべてに店舗（公式記載・地域の加盟店が担当）"],
      ["確認日", "2026年8月10日（公式サイト調査）"],
    ],
    note: "駐車スペースの確保が必要であること（ない場合は有料駐車場を利用）、対象は幅120cm未満のエアコンであること、土日祝・夜間は追加費用が生じる場合があることなどの条件が、公式に案内されています。",
  });

  return { repair, cleaning };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const { repair, cleaning } = buildVendors(area);
  const n = repair.length + cleaning.length;
  return {
    title: `【2026年最新】${area.name}のエアコン修理業者おすすめ${n}選｜料金相場・口コミの比較`,
    description: `${area.name}でエアコン修理・クリーニングを依頼できる業者${n}社を比較しています。各社公式サイトの確認結果にもとづき、料金・受付時間・${area.prefName}の対応状況を確認日とともに掲載しています。${area.prefName}の登録業者数・料金相場のデータや、悪質業者によるトラブルの防止方法もご説明します。`,
    alternates: { canonical: `/area/${area.slug}/` },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative pb-3 mt-14 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
      {children}
      <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-[var(--color-brand)]" />
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pl-4 mt-8 mb-3 font-bold text-base md:text-lg leading-snug tracking-wide">
      <span className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[2px] bg-[var(--color-cta)]" />
      {children}
    </h4>
  );
}

function VendorBlock({ v, rank }: { v: Vendor; rank: number }) {
  return (
    <div id={v.slug}>
      <h3 className="relative pb-3 mb-5 mt-12 text-lg md:text-xl font-bold leading-snug tracking-wide border-b-4 border-slate-200">
        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-[var(--color-brand)] text-white text-base align-middle">
          {rank}
        </span>
        【{v.badge}】{v.name} <span className="text-sm font-semibold text-slate-500">/ {v.category}</span>
        <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-[var(--color-brand)]" />
      </h3>
      {v.aff === "a8" && <AffiliateBanner slug={v.slug} heading={`${v.name} 公式サイト`} />}
      {v.aff === "felmat" && <FelmatBanner slug={v.slug} heading={`${v.name} 公式サイト`} />}
      <div className="text-[14px] md:text-[15px] leading-[1.9] tracking-wide text-[#333333] space-y-4">
        {v.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <SubHeading>おすすめする方</SubHeading>
      <div className="rounded-lg border border-sky-100 bg-sky-50/60 px-5 md:px-6 py-4">
        <p className="whitespace-pre-line text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333]">
          {v.recommend.join("\n")}
        </p>
      </div>
      <SubHeading>料金・対応情報</SubHeading>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] md:text-[14px]">
          <tbody>
            {v.table.map(([th, td], i) => (
              <tr key={i}>
                <th className="border border-[#D9D9D9] whitespace-nowrap bg-[#EFEFEF] px-4 md:px-6 py-2 text-left font-bold text-[#333333]">{th}</th>
                <td className="border border-[#D9D9D9] whitespace-pre-line px-4 md:px-6 py-2 leading-[1.8] text-[#333333]">{td}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SubHeading>ご利用前の確認事項</SubHeading>
      <p className="text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333]">
        {v.note}{" "}
        <Link href={`/company/${v.slug}/`} className="text-sky-600 font-semibold hover:underline">
          → {v.name}の詳細レビューを見る
        </Link>
      </p>
      <div className="mt-5 mb-2 text-center">
        {v.aff === "a8" && <AffiliateOfficialButton slug={v.slug} className="inline-block" />}
        {v.aff === "felmat" && <FelmatOfficialButton slug={v.slug} />}
      </div>
    </div>
  );
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return null;
  const { repair, cleaning } = buildVendors(area);
  const all = [...repair, ...cleaning];
  const n = all.length;
  const stats = D.prefStats[area.prefSlug];
  const center = D.shohiCenters[area.prefName];
  // 都道府県ページは県内の全都市、都市ページは県内で自分の次から4都市(循環)を出す。
  // 先頭4件固定だと5件目以降の都市がTOPからしか張られず孤立していた。
  const prefCities = ALL_AREAS.filter((a) => a.type === "city" && a.prefSlug === area.prefSlug);
  const myIdx = prefCities.findIndex((a) => a.slug === area.slug);
  const siblingCities = area.type === "pref"
    ? prefCities
    : prefCities.slice(myIdx + 1).concat(prefCities.slice(0, myIdx)).slice(0, 4);
  const prefPage = area.type === "city" ? (area.prefSlug === "osaka" ? { slug: "osaka", name: "大阪府" } : ALL_AREAS.find((a) => a.type === "pref" && a.slug === area.prefSlug)) : null;

  const faqs = [
    {
      q: `${area.name}のエアコン修理の料金相場はどのくらいですか？`,
      a: `マッチングサイトが掲載する${area.prefName}の相場（${D.confirmedAt}）では、${[
        stats?.mitsumoa?.souba ? `ミツモアが${stats.mitsumoa.souba}` : null,
        stats?.curama?.priceGas ? `くらしのマーケットがガス漏れ修理${stats.curama.priceGas}` : null,
        stats?.curama?.priceWater ? `水漏れ修理${stats.curama.priceWater}` : null,
      ].filter(Boolean).join("、") || "公表相場の表示を確認できなかったため、複数社の見積もりの比較をおすすめします"}。症状により費用に幅があるため、施工前に総額の見積もりを書面でご確認ください。`,
    },
    {
      q: `${area.name}で即日対応が可能なエアコン修理業者はありますか？`,
      a: "エアコントラブルセンターは24時間365日受付で、公式サイトに「30分以内に駆け付けます」との案内があります（地域・混雑状況により変動）。7〜8月の繁忙期はどの業者も混み合うため、早い時間帯のご連絡をおすすめします。",
    },
    {
      q: "修理とクリーニングのどちらを依頼すべきか判断できません。",
      a: "「冷えない・ニオイがする・水漏れ」は、フィルターや内部の汚れが原因の場合があり、その場合はクリーニングで改善することがあります。「電源が入らない・エラーコードが出る・異音がする」は故障の可能性が高く、修理が必要です。見分け方は、当サイトの症状別ページでご説明しています。",
    },
    {
      q: "悪質なエアコン修理業者を避ける方法を教えてください。",
      a: `国民生活センターが2026年6月に注意喚起したとおり、ネット広告の「安い」「即日対応」といった表示のみで選ばず、①具体的な症状と作業内容の確認、②複数業者の比較、③総額の書面での確認を行うことが有効です。トラブルの際は、消費者ホットライン188${center ? `（${center.name}: ${center.tel}）` : ""}に相談できます。`,
    },
    {
      q: "賃貸のエアコンが故障した場合、費用は誰が負担しますか？",
      a: "備え付け（設備扱い）のエアコンであれば、原則として大家さん・管理会社の負担です。自己判断で業者を手配すると費用を自己負担することになるおそれがあるため、まず管理会社にご連絡ください。詳しくは「賃貸のエアコン修理費の負担者」でご説明しています。",
    },
  ];

  return (
    <main>
      <Breadcrumb
        items={[
          { name: "エリア別", href: `/area/${area.slug}/` },
          { name: `${area.name}のエアコン修理業者`, href: `/area/${area.slug}/` },
        ]}
      />

      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug tracking-wide mb-4">
            【2026年最新】{area.name}のエアコン修理業者おすすめ{n}選
            <br className="hidden md:block" />
            料金相場・口コミの比較
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.9] text-slate-600">
            {area.name}でエアコンの修理・クリーニングを依頼できる{n}社を、各社公式サイトの確認結果にもとづいて比較しています。
            料金・受付時間・{area.prefName}の対応状況は、いずれも公式情報にもとづき、確認日を記載しています。
            国民生活センターが2026年6月に注意喚起した「ネット広告型の修理トラブル」の防止方法もあわせてご説明します。
          </p>
          <p className="mt-3 text-[11px] text-slate-400">本ページはプロモーション（PR）を含みます。</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <SectionHeading>{area.name}で依頼できる{n}社の比較一覧</SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] md:text-[13px]">
            <thead>
              <tr>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">業者名</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">タイプ</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2">費用の目安</th>
              </tr>
            </thead>
            <tbody>
              {all.map((v) => (
                <tr key={v.slug}>
                  <td className="border border-[#D9D9D9] px-3 py-2 font-semibold whitespace-nowrap">
                    <a href={`#${v.slug}`} className="text-sky-600 hover:underline">{v.name}</a>
                  </td>
                  <td className="border border-[#D9D9D9] px-3 py-2 whitespace-nowrap">{v.category}</td>
                  <td className="border border-[#D9D9D9] px-3 py-2">{v.table[0][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          ※各社公式サイト・掲載ページの確認値（確認日は各表に記載）。最新の料金・対応可否は各公式サイトでご確認ください。
        </p>

        <SectionHeading>{area.name}でエアコン修理を依頼できる業者{repair.length}選</SectionHeading>
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-slate-600">
          「電源が入らない」「エラーコードが出る」「異音がする」など故障が疑われる場合は、修理に対応する業者・窓口へご依頼ください。
        </p>
        {repair.map((v, i) => (
          <VendorBlock key={v.slug} v={v} rank={i + 1} />
        ))}

        <SectionHeading>{area.name}のクリーニング業者{cleaning.length}選（クリーニングで改善する症状）</SectionHeading>
        <div className="mt-4 rounded-lg border-2 border-orange-200 bg-orange-50/60 px-5 py-4 text-[13px] md:text-[14px] leading-[1.8]">
          <p className="font-bold text-orange-600 mb-1">修理を依頼する前の確認事項</p>
          <p>
            「冷えが弱い」「カビ臭い」「送風口から水が飛ぶ」といった症状は、内部のカビ・ホコリの詰まりが原因の場合があります。
            その場合は、修理ではなく<strong>クリーニングで改善する</strong>ことがあり、費用も抑えられます。
            見分け方は<Link href="/symptom/not-cooling/" className="text-sky-600 font-semibold hover:underline">症状別ページ</Link>でご説明しています。
          </p>
        </div>
        {cleaning.map((v, i) => (
          <VendorBlock key={v.slug} v={v} rank={i + 1} />
        ))}

        {(stats?.curama?.priceGas || stats?.mitsumoa?.souba) && (
          <>
            <SectionHeading>{area.prefName}のエアコン修理 料金相場データ</SectionHeading>
            <p className="text-[13px] md:text-[14px] leading-[1.8] text-slate-600 mb-4">
              {area.prefName}の事業者を掲載するマッチングサイトが公表している相場（{D.confirmedAt}の掲載値）です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[12px] md:text-[13px]">
                <thead>
                  <tr>
                    <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">項目</th>
                    <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2">掲載値</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.curama?.priceGas && (
                    <tr>
                      <td className="border border-[#D9D9D9] px-3 py-2 font-semibold whitespace-nowrap">ガス漏れ修理（くらしのマーケット）</td>
                      <td className="border border-[#D9D9D9] px-3 py-2">{stats.curama.priceGas}</td>
                    </tr>
                  )}
                  {stats?.curama?.priceWater && (
                    <tr>
                      <td className="border border-[#D9D9D9] px-3 py-2 font-semibold whitespace-nowrap">水漏れ修理（くらしのマーケット）</td>
                      <td className="border border-[#D9D9D9] px-3 py-2">{stats.curama.priceWater}</td>
                    </tr>
                  )}
                  {stats?.mitsumoa?.souba && (
                    <tr>
                      <td className="border border-[#D9D9D9] px-3 py-2 font-semibold whitespace-nowrap">修理の料金相場（ミツモア）</td>
                      <td className="border border-[#D9D9D9] px-3 py-2">{stats.mitsumoa.souba}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              ※{D.confirmedAt}の各サイト掲載値です。実際の費用は症状・機種・事業者により変動します。詳しくは
              <Link href="/cost/repair-price/" className="text-sky-600 hover:underline">修理費用の相場</Link>をご覧ください。
            </p>
          </>
        )}

        <SectionHeading>エアコン修理に関する相談件数は5年で2倍以上に増加しています</SectionHeading>
        <div className="text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333] space-y-4">
          <p>
            国民生活センターは2026年6月3日、「エアコン修理のトラブルに注意！」という注意喚起を公表しました。
            全国の消費生活センターに寄せられたエアコン修理の相談は
            <strong className="font-bold underline decoration-orange-300 decoration-[3px] underline-offset-4">2021年度の451件から2025年度は1,251件へと、5年で2倍以上に増加</strong>
            しています。典型的な事例は「ネット検索した即日対応業者に依頼し、高額料金を支払ったが直っていない」というものです。トラブルを防ぐためのポイントは次の3つです。
          </p>
          <div className="rounded-lg border border-sky-100 bg-sky-50/60 px-5 py-4">
            <p className="whitespace-pre-line leading-[2.0]">
              {"① 依頼前に症状と作業内容を具体的に確認する\n② 1社で即決せず、複数の業者・相場と比較する\n③ 作業前に総額の見積もりを書面（メール可）で受け取る"}
            </p>
          </div>
          <p>
            本ページに掲載している各社の料金・条件には、確認日を記載しています。トラブルの際は
            <strong>消費者ホットライン188</strong>
            {center ? <>（{area.prefName}の窓口: {center.name} {center.tel}）</> : null}
            に相談できます。
            <span className="text-[11px] text-slate-400">（出典: 国民生活センター 2026年6月3日公表）</span>
          </p>
        </div>

        <SectionHeading>{area.name}のエアコン修理 よくある質問</SectionHeading>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white group">
              <summary className="px-5 py-4 cursor-pointer font-bold text-[14px] md:text-[15px] hover:bg-slate-50">
                Q{i + 1}. {f.q}
              </summary>
              <div className="px-5 pb-4 pt-2 text-[13px] md:text-[14px] leading-[1.9] text-[#333333] border-t border-slate-100">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-slate-50 p-6">
          <p className="font-bold mb-3">関連ページ</p>
          <ul className="space-y-2 text-[13px] md:text-[14px]">
            {prefPage && (
              <li>
                <Link href={`/area/${prefPage.slug}/`} className="text-sky-600 font-semibold hover:underline">
                  {prefPage.name}全域のエアコン修理業者まとめ
                </Link>
              </li>
            )}
            {siblingCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/area/${c.slug}/`} className="text-sky-600 font-semibold hover:underline">
                  {c.name}のエアコン修理業者おすすめ
                </Link>
              </li>
            ))}
            <li>
              <Link href="/ranking/" className="text-sky-600 font-semibold hover:underline">エアコン修理業者おすすめランキング【全国版】</Link>
            </li>
            <li>
              <Link href="/cost/repair-price/" className="text-sky-600 font-semibold hover:underline">エアコン修理の料金相場</Link>
            </li>
            <li>
              <Link href="/guide/rental-aircon-repair/" className="text-sky-600 font-semibold hover:underline">賃貸のエアコン修理費の負担者</Link>
            </li>
          </ul>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
