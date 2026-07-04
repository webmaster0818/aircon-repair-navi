import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "EPARKくらしのレスキューの評判は悪い？口コミ・料金は高い？他社比較で徹底調査【2026年最新】",
  description:
    "EPARKくらしのレスキューの評判は悪い？口コミ・料金は高い？公式にはない他社との比較・利用者の生の声から、掲載業者の口コミの傾向、料金の目安（要確認）、注意点までエアコン修理の視点で正直に検証。後悔しない選び方も解説します。",
  alternates: { canonical: "/company/epark" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "EPARKくらしのレスキューとは" },
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
      "初めての修理依頼で不安な気持ちでお電話しましたが、オペレーターの方がとても親身に対応してくださり、当日中に職人さんに来ていただけました。",
    who: "エアコン修理の利用者",
    source: "EPARKくらしのレスキュー（rescue.epark.jp）掲載業者の口コミ",
  },
  {
    body:
      "職人の方も不安なことをつたえると、事細かに修理内容や料金についてお話ししてくださり安心してお任せすることができました。",
    who: "エアコン修理の利用者",
    source: "EPARKくらしのレスキュー（rescue.epark.jp）掲載業者の口コミ",
  },
  {
    body:
      "口コミでこちらに決めましたが、口コミにあったように電話対応もよく、工事も丁寧でした。",
    who: "エアコン修理の利用者",
    source: "EPARKくらしのレスキュー（rescue.epark.jp）掲載業者の口コミ",
  },
  {
    body:
      "親身になって相談に乗ってもらい、新しいエアコンもすぐに手配してくださり、明日には快適に過ごせそうです。",
    who: "エアコン修理の利用者",
    source: "EPARKくらしのレスキュー（rescue.epark.jp）掲載業者の口コミ",
  },
];

