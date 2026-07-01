import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";

export const metadata: Metadata = {
  title:
    "テイクサービス（エアコントラブルテイク）の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコントラブルに対応する「テイクサービス（エアコントラブルテイク）」の口コミ・評判をまとめました。実際の利用者の声、料金の目安（10,000円〜）、24時間受付・全国対応エリア、依頼の流れ、メリット・デメリットまで中立的に解説します。",
  alternates: { canonical: "/company/take-service" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "テイクサービスとは" },
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
      "見積もりが安かったので不安もありましたが、実際は思った以上に丁寧な作業で、仕上がりにも問題ありませんでした。",
    who: "利用者の声",
    source: "口コミ紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "連絡してからの動きが早く、対応もスピーディーでした。急いでいたので助かりました。",
    who: "利用者の声",
    source: "口コミ紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "電話の受け答えが丁寧で、作業に来てくれたスタッフの方も親切でした。説明もわかりやすかったです。",
    who: "利用者の声",
    source: "口コミ紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "24時間受付で、都合のよい時間に相談できたのがよかったです。手配までが思ったより早かったです。",
    who: "利用者の声",
    source: "口コミ紹介サイトで公開されている利用者の声",
  },
];

const faqs = [
  {
    q: "テイクサービスは24時間対応していますか？",
    a: "公式・関連サイトでは24時間365日の受付に対応しているとされています。ただし、実際の訪問時間は地域や状況によって変わるため、急ぎの場合は問い合わせ時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国を対応エリアとして案内されています。ただし、地域や時期によっては対応までに時間がかかる場合があるため、依頼前に自宅の住所で対応可能か確認しておくとよいでしょう。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "公称では出張・見積もりに関する案内がありますが、条件は時期や作業内容により異なります。作業内容に納得してから依頼できるよう、訪問時に作業範囲と総額の見積もりを書面で確認してから契約するのがおすすめです。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。ガス補充や部品交換などが必要な場合は追加費用がかかります。正確な金額は現地の見積もりで確認し、口頭だけでなく書面で総額を残してもらうと安心です。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "最短での手配・即日対応を案内していますが、提携スタッフのスケジュールや繁忙期の状況によって変動します。急ぎの場合は受付時に到着の目安を確認しましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "テイクサービスの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "テイクサービスの口コミ・評判", href: "/company/take-service" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            テイクサービスの口コミ・評判は？
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
            エアコンが急に効かなくなったり、水漏れや異音が起きたりしたとき、すぐに動いてくれる修理サービスは心強い存在です。
            この記事では、生活トラブル全般に対応する
            <strong className="font-semibold text-slate-900">テイクサービス（エアコントラブルテイク）</strong>
            のエアコン修理について、実際に紹介されている利用者の声、料金の目安、対応エリアや受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、口コミ紹介サイトなどで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">テイクサービスとは</h2>
            <p className="leading-8 text-slate-700">
              テイクサービスは、エアコンの修理・取り付けをはじめ、ブレーカーやコンセント、アンテナ、換気扇などの電気工事まで幅広く対応する生活トラブル解決サービスです。冷えない・効かない、水漏れ、異音といった家庭で起きやすいエアコンのトラブルにも対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              年間30,000件以上とされる対応実績があり、24時間受付・最短即日対応を公称しています。急なトラブルでも相談しやすく、まずスピーディーに動いてほしいという人に向いているサービスです。
            </p>
            <AffiliateBanner
              slug="take-service"
              heading="公式サイトで詳細・料金を確認する"
              note="24時間受付・最短即日対応。まずは無料相談で症状と費用の目安を確認してみましょう。"
            />
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "テイクサービス"],
                    ["主な対応内容", "エアコン修理・取り付け、電気工事、生活トラブル全般"],
                    ["対応エリア", "全国（地域により対応スピードが異なる）"],
                    ["受付時間", "24時間365日（公称。訪問時間は地域・状況により変動）"],
                    ["対応スピード", "最短即日・最短5分でスタッフ手配（公称）"],
                    ["実績", "年間30,000件以上（公称）"],
                    ["支払い方法", "クレジットカード／現金 など"],
                    ["公式サイト", "www.take-service.net"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式・関連サイトの掲載情報。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              紹介されている利用者の声で目立つのは、
              <strong className="font-semibold">対応の早さ</strong>
              と、作業時の丁寧さを評価する内容です。連絡してからの動きが早かった、スタッフの対応や説明が丁寧だった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は口コミ紹介サイトなどで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、出張型の生活トラブルサービスという性質上、
              <strong className="font-semibold">作業内容によって料金が変わる</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は予約が取りにくく、訪問まで時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>ガス補充や部品交換が必要な場合、当初の見積もりより費用が増えることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを口頭だけでなく書面で確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>24時間受付で、急なトラブルでも相談しやすい</li>
                  <li>最短即日・スピーディーな手配を公称しており緊急時に心強い</li>
                  <li>年間30,000件以上とされる実績があり対応範囲が広い</li>
                  <li>エアコン以外の電気工事もまとめて相談しやすい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金は作業内容で変わるため、事前の見積もり確認が前提</li>
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>地域によっては対応に時間がかかる場合がある</li>
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
                  <li>エアコンと合わせて電気まわりもまとめて頼みたい人</li>
                  <li>とにかくスピーディーに手配してほしい人</li>
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
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。テイクサービスの場合、目安は
              <strong className="font-semibold">10,000円〜</strong>
              程度からとされ、ガス補充や基板交換など追加作業が必要な場合は、その分の費用が加算されます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口頭での見積もりだけで進めず、訪問時には作業範囲と総額の見積もりを書面で確認し、納得してから依頼するのがおすすめです。可能であれば、複数の業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。受付は24時間365日とされています。"],
                ["訪問日時の調整", "都合の良い日時を調整し、スタッフが訪問します。"],
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
              テイクサービスは、24時間受付とスピーディーな手配で、急なエアコントラブルにすぐ相談できる点が強みのサービスです。利用者の声では対応の早さと作業の丁寧さを評価する内容が目立ちます。一方で、料金は作業内容によって変わるため、依頼時には見積もりを書面で確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは相談・見積もりで、症状と費用の目安を確認してみましょう。</p>
              <div className="flex justify-center mb-5">
                <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NKMSH" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www25.a8.net/svt/bgt?aid=260628928534&wid=013&eno=01&mid=s00000014894010006000&mc=1" /></a>
              </div>
              <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" target="_blank" rel="sponsored nofollow" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                テイクサービス公式サイトを見る
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
