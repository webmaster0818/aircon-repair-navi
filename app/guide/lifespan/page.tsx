import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの寿命は何年？標準使用期間10年と平均使用年数13.4年の違い【2026年】",
  description:
    "エアコンの寿命を、公的統計とメーカー公式の情報でご説明します。設計上の標準使用期間は多くのメーカーで10年、内閣府消費動向調査（2026年3月）の平均使用年数は13.4年（買替え理由は故障が66.6%）です。修理と買い替えの判断、部品保有期間の終了で修理できなくなる時期、寿命の兆候を出典とあわせて掲載しています。",
  alternates: { canonical: "/guide/lifespan/" },
};

const UPDATED = "2026年10月25日";

const faqs = [
  {
    q: "エアコンの寿命は何年ですか？",
    a: "目安は2つあります。安全に使用できる設計上の目安である「標準使用期間」は、多くのメーカーで10年とされています（本体のシールに表示・パナソニック公式解説、2026年10月25日確認）。一方、実際の使用年数は、内閣府の消費動向調査（2026年3月調査）で平均13.4年です。公的統計と公式の情報からは、10年が点検・買い替えを検討する目安であり、平均では13年以上使用されているといえます。",
  },
  {
    q: "10年を超えたエアコンは修理できますか？",
    a: "修理できる場合とできない場合があります。メーカーは修理用部品の保有期間（製造打ち切り後おおむね10年）を定めており、この期間を過ぎると部品の在庫がなく、修理を受け付けてもらえない場合があります（パナソニック公式「補修用性能部品の保有期間」でエアコンは10年・2026年10月25日確認）。製造から10年前後の機種は、修理を依頼する前にメーカーの部品の保有状況をご確認ください。",
  },
  {
    q: "寿命のサインにはどんな症状がありますか？",
    a: "冷えない・暖まらない、水漏れ、異音、異臭、勝手に止まる・動かない、エラーコードの頻発などが挙げられます。ただし、これらの症状は経年劣化以外（フィルターの汚れ・ドレンの詰まり・リモコンの電池など）が原因であることも多く、症状ごとにご自身で確認できる切り分けの手順があります。当サイトの症状別ページでは、メーカー公式FAQにもとづく確認手順と修理費用の目安をご説明しています。",
  },
  {
    q: "修理と買い替えは、どちらを選ぶべきですか？",
    a: "当サイトでは、「修理費と買い替え費用の比較」と「製造から10年を超えているかどうか」の2点で判断することをおすすめしています（公的な基準ではなく、当サイトの目安です）。10年を超える機種は、部品保有期間の終了に加え、修理しても他の部品が続けて故障する可能性があります。一方、保証期間内や購入から数年以内であれば、修理が基本となります。詳しくは、修理と買い替えの判断ガイドで、メーカー公式の修理目安額とあわせてご説明しています。",
  },
  {
    q: "エアコンの寿命を延ばす方法はありますか？",
    a: "フィルターのこまめな清掃と、室外機の吹き出し口をふさがない設置が基本です。フィルターの目詰まりは風量の低下や水漏れ・冷えの悪化につながり、機器に余分な負荷をかけます。内部の熱交換器やファンの汚れはご家庭では落としきれないため、汚れや臭いが気になる場合は、分解洗浄（エアコンクリーニング）もご検討ください。",
  },
];

