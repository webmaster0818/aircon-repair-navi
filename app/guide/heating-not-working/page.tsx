import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの暖房が効かない・暖まらない原因｜霜取り・ランプ点滅の見分け方【メーカー公式FAQにもとづく】",
  description:
    "エアコンの暖房が効かない・暖かい風が出ない原因を、ダイキン・パナソニック・日立の公式FAQにもとづいてご説明します。メーカー別の霜取り運転の時間とランプ点滅、故障を疑う目安（日立は25分以上）、公式が案内する3つの対処、霜取りを減らす設定温度、修理を依頼する判断の基準を掲載しています。",
  alternates: { canonical: "/guide/heating-not-working/" },
};

const UPDATED = "2026年10月15日";

const faqs = [
  {
    q: "暖房中に急に暖かい風が出なくなった場合は故障ですか？",
    a: "多くの場合は霜取り運転です。運転ランプが点滅している場合は霜取り中であることが多いと、パナソニック・日立の公式FAQでも案内されています（2026年10月15日確認）。ダイキン公式FAQによると、屋外の温度が低いと室外機に霜がつくため、暖房能力の低下を防ぐ霜取り運転（約3〜10分）が自動で行われます。この間は室内機から暖かい風が出なくなりますが、しばらく待って暖かい風が出れば正常です（2026年9月9日確認）。部屋が設定温度に達して風が止まっている場合もあるため、設定温度を上げて風が出るかを確認することも公式の手順に含まれています。",
  },
  {
    q: "霜取り運転が頻繁で部屋が暖まらない場合は、どうすればよいですか？",
    a: "ダイキン公式FAQでは「暖房の設定温度を1〜2℃下げた運転」が案内されています（2026年9月9日確認）。エアコンの能力を抑えることで霜の付く量が減り、霜取り運転の頻度や時間を軽減できる可能性があるためです。あわせて、風向を下向きにする、サーキュレータで空気を循環させるといった方法により、暖気が天井付近に溜まるのを防ぎ、体感温度の改善が期待できます（いずれも公式FAQの案内です）。",
  },
  {
    q: "ランプの点滅が続き、暖房が再開しない場合はどのくらい待てばよいですか？",
    a: "霜取りにかかる時間は、メーカーや霜の付き方により異なります。ダイキンは約3〜10分、パナソニックは最長12分程度、日立は5〜22分と公式FAQに記載があります(2026年10月15日確認)。日立は「25分以上点滅が続く場合」は正常に動作していない可能性があるとして、販売店または修理相談窓口への相談を案内しています。目安を大きく超えても復帰しない場合は、点滅の状態を記録したうえで点検をご依頼ください。",
  },
  {
    q: "室外機が霜や雪で覆われている場合、お湯をかけて溶かしてもよいですか？",
    a: "お控えください。パナソニック公式コラムでは、霜取りを早めるために水やお湯をかけると再凍結のおそれがあるほか、熱交換器の劣化や電子部品の故障につながると注意を促しています（2026年10月15日確認）。霜はエアコンの霜取り運転に任せ、雪は室外機の吹出口・吸込口まわりの除雪にとどめてください。また、室外機が雪に埋もれると外気を吸い込めず、運転できなくなる可能性があることも、パナソニック公式で案内されています。",
  },
  {
    q: "自分でできる対処はありますか？",
    a: "ダイキン公式FAQでは、次の3つの対処が案内されています。①エアフィルターのお手入れ（ホコリにより風量が弱くなり、部屋全体が暖まりにくくなるため）、②室外機の吹出口・吸込口まわりの障害物の除去（空気の通り道をふさぐと暖房効果が低下するため）、③本体のリセット（電源プラグまたはエアコン専用ブレーカーを1分OFFにしてから戻す）の順にお試しください（2026年9月9日確認）。",
  },
  {
    q: "暖房をつけてもしばらく風が出ないのは故障ですか？",
    a: "仕様によるものです。ダイキン公式FAQによると、暖房運転時は冷風が出ないよう室内機を暖めてから風を出すため、運転開始直後は風が出ません（2026年9月8日確認）。3〜10分ほど待って風が出れば正常です。",
  },
  {
    q: "対処しても暖まらない場合、修理費用はどのくらいかかりますか？",
    a: "フィルター・室外機・リセットで改善しない場合は、冷媒ガスの不足・漏れや部品の不具合が考えられ、ご自身で原因を特定することはできません。ガス関連の修理費用はガス補充の費用ガイドを、その他の修理費用はメーカー公式の目安と業者の実額を掲載した修理費用ガイドをご覧ください。使用年数が10年前後の場合は、暖房能力の高い新機種への買い替えもご検討ください（寿命ガイド）。賃貸の備え付けエアコンは原則として貸主の負担となるため、まず管理会社へご連絡ください。",
  },
];

