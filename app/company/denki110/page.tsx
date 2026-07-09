import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "電気工事110番の評判は悪い？口コミ・料金は高い？他社比較で徹底調査【2026年最新】｜エアコン修理ナビ",
  description:
    "電気工事110番の評判は悪い？料金は高い？東証上場企業が運営するサービスの実際の利用者の声・料金の目安・対応エリア・受付時間を他社と比較。メリット・デメリットを中立的に徹底調査します。生活110番とは別運営である点もあわせて紹介します。",
  alternates: { canonical: "/company/denki110" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "電気工事110番とは" },
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
      "問い合わせてから対応が速く、こちらの状況に合わせてすぐに動いてくれました。急いでいたので助かりました。",
    who: "利用者の声",
    source: "safely.co.jp 掲載のレビュー",
  },
  {
    body:
      "深夜にトラブルが起きて不安でしたが、電話するとすぐにつながり、迅速に対応してもらえて安心できました。",
    who: "利用者の声",
    source: "safely.co.jp 掲載のレビュー",
  },
  {
    body:
      "作業が丁寧で、何をどう直すのかをきちんと説明してくれました。任せて良かったと感じています。",
    who: "利用者の声",
    source: "infotop.jp 掲載のレビュー",
  },
];

const faqs = [
  {
    q: "電気工事110番は生活110番と同じサービスですか？",
    a: "いいえ。電気工事110番は「◯◯110番」シリーズの電気工事に特化したサービスで、生活110番とは別運営です。どちらもシェアリングテクノロジー株式会社（東証上場・証券コード3989）が手がける「110番」シリーズに属しますが、サービス区分は分かれています。",
  },
  {
    q: "受付時間は何時から何時までですか？",
    a: "電話受付は全国・年中無休で9:00〜22:00、メールでの問い合わせは24時間受け付けているとされています。急ぎの場合は問い合わせ時に対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "相談や見積もりは無料ですか？",
    a: "公称では無料相談に対応しているとされています。作業内容に納得してから依頼できるよう、訪問時に作業範囲と総額の見積もりを書面で確認してから契約するのがおすすめです。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "公称の目安は7,000円〜とされています。ただし症状や作業内容によって金額は変わるため、最終的な費用は現地の見積もりで確認しましょう。事前に総額を確認しておくと安心です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国の提携業者ネットワークを活かして、幅広い地域に対応しています。地域によって対応スピードや担当業者が異なる点には留意しておきましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "電気工事110番の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "電気工事110番の口コミ・評判", href: "/company/denki110" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電気工事110番の口コミ・評判は？
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
            エアコンが急に効かなくなったり、配線や電源まわりのトラブルが起きたりしたとき、すぐに駆けつけてくれる修理サービスは心強い存在です。
            この記事では、東証上場企業が運営する電気のトラブル対応サービス
            <strong className="font-semibold text-slate-900">電気工事110番</strong>
            について、実際に紹介されている利用者の声、料金の目安、対応エリアや受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、口コミ掲載サイトなどで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">電気工事110番とは</h2>
            <p className="leading-8 text-slate-700">
              電気工事110番は、シェアリングテクノロジー株式会社（東証上場・証券コード3989）が運営する、電気のトラブルに対応する出張サービスです。「◯◯110番」シリーズの電気工事に特化したサービスで、エアコンの取り付け・取り外しや電源・配線まわりのトラブルなど、家庭で起きやすい電気関連の困りごとに幅広く対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              名称が似ているため混同されがちですが、
              <strong className="font-semibold">電気工事110番は生活110番とは別運営のサービス</strong>
              です。いずれも同社が手がける「110番」シリーズに属しますが、扱う分野ごとにサービスが分かれています。全国・年中無休で受付（電話は9:00〜22:00、メールは24時間）に対応し、無料相談を公称しているため、まず相談してみたいという人に向いています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "電気工事110番"],
                    ["運営会社", "シェアリングテクノロジー株式会社（東証上場・証券コード3989）"],
                    ["シリーズ", "「◯◯110番」シリーズの電気工事版（生活110番とは別運営）"],
                    ["対応エリア", "全国（提携業者ネットワークが対応）"],
                    ["受付時間", "年中無休／電話 9:00〜22:00・メール 24時間"],
                    ["相談・見積もり", "無料相談（公称）"],
                    ["料金の目安", "7,000円〜（公称。症状・作業内容により変動）"],
                    ["公式サイト", "https://denki110.net/"],
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
              口コミ掲載サイトで目立つのは、
              <strong className="font-semibold">対応の速さ</strong>
              と、作業の丁寧さを評価する内容です。深夜でもすぐに電話がつながり迅速に対応してもらえた、説明がわかりやすかった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は口コミ掲載サイトなどで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、提携業者のネットワーク型サービスという性質上、
              <strong className="font-semibold">作業内容によっては表示の目安料金より費用がかかる場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>表示の目安は7,000円〜だが、作業内容によっては総額がそれ以上になることがあるため、事前見積もりの確認がおすすめ</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>地域や担当業者によって対応スピード・品質に差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを書面で確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>東証上場企業が運営する「110番」シリーズで安心感がある</li>
                  <li>全国・年中無休で受付し、急なトラブルでも相談しやすい</li>
                  <li>無料相談（公称）で相談のハードルが低い</li>
                  <li>口コミでは対応の速さ・丁寧さを評価する声が見られる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>担当する提携業者によって対応に差が出ることがある</li>
                  <li>表示の目安料金より総額がかかる場合があるため見積もり確認が前提</li>
                  <li>生活110番と名称が似ており混同しやすい（別運営）</li>
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
                  <li>上場企業が運営する大手シリーズに任せたい人</li>
                  <li>急な電気・エアコンのトラブルですぐ相談したい人</li>
                  <li>無料相談で気軽に相談を始めたい人</li>
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
              電気工事やエアコン関連作業の費用は、症状や必要な作業によって幅があります。電気工事110番の公称では、料金の目安は
              <strong className="font-semibold">7,000円〜</strong>
              で、無料相談に対応しているとされています。作業内容によっては、この目安より総額がかかる場合があるため、訪問時に総額を確認しておくと安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理か買い替えかで迷うようなケースもあるため、訪問時には作業範囲と総額の見積もりを書面で確認し、納得してから依頼するのがおすすめです。可能であれば、複数の業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。電話は年中無休 9:00〜22:00、メールは24時間受付とされています。"],
                ["訪問日時の調整", "都合の良い日時を調整し、提携業者が訪問します。"],
                ["現地確認・見積もり", "状態を確認し、作業内容と費用を提示してもらいます。"],
                ["作業の実施", "見積もりに納得後、作業を実施します。"],
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
              電気工事110番は、東証上場企業のシェアリングテクノロジーが運営する「110番」シリーズの電気工事版で、全国・年中無休の受付が強みのサービスです。名称が似ていますが生活110番とは別運営である点に注意しておきましょう。口コミでは対応の速さと作業の丁寧さを評価する声が目立ちます。一方で、作業内容によっては表示の目安より費用がかかる場合があるため、依頼時には見積もりを書面で確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコン・電気のトラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは無料相談で、症状と費用の目安を確認してみましょう。</p>
              <a href="https://denki110.net/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                電気工事110番 公式サイトを見る
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
