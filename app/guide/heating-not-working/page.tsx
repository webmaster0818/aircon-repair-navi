import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの暖房が効かない・暖まらない原因は？霜取り・ランプ点滅の見分け方【メーカー公式FAQ準拠】",
  description:
    "エアコンの暖房が効かない・暖かい風が出ない原因を、ダイキン・パナソニック・日立の公式FAQで解説。霜取り運転の時間とランプ点滅(メーカー別)、故障を疑う目安(日立は25分以上)、公式の対処3つ、霜取りを減らす設定温度、修理に進む判断まで整理します。",
  alternates: { canonical: "/guide/heating-not-working/" },
};

const UPDATED = "2026年10月15日";

const faqs = [
  {
    q: "暖房中に急に暖かい風が出なくなりました。故障ですか？",
    a: "多くの場合は霜取り運転です。運転ランプが点滅していれば霜取り中の合図であることが多く、パナソニック・日立の公式FAQもそう案内しています(2026年10月15日確認)。ダイキン公式FAQによると、屋外の温度が低いと室外機に霜がつき、暖房する力が弱くなるのを防ぐため霜取り運転(約3〜10分)が自動で入ります。この間は室内機から暖かい風が出なくなりますが、しばらく待って暖かい風が出れば正常です(2026年9月9日確認)。部屋が設定温度に達して風が止まっている場合もあるので、設定温度を上げて風が出るかの確認も公式の手順です。",
  },
  {
    q: "霜取り運転が頻繁で、なかなか暖まりません。どうすればいいですか？",
    a: "ダイキン公式FAQは「暖房の設定温度を1〜2℃下げた運転」を案内しています(2026年9月9日確認)。エアコンの能力を抑えることで霜の付く量を抑え、霜取り運転の頻度や時間を軽減できる可能性がある、という公式のテクニックです。あわせて風向を下向きにする・サーキュレータで空気を循環させると、暖気が天井に溜まるのを防いで体感の暖まりが改善します(これも公式FAQの案内です)。",
  },
  {
    q: "ランプがずっと点滅していて暖房が再開しません。どのくらい待てばいいですか？",
    a: "霜取りにかかる時間はメーカー・霜の付き方で違います。ダイキンは約3〜10分、パナソニックは最長12分程度、日立は5〜22分と公式FAQに記載があります(2026年10月15日確認)。日立は「25分以上点滅が続く場合」は正常に動作していない可能性があるとして、販売店または修理相談窓口への相談を案内しています。目安を大きく超えて復帰しない場合は、点滅のしかたをメモして点検を依頼してください。",
  },
  {
    q: "室外機が霜や雪で真っ白です。お湯をかけて溶かしてもいいですか？",
    a: "やめてください。パナソニック公式コラムは、霜取りを早めようと水やお湯をかけると再凍結の恐れがあるほか、熱交換器の劣化や電子部品の故障につながると注意しています(2026年10月15日確認)。霜はエアコンの霜取り運転に任せ、雪は室外機の吹出口・吸込口まわりを除雪するにとどめます。室外機が雪に埋もれると外気を吸い込めず運転できなくなる可能性がある、というのもパナソニック公式の案内です。",
  },
  {
    q: "自分でできる対処はありますか？",
    a: "ダイキン公式FAQが案内するのは3つです。①エアフィルターのお手入れ(ホコリで風量が弱くなり部屋全体が暖まりにくくなる)、②室外機の吹出口・吸込口まわりの障害物の除去(空気の通り道をふさぐと暖房効果が低下)、③本体のリセット(電源プラグまたはエアコン専用ブレーカーを1分OFFにして戻す)——の順で試してください(2026年9月9日確認)。",
  },
  {
    q: "暖房をつけてもしばらく風が出ないのは故障ですか？",
    a: "仕様です。ダイキン公式FAQによると、暖房運転時は冷風が出ないように室内機を暖めてから風を出すため、運転開始直後は風が出ません(2026年9月8日確認)。3〜10分ほど待って風が出れば正常です。",
  },
  {
    q: "対処しても暖まりません。修理費用はどのくらいかかりますか？",
    a: "フィルター・室外機・リセットで改善しない場合は、冷媒ガスの不足・漏れや部品の不具合が考えられ、自分での特定はできません。ガス系の修理費用はガス補充の費用ガイド、その他はメーカー公式目安と業者実額をまとめた修理費用ガイドをご覧ください。使用10年前後なら暖房能力の高い新機種への買い替え比較(寿命ガイド)も現実的です。賃貸の備え付けなら原則貸主負担のため、まず管理会社へ連絡してください。",
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
            暖房が効かない・暖まらない原因は？
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
            寒くなって暖房を入れたら「風がぬるい」「途中で止まる」「なかなか暖まらない」——冬の定番トラブルです。
            実は暖房には<strong className="font-semibold text-slate-900">冷房にはない「故障に見える正常動作」が2つ</strong>あります(霜取り運転と予熱)。
            この記事ではダイキン・パナソニック・日立の公式FAQの記載をベースに、正常動作の見分け→公式の対処3つ→修理判断の順で整理します（{UPDATED}更新）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">先に結論</p>
            <p className="text-sm leading-7 text-slate-700">
              <strong>途中で暖かい風が止まる→霜取り運転(約3〜10分)の可能性大</strong>。待って復帰すれば正常です。
              霜取りが頻繁なら<strong>設定温度を1〜2℃下げる</strong>と軽減できる可能性がある、というのが公式のテクニックです。
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
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">何が起きているか（公式FAQ）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対処</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">途中で風が止まる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">霜取り運転(約3〜10分)。屋外が低温だと室外機に霜がつき、暖房力の低下を防ぐため自動で霜を溶かす</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">待てば復帰。頻繁なら設定温度を1〜2℃下げると霜の量を抑えられる可能性(公式)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">つけてすぐ風が出ない</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">冷風防止の予熱。室内機を暖めてから風を出す仕様</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">3〜10分待って風が出れば正常</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">暖まった後に風が弱まる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">設定温度到達。暖めすぎを防ぐため暖かい風が出なくなる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">設定温度を上げて風が出れば正常</td>
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
              「暖房中に止まってランプが点滅している」なら、まず霜取り運転を疑います。待つ時間の目安はメーカーで違うため、お使いのメーカーの公式記載で判断してください。
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
                    <td className="border border-slate-300 px-3 py-2 leading-7">室内機から暖かい風が出なくなる。待って暖かい風が出れば正常</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">最長12分程度</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">ルーバーが開いたまま運転ランプが点滅して暖房が止まる。点灯に変わると暖房再開。設定温度に達すると約5分止まり、風が出たり止まったりするのも正常</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">日立</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">5〜22分（予熱は2〜3分）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">運転ランプが点灯と減光をくり返す。暖房直後なら予熱、暖房中・停止後なら霜取り。<strong>25分以上点滅が続く場合は点検相談</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「暖まらない、暖かい風がでない(ルームエアコン)」（2026年9月9日確認）、パナソニック公式「霜取り運転」解説ページ、日立 kadenfan「暖房運転時、運転ランプが点滅します。」（{UPDATED}確認）。三菱電機(霧ヶ峰)のランプ表示は<Link href="/guide/error-code-mitsubishi/" className="underline">三菱のランプ点滅ガイド</Link>へ。
            </p>
            <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/60 p-5">
              <p className="font-bold text-sky-800 mb-1">霜がつきやすい天気</p>
              <p className="text-sm leading-7 text-slate-700">
                パナソニック公式によると、霜が最もつきやすいのは<strong>気温5.5℃〜−7℃で湿度が高いとき</strong>です（−15℃以下は空気が乾燥して霜がつきにくい）。
                雨や雪の寒い日に霜取りが増えるのはこのためで、故障ではありません。霜取りを早めようと<strong>室外機に水やお湯をかけるのはNG</strong>（再凍結や熱交換器・電子部品の故障につながる、と公式が注意）。
              </p>
            </div>
          </section>

          <section id="tips" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">体感の「暖まらない」を改善する公式テクニック</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              暖かい空気は部屋の上に溜まります。ダイキン公式FAQは<strong>風向を下向きにする</strong>・<strong>サーキュレータや扇風機で空気を循環させる</strong>ことで効率的に部屋を暖められると案内しています（2026年9月9日確認）。
              足元が寒い・温度計より寒く感じる場合は、故障を疑う前にまず風向と循環を見直してください。
            </p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">それでも暖まらない時の対処3つ（公式FAQ）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>エアフィルターのお手入れ</strong>——ホコリが付くと空気を取り込みにくくなり風量が低下し、部屋全体が暖まりにくくなります</li>
              <li><strong>室外機まわりの障害物の除去</strong>——吹出口・吸込口をふさぐと暖房効果が弱くなります。雪が積もる地域では室外機周辺の除雪も</li>
              <li><strong>本体のリセット</strong>——運転停止→電源プラグ(またはエアコン専用ブレーカー)を1分OFF→戻して再運転</li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              この3つで改善しない場合は、冷媒ガスの不足・漏れや部品の不具合が考えられます。
              ガス系は<Link href="/cost/gas-refill/" className="text-sky-700 underline">ガス補充の費用ガイド</Link>、全体の水準は<Link href="/guide/repair-cost/" className="text-sky-700 underline">修理費用の相場ガイド</Link>へ。
              エラーコードが出ている場合は<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧</Link>で意味を確認できます。
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
                { href: "/symptom/not-cooling", label: "冷房が冷えない時の原因と対処" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない時の見分け方" },
                { href: "/cost/gas-refill/", label: "エアコンのガス補充費用" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
                { href: "/guide/busy-season/", label: "修理の繁忙期と依頼のコツ" },
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
