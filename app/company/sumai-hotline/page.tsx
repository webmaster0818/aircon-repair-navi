import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "住まいのホットラインの評判は悪い？口コミ・料金は高い？他社比較で徹底調査【2026年最新】",
  description:
    "住まい（すまい）のホットラインの評判は悪い？口コミ・料金は高い？公式にはない他社との比較・利用者の生の声から、実際の評判と料金の目安（要確認）、受付時間や依頼前に確認したい注意点までエアコン修理の視点で正直に検証。後悔しない選び方も解説します。",
  alternates: { canonical: "/company/sumai-hotline" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "すまいのホットラインとは" },
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
      "繁忙期にも関わらず対応いただき助かりました。ガス充填してからは問題なく使用できています。",
    who: "エアコン修理の利用者",
    source: "すまいのホットライン（hotlines.shop）エアコン修理ページの口コミ",
  },
  {
    body:
      "エアコンが動かない原因を見つけてくれ、現在は問題なく冷房効いてます。",
    who: "エアコン修理の利用者",
    source: "すまいのホットライン（hotlines.shop）エアコン修理ページの口コミ",
  },
  {
    body:
      "調査の結果、ガス漏れとのこと。作業は40分程度で終わりました。全体的に丁寧に対応していただけて助かりました。",
    who: "エアコン修理の利用者",
    source: "すまいのホットライン（hotlines.shop）エアコン修理ページの口コミ",
  },
  {
    body:
      "予約時に料金の説明があったので安心してお任せできました。",
    who: "エアコン修理の利用者",
    source: "すまいのホットライン（hotlines.shop）エアコン修理ページの口コミ",
  },
];

