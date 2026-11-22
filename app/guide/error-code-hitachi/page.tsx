import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "日立エアコン(白くまくん)のエラーコード・ランプ点滅の意味｜タイマーランプ・みはりランプの回数別一覧と修理料金【公式・2026年11月確認】",
  description:
    "日立ルームエアコン「白くまくん」のエラー表示（タイマーランプ・みはりランプ・除湿ランプの点滅回数）の意味を、日立公式FAQと修理料金表にもとづいて回数別にまとめました。故障ではない点滅（霜取り・自動点検など）の見分け方、公式の修理料金の目安（出張料3,850円・キャンセル時5,830円）、修理受付窓口も掲載しています。",
  alternates: { canonical: "/guide/error-code-hitachi/" },
};

const UPDATED = "2026年11月22日";
const CHECKED = "2026年11月22日確認";

const timerLamp = [
  { n: "1回", part: "室温センサー・コイル類・四方弁（バルブ）", title: "四方弁回路の異常" },
  { n: "2回", part: "強制冷房運転のお知らせ（電源の抜き差しで改善しない場合は室内メイン基板・室内受光基板）", title: "—" },
  { n: "3回", part: "室内メイン基板", title: "室内回路の異常" },
  { n: "4回", part: "室外基板・コンプレッサー・室外ファンモーター", title: "室外機異常" },
  { n: "5回", part: "室内メイン基板", title: "室内回路の異常" },
  { n: "9回", part: "室温センサー・室内メイン基板", title: "室内温度検知異常" },
  { n: "10回", part: "室内ファンモーター", title: "—" },
  { n: "11回", part: "イオンユニット", title: "イオンミスト／電気集塵ユニット異常" },
  { n: "12回", part: "室外メイン基板・室内基板", title: "室外電気品異常" },
  { n: "13回", part: "室内基板", title: "—" },
  { n: "17回", part: "表示基板・室内メイン基板", title: "汚れセンサ異常" },
  { n: "18回", part: "フィルターお掃除ユニット", title: "—" },
  { n: "19回", part: "イオンユニット", title: "ペルチェ異常" },
  { n: "20回", part: "ステップモータ・センサー基板", title: "人検知異常" },
];

const mihariLamp = [
  { n: "2・3・4・6回", part: "室外基板・コンプレッサー", title: "過電流異常／低速回転異常／切替失敗異常／コンプレッサー部の高温検知" },
  { n: "5回", part: "室外ファンモーター・室外基板・コンプレッサー", title: "過負荷異常" },
  { n: "7回", part: "室外温度センサー・室外基板", title: "—" },
  { n: "9回", part: "室内メイン基板・室外基板", title: "室内機と室外機の通信異常" },
  { n: "10回", part: "室外基板", title: "電源電圧異常" },
  { n: "11回", part: "室外ファンモーター・室外基板", title: "強風によるファン停止" },
  { n: "12回", part: "室外ファンモーター・室外基板", title: "ファンの回転異常" },
  { n: "13〜15回", part: "FAQでは「室内基板」、修理料金表では交換部品「室外キバン」と記載（公式内で表記が異なります）", title: "室外キバン異常／直流電圧異常／過電流異常" },
];

const fees = [
  { part: "室内メインキバン", fee: "40,000〜45,000円前後" },
  { part: "室外キバン", fee: "40,000〜55,000円前後" },
  { part: "室外ファンモーター", fee: "39,000〜54,000円前後" },
  { part: "フィルタお掃除ユニット", fee: "49,000〜64,000円前後" },
  { part: "コンプレッサー（5年保証）", fee: "117,000〜137,000円前後" },
];

