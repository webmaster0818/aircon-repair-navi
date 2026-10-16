import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのリモコンが効かない・紛失した場合の対処｜本体ボタンでの応急運転【2026年】",
  description:
    "エアコンのリモコンが効かない・紛失した場合の対処を、公式FAQにもとづいてご説明します。ダイキン公式が案内する本体の運転/停止ボタンによる応急運転（自動運転となり温度変更は不可）、リモコン故障の切り分け手順、買い替え・修理の判断を掲載しています。",
  alternates: { canonical: "/guide/remote-not-working/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "リモコンなしでエアコンを動かせますか？",
    a: "動かすことができます。ダイキン公式FAQでは、リモコンが使用できなくなった場合、エアコン本体にある［運転/停止］ボタンで運転と停止ができると案内されています（2026年9月8日確認）。ただし、運転は「自動運転」（室内外の温度・湿度をもとにエアコンが設定を選ぶ運転）となり、運転モード・温度・風量は変更できません。ボタンの位置は機種により異なるため、取扱説明書でご確認ください。多くの機種では、前面パネルを開けた内側にあります。",
  },
  {
    q: "リモコンが故障しているかどうかは、どのように確認できますか？",
    a: "まず電池を新品に交換し、電池の向きを確認することが基本です。それでも反応しない場合の確認方法として、リモコンの送信部が発する赤外線がスマートフォンのカメラ越しに光として見えることが広く知られていますが、機種によっては見えない場合もあります。ダイキンには「リモコンが壊れていないか確認したい」という公式FAQもあるため、お使いのメーカーの公式FAQ・取扱説明書の診断手順に従って確認することをおすすめします。",
  },
  {
    q: "リモコンを紛失した場合、どこで買い替えができますか？",
    a: "純正リモコンは、メーカーの部品販売（ダイキンの場合は公式の別売品購入ページ）で購入できます（2026年9月8日・ダイキン公式FAQの案内を確認）。家電量販店や通販で購入できる汎用リモコン（各社対応）もありますが、機種専用の機能（お掃除設定・センサー関連）は操作できない場合があります。型番をエアコン本体または取扱説明書で確認してからご注文ください。",
  },
  {
    q: "本体ボタンでの運転では温度調整ができません。修理と買い替えのどちらを選ぶべきですか？",
    a: "リモコン単体の問題であれば本体の故障ではないため、リモコンの買い替え（純正または汎用）が最も費用を抑えられます。リモコンを交換しても効かない場合は、本体側の受光部や基板の不具合が考えられるため、点検・修理をご依頼ください。費用の目安は修理費用のガイドを、依頼先は依頼先の比較ガイドをご覧ください。",
  },
  {
    q: "賃貸の備え付けエアコンのリモコンが壊れた場合は誰の負担ですか？",
    a: "備え付け設備の通常使用による故障は、原則として貸主（大家）の負担です。ただし、リモコンの紛失や明らかな過失による破損は、借主の負担となるのが一般的です。ご自身で手配する前に、まず管理会社・大家へご連絡ください。詳しくは賃貸エアコン修理のガイドでご説明しています。",
  },
];

export default function RemoteNotWorkingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/remote-not-working/" },
          { name: "リモコンが効かない", href: "/guide/remote-not-working/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            リモコンが効かない・紛失した場合の対処
            <br className="hidden md:block" />
            本体ボタンによる応急運転の方法
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-08">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンを多く使用する夏や冬には、「リモコンが効かない」「リモコンが見つからない」というトラブルが少なくありません。
            <strong className="font-semibold text-slate-900">リモコンがない場合でも、エアコン本体のボタンで運転できます</strong>。
            本記事ではダイキン公式FAQの案内にもとづき、応急運転の方法、リモコン故障の切り分け、買い替え・修理の判断の順にご説明します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">応急運転の方法（ダイキン公式FAQより）</p>
            <p className="text-sm leading-7 text-slate-700">
              エアコン本体の<strong>[運転/停止]ボタン</strong>で運転・停止ができます。運転は「自動運転」になり、<strong>運転モード・温度・風量の変更はできません</strong>が、応急的に冷暖房を使用することができます。ボタンの位置は機種により異なります（多くは前面パネルの内側にあります）。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">リモコンが効かない場合の切り分け手順</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>電池の交換</strong>：最も多い原因です。2本とも新品に交換し、向きも確認します。</li>
              <li><strong>受光部との間の障害物・距離の確認</strong>：本体の受光部に向けて、近い距離で操作します。直射日光や照明が受光部に強く当たっていると、反応が悪くなる場合があります。</li>
              <li><strong>リモコン側とエアコン側の切り分け</strong>：本体の［運転/停止］ボタンでエアコンが動く場合は、エアコン本体は正常で、リモコン側に原因がある可能性が高いと判断できます。</li>
              <li><strong>メーカーの公式診断</strong>：ダイキンには「リモコンが壊れていないか確認したい」「リモコンに『使えません』と表示される」などの公式FAQがあります。お使いのメーカーの公式FAQ・取扱説明書の手順に従ってください。</li>
            </ol>
          </section>

          <section id="emergency" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">応急運転で可能な操作</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">項目</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">本体ボタンの応急運転</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">運転・停止</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">○ 可能（［運転/停止］ボタン）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">運転モードの選択</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">× 不可。「自動運転」となり、室内外の温度・湿度をもとにエアコンが冷暖房を選択します</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">温度・風量の変更</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">× 不可</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">タイマー等の機能</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">× 不可。細かな操作にはリモコンが必要です</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「エアコン本体の運転停止ボタンでの操作(ルームエアコン)」（{UPDATED}確認）。ボタンの名称・位置・動作はメーカー・機種により異なります(パナソニックなどは「応急運転ボタン」の名称)。お使いの機種の取扱説明書をご確認ください。
            </p>
          </section>

          <section id="replace" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">リモコンの買い替え（純正品と汎用品の違い）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              リモコン側の故障・紛失であれば、本体を修理する必要はなく、リモコンの買い替えで解決します。ダイキン公式FAQでも、リモコンが使用できなくなった場合は購入をすすめ、公式の別売品購入ページを案内しています（{UPDATED}確認）。
              買い替えの選択肢は次の2つです。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>純正リモコン</strong>：メーカーの部品販売・別売品ページで、機種の型番を指定して購入します。すべての機能を使用できます。</li>
              <li><strong>汎用リモコン</strong>：家電量販店・通販で購入でき、価格も手頃ですが、機種専用の機能（お掃除設定・センサー関連など）は操作できない場合があります。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              リモコンを交換しても動かない場合は、本体の受光部・基板側の問題が考えられます。費用の目安は<Link href="/guide/repair-cost/" className="text-sky-700 underline">修理費用ガイド</Link>、依頼先は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">依頼先の比較ガイド</Link>をご覧ください。
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
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない場合の見分け方" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の相場" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸エアコンの修理費用の負担区分" },
                { href: "/guide/where-to-repair/", label: "修理の依頼先の比較" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
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
