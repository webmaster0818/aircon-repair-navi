import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンが途中で止まる原因｜メーカー7社の確認項目と故障の見分け方【メーカー公式FAQにもとづく】",
  description:
    "エアコンが運転中に途中で止まる原因を、メーカー7社の公式FAQと取扱説明書で確認しました。切タイマー・不在時の自動停止・設定温度到達・暖房の霜取り・製品保護・停電など、故障ではない停止の条件をメーカー別に一覧にし、修理を相談する目安も掲載しています。",
  alternates: { canonical: "/guide/stops-midway/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンが運転中に勝手に止まるのは故障ですか？",
    a: "故障とは限りません。当サイトが確認したメーカー7社の公式FAQ・取扱説明書では、切タイマー、人の不在を検知して運転を止める機能、設定温度への到達、暖房時の霜取り運転、連続運転後のフィルター自動掃除などによる停止を、正常な動作として案内しています（2026年11月20日確認）。一方で、運転ランプやタイマーランプが点滅している場合は、確認した7社のうち6社が異常の知らせとして点検・修理の相談を案内しています。",
  },
  {
    q: "数時間たつとエアコンが止まります。原因は何ですか？",
    a: "切タイマー・おやすみタイマーのほか、人の不在を検知して運転を止める機能が考えられます。パナソニックの「オートオフ」と三菱電機の「不在停止・スマートオフ・スマートストップ」は、人がいない状態が約3時間続くと運転を停止すると案内されています。シャープ（不在エコ制御）とゼネラル（不在ECO）にも同様の機能があります（2026年11月20日確認）。リモコンの表示と取扱説明書で設定をご確認ください。",
  },
  {
    q: "暖房中に10分ほど止まって、また動き出します。",
    a: "室外機についた霜を溶かす霜取り運転の可能性があります。霜取り運転の時間は、ダイキンが約3〜10分間、パナソニックが最長12分程度、三菱電機が10分程度、日立が5〜10分間（最大で約22分間）、東芝が最長約15分程度、シャープが最大で約10分、ゼネラルが4〜15分程度と案内しています（2026年11月20日確認）。霜取り運転の詳しい見分け方は、当サイトの「暖房が効かない原因」のページに掲載しています。",
  },
  {
    q: "停電のあと、エアコンが止まったまま動きません。",
    a: "日立・東芝・ゼネラル・ダイキンは、運転中に停電した場合、復旧後はリモコンで運転を開始し直すよう案内しています。日立は「運転中に停電した場合、復旧した後は自動的に運転が再開されません」と説明しており、東芝・ゼネラルはタイマー予約が取り消されると案内しています（2026年11月20日確認）。リモコンで操作しても運転しない場合は、電源が入らない場合の確認手順をご覧ください。",
  },
  {
    q: "どのような場合に修理を相談すればよいですか？",
    a: "運転ランプやタイマーランプが点滅している場合、表示されたエラーコード（診断コード）が消えない場合、タイマーや自動停止の設定を確認しても止まり続ける場合が目安です。パナソニックは、設定温度を3℃以上変えても10分以上風が出ない場合は本体の不具合が考えられると案内しています。日立は、タイマーランプの点滅が消えて使えるようになっても、一時的な改善の場合があるため点検の相談をすすめています（2026年11月20日確認）。",
  },
];