const faqs = [
  {
    q: "日立エアコンのタイマーランプが点滅しています。故障でしょうか？",
    a: "日立公式FAQでは、タイマーランプの点滅は「本体に異常が発生している可能性があります」とされ、使用を中止して販売店または修理相談窓口に点検を相談するよう案内されています。取扱説明書では、電源プラグを抜くかブレーカーを切り、約3分後に入れ直して運転し、それでも点滅する場合は販売店へ連絡する手順が示されています。点滅が消えても一時的な改善の場合があると公式に注記されています（2026年11月22日確認）。",
  },
  {
    q: "点滅の回数はどのように数えればよいですか？",
    a: "日立公式FAQでは、リモコンに「音声おしえて」ボタンがある製品は、ボタンを押すとタイマーランプの点滅回数を確認できると案内されています。ボタンがない機種は、点滅と消灯の繰り返しを目視で数えてメモしてください。ランプ表示は機種によって異なると公式に注記されています。",
  },
  {
    q: "暖房中に運転ランプが点いたり暗くなったりします。",
    a: "日立公式FAQでは、暖房時に運転ランプが点灯と減光を繰り返すのは、予熱運転（2〜3分）または室外機の霜取り運転（5〜22分）中であり、故障ではないとされています。ただし、25分以上経過しても続く場合は点検を勧めています（2026年11月22日確認）。",
  },
  {
    q: "日立に修理を依頼すると、点検だけでも費用はかかりますか？",
    a: "日立公式の修理料金のページでは、出張料は3,850円（税込）、見積後にキャンセルした場合は診断料と出張料の合計5,830円（税込）とされています。修理を伴わない点検・説明だけで終わった場合も5,830円です。販売店経由で依頼した場合の料金は販売店にご確認ください（2026年11月22日確認）。",
  },
  {
    q: "みはりランプが点灯したままです。異常でしょうか？",
    a: "日立公式FAQでは、みはりランプの点灯（点滅ではない状態）は故障ではないとされています。異常のお知らせは点滅です。タイマーランプが点灯し続けている場合も、公式では故障ではないと案内されています。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function ErrorCodeHitachiPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "日立エアコンのエラー表示（ランプ点滅）の意味", href: "/guide/error-code-hitachi/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            日立エアコン（白くまくん）のエラーコード・ランプ点滅の意味
            <br className="hidden md:block" />
            回数別一覧と公式の修理料金
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-22">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            日立のルームエアコン「白くまくん」は、不具合を主に<strong className="font-semibold text-slate-900">ランプの点滅回数</strong>でお知らせします。
            <strong className="font-semibold text-slate-900">タイマーランプの点滅は室内機、みはりランプの点滅は室外機の異常</strong>のお知らせです（取扱説明書）。
            本記事では、日立公式FAQ（kadenfan.hitachi.co.jp）と公式の修理料金表に掲載されている点滅回数ごとの内容を一覧にし、故障ではない点滅との見分け方、修理を依頼する場合の費用の目安をまとめています（{CHECKED}）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：点滅を確認した場合の手順（公式の案内）</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>どのランプが何回点滅しているかをメモします（「音声おしえて」ボタンがある機種はボタンで確認できます）。</li>
              <li>電源プラグを抜くかブレーカーを切り、約3分後に入れ直して運転します。</li>
              <li>それでも点滅する場合は使用を中止し、販売店または日立の修理窓口に、メモした回数を伝えて点検を依頼します。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="timer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">タイマーランプの点滅回数と内容（室内機）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>点滅回数</th>
                    <th className={th}>公式FAQに記載の不具合の可能性がある部品</th>
                    <th className={th}>修理料金表の見出し</th>
                  </tr>
                </thead>
                <tbody>
                  {timerLamp.map((r) => (
                    <tr key={r.n}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{r.n}</td>
                      <td className={td}>{r.part}</td>
                      <td className={`${td} text-slate-600`}>{r.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：日立公式FAQ「タイマーランプが点滅している」（kadenfan.hitachi.co.jp/support/ra/q_a/a42.html）、日立公式「ルームエアコン 修理料金の目安」（kadenfan.hitachi.co.jp/support/repair/raj.html）。いずれも{CHECKED}。公式の一覧には6〜8回・14〜16回の記載はありません。「—」は修理料金表に対応する見出しがないものです。
            </p>
          </section>

          <section id="mihari" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">みはりランプの点滅回数と内容（室外機）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>点滅回数</th>
                    <th className={th}>公式FAQに記載の不具合の可能性がある部品</th>
                    <th className={th}>修理料金表の見出し</th>
                  </tr>
                </thead>
                <tbody>
                  {mihariLamp.map((r) => (
                    <tr key={r.n}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{r.n}</td>
                      <td className={td}>{r.part}</td>
                      <td className={`${td} text-slate-600`}>{r.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：日立公式FAQ「みはりランプが点滅している」（kadenfan.hitachi.co.jp/support/ra/q_a/post-97.html）、日立公式「ルームエアコン 修理料金の目安」。いずれも{CHECKED}。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              機種によっては、除湿ランプの点滅で室外機の異常をお知らせします。日立公式FAQでは、除湿ランプの2〜5回は室外機基板・コンプレッサー、6回はサーミスタ・室外機基板・コンプレッサー、7回はサーミスタ・室外機基板、12回は室外機基板・室外ファンモータ、9回・13〜15回は室外機基板の不具合の可能性があるとされています（kadenfan.hitachi.co.jp/support/ra/q_a/post-98.html・{CHECKED}）。
            </p>
          </section>

          <section id="other" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">その他のランプ表示で異常を知らせるもの</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li><strong>すべてのランプが点滅</strong>：据え付けに問題が発生している可能性があり、販売店または取付工事業者への相談が案内されています。</li>
              <li><strong>運転ランプとタイマーランプが交互に点灯</strong>：シーズン前自動点検の結果、室内機・室外機にトラブルが生じている可能性があります。</li>
              <li><strong>洗浄ランプが4秒点灯・3秒消灯</strong>：室内機のファン掃除ユニットが異常のため停止しています。</li>
              <li><strong>クリーンランプが4秒点灯・1秒消灯</strong>：エアフィルターなどの部品が正しく取り付けられていない可能性があります。付け直しても点滅する場合は、フィルター掃除ユニットの異常による停止です。</li>
              <li><strong>ecoランプのみ点滅</strong>：「見る・聞く・感じるセンサー」部の不具合です。</li>
              <li><strong>遠隔ランプが5回点滅を繰り返す</strong>：無線LAN機能が正常に動作していません。</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：日立公式FAQ（kadenfan.hitachi.co.jp/support/ra/q_a/a33.html・post-141.html）。{CHECKED}。表示は機種により異なります。</p>
          </section>

          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない点滅・点灯（公式が「故障ではない」としているもの）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className={th}>表示</th>
                    <th className={th}>公式の説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>暖房中に運転ランプが点灯と減光を繰り返す</td><td className={td}>予熱運転（2〜3分）または霜取り運転（5〜22分）中です。25分以上続く場合は点検が勧められています。</td></tr>
                  <tr><td className={td}>運転ランプとタイマーランプが同時に点滅</td><td className={td}>シーズン前自動点検の動作中で、約1分で完了すると消えます。</td></tr>
                  <tr><td className={td}>運転ランプと洗浄ランプが点滅</td><td className={td}>プレシーズン自動お手入れの開始のお知らせです。</td></tr>
                  <tr><td className={td}>クリーンランプが1秒点灯・3秒消灯</td><td className={td}>長期間、凍結洗浄をしていないことのお知らせです。</td></tr>
                  <tr><td className={td}>ミストランプの点滅</td><td className={td}>イオンミスト発生装置にほこりなどが付着していることのお知らせで、まずお手入れが案内されています。</td></tr>
                  <tr><td className={td}>タイマーランプ・みはりランプが点灯したまま</td><td className={td}>点灯は故障ではありません（異常は点滅でお知らせします）。</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：日立公式FAQ（kadenfan.hitachi.co.jp/support/ra/q_a/a10.html・a33.html・post-141.html・post-145.html・post-97.html）。{CHECKED}。</p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">日立に修理を依頼した場合の料金の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              日立公式の修理料金の目安は、技術料・部品代・出張料の合計です。出張料は<strong>3,850円（税込）</strong>、見積後にキャンセルした場合や点検・説明だけで終わった場合は<strong>診断料と出張料の合計5,830円（税込）</strong>がかかります。
              点滅回数から想定される主な部品の修理料金は次のとおりです（室内機は通常設置・室外機は平地置きの場合）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[480px]">
                <thead>
                  <tr>
                    <th className={th}>修理内容（交換部品）</th>
                    <th className={th}>公式の目安（税込・出張料等を含む）</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f) => (
                    <tr key={f.part}>
                      <td className={td}>{f.part}</td>
                      <td className={`${td} whitespace-nowrap`}>{f.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：日立公式「ルームエアコン 修理料金の目安」（kadenfan.hitachi.co.jp/support/repair/raj.html）、「出張修理のご依頼」（kadenfan.hitachi.co.jp/support/inquiry/repair/housecall.html）。{CHECKED}。日立へ直接依頼した家庭用の修理の目安で、高所設置などは別料金です。販売店経由の料金は販売店にご確認ください。保証期間はお買い上げの日から1年間です。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              コンプレッサーの交換は10万円を超えるため、製造から10年前後の機種では買い替えもあわせてご検討ください。判断の目安は<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>、メーカー各社の料金は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>でご覧いただけます。
              メーカー以外の修理業者に相談したい場合は、<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>で料金と対応エリアを比較できます。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">日立の修理受付窓口</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>Web受付：kadenfan.hitachi.co.jp/support/inquiry/repair/web.html</li>
              <li>電話（日立家電エコーセンター）：0120-3121-68（携帯電話からは0570-0031-68・有料）</li>
              <li>受付時間：9:00〜18:00（月〜土）、9:00〜17:00（日・祝日、年末年始）。時間外は自動音声で受け付けています。</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：日立公式「修理のご相談」（kadenfan.hitachi.co.jp/support/inquiry/repair/consultation.html）。{CHECKED}。0120-3121-11は使い方の相談窓口で、修理の受付窓口ではありません。</p>
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
                <li>・日立公式FAQ（kadenfan.hitachi.co.jp/support/ra/q_a/ の a42・post-97・post-98・post-141・post-145・a33・a10）</li>
                <li>・日立ルームエアコン取扱説明書（RAS-XC2226S ほか）</li>
                <li>・日立公式「ルームエアコン 修理料金の目安」「出張修理のご依頼」「修理のご相談」</li>
                <li>・確認日：いずれも2026年11月22日</li>
              </ul>
              <p className="mt-2">ランプ表示は機種によって異なると公式に注記されています。正確な内容はお使いの機種の取扱説明書でご確認ください。本記事は依頼の判断にお役立ていただくためのもので、分解・修理はメーカーまたは専門業者へご依頼ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る（症状別の切り分け）" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/error-code-mitsubishi/", label: "三菱(霧ヶ峰)のランプ点滅・エラー表示" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/ranking/", label: "エアコン修理業者ランキング" },
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
