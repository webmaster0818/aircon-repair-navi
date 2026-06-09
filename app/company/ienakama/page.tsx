import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "家仲間コムのエアコン修理の口コミ・評判は？料金・申込方法を徹底調査【2026年最新】｜エアコン修理ナビ",
  description:
    "エアコン工事・修理の業者マッチングサイト「家仲間コム」の口コミ・評判をまとめました。手数料無料で工事費が安くなる傾向や写真見積もりの速さなどの特徴、利用者の声、申込の流れ、メリット・デメリットを中立的に解説します。",
  alternates: { canonical: "/company/ienakama" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "家仲間コムとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "依頼から施工完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "問い合わせ後すぐに写真を送って見積もりを出してもらえて、その速さに驚きました。動きがスムーズで助かりました。",
    who: "利用者の声",
    source: "公式サイト・紹介記事で紹介されている利用者の声",
  },
  {
    body:
      "日程の調整がとても早く、こちらの希望にすぐ合わせてもらえました。やり取りがスピーディーで安心できました。",
    who: "利用者の声",
    source: "公式サイト・紹介記事で紹介されている利用者の声",
  },
  {
    body:
      "複数の業者から見積もりが届くので、料金や対応を比べたうえで納得して依頼先を選べました。",
    who: "利用者の声",
    source: "公式サイト・紹介記事で紹介されている利用者の声",
  },
];

