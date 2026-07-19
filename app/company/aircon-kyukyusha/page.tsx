import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン救急隊の評判は？同名の複数サービスの見分け方・料金を実査【2026年7月】",
  description:
    "「エアコン救急隊」という名称のエアコン修理サービスは複数存在します。当サイトが各公式サイトを実査(2026年7月19日確認)し、株式会社SAZANKA運営のエアコン救急隊(aircon99.net)ほか同名サービスの運営情報・対応エリア・料金の掲載状況・依頼前の見分け方と注意点を中立的に解説します。",
  alternates: { canonical: "/company/aircon-kyukyusha" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "「エアコン救急隊」は複数ある（最重要）" },
  { id: "company", label: "各サービスの運営情報・基本情報" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "bad", label: "依頼前の注意点・見分け方" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "依頼前に確認する手順" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "エアコン救急隊はどこの会社が運営していますか？",
    a: "「エアコン救急隊」という名称のサービスは複数存在します。当サイトが確認できた範囲では、aircon99.netの「エアコン救急隊」は株式会社SAZANKA(埼玉県八潮市)の運営です。一方、aircon-kaketsuke119.comにも同名の「エアコン救急隊」がありますが、こちらは運営会社名の記載が確認できませんでした(いずれも2026年7月19日確認)。同じ名前でも別のサービスのため、依頼前に運営会社名・所在地・電話番号でどのサービスかを確認することが重要です。",
  },
  {
    q: "エアコン救急隊の料金はいくらですか？",
    a: "当サイトが確認したいずれの「エアコン救急隊」の公式サイトにも、出張費・見積もり料・症状別の修理実額といった具体的な料金の掲載はありませんでした(2026年7月19日確認)。SAZANKA運営のエアコン救急隊は現場調査後に見積もりを提示する形式です。依頼時は作業前に総額の見積もりを書面で確認し、当サイトの症状別の修理相場と比べてから判断するのがおすすめです。",
  },
  {
    q: "エアコン救急隊の口コミ・評判はどうですか？",
    a: "2026年7月19日時点で、主要な口コミプラットフォームや検索結果を調べても、「エアコン救急隊」を特定できる第三者の口コミ・評価は確認できませんでした。同名のサービスが複数あるため、仮に口コミがあってもどの事業者に対するものか判別が難しい状況です。口コミ件数や第三者評価を重視して選びたい場合は、実績・評価が公開されている業者との比較をおすすめします。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "SAZANKA運営のエアコン救急隊(aircon99.net)は公式サイトで「47都道府県に対応」とし、離島や山間部は相談としています。aircon-kaketsuke119.comの同名サービスは大阪・京都・兵庫・奈良・滋賀・和歌山の関西圏と、東京・神奈川・千葉・埼玉・茨城・群馬・栃木の関東圏を対応エリアとして掲載しています(いずれも2026年7月19日確認)。お住まいの地域でどちらに繋がるかは、電話番号と運営情報で確認しましょう。",
  },
  {
    q: "依頼前に何を確認すればいいですか？",
    a: "①どの「エアコン救急隊」か(運営会社名・所在地・電話番号を控える)、②総額の見積もりを作業前に書面でもらう(出張費・見積もり料・キャンセル料の有無も)、③保証の有無・期間、④ガス補充や電気工事を伴う場合は資格・許認可の有無、の4点の確認をおすすめします。料金が公式サイトに掲載されていないサービスのため、事前確認がとくに重要です。",
  },
  {
    q: "即日で対応してもらえますか？",
    a: "SAZANKA運営のエアコン救急隊は公式サイトで即日出張対応をうたっています(受付9:00〜22:00・2026年7月19日確認)。ただし、実際の訪問時期は地域や時期によって変動し、真夏・真冬の繁忙期は待ち時間が延びる場合があります。急ぎの場合は、最短の訪問可能日時を電話で確認し、複数の業者に並行して当たるのが確実です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン救急隊の評判は？同名の複数サービスの見分け方・料金を実査【2026年7月】",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
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
          { name: "エアコン救急隊の口コミ・評判", href: "/company/aircon-kyukyusha" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン救急隊の評判は？
            <br className="hidden md:block" />
            同名の複数サービスの見分け方・料金を実査【2026年7月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="室内機のエアコン修理を行う作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「エアコン救急隊」で検索してこのページに来た方が最初に知っておきたいのは、
            <strong className="font-semibold text-slate-900">「エアコン救急隊」という名称のエアコン修理サービスは1つではない</strong>
            ということです。この記事では、当サイトが各公式サイトを直接確認した事実(2026年7月19日実査)をもとに、それぞれの運営情報・対応エリア・料金の掲載状況と、依頼前の見分け方・注意点を中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>「エアコン救急隊」を名乗る別々のサービスが複数あります</strong>。確認できた範囲では、株式会社SAZANKA運営(aircon99.net・埼玉県八潮市・47都道府県対応をうたう)と、運営会社名の記載がない同名サービス(aircon-kaketsuke119.com・関東/関西対応)が存在します(2026年7月19日確認)</li>
              <li>・<strong>いずれも公式サイトに具体的な料金の掲載がありません</strong>。現地見積もり前提のため、作業前の書面見積もりと相場比較が必須です</li>
              <li>・<strong>第三者の口コミは、どのサービスのものか特定できる形では確認できませんでした</strong>。口コミ・実績で選びたい人は、情報公開が充実した業者との相見積もりが安全です(<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>・<Link href="/ranking" className="text-sky-700 underline">業者比較</Link>)</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月19日に各公式サイトで確認した内容です。掲載内容は変更される場合があります。</p>
          </div>
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

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「エアコン救急隊」は複数ある（最重要）</h2>
            <p className="leading-8 text-slate-700">
              2026年7月19日時点で、当サイトは「エアコン救急隊」という名称のサービスを複数確認しています。
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>エアコン救急隊(aircon99.net)</strong>——株式会社SAZANKA(埼玉県八潮市)の運営。「47都道府県に対応できます」とし、冷えない・動かない・水漏れ・異音などのエアコントラブルに即日出張対応をうたいます</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>エアコン救急隊(aircon-kaketsuke119.com)</strong>——関西(大阪・京都・兵庫・奈良・滋賀・和歌山)と関東(東京・神奈川・千葉・埼玉・茨城・群馬・栃木)を対応エリアとする同名サービス。運営会社名の記載は確認できませんでした</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span>このほか「エアコン洗浄・修理のエアコン救急隊」(air119.jp)という同名サイトも検索結果に存在しますが、2026年7月19日の確認時点でサイトに安全に接続できず(証明書エラー)、内容を確認できませんでした</span></li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              名称が同じでも運営も窓口も別のサービスです。広告やチラシ、検索結果から電話する際は、<strong className="font-semibold">「どのエアコン救急隊にかけているのか」を電話番号と運営会社名で確認する</strong>ことが、行き違いを防ぐ第一歩になります。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">各サービスの運営情報・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left px-4 py-3 font-semibold w-1/4">項目</th>
                    <th className="text-left px-4 py-3 font-semibold">エアコン救急隊<br className="md:hidden" />(aircon99.net)</th>
                    <th className="text-left px-4 py-3 font-semibold">エアコン救急隊<br className="md:hidden" />(aircon-kaketsuke119.com)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["運営会社", "株式会社SAZANKA", "記載なし(確認できず)"],
                    ["所在地", "埼玉県八潮市古新田1054", "記載なし"],
                    ["電話番号", "0120-624-815", "0120-451-148"],
                    ["受付時間", "9:00〜22:00", "記載なし"],
                    ["対応エリア", "「47都道府県に対応」(離島・山間部は相談)", "関西6府県・関東7都県"],
                    ["料金の掲載", "なし(現場調査後に見積もり提示)", "なし"],
                    ["対応内容", "冷えない・動かない・水漏れ・異音などの修理(即日出張をうたう)", "冷風が出ない・水漏れ等の修理、専用コンセント設置・増設、電圧切替、ガス補充など"],
                    ["許認可の表示", "記載を確認できず", "記載を確認できず"],
                  ].map(([k, a, b], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100 align-top">{a}</td>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100 align-top">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：各公式サイトの掲載情報(2026年7月19日確認)。「記載なし」は当該公式サイト上で確認できなかったことを示し、内容は変更される場合があります。</p>
          </section>

          <section id="review" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-4">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。「エアコン救急隊」については、2026年7月19日時点で主要な口コミプラットフォームや検索結果を調べても、<strong className="font-semibold">対象の事業者を特定できる第三者の口コミ・評価は確認できませんでした</strong>。
            </p>
            <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
              <h3 className="font-bold text-orange-800 mb-3">評判を見るうえでの前提</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>・同名のサービスが複数あるため、仮に「エアコン救急隊」の口コミを見つけても、<strong>どの事業者に対する評価か判別が難しい</strong>状態です</li>
                <li>・各公式サイトにも実績件数・お客様の声の掲載はなく、<strong>満足度を第三者情報から裏づける材料が乏しい</strong>状態です</li>
                <li>・そのため本記事では、事実として確認できた各公式サイトの掲載内容のみを扱い、評価の断定は避けています</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。調査対象：各公式サイト、主要口コミプラットフォーム、一般検索結果。口コミが確認できないことは「悪い評判がある」という意味ではありませんが、事前の情報収集がしづらい点は依頼前に留意しておきましょう。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼前の注意点・見分け方（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>同名の別サービスを取り違えないこと</strong>——「エアコン救急隊」は複数あります。電話の際に運営会社名(株式会社SAZANKAか、それ以外か)・所在地・電話番号を控え、どのサービスに依頼しているかを明確にしましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>料金がいずれの公式サイトにも掲載されていません</strong>——出張費・見積もり料・症状別実額・キャンセル料の記載がなく(2026年7月19日確認)、現地見積もり前提です。作業前に総額を書面で確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>許認可・保証の記載が確認できません</strong>——ガス補充や電気工事(コンセント増設・電圧切替)を伴う作業では、有資格者の対応か・作業後の保証があるかを依頼前に確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>第三者の口コミで事前に実態を確認しづらい</strong>——比較検討したい場合は、料金実額や口コミが公開されている業者と相見積もりを取るのが安全です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span>繁忙期(真夏・真冬)は、即日対応をうたうサービスでも訪問まで時間がかかる場合があります。急ぎなら最短訪問日時を確認し、複数業者に並行で当たりましょう</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>SAZANKA運営のサービスは運営会社・所在地が公式サイトで確認でき、受付時間も9:00〜22:00と明記されている</li>
                  <li>広域対応をうたっており、症状(冷えない・水漏れ・異音など)からまず電話で相談できる</li>
                  <li>即日出張対応をうたっている(SAZANKA運営・時期や地域により変動)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>同名の別サービスが複数あり、取り違えのリスクがある</li>
                  <li>料金・保証・許認可の掲載がなく、事前確認が前提</li>
                  <li>第三者の口コミを特定できる形で確認できない</li>
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
                  <li>症状からまず電話で相談し、その場で対応可否を聞きたい人</li>
                  <li>見積もり内容を自分で確認・比較しながら判断できる人</li>
                  <li>依頼先の運営情報を電話で確認する手間を惜しまない人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>申し込み前にWeb上で料金を比較してから選びたい人</li>
                  <li>口コミ件数や第三者評価を重視して業者を選びたい人</li>
                  <li>許認可・保証など事業者情報を事前にしっかり確認したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方（2026年7月19日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張費", "各公式サイトに記載なし(要問い合わせ)"],
                    ["見積もり料", "各公式サイトに記載なし(無料か有料か不明・要確認)"],
                    ["症状別の修理実額", "各公式サイトに記載なし(SAZANKA運営は現場調査後に見積もり提示)"],
                    ["キャンセル料", "各公式サイトに記載なし"],
                    ["深夜・早朝の割増", "各公式サイトに記載なし"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-8 text-slate-700">
              いずれの「エアコン救急隊」も、公式サイト上に料金の数字が掲載されていません。エアコン修理の費用は症状や作業内容(点検・ガス補充・部品交換など)で大きく変わるため、
              <strong className="font-semibold">正確な金額は現地の見積もりで確認し、書面で残す</strong>
              のが基本です。相場感は当サイトの<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>と<Link href="/cost/price-index/" className="text-sky-700 underline">27社の料金インデックス</Link>で確認できます。可能であれば料金を公開している業者を含めて複数から見積もりを取り、金額と対応を比較すると失敗を防げます。
            </p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼前に確認する手順</h2>
            <ol className="space-y-4">
              {[
                ["どの「エアコン救急隊」かを確認", "電話の際に運営会社名・所在地を確認し、控えておきます(SAZANKA運営は0120-624-815・埼玉県八潮市)。"],
                ["症状と機種を伝える", "冷えない・水漏れ・異音などの症状、メーカー・使用年数、賃貸か持ち家かを伝えます。"],
                ["費用条件を先に確認", "出張費・見積もり料・キャンセル料の有無を、訪問前に電話で確認しておきます。"],
                ["現地確認・書面見積もり", "作業内容と総額の見積もりを書面でもらい、相場と比べて判断します。"],
                ["作業・保証確認", "納得してから作業を依頼し、完了時に保証の有無・期間を確認します。"],
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
              「エアコン救急隊」は、株式会社SAZANKA運営のサービス(aircon99.net)をはじめ、同じ名称の別サービスが複数存在します(2026年7月19日実査)。いずれも公式サイトに料金の掲載がなく、第三者の口コミも特定できる形では確認できませんでした。依頼する場合は「どのエアコン救急隊か(運営会社名・電話番号)」「総額見積もりを書面で」「保証・資格の確認」の3点を押さえておくと安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              急ぎでないときは、料金実額や口コミが公開されている業者を含めて複数から見積もりを取り、金額と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">料金や口コミを比べてから決めたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">料金実額・運営情報を公開している修理業者を、当サイトが横断比較しています。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                エアコン修理業者を比較する
              </Link>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/ranking/fast", label: "対応が早い修理業者" },
                { href: "/cost/repair-price", label: "エアコン修理の料金相場" },
                { href: "/company/life-kyukyusha", label: "ライフ救急車の口コミ・評判(別サービス)" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
