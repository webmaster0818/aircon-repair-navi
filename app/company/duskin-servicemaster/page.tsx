import type { Metadata } from "next";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";

export const metadata: Metadata = {
  title:
    "ダスキン サービスマスターの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「ダスキン サービスマスター」の口コミ・評判をまとめました。オリコン・Googleマップ等の実際の利用者の声、料金の目安、対応エリアや注意点、メリットまで中立的に解説します。",
  alternates: { canonical: "/company/duskin-servicemaster" },
};

const UPDATED = "2026年8月2日";

const toc = [
  { id: "summary", label: "ダスキン サービスマスターとは" },
  { id: "review-summary", label: "口コミ総評" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "flow-detail", label: "申し込み〜作業完了までの流れ【詳細版】" },
  { id: "menu-price", label: "機種別の対応範囲と料金の見方" },
  { id: "payment", label: "支払い方法・キャンセル規定" },
  { id: "checklist", label: "見積もりで確認すべきチェックポイント" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ダスキン サービスマスターはエアコン修理もしてくれますか？",
    a: "ダスキンのエアコンクリーニングは、内部を分解洗浄するハウスクリーニングのサービスです。故障の修理ではなく、カビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者やメーカーへの相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "ダスキンは全国に約1,200店舗を展開しており、幅広い地域に対応しています。実際の作業は地域の加盟店(フランチャイズ)が担当するため、店舗によって対応状況が異なる場合があります。申し込み時に最寄り店舗の対応エリアと空き状況を確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、壁掛けタイプ1台15,400円(税込)、2台セット25,300円、お掃除機能付き26,400円などと案内されています(調査時点)。抗菌コート+2,750円、室外機+6,600円などのオプションがあります。土日祝・夜間は追加費用が生じる場合があるため、申し込み時に確認してください。",
  },
  {
    q: "他社より料金は高めですか？",
    a: "個人事業者や低価格帯の業者と比べると料金は高めの設定です。その分、大手の安心感やサポート体制、仕上がりの品質を評価する声が多く見られます。料金と安心感のどちらを重視するかで選ぶとよいでしょう。",
  },
  {
    q: "作業前に確認しておくことはありますか？",
    a: "公式サイトでは、駐車スペースの確保が必要(なければ有料駐車場を利用)、対象は幅120cm未満のエアコン、といった条件が案内されています。土日祝・夜間作業は追加費用が生じる場合があるため、事前に確認しておくと安心です。",
  },
  {
    q: "キャンセル料はいつから発生しますか？",
    a: "公式のWEBお見積りページでは、サービス実施日の変更・中止は少なくとも2日前(土・日・祝日を除く)までに連絡するよう案内されています。前日のキャンセルはサービス予定額(税抜)の15%、当日はサービス予定額(税抜)の30%のキャンセル料がかかると記載されています(2026年8月2日公式確認)。",
  },
  {
    q: "お掃除機能付きエアコンの料金はいくらですか？",
    a: "公式サイトでは、お掃除機能付きエアコンは1台26,400円、2台セット47,300円、3台目以降は1台につき23,650円(いずれも税込)と案内されています。また、本体両側にファンがついているタイプや特殊構造のタイプは、お掃除機能付きの料金が適用されると記載されています(2026年8月2日公式確認)。",
  },
  {
    q: "天井埋め込みタイプのエアコンにも対応していますか？",
    a: "対応しています。公式サイトでは天井埋込1・2方向タイプのエアコンクリーニングが34,100円(税込)〜と案内されています(2026年8月2日公式確認)。機種や設置状況で金額が変わるため、正確な金額は見積もりで確認してください。",
  },
  {
    q: "支払いにクレジットカードは使えますか？",
    a: "公式のWEBお見積りページには、クレジットカード決済を選択した場合にダスキンの会員プログラム(DDuet)のコインがサービス料金(税抜)の1%分付与されるという記載があり、クレジットカード決済に関する案内が確認できます(2026年8月2日確認)。現金などその他の支払い方法の可否は公式サイトに一覧の記載が確認できなかったため、担当店に確認しておくと安心です。",
  },
  {
    q: "最低利用金額はありますか？",
    a: "公式のWEBお見積りページでは「サービスは1回あたり11,000円(税込)以上で承ります」と案内されています(2026年8月2日確認)。壁掛けタイプ1台(15,400円)であれば単体でこの条件を満たします。",
  },
  {
    q: "仕上がりに満足できなかった場合はどうなりますか？",
    a: "ダスキンには「満足の保証」という制度があり、サービスに満足できなかった場合には満足されるまで何度でもサービスをやり直すと公式サイトに明記されています。対象サービスにはサービスマスター(ハウスクリーニング)が含まれます(2026年8月2日確認)。申し出方法や条件の詳細は担当店に確認してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダスキン サービスマスターの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
  dateModified: "2026-08-02",
  author: { "@type": "Organization", name: "エアコン修理ナビ編集部" },
  publisher: { "@type": "Organization", name: "エアコン修理ナビ" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "業者一覧", href: "/ranking" },
          { name: "ダスキン サービスマスターの口コミ・評判", href: "/company/duskin-servicemaster" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ダスキン サービスマスターの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-02">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-c.png"
              alt="エアコン内部を分解洗浄するクリーニング作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            料金は高めでも、実績ある大手にしっかり任せたい——そんなときに候補になるのが
            <strong className="font-semibold text-slate-900">ダスキン サービスマスター</strong>
            のエアコンクリーニングです。この記事では、全国に約1,200店舗を展開するダスキンについて、オリコン顧客満足度やGoogleマップなどで公開されている利用者の声、料金の目安、対応エリアや注意点、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※ダスキンのエアコンクリーニングは故障の「修理」ではなく、内部を分解洗浄する「クリーニング」のサービスです。本記事の口コミは、オリコン顧客満足度・Googleマップ・口コミ調査記事等で公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・店舗により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年6月)。
          </p>
        </div>

        <nav aria-label="目次" className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-bold text-slate-700 mb-3 tracking-wide">目次</p>
            <ol className="space-y-2 text-[0.95rem] text-slate-700">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-sky-600 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="hover:text-sky-700 hover:underline underline-offset-4">{t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-3">＼ 公式サイトはこちら ／</p>
            <div className="flex justify-center mb-4"><a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+60OXD" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www27.a8.net/svt/bgt?aid=260628928547&wid=013&eno=01&mid=s00000023342001011000&mc=1" /></a></div>
            <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">ダスキン サービスマスター公式サイトを見る →</a>
            <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ダスキン サービスマスターとは</h2>
            <p className="leading-8 text-slate-700">
              ダスキン サービスマスターは、株式会社ダスキンが展開するハウスクリーニングのブランドで、エアコンクリーニングにも対応しています。徹底分解洗浄により、内部のカビ・ホコリを洗い流し、公式サイトでは「風速約40%アップ」の効果を掲げています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              「30年以上」の経験、「300万件の実績」、全国約1,200店舗での対応を公表しており、大手ならではの安心感とサポート体制が強みです。実際の作業は地域の加盟店が担当します。
            </p>
            <AffiliateBanner
              slug="duskin-servicemaster"
              heading="公式サイトで詳細・料金を確認する"
              note="大手の安心感と品質を重視するなら、まずは料金と最寄り店舗を確認してみましょう。"
            />
          </section>

          <section id="review-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ総評</h2>
            <p className="leading-8 text-slate-700">
              ダスキンのエアコンクリーニングは、大手ならではの安心感や2名体制での効率的な作業・時間厳守を評価する声(「料金に見合う内容」とする評価など)が確認できる一方、口コミサイト「みん評」のエアコンクリーニング関連の口コミ(127件・2026年8月1日時点)では低評価の投稿が優勢という厳しい結果も確認でき、評価が分かれるサービスです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な声の中心は、水漏れ・ルーバー破損など作業起因のトラブル報告、加盟店(フランチャイズ)ごとの品質バラつき、トラブル時の対応の遅さ、料金が品質に対して割高という指摘です。Yahoo!知恵袋でも評判を尋ねる質問にネガティブ寄りの回答が付いた例が確認できます。なお、みん評のダスキン全体の口コミ422件はモップレンタル・家事代行なども含む全サービス混在の数字のため、エアコンクリーニング単体の評価はタグ絞り込みページの127件で見る必要があります。大手の体制を評価する声も実在するため、依頼時は担当加盟店の対応と保証条件を個別に確認するのが安全です。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ダスキン サービスマスター(エアコンクリーニング)"],
                    ["運営会社", "株式会社ダスキン"],
                    ["サービス内容", "エアコンクリーニング／ハウスクリーニング 等"],
                    ["対応エリア", "全国(約1,200店舗・地域の加盟店が対応)"],
                    ["施工内容", "徹底分解洗浄／公称「風速約40%アップ」"],
                    ["対象", "幅120cm未満のエアコン(公称)"],
                    ["注意事項", "土日祝・夜間は追加費用が生じる場合あり／駐車スペース確保が必要"],
                    ["公式サイト", "www.duskin.jp"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトの掲載情報。料金・対応内容は店舗・時期により変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。ダスキン サービスマスターについては、オリコン顧客満足度・Googleマップ・口コミ調査記事などで利用者の評価が公開されています。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>作業内容の説明や養生の丁寧さ、料金の明瞭さを評価する声が目立つ</li>
                <li>クリーニング後に冷房の効きが良くなったとする内容が見られる</li>
                <li>大手ならではの安心感や、スタッフの清潔感・説明のわかりやすさへの評価が多い</li>
                <li>丁寧かつスピーディーな仕上がりの品質を評価する傾向がある</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当店舗・地域により異なります。上記は口コミ原文の転載ではなく、公開されている評価から確認できた傾向の要約です。</p>
            <p className="mt-2 text-xs text-slate-400">参照元: <a href="https://minhyo.jp/duskin/tags/aircon" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">みん評(ダスキンのエアコンクリーニング関連口コミ・127件)</a>では、2名体制の効率的な作業や時間厳守など「料金に見合う内容」とする肯定的な評価も確認できます(2026年8月1日確認)。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              評価が高い一方で、フランチャイズ展開のサービスという性質上、
              <strong className="font-semibold">料金は他社より高めで、店舗によって対応に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>個人事業者や低価格帯の業者と比べると料金は高めの設定</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>加盟店(フランチャイズ)が対応するため、店舗によって対応に差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(5〜7月)の土日は予約が取りにくくなる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>土日祝・夜間の追加費用、駐車スペースの有無を事前に確認しておく</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              また、口コミサイトでは水漏れやルーバー破損など作業起因のトラブル報告や、トラブル時の連絡・対応の遅さを指摘する声も確認できます。10年を超えた機種は保証が制限される場合があるという声もあるため、古い機種を依頼する際は事前に保証条件を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">参照元: <a href="https://minhyo.jp/duskin/tags/aircon" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">みん評(エアコンクリーニング関連の口コミ・127件)</a> ／ <a href="https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10307121805" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">Yahoo!知恵袋(ダスキンのエアコンクリーニングの評判に関するQ&A)</a>(いずれも2026年8月1日確認)。みん評のダスキン全体の口コミ(422件)は全サービス混在のため、エアコンクリーニング単体の傾向は上記の絞り込みページを参照しています。</p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2" label="ダスキン サービスマスター公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>30年以上・300万件の実績がある大手の安心感</li>
                  <li>全国約1,200店舗で幅広い地域に対応</li>
                  <li>説明・養生の丁寧さやサポート体制への高評価</li>
                  <li>仕上がりの品質を評価する口コミが多い</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金は他社より高めの設定</li>
                  <li>店舗(加盟店)により対応に差が出ることがある</li>
                  <li>故障修理ではなくクリーニングのサービス</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">向いている人・向いていない人</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金より、大手の安心感と品質を重視したい人</li>
                  <li>説明・養生の丁寧さやサポート体制を求める人</li>
                  <li>ニオイや効きの悪さを内部洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく料金の安さを最優先したい人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ダスキンの公式サイトでは、エアコンクリーニング(壁掛けタイプ)の料金目安が次のように案内されています(税込・調査時点)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["壁掛けタイプ 1台", "15,400円"],
                    ["壁掛けタイプ 2台セット", "25,300円"],
                    ["3台目以降(1台)", "12,650円"],
                    ["お掃除機能付き", "26,400円"],
                    ["抗菌コート", "+2,750円"],
                    ["室外機", "+6,600円"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              土日祝・夜間作業は追加費用が生じる場合があります。台数や機種、オプションによって総額が変わるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。店舗・時期により異なる場合があります。最新の金額は申し込み時にご確認ください。</p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2" label="ダスキン サービスマスター公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "機種や台数、汚れの状況を伝え、最寄り店舗の対応を確認します。"],
                ["日程の調整", "都合の良い日時を調整します。料金・作業内容を提示してもらえます。"],
                ["訪問・養生", "加盟店のスタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "エアコンを徹底分解し、内部のカビ・ホコリを洗浄します。"],
                ["動作確認・支払い", "仕上がりと動作を確認し、支払いをして完了です。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="flow-detail" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申し込み〜作業完了までの流れ【詳細版】</h2>
            <p className="leading-8 text-slate-700 mb-6">
              2026年8月2日に公式サイト(WEBお見積りページ・エアコンクリーニング詳細ページ)で確認できた情報をもとに、申し込みから作業完了までの流れをさらに詳しく整理しました。ダスキンは見積もりの段階が丁寧に設計されており、多くの場合はWEB上で概算金額まで確認できます。
            </p>
            <ol className="space-y-4">
              {[
                ["WEBお見積りまたは電話で相談", "公式のWEBお見積りは「サービスを選ぶ→情報を入力→見積り結果→写真登録」の4ステップで、多くの場合は自宅への訪問なしで概算金額を確認できます。エアコンは壁掛けタイプ・天井埋込タイプが対象です。"],
                ["訪問見積もり(必要な場合)", "規定のサイズを超えるエアコンなどは、無料の訪問見積もりが案内されます。なお、サービスは1回あたり11,000円(税込)以上での受付と案内されています。故障している機器は対応を断られる場合があります。"],
                ["実施日の決定", "サービス実施日は、後日担当店から連絡があり、相談のうえで決定すると案内されています。土日祝・夜間を希望する場合は追加費用の有無もこの段階で確認しておきましょう。"],
                ["作業前の動作確認・養生", "公式サイトでは、作業前にエアコンの動作確認を行うと案内されています。作業時は壁・床を養生カバーで保護します。駐車スペースがない場合は有料駐車場の利用料が利用者負担となります。"],
                ["分解・高圧洗浄", "熱交換器とファンを分解し、高圧洗浄で内部のカビ・ホコリを洗い流します。取り外した部品も洗浄し、作業で出た汚水は持ち帰って処理すると案内されています。"],
                ["動作確認・完了", "仕上がりと動作を確認して完了です。万一仕上がりに満足できない場合は、後述の「満足の保証」の対象になります。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-slate-400">※2026年8月2日公式確認。流れ・条件は変更される場合があります。最新の内容は申し込み時にご確認ください。</p>
          </section>

          <section id="menu-price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">機種別の対応範囲と料金の見方</h2>
            <p className="leading-8 text-slate-700">
              ダスキンのエアコンクリーニングは、機種のタイプによって適用される料金が変わります。公式サイトのメニューを2026年8月2日に確認したところ、機種別の料金は次のように案内されていました(いずれも税込)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["壁掛けタイプ(通常) 1台", "15,400円"],
                    ["壁掛けタイプ(通常) 2台セット", "25,300円"],
                    ["壁掛けタイプ(通常) 3台目以降", "1台につき12,650円"],
                    ["お掃除機能付き 1台", "26,400円"],
                    ["お掃除機能付き 2台セット", "47,300円"],
                    ["お掃除機能付き 3台目以降", "1台につき23,650円"],
                    ["天井埋込1・2方向タイプ", "34,100円〜"],
                    ["抗菌コート(オプション)", "1台につき+2,750円"],
                    ["室外機クリーニング(オプション)", "+6,600円"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              天井埋込1・2方向タイプは、公式の詳細ページでさらに細かい料金が案内されています(税込・2026年8月2日確認)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["天井埋込 1台目", "34,100円"],
                    ["天井埋込 2台目", "30,800円"],
                    ["天井埋込 3台目以降", "追加1台につき27,500円"],
                    ["フィルター自動お掃除機能付き 1台目", "39,600円"],
                    ["フィルター自動お掃除機能付き 2台目", "36,300円"],
                    ["フィルター自動お掃除機能付き 3台目以降", "追加1台につき33,000円"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              天井埋込タイプの対象はルームエアコン(吹出口1〜2方向)で、三菱電機・三菱重工製は別途費用がかかる可能性があると注記されています。また、長期経年機種や不具合のある機器は対応を断られる場合があります。オプションの抗菌コート(1台2,750円)は天井埋込タイプにも用意されています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              壁掛けタイプの料金表を見るうえでのポイントは次の3点です。第一に、対象は<strong className="font-semibold">幅120cm未満の壁掛けタイプ</strong>で、本体の両側にファンがついているタイプや特殊構造のタイプは、見た目が通常タイプでも「お掃除機能付き」の料金が適用されると案内されています。第二に、製造から長期間経過した機種は対応できない場合があると記載されています。第三に、公式サイトには「サービスマスター 地域別料金一覧」があり、都道府県ごとに料金を確認できる仕組みのため、実際の金額は自分の地域のページで確認するのが確実です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は2026年8月2日に公式サイトで確認した掲載内容です。店舗・地域・時期により異なる場合があります。</p>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">支払い方法・キャンセル規定</h2>
            <p className="leading-8 text-slate-700">
              公式のWEBお見積りページには、クレジットカード決済を選択した場合にダスキンの会員プログラム(DDuet)のコインがサービス料金(税抜)の1%分付与されるという記載があり、クレジットカード決済に関する案内が確認できます。一方、現金などその他の支払い方法の可否は公式サイトに一覧の記載が確認できませんでした。実際の作業は地域の加盟店が担当するため、希望の支払い方法がある場合は申し込み時に担当店へ確認しておくと安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              キャンセル・日程変更の規定は、公式のWEBお見積りページに次のように明記されています(2026年8月2日確認)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["実施日の2日前(土日祝除く)まで", "変更・中止の連絡期限(キャンセル料の記載なし)"],
                    ["前日のキャンセル", "サービス予定額(税抜)の15%"],
                    ["当日のキャンセル", "サービス予定額(税抜)の30%"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              「サービス実施日の変更・中止は少なくとも2日前(土・日・祝日を除く)までにご連絡ください」というのが公式の案内です。繁忙期は日程の再調整に時間がかかることもあるため、予定が変わりそうな場合は早めに担当店へ連絡しておきましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※2026年8月2日公式確認(WEBお見積りページの記載)。規定は変更される場合があります。</p>
          </section>

          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりで確認すべきチェックポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              ダスキンはフランチャイズ展開のため、最終的な条件は担当店との間で決まります。見積もり・申し込みの段階で次の点を確認しておくと、当日の行き違いを防げます。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">税込総額</strong>：台数・お掃除機能の有無・抗菌コートや室外機などオプションを含めた合計金額</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">機種の扱い</strong>：幅120cm未満か、両側ファン・特殊構造で「お掃除機能付き」料金にならないか、製造から年数が経った機種でも対応可能か</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">追加費用</strong>：土日祝・夜間の追加費用の有無と金額</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">駐車スペース</strong>：確保できない場合の有料駐車場代の負担</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">キャンセル期限</strong>：実施日の2日前(土日祝除く)を過ぎると前日15%・当日30%(いずれも税抜)のキャンセル料</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">支払い方法</strong>：クレジットカード以外を希望する場合の可否</span></li>
            </ul>
            <p className="mt-5 leading-8 text-slate-700">
              また、ダスキンには「満足の保証」という制度があります。公式サイトでは、スタッフが身分証を携帯・提示すること、料金を事前にはっきり伝えること、そして<strong className="font-semibold">サービスに満足できなかった場合には満足されるまで何度でもやり直す</strong>ことが宣言されており、対象サービスにはサービスマスター(ハウスクリーニング)が含まれます(2026年8月2日確認)。仕上がりに不満があった場合の申し出先(担当店の連絡先)も、作業前に控えておくと安心です。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-start gap-3 font-semibold text-slate-800 list-none">
                    <span className="text-sky-600">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-slate-600 leading-7 text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ</h2>
            <p className="leading-8 text-slate-700">
              ダスキン サービスマスターは、30年以上・300万件の実績と全国約1,200店舗のネットワークを持つ大手のエアコンクリーニングサービスです。利用者の声では、説明・養生の丁寧さや大手の安心感、仕上がりの品質を評価する内容が多く見られます。一方で、料金は他社より高めで、加盟店によって対応に差が出る場合がある点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションや曜日・時間帯で変わります。申し込み時に総額と追加費用の条件を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">大手の安心感と品質を重視するなら、まずは料金と最寄り店舗を確認してみましょう。</p>
              <div className="flex justify-center mb-5">
                <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+60OXD" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www27.a8.net/svt/bgt?aid=260628928547&wid=013&eno=01&mid=s00000023342001011000&mc=1" /></a>
              </div>
              <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2" target="_blank" rel="sponsored nofollow" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
                ダスキン サービスマスター公式サイトを見る
              </a>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/ranking/fast", label: "対応が早い修理業者" },
                { href: "/cost/repair-price", label: "エアコン修理の料金相場" },
                { href: "/cost/replace-vs-repair", label: "修理と買い替えどちらが得か" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      <StickyCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2" label="ダスキン サービスマスター公式サイトを見る" />
</article>
    </>
  );
}
