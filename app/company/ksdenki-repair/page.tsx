import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ケーズデンキの出張修理は高い？診断・出張料の落とし穴と大手 vs 街の業者比較【2026年最新】",
  description:
    "ケーズデンキの出張修理は高い？症状が再現しなくても診断・点検・出張料がかかる落とし穴や、大手量販店 vs 街の業者はどっちが安い・早いかを第三者視点で比較。エアコン修理の料金相場・業者ランキングと合わせて、費用で損しない選び方を解説します。",
  alternates: { canonical: "/company/ksdenki-repair" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "ケーズデンキ 出張修理とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "申込から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "全国に店舗がある大手量販店なので、修理を頼むときも安心して任せられました。問い合わせ先がはっきりしているのがよかったです。",
    who: "利用者の声",
    source: "体験談ブログなどで紹介されている利用者の声",
  },
  {
    body:
      "WEBの受付フォームから申込みができて、手続きがわかりやすかったです。大手量販ならではの安心感がありました。",
    who: "利用者の声",
    source: "体験談ブログなどで紹介されている利用者の声",
  },
];

const faqs = [
  {
    q: "ケーズデンキの出張修理はどうやって申し込みますか？",
    a: "公式サイトの出張修理WEB受付フォームから申込みができます。症状や設置状況、製品情報などを入力して受付を進めます。実際の作業は提携業者が対応する形となっています。",
  },
  {
    q: "診断料や出張料はかかりますか？",
    a: "故障の症状が確認できなかった（再現しなかった）場合などでも、診断料・点検料・出張料が発生する場合があるとされています。費用が気になる場合は、申込時にこれらの費用の有無と金額を確認しておくと安心です。",
  },
  {
    q: "修理料金はどのくらいかかりますか？",
    a: "料金は機種や症状によって変動します。部品代や作業費に加えて、出張・診断にかかる費用が必要になる場合があります。正確な金額は現地での見積もりで確認し、内容に納得してから依頼するのがおすすめです。",
  },
  {
    q: "実際に修理するのはケーズデンキの社員ですか？",
    a: "出張修理の実作業は提携業者が対応する形とされています。窓口・受付はケーズデンキが担うため、申込みから対応までの流れがわかりやすい点が特徴です。",
  },
  {
    q: "どんなエアコンのトラブルに対応していますか？",
    a: "冷えない・効かない、水漏れ、異音、エラー表示など、家庭で起きやすいエアコンのトラブルに対応します。症状を伝えたうえで、対応可否や費用の目安を確認しておくとスムーズです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ケーズデンキエアコン修理の口コミ・評判は？料金・申込方法を徹底調査【2026年最新】",
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
          { name: "ケーズデンキ 出張修理の口コミ・評判", href: "/company/ksdenki-repair" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ケーズデンキ 出張修理の口コミ・評判は？
            <br className="hidden md:block" />
            料金・申込方法を徹底調査【2026年最新】
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
            エアコンが効かない、水漏れや異音が起きたとき、大手家電量販店の出張修理は窓口がはっきりしていて相談しやすい選択肢です。
            この記事では、
            <strong className="font-semibold text-slate-900">ケーズデンキの出張修理</strong>
            について、紹介されている利用者の声、料金の考え方、診断・点検・出張料の注意点、WEB受付の申込方法を、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、体験談ブログや紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・症状により変わるため、最新の情報は申込時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ケーズデンキ 出張修理とは</h2>
            <p className="leading-8 text-slate-700">
              ケーズデンキの出張修理は、全国に店舗を展開する家電量販店ケーズデンキ（ケーズホールディングス）が窓口となる、エアコンなどの家電の出張修理サービスです。公式サイトの出張修理WEB受付フォームから申込みでき、実際の作業は提携業者が対応する形となっています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大手量販店が受付を担うため、問い合わせ先がはっきりしていて相談しやすい点が特徴です。冷えない・水漏れ・異音などのエアコントラブルに、自宅を訪問して対応します。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ケーズデンキ 出張修理"],
                    ["運営会社", "株式会社ケーズホールディングス"],
                    ["サービス形態", "家電量販店による出張修理（受付はケーズデンキ・実作業は提携業者）"],
                    ["申込方法", "出張修理WEB受付フォームから申込み"],
                    ["対応エリア", "全国（店舗網・提携業者が対応）"],
                    ["料金", "機種・症状により変動"],
                    ["費用の注意点", "症状が再現しない場合などでも、診断料・点検料・出張料が発生する場合あり"],
                    ["公式サイト", "https://www.ksdenki.co.jp/store/service/support_repair/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトおよび体験談記事の掲載情報。料金や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              体験談などで紹介されている声で目立つのは、
              <strong className="font-semibold">大手量販店ならではの安心感</strong>
              と、
              <strong className="font-semibold">WEB受付のわかりやすさ</strong>
              を評価する内容です。問い合わせ先がはっきりしていて、申込みの手続きがしやすいという声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は体験談ブログや紹介記事で公開されている利用者の声を引用・要約したものです。掲載されている体験談は限られるため、実際の対応は申込時にご確認ください。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              大手の安心感がある一方で、家電量販店の出張修理という性質上、
              <strong className="font-semibold">診断・点検・出張にかかる費用が別途発生する場合がある</strong>
              点は理解しておきたいところです。費用面で想定外がないよう、申込時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>症状が再現しない場合などでも、診断料・点検料・出張料が発生する場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>料金は機種・症状によって変動するため、事前の見積もり確認が前提</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>実作業は提携業者が担当するため、担当業者によって対応に差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>申込前に、診断・出張料の有無と総額の見積もりを確認しておくと安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>全国展開の大手家電量販店が窓口で、相談先がはっきりしていて安心感がある</li>
                  <li>出張修理WEB受付フォームから手軽に申込みできる</li>
                  <li>設置された状態のエアコンを自宅で点検・修理してもらえる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>診断・点検・出張料が別途発生する場合がある（事前確認推奨）</li>
                  <li>料金は機種・症状で変動するため、見積もり確認が前提</li>
                  <li>実作業は提携業者が担当するため、対応に差が出ることがある</li>
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
                  <li>大手家電量販店の窓口に安心して相談したい人</li>
                  <li>WEBフォームから手軽に出張修理を申し込みたい人</li>
                  <li>自宅まで来てもらって出張修理をしてほしい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>診断・出張料をかけずに料金を最小限に抑えたい人</li>
                  <li>その場で即日駆けつけてほしい急ぎのトラブルがある人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方</h2>
            <p className="leading-8 text-slate-700">
              ケーズデンキの出張修理の料金は、
              <strong className="font-semibold">機種や症状によって変動</strong>
              します。部品代や作業費に加えて、症状が再現しなかった場合などでも、診断料・点検料・出張料が発生する場合があるとされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              想定外の費用を避けるためにも、申込時に診断・出張にかかる費用の有無と金額を確認し、現地では作業範囲と総額の見積もりを提示してもらってから、納得して依頼するのがおすすめです。修理か買い替えかで迷う場合は、見積もり内容を踏まえて判断しましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は機種・症状により変動します。正確な金額は申込・現地の見積もりでご確認ください。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">大手量販店 vs 街の業者、どっちが安い？</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                診断・点検・出張料まで含めると、街の修理業者のほうが安く早いケースもあります。実際の料金相場や、対応が早い業者を比較してから判断すると失敗を防げます。
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/guide/repair-cost" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  エアコン修理の料金相場ガイド →
                </Link>
                <Link href="/ranking" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  修理業者ランキングで比較する →
                </Link>
              </div>
            </div>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申込から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["WEB受付フォームから申込み", "出張修理WEB受付フォームから、症状や設置状況、製品情報を入力して申込みます。"],
                ["費用・条件の確認", "診断料・点検料・出張料の有無や金額など、条件を事前に確認しておくと安心です。"],
                ["訪問日時の調整", "都合の良い日時を調整し、提携業者が訪問します。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業・動作確認・支払い", "見積もりに納得後に修理を実施し、動作を確認して支払いをして完了です。"],
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
              ケーズデンキの出張修理は、全国展開の大手家電量販店が窓口となり、出張修理WEB受付フォームから手軽に申し込める点が強みです。体験談でも、大手量販店ならではの安心感と受付のわかりやすさを評価する声が見られます。一方で、症状が再現しない場合などでも診断・点検・出張料が発生する場合があるため、申込時に費用の有無と金額を確認し、現地の見積もりに納得してから依頼するのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は機種や症状によって費用が変わります。急ぎでないときは複数の選択肢で料金と対応を比較し、納得して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンの出張修理を検討している方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは申込み前に、診断・出張料の有無と費用の目安を確認してみましょう。</p>
              <a href="https://www.ksdenki.co.jp/store/service/support_repair/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ケーズデンキ公式サイトを見る
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