const makerRows = [
  {
    maker: "ダイキン",
    normal: "切タイマー／霜取り運転（約3〜10分間）／設定温度到達時の微風運転／24時間以上の連続運転後のフィルター掃除運転（最長約8分）／入タイマー運転中のリモコン操作／室温ウォッチ（高温／低温防止機能）中の停止／電圧の急な変動による製品保護（約3分後に自動で再開）",
    repair: "吸込口・吹出口の障害物を取り除いても運転ランプが点滅する場合は、エラーコードを確認のうえ販売店・相談窓口へ",
    src: "取扱説明書 CX/Cシリーズ（ATC22ASE5-Wほか）",
  },
  {
    maker: "パナソニック",
    normal: "切タイマー・おやすみ切タイマー（タイマーランプ点灯）／オートオフ（人の不在を検知して約3時間）／「遠隔操作 あり」で通信できない状態が続く場合／設定温度付近で室外機を止めて弱い送風／一定時間を超える連続運転後のフィルターおそうじ運転／霜取り運転（最長12分程度）",
    repair: "タイマーランプ点滅と診断コード（H**／F**）の表示、設定温度を3℃以上変えても10分以上風が出ない場合、本体リセットで改善しない場合",
    src: "公式FAQ a_id/62102・9909・9669、霜取り運転の解説ページ",
  },
  {
    maker: "三菱電機",
    normal: "切タイマー／不在停止・スマートオフ・スマートストップ（人がいない状態で約3時間）／50時間以上の連続運転後のフィルターおそうじメカ運転（約2分30秒間）／霜取運転（約1時間に1回程度・10分程度）／暖房時に室温が設定温度より高い場合の停止",
    repair: "上記で解決しない場合、室内機の運転ランプが点滅している場合",
    src: "よくあるご質問 No.2719",
  },
  {
    maker: "日立",
    normal: "切タイマー・毎日予約・「みはっておやすみ」タイマー／設定温度・設定湿度に達したときの室外機の一時停止／霜取り運転（5〜10分間、最大で約22分間）／停電（復旧後は自動で再開しない）／アプリ連携でサーバーと22時間連続して通信できない場合",
    repair: "タイマーランプの点滅（本体異常の可能性）、室外機が止まったまま動かない場合、電源プラグを差すだけでブレーカーが落ちる場合",
    src: "日立の家電品 Q&A（タイマー機能・室外機・停電・ランプ点滅・ブレーカー）",
  },
  {
    maker: "東芝",
    normal: "霜取り運転（1回あたり最長約15分程度）／停電（タイマー予約は取り消され、復帰後は前回と同じ運転にならない）",
    repair: "ランプの点滅（運転ランプの点滅回数とタイマーランプの状態をメモして相談）",
    src: "よくあるご質問 ID 718・679・2411",
  },
  {
    maker: "シャープ",
    normal: "毎日・曜日指定を含む切タイマー／エコ自動運転の人検知による不在エコ制御／電力ひかえめ「入」／暖房で部屋が十分暖まった場合／霜取り動作（室内ファンが最大で約10分停止）",
    repair: "運転ランプやタイマーランプの点滅（エラー番号の確認）。室外機の吹出口のふさぎ・吸込口の目詰まり、室内機の吹出口のふさぎ、エアーフィルターのお手入れを確認しても改善しない場合",
    src: "Q&A 文書番号156367、故障診断ナビ「暖房運転が途中で停止する」",
  },
  {
    maker: "ゼネラル",
    normal: "おやすみタイマー・毎日マルチタイマー／不在ECO（オートオフ／オートオンオフ）／スマートフォン・HEMS機器での操作時に公衆回線との接続が切れた状態が24時間続いた場合／自動霜取り運転（4〜15分程度）／使用範囲より高い温度での自動保護装置の作動／停電",
    repair: "取扱説明書の「困ったとき」の項目で改善しない場合は販売店・相談窓口へ",
    src: "取扱説明書 AS-AH221Lほか、ノクリア Zシリーズ Web取扱説明書",
  },
];

