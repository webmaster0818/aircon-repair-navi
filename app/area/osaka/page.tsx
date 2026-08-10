import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";
import FelmatBanner from "@/app/components/FelmatBanner";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  title:
    "【2026年最新】大阪のエアコン修理業者おすすめ7選！料金・口コミを徹底比較",
  description:
    "大阪府でエアコン修理・クリーニングを頼める業者7社を徹底比較。全社の公式サイトを2026年8月10日に実査し、料金・受付時間・大阪の対応エリアを確認日つきで掲載。症状別の料金相場や悪質業者トラブルの防ぎ方も解説します。",
  alternates: { canonical: "/area/osaka" },
};

const SURVEY_DATE = "2026年8月10日";

/* ============ 掲載データ（全て2026-08-10公式実査値のみ） ============ */

type Company = {
  slug: string;
  badge: string; // h3先頭の【】内
  name: string;
  category: string;
  aff: "a8" | "felmat" | null;
  intro: (string | { em: string })[][]; // 段落ごとの文断片（emはマーカー強調）
  recommend: string[];
  table: [string, string][];
  reviewNote: string;
  officialNote?: string;
};

const repairCompanies: Company[] = [
  {
    slug: "aircon-trouble-center",
    badge: "24時間365日受付・全国対応",
    name: "エアコントラブルセンター",
    category: "エアコン修理（紹介型）",
    aff: "felmat",
    intro: [
      [
        "エアコントラブルセンターは、",
        { em: "全国2,000社以上の加盟店ネットワークを持つエアコン修理の受付窓口" },
        "です。公式サイトでは「全国どこでも対応」と案内されており、大阪府内の修理依頼にも受付対応しています。",
      ],
      [
        "受付は",
        { em: "24時間365日" },
        "。公式サイトには「30分以内に駆け付けます」という案内もあり（地域・混雑状況により変動）、真夏の「今すぐ来てほしい」というニーズに向いた窓口です。料金は",
        { em: "基本料金8,800円〜" },
        "で、最終的な費用は現地見積もりで確定します。",
      ],
      [
        "なお、実際の施工は加盟店が行う紹介型サービスのため、作業品質や保証の細部は担当加盟店により異なります。施工前の見積もり内容を書面やメールで残しておくと安心です。",
      ],
    ],
    recommend: [
      "・今日・明日中に修理に来てほしい人",
      "・夜間や休日にエアコンが故障して受付先を探している人",
      "・メーカーや量販店の修理予約が数日〜数週間先と言われた人",
    ],
    table: [
      ["料金目安", "基本料金8,800円〜（最終費用は現地見積もりで確定）"],
      ["受付時間", "24時間365日（電話 050-5369-1348）"],
      ["大阪の対応", "公式サイトに「全国どこでも対応」と記載"],
      ["対応スピード", "公式サイトに「30分以内に駆け付けます」の案内あり"],
      ["運営形態", "紹介型（全国2,000社以上の加盟店が施工）"],
      ["確認日", SURVEY_DATE + "（公式サイト実査）"],
    ],
    reviewNote:
      "公式サイトに「出張費用・見積もり料金はいただいておりません」と明記されており、施工前のキャンセルは無料とされています。一方で運営会社名・許認可の記載は公式サイトで確認できないため、依頼時は見積もり書面の確認をおすすめします。詳細は当サイトの個別レビューで正直にまとめています。",
  },
  {
    slug: "kurashi-market",
    badge: "大阪の修理事業者65店を比較",
    name: "くらしのマーケット",
    category: "マッチングサイト",
    aff: null,
    intro: [
      [
        "くらしのマーケットは、地域の事業者を料金と口コミで比較して直接予約できるマッチングサイトです。",
        { em: "大阪府のエアコン修理カテゴリには65店舗が登録" },
        "されており（2026年8月時点）、口コミは3,973件・平均4.88と豊富です。",
      ],
      [
        "事業者ごとに",
        { em: "税込料金・口コミ・評価・返信スピードを見比べて選べる" },
        "のが最大の強みで、大阪市内の地域密着事業者も多数見つかります。エアコンクリーニングのカテゴリでは大阪府内740件の登録があり、壁掛けはおおむね8,000円台からの価格帯です。",
      ],
    ],
    recommend: [
      "・複数の業者を口コミと料金で見比べてから決めたい人",
      "・地域密着の個人事業者に割安に頼みたい人",
      "・急ぎではなく、数日以内に都合の良い日時で予約したい人",
    ],
    table: [
      ["料金目安", "ガス漏れ修理16,000〜19,000円／水漏れ修理11,000〜20,000円（サイト掲載の大阪相場）"],
      ["登録事業者", "大阪府のエアコン修理65店舗・クリーニング740件（2026年8月時点）"],
      ["口コミ", "大阪の修理カテゴリで3,973件・平均4.88（2026年8月時点）"],
      ["予約方法", "Webで事業者を選んで直接予約（メッセージ相談可）"],
      ["確認日", SURVEY_DATE + "（大阪府ページ実査）"],
    ],
    reviewNote:
      "出店者が直接施工する方式で、最大1億円の損害賠償補償制度があります（適用条件あり）。料金・品質は事業者ごとに異なるため、口コミ件数の多い事業者を選ぶのが定石です。",
  },
  {
    slug: "mitsumoa",
    badge: "大阪の修理プロ183人・無料一括見積もり",
    name: "ミツモア",
    category: "マッチングサイト",
    aff: null,
    intro: [
      [
        "ミツモアは、質問に答えるだけで最大5件の見積もりが届く一括見積もりサイトです。",
        { em: "大阪府のエアコン修理には183人のプロが登録" },
        "しており（2026年8月時点）、料金相場は5,000〜14,950円と表示されています。",
      ],
      [
        "見積もりを受け取ってから依頼するかどうかを選べて、",
        { em: "契約義務はない" },
        "と公式に明記されています。複数社の金額と口コミを並べて比較したい人に向いています。",
      ],
    ],
    recommend: [
      "・とりあえず相場感を知ってから依頼を決めたい人",
      "・複数社の見積もりを一度に集めたい人",
      "・口コミ・資格・実績を見て自分で選びたい人",
    ],
    table: [
      ["料金目安", "修理相場5,000〜14,950円（サイト掲載の大阪相場）"],
      ["登録プロ", "大阪府のエアコン修理183人・クリーニング768人（2026年8月時点）"],
      ["口コミ", "大阪の修理カテゴリで3,049件（2026年8月時点）"],
      ["見積もり", "無料・最大5件・契約義務なし（公式明記）"],
      ["確認日", SURVEY_DATE + "（大阪府ページ実査）"],
    ],
    reviewNote:
      "見積もり後の依頼は任意で、公式にも「契約義務はない」と明記されています。手数料は事業者側負担のため、依頼者は無料で使えます。",
  },
  {
    slug: "yamada-repair",
    badge: "なんばに大阪支社・量販店系の安心感",
    name: "ヤマダデンキ 出張修理（ヤマダテクニカルサービス）",
    category: "家電量販店系",
    aff: null,
    intro: [
      [
        "ヤマダデンキの出張修理を担う株式会社ヤマダテクニカルサービスは、",
        { em: "大阪市浪速区（LABI1 LIFE SELECTなんば店内）に大阪支社" },
        "を置いています。訪問修理事業とエアコンクリーニング事業を公式に掲げており、量販店系ならではの安心感があります。",
      ],
      [
        "他店で購入したエアコンでも出張修理の申込フォームに「他社購入」の選択肢があり相談可能です。ただし",
        { em: "消費者向けの料金表は公式サイトに掲載されていない" },
        "ため、費用は申込時の確認が必要です。地域によっては出張修理に対応できない場合がある旨も公式に明記されています。",
      ],
    ],
    recommend: [
      "・ヤマダデンキで購入したエアコンが故障した人（保証書がある人は特に）",
      "・名前を知らない業者より大手系列に頼みたい人",
      "・急ぎではなく、確実な手配を優先したい人",
    ],
    table: [
      ["料金目安", "公式サイトに料金表の掲載なし（申込時に要確認）"],
      ["大阪拠点", "大阪支社: 大阪市浪速区難波中2-11-35 LABI1 LIFE SELECTなんば店内"],
      ["電話", "06-6536-8634（大阪支社代表番号）"],
      ["対応範囲", "訪問修理・エアコンクリーニング（他店購入品も相談可）"],
      ["確認日", SURVEY_DATE + "（yamada-ts.co.jp実査）"],
    ],
    reviewNote:
      "保証条件によっては自己負担が発生する場合があります。ヤマダの長期保証に入っている場合は、まず保証適用の可否を確認するのが最も安く済む可能性があります。",
  },
];

