import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのお掃除機能はいらない？掃除する範囲・クリーニング料金の差・電気代をメーカー公式で確認【2026年11月確認】",
  description:
    "エアコンのお掃除機能が自動で掃除するのはエアフィルターで、熱交換器や送風ファンは業者クリーニングの範囲です。お掃除機能付きのクリーニング料金はダスキン・おそうじ本舗の公式料金で9,900〜11,000円（税込）高くなります。消費電力の公表値と、いる人・いらない人の目安も整理しています。",
  alternates: { canonical: "/guide/auto-clean-function/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンのお掃除機能はいらないのでしょうか？",
    a: "ご家庭の使い方によります。ダイキンは、手間を省くことを重視する場合はお掃除機能付きをすすめる一方、「それほど使わないお部屋のエアコンなら、コストを考えてお掃除機能なしのタイプを選ぶという選択肢もあります」と案内しています（2026年11月20日確認）。フィルター掃除を約2週間に1回ご自身で続けられる場合や、業者クリーニングの費用を抑えたい場合は、お掃除機能なしでも困らないことが多いと当サイトでは考えています。",
  },
  {
    q: "お掃除機能はエアコン内部まで掃除しますか？",
    a: "フィルター自動お掃除機能が掃除するのはエアフィルターです。ダイキンは「上記以外のエアコン内部（熱交換器など）のお掃除は、専門業者に任せてください」と案内しています。熱交換器を結露水で洗う機能や、日立の凍結洗浄のように一部の製品で送風ファンを掃除する機能もありますが、これらはフィルターのお掃除機能とは別の機能です（2026年11月20日確認）。",
  },
  {
    q: "お掃除機能付きエアコンは業者クリーニングの料金が高くなりますか？",
    a: "高くなります。壁掛けタイプ1台の税込料金は、ダスキンがお掃除機能なし15,400円・付き26,400円（差11,000円）、おそうじ本舗がなし14,300円・付き24,200円（差9,900円）です（2026年11月20日確認）。作業時間も、ダスキンはなし1〜1.5時間・付き1.5〜3時間、おそうじ本舗はなし約2時間・付き3〜4時間と長くなります。",
  },
  {
    q: "お掃除機能付きエアコンのダストボックスはどのくらいで手入れしますか？",
    a: "日立とゼネラルは1年に1回を目安としています。ダイキンはFシリーズの製品ページで「1年に1度お手入れしてください」と案内し、CLUB DAIKINの記事ではお掃除ランプの点灯時（目安約3年〜10年）としています。機種により異なるため、取扱説明書もご確認ください（2026年11月20日確認）。",
  },
  {
    q: "リモコンの「内部クリーン」はお掃除機能と同じですか？",
    a: "同じではありません。おそうじ本舗は料金ページで「リモコンに表示されている「内部クリーン」「内部洗浄」は、お掃除機能ではありません」と注記しています。業者クリーニングの料金区分もお掃除機能の有無で決まるため、判別が難しい場合は依頼前に事業者へご確認ください（2026年11月20日確認）。",
  },
];

const scopeRows = [
  {
    part: "エアフィルター",
    auto: "自動で掃除（ブラシでホコリを取る）",
    note: "油汚れやたばこのヤニは取り切れない場合あり（ダイキン）。シャープは6カ月に1回、取り外して汚れを確認するよう案内",
  },
  {
    part: "ダストボックス",
    auto: "ホコリをためるだけ。捨てるのは人の手",
    note: "1年に1回が目安（日立・ゼネラル・ダイキンFシリーズ）。パナソニックはホコリの排出まで自動の機種あり",
  },
  {
    part: "熱交換器（アルミフィン）",
    auto: "対象外",
    note: "細かいホコリはフィルターを通り抜けて付着（パナソニック）。内部の掃除は専門業者へ（ダイキン）",
  },
  {
    part: "送風ファン",
    auto: "対象外",
    note: "分解を伴うため利用者は掃除できない（日立）。日立の一部製品は凍結洗浄時にファンを掃除",
  },
  {
    part: "吹出口の内部",
    auto: "対象外",
    note: "汚れやカビが付着した場合、お客様ではお手入れできない（パナソニック）",
  },
];

