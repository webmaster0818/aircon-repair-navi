import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "電気の工事屋さんの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
  description:
    "有資格の電気工事士が対応する「電気の工事屋さん」のエアコン修理について、口コミ・評判をまとめました。実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・デメリット、向いている人まで中立的に解説します。",
  alternates: { canonical: "/company/denki-koujiya" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "電気の工事屋さんとは" },
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
      "問い合わせから1時間ほどで来てくれて、エアコンと室外機の不調をその場で対応してもらえました。迅速で助かりました。",
    who: "利用者の声",
    source: "公式サイトの施工後アンケート・紹介サイトで紹介されている利用者の声",
  },
  {
    body:
      "電話の対応がとても丁寧で、エアコン選びから取り付けまで、こちらの希望に合わせて提案してくれました。",
    who: "利用者の声",
    source: "公式サイトの施工後アンケート・紹介サイトで紹介されている利用者の声",
  },
  {
    body:
      "資格を持った方が来てくれるので、電気まわりの作業も安心して任せられました。説明も分かりやすかったです。",
    who: "利用者の声",
    source: "公式サイトの施工後アンケート・紹介サイトで紹介されている利用者の声",
  },
  {
    body:
      "見積もりの段階で費用の内訳をきちんと説明してくれたので、納得して依頼できました。施工後の保証も安心です。",
    who: "利用者の声",
    source: "公式サイトの施工後アンケート・紹介サイトで紹介されている利用者の声",
  },
];

const faqs = [
  {
    q: "電気の工事屋さんは有資格者が対応しますか？",
    a: "公式では、国家資格を持つ電気工事士が対応するとされています。エアコンの電気系統に関わる作業も任せやすいのが特徴です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "東京・神奈川・埼玉・千葉などの関東圏、大阪・京都・兵庫・奈良・滋賀・和歌山などの関西圏、愛知、福岡といった主要エリアに対応しているとされています（一部エリアを除く）。依頼前に自宅の住所が対応範囲か確認しておくと安心です。",
  },
  {
    q: "出張料や見積もりは有料ですか？",
    a: "公称では出張料が一律3,300円、見積もりは原則無料とされています。条件は時期や作業内容により変わる場合があるため、依頼時に確認しておきましょう。",
  },
  {
    q: "修理できなかった場合も費用はかかりますか？",
    a: "公称では、修理しても直らなかった場合は修理費が0円とされています。詳しい適用条件は依頼時に確認してください。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。ガス補充や部品交換などが必要な場合は追加費用がかかります。正確な金額は現地の見積もりで確認し、書面で総額を残してもらうと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "電気の工事屋さんの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "電気の工事屋さんの口コミ・評判", href: "/company/denki-koujiya" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電気の工事屋さんの口コミ・評判は？
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
              alt="エアコンの電気系統を点検する修理作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが効かない、電源が入らないといったトラブルは、本体だけでなく電気系統が原因のこともあります。
            この記事では、有資格の電気工事士が対応する
            <strong className="font-semibold text-slate-900">電気の工事屋さん</strong>
            のエアコン修理について、実際に紹介されている利用者の声、料金の目安、対応エリアや受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、公式サイトの施工後アンケートや紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">電気の工事屋さんとは</h2>
            <p className="leading-8 text-slate-700">
              電気の工事屋さんは、国家資格を持つ電気工事士が対応する電気工事・修理サービスです。エアコンの取り付けや修理に加え、コンセント・ブレーカー・照明・アンテナなど、住まいの電気まわり全般に対応しています。エアコンが効かない原因が電気系統にあるケースでも相談しやすいのが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              出張料は一律で分かりやすく、見積もりは原則無料を公称。さらに修理しても直らなかった場合は修理費が0円とされており、施工後の保証も用意されています。技術面の安心感を重視する人に向いたサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "電気の工事屋さん"],
                    ["主な対応内容", "エアコン取り付け・修理、コンセント・ブレーカー・照明・アンテナ工事 など"],
                    ["対応する作業者", "有資格の電気工事士（公称）"],
                    ["対応エリア", "東京・神奈川・埼玉・千葉・大阪・京都・兵庫・奈良・愛知・滋賀・福岡・和歌山 など（一部エリアを除く）"],
                    ["出張料", "一律3,300円（公称）"],
                    ["見積もり", "原則無料（公称）"],
                    ["保証", "施工後保証あり（公称）／直らなければ修理費0円"],
                    ["公式サイト", "www.denki-koujiya.jp"],
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
              <strong className="font-semibold">対応の早さと、有資格者ならではの安心感</strong>
              を評価する内容です。問い合わせから到着までが早かった、電話対応や説明が丁寧だった、といった声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は公式サイトの施工後アンケートや紹介サイトで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              技術面の評価が高い一方で、有資格者が丁寧に対応する分、
              <strong className="font-semibold">料金は症状や作業内容によって幅が出る</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は予約が取りにくく、訪問まで時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>対応エリアが主要都市中心のため、地域によっては対応範囲外のことがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、出張料・調査費を含む総額の見積もりを書面で確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>国家資格を持つ電気工事士が対応する安心感がある</li>
                  <li>エアコンの電気系統トラブルにも対応しやすい</li>
                  <li>出張料が一律で分かりやすく、見積もりは原則無料（公称）</li>
                  <li>施工後保証があり、直らなければ修理費0円とされている</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金は症状で変わるため、事前の見積もり確認が前提</li>
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>対応エリアが主要都市中心で、地域によっては対象外のことがある</li>
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
                  <li>有資格者に技術面を安心して任せたい人</li>
                  <li>エアコンの電源・配線など電気系統の不調が疑われる人</li>
                  <li>施工後の保証を重視したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく最安値を最優先したい人</li>
                  <li>対応エリア外の地域に住んでいる人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。電気の工事屋さんでは、出張料が
              <strong className="font-semibold">一律3,300円</strong>
              、見積もりは原則無料とされており、修理しても直らなかった場合は修理費0円を公称しています。ガス補充や基板交換など追加作業が必要な場合は、その分の費用が加算されます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              訪問時には出張料・調査費を含めた作業範囲と総額の見積もりを書面で確認し、納得してから依頼するのがおすすめです。可能であれば、複数の業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝え、おおよその対応内容を確認します。"],
                ["訪問日時の調整", "都合の良い日時を調整し、有資格の電気工事士が訪問します。"],
                ["現地確認・見積もり", "エアコンや電気系統の状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払いをして完了です。施工後保証の内容も確認しましょう。"],
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
              電気の工事屋さんは、国家資格を持つ電気工事士が対応する点と、出張料が一律・見積もり原則無料・直らなければ修理費0円といった分かりやすい料金体系が強みのサービスです。利用者の声では対応の早さと丁寧さ、有資格者ならではの安心感を評価する内容が目立ちます。一方で、料金は症状によって幅が出るため、依頼時には総額の見積もりを書面で確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンや電気まわりのトラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは無料見積もりで、症状と費用の目安を確認してみましょう。</p>
              <a href="https://www.denki-koujiya.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                電気の工事屋さん公式サイトを見る
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