const faqs = [
  {
    q: "すまいのホットラインはどんなサービスですか？",
    a: "暮らしまわりのサービスを、口コミや料金で比較して予約できるプラットフォームです。エアコン修理のほか、クリーニングや家事代行、不用品回収など200種類以上のサービスが掲載されており、登録された店舗の中から比較して選べます。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。掲載されている事例では、ガス漏れの修理が1台あたり16,000円〜19,000円、水漏れが11,000円〜20,000円程度が目安として示されています。実際の金額は依頼する店舗や状況によって変わるため、予約時・見積もり時に確認してください。",
  },
  {
    q: "口コミは確認できますか？",
    a: "各店舗ごとに利用者の口コミや評価が掲載されており、予約前にスタッフの対応や仕事ぶりを確認できます。料金とあわせて口コミを見比べて依頼先を選べるのが特徴です。",
  },
  {
    q: "受付時間は何時までですか？",
    a: "公式サイトでは受付時間が平日10時〜18時と案内されています。各掲載店舗の対応時間は店舗ごとに異なるため、急ぎの場合は店舗ページや問い合わせ時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "見積もりだけでも相談できますか？",
    a: "掲載店舗によっては見積もり・出張の費用を無料としているところもあります。条件は店舗によって異なるため、依頼前に作業範囲と総額を確認し、納得してから契約するのがおすすめです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "すまいのホットラインの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "すまいのホットラインの口コミ・評判", href: "/company/sumai-hotline" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            すまいのホットラインの口コミ・評判は？
            <br className="hidden md:block" />
            エアコン修理の料金・対応エリアを徹底調査【2026年最新】
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
            エアコンが急に効かなくなったとき、口コミや料金を見比べて依頼先を選べると安心です。
            この記事では、暮らしまわりのサービスを比較・予約できるプラットフォーム
            <strong className="font-semibold text-slate-900">すまいのホットライン</strong>
            のエアコン修理について、掲載されている利用者の声、料金の目安、運営会社や受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、すまいのホットライン公式サイト（hotlines.shop）で公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・店舗・症状により変わるため、最新の情報は予約時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">すまいのホットラインとは</h2>
            <p className="leading-8 text-slate-700">
              すまいのホットラインは、エアコン修理をはじめ、クリーニングや家事代行、不用品回収など暮らしまわりの200種類以上のサービスを、口コミと料金で比較して予約できるプラットフォームです。掲載されている店舗の中から、対応内容や評価を見比べて依頼先を選べるのが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンの「冷えない・効かない」「水漏れ」「ガス漏れ」といったトラブルに対応する店舗が掲載されており、各店舗の口コミや料金を確認しながら、自分に合った業者を選べます。地域密着の店舗を見つけやすい点も支持されています。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-02追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                すまいのホットラインのような「仲介・マッチング型」は、複数の登録業者から比較して選べるのが利点です。一方で、実際の作業は登録業者が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">仲介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "すまいのホットライン"],
                    ["運営会社", "HighFive, Inc."],
                    ["サービス形態", "暮らしのサービスを口コミ・料金で比較できる予約プラットフォーム"],
                    ["掲載サービス数", "200種類以上（エアコン修理を含む）"],
                    ["対応エリア", "全国（掲載店舗の対応地域による）"],
                    ["受付時間", "平日10時〜18時（公式案内。店舗ごとの対応時間は異なる）"],
                    ["料金確認", "各店舗ページで料金・口コミを比較可能"],
                    ["公式サイト", "hotlines.shop"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：すまいのホットライン公式サイトの掲載情報。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              掲載されている利用者の声で目立つのは、
              <strong className="font-semibold">原因をきちんと見つけてくれる対応力</strong>
              と、料金説明のわかりやすさを評価する内容です。繁忙期でも対応してもらえた、丁寧だった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記はすまいのホットライン公式サイトのエアコン修理ページで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、複数の店舗が掲載される比較型プラットフォームという性質上、
              <strong className="font-semibold">どの店舗を選ぶかで対応や料金が変わる</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>店舗によって対応エリア・受付時間・料金が異なるため、各店舗ページの確認が前提</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>受付は平日10時〜18時が案内されており、夜間・休日の緊急対応は店舗による</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>口コミと料金を見比べて依頼先を選べる</li>
                  <li>地域密着の店舗を見つけやすい</li>
                  <li>チャットなどで事前に相談・確認しやすい</li>
                  <li>エアコン修理以外の暮らしのサービスもまとめて探せる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>選ぶ店舗によって対応・料金に差が出る</li>
                  <li>受付時間（平日10〜18時）の確認が必要</li>
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
                  <li>口コミと料金を比較してから依頼先を決めたい人</li>
                  <li>地域密着の店舗にお願いしたい人</li>
                  <li>エアコン以外の暮らしの困りごともまとめて相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>深夜・早朝に即時の緊急対応を最優先したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。すまいのホットラインに掲載されている目安では、
              <strong className="font-semibold">ガス漏れの修理が1台あたり16,000円〜19,000円、水漏れが11,000円〜20,000円程度</strong>
              とされています。実際の金額は依頼する店舗や症状によって変わります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              各店舗ページで料金と口コミを見比べられるので、複数の店舗を比較してから選ぶと納得感が高まります。訪問時には作業範囲と総額の見積もりを確認し、納得してから依頼するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は掲載店舗の目安です。正確な金額は各店舗の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["店舗を検索・比較", "エアコン修理に対応する店舗を、口コミや料金で比較して選びます。"],
                ["予約・相談", "気になる店舗にチャットや予約で相談し、症状や設置状況を伝えます。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
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
              すまいのホットラインは、暮らしまわりのサービスを口コミと料金で比較して予約できるプラットフォームです。エアコン修理でも、各店舗の評価や料金を見比べてから依頼先を選べる点が強みで、利用者の声では原因をきちんと突き止めてくれる対応力や料金説明のわかりやすさを評価する内容が目立ちます。一方で、選ぶ店舗によって対応や料金が変わるため、依頼時には見積もりを確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の店舗を比較し、料金と口コミを見比べて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミと料金を比べて選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは店舗の口コミ・料金を比較して、症状と費用の目安を確認してみましょう。</p>
              <a href="https://hotlines.shop/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                すまいのホットライン公式サイトを見る
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