const feeRows = [
  { item: "壁掛け1台", duskin: "15,400円 → 26,400円（差11,000円）", osj: "14,300円 → 24,200円（差9,900円）" },
  { item: "複数台の1台あたり", duskin: "12,650円 → 23,650円（差11,000円）", osj: "12,100円 → 22,000円（差9,900円）" },
  { item: "1台あたりの作業時間", duskin: "1〜1.5時間 → 1.5〜3時間", osj: "約2時間 → 3〜4時間" },
];

export default function AutoCleanFunctionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/cleaning-frequency/" },
          { name: "エアコンのお掃除機能は必要か", href: "/guide/auto-clean-function/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">お手入れガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのお掃除機能はいらない？
            <br className="hidden md:block" />
            掃除する範囲・クリーニング料金・電気代で判断する
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンのお掃除機能（フィルター自動お掃除機能）は、<strong className="font-semibold text-slate-900">エアフィルターのホコリを自動で取る機能</strong>です。
            熱交換器や送風ファンは対象外のため、お掃除機能付きでも内部の汚れやカビは業者クリーニングで落とすことになり、その料金はお掃除機能なしより<strong className="font-semibold text-slate-900">約1万円高く</strong>なります。
            当サイトでは{UPDATED}にメーカーとクリーニング事業者の公式ページを確認し、必要かどうかを判断するための事実を整理しました。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">判断材料の要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>自動で掃除するのは<strong>エアフィルター</strong>。ダストボックスのごみ捨ては<strong>年1回程度</strong>必要</li>
              <li>業者クリーニングの税込料金差：<strong>ダスキン11,000円・おそうじ本舗9,900円</strong>（壁掛け1台）</li>
              <li>フィルターが目詰まりした場合の消費電力増：ダイキンは冷房時<strong>25％</strong>、パナソニックは暖房時<strong>約25％</strong>と公表</li>
              <li>ダイキンは、使用頻度の低い部屋ならお掃除機能なしを選ぶ選択肢もあると案内</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="scope" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">お掃除機能が掃除する範囲と対象外の部位</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ダイキンはフィルター自動お掃除を「エアコンの運転終了後、自動的にフィルターのホコリをブラッシングして、ダストボックスに回収」する機能と説明しています。
              各メーカーの公式ページの記載を、部位ごとに整理すると次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">部位</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能の扱い</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">メーカー公式の記載</th>
                  </tr>
                </thead>
                <tbody>
                  {scopeRows.map((r) => (
                    <tr key={r.part}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.part}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.auto}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。ダイキン（Fシリーズ製品ページ・CLUB DAIKIN）、パナソニック（公式FAQ・エアコンの清潔・お掃除ガイド）、日立（よくあるご質問）、シャープ（サポート）、ゼネラル（よくあるご質問）の記載にもとづきます。機種により仕様が異なるため、お使いの機種の取扱説明書もご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              熱交換器や送風ファンの汚れを抑える機能としては、ダイキンの「水内部クリーン」（結露水で熱交換器の汚れを洗浄）や日立の「凍結洗浄」などがあります。
              これらはフィルターのお掃除機能とは別の機能です。日立は「発生したカビを凍結洗浄で除去することはできません」としており、発生済みのカビはクリーニングの依頼を案内しています。
              各部位の名称と位置は<Link href="/guide/parts-names/" className="text-sky-700 underline">エアコンの部品名称</Link>で確認できます。
            </p>
          </section>

          <section id="cleaning" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">お掃除機能付きでも業者クリーニングが必要になる場合</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              お掃除機能があっても、次の状態ではメーカー自身が業者による内部洗浄を案内しています。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>ルーバーの奥や本体内部に汚れ・カビがある</strong>：パナソニックは「ルーバー奥（フェルト部など）の手の届かないところやエアフィルターを外した本体内部に汚れやカビが付着しているときは、エアコンクリーニングが必要です」としています</li>
              <li><strong>送風ファンが汚れている</strong>：日立は、凍結洗浄を搭載していない製品や、凍結洗浄で汚れを落としきれなかった場合はエアコンクリーニングを依頼するよう案内しています</li>
              <li><strong>フィルターに油汚れ・ヤニが付く環境</strong>：ダイキンは、この環境では「フィルター掃除運転では汚れを取り切れない場合があります」と注記しています</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              なお、三菱電機は、内部洗浄には洗浄剤の選定や処理に高い専門性が必要で、誤った方法では水漏れや電気部品の故障につながると説明しています。内部はご自身で洗わず、専門業者へ依頼してください。
              依頼の頻度の目安は<Link href="/guide/cleaning-frequency/" className="text-sky-700 underline">エアコンクリーニングの頻度</Link>、ご自身でできる範囲は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>に掲載しています。
            </p>
          </section>

          <section id="fee" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者クリーニング料金の差：お掃除機能なし→付き</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              全国展開するダスキンとおそうじ本舗の公式料金ページで、壁掛けタイプのお掃除機能なしと付きを比較しました（税込）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">項目</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ダスキン</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">おそうじ本舗</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r) => (
                    <tr key={r.item}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.item}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.duskin}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.osj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。ダスキンは家庭用壁掛けタイプ（幅120cm未満）の標準料金で、複数台は2台セット料金（25,300円／47,300円）の1台あたり換算です。おそうじ本舗の複数台は2台以上注文時の1台あたり料金です。土日祝・夜間の追加費用や地域による違いがあるため、依頼前に見積もりでご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              おそうじ本舗は、お掃除機能付きのサービス範囲にのみ「お掃除ユニット」を含めています。
              また、ダスキンは本体両側にファンがあるタイプや特殊構造のタイプを「分解組立・清掃に時間がかかるため」お掃除機能付きの料金とし、おそうじ本舗も富士通のノクリアXシリーズとシャープのAirestシリーズを、分解に時間がかかるとしてお掃除機能付きの価格で案内しています。
              年1回の依頼を続ける場合、この差は依頼のたびに生じます。そのほかの事業者を含めた料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニング料金の比較</Link>、分解の範囲による違いは<Link href="/guide/disassembly-cleaning/" className="text-sky-700 underline">完全分解洗浄と通常洗浄の違い</Link>でご確認いただけます。
            </p>
          </section>

          <section id="power" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">フィルター掃除をしない場合の消費電力（メーカー公表値）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              お掃除機能の利点は、フィルター掃除を忘れても目詰まりを抑えられることです。目詰まりしたまま使った場合の消費電力について、メーカーは次の数値を公表しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公表内容</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">ダイキン</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7 align-top">フィルター掃除をしないと、冷房時の消費電力が25％高くなる</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7 align-top">ダイキンの試算</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">パナソニック</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7 align-top">フィルターお掃除ありの場合、暖房時の消費電力量が約25％カット（あり455Wh／なし607Wh）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7 align-top">CS-X406D2・約1年後・お掃除なしはフィルターにホコリ約2gが付着した状態（同社調べ）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。いずれもメーカーの試験・試算条件での値です。使用頻度や環境により効果は異なります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              この差は「お掃除機能付き」と「掃除していないお掃除機能なし」の比較です。お掃除機能なしでも、メーカーが案内する約2週間に1回のフィルター掃除を続けていれば、目詰まりによる電力の増加は抑えられます。
              つまり、お掃除機能の価値は、フィルター掃除を続けられるかどうかで変わります。
            </p>
          </section>

          <section id="judge" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">お掃除機能がいる人・いらない人の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ここまでの事実から、当サイトでは次のように整理しています。あくまで目安であり、設置場所や機種によって当てはまらない場合があります。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
                <p className="font-bold text-sky-900 mb-2">お掃除機能があると便利な目安</p>
                <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
                  <li>約2週間に1回のフィルター掃除を続けるのが難しい</li>
                  <li>高い位置に設置していて、フィルターの取り外しが負担になる</li>
                  <li>冷暖房の使用時間が長く、目詰まりによる電力増を避けたい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-bold text-slate-900 mb-2">お掃除機能なしでも困りにくい目安</p>
                <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
                  <li>フィルター掃除をご自身で定期的に行える</li>
                  <li>使用頻度が低い部屋のエアコン（ダイキンも選択肢として案内）</li>
                  <li>業者クリーニングを定期的に依頼する予定で、1回あたりの費用を抑えたい</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              キッチンの近くなど油煙が多い場所では、お掃除機能があってもフィルターの油汚れは取り切れない場合があるため、ご自身での確認が必要です。
              本体価格の差は機種や販売店で異なるため、本記事では比較していません。購入時は販売店の価格もあわせてご確認ください。
            </p>
          </section>

          <section id="next" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">お掃除機能付きエアコンをお使いの方へ：状態に応じた相談先</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>臭いが気になる</strong>：原因と対処は<Link href="/guide/smell/" className="text-sky-700 underline">エアコンの臭いの原因と対処</Link>をご覧ください。フィルターやダストボックスを手入れしても改善しない場合は、業者クリーニングをご検討ください</li>
              <li><strong>吹出口の奥にカビが見える</strong>：吹出口の内部はご自身では手入れできないため、お掃除機能付きに対応した業者へのクリーニング依頼をご検討ください。料金区分が変わるため、お掃除機能の有無を依頼時にお伝えください（おそうじ本舗は、判別が難しい場合は問い合わせるよう案内しています）</li>
              <li><strong>お掃除ユニットが動かない・ランプが点滅する</strong>：故障の可能性があるため、<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理の依頼先</Link>を参考にメーカーや修理業者へご相談ください</li>
              <li><strong>使用年数が長い</strong>：修理か買い替えかの判断は<Link href="/guide/lifespan/" className="text-sky-700 underline">エアコンの寿命と買い替えの目安</Link>に掲載しています。おそうじ本舗は、製造から9年以上経過したエアコンはサービスを断る場合や保証できない場合があると注記しています</li>
            </ul>
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
              <li>ダイキン工業「Fシリーズ クリーン」https://www.ac.daikin.co.jp/roomaircon/products/f_series/kinou/osoji</li>
              <li>ダイキン工業 CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_clean</li>
              <li>パナソニック 公式FAQ「エアコンのお手入れ方法」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9890</li>
              <li>パナソニック「エアコンの清潔・お掃除 かんたんガイド」https://panasonic.jp/aircon/contents/tips/clean.html</li>
              <li>日立「室内機のファンの汚れを取りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-33.html</li>
              <li>日立「ホコリキャッチャーやダストボックスのお手入れ方法を知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-11.html</li>
              <li>三菱電機 よくあるご質問「エアコン内部の洗浄について」https://faq01.mitsubishielectric.co.jp/faq/show/712?site_domain=default</li>
              <li>シャープ「フィルターのお手入れ」https://jp.sharp/support/air_con/mt_doc/filter.html</li>
              <li>ゼネラル よくあるご質問「室内機の日常のお手入れはどうすれば良いですか？」https://www.generalww.com/jp/support/faq/as/0077/index.html</li>
              <li>ダスキン「エアコンクリーニング（壁掛けタイプ）」https://www.duskin.jp/servicemaster/spot/sm000010/</li>
              <li>おそうじ本舗「壁掛けタイプエアコンクリーニング」https://www.osoujihonpo.com/house-cleaning/aircon/wall/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
                { href: "/guide/cheap-cleaning/", label: "エアコンクリーニングを安く頼む方法" },
                { href: "/guide/cleaning-effect/", label: "エアコンクリーニングの効果と依頼の判断" },
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
