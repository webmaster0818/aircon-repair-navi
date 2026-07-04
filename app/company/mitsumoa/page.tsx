import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ミツモアのエアコン修理の口コミ・評判は？料金・見積もり比較を徹底調査【2026年最新】",
  description:
    "見積もり比較サービス「ミツモア」のエアコン修理・取り付けについて、実際の利用者の口コミ・評判を出典付きでまとめました。最大5社の見積もり比較の仕組み、料金の目安、メリット・デメリット、向いている人まで中立的に解説します。",
  alternates: { canonical: "/company/mitsumoa" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "ミツモアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "見積もり通りで作業も迅速・丁寧でした。明るくハキハキした対応で気持ちよくお願いできました。",
    who: "利用者の声",
    source: "ミツモア エアコン関連サービスのレビュー（公式サイト掲載）で公開されている利用者の声",
  },
  {
    body:
      "時間通りに来ていただき、置き場所の幅が狭く作業しにくい箇所でもスムーズに対応いただけて満足しています。",
    who: "利用者の声",
    source: "ミツモア エアコン取り付けのレビュー（公式サイト掲載）で公開されている利用者の声",
  },
  {
    body:
      "複数の業者さんのレビューを見てから選べたのは、すごく安心感がありました。",
    who: "利用者の声",
    source: "口コミ紹介サイト（かじたいむ ほか）で公開されている利用者の声",
  },
  {
    body:
      "時間通りに来ていただき対応も丁寧で、複数台お願いしましたが動作確認まできちんとしてもらえました。",
    who: "利用者の声",
    source: "ミツモア エアコン関連サービスのレビュー（公式サイト掲載）で公開されている利用者の声",
  },
];