const faqs = [
  {
    q: "EPARKくらしのレスキューはどんなサービスですか？",
    a: "エアコン修理や水まわり、鍵、ガラス、害虫駆除など、生活の駆けつけサービス業者をWeb上で検索・比較し、電話で予約できるプラットフォームです。掲載されている業者の特徴や料金、口コミを見て選べます。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容、選ぶ業者によって幅があります。掲載業者では基本料金（出張・見積もり無料を掲げる業者もあり）に加え、ガスチャージなどの作業費が加算される形が一般的です。正確な金額は予約・見積もり時に確認してください。",
  },
  {
    q: "口コミは確認できますか？",
    a: "掲載業者の詳細ページに、実際の利用者の口コミが掲載されています。電話対応や作業の丁寧さなどを事前に確認したうえで予約できるのが特徴です。",
  },
  {
    q: "24時間対応していますか？",
    a: "受付時間は掲載業者によって異なり、24時間受付に対応している業者もあります。急ぎの場合は、業者ページや問い合わせ時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "見積もりだけでも相談できますか？",
    a: "掲載業者の中には、出張費・見積もり費用を無料としているところもあります。条件は業者によって異なるため、依頼前に作業範囲と総額を確認し、納得してから契約するのがおすすめです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "EPARKくらしのレスキューの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "EPARKくらしのレスキューの口コミ・評判", href: "/company/epark" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            EPARKくらしのレスキューの口コミ・評判は？
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
            エアコンが急に効かなくなったとき、口コミを見て信頼できる業者を予約できると安心です。
            この記事では、生活トラブルの駆けつけ業者を検索・予約できるプラットフォーム
            <strong className="font-semibold text-slate-900">EPARKくらしのレスキュー</strong>
            のエアコン修理について、掲載業者の実際の口コミ、料金の目安、運営会社や受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、EPARKくらしのレスキュー公式サイト（rescue.epark.jp）の掲載業者ページで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・業者・症状により変わるため、最新の情報は予約時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">EPARKくらしのレスキューとは</h2>
            <p className="leading-8 text-slate-700">
              EPARKくらしのレスキューは、エアコン修理をはじめ、水まわり・鍵・ガラス・害虫駆除・生活家電修理など、暮らしの「困った」に駆けつける業者をWeb上で検索・比較し、電話で予約できるプラットフォームです。各業者の特徴・料金・口コミを見比べて依頼先を選べます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              さまざまな分野のサービスを掲載する大手「EPARK」グループのサービスのひとつで、運営は株式会社REsta。エアコンの「冷えない・効かない」「水漏れ」「ガス漏れ」といったトラブルに対応する業者が掲載されており、口コミを参考にしながら選べる点が支持されています。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-02追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                EPARKくらしのレスキューのような「仲介・マッチング型」は、複数の登録業者から比較して選べるのが利点です。一方で、実際の作業は登録業者が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
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
                    ["サービス名", "EPARKくらしのレスキュー"],
                    ["運営会社", "株式会社REsta（REsta, Inc.）"],
                    ["サービス形態", "生活トラブルの駆けつけ業者を検索・予約できるプラットフォーム"],
                    ["掲載カテゴリ", "エアコン修理・水まわり・鍵・ガラス・害虫駆除・生活家電 ほか"],
                    ["対応エリア", "全国（掲載業者の対応地域による）"],
                    ["受付時間", "業者により異なる（24時間受付対応の業者もあり）"],
                    ["料金確認", "各業者ページで料金・口コミを比較可能"],
                    ["公式サイト", "rescue.epark.jp"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：EPARKくらしのレスキュー公式サイトの掲載情報。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              掲載業者の口コミで目立つのは、
              <strong className="font-semibold">オペレーターや職人の親身な対応</strong>
              と、修理内容・料金をきちんと説明してくれる丁寧さを評価する内容です。当日中に来てもらえた、口コミ通り良かった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記はEPARKくらしのレスキュー公式サイトの掲載業者ページで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、複数の業者が掲載される検索・予約型プラットフォームという性質上、
              <strong className="font-semibold">どの業者を選ぶかで対応や料金が変わる</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>業者によって対応エリア・受付時間・料金が異なるため、各業者ページの確認が前提</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>エアコン修理の専門業者だけでなく生活トラブル全般の業者も掲載されている</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>掲載業者の口コミを見てから予約できる</li>
                  <li>EPARKグループの知名度・予約のしやすさ</li>
                  <li>エアコン以外の生活トラブルもまとめて探せる</li>
                  <li>24時間受付に対応する業者も掲載されている</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>選ぶ業者によって対応・料金に差が出る</li>
                  <li>エアコン専門に特化したサービスではない</li>
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
                  <li>口コミを見て安心して予約したい人</li>
                  <li>知名度のあるプラットフォームから探したい人</li>
                  <li>エアコン以外の暮らしの困りごとも相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>エアコン専門業者に絞って比較したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）と、選ぶ業者によって幅があります。EPARKくらしのレスキューの掲載業者では、
              <strong className="font-semibold">基本料金に加えてガスチャージなどの作業費が加算される</strong>
              形が一般的で、出張費・見積もり費用を無料としている業者もあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              各業者ページで料金と口コミを見比べられるので、複数の業者を比較してから選ぶと納得感が高まります。訪問時には作業範囲と総額の見積もりを確認し、納得してから依頼するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は掲載業者の目安です。正確な金額は各業者の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["業者を検索・比較", "エアコン修理に対応する業者を、口コミや料金で比較して選びます。"],
                ["電話で予約・相談", "気になる業者に電話で相談し、症状や設置状況を伝えます。"],
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
              EPARKくらしのレスキューは、生活トラブルの駆けつけ業者を検索・予約できるプラットフォームで、エアコン修理でも掲載業者の口コミや料金を見比べてから予約できる点が強みです。利用者の声では、オペレーターや職人の親身な対応、修理内容・料金の丁寧な説明を評価する内容が目立ちます。一方で、選ぶ業者によって対応や料金が変わるため、依頼時には見積もりを確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者を比較し、料金と口コミを見比べて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミを見て業者を選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは掲載業者の口コミ・料金を比較して、症状と費用の目安を確認してみましょう。</p>
              <a href="https://rescue.epark.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                EPARKくらしのレスキュー公式サイトを見る
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