const cleaningCompanies: Company[] = [
  {
    slug: "osoji-labo",
    badge: "大阪特化・南船場拠点・100%自社作業",
    name: "おそうじLabo",
    category: "エアコンクリーニング（大阪密着）",
    aff: "felmat",
    intro: [
      [
        "おそうじLaboは、",
        { em: "大阪市中央区南船場に拠点を置く大阪密着のエアコンクリーニング専門業者" },
        "です。対応エリアは大阪市全域と東大阪・枚方・豊中・堺・吹田・高槻など府内約25市町、兵庫県の一部（尼崎・西宮・宝塚など）です。",
      ],
      [
        "公式サイトでは",
        { em: "「100%自社作業」で外注しない" },
        "と案内されており、作業品質のばらつきが生じにくいのが特徴です。料金はノーマルエアコンが",
        { em: "初回8,800円" },
        "、お掃除機能付きが初回17,000円と、大手より一段安い価格設定です。",
      ],
    ],
    recommend: [
      "・大阪市内・北摂・東大阪あたりで地元の専門業者に頼みたい人",
      "・外注ではなく自社スタッフに来てほしい人",
      "・LINEで気軽に問い合わせたい人（24時間受付）",
    ],
    table: [
      ["料金目安", "ノーマル初回8,800円／お掃除機能付き初回17,000円（2台目以降割引あり）"],
      ["受付時間", "電話10:00〜19:00（050-8893-3636）・LINEは24時間"],
      ["大阪の対応", "大阪市全域＋府内約25市町（＋兵庫県の一部）"],
      ["運営会社", "株式会社ペイストレージ（大阪市中央区南船場1-11-9）"],
      ["確認日", SURVEY_DATE + "（公式サイト実査）"],
    ],
    reviewNote:
      "キャンセル・日時変更は前日まで。当日の都合によるキャンセルは見積もり料金の100%がかかると公式に明記されているため、予定が不確実な場合は前日までに連絡しましょう。",
  },
  {
    slug: "seifu-ac",
    badge: "大阪本社・機種問わず一律料金",
    name: "エアコンクリーニング清風",
    category: "エアコンクリーニング（専門店）",
    aff: "a8",
    intro: [
      [
        "清風は、",
        { em: "大阪市中央区南船場に本社を置くエアコンクリーニング専門店" },
        "です（運営: 株式会社アロン）。対応エリアは大阪市24区・堺市をはじめ府内約35市町を公式に列挙しており、大阪はまさに本拠地です。",
      ],
      [
        "料金は",
        { em: "家庭用壁掛け13,200円・お掃除機能付き18,700円の機種を問わない一律制" },
        "で、見積もり後の追加料金が発生しにくい明朗会計が特徴。専門店として年間3万台の実績を掲げています。",
      ],
    ],
    recommend: [
      "・機種による追加料金なしの明朗会計で頼みたい人",
      "・お掃除機能付きなど複雑な機種のクリーニングを頼みたい人",
      "・地元大阪の専門店に頼みたい人",
    ],
    table: [
      ["料金目安", "壁掛け13,200円／お掃除機能付き18,700円／天井埋込26,400円（税込・一律）"],
      ["受付時間", "0120-770-102（月〜金9:00〜18:00・サービス実施は年末年始除き無休）"],
      ["大阪の対応", "大阪市24区・堺市ほか府内約35市町を公式に列挙"],
      ["運営会社", "株式会社アロン（大阪市中央区南船場1-7-8）"],
      ["確認日", SURVEY_DATE + "（公式サイト実査）"],
    ],
    reviewNote:
      "キャンセルは前日正午（12時）まで無料。それ以降は全額のキャンセル料が公式料金ページに明記されています。受付が平日のみのため、希望日は早めの相談がおすすめです。",
  },
  {
    slug: "duskin-servicemaster",
    badge: "大阪府内104店舗・全国大手",
    name: "ダスキン サービスマスター",
    category: "エアコンクリーニング（全国大手）",
    aff: "a8",
    intro: [
      [
        "ダスキンは",
        { em: "大阪府内に104店舗（全事業）を展開する全国大手" },
        "で、47都道府県すべてに店舗があります。エアコンクリーニングは内部を分解洗浄するサービスで、カビ・ホコリによるニオイや効きの低下の改善を目指します。",
      ],
      [
        "料金は壁掛け1台15,400円と地域密着業者より高めですが、",
        { em: "大手ならではの品質管理・サポート体制" },
        "を評価する声が多く見られます。実家など離れた場所の手配にも使いやすいのが強みです。",
      ],
    ],
    recommend: [
      "・価格より大手の安心感・品質を優先したい人",
      "・離れて暮らす家族の家のクリーニングを手配したい人",
      "・抗菌コートや室外機洗浄もまとめて頼みたい人",
    ],
    table: [
      ["料金目安", "壁掛け15,400円／お掃除機能付き26,400円／室外機6,600円（税込）"],
      ["受付", "0120-100-309（Web申込あり・要予約型）"],
      ["大阪の対応", "大阪府内104店舗（全事業・地域の加盟店が担当）"],
      ["特記事項", "実際の作業は地域の加盟店が担当（店舗により対応状況が異なる場合あり）"],
      ["確認日", SURVEY_DATE + "（公式サイト実査）"],
    ],
    reviewNote:
      "駐車スペースの確保が必要（なければ有料駐車場を利用）、対象は幅120cm未満のエアコン、土日祝・夜間は追加費用が生じる場合がある、といった条件が公式に案内されています。",
  },
];

