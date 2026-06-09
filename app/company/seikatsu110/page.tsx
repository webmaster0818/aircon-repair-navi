import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "生活110番のエアコン修理の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "生活トラブル解決サービス「生活110番」のエアコン修理について、実際の利用者の口コミ・評判を出典付きでまとめました。料金の目安、対応エリアや受付時間、加盟店紹介型サービスならではのメリット・デメリット、向いている人まで中立的に解説します。",
  alternates: { canonical: "/company/seikatsu110" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "生活110番とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "迅速な駆け付けと誠実な対応をしてくれて助かりました。丁寧な対応に救われた思いです。",
    who: "利用者の声",
    source: "口コミ紹介サイト（limia ほか）で公開されている利用者の声",
  },
  {
    body:
      "初めてのことでわかりにくかったのですが、わかりやすい見積りと説明で安心してお願いできました。",
    who: "利用者の声",
    source: "口コミ紹介サイト（駅探PICKS ほか）で公開されている利用者の声",
  },
  {
    body:
      "対応が早く、心配りがされていました。事前に金額や方法など詳しい説明があったので納得して任せられました。",
    who: "利用者の声",
    source: "口コミ紹介サイト（カジナビ ほか）で公開されている利用者の声",
  },
  {
    body:
      "見積もりについて丁寧かつ詳しく説明していただき感謝しています。とても親切な業者さんでした。",
    who: "利用者の声",
    source: "生活110番 加盟店レビュー（公式サイト掲載）で公開されている利用者の声",
  },
];