export default function HeatingNotWorkingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/heating-not-working/" },
          { name: "暖房が効かない", href: "/guide/heating-not-working/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            暖房が効かない・暖まらない原因と
            <br className="hidden md:block" />
            故障と正常動作の見分け方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-15">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            暖房を使用する際の「風がぬるい」「途中で止まる」「なかなか暖まらない」といった症状は、冬に多いトラブルです。
            暖房には、<strong className="font-semibold text-slate-900">冷房にはない、故障と誤解されやすい正常動作が2つ</strong>あります（霜取り運転と予熱）。
            本記事ではダイキン・パナソニック・日立の公式FAQの記載にもとづき、正常動作の見分け方、公式が案内する3つの対処、修理の判断の順にご説明します（{UPDATED}更新）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">判断の目安</p>
            <p className="text-sm leading-7 text-slate-700">
              <strong>途中で暖かい風が止まる場合は、霜取り運転（約3〜10分）の可能性が高い</strong>と考えられます。しばらく待って復帰すれば正常です。
              公式の案内では、霜取りが頻繁な場合は<strong>設定温度を1〜2℃下げる</strong>ことで軽減できる可能性があるとされています。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="normal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない「暖房の正常動作」</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">症状</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアコンの動作（公式FAQ）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対処</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">途中で風が止まる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">霜取り運転（約3〜10分）です。屋外が低温の場合は室外機に霜がつくため、暖房能力の低下を防ぐ目的で自動的に霜を溶かします</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">しばらく待つと復帰します。頻繁な場合は、設定温度を1〜2℃下げることで霜の量を抑えられる可能性があります（公式）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">運転開始直後に風が出ない</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">冷風防止のための予熱です。室内機を暖めてから風を出す仕様です</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">3〜10分待って風が出れば正常です</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">暖まった後に風が弱まる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">設定温度に到達した状態です。暖めすぎを防ぐため、暖かい風が出なくなります</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">設定温度を上げて風が出れば正常です</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「暖まらない、暖かい風がでない(ルームエアコン)」「すぐに運転しない」（2026年9月9日確認）。
            </p>
          </section>

          <section id="maker" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー別：霜取り運転の時間とランプ表示（公式FAQ）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              暖房中に運転が止まり、ランプが点滅している場合は、まず霜取り運転の可能性をご確認ください。待つ時間の目安はメーカーにより異なるため、お使いのメーカーの公式の記載をもとにご判断ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">霜取りの時間（公式）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ランプ表示・見分け方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダイキン</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">約3〜10分</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">室内機から暖かい風が出なくなります。しばらく待って暖かい風が出れば正常です</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">最長12分程度</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">ルーバーが開いたまま運転ランプが点滅し、暖房が止まります。点灯に変わると暖房が再開します。設定温度に達すると約5分止まり、風が出たり止まったりするのも正常です</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">日立</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">5〜22分（予熱は2〜3分）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">運転ランプが点灯と減光をくり返します。暖房開始直後であれば予熱、暖房中・停止後であれば霜取りです。<strong>25分以上点滅が続く場合は点検をご相談ください</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「暖まらない、暖かい風がでない(ルームエアコン)」（2026年9月9日確認）、パナソニック公式「霜取り運転」解説ページ、日立 kadenfan「暖房運転時、運転ランプが点滅します。」（{UPDATED}確認）。三菱電機(霧ヶ峰)のランプ表示は<Link href="/guide/error-code-mitsubishi/" className="underline">三菱のランプ点滅ガイド</Link>をご覧ください。
            </p>
            <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/60 p-5">
              <p className="font-bold text-sky-800 mb-1">霜がつきやすい気象条件</p>
              <p className="text-sm leading-7 text-slate-700">
                パナソニック公式によると、霜が最もつきやすいのは<strong>気温5.5℃〜−7℃で湿度が高いとき</strong>です（−15℃以下は空気が乾燥して霜がつきにくい）。
                雨や雪の寒い日に霜取りが増えるのはこのためであり、故障ではありません。霜取りを早める目的で<strong>室外機に水やお湯をかけることはお控えください</strong>（再凍結や熱交換器・電子部品の故障につながると、公式が注意を促しています）。
              </p>
            </div>
          </section>

          <section id="tips" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">体感温度を改善する公式の方法</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              暖かい空気は部屋の上部に溜まります。ダイキン公式FAQでは、<strong>風向を下向きにする</strong>・<strong>サーキュレータや扇風機で空気を循環させる</strong>ことで効率的に部屋を暖められると案内しています（2026年9月9日確認）。
              足元が寒い場合や、温度計の表示より寒く感じる場合は、故障を疑う前に、まず風向と空気の循環をご確認ください。
            </p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">改善しない場合の3つの対処（公式FAQ）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>エアフィルターのお手入れ</strong>：ホコリが付くと空気を取り込みにくくなって風量が低下し、部屋全体が暖まりにくくなります。</li>
              <li><strong>室外機まわりの障害物の除去</strong>：吹出口・吸込口をふさぐと、暖房効果が弱くなります。雪が積もる地域では、室外機周辺の除雪も行ってください。</li>
              <li><strong>本体のリセット</strong>：運転を停止し、電源プラグ（またはエアコン専用ブレーカー）を1分OFFにしてから戻し、再運転します。</li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              この3つで改善しない場合は、冷媒ガスの不足・漏れや部品の不具合が考えられます。
              ガス関連は<Link href="/cost/gas-refill/" className="text-sky-700 underline">ガス補充の費用ガイド</Link>を、修理費用全般は<Link href="/cost/repair-price/" className="text-sky-700 underline">修理費用の相場ガイド</Link>をご覧ください。
              エラーコードが表示されている場合は、<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧</Link>で意味をご確認いただけます。
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
                { href: "/guide/error-code-mitsubishi/", label: "三菱(霧ヶ峰)のランプ点滅の意味" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/symptom/not-cooling", label: "冷房が冷えない場合の原因と対処" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない場合の見分け方" },
                { href: "/cost/gas-refill/", label: "エアコンのガス補充費用" },
                { href: "/cost/repair-price/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
                { href: "/guide/busy-season/", label: "修理の繁忙期と依頼の時期" },
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