/* ============ FAQ ============ */

const faqs = [
  {
    q: "大阪のエアコン修理の料金相場はいくらですか？",
    a: "マッチングサイト2社が掲載する大阪の相場（2026年8月時点）では、ミツモアが5,000〜14,950円、くらしのマーケットがガス漏れ修理16,000〜19,000円・水漏れ修理11,000〜20,000円です。症状によって幅があるため、施工前に総額の見積もりを書面で確認するのが確実です。",
  },
  {
    q: "大阪で即日対応してくれるエアコン修理業者はありますか？",
    a: "エアコントラブルセンターは24時間365日受付で、公式サイトに「30分以内に駆け付けます」という案内があります（地域・混雑状況により変動）。ただし7〜8月の繁忙期はどの業者も混み合うため、朝いちばんの連絡が有利です。",
  },
  {
    q: "修理とクリーニング、どちらを頼めばいいか分かりません。",
    a: "「冷えない・ニオイがする・水漏れ」はフィルターや内部の汚れが原因のケースがあり、その場合はクリーニング（8,800円〜）で改善することがあります。「電源が入らない・エラーコードが出る・異音がする」は故障の可能性が高く修理が必要です。当サイトの症状別ページで見分け方を解説しています。",
  },
  {
    q: "悪質なエアコン修理業者を避けるにはどうすればいいですか？",
    a: "国民生活センターが2026年6月に注意喚起したとおり、ネット広告の「安い」「即日対応」だけで選ばず、①具体的な症状と作業内容の確認、②複数業者の比較、③総額の書面確認、を行うのが有効です。困ったときは消費者ホットライン188（大阪市消費者センター 06-6614-7521）に相談できます。",
  },
  {
    q: "賃貸マンションのエアコンが故障した場合、費用は誰が負担しますか？",
    a: "備え付け（設備扱い）のエアコンなら原則として大家さん・管理会社の負担です。自己判断で業者を呼ぶと費用を自己負担することになりかねないため、まず管理会社に連絡してください。前の入居者が残した「残置物」扱いの場合や、自分で設置した場合は入居者負担になるのが一般的です。",
  },
];