const faqs = [
  {
    q: "家仲間コムの利用に費用はかかりますか？",
    a: "利用者がサイトを使うこと自体は無料とされています。家仲間コムは業者からマッチング手数料を取らない仕組みのため、その分が工事費に上乗せされにくく、結果として工事費が安くなる傾向があるとされています。実際の費用は依頼内容によって変わるため、見積もりで確認してください。",
  },
  {
    q: "見積もりはどのように届きますか？",
    a: "状況がわかる写真などを送ると、登録している業者から見積もりが届く流れです。写真をもとにした見積もりが速いという声があり、複数社の内容を比較して依頼先を選べます。",
  },
  {
    q: "依頼できるのはどんな作業ですか？",
    a: "エアコンの取り付け・取り外し・移設・修理など、エアコンまわりの工事に幅広く対応する業者が登録しています。症状や作業内容を伝えたうえで、対応可能な業者から見積もりを受け取りましょう。",
  },
  {
    q: "業者の質はどう担保されていますか？",
    a: "家仲間コムでは、評価の低い業者を強制退会とする仕組みがあるとされています。利用後の評価が業者の継続に関わるため、品質を意識した運営がされています。ただし担当業者ごとに対応の差は出るため、見積もり内容や口コミを確認して選ぶと安心です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国の登録業者が対応しています。地域によって登録業者の数や対応スピードが異なる場合があるため、依頼時に対応可否を確認しておくとスムーズです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "家仲間コムのエアコン修理の口コミ・評判は？料金・申込方法を徹底調査【2026年最新】",
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
          { name: "家仲間コムの口コミ・評判", href: "/company/ienakama" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            家仲間コムの口コミ・評判は？
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
            エアコンの修理や取り付けを頼みたいとき、料金や対応を比べたうえで依頼先を選べると安心です。
            この記事では、エアコン工事・修理の業者マッチングサイト
            <strong className="font-semibold text-slate-900">家仲間コム</strong>
            について、紹介されている利用者の声、料金の考え方、サービスの特徴、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、公式サイトや紹介サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・登録業者により変わるため、最新の情報は申込時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">家仲間コムとは</h2>
            <p className="leading-8 text-slate-700">
              家仲間コムは、エアコンの取り付け・取り外し・移設・修理などを依頼したい人と、施工業者をつなぐマッチングサイトです。利用者数は26万人を超えるとされ、写真をもとにした見積もりや日程調整のスピードに定評があります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大きな特徴は、マッチングの手数料を業者側から取らない仕組みである点です。その分が工事費に上乗せされにくいため、結果として工事費が安くなる傾向があるとされています。また、評価の低い業者は強制退会となる仕組みがあり、品質を意識した運営がされています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "家仲間コム"],
                    ["運営", "家仲間コム"],
                    ["サービス形態", "エアコン工事・修理の業者マッチングサイト"],
                    ["対応エリア", "全国（登録業者が対応）"],
                    ["利用者数", "26万人超（公称）"],
                    ["特徴", "マッチング手数料が業者からかからない仕組み／低評価業者は強制退会"],
                    ["利用料", "利用者の利用は無料（公称）"],
                    ["公式サイト", "https://www.ienakama.com/aircon/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式・関連サイトの掲載情報。利用者数や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              紹介されている利用者の声で目立つのは、
              <strong className="font-semibold">写真見積もりの速さ</strong>
              と、
              <strong className="font-semibold">日程調整のスムーズさ</strong>
              を評価する内容です。問い合わせから見積もりまでの動きが早く、複数社を比較して選べる点に満足する声が見られます。
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
            <p className="mt-4 text-xs text-slate-400">※上記は公式サイトや紹介記事で公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、登録業者とのマッチング型サービスという性質上、
              <strong className="font-semibold">担当する業者によって対応に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>地域によって登録業者の数や対応スピードに差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>複数社から見積もりが届くため、内容を比較する手間はかかる</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>依頼前に、作業範囲と総額の見積もり・業者の口コミを確認してから決めると安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>手数料が業者からかからない仕組みで、工事費が安くなる傾向がある</li>
                  <li>写真をもとにした見積もりが速く、やり取りがスムーズ</li>
                  <li>複数の業者から見積もりが届き、料金・対応を比較して選べる</li>
                  <li>低評価業者は強制退会となる仕組みで、品質を意識した運営</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>担当する登録業者によって対応に差が出ることがある</li>
                  <li>地域によって登録業者の数に差がある場合がある</li>
                  <li>複数の見積もりを比較する手間がかかる</li>
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
                  <li>料金や対応を比較したうえで依頼先を選びたい人</li>
                  <li>工事費をできるだけ抑えたい人</li>
                  <li>写真を送って手早く見積もりを取りたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>その場ですぐ駆けつけてほしい急ぎのトラブルがある人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方</h2>
            <p className="leading-8 text-slate-700">
              家仲間コムは、業者からマッチング手数料を取らない仕組みのため、その分が工事費に上乗せされにくく、結果として
              <strong className="font-semibold">工事費が安くなる傾向がある</strong>
              とされています。実際の費用は作業内容や登録業者によって変わるため、届いた見積もりの作業範囲と総額を確認しましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              複数の業者から見積もりが届くため、料金だけでなく対応内容や口コミも合わせて比較すると、納得して依頼先を選べます。修理か買い替えかで迷うケースでは、見積もりの内容を踏まえて判断するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は登録業者の見積もりによって異なります。正確な金額は見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から施工完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["サイトで依頼内容を入力", "エアコンの作業内容や状況、写真などを入力して依頼します。"],
                ["業者から見積もりが届く", "登録業者から見積もりが届きます。写真見積もりが速いと評価されています。"],
                ["見積もりを比較・依頼先を選ぶ", "料金・対応・口コミを比べ、納得できる業者を選びます。"],
                ["日程調整・施工", "都合の良い日時を調整し、選んだ業者が作業を行います。"],
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
              家仲間コムは、業者からマッチング手数料を取らない仕組みにより工事費が安くなる傾向があり、写真見積もりや日程調整の速さが強みのマッチングサイトです。利用者の声でも、見積もりのスピードと比較のしやすさを評価する内容が目立ちます。一方で、登録業者によって対応に差が出る場合があるため、見積もりの内容や業者の口コミを確認したうえで依頼先を選ぶと安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の見積もりを比較し、料金と対応をふまえて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコン工事・修理を比較して頼みたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは見積もりを取り寄せて、料金と対応の目安を確認してみましょう。</p>
              <a href="https://www.ienakama.com/aircon/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                家仲間コム公式サイトを見る
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