export default function LifespanPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/lifespan/" },
          { name: "エアコンの寿命は何年？", href: "/guide/lifespan/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">買い替え・修理ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの寿命は何年？
            <br className="hidden md:block" />
            「10年」と「13.4年」の2つの数字の意味
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-25">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「エアコンの寿命は10年」といわれることが多いものの、実際には<strong className="font-semibold text-slate-900">平均で13年以上使用されています</strong>。
            この差は、<strong className="font-semibold text-slate-900">安全設計上の目安（標準使用期間）と、実際の使用年数（公的統計）という異なる数字</strong>を指していることによるものです。
            本記事では2つの数字の出典をご説明し、修理と買い替えを判断する基準を出典とあわせて掲載します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-800 mb-1">要点</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>・<strong>設計上の標準使用期間 = 多くのメーカーで10年</strong>（本体のシールで確認可能）</li>
              <li>・<strong>実際の平均使用年数 = 13.4年</strong>（内閣府 消費動向調査・2026年3月調査。買替え理由は「故障」が66.6%）</li>
              <li>・<strong>修理部品の保有期間 = 製造打ち切り後約10年</strong>（終了後は修理自体ができなくなる場合あり）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="standard" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「10年」の根拠：設計上の標準使用期間</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              エアコンには「設計上の標準使用期間」という安全上の目安が定められています。
              パナソニック公式の解説によると、これは<strong>無償保証期間とは別もの</strong>で、標準的な使用条件（運転時間・温湿度など）にもとづき、
              製造された年から安全上支障なく使用できる標準的な期間を指します。<strong>多くのメーカーで壁掛け形エアコンは「10年」に設定</strong>されており、
              エアコン本体に貼ってあるシールなどの表示で確認できます（{UPDATED}確認）。
            </p>
            <p className="text-sm leading-7 text-slate-700">
              この期間を超えてすぐに故障するわけではありませんが、経済産業省の長期使用製品安全表示制度では、標準使用期間を超えて使用すると経年劣化による発火・けが等の事故に至るおそれがあるとされています。そのため、
              10年を超えた機種は、不調の兆候を放置しないことが重要です。
            </p>
          </section>

          <section id="actual" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「13.4年」の根拠：公的統計の平均使用年数</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">指標</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">数値</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出典</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">平均使用年数</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">13.4年</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">内閣府「消費動向調査」（2026年3月実施分・買替えをした世帯の平均・{UPDATED}確認）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">買替え理由の1位</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">故障（66.6%）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">同上。上位品目への買替えなど他の理由を大きく上回り、故障が最多です</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              実際には、故障するまで使用する方が多数を占めています。ただし、夏の最盛期に突然故障した場合は、修理・買い替え工事ともに混み合い、
              <Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2">繁忙期は日数がかかります</Link>。
              10年を超えた機種は、シーズン前の試運転で不調の兆候がないかを確認しておくことをおすすめします。
            </p>
          </section>

          <section id="parts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見落とされやすい修理部品の保有期間</h2>
            <p className="text-sm leading-7 text-slate-700">
              寿命を考えるうえで見落とされやすいのが、<strong>修理用部品の保有期間</strong>です。
              メーカーは修理部品の保有期間を定めており（パナソニックの場合、エアコンは10年）、これを過ぎると
              <strong>部品の在庫がなく、修理ができない</strong>状態になる場合があります（パナソニック公式「補修用性能部品の保有期間」・{UPDATED}確認）。
              製造から10年前後の機種で故障した場合は、修理の受付時に部品の在庫を必ずご確認ください。
              メーカー別の修理目安額は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>にまとめています。
            </p>
          </section>

          <section id="signs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">寿命が疑われる場合の症状別の切り分け</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              使用年数が長い場合でも、実際にはフィルターの汚れやドレンの詰まりなど、<strong>買い替えを必要としない原因</strong>であることが少なくありません。
              当サイトでは、症状ごとにメーカー公式FAQにもとづく確認手順を掲載しています。
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/not-cooling/", label: "冷えない・効きが悪い" },
                { href: "/guide/water-leak/", label: "水漏れがする" },
                { href: "/symptom/noise/", label: "異音がする" },
                { href: "/symptom/bad-smell/", label: "臭いがする" },
                { href: "/symptom/not-starting/", label: "電源が入らない・動かない" },
                { href: "/symptom/error-code/", label: "エラーコードが出る" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section id="decision" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理か買い替えかの判断基準</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">状況</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">判断の目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">保証期間内・購入数年以内</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">修理が基本です。まず保証書と<Link href="/guide/warranty/" className="text-sky-600 underline underline-offset-2">保証の適用範囲</Link>をご確認ください</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">製造から10年未満</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">見積もりを比較し、修理費と買い替え費用を使用年数とあわせてご判断ください（当サイトの目安です）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">製造から10年超</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">部品保有期間の終了や連続した故障のリスクがあるため、買い替えが有利です。省エネ性能の向上もあわせてご考慮ください</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              修理費用の実額データと詳しい判断基準は、<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>・
              <Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2">エアコン修理費用の相場</Link>をご覧ください。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="rounded-2xl border border-slate-200 bg-white group">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-[0.95rem] hover:bg-slate-50">Q{i + 1}. {f.q}</summary>
                  <div className="px-5 pb-4 pt-2 text-sm leading-7 text-slate-700 border-t border-slate-100">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">出典・注記</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm leading-7 text-slate-600">
              <ul className="space-y-1">
                <li>・パナソニック公式「エアコンの買い替え時はいつ？」：設計上の標準使用期間10年・部品保有期間・消費動向調査の引用値（{UPDATED}確認）</li>
                <li>・内閣府「消費動向調査」（令和8（2026）年3月実施分）：ルームエアコンの平均使用年数13.4年・買替え理由 故障66.6%（{UPDATED}確認）</li>
                <li>・パナソニック公式「補修用性能部品の保有期間」：エアコン10年（{UPDATED}確認）</li>
                <li>・経済産業省「長期使用製品安全表示制度」（{UPDATED}確認）</li>
                <li>・平均使用年数の最新値：内閣府の公表資料（調査年により変動）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの比較" },
                { href: "/cost/repair-price/", label: "エアコン修理費用の相場" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/ranking", label: "エアコン修理業者ランキング" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
