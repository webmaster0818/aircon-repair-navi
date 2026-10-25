import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの室外機が動かない・回らない原因｜故障と正常動作の見分け方【2026年】",
  description:
    "エアコンの室外機が動かない・ファンが回らない場合の切り分けを、公式FAQにもとづいてご説明します。故障ではない正常動作（設定温度到達・霜取り・内部クリーン）の例、運転ランプ点滅による不具合通知の確認、ご自身で確認できる範囲（ブレーカー・室外機まわりの障害物）、修理費用の目安を掲載しています。",
  alternates: { canonical: "/guide/outdoor-unit-not-working/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "冷房中に室外機が止まるのは故障ですか？",
    a: "多くの場合、故障ではありません。エアコンは部屋が設定温度に達すると圧縮機を止め、室外機のファンも停止する制御（いわゆるサーモオフ）が一般的であり、室温が上がると再び動き出します。また、ダイキン公式FAQでは、フィルター自動お掃除機能の作動中に運転が7〜9分停止することがあると案内されています（2026年9月8日確認）。しばらく様子を見て再始動する場合は、正常動作の範囲です。",
  },
  {
    q: "暖房中に室外機が止まり、湯気が出ている場合は故障ですか？",
    a: "霜取り運転の可能性が高いと考えられます。暖房中は室外機の熱交換器に霜が付くため、これを溶かす霜取り運転が自動で行われ、その間は暖房が一時停止します。ダイキン公式FAQでも、暖房運転中の霜取り運転により、霜が溶けた水や湯気が室外機から出ることが案内されています（2026年8月19日確認）。湯気や水が出ていても故障ではありません。",
  },
  {
    q: "室外機がまったく動かず、部屋も冷えない場合は何を確認すればよいですか？",
    a: "まず室内機の運転ランプをご確認ください。ダイキン公式FAQでは、運転ランプが点滅している場合はエアコンの不具合の知らせであり、消灯している場合はリモコンでの運転確認、ブレーカーの確認の順に切り分けるよう案内されています（2026年9月8日確認）。エラーコードが表示されている場合は、エラーコード一覧のガイドで意味をご確認いただけます。あわせて、室外機の吹き出し口が物で塞がれていないかもご確認ください（塞がれていると保護停止の原因となります）。",
  },
  {
    q: "室外機の修理費用はどのくらいかかりますか？",
    a: "原因となる部位により大きく異なります。ファンモータや基板の交換から、圧縮機や冷媒系統の修理まで幅があります。当サイトの修理費用ガイドでは、メーカー公式の目安額と修理業者の実額相場を部位別に掲載しています。室外機の修理は高額になりやすいため、使用年数によっては買い替えとの比較もご検討ください（寿命ガイドをご参照ください）。",
  },
  {
    q: "室外機を自分で分解して確認してもよいですか？",
    a: "分解はお控えください。室外機の内部には高電圧部品と冷媒配管があり、分解すると感電・ガス漏れの危険があるためです。ご自身で安全に行えるのは、「吹き出し口の障害物の撤去」「外から見える範囲でファンに枯れ葉やビニールが絡んでいないかの目視確認」「ブレーカーの確認」までです。それ以上の確認は、点検・修理の依頼をおすすめします。",
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
            室外機が動かない・回らない原因と
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
            「室外機のファンが回っていない」「冷房中なのに室外機が静か」といった症状があっても、
            <strong className="font-semibold text-slate-900">室外機が止まる状況の多くは、故障ではなく正常な制御によるもの</strong>です。
            本記事では、公式FAQの記載にもとづき、故障ではない場合の見分け方をご説明したうえで、不具合の可能性がある場合の確認手順と修理費用の目安をご案内します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">判断の目安</p>
            <p className="text-sm leading-7 text-slate-700">
              <strong>部屋が冷えている（暖まっている）状態で室外機だけが止まっている場合は、ほとんどが正常な動作</strong>です。
              点検が必要となるのは、室外機が動かず、部屋の温度も変わらない場合です。この場合は、運転ランプの点滅の有無、ブレーカー、室外機まわりの順に確認します。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="normal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない「正常な停止」の3つの例</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">状況</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアコンの動作</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">見分け方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">設定温度に到達</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">室温が設定温度に達すると圧縮機が止まり、室外機のファンも停止する制御が一般的です（いわゆるサーモオフ）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">部屋は設定に近い温度に保たれています。室温が変わると再び動き出します</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">暖房中の霜取り運転</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">室外機の熱交換器に付いた霜を溶かす自動運転です。霜が溶けた水や湯気が出ます（ダイキン公式FAQ）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">暖房が一時停止し、室外機から湯気・水が出ます。数分〜十数分で暖房が再開します</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">フィルター自動お掃除</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">連続運転中にフィルター自動お掃除機能が働くと、運転が7〜9分停止します（ダイキン公式FAQ・{UPDATED}確認）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">内部クリーン・おそうじランプが点灯します。終了後は自動で再開します</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※霜取り・お掃除機能の記載はダイキン公式FAQにもとづきます。制御の詳細はメーカー・機種で異なるため、お使いの機種の取扱説明書もご確認ください。
            </p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">部屋も冷えない場合の確認手順（公式FAQにもとづく）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ダイキン公式FAQ「エアコンが運転中に止まる」では、<strong>室内機の運転ランプの状態</strong>を最初の判断基準としています（{UPDATED}確認）。
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>運転ランプが点滅している場合</strong>：エアコンの不具合の知らせです。エラーコードを確認し、<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧ガイド</Link>で意味と対処をご確認ください。</li>
              <li><strong>ランプが消灯している場合</strong>：リモコンで運転操作を行い、反応を確認します。動かない場合は運転中にブレーカーが落ちた可能性があるため、分電盤のエアコン専用ブレーカーを確認します（公式FAQの案内）。</li>
              <li><strong>タイマー等の自動停止機能</strong>：人感センサーで自動停止する機能（ダイキンでは留守エコ・消し忘れ防止設定）が働いた場合は、リモコンにマークが表示されます。設定をご確認ください。</li>
              <li><strong>室外機まわりの環境</strong>：吹き出し口が植木鉢・荷物・雪などで塞がれていると、保護停止の原因となります。障害物を取り除き、外から見える範囲でファンに枯れ葉・ビニールが絡まっていないかも目視でご確認ください（分解はお控えください）。</li>
            </ol>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">改善しない場合の修理費用の考え方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              上記で改善しない場合は、室外機のファンモータ・基板・圧縮機・冷媒系統などの不具合が考えられ、ご自身で原因を特定することはできません。
              費用は部位により大きく異なるため、<Link href="/cost/repair-price/" className="text-sky-700 underline">修理費用ガイド(メーカー公式目安+業者実額)</Link>で部位別の目安を確認してから依頼することをおすすめします。
              室外機の修理は高額になりやすいため、使用年数が10年前後の場合は<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命・買い替え判断のガイド</Link>もあわせてご確認ください。
              依頼先の選び方は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">修理の依頼先の比較ガイド</Link>でご説明しています。
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
                { href: "/cost/repair-price/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
                { href: "/guide/remote-not-working/", label: "リモコンが効かない場合の応急運転" },
                { href: "/guide/where-to-repair/", label: "修理の依頼先の比較" },
                { href: "/guide/noise/", label: "エアコンの異音の原因" },
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