const faqs = [
  {
    q: "生活110番は自社で修理に来てくれるのですか？",
    a: "生活110番自体は修理を行う業者ではなく、全国の加盟店（提携業者）の中から症状や地域に合った業者を紹介・マッチングするサービスです。実際の修理は紹介された加盟店が行います。そのため、対応品質は担当する加盟店によって変わる点を理解しておきましょう。",
  },
  {
    q: "受付は24時間対応していますか？",
    a: "コールセンターは24時間365日年中無休で受付しているとされています。ただし、実際の訪問日時は紹介される加盟店の状況によって変わるため、急ぎの場合は受付時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "相談・見積もりは無料とされています。作業内容に納得してから依頼できるよう、訪問時に作業範囲と総額の見積もりを書面で確認してから契約するのがおすすめです。公式サイトの料金目安と現地見積もりに差がないかも確認しましょう。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。エアコン修理の料金は数千円台の点検から、ガス補充・部品交換が必要な場合は数万円台まで幅があります。正確な金額は紹介された加盟店の現地見積もりで確認してください。",
  },
  {
    q: "加盟店とトラブルになったらどうすればよいですか？",
    a: "生活110番は紹介・マッチングを担う立場のため、加盟店との契約や作業内容に関するやり取りは利用者と加盟店の間で行うのが基本です。心配な場合は、依頼前に口コミや見積もり内容をよく確認し、追加費用が発生する条件を事前に聞いておくとトラブルを避けやすくなります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "生活110番のエアコン修理の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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

function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber-500 tracking-tight" aria-hidden>
      {"★".repeat(n)}
      <span className="text-slate-300">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "業者一覧", href: "/ranking" },
          { name: "生活110番の口コミ・評判", href: "/company/seikatsu110" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            生活110番のエアコン修理の口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-10">最終更新：{UPDATED}</time>
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
            エアコンが急に効かなくなったとき、どこに頼めばよいか分からず困ることがあります。
            この記事では、暮らしのトラブル全般に対応する全国対応サービス
            <strong className="font-semibold text-slate-900">生活110番</strong>
            のエアコン修理について、実際に公開されている利用者の口コミ、料金の目安、対応エリアや受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※生活110番は、自社で修理を行うのではなく、全国の加盟店（提携業者）を紹介する「加盟店紹介型」のサービスです。本記事の口コミは、公式の加盟店レビューや口コミ紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年6月）。
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

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">生活110番とは</h2>
            <p className="leading-8 text-slate-700">
              生活110番は、シェアリングテクノロジー株式会社が運営する、暮らしの「困った」を解決する生活トラブル解決サービスです。エアコン修理のほか、水回り、害虫、鍵、不用品回収など150以上のサービスジャンルを扱い、症状や地域に合った専門業者を紹介・マッチングします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              全国の加盟店（提携業者）は数千社規模とされ、コールセンターは24時間365日年中無休で受付。エアコンが冷えない・効かない、水漏れ、異音、エラー表示といった家庭で起きやすいトラブルに幅広く対応しています。運営会社が東証グロース市場に上場している点も、はじめて利用する人にとっては相談のしやすさにつながります。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "生活110番"],
                    ["運営会社", "シェアリングテクノロジー株式会社（東証グロース上場）"],
                    ["サービス形態", "加盟店紹介型（全国の提携業者を紹介・マッチング）"],
                    ["対応エリア", "全国（数千社規模の加盟店ネットワークが対応）"],
                    ["受付時間", "24時間365日年中無休（コールセンター受付。訪問時間は加盟店により変動）"],
                    ["対応ジャンル", "エアコン修理ほか150以上の生活トラブル"],
                    ["相談・見積もり", "無料（公称）"],
                    ["公式サイト", "www.seikatsu110.jp"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：生活110番 公式サイト（運営会社情報）、シェアリングテクノロジー株式会社 公式サイト。加盟店数や受付時間は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている利用者の声で目立つのは、
              <strong className="font-semibold">駆けつけの早さと、見積もり・作業の説明の丁寧さ</strong>
              を評価する内容です。はじめて依頼する人でも安心できた、誠実に対応してもらえた、といった声が見られます。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <Stars n={5} />
                  <blockquote className="mt-3 text-slate-800 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">※上記は公式の加盟店レビューや口コミ紹介サイト（limia、駅探PICKS、カジナビ ほか）で公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、加盟店紹介型サービスという性質上、
              <strong className="font-semibold">紹介された加盟店によって対応や料金に差が出る場合がある</strong>
              点は理解しておきたいところです。口コミでも、料金の事前確認や加盟店とのやり取りに関する声が見られます。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>修理を行うのは紹介された加盟店のため、地域や担当業者によって対応スピード・品質に差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>追加作業（配管カバーの取り付けなど）が見積もりに含まれるか、訪問時に確認しておくと安心</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>契約や作業内容のやり取りは加盟店との間で行うのが基本のため、見積もりは書面で確認してから依頼する</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※注意点は、口コミ紹介サイトで指摘されている内容を中立的に要約したものです。実際の対応は加盟店ごとに異なります。</p>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>24時間365日受付で、急なトラブルでも相談しやすい</li>
                  <li>全国の加盟店ネットワークから近い業者を紹介してもらえる</li>
                  <li>相談・見積もりが無料（公称）で相談のハードルが低い</li>
                  <li>運営会社が上場企業で、窓口がはっきりしている安心感</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>修理するのは加盟店のため、対応に差が出ることがある</li>
                  <li>契約・作業内容のやり取りは加盟店との間で行う</li>
                  <li>料金は症状で変わるため、事前の見積もり確認が前提</li>
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
                  <li>夜間や休日など、急なエアコントラブルですぐ相談したい人</li>
                  <li>近くに頼める業者がわからず、まず相談先を探している人</li>
                  <li>窓口がはっきりした全国対応サービスで気軽に相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>あらかじめ業者と料金をじっくり比較して選びたい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。生活110番では相談・見積もりは無料とされており、実際の料金は紹介された加盟店の見積もりで決まります。一般的なエアコン修理の相場としては、簡単な点検が数千円台、ガス補充や基板交換などが必要な場合は数万円台になることもあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口コミでは料金の事前確認に関する声も見られるため、訪問時には作業範囲と総額の見積もりを書面で確認し、追加費用が発生する条件まで聞いたうえで、納得してから依頼するのがおすすめです。可能であれば、複数の業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は一般的な目安です。正確な金額は紹介された加盟店の現地見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。受付は24時間365日年中無休とされています。"],
                ["加盟店の紹介・訪問日時の調整", "症状や地域に合った加盟店を紹介してもらい、訪問日時を調整します。"],
                ["現地確認・見積もり", "加盟店がエアコンの状態を確認し、作業内容と費用を提示します。"],
                ["修理作業", "見積もりに納得後、加盟店が修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払いをして完了です。"],
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
              生活110番は、24時間365日の受付と全国対応で、急なエアコントラブルにすぐ相談できる点が強みの加盟店紹介型サービスです。利用者の声では駆けつけの早さと、見積もり・作業の説明の丁寧さを評価する内容が目立ちます。一方で、実際に修理するのは紹介された加盟店のため、対応や料金に差が出る場合があります。依頼時には見積もりを書面で確認し、追加費用の条件まで聞いたうえで進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは無料相談・見積もりで、症状と費用の目安を確認してみましょう。</p>
              <a href="https://www.seikatsu110.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                生活110番 公式サイトを見る
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
      </article>
    </>
  );
}
