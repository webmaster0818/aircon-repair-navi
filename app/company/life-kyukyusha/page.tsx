import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ライフ救急車の評判は悪い？口コミ・料金は高い？エアコン修理を他社比較で徹底調査【2026年最新】",
  description:
    "ライフ救急車の評判は悪い？口コミ・料金は高い？生活トラブルの出張サービスのエアコン修理について、実際の利用者の声・料金の目安・対応エリア・受付時間から、他社と比較したメリット・デメリット、向いている人まで中立的に徹底調査します。",
  alternates: { canonical: "/company/life-kyukyusha" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "ライフ救急車とは" },
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
      "急なトラブルでしたが、24時間受付ですぐに電話がつながり、スピーディーに駆けつけてもらえました。",
    who: "利用者の声",
    source: "紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "年中無休で対応してくれるので、休日のトラブルでも相談できて助かりました。",
    who: "利用者の声",
    source: "紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "電話の受付対応が親切で、状況をしっかり聞き取ったうえで手配してくれました。",
    who: "利用者の声",
    source: "紹介サイトで公開されている利用者の声",
  },
  {
    body:
      "エアコンだけでなく生活まわりのトラブルもまとめて相談できる窓口があるのは便利でした。",
    who: "利用者の声",
    source: "紹介サイトで公開されている利用者の声",
  },
];

const faqs = [
  {
    q: "ライフ救急車は24時間対応していますか？",
    a: "公式・関連サイトでは年中無休・24時間の電話受付に対応しているとされています。ただし、実際の訪問時間は地域や手配状況によって変わるため、急ぎの場合は問い合わせ時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "ライフ救急車は自社で修理するのですか？",
    a: "関連情報によると、ライフ救急車は受付・紹介を担う窓口で、実際の相談・日程調整・見積もり・施工は提携する施工会社（株式会社ARSなど）が対応するとされています。実際に来る担当者や料金は手配先により異なる場合があるため、訪問時に確認しておきましょう。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国の主要都市を中心に幅広く対応しているとされています。地域によって手配される施工会社や対応スピードが異なる点には留意しておきましょう。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。提携施工会社の料金を参考にすると、作業料金は8,000円〜が目安とされ、ガス補充や部品交換などが必要な場合は追加費用がかかります。正確な金額は現地の見積もりで確認し、書面で総額を残してもらうと安心です。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "スピード出張を公称していますが、手配先のスケジュールや繁忙期の状況によって変動します。急ぎの場合は受付時に到着の目安を確認しましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ライフ救急車の評判は悪い？口コミ・料金は高い？エアコン修理を他社比較で徹底調査【2026年最新】",
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
          { name: "ライフ救急車の口コミ・評判", href: "/company/life-kyukyusha" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ライフ救急車の口コミ・評判は？
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
              alt="急な生活トラブルに駆けつける出張サービスのイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの不調をはじめ、急な生活トラブルが起きたとき、年中無休で相談できる出張サービスは心強い存在です。
            この記事では、生活トラブル全般の出張窓口である
            <strong className="font-semibold text-slate-900">ライフ救急車</strong>
            のエアコン修理について、紹介されている利用者の声、料金の目安、対応エリアや受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、紹介サイトなどで公開されている利用者の声を引用・要約したものです。また、ライフ救急車は受付・紹介を担う窓口で、実際の施工は提携する施工会社が対応するとされています。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ライフ救急車とは</h2>
            <p className="leading-8 text-slate-700">
              ライフ救急車は、「生活の救急隊」として年中無休で稼働する生活トラブルの出張サービスです。エアコンの修理・点検だけでなく、水回りや電気系など生活全般のトラブルに幅広く対応しています。冷えない・効かない、水漏れ、異音といった家庭で起きやすいエアコンの不調も相談できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              関連情報によると、ライフ救急車は受付・紹介を担う窓口で、実際の相談・日程調整・見積もり・施工は提携する施工会社（株式会社ARSなど）が対応するとされています。24時間の電話受付・全国対応・スピード出張を公称しており、まず相談先を探している人が利用しやすいサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ライフ救急車"],
                    ["サービス形態", "生活トラブルの受付・紹介窓口（実際の施工は提携施工会社が対応）"],
                    ["主な対応内容", "エアコン修理・点検、水回り、電気系など生活全般のトラブル"],
                    ["対応エリア", "全国主要都市を中心に対応（地域により手配先・対応スピードが異なる）"],
                    ["受付時間", "年中無休・24時間の電話受付（公称。訪問時間は地域・手配状況により変動）"],
                    ["対応スピード", "スピード出張・最短当日（公称）"],
                    ["料金の目安", "提携施工会社の料金で8,000円〜（公称）"],
                    ["公式サイト", "life-kyukyusha.jp"],
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
              <strong className="font-semibold">年中無休・24時間受付の相談しやすさ</strong>
              と、急なトラブルでの駆けつけの早さを評価する内容です。電話がすぐつながった、受付対応が親切だった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は紹介サイトなどで公開されている利用者の声を引用・要約したものです。実際の対応は手配される施工会社により異なる場合があります。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              年中無休で相談しやすい一方で、受付・紹介を担う窓口型のサービスという性質上、
              <strong className="font-semibold">実際に対応する施工会社によって対応に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>窓口と実際の施工会社が異なるため、訪問する担当者や料金は手配先により変わる</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は手配が混み合い、訪問まで時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを口頭だけでなく書面で確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>年中無休・24時間受付で、急なトラブルでも相談しやすい</li>
                  <li>エアコン以外の生活トラブルもまとめて相談できる窓口がある</li>
                  <li>全国主要都市に対応し、スピード出張を公称している</li>
                  <li>まず相談先を探している人が利用しやすい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>受付窓口と施工会社が異なるため、対応に差が出ることがある</li>
                  <li>料金は作業内容で変わるため、事前の見積もり確認が前提</li>
                  <li>繁忙期は手配に時間がかかる場合がある</li>
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
                  <li>夜間や休日など、急なトラブルですぐ相談先を確保したい人</li>
                  <li>エアコンと合わせて生活まわりのトラブルも相談したい人</li>
                  <li>まずは電話で状況を相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>あらかじめ業者と料金をじっくり比較して選びたい人</li>
                  <li>実際に対応する業者を自分で指名して選びたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。ライフ救急車の公式サイトでは具体的な料金表は掲載されていませんが、提携する施工会社の料金を参考にすると、作業料金は
              <strong className="font-semibold">8,000円〜</strong>
              が目安とされています。ガス補充や基板交換など追加作業が必要な場合は、その分の費用が加算されます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              窓口型のサービスでは、実際に来る施工会社によって料金が変わることがあります。口頭での見積もりだけで進めず、訪問時には作業範囲と総額の見積もりを書面で確認し、納得してから依頼するのがおすすめです。可能であれば、複数の業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称・参考の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。受付は年中無休・24時間とされています。"],
                ["手配・訪問日時の調整", "都合の良い日時を調整し、提携施工会社が訪問します。"],
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
              ライフ救急車は、年中無休・24時間受付と全国対応で、急なエアコントラブルや生活まわりの困りごとをまとめて相談できる窓口型のサービスです。利用者の声では相談のしやすさと駆けつけの早さを評価する内容が見られます。一方で、実際の施工は提携する施工会社が担うため、訪問する担当者や料金は手配先によって変わる場合があります。依頼時には見積もりを書面で確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコン・生活トラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは相談・見積もりで、症状と費用の目安を確認してみましょう。</p>
              <a href="https://life-kyukyusha.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ライフ救急車公式サイトを見る
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