const causeRows: { cause: string; marks: string[]; note: string }[] = [
  { cause: "切タイマー・おやすみタイマー", marks: ["○", "○", "○", "○", "－", "○", "○"], note: "毎日・曜日指定の予約や、入／切の組み合わせ予約も確認対象です" },
  { cause: "人の不在を検知して自動停止", marks: ["－", "○", "○", "－", "－", "○", "○"], note: "パナソニック・三菱電機は約3時間" },
  { cause: "設定温度到達で室外機停止・微風", marks: ["○", "○", "○", "○", "－", "○", "○"], note: "冷やし過ぎ・暖め過ぎを防ぐ動作で、室温が変わると再び動き出します" },
  { cause: "暖房時の霜取り運転", marks: ["○", "○", "○", "○", "○", "○", "○"], note: "7社すべてが案内。時間は最長約10〜22分と各社で異なります" },
  { cause: "連続運転後のフィルター自動掃除", marks: ["○", "○", "○", "－", "－", "－", "－"], note: "ダイキン24時間以上、三菱電機50時間以上" },
  { cause: "製品保護による停止", marks: ["○", "－", "－", "－", "－", "－", "○"], note: "ダイキンは電圧の急な変動、ゼネラルは使用範囲より高い温度" },
  { cause: "アプリ・遠隔操作の通信切れ", marks: ["－", "○", "－", "○", "－", "－", "○"], note: "日立22時間、ゼネラル24時間" },
  { cause: "停電（復旧後は再操作が必要）", marks: ["○", "－", "－", "○", "○", "－", "○"], note: "タイマー予約が取り消される機種があります" },
  { cause: "ランプ点滅は異常の知らせ", marks: ["○", "○", "○", "○", "○", "○", "－"], note: "点滅をともなう停止は点検・修理の相談対象です" },
];

const makers = ["ダイキン", "パナソニック", "三菱電機", "日立", "東芝", "シャープ", "ゼネラル"];