/* ============ UI部品（BEST-FITエリア記事のUIをサイト配色で再現） ============ */

function CompanyHeading({ rank, badge, name, category }: { rank: number; badge: string; name: string; category: string }) {
  return (
    <h3 className="relative pb-3 mb-5 mt-12 text-lg md:text-xl font-bold leading-snug tracking-wide border-b-4 border-slate-200">
      <span className="inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-base align-middle">
        {rank}
      </span>
      【{badge}】{name} <span className="text-sm font-semibold text-slate-500">/ {category}</span>
      <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
    </h3>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pl-4 mt-8 mb-3 font-bold text-base md:text-lg leading-snug tracking-wide">
      <span className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[2px] bg-orange-400" />
      {children}
    </h4>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-bold underline decoration-orange-300 decoration-[3px] underline-offset-4">
      {children}
    </strong>
  );
}

function CompanyBlock({ c, rank }: { c: Company; rank: number }) {
  return (
    <div id={c.slug}>
      <CompanyHeading rank={rank} badge={c.badge} name={c.name} category={c.category} />

      {/* アフィリ画像バナー（BEST-FITの店舗画像スロットに相当） */}
      {c.aff === "a8" && (
        <AffiliateBanner slug={c.slug} heading={`${c.name} 公式サイト`} />
      )}
      {c.aff === "felmat" && (
        <FelmatBanner slug={c.slug} heading={`${c.name} 公式サイト`} />
      )}

      {/* 紹介文 */}
      <div className="text-[14px] md:text-[15px] leading-[1.9] tracking-wide text-[#333333] space-y-4">
        {c.intro.map((para, i) => (
          <p key={i}>
            {para.map((frag, j) =>
              typeof frag === "string" ? (
                <span key={j}>{frag}</span>
              ) : (
                <Em key={j}>{frag.em}</Em>
              )
            )}
          </p>
        ))}
      </div>

      {/* こんな人におすすめ */}
      <SubHeading>こんな人におすすめ</SubHeading>
      <div className="rounded-lg border border-sky-100 bg-sky-50/60 px-5 md:px-6 py-4">
        <p className="whitespace-pre-line text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333]">
          {c.recommend.join("\n")}
        </p>
      </div>

      {/* 料金・対応情報 */}
      <SubHeading>料金・大阪の対応情報</SubHeading>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] md:text-[14px]">
          <tbody>
            {c.table.map(([th, td], i) => (
              <tr key={i}>
                <th className="border border-[#D9D9D9] whitespace-nowrap bg-[#EFEFEF] px-4 md:px-6 py-2 text-left font-bold text-[#333333]">
                  {th}
                </th>
                <td className="border border-[#D9D9D9] whitespace-pre-line px-4 md:px-6 py-2 leading-[1.8] text-[#333333]">
                  {td}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 口コミ・注意点 */}
      <SubHeading>利用前に知っておきたいポイント</SubHeading>
      <p className="text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333]">
        {c.reviewNote}
        {" "}
        <Link href={`/company/${c.slug}/`} className="text-sky-600 font-semibold hover:underline">
          → {c.name}の詳細レビューを見る
        </Link>
      </p>

      {/* CTAボタン */}
      <div className="mt-5 mb-2 text-center">
        {c.aff === "a8" && <AffiliateOfficialButton slug={c.slug} className="inline-block" />}
        {c.aff === "felmat" && <FelmatOfficialButton slug={c.slug} />}
      </div>
    </div>
  );
}

/* ============ ページ本体 ============ */

export default function OsakaAreaPage() {
  const all = [...repairCompanies, ...cleaningCompanies];
  return (
    <main>
      <Breadcrumb
        items={[
          { name: "エリア別", href: "/area/osaka/" },
          { name: "大阪のエアコン修理業者", href: "/area/osaka/" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug tracking-wide mb-4">
            【2026年最新】大阪のエアコン修理業者おすすめ7選！
            <br className="hidden md:block" />
            料金・口コミを徹底比較
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.9] text-slate-600">
            大阪府でエアコンの修理・クリーニングを頼める7社を、
            <strong>全社の公式サイトを{SURVEY_DATE}に実査</strong>
            したうえで比較しました。料金・受付時間・大阪の対応エリアはすべて確認日つきの公式情報です。
            国民生活センターが2026年6月に注意喚起した「ネット広告型の修理トラブル」の防ぎ方もあわせて解説します。
          </p>
          <p className="mt-3 text-[11px] text-slate-400">本ページはプロモーション（PR）を含みます。</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* 早見比較表 */}
        <h2 className="relative pb-3 mt-10 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          大阪で頼める7社の早見比較
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] md:text-[13px]">
            <thead>
              <tr>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">業者名</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">タイプ</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">料金目安</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">大阪の対応</th>
              </tr>
            </thead>
            <tbody>
              {all.map((c) => (
                <tr key={c.slug}>
                  <td className="border border-[#D9D9D9] px-3 py-2 font-semibold whitespace-nowrap">
                    <a href={`#${c.slug}`} className="text-sky-600 hover:underline">
                      {c.name}
                    </a>
                  </td>
                  <td className="border border-[#D9D9D9] px-3 py-2 whitespace-nowrap">{c.category}</td>
                  <td className="border border-[#D9D9D9] px-3 py-2">{c.table[0][1]}</td>
                  <td className="border border-[#D9D9D9] px-3 py-2">{c.table.find(([k]) => k.includes("大阪"))?.[1] ?? c.table[1][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          ※各社{SURVEY_DATE}時点の公式サイト・掲載ページ確認値。最新の料金・対応可否は各公式サイトでご確認ください。
        </p>

        {/* 修理セクション */}
        <h2 className="relative pb-3 mt-14 mb-2 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          大阪でエアコン修理を頼める業者4選
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-slate-600">
          「電源が入らない」「エラーコードが出る」「異音がする」など故障が疑われる場合は、修理対応の業者・窓口へ。
        </p>
        {repairCompanies.map((c, i) => (
          <CompanyBlock key={c.slug} c={c} rank={i + 1} />
        ))}

        {/* クリーニングセクション */}
        <h2 className="relative pb-3 mt-16 mb-2 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          その症状、クリーニングで直るかも？大阪のクリーニング業者3選
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <div className="mt-4 rounded-lg border-2 border-orange-200 bg-orange-50/60 px-5 py-4 text-[13px] md:text-[14px] leading-[1.8]">
          <p className="font-bold text-orange-600 mb-1">💡 修理を呼ぶ前にチェック</p>
          <p>
            「冷えが弱い」「カビ臭い」「送風口から水が飛ぶ」は、内部のカビ・ホコリ詰まりが原因のケースがあります。
            その場合は修理ではなく<strong>クリーニング（8,800円〜）で改善する</strong>ことがあり、費用も抑えられます。
            見分け方は<Link href="/symptom/not-cooling/" className="text-sky-600 font-semibold hover:underline">症状別ページ</Link>で解説しています。
          </p>
        </div>
        {cleaningCompanies.map((c, i) => (
          <CompanyBlock key={c.slug} c={c} rank={i + 1} />
        ))}

        {/* 症状別料金相場 */}
        <h2 className="relative pb-3 mt-16 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          大阪のエアコン修理 症状別の料金相場
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-slate-600 mb-4">
          大阪府の事業者を掲載するマッチングサイト2社が公表している相場（2026年8月時点の掲載値）です。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] md:text-[13px]">
            <thead>
              <tr>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">症状・作業</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">くらしのマーケット掲載相場</th>
                <th className="border border-[#D9D9D9] bg-[#EFEFEF] px-3 py-2 whitespace-nowrap">ミツモア掲載相場</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#D9D9D9] px-3 py-2 font-semibold">ガス漏れ修理</td>
                <td className="border border-[#D9D9D9] px-3 py-2">16,000〜19,000円</td>
                <td className="border border-[#D9D9D9] px-3 py-2 whitespace-pre-line">修理全体で5,000〜14,950円{"\n"}（症状別内訳: ガス漏れ12,800〜17,000円）</td>
              </tr>
              <tr>
                <td className="border border-[#D9D9D9] px-3 py-2 font-semibold">水漏れ修理</td>
                <td className="border border-[#D9D9D9] px-3 py-2">11,000〜20,000円</td>
                <td className="border border-[#D9D9D9] px-3 py-2">ドレンホース詰まり 9,000〜13,000円</td>
              </tr>
              <tr>
                <td className="border border-[#D9D9D9] px-3 py-2 font-semibold">クリーニング（壁掛け）</td>
                <td className="border border-[#D9D9D9] px-3 py-2">6,000円〜（大阪の最安掲載値）</td>
                <td className="border border-[#D9D9D9] px-3 py-2">7,000〜8,800円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          ※両社の大阪府ページに{SURVEY_DATE}時点で表示されていた相場。実際の費用は症状・機種・事業者により変動します。詳しくは
          <Link href="/cost/repair-price/" className="text-sky-600 hover:underline">修理料金の完全ガイド</Link>へ。
        </p>

        {/* 注意喚起 */}
        <h2 className="relative pb-3 mt-16 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          知っておきたい：エアコン修理トラブルが5年で2倍以上に
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <div className="text-[13px] md:text-[14px] leading-[1.9] tracking-wide text-[#333333] space-y-4">
          <p>
            国民生活センターは2026年6月3日、「エアコン修理のトラブルに注意！」という注意喚起を公表しました。
            全国の消費生活センターに寄せられたエアコン修理の相談は
            <Em>2021年度の451件から2025年度は1,251件へと、5年で2倍以上に増加</Em>
            しています。大阪市消費者センターも同じ内容を注意喚起として掲載中です（いずれも{SURVEY_DATE}確認）。
          </p>
          <p>典型的なトラブルは「ネット検索した即日対応業者に依頼し、高額料金を支払ったが直っていない」「再修理を頼みたいが業者と連絡が取れない」というもの。防ぐポイントは次の3つです。</p>
          <div className="rounded-lg border border-sky-100 bg-sky-50/60 px-5 py-4">
            <p className="whitespace-pre-line leading-[2.0]">
              {"① 依頼前に症状と作業内容を具体的に確認する\n② 1社で即決せず、複数の業者・相場と比較する\n③ 作業前に総額の見積もりを書面（メール可）で受け取る"}
            </p>
          </div>
          <p>
            当ページの掲載各社の料金・条件はすべて確認日つきで掲載しています。困ったときは
            <strong>消費者ホットライン188</strong>（大阪市消費者センター: 06-6614-7521）に相談できます。
            <span className="text-[11px] text-slate-400">
              （出典: 国民生活センター 2026年6月3日公表・大阪市消費者センター掲載ページ、{SURVEY_DATE}確認）
            </span>
          </p>
        </div>

        {/* テーマ別 */}
        <h2 className="relative pb-3 mt-16 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          目的別：大阪でエアコン業者を選ぶなら
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-[13px] md:text-[14px] leading-[1.8]">
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-bold text-sky-600 mb-2">🚨 今日中に直したいなら</p>
            <p>
              24時間365日受付の<a href="#aircon-trouble-center" className="text-sky-600 font-semibold hover:underline">エアコントラブルセンター</a>。
              公式サイトに「30分以内に駆け付けます」の案内があります（混雑状況により変動）。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-bold text-sky-600 mb-2">🏠 大阪の地元業者に頼みたいなら</p>
            <p>
              大阪特化の<a href="#osoji-labo" className="text-sky-600 font-semibold hover:underline">おそうじLabo</a>（クリーニング）や、
              <a href="#kurashi-market" className="text-sky-600 font-semibold hover:underline">くらしのマーケット</a>で大阪の事業者65店を比較。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-bold text-sky-600 mb-2">🏢 大手の安心感で選ぶなら</p>
            <p>
              大阪府内104店舗の<a href="#duskin-servicemaster" className="text-sky-600 font-semibold hover:underline">ダスキン</a>、
              なんばに大阪支社がある<a href="#yamada-repair" className="text-sky-600 font-semibold hover:underline">ヤマダデンキ出張修理</a>。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-bold text-sky-600 mb-2">💰 料金を比較して安く頼みたいなら</p>
            <p>
              <a href="#mitsumoa" className="text-sky-600 font-semibold hover:underline">ミツモア</a>で最大5件の無料見積もり、
              明朗会計なら一律料金の<a href="#seifu-ac" className="text-sky-600 font-semibold hover:underline">清風</a>。
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="relative pb-3 mt-16 mb-6 text-xl md:text-2xl font-bold tracking-wide border-b-4 border-slate-200">
          大阪のエアコン修理 よくある質問
          <span className="absolute left-0 bottom-[-4px] h-[4px] w-[120px] rounded-l-[2px] bg-gradient-to-r from-sky-500 to-cyan-400" />
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white group">
              <summary className="px-5 py-4 cursor-pointer font-bold text-[14px] md:text-[15px] hover:bg-slate-50">
                Q{i + 1}. {f.q}
              </summary>
              <div className="px-5 pb-4 pt-2 text-[13px] md:text-[14px] leading-[1.9] text-[#333333] border-t border-slate-100">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        {/* 関連リンク */}
        <div className="mt-14 rounded-xl bg-slate-50 p-6">
          <p className="font-bold mb-3">あわせて読みたい</p>
          <ul className="space-y-2 text-[13px] md:text-[14px]">
            <li>
              <Link href="/ranking/" className="text-sky-600 font-semibold hover:underline">エアコン修理業者おすすめランキング【全国版】</Link>
            </li>
            <li>
              <Link href="/cost/repair-price/" className="text-sky-600 font-semibold hover:underline">エアコン修理の料金相場 完全ガイド</Link>
            </li>
            <li>
              <Link href="/guide/busy-season/" className="text-sky-600 font-semibold hover:underline">エアコン修理の繁忙期カレンダー（いま何日待ち？）</Link>
            </li>
            <li>
              <Link href="/cost/replace-vs-repair/" className="text-sky-600 font-semibold hover:underline">修理と買い替えどっちが得？判断基準</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* JSON-LD */}
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
