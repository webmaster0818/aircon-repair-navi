import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "くらしのマーケットのエアコン修理の口コミ・評判は？料金・選び方を徹底調査【2026年最新】",
  description:
    "マッチング型サービス「くらしのマーケット」のエアコン修理・トラブル対応について、実際の利用者の口コミ・評判を出典付きでまとめました。料金の目安、口コミで業者を選べる仕組み、メリット・デメリット、向いている人まで中立的に解説します。",
  alternates: { canonical: "/company/kurashi-market" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "くらしのマーケットとは" },
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
      "最初のメールのやり取りから実際の作業まで、終始安心してお任せすることができました。",
    who: "利用者の声",
    source: "くらしのマーケット 出店者レビュー／みん評で公開されている利用者の声",
  },
  {
    body:
      "説明が1つ1つとても丁寧で分かりやすく、養生もしっかりしていただけて満足です。",
    who: "利用者の声",
    source: "くらしのマーケット 出店者レビュー／みん評で公開されている利用者の声",
  },
  {
    body:
      "リーズナブルな料金なのに作業の質が高く、エアコンの効きが目に見えて良くなりました。",
    who: "利用者の声",
    source: "口コミ紹介サイト（コツマガ ほか）で公開されている利用者の声",
  },
  {
    body:
      "事前の口コミとメッセージのやり取りで不安を解消できたので、安心して当日を迎えられました。",
    who: "利用者の声",
    source: "くらしのマーケット 出店者レビューで公開されている利用者の声",
  },
];