export default function StopsMidwayPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/stops-midway/" },
          { name: "エアコンが途中で止まる原因", href: "/guide/stops-midway/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンが途中で止まる原因
            <br className="hidden md:block" />
            メーカー7社の確認項目と故障の見分け方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            一度動き出したエアコンが途中で止まる場合、<strong className="font-semibold text-slate-900">多くはタイマー・自動停止機能・設定温度への到達・暖房の霜取り運転といった正常な動作</strong>です。
            ただし、<strong className="font-semibold text-slate-900">運転ランプやタイマーランプが点滅している場合は、本体の異常を知らせている可能性</strong>があり、多くのメーカーが点検・修理の相談を案内しています。
            本記事では、当サイトが{UPDATED}にメーカー7社の公式FAQ・取扱説明書を確認し、「途中で止まる」ときの確認項目をメーカー別に整理しています。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">止まったときに最初に確認すること（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li><strong>ランプが点滅しているか</strong>：点滅している場合は異常の知らせの可能性があります。エラーコードを控えて修理相談へ</li>
              <li><strong>タイマー・自動停止機能が設定されていないか</strong>：切タイマー、おやすみタイマー、人の不在を検知して止める機能（約3時間で停止する機種があります）</li>
              <li><strong>暖房中か</strong>：霜取り運転で数分〜十数分止まり、自動で再開します（7社すべてが案内）</li>
              <li><strong>停電がなかったか</strong>：復旧後は自動で再開しない機種があり、リモコンでの再操作が必要です</li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            電源が最初から入らない場合は<Link href="/guide/power-not-on/" className="text-sky-700 underline">電源が入らない場合の確認手順</Link>を、室外機だけが止まる場合は<Link href="/guide/outdoor-unit-not-working/" className="text-sky-700 underline">室外機が動かない原因</Link>をご覧ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="matrix" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「途中で止まる」原因とメーカー7社の記載状況</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式FAQ・取扱説明書に、停止の原因として記載があるかを同じ項目でそろえました。「○」は当サイトが確認したページに記載があったもの、「－」は確認したページに記載が見当たらなかったものです。「－」は機能がないことを意味するものではありません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">原因</th>
                    {makers.map((m) => (
                      <th key={m} className="border border-slate-300 bg-slate-100 px-2 py-2 whitespace-nowrap text-xs">{m}</th>
                    ))}
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">補足</th>
                  </tr>
                </thead>
                <tbody>
                  {causeRows.map((r) => (
                    <tr key={r.cause}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top leading-6">{r.cause}</td>
                      {r.marks.map((mk, i) => (
                        <td key={i} className="border border-slate-300 px-2 py-2 text-center align-top">{mk}</td>
                      ))}
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。取扱説明書は特定シリーズのものを参照しており、機能の有無や時間は機種により異なります。お使いの機種の取扱説明書もご確認ください。ゼネラルは旧富士通ゼネラルです。
            </p>
          </section>

          <section id="maker" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー別：止まったときに確認する項目と相談の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社が「故障ではない」または「確認してください」として挙げている停止の条件と、点検・修理の相談を案内している条件を、メーカーごとにまとめました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[680px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">故障ではない停止として案内されている条件</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">点検・修理の相談を案内している条件</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出典</th>
                  </tr>
                </thead>
                <tbody>
                  {makerRows.map((r) => (
                    <tr key={r.maker}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.maker}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.normal}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.repair}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top text-xs text-slate-500">{r.src}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。ダイキン・ゼネラルは取扱説明書、その他は公式FAQの記載です。各機能の名称・時間は参照した機種・ページの記載で、機種により異なります。
            </p>
          </section>

          <section id="timer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">タイマー・自動停止機能による停止</h2>
            <p className="text-sm leading-7 text-slate-700">
              決まった時刻や一定時間後に止まる場合は、まずタイマーと自動停止機能の設定をご確認ください。
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>切タイマー・おやすみタイマー</strong>：パナソニックは、タイマーランプの点灯が「入タイマー、切タイマー、おやすみ切タイマーなどの設定中」の知らせであると案内しています。シャープは「毎日や曜日指定で停止するように、切タイマーを予約していませんか」と、繰り返し予約も確認項目に挙げています。</li>
              <li><strong>人の不在を検知して止める機能</strong>：パナソニックの「オートオフ」は、人の不在を検知してから約3時間たっても人が戻らない場合に運転をオフにする機能です（一部機種）。三菱電機も、不在停止・スマートオフ・スマートストップの設定時は「お部屋に人がいない状態で約３時間経過すると、自動的に運転を停止します」と案内しています。シャープの不在エコ制御、ゼネラルの不在ECO（オートオフ／オートオンオフ）も確認対象です。</li>
              <li><strong>睡眠向けのタイマー</strong>：日立の「みはっておやすみ」は、設定したタイマー時間に停止した後も室温・湿度の変化に応じて再運転・停止する機能です。</li>
              <li><strong>アプリ・遠隔操作の通信切れ</strong>：パナソニックは「遠隔操作 あり」の設定で通信できない状態が続くと自動で停止することがある、ゼネラルは公衆回線との接続が切れた状態が24時間続くと安全のため停止すると案内しています。アプリを使っていない場合は、遠隔操作の設定をご確認ください。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              ダイキンの取扱説明書では、入タイマーの予約中は設定時刻に室温を合わせるため最長約1時間前から運転を始め、この間にリモコンを操作すると停止することがあると説明されています。この場合はリモコンで再度運転してください。
            </p>
          </section>

          <section id="normal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運転ランプが点灯したまま止まる・風が止まる場合</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>設定温度への到達</strong>：パナソニックは、冷房・暖房とも室温が設定温度に近づくと室外機を止めて弱い送風運転を行い、除湿時は約5分間運転を止めることがあると案内しています。ダイキン・三菱電機・日立・シャープ・ゼネラルも同様の動作を案内しています。パナソニックは、設定温度を3℃以上変えて風が出れば正常であるとしています。</li>
              <li><strong>暖房時の霜取り運転</strong>：7社すべてが案内しており、時間は最長約10〜22分と各社で異なります（よくある質問に一覧を掲載しています）。ランプの見え方や回数を減らす方法は<Link href="/guide/heating-not-working/" className="text-sky-700 underline">暖房が効かない原因と霜取り運転の見分け方</Link>に掲載しています。</li>
              <li><strong>連続運転後のフィルター自動掃除</strong>：お掃除機能付きの機種では、長時間の連続運転のあとに運転を中断してフィルター掃除を行います。ダイキンは24時間以上で最長約8分、三菱電機は50時間以上で約2分30秒間と案内しており、終了後は元の運転に戻ります。</li>
              <li><strong>製品保護</strong>：ダイキンは電圧が急に大きく変動した場合に製品保護のため停止し、約3分後に自動で再開すると説明しています。ゼネラルは、使用範囲より高い温度で運転すると自動保護装置が働き、停止することがあるとしています。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              パナソニックの公式FAQでは、2021年10月から販売した一部シリーズ（LX・XS・X・DVE）について、室内機制御マイコンのソフトウェア不具合により、AI快適設定の冷房運転中にルーバーが開いたまま停止する症状を公表しています。該当する場合は、同社の案内ページで対象製品と対応手順をご確認ください。
            </p>
          </section>

          <section id="power" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">停電・ブレーカーで止まった場合</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>停電</strong>：日立は「運転中に停電した場合、復旧した後は自動的に運転が再開されません」と案内しています。東芝・ゼネラルは、停電でタイマー予約が取り消されるため設定し直すよう案内しています。ダイキンも、通電後にリモコンで運転を再開するよう説明しています。</li>
              <li><strong>ブレーカーが落ちる</strong>：日立は、契約アンペアを超えた場合のほか、エアコン本体や同時に使っている電化製品の不具合を原因に挙げています。電源プラグを差し込むだけでブレーカーが落ちる、他の電化製品を使っていないのにたびたび落ちる場合は、故障や漏電の可能性があるため、すぐに使用を中止して点検を相談するよう案内しています。</li>
            </ul>
          </section>

          <section id="repair" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障の可能性が高いサインと修理相談の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              次のような場合は、設定の確認だけでは解決しにくいため、早めに販売店・メーカー・修理業者へ相談されることをおすすめします。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>ランプが点滅して止まる</strong>：パナソニックは、本体または室外機で異常を検知するとタイマーランプが点滅し、診断コード（アルファベットと2桁の数字）が表示されると案内しています。日立は、タイマーランプの点滅について「本体に異常が発生している可能性があります」としています。</li>
              <li><strong>障害物を取り除いても点滅が続く</strong>：ダイキンは、吸込口・吹出口の障害物を取り除いて再度運転しても運転ランプが点滅する場合、エラーコードを確認のうえ相談するよう案内しています。</li>
              <li><strong>設定温度を変えても風が出ない</strong>：パナソニックは、設定温度を変えても10分以上風が出ない場合は本体の不具合が考えられるとしています。</li>
              <li><strong>点滅が一度消えた</strong>：日立は「点滅が消えて使えるようになっても、一時的な改善の場合がありますので、念のため点検をご相談ください」と案内しています。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              相談の際は、メーカー名・型番、止まるまでの時間、点滅しているランプと回数、表示されたエラーコードを控えておくと、状況を正確に伝えられます。
              エラーコードの意味は<Link href="/symptom/error-code/" className="text-sky-700 underline">エラーコードが出たときの対処</Link>、<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">ダイキンのエラーコード一覧</Link>、<Link href="/guide/error-code-mitsubishi/" className="text-sky-700 underline">三菱電機のランプ点滅ガイド</Link>でご確認いただけます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              依頼先の選び方は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理はどこに頼むか</Link>、費用の目安は<Link href="/guide/repair-cost/" className="text-sky-700 underline">エアコン修理費用のガイド</Link>と<Link href="/cost/maker-repair-fee/" className="text-sky-700 underline">メーカー修理料金の比較</Link>に掲載しています。
              シャープは修理依頼の前にエアーフィルターのお手入れを試すよう案内しているため、ご自身でできる範囲のお手入れは<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>をご参照ください。
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

          <section id="sources" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-3">出典（{UPDATED}確認）</h2>
            <ul className="list-disc pl-6 space-y-1 text-xs leading-6 text-slate-500 break-all">
              <li>ダイキン工業 ルームエアコン取扱説明書 CX/Cシリーズ（ATC22ASE5-Wほか）「故障かな？と思ったら」「タイマー」 https://www.free.dtnet.daikin.co.jp/DT-NET/search/drawResult/drawDownload2/3P788233-4.pdf</li>
              <li>パナソニック 公式FAQ「エアコンの電源が勝手に止まる（切れる）ときは」https://jpn.faq.panasonic.com/app/answers/detail/a_id/62102</li>
              <li>パナソニック 公式FAQ「エアコンの運転中に風が止まる、止まったり動いたりする理由は」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9909</li>
              <li>パナソニック 公式FAQ「エアコン本体のタイマーランプが点滅して、エラー表示「H**／F**」が出たら」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9669</li>
              <li>パナソニック「冬の暖房時、エアコンが勝手に止まる原因は？ 霜取り運転について解説」https://panasonic.jp/aircon/coldarea/stop.html</li>
              <li>三菱電機 よくあるご質問「運転の途中で室内機が動かなくなりました。故障ですか？」https://faq01.mitsubishielectric.co.jp/faq/show/2719?site_domain=default</li>
              <li>日立「エアコンのタイマー機能が知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-71.html</li>
              <li>日立「エアコンの運転中に室外機が止まってしまいます。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-82.html</li>
              <li>日立「エアコンが停電から復旧したときに気を付けることを知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-153.html</li>
              <li>日立「ブレーカーが落ちてしまいます。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-113.html</li>
              <li>日立「表示ランプがチカチカと点滅しています。」https://kadenfan.hitachi.co.jp/support/ra/q_a/a33.html</li>
              <li>日立「タイマーランプが点滅しています。」https://kadenfan.hitachi.co.jp/support/ra/q_a/a42.html</li>
              <li>東芝ライフスタイル よくあるご質問「暖房中に止まってしまう（除霜運転）」https://faq-toshiba-lifestyle.dga.jp/answer.html?category=126&amp;page=1&amp;id=718</li>
              <li>東芝ライフスタイル よくあるご質問「停電から復帰した後は、どのようにエアコンを運転するのですか」https://faq-toshiba-lifestyle.dga.jp/answer.html?category=126&amp;page=1&amp;id=679</li>
              <li>東芝ライフスタイル よくあるご質問「室内ユニットのランプが点滅しているのは故障ですか」https://faq-toshiba-lifestyle.dga.jp/answer.html?category=126&amp;page=1&amp;id=2411</li>
              <li>シャープ Q&amp;A情報「エアコンが勝手に止まる。」（文書番号156367）https://cs.sharp.co.jp/faq/qa?qid=156367</li>
              <li>シャープ 故障診断ナビ「暖房運転が途中で停止する」https://cs.sharp.co.jp/trouble_check/div/air_con/navi/ay_diag08.html</li>
              <li>シャープ 故障診断ナビ「暖房運転が途中で停止する」（霜取り動作）https://cs.sharp.co.jp/trouble_check/div/air_con/navi/ay_diag08_0-2-1ro.html</li>
              <li>シャープ 故障診断ナビ「暖房運転が途中で停止する」（室外機・エアーフィルターの確認）https://cs.sharp.co.jp/trouble_check/div/air_con/navi/ay_diag08_0-2-3-1rn.html</li>
              <li>シャープ 故障診断ナビ「暖房運転が途中で停止する」（ランプの点滅）https://cs.sharp.co.jp/trouble_check/div/air_con/navi/ay_diag08_0.html</li>
              <li>ゼネラル ルームエアコン取扱説明書（AS-AH221Lほか）https://www.generalww.com/jp/support/downloads/data/aircon/manual/ope-21-9332946277-01-ah-22-25-28-36-40-56.pdf</li>
              <li>ゼネラル ノクリア Zシリーズ Web取扱説明書「勝手に運転を開始する・停止する」https://www.generalww.com/data/html-manual/jp-airconditioner/ja/2022/lineup/nocria-z/90/277288652.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/power-not-on/", label: "エアコンの電源が入らない場合の確認手順" },
                { href: "/guide/heating-not-working/", label: "暖房が効かない原因と霜取り運転" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない原因" },
                { href: "/symptom/error-code/", label: "エラーコードが出たときの対処" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼むか" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用のガイド" },
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