const faqs = [
  {
    q: "ミツモアはどういう仕組みのサービスですか？",
    a: "ミツモアは、依頼内容を入力すると最短1分で最大5社から見積もりが届く、見積もり比較・マッチング型のサービスです。届いた見積もりや各事業者の口コミ・評価を比べて、自分で依頼先を選びます。実際の作業を行うのは選んだ事業者です。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "利用者が見積もりを取るのは無料とされています。質問に答えていく形で条件を入力すると、複数の事業者から見積もりが届くため、相場感をつかみやすいのが特徴です。実際の料金は依頼先の事業者の見積もりで確定します。",
  },
  {
    q: "エアコン修理にも対応していますか？",
    a: "ミツモアではエアコンの取り付け・取り外し、クリーニング、交換などのカテゴリがあり、対応する事業者が登録しています。冷えない・効かないなどの修理対応の可否は事業者により異なるため、見積もり依頼時に症状を伝えて対応可能か確認しましょう。メーカー修理が適している場合もあります。",
  },
  {
    q: "見積もりが届くと必ず依頼しないといけませんか？",
    a: "見積もりを受け取った後に依頼するかどうかは利用者が選べます。複数社の金額・口コミ・対応を比較したうえで、納得できる事業者にだけ依頼すれば問題ありません。",
  },
  {
    q: "依頼までに時間はかかりますか？",
    a: "見積もりは最短数分〜当日に届きますが、各事業者とのやり取りや日程調整を経て依頼が決まるため、急ぎの故障対応では時間がかかる場合があります。すぐに来てほしいケースでは、緊急対応に強い業者と比較するとよいでしょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ミツモアのエアコン修理の口コミ・評判は？料金・見積もり比較を徹底調査【2026年最新】",
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
          { name: "ミツモアの口コミ・評判", href: "/company/mitsumoa" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ミツモアのエアコン修理の口コミ・評判は？
            <br className="hidden md:block" />
            料金・見積もり比較を徹底調査【2026年最新】
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
              alt="室内機のエアコン作業を行うスタッフのイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの修理や取り付けを依頼するとき、料金が適正か分からず迷うことがあります。
            この記事では、最大5社から見積もりを取って比較できるマッチング型サービス
            <strong className="font-semibold text-slate-900">ミツモア</strong>
            のエアコン関連サービスについて、実際の利用者の口コミ、料金の目安、見積もり比較の仕組み、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※ミツモアは、自社で作業を行うのではなく、利用者と事業者をつなぐ「見積もり比較・マッチング型」のサービスです。本記事の口コミは、公式サイト掲載のレビューや口コミ紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は事業者・時期により変わるため、最新の情報は見積もり依頼時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ミツモアとは</h2>
            <p className="leading-8 text-slate-700">
              ミツモアは、株式会社ミツモアが運営する、見積もり比較・受発注プラットフォームです。依頼者が質問に沿って希望条件を選ぶだけで、最短1分で最大5社から見積もりが届く仕組みで、エアコンの取り付け・取り外し、クリーニング、交換など暮らしのサービスから士業・ビジネス分野まで幅広いカテゴリを扱っています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              累計の依頼実績は数百万件規模とされ、各事業者には利用者の口コミ・評価が蓄積されています。複数社の金額と評判を見比べてから依頼先を選べるため、料金の相場を把握しつつ、納得して業者を選びたい人に向いています。エアコンの効きが悪い、買い替えに合わせて設置したいといったニーズに合わせて使えます。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-04追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                ミツモアのような「仲介・マッチング型」は、複数の登録業者から比較して選べるのが利点です。一方で、実際の作業は登録業者が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>迷ったら</strong>：今日・明日中に直したい→直接依頼型に電話、複数の見積もりを比べてから決めたい→仲介型、が1秒で選べる目安です。</p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">仲介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ミツモア"],
                    ["運営会社", "株式会社ミツモア（2017年創業）"],
                    ["サービス形態", "見積もり比較・マッチング型（最大5社の見積もりを比較）"],
                    ["対応エリア", "全国（事業者により対応エリアは異なる）"],
                    ["見積もりスピード", "最短1分で最大5社から見積もり（公称）"],
                    ["エアコン関連", "取り付け・取り外し・クリーニング・交換等（修理対応は事業者により異なる）"],
                    ["見積もり料金", "無料（利用者の見積もり取得は無料）"],
                    ["公式サイト", "meetsmore.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ミツモア 公式サイト、株式会社ミツモア 会社情報（Wikipedia ほか）。対応内容や仕様は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている利用者の声で目立つのは、
              <strong className="font-semibold">作業の迅速さ・丁寧さと、複数社の口コミを見比べて選べる安心感</strong>
              を評価する内容です。見積もり通りに作業してもらえた、時間通りに来てもらえた、といった声が多く見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は公式サイト掲載のレビューや口コミ紹介サイト（かじたいむ ほか）で公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検・作業するスタッフのイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、複数の事業者が登録するマッチング型サービスのため、
              <strong className="font-semibold">満足度は選ぶ事業者によって変わる</strong>
              点は理解しておきたいところです。口コミでは、通知や連絡の仕組みに戸惑ったという声や、事業者による当たり外れに関する声も見られます。失敗を避けるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>事業者によって対応・品質に差が出ることがあるため、口コミの件数・内容をよく確認する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>見積もりから日程調整・依頼まで複数のやり取りが必要で、急ぎの故障対応には時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業範囲・追加料金の条件は、依頼前にチャット等で確認しておくと安心</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※注意点は、公式レビューや口コミ紹介サイトで指摘されている内容を中立的に要約したものです。実際の対応は事業者ごとに異なります。</p>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>最短1分で最大5社から見積もりが届き、料金を比較できる</li>
                  <li>各事業者の口コミ・評価を見て選べる安心感がある</li>
                  <li>見積もり取得が無料で、相場感をつかみやすい</li>
                  <li>チャットで事前に相談・確認ができる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>事業者によって対応・品質に差が出ることがある</li>
                  <li>見積もりから依頼までやり取りが必要で時間がかかる場合がある</li>
                  <li>通知や連絡の仕組みに最初は戸惑うという声もある</li>
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
                  <li>複数社の見積もりを比較して、料金を抑えたい人</li>
                  <li>口コミや評価を見て、自分で納得して業者を選びたい人</li>
                  <li>エアコンの取り付け・取り外しやクリーニングを依頼したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>今すぐ駆けつけてほしい緊急の故障対応を求めている人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ミツモアでは、見積もりの取得は無料で、実際の料金は依頼先の事業者の見積もりで決まります。最大5社から見積もりが届くため、相場を把握しながら比較しやすいのが特徴です。エアコンの取り付けは標準工事で1万円台〜、クリーニングは1台あたり数千円〜1万円台が目安で、台数・機種・追加工事の有無によって変わります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口コミでは「見積もり通りで安心できた」という声がある一方、事業者によって料金や対応が異なるため、金額だけでなく口コミの内容も合わせて確認しましょう。追加料金が発生する条件まで依頼前にチャットで確認しておくと安心です。冷えない・効かないなどの故障は、メーカー修理が適している場合もあります。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は一般的な目安です。正確な金額は届いた見積もり・事業者との確認でご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["条件を入力して見積もり依頼", "質問に沿って希望条件を選ぶだけで、最短1分で見積もり依頼が完了します。"],
                ["最大5社から見積もりが届く", "複数の事業者から金額が届くので、口コミと合わせて比較します。"],
                ["チャットで相談・依頼先を決定", "気になる点を確認し、納得できる事業者に依頼します。"],
                ["当日の作業", "事業者が訪問し、見積もり内容に沿って作業を行います。"],
                ["動作確認・支払い・口コミ投稿", "仕上がりを確認して支払い、利用後に口コミを投稿できます。"],
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
              ミツモアは、最短1分で最大5社から見積もりが届き、料金と口コミを見比べて依頼先を選べる見積もり比較・マッチング型サービスです。利用者の声では、作業の迅速さ・丁寧さと、複数社を比較できる安心感を評価する内容が目立ちます。一方で、作業するのは選んだ事業者のため満足度に差が出る場合があり、見積もりから依頼まで時間がかかることもあります。口コミの内容をよく確認し、追加料金の条件まで依頼前に確認しておくと失敗を避けやすくなります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金を比較したい取り付け・クリーニングには向いていますが、今すぐ駆けつけてほしい急な故障対応は、緊急対応に強い業者と比較して選ぶとよいでしょう。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">複数社の見積もりを比較したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">最大5社の料金と口コミを見比べて、納得のいく依頼先を見つけましょう。</p>
              <a href="https://meetsmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ミツモア 公式サイトを見る
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
