import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの寿命は何年？標準使用期間10年と平均使用年数13.6年の違い【2026年】",
  description:
    "エアコンの寿命を公的・公式データで整理。設計上の標準使用期間は多くのメーカーで10年、内閣府消費動向調査の平均使用年数は13.6年（買替え理由は故障が65.1%）。修理か買い替えかの分岐点、部品保有期間切れで修理できなくなるライン、寿命のサインとなる症状まで出典付きで解説します。",
  alternates: { canonical: "/guide/lifespan/" },
};

const UPDATED = "2026年8月21日";

const faqs = [
  {
    q: "エアコンの寿命は結局何年ですか？",
    a: "目安が2つあります。安全に使える設計上の目安「標準使用期間」は多くのメーカーで10年（本体のシールに表示・パナソニック公式解説、2026年8月21日確認）。一方、実際に使われている年数は内閣府の消費動向調査で平均13.6年です（パナソニック公式ページ掲載値）。つまり「10年が点検・買い替え検討のライン、実態は13年前後まで使う人が多い」というのが公的・公式データから言える答えです。",
  },
  {
    q: "10年を超えたエアコンは修理できませんか？",
    a: "できる場合とできない場合があります。メーカーは修理用部品の保有期間（製造打ち切り後おおむね10年）を定めており、これを過ぎると部品がなく修理を断られることがあります（パナソニック公式解説・2026年8月21日確認）。製造から10年前後の機種は、修理を依頼する前にメーカーの部品保有状況を確認するのが確実です。",
  },
  {
    q: "寿命のサインにはどんな症状がありますか？",
    a: "冷えない・暖まらない、水漏れ、異音、異臭、勝手に止まる・動かない、エラーコードの頻発などです。ただしこれらは経年劣化以外（フィルター汚れ・ドレン詰まり・リモコン電池など）が原因のことも多く、症状ごとに自分で確認できる切り分け手順があります。当サイトの症状別ページで、メーカー公式FAQにもとづく確認手順と修理費用の目安を解説しています。",
  },
  {
    q: "修理と買い替えはどちらが得ですか？",
    a: "一般的な分岐は「修理費が新品購入価格の半分を超えるかどうか」と「製造から10年を超えているかどうか」の2軸です。10年超は部品保有期間切れのリスクに加え、修理してもほかの部品が続けて壊れる可能性があります。逆に保証期間内や購入数年以内なら修理が基本です。詳しくは修理と買い替えの判断ガイドで、メーカー公式の修理目安額と合わせて解説しています。",
  },
  {
    q: "エアコンの寿命を延ばす方法はありますか？",
    a: "フィルターのこまめな清掃と、室外機の吹き出し口をふさがない設置が基本です。フィルターの目詰まりは風量低下や水漏れ・冷えの悪化につながり、機器に余計な負荷をかけます。内部の熱交換器やファンの汚れは家庭では落としきれないため、汚れや臭いが気になる場合は分解洗浄（エアコンクリーニング）という選択肢もあります。",
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
            「10年」と「13.6年」2つの数字の意味
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-21">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「エアコンの寿命は10年」とよく言われますが、実際には<strong className="font-semibold text-slate-900">13年以上使われているのが実態</strong>です。
            この差は、<strong className="font-semibold text-slate-900">安全設計上の目安（標準使用期間）と、実際の使用年数（公的統計）という別々の数字</strong>を指しているために生まれます。
            この記事では2つの数字の出どころを整理し、修理か買い替えかを判断するラインを出典付きで解説します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-800 mb-1">結論の早見</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>・<strong>設計上の標準使用期間 = 多くのメーカーで10年</strong>（本体のシールで確認可能）</li>
              <li>・<strong>実際の平均使用年数 = 13.6年</strong>（内閣府 消費動向調査・買替え理由は「故障」が65.1%）</li>
              <li>・<strong>製造打ち切り後約10年で修理部品の保有期間が切れ</strong>、修理自体ができなくなることがある</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="standard" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「10年」の正体：設計上の標準使用期間</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              エアコンには「設計上の標準使用期間」という安全上の目安が定められています。
              パナソニック公式の解説によると、これは<strong>無償保証期間とは別もの</strong>で、標準的な使用条件（運転時間・温湿度など）にもとづき、
              製造された年から安全上支障なく使用できる標準的な期間のこと。<strong>多くのメーカーで壁掛け形エアコンは「10年」に設定</strong>されており、
              エアコン本体に貼ってあるシールなどの表示で確認できます（{UPDATED}確認）。
            </p>
            <p className="text-sm leading-7 text-slate-700">
              この期間を超えてすぐ壊れるわけではありませんが、経年劣化による発煙・発火などの安全リスクが高まる目安とされているため、
              10年を超えた機種は不調のサインを放置しないことが重要です。
            </p>
          </section>

          <section id="actual" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「13.6年」の正体：公的統計の平均使用年数</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">指標</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">数値</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出どころ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">平均使用年数</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">13.6年</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">内閣府「消費動向調査」（パナソニック公式ページ掲載値・{UPDATED}確認）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">買替え理由の1位</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">故障（65.1%）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">同上。上位品目への買替えなどを大きく引き離して故障が最多</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              つまり実態は「壊れるまで使う」人が多数派です。ただし夏の盛りに突然故障すると、修理も買い替え工事も混み合い
              <Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2">繁忙期は日数がかかります</Link>。
              10年を超えたら、シーズン前の試運転で不調の兆しがないか確認しておくのが現実的な自衛策です。
            </p>
          </section>

          <section id="parts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見落としがちな「修理できなくなる」ライン</h2>
            <p className="text-sm leading-7 text-slate-700">
              寿命の議論で見落とされがちなのが<strong>修理用部品の保有期間</strong>です。
              メーカーは修理部品の保有期間を定めており（製造打ち切り後おおむね10年）、これを過ぎると
              <strong>「直したくても部品がなく直せない」</strong>状態になります（パナソニック公式解説・{UPDATED}確認）。
              製造から10年前後の機種で故障した場合は、修理受付時に部品の在庫を必ず確認しましょう。
              メーカー別の修理目安額は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>にまとめています。
            </p>
          </section>

          <section id="signs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">寿命のサイン？と思ったら症状別に切り分け</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              「古いから寿命かも」と思っても、実際にはフィルター汚れやドレン詰まりなど<strong>買い替え不要の原因</strong>であることも多いです。
              症状ごとにメーカー公式FAQベースの確認手順を用意しています。
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
                    <td className="border border-slate-300 px-3 py-2 leading-7">修理が基本。まず保証書と<Link href="/guide/warranty/" className="text-sky-600 underline underline-offset-2">保証の適用範囲</Link>を確認</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">製造から10年未満</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">見積もり比較のうえ、修理費が新品購入価格の半分を超えるなら買い替えも検討</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">製造から10年超</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">部品保有期間切れ・連鎖故障のリスクがあり買い替え優位。省エネ性能の向上分も考慮</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              修理費用の実額データと詳しい分岐は<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えどちらが得か</Link>・
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
                <li>・パナソニック公式「エアコンの買い替え時はいつ？」— 設計上の標準使用期間10年・部品保有期間・消費動向調査の引用値（{UPDATED}確認）</li>
                <li>・内閣府「消費動向調査」— ルームエアコンの平均使用年数13.6年・買替え理由 故障65.1%（上記パナソニック公式ページ掲載値として確認）</li>
                <li>・平均使用年数は調査年により変動します。最新値は内閣府の公表資料をご確認ください</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えどちらが得か" },
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
