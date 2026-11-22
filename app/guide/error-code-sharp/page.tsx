import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "シャープエアコンのエラーコード・ランプ点滅の意味｜エラー番号の確認方法と公式の故障診断ナビの内容、修理料金【2026年11月確認】",
  description:
    "シャープのエアコンで3つのランプが順に点滅した場合のエラー番号の確認方法と、公式「故障診断ナビ」でご自身で対処できるとされる番号（2-3・7-0・21-0・28-0など）をまとめました。公式の修理料金の目安（出張診断料9,020円〜）と受付窓口も掲載しています。",
  alternates: { canonical: "/guide/error-code-sharp/" },
};

const UPDATED = "2026年11月22日";
const CHECKED = "2026年11月22日確認";

const selfCheck = [
  { code: "2-0〜2-2・2-4・2-5", mean: "室外機の周辺に障害物がないかの確認と、室内機のフィルター清掃が案内されています。" },
  { code: "2-3", mean: "保護装置が働いて、エアコンの運転が止まっている可能性があります。" },
  { code: "7-0", mean: "フィルターの目詰まりや室外機周辺の障害物などで十分に放熱できない場合にも表示されます。" },
  { code: "21-0", mean: "ルーバー開閉つまみやルーバーカバーが閉じていないときに表示されます。" },
  { code: "22-2", mean: "プラズマクラスターイオン発生ユニットの総運転時間を超過した場合に表示されます。" },
  { code: "23-0", mean: "電源電圧の誤印加のエラーです。" },
  { code: "24-1〜24-3", mean: "無線LANルーター・回線・アプリの通知設定の確認が案内されています。" },
  { code: "28-0・28-1・28-3", mean: "エアーフィルターが正しく取り付けられていない可能性があります。" },
  { code: "28-2", mean: "オープンパネルや本体カバーが確実に閉まっていない、またはエアーフィルターが正しく取り付けられていない可能性があります。" },
];

const alpha = [
  { code: "EU・F6・F8・FH", mean: "エアコンに過度の負担がかからないように制御しているときの表示です。" },
  { code: "E2", mean: "室内熱交換器の凍結保護中の表示です。" },
  { code: "E9", mean: "暖房運転時の冷風防止のお知らせで、3分後に解除されます。" },
  { code: "Fo", mean: "室内機の応急運転ボタンの長押し（5秒以上）による冷房強制運転時の表示です。" },
  { code: "L3", mean: "室外ファンモーター関連の異常を検知した場合の表示です。" },
];

