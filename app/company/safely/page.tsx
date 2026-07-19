import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "セーフリー（Safely）のエアコン修理は評判が良い？審査・口コミの仕組みを徹底調査【2026年最新】",
  description:
    "暮らしのトラブルポータル「セーフリー（Safely）」の特徴をまとめました。掲載事業者の審査・監視体制、画像付き口コミで比較できる仕組み、マッチング系との違い、利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/safely" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "セーフリーとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "依頼先探しから修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "セーフリーは修理を直接行う業者ですか？",
    a: "セーフリーは修理を直接行う業者ではなく、暮らしのトラブルに対応する事業者を掲載し、口コミで比較できるポータルサイトです。実際の修理は、掲載されている事業者が行います。",
  },
  {
    q: "ほかのマッチングサイトと何が違うのですか？",
    a: "セーフリーは、掲載事業者を審査・監視し、画像や動画付きの口コミで比較できる点を特徴としています。事業者を集めるだけでなく、掲載の質をチェックする体制を設けている点が、一般的なマッチングサイトとの違いとされています。",
  },
  {
    q: "口コミはどの程度信頼できますか？",
    a: "セーフリーでは画像・動画付きの口コミを掲載し、掲載事業者を審査・監視する仕組みを設けています。とはいえ口コミは個人の感想であり、感じ方には差があります。複数の口コミを総合的に見て判断するのがおすすめです。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "料金は依頼先の事業者や症状によって異なります。ポータル上で各事業者の情報や口コミを確認し、問い合わせ時に作業範囲と総額の見積もりを取ってから依頼するのがおすすめです。",
  },
  {
    q: "エアコン修理の事業者も探せますか？",
    a: "はい。セーフリーはエアコンを含む暮らしのトラブルに対応する事業者を掲載しており、エアコン修理の依頼先も口コミ付きで比較しながら探せます。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "セーフリー（Safely）のエアコン修理は評判が良い？審査・口コミの仕組みを徹底調査【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-19",
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
          { name: "セーフリーの口コミ・評判", href: "/company/safely" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理サービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            セーフリーのエアコン修理は評判が良い？
            <br className="hidden md:block" />
            審査・口コミの仕組みを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-19">最終更新：{UPDATED}</time>
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
            エアコンが急に効かなくなったとき、どの業者に頼めばいいか迷う人は少なくありません。そんなときに役立つのが、複数の事業者を口コミ付きで比較できるポータルサイトです。
            この記事では、暮らしのトラブルポータル
            <strong className="font-semibold text-slate-900">セーフリー（Safely）</strong>
            について、掲載事業者の審査・監視体制や、画像付き口コミで比較できる仕組み、マッチング系サービスとの違い、利用前に知っておきたい注意点を中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事では口コミ本文の引用は行わず、確認できた範囲の情報のみをまとめています。料金や対応内容は依頼先の事業者・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年7月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">セーフリーとは</h2>
            <p className="leading-8 text-slate-700">
              セーフリー（Safely）は、株式会社SAFELYが運営する暮らしのトラブルポータルです。エアコンを含む生活まわりのトラブルに対応する事業者を掲載し、利用者は口コミを参考にしながら依頼先を比較・検討できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              最大の特徴は、掲載事業者を審査・監視し、画像や動画付きの口コミで比較できる仕組みを設けている点です。事業者を集めるだけでなく、掲載の質をチェックする体制がある点が、ほかの比較・マッチングサービスとの違いとされています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "セーフリー（Safely）"],
                    ["運営会社", "株式会社SAFELY"],
                    ["サービス種別", "暮らしのトラブルポータル（事業者を口コミで比較）"],
                    ["対応分野", "エアコンを含む暮らしのトラブル全般"],
                    ["差別化のポイント", "掲載事業者の審査・監視／画像・動画付き口コミ"],
                    ["対応エリア", "全国（掲載事業者により対応範囲は異なる）"],
                    ["料金", "依頼先の事業者・症状により変動"],
                    ["公式サイト", "https://safely.co.jp/ec/air/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：セーフリー公式サイトの掲載情報。対応分野やサービス内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。セーフリーの利用体験については、調査時点で第三者の口コミを出典を特定できる形で確認できませんでした。そのため個別の口コミ内容は掲載せず、公式サイトで案内されている仕組みの範囲で整理しています。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>画像・動画付きの口コミで、仕上がりや対応を確認してから依頼先を選べる仕組みがある</li>
                <li>複数の事業者を口コミ付きで見比べられるため、比較検討しやすい構成になっている</li>
                <li>掲載事業者を審査・監視する体制が案内されており、掲載の質に配慮しているとされる</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。第三者の口コミは特定できる形で確認できなかったため、個人の感想に基づく口コミ引用は掲載していません。最新の口コミはセーフリー公式サイトでご確認ください。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              審査・監視された口コミは安心材料になりますが、実際に修理を行うのは掲載されている各事業者です。そのため
              <strong className="font-semibold">依頼先の事業者によって対応や料金に差が出る</strong>
              点は理解しておきたいところです。安心して任せるために、次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>実際の修理は掲載事業者が行うため、事業者ごとに対応・品質・料金に差がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>口コミは個人の感想であり、感じ方に差がある。複数のレビューを総合して判断する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>依頼前に、作業範囲と総額の見積もりを確認してから契約するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>掲載事業者を審査・監視する体制があり、選ぶ際の安心感につながる</li>
                  <li>画像・動画付きの口コミで仕上がりや対応をイメージしやすい</li>
                  <li>複数の事業者を見比べて、納得して依頼先を選べる</li>
                  <li>エアコンを含む暮らしのトラブル全般に対応する事業者を探せる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>実際の修理は掲載事業者が行うため対応に差が出ることがある</li>
                  <li>口コミは個人の感想で、感じ方に差がある</li>
                  <li>料金は事業者・症状で変わるため、事前の見積もり確認が前提</li>
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
                  <li>口コミや作業写真を見て、納得してから依頼先を選びたい人</li>
                  <li>複数の事業者をじっくり比較検討したい人</li>
                  <li>審査・監視された掲載で、安心して業者を探したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>比較せず、今すぐ1社に即決して駆けつけてほしい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方</h2>
            <p className="leading-8 text-slate-700">
              セーフリーは事業者を比較するポータルのため、修理費用は依頼先の事業者や症状によって異なります。エアコン修理の費用は、点検・ガス補充・部品交換などの作業内容によって幅が出ます。ポータル上で各事業者の情報や口コミを確認したうえで、
              <strong className="font-semibold">問い合わせ時に作業範囲と総額の見積もりを取る</strong>
              ことが、費用を把握する近道です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理か買い替えかで迷うようなケースもあるため、見積もりに納得してから依頼するのがおすすめです。可能であれば、複数の事業者から見積もりを取って比較すると、料金と対応の両面で安心して選べます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は依頼先の事業者・症状により変動します。正確な金額は見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼先探しから修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["ポータルで事業者を探す", "セーフリーでエアコン修理に対応する事業者を検索します。"],
                ["口コミ・実績を比較", "画像・動画付きの口コミや実績を見比べ、依頼先の候補を絞ります。"],
                ["問い合わせ・見積もり", "気になる事業者に問い合わせ、症状を伝えて見積もりを取ります。"],
                ["訪問・修理作業", "見積もりに納得後、事業者が訪問して修理を実施します。"],
                ["動作確認・口コミ投稿", "正常に動くか確認して支払い、必要に応じて口コミを投稿します。"],
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
              セーフリーは、掲載事業者を審査・監視し、画像・動画付きの口コミで比較できる暮らしのトラブルポータルです。事業者を集めるだけでなく掲載の質をチェックする体制があるため、口コミや作業写真を見て納得してから依頼先を選びたい人に向いています。複数の事業者を見比べられる点も、比較検討派にとって大きな魅力です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、実際の修理は掲載事業者が行うため、対応や料金には差が出ます。口コミは複数を総合的に見て判断し、依頼前に作業範囲と総額の見積もりを確認しておくと、より安心して任せられます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミを見ながらエアコン修理業者を選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは審査・監視された掲載と口コミで、依頼先を比較してみましょう。</p>
              <a href="https://safely.co.jp/ec/air/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                セーフリー公式サイトを見る
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
