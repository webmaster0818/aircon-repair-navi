import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "最安修理.comの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
  description:
    "修理費用を比較できる「最安修理.com」のエアコン修理について、サービスの仕組み、料金の目安、運営会社や対応エリア、メリット・デメリット、向いている人まで中立的に解説します。実際の口コミの扱いについても正直にまとめました。",
  alternates: { canonical: "/company/saiyasu" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "最安修理.comとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "評価されているポイント・口コミの扱い" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const points = [
  "修理費用を比較できる仕組みで、できるだけ費用を抑えたい人に向いている",
  "全国47都道府県の修理業者情報を掲載し、地域から探せる",
  "料金の透明性を重視しており、比較してから依頼先を検討できる",
  "エアコン修理に関するコラム・解説記事も掲載されており、費用相場を学べる",
];

const faqs = [
  {
    q: "最安修理.comはどんなサービスですか？",
    a: "修理費用を比較できる比較メディアです。エアコン修理をはじめ、さまざまな修理について業者の情報や費用相場を比較・検索できます。掲載情報をもとに、できるだけ費用を抑えられる依頼先を探せるのが特徴です。",
  },
  {
    q: "口コミは確認できますか？",
    a: "調査時点では、最安修理.com上にエアコン修理に関する利用者個別の口コミは公開されていません。本記事でも口コミの捏造は行わず、サービスの仕組みや費用相場などの公開情報をもとに紹介しています。実際の評判を知りたい場合は、依頼を検討している個別の修理業者の口コミをあわせて確認するのがおすすめです。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。最安修理.comは費用比較を重視したサービスのため、掲載されている相場情報を参考にしつつ、実際の金額は依頼先の業者の見積もりで確認してください。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国47都道府県の修理業者情報が掲載されており、地域から探せます。実際に対応できるエリアは個別の業者によって異なるため、依頼前に確認しておくと安心です。",
  },
  {
    q: "見積もりだけでも相談できますか？",
    a: "比較メディアという性質上、最終的な見積もりは依頼先の業者に確認する形になります。複数の業者を比較し、作業範囲と総額を確認したうえで、納得してから契約するのがおすすめです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "最安修理.comの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "業者一覧", href: "/ranking" },
          { name: "最安修理.comの口コミ・評判", href: "/company/saiyasu" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            最安修理.comの口コミ・評判は？
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
            エアコン修理は、できるだけ費用を抑えて依頼したいもの。
            この記事では、修理費用を比較できる比較メディア
            <strong className="font-semibold text-slate-900">最安修理.com</strong>
            のエアコン修理について、サービスの仕組み、料金の目安、運営会社や対応エリア、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。口コミの扱いについても正直に記載しています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※最安修理.comは修理費用を比較する比較メディアであり、調査時点ではサイト上にエアコン修理の利用者口コミは公開されていません。本記事では口コミの捏造は行わず、公開情報をもとに紹介しています。料金や対応内容は時期・地域・業者・症状により変わるため、最新の情報はご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">最安修理.comとは</h2>
            <p className="leading-8 text-slate-700">
              最安修理.comは、修理費用を比較できる比較メディアです。エアコン修理をはじめ、さまざまな修理について業者の情報や費用相場を比較・検索でき、できるだけ費用を抑えられる依頼先を探したい人に向いています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営は株式会社マーケットエンタープライズ。全国47都道府県の修理業者情報や、エアコン修理に関する解説コラムが掲載されており、費用相場を学びながら依頼先を検討できるのが特徴です。自社で修理を行う事業者ではなく、情報を比較するためのメディアという点を押さえておきましょう。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "最安修理.com"],
                    ["運営会社", "株式会社マーケットエンタープライズ（MarketEnterprise, Co., Ltd.）"],
                    ["サービス形態", "修理費用を比較できる比較メディア"],
                    ["対応エリア", "全国47都道府県（掲載業者の対応地域による）"],
                    ["掲載内容", "修理業者情報・費用相場・解説コラム など"],
                    ["料金確認", "掲載されている相場をもとに比較・検討"],
                    ["公式サイト", "saiyasu-syuuri.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：最安修理.com公式サイトの掲載情報。対応エリアや掲載内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">評価されているポイント・口コミの扱い</h2>
            <p className="leading-8 text-slate-700 mb-4">
              最安修理.comは修理費用を比較する比較メディアであり、
              <strong className="font-semibold">調査時点ではサイト上にエアコン修理の利用者個別の口コミは公開されていません</strong>
              。そのため本記事では、口コミの捏造は行わず、サービスの仕組みから見た「評価されているポイント」を公開情報にもとづいて整理しています。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              {points.map((p, i) => (
                <li key={i} className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>{p}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              実際の評判を確認したい場合は、最安修理.comで比較したうえで、依頼を検討している個別の修理業者の口コミをあわせてチェックすると、より安心して選べます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※上記はサービスの仕組み・公開情報にもとづく整理であり、利用者個別の口コミではありません。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              費用比較に役立つ一方で、最安修理.comは
              <strong className="font-semibold">自社で修理を行うのではなく、情報を比較するためのメディア</strong>
              である点は理解しておきたいところです。安心して依頼先を選ぶために、次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>実際の修理・見積もりは依頼先の業者に確認する必要がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>掲載の費用相場はあくまで目安で、症状により総額は変わる</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>価格だけでなく、対応スピードや保証・口コミもあわせて比較するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>修理費用を比較して、費用を抑えやすい</li>
                  <li>全国47都道府県の業者情報を地域から探せる</li>
                  <li>費用相場や解説コラムで知識を得てから検討できる</li>
                  <li>料金の透明性を重視している</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>自社修理ではなく、依頼先の業者で見積もりが必要</li>
                  <li>サイト上に利用者の口コミが公開されていない</li>
                  <li>料金は症状で変わるため、最終的な見積もり確認が前提</li>
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
                  <li>とにかく費用を抑えて修理したい人</li>
                  <li>費用相場を調べてから依頼先を検討したい人</li>
                  <li>複数の業者を比較してじっくり選びたい人</li>
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
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。最安修理.comは
              <strong className="font-semibold">費用比較を重視したサービス</strong>
              のため、掲載されている費用相場を参考にしながら、できるだけ費用を抑えられる依頼先を検討できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              ただし、最終的な金額は依頼先の業者の見積もりで決まります。価格だけで選ばず、作業範囲・保証・対応スピードもあわせて確認し、複数の業者を比較してから納得して依頼するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は掲載されている相場の目安です。正確な金額は依頼先業者の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["費用・業者を比較", "最安修理.comで、地域や症状に合う業者・費用相場を比較します。"],
                ["業者に問い合わせ", "依頼を検討する業者に連絡し、症状や設置状況を伝えます。"],
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
              最安修理.comは、修理費用を比較できる比較メディアで、できるだけ費用を抑えて依頼先を探したい人に向いています。全国47都道府県の業者情報や費用相場、解説コラムを参考にしながら検討できる点が強みです。一方で、自社で修理を行うサービスではなく、サイト上に利用者の口コミも公開されていないため、実際の評判は依頼先業者の口コミをあわせて確認するのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。価格だけでなく、対応スピードや保証も含めて複数の業者を比較し、納得してから依頼すると失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">費用を抑えて修理したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは費用相場と業者を比較して、症状と費用の目安を確認してみましょう。</p>
              <a href="https://saiyasu-syuuri.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                最安修理.com公式サイトを見る
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