const faqs = [
  {
    q: "くらしのマーケットはエアコン修理にも対応していますか？",
    a: "くらしのマーケットは、エアコンクリーニングや取り付け・取り外しを中心に、エアコン関連のトラブル対応を行う出店者が多数登録しています。修理対応の可否や範囲は出店者ごとに異なるため、依頼前に各店舗のサービス内容を確認しましょう。冷えない・効かないなどの症状は、メーカー修理が必要な場合もあります。",
  },
  {
    q: "料金は事前にわかりますか？",
    a: "くらしのマーケットの特徴は、各出店者が料金を明示している点です。基本料金や追加料金の目安をページ上で確認でき、予約前にメッセージで質問することもできるため、費用を把握しやすいサービスです。",
  },
  {
    q: "業者の質はどうやって見分ければよいですか？",
    a: "各出店者には利用者の口コミ・評価が蓄積されているため、件数や内容、写真付きレビューを参考に選べます。評価が高く件数が多い出店者を選び、気になる点は予約前にメッセージで確認しておくと、当たり外れを減らしやすくなります。",
  },
  {
    q: "予約はすぐに取れますか？",
    a: "出店者のスケジュールによります。繁忙期（真夏・真冬）は人気の出店者ほど希望日時が埋まりやすいため、早めの予約がおすすめです。対応スピードを重視する場合は、空き状況を複数の出店者に確認するとよいでしょう。",
  },
  {
    q: "当日キャンセルやトラブルが心配です。",
    a: "予約・支払い・やり取りはプラットフォーム上で完結する仕組みのため、記録が残り、はじめての利用でも比較的安心です。ただし作業を行うのは各出店者のため、作業範囲や追加料金の条件は事前にメッセージで確認しておくとトラブルを避けやすくなります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "くらしのマーケットのエアコン修理の口コミ・評判は？料金・選び方を徹底調査【2026年最新】",
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
          { name: "くらしのマーケットの口コミ・評判", href: "/company/kurashi-market" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            くらしのマーケットのエアコン修理の口コミ・評判は？
            <br className="hidden md:block" />
            料金・選び方を徹底調査【2026年最新】
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
            エアコンの不調で業者を探すとき、料金や評判が分からず不安に感じることがあります。
            この記事では、口コミと料金で業者を比較して予約できるマッチング型サービス
            <strong className="font-semibold text-slate-900">くらしのマーケット</strong>
            のエアコン関連サービスについて、実際の利用者の口コミ、料金の目安、選び方、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※くらしのマーケットは、自社で作業を行うのではなく、出店者（個人事業者・店舗）と利用者をつなぐ「マッチング型（マーケットプレイス型）」のサービスです。本記事の口コミは、出店者レビューやみん評・口コミ紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は出店者・時期により変わるため、最新の情報は予約前にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">くらしのマーケットとは</h2>
            <p className="leading-8 text-slate-700">
              くらしのマーケットは、みんなのマーケット株式会社が運営する、暮らしのサービスに特化したインターネット商店街（マーケットプレイス）です。エアコンクリーニングや取り付け・取り外しをはじめ、ハウスクリーニング、不用品回収、家の修理など多数のカテゴリの出張・訪問サービスを、口コミと料金で比較してオンラインで予約できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              出店者数は10万店を超えるとされ、各出店者のページには料金と利用者の口コミが掲載されています。予約・支払い・メッセージのやり取りがプラットフォーム上で完結するため、はじめての人でも業者を選びやすいのが特徴です。エアコンの効きが悪い、汚れが気になるといった悩みに対して、納得して依頼先を選びたい人に向いています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "くらしのマーケット"],
                    ["運営会社", "みんなのマーケット株式会社"],
                    ["サービス形態", "マッチング型（マーケットプレイス型・口コミ比較で予約）"],
                    ["対応エリア", "全国（出店者により対応エリアは異なる）"],
                    ["出店者数", "10万店以上（公称）"],
                    ["エアコン関連", "クリーニング・取り付け・取り外し等（修理対応は出店者により異なる）"],
                    ["料金", "出店者ごとに明示（ページ上で事前確認・メッセージ相談可）"],
                    ["公式サイト", "curama.jp"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：くらしのマーケット 公式サイト、みんなのマーケット株式会社 公式サイト。出店者数や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              公開されている利用者の声で目立つのは、
              <strong className="font-semibold">料金の分かりやすさと、養生・説明の丁寧さ</strong>
              を評価する内容です。メッセージのやり取りから安心できた、口コミを見て選べたので納得できた、といった声が多く見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は出店者レビューやみん評・口コミ紹介サイト（コツマガ ほか）で公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検・作業するスタッフのイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、出店者が多数登録するマッチング型サービスのため、
              <strong className="font-semibold">出店者によってサービス品質や技術にばらつきがある</strong>
              点は理解しておきたいところです。口コミでも、到着時間や仕上がりに関する声が見られます。失敗を避けるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>出店者によって対応スピードや技術レベルに差があるため、口コミの件数・内容をよく確認する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期は人気の出店者ほど希望日時が埋まりやすく、予約が取りにくいことがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業範囲・追加料金の条件は、予約前にメッセージで確認しておくと安心</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※注意点は、みん評・口コミ紹介サイトで指摘されている内容を中立的に要約したものです。実際の対応は出店者ごとに異なります。</p>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>口コミ・評価を見て出店者を選べるので、質を事前に確認しやすい</li>
                  <li>料金が出店者ごとに明示され、比較しやすい</li>
                  <li>予約前にメッセージで直接相談できる</li>
                  <li>予約・支払い・やり取りがプラットフォーム上で完結し記録が残る</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出店者によってサービス品質・技術に差が出ることがある</li>
                  <li>繁忙期は希望日時の予約が取りにくいことがある</li>
                  <li>修理対応の可否は出店者により異なる（クリーニング・設置が中心）</li>
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
                  <li>口コミと料金を比較して、自分で納得して業者を選びたい人</li>
                  <li>エアコンクリーニングや取り付け・取り外しを依頼したい人</li>
                  <li>予約前にメッセージで料金や作業内容を確認しておきたい人</li>
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
              くらしのマーケットでは、料金は各出店者が明示しており、ページ上で基本料金や追加料金の目安を事前に確認できます。エアコンクリーニングは1台あたり数千円〜1万円台が目安で、台数やお掃除機能付きかどうかで変わります。取り付け・取り外しや、症状に応じた作業は内容によって費用が異なります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口コミでは「リーズナブルで質が高い」という声がある一方、出店者によって料金設定が異なるため、複数の出店者を比較し、追加料金が発生する条件まで予約前にメッセージで確認しておくと安心です。冷えない・効かないなど故障の修理は、メーカー修理が適している場合もあるため、症状に応じて選びましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は一般的な目安です。正確な金額は各出店者のページ・見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["出店者を検索・比較", "エリアやサービスで絞り込み、料金と口コミを見比べて出店者を選びます。"],
                ["メッセージで相談・予約", "作業内容や料金を確認し、希望日時で予約します。"],
                ["当日の作業", "出店者が訪問し、養生のうえで作業を行います。"],
                ["動作確認・支払い", "仕上がりを確認し、プラットフォーム上で支払いをします。"],
                ["口コミの投稿", "利用後に口コミを投稿でき、次の利用者の参考になります。"],
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
              くらしのマーケットは、口コミと料金を比較して出店者を選べるマッチング型サービスです。利用者の声では、料金の分かりやすさと、養生・説明の丁寧さ、メッセージで事前に相談できる安心感を評価する内容が目立ちます。一方で、作業するのは各出店者のため、品質や技術にばらつきが出る場合があります。口コミの件数・内容をよく確認し、作業範囲や追加料金の条件を予約前にメッセージで確認しておくと失敗を避けやすくなります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンクリーニングや取り付けには向いていますが、急な故障で今すぐ駆けつけてほしい場合は、緊急対応に強い業者と比較して選ぶとよいでしょう。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミ・料金を見比べて選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">出店者の評価と料金を比較して、納得のいく依頼先を見つけましょう。</p>
              <a href="https://curama.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                くらしのマーケット 公式サイトを見る
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