const faqs = [
  {
    q: "シャープエアコンのランプが順番に点滅しています。",
    a: "シャープの取扱説明書（L-EE8シリーズ）では、運転ランプ（緑）・タイマーランプ（橙）・プラズマクラスターランプ（青）が順に点滅するのは異常のお知らせとされています。電源プラグを抜き、エアーフィルターの汚れ、吹出口・吸込口のふさがり、室外機のアルミフィンの木の葉の詰まりを確認し、1分以上たってから電源を入れて運転してください。再び点滅する場合は、エラー番号を確認して販売店または修理窓口に連絡するよう案内されています。",
  },
  {
    q: "エラー番号の意味はどこで調べられますか？",
    a: "シャープ公式サイトの「故障診断ナビ」（cs.sharp.co.jp）で、エラー番号ごとの内容とご自身で試せる対処、修理料金の区分を確認できます。取扱説明書にはエラー番号の意味の一覧は掲載されていません。故障診断ナビでも、多くの番号は「本体が故障している可能性があります」という案内で、部品名までは示されていません（2026年11月22日確認）。",
  },
  {
    q: "暖房中に運転ランプがゆっくり点滅します。",
    a: "シャープの取扱説明書（L-EE8シリーズ）では、運転ランプ（緑）のゆっくりした点滅は暖房時の霜取り運転中の表示とされています。異常を知らせる「3つのランプが順に点滅」とは異なります。",
  },
  {
    q: "シャープに修理を依頼すると、見積もりだけでも費用はかかりますか？",
    a: "シャープ公式の修理料金のページでは、見積診断後に修理を行わなかった場合でも出張診断料の負担が必要とされています。出張診断料は出張距離20km以内で9,020円（税込）、20kmを超える場合は10kmごとに550円加算・上限11,330円（離島を除く）です。メーカー保証期間中の保証修理は、出張費も含めて無償です（2026年11月22日確認）。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function ErrorCodeSharpPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "シャープエアコンのエラー表示（ランプ点滅）の意味", href: "/guide/error-code-sharp/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            シャープエアコンのエラーコード・ランプ点滅の意味
            <br className="hidden md:block" />
            エラー番号の確認方法と公式の修理料金
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-22">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            シャープのルームエアコンは、異常を検知すると<strong className="font-semibold text-slate-900">運転ランプ（緑）・タイマーランプ（橙）・プラズマクラスターランプ（青）が順に点滅</strong>してお知らせします。
            点滅の回数やリモコン操作で<strong className="font-semibold text-slate-900">「23-4」のようなエラー番号</strong>を確認でき、シャープ公式の「故障診断ナビ」で番号ごとの案内を調べられます。
            本記事では、取扱説明書に記載の確認方法と、故障診断ナビでご自身で対処できるとされている番号、修理を依頼する場合の公式の料金をまとめています（{CHECKED}）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：3つのランプが順に点滅した場合の手順（取扱説明書の案内）</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>電源プラグを抜き、エアーフィルターの汚れ、吹出口・吸込口のふさがり、室外機のアルミフィンの詰まりを確認します。</li>
              <li>1分以上たってから電源プラグを差し込み、運転します。</li>
              <li>再び点滅する場合はエラー番号を確認し、下の表に該当しない番号であれば販売店または修理窓口にご連絡ください。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="how" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エラー番号の確認方法</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">ランプの点滅回数で読む方法</h3>
                <p className="text-sm leading-7 text-slate-700">
                  緑・橙・青のランプがそれぞれ何回点滅するかで番号を読みます。取扱説明書の例では、緑2回・橙3回・青4回は「23-4」、緑が消灯・橙3回・青4回は「3-4」です。
                  ランプの点滅が消えた場合は、リモコンの停止ボタンを5回続けて押すと、約3分間ランプが点滅します。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">リモコンで確認する方法（L-EE8シリーズの例）</h3>
                <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
                  <li>停止中に「温度」ボタンを5秒間押し続けると、「ピッ」と鳴って「00」が表示されます。</li>
                  <li>「温度」ボタンを繰り返し押し、該当するエラー番号のときに「ピー」と受信音がします（番号は00〜31）。</li>
                  <li>「風量」ボタンを押すと「−0」が表示されます。続けて「温度」ボタンを繰り返し押し（−0〜−7）、受信音がした番号が後半の数字です。</li>
                </ol>
              </div>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：シャープ ルームエアコン取扱説明書（AY-L22EE8 ほか L-EE8シリーズ・jp.sharp/support/air_con/doc/）。{CHECKED}。ボタンの割り当ては機種によって異なる場合があります。L-N・P-N・Sシリーズの取扱説明書にも同じ趣旨の手順が記載されています。</p>
          </section>

          <section id="self" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身で確認・対処できるとされている番号（故障診断ナビ）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>エラー番号</th>
                    <th className={th}>公式の案内</th>
                  </tr>
                </thead>
                <tbody>
                  {selfCheck.map((c) => (
                    <tr key={c.code}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{c.code}</td>
                      <td className={td}>{c.mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：シャープ公式「故障診断ナビ」ルームエアコン（cs.sharp.co.jp/trouble_check/div/air_con/navi/）。{CHECKED}。
              1-・5-・6-・9-・10-〜14-・17-〜20-・26-・29-・31-で始まる番号などは、故障診断ナビで「本体が故障している可能性があります」と案内されており、部品名は公表されていません。3-0は「お客様にお試しいただく対処方法がありません」とされています。
            </p>
          </section>

          <section id="alpha" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">英数字で表示される機種の主な表示</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>表示</th>
                    <th className={th}>公式の案内</th>
                  </tr>
                </thead>
                <tbody>
                  {alpha.map((c) => (
                    <tr key={c.code}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{c.code}</td>
                      <td className={td}>{c.mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：シャープ公式「故障診断ナビ」（英数字表示の機種）。{CHECKED}。H5・H7・U1・E8・P5・P7はフィルターと吹出口の確認が案内されています。C5・EE・F1〜F5・H6・P8・PH・PUは「本体が故障している可能性があります」と案内されています。</p>
          </section>

          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではないランプの点滅</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li><strong>運転ランプ（緑）がゆっくり点滅</strong>：暖房時の霜取り運転中です。</li>
              <li><strong>プラズマクラスターランプ（水色）が点滅</strong>：ダストボックスのお手入れ時期です。</li>
              <li><strong>プラズマクラスターランプ（青）が運転開始時に点滅</strong>：ユニットの交換時期です。</li>
              <li><strong>運転ランプ・パトロールランプ・タイマーランプが同時に点滅</strong>：ダストボックスやエアーフィルターの取り付けを確認します。</li>
              <li><strong>運転ランプとタイマーランプが同時に点滅</strong>：左右風向ルーバーの取り付けを確認します。</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：シャープ ルームエアコン取扱説明書（L-EE8シリーズ）。{CHECKED}。停止中にランプが点灯している場合は、自動内部清浄中の可能性があります（Sシリーズ取扱説明書）。</p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">シャープに修理を依頼した場合の料金の目安</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[480px]">
                <thead>
                  <tr>
                    <th className={th}>症状・修理内容</th>
                    <th className={th}>公式の目安（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>ランプ点滅・エラー表示：電気回路部品・基板などの交換</td><td className={`${td} whitespace-nowrap`}>18,000〜50,000円</td></tr>
                  <tr><td className={td}>ランプ点滅・エラー表示：冷媒回路（圧縮機など）の交換（購入後5年以上）</td><td className={`${td} whitespace-nowrap`}>60,000〜98,000円</td></tr>
                  <tr><td className={td}>リモコンで操作できない</td><td className={`${td} whitespace-nowrap`}>12,000〜21,000円</td></tr>
                  <tr><td className={td}>パネル・ルーバー・自動お掃除機能が動かない</td><td className={`${td} whitespace-nowrap`}>18,000〜26,000円</td></tr>
                  <tr><td className={td}>出張診断料（出張距離20km以内）</td><td className={`${td} whitespace-nowrap`}>9,020円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：シャープ公式「修理料金の目安 エアコン」（jp.sharp/support/repair_cost_air_con.html）。{CHECKED}。メーカー保証（1年）が過ぎた製品をシャープへ直接依頼した場合の目安です。出張診断料は20kmを超える場合10kmごとに550円加算・上限11,330円（離島を除く）で、見積診断後に修理を行わなかった場合も必要です。高所取付など特殊作業を要する場合は別途費用がかかります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              冷媒回路の交換は6万円を超えるため、製造から10年前後の機種は<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>もあわせてご覧ください。
              他メーカーとの料金の違いは<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>に、メーカー以外の修理業者は<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>に掲載しています。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">シャープの修理受付窓口</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>電話（修理相談）：固定電話から0120-02-4649、携帯電話から0570-550-447（つながらない場合は050-3852-5520）</li>
              <li>受付時間：月曜日〜土曜日 9:00〜18:00、日曜日・祝日 9:00〜17:00（年末年始を除く）</li>
              <li>Web修理申し込み（24時間受付）：cs.sharp.co.jp/trouble_check/rule/wrp_agreement.html</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：シャープ公式「修理の電話相談窓口」（jp.sharp/support/rp_4649.html）。{CHECKED}。同ページでは、電話がつながりにくい場合のWeb修理申し込みの利用が案内されています。0120-078-178は購入・使い方の相談窓口です。</p>
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
                <li>・シャープ ルームエアコン取扱説明書（L-EE8・L-N・Sシリーズ）</li>
                <li>・シャープ公式「故障診断ナビ」ルームエアコン（cs.sharp.co.jp）</li>
                <li>・シャープ公式「修理料金の目安 エアコン」「修理の電話相談窓口」</li>
                <li>・確認日：いずれも2026年11月22日</li>
              </ul>
              <p className="mt-2">表示の内容・確認方法は機種によって異なる場合があります。正確な内容はお使いの機種の取扱説明書でご確認ください。本記事は依頼の判断にお役立ていただくためのもので、分解・修理はメーカーまたは専門業者へご依頼ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る（症状別の切り分け）" },
                { href: "/guide/error-code-panasonic/", label: "パナソニックのエラーコード一覧" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/error-code-hitachi/", label: "日立(白くまくん)のランプ点滅の意味" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
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
