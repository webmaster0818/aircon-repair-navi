import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの室外機が動かない・回らない原因は？故障と正常動作の見分け方【2026年】",
  description:
    "エアコンの室外機が動かない・ファンが回らないときの切り分けを公式FAQベースで解説。実は故障ではない正常動作(設定温度到達・霜取り・内部クリーン)のケース、運転ランプ点滅=不具合通知の確認、自分でできる範囲(ブレーカー・室外機まわりの障害物)と修理費用の目安まで整理します。",
  alternates: { canonical: "/guide/outdoor-unit-not-working/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "冷房中に室外機が止まるのは故障ですか？",
    a: "多くの場合は故障ではありません。エアコンは部屋が設定温度に達すると圧縮機を止めて室外機のファンも停止する制御(いわゆるサーモオフ)が一般的で、室温が上がればまた動き出します。また、ダイキン公式FAQによると、フィルター自動お掃除機能の作動中に運転が7〜9分停止することもあります(2026年9月8日確認)。しばらく観察して再始動するなら正常動作の範囲です。",
  },
  {
    q: "暖房中に室外機が止まって湯気が出ています。故障ですか？",
    a: "霜取り運転の可能性が高いです。暖房中は室外機の熱交換器に霜が付くため、これを溶かす霜取り運転が自動で入り、その間は暖房が一時停止します。ダイキン公式FAQでも、暖房運転中に霜取り運転で霜が溶けた水や湯気が室外機から出ることが案内されています(2026年8月19日確認)。湯気や水が出ていても故障ではありません。",
  },
  {
    q: "室外機がまったく動かず、部屋も冷えません。何を確認すればいいですか？",
    a: "まず室内機の運転ランプを確認してください。ダイキン公式FAQでは、運転ランプが点滅している場合はエアコンの不具合の知らせ、消灯している場合はリモコンでの運転確認→ブレーカーの確認、という切り分けが案内されています(2026年9月8日確認)。エラーコードが出ている場合はエラーコード一覧のガイドで意味を確認できます。あわせて室外機の吹き出し口が物で塞がれていないかも確認してください(塞がると保護停止の原因になります)。",
  },
  {
    q: "室外機の修理費用はいくらくらいかかりますか？",
    a: "原因の部位により大きく異なります。ファンモータや基板の交換になるケースから、圧縮機や冷媒系統の修理まで幅があり、当サイトの修理費用ガイドでメーカー公式の目安額と修理業者の実額相場を部位別に整理しています。室外機系は高額になりやすく、使用年数によっては買い替えとの比較も現実的です(寿命ガイド参照)。",
  },
  {
    q: "室外機を自分で分解して確認してもいいですか？",
    a: "やめてください。室外機内部は高電圧部品と冷媒配管があり、分解確認は感電・ガス漏れの危険があります。自分で安全にできるのは「吹き出し口の障害物の撤去」「外から見える範囲でファンに枯れ葉やビニールが絡んでいないかの目視」「ブレーカーの確認」までです。それ以上は点検・修理の依頼をおすすめします。",
  },
];

export default function OutdoorUnitPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/outdoor-unit-not-working/" },
          { name: "室外機が動かない", href: "/guide/outdoor-unit-not-working/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            室外機が動かない・回らない原因は？
            <br className="hidden md:block" />
            故障と正常動作の見分け方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-08">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「室外機のファンが回っていない」「冷房中なのに室外機が静か」——心配になる症状ですが、
            実は<strong className="font-semibold text-slate-900">室外機が止まる状況の多くは故障ではなく正常な制御</strong>です。
            この記事では、故障ではないケースを先に消してから、本当に不具合の可能性がある場合の確認手順と修理費用の目安を、公式FAQの記載にもとづいて整理します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">先に結論</p>
            <p className="text-sm leading-7 text-slate-700">
              <strong>部屋が冷えて(暖まって)いるのに室外機だけ止まっている→ほぼ正常</strong>です。
              問題なのは「室外機が動かず、部屋の温度も変わらない」場合。このときは運転ランプ点滅の有無→ブレーカー→室外機まわりの順で確認します。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="normal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない「正常な停止」3パターン</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">状況</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">何が起きているか</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">見分け方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">設定温度に到達</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">室温が設定温度に達すると圧縮機が止まり、室外機ファンも停止する制御が一般的(いわゆるサーモオフ)</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">部屋は快適な温度のまま。室温が変わるとまた動き出す</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">暖房中の霜取り運転</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">室外機の熱交換器に付いた霜を溶かす自動運転。霜が溶けた水や湯気が出る(ダイキン公式FAQ)</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">暖房が一時止まり、室外機から湯気・水。数分〜十数分で暖房再開</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">フィルター自動お掃除</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">連続運転中にフィルター自動お掃除機能が働くと運転が7〜9分停止する(ダイキン公式FAQ・{UPDATED}確認)</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">内部クリーン・おそうじランプが点灯。終われば自動で再開</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※霜取り・お掃除機能の記載はダイキン公式FAQにもとづきます。制御の詳細はメーカー・機種で異なるため、お使いの機種の取扱説明書もご確認ください。
            </p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">部屋も冷えない場合の確認手順（公式FAQベース）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ダイキン公式FAQ「エアコンが運転中に止まる」は、<strong>室内機の運転ランプの状態</strong>を最初の分岐にしています（{UPDATED}確認）。
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>運転ランプが点滅している</strong>——エアコンの不具合の知らせです。エラーコードを確認し、<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧ガイド</Link>で意味と対処を確認してください</li>
              <li><strong>ランプが消灯している</strong>——リモコンで運転操作をして反応を確認。動かない場合は運転中にブレーカーが落ちた可能性があるため、分電盤のエアコン専用ブレーカーを確認します(公式FAQの案内)</li>
              <li><strong>タイマー系の自動停止機能</strong>——人感センサーで自動停止する機能(ダイキンでは留守エコ・消し忘れ防止設定)が働いた場合、リモコンにマークが表示されます。設定を確認してください</li>
              <li><strong>室外機まわりの環境</strong>——吹き出し口が植木鉢・荷物・雪などで塞がれていると保護停止の原因になります。障害物を取り除き、外から見える範囲でファンへの枯れ葉・ビニールの絡まりも目視確認を(分解は不可)</li>
            </ol>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">それでも動かない場合——修理費用の考え方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              上記で改善しない場合は、室外機のファンモータ・基板・圧縮機・冷媒系統などの不具合が考えられ、自分での特定はできません。
              費用は部位により大きく異なるため、<Link href="/guide/repair-cost/" className="text-sky-700 underline">修理費用ガイド(メーカー公式目安+業者実額)</Link>で部位別の水準を確認してから依頼するのがおすすめです。
              室外機系の修理は高額になりやすく、使用10年前後なら<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命・買い替え判断のガイド</Link>との突き合わせも現実的です。
              依頼先の選び方は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">どこに修理を頼む？の比較ガイド</Link>へ。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="rounded-xl border border-slate-200 bg-white">
                  <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-slate-800">{f.q}</summary>
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
                { href: "/guide/remote-not-working/", label: "リモコンが効かない時の応急運転" },
                { href: "/guide/where-to-repair/", label: "修理はどこに頼む？依頼先比較" },
                { href: "/guide/noise/", label: "エアコンがうるさい時の原因" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-700 transition-colors">
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
