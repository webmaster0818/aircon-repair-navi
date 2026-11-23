import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンが壊れたときの暑さ対策｜修理までの過ごし方と救急車を呼ぶ目安【環境省・消防庁の公表資料・2026年11月確認】",
  description:
    "夏にエアコンが壊れた場合の暑さ対策を、環境省・厚生労働省・消防庁の公表資料で整理しました。熱中症の搬送は住居が39.6%で最多（2026年）。修理までの室内での対策、クーリングシェルター、救急車を呼ぶ目安を掲載しています。",
  alternates: { canonical: "/guide/broken-heat-measures/" },
};

const UPDATED = "2026年11月23日";

const faqs = [
  {
    q: "エアコンが壊れて修理を待つ間、何をすればよいですか？",
    a: "環境省の「熱中症環境保健マニュアル2022」は、エアコンや扇風機が使えないときの対策として、涼しい服装、風通しの確保、濡れたタオルを肌に当ててうちわであおぐ、冷却グッズ・電池式扇風機の利用、水シャワーを挙げています。水分は1時間あたりコップ1杯程度が目安で、汗を多くかく場合は塩分も補給するとされています。室内でも暑さが厳しい場合は、涼しい場所へ移動することをご検討ください。",
  },
  {
    q: "家の中にいても熱中症になりますか？",
    a: "なります。消防庁の公表では、2026年5〜9月の熱中症による救急搬送77,638人のうち、発生場所が「住居」の方が30,718人（39.6%）で最も多くなっています。東京都監察医務院の集計では、2025年夏に東京都23区の屋内で熱中症により亡くなった181人のうち、エアコンを使用していなかった方（故障・未設置を含む）が大半でした。",
  },
  {
    q: "クーリングシェルターとは何ですか？",
    a: "気候変動適応法の改正（2024年4月1日全面施行）で設けられた、市町村長が指定する暑さをしのげる施設（指定暑熱避難施設）です。公民館・図書館・ショッピングセンターなどが指定され、熱中症特別警戒アラートの発表期間中に一般に開放されます。お住まいの地域の施設は、環境省 熱中症予防情報サイトの一覧から市区町村のページで確認できます。",
  },
  {
    q: "どのような症状なら救急車を呼ぶべきですか？",
    a: "環境省・厚生労働省・消防庁は、呼びかけに応えない（意識がない・応答がおかしい）、自力で水を飲めない、けいれんがある、体が熱いといった場合は、ためらわずに救急車を呼ぶよう案内しています。救急車を待つ間は、首の付け根の両側・脇の下・太ももの付け根を冷やします。判断に迷う場合は救急安心センター事業「#7119」（一部未実施の地域あり）に相談できます。",
  },
  {
    q: "扇風機だけで暑さはしのげますか？",
    a: "環境省の資料では、扇風機は空気の循環や冷房との併用に使うものとされ、高齢者向けのリーフレットでは長時間、風が体に直接あたらないようにと注意しています。室温が高い状態では扇風機だけでは体を冷やしきれない場合があるため、体を直接冷やす方法や涼しい場所への移動と組み合わせてください。",
  },
];

const placeRows = [
  { place: "住居", people: "30,718人", share: "39.6%" },
  { place: "道路", people: "16,080人", share: "20.7%" },
];

const acRows = [
  { k: "エアコンの設置有・使用無", n: "121人", s: "66.8%" },
  { k: "エアコンの設置有・使用有", n: "28人", s: "15.5%" },
  { k: "エアコンの設置無", n: "23人", s: "12.7%" },
  { k: "不明", n: "9人", s: "5.0%" },
];

const wbgtRows = [
  { v: "31以上", level: "危険", note: "高齢者においては安静状態でも発生する危険性が大きいとされています" },
  { v: "28以上31未満", level: "厳重警戒", note: "" },
  { v: "25以上28未満", level: "警戒", note: "" },
  { v: "25未満", level: "注意", note: "" },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-7 align-top";

export default function BrokenHeatMeasuresPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom/" },
          { name: "エアコンが壊れたときの暑さ対策", href: "/guide/broken-heat-measures/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンが壊れたときの暑さ対策
            <br className="hidden md:block" />
            修理までの過ごし方と救急車を呼ぶ目安
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            夏にエアコンが壊れた場合は、<strong className="font-semibold text-slate-900">修理の依頼を急ぐと同時に、体を直接冷やす・水分と塩分をとる・涼しい場所へ移動する</strong>ことが大切です。
            熱中症の救急搬送は、発生場所別で「住居」が最も多くなっています。
            本記事では、当サイトが{UPDATED}に環境省・厚生労働省・消防庁・東京都監察医務院の公表資料を確認した内容をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>熱中症の救急搬送（2026年5〜9月）：<strong>77,638人、うち住居が39.6%</strong>（消防庁）</li>
              <li>東京都23区の屋内の熱中症死亡（2025年夏）：<strong>181人の大半がエアコンを使っていなかった</strong>（故障・未設置を含む）</li>
              <li>修理待ちの間：<strong>濡れタオル＋うちわ、冷却グッズ、水シャワー、1時間にコップ1杯の水分</strong>（環境省）</li>
              <li>意識がおかしい・自力で水を飲めない：<strong>ためらわずに救急車</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="data" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">室内の熱中症は少なくありません</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              消防庁が2026年10月28日に公表した確定値では、2026年5〜9月の熱中症による救急搬送人員は77,638人でした。発生場所別の上位は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[420px]">
                <thead>
                  <tr>
                    <th className={th}>発生場所</th>
                    <th className={th}>搬送人員</th>
                    <th className={th}>割合</th>
                  </tr>
                </thead>
                <tbody>
                  {placeRows.map((r) => (
                    <tr key={r.place}>
                      <td className={`${td} font-semibold`}>{r.place}</td>
                      <td className={td}>{r.people}</td>
                      <td className={td}>{r.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※消防庁「令和8年（5月〜9月）の熱中症による救急搬送状況」より。住居の割合は2022〜2025年も38.0〜39.9%で推移しています。</p>
            <p className="mt-5 text-sm leading-7 text-slate-700 mb-4">
              東京都監察医務院の集計では、2025年6〜9月に東京都23区で熱中症により亡くなった方は193人で、そのうち181人が屋内でした。屋内で亡くなった方のエアコンの状況は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[420px]">
                <thead>
                  <tr>
                    <th className={th}>エアコンの状況</th>
                    <th className={th}>人数</th>
                    <th className={th}>割合</th>
                  </tr>
                </thead>
                <tbody>
                  {acRows.map((r) => (
                    <tr key={r.k}>
                      <td className={`${td} font-semibold`}>{r.k}</td>
                      <td className={td}>{r.n}</td>
                      <td className={td}>{r.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※東京都監察医務院「令和7年夏の熱中症死亡者数の状況【東京都23区（確定値）】」より。同院は「屋内で亡くなられた方の大半は、設置が無い場合及び故障の場合も含めて、エアコンが使われていなかった」としています。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              東京都は予防の呼びかけで、夏が来る前にエアコンが故障していないかを確認するよう求めています。故障に気づいた時点で、早めに修理の相談をすることが重要です。
            </p>
          </section>

          <section id="measures" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理までの間に室内でできる対策</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              環境省「熱中症環境保健マニュアル2022」は、停電などで屋内のエアコンや扇風機が使えないときの対策として、次の内容を挙げています。エアコンの故障で修理を待つ場合にも参考になります。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>涼しい服装</strong>にし、窓を開けるなどして<strong>風通しを確保</strong>する</li>
              <li><strong>濡れたタオルを肌に当て、うちわであおぐ</strong>（気化熱で体を冷やします）</li>
              <li><strong>冷却グッズ</strong>や<strong>電池式の扇風機</strong>を使う</li>
              <li><strong>水シャワー</strong>を浴びる</li>
              <li>水分は<strong>1時間あたりコップ1杯程度</strong>を目安にとり、汗を多くかく場合は<strong>塩分も補給</strong>する</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              厚生労働省は、遮光カーテン・すだれで日差しを遮ることと、室温をこまめに確認することも挙げています。
              環境省の高齢者向けリーフレットでは、水分の目安を1日あたり1.2L（コップ約6杯）とし、扇風機の風は長時間、体に直接あたらないようにと注意しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              室内でも暑さが厳しい場合は、親族・知人宅や、次の項目のクーリングシェルターなど涼しい場所へ移動することもご検討ください。一人暮らしの高齢のご家族がいる場合は、こまめに連絡を取ることをおすすめします（上の東京都の集計では、屋内で亡くなった181人のうち152人が単身住まいでした）。
            </p>
          </section>

          <section id="wbgt" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">暑さ指数とアラートの目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              環境省は、気温・湿度・日射などから算出する暑さ指数（WBGT）で、日常生活での注意の目安を示しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={th}>暑さ指数</th>
                    <th className={th}>区分</th>
                    <th className={th}>補足</th>
                  </tr>
                </thead>
                <tbody>
                  {wbgtRows.map((r) => (
                    <tr key={r.v}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.v}</td>
                      <td className={td}>{r.level}</td>
                      <td className={`${td} text-xs`}>{r.note || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>熱中症警戒アラート</strong>：府県予報区などのいずれかの地点で、翌日・当日の日最高暑さ指数が33（予測値）に達する場合に発表されます</li>
              <li><strong>熱中症特別警戒アラート</strong>：都道府県内のすべての情報提供地点で、翌日の日最高暑さ指数が35（予測値）に達する場合などに発表され、クーリングシェルターが開放されます</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              エアコンが使えない日にアラートが出ている場合は、自宅で過ごし続けることは避け、涼しい場所への移動を優先してください。
            </p>
          </section>

          <section id="shelter" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">クーリングシェルター（指定暑熱避難施設）を使う</h2>
            <p className="text-sm leading-7 text-slate-700">
              クーリングシェルターは、2023年5月12日公布・2024年4月1日全面施行の改正気候変動適応法で設けられた制度で、市町村長が指定します。公民館・図書館・ショッピングセンターなどが指定され、熱中症特別警戒アラートの発表期間中は一般に開放されます。
              環境省の資料では、自宅にエアコンがあるなど涼しい環境を確保できる場合は移動は必須ではないとされていますが、エアコンが故障している場合は利用を検討する価値があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              施設は、環境省 熱中症予防情報サイトの「クーリングシェルター」のページで都道府県を選ぶと、各市区町村の一覧ページへのリンクが表示されます。2026年10月20日現在、指定済みの市区町村は1,262です。開放時間や対象者は施設ごとに異なるため、市区町村のページでご確認ください。
            </p>
          </section>

          <section id="emergency" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">救急車を呼ぶ目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">環境省・厚生労働省・消防庁の資料をまとめると、次の場合は救急車を呼ぶよう案内されています。</p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>呼びかけに応えない、応答がおかしい（意識障害）</li>
              <li>自力で水を飲めない</li>
              <li>けいれん、運動障害がある、体が熱い</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              頭痛・吐き気・だるさの段階でも、口から飲めない場合や症状が改善しない場合は受診が必要とされています（消防庁）。救急車を待つ間は涼しい場所で体を冷やし、首の付け根の両側・脇の下・太ももの付け根を冷やします。反応が悪い方に無理に水を飲ませてはいけないとされています（環境省）。
              判断に迷う場合は救急安心センター事業「#7119」に相談できます（一部未実施の地域があります）。
            </p>
          </section>

          <section id="repair" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理を早く頼むために</h2>
            <p className="text-sm leading-7 text-slate-700">
              まず、ブレーカーやリモコンの電池など、ご自身で確認できる項目を試すと、修理を待たずに解決する場合があります。確認手順は<Link href="/guide/power-not-on/" className="text-sky-700 underline">電源が入らないときの確認手順</Link>・<Link href="/symptom/not-cooling/" className="text-sky-700 underline">エアコンが冷えない原因</Link>に掲載しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              夏は修理の依頼が集中し、訪問まで日数がかかることがあります。依頼先ごとの日数の目安は<Link href="/guide/repair-days/" className="text-sky-700 underline">エアコン修理は何日かかる？</Link>を、当日・翌日の対応をうたう業者は<Link href="/ranking/fast/" className="text-sky-700 underline">対応の早い修理業者の比較</Link>をご覧ください。修理か買い替えかで迷う場合は<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>が参考になります。
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
            <p className="mt-4 text-xs leading-6 text-slate-400">※本記事は公的機関の公表資料をもとにした一般的な情報で、医療上の判断に代わるものではありません。体調に不安がある場合は医療機関・救急相談窓口にご相談ください。</p>
          </section>

          <section id="sources" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-3">出典（{UPDATED}確認）</h2>
            <ul className="list-disc pl-6 space-y-1 text-xs leading-6 text-slate-500 break-all">
              <li>総務省消防庁「令和8年（5月〜9月）の熱中症による救急搬送状況」（2026年10月28日公表）https://www.fdma.go.jp/disaster/heatstroke/items/r8/heatstroke_nenpou_r8.pdf</li>
              <li>東京都監察医務院「令和7年夏の熱中症死亡者数の状況【東京都23区（確定値）】」https://www.hokeniryo.metro.tokyo.lg.jp/shisetsu/jigyosyo/kansatsu/heatstroke/r07-heatstroke</li>
              <li>環境省「熱中症環境保健マニュアル2022」https://www.wbgt.env.go.jp/pdf/manual/heatillness_manual_full.pdf</li>
              <li>環境省「高齢者のための熱中症対策」https://www.wbgt.env.go.jp/pdf/pr/20230530_leaflet_for_elderly.pdf</li>
              <li>環境省 暑さ指数（WBGT）https://www.wbgt.env.go.jp/wbgt.php</li>
              <li>環境省 熱中症警戒アラート https://www.wbgt.env.go.jp/about_alert.php ／熱中症特別警戒アラート https://www.wbgt.env.go.jp/about_special_alert.php</li>
              <li>環境省 改正気候変動適応法 https://www.wbgt.env.go.jp/doc_ccaa.php ／クーリングシェルター一覧 https://www.wbgt.env.go.jp/heatillness_shelter.php</li>
              <li>環境省 クーリングシェルターのリーフレット https://www.wbgt.env.go.jp/pdf/pr/20260401_cooling_shelter_leaflet.pdf</li>
              <li>厚生労働省 熱中症の予防方法 https://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/kenkou/nettyuu/nettyuu_taisaku/prevent.html</li>
              <li>厚生労働省 熱中症予防リーフレット https://www.mhlw.go.jp/content/necchushoyobou.pdf</li>
              <li>総務省消防庁 熱中症対策リーフレット https://www.fdma.go.jp/disaster/heatstroke/items/heatstroke003_leaflet.pdf</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/repair-days/", label: "エアコン修理にかかる日数の目安" },
                { href: "/ranking/fast/", label: "対応の早い修理業者の比較" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
                { href: "/symptom/not-cooling/", label: "エアコンが冷えない原因と対策" },
                { href: "/guide/power-not-on/", label: "電源が入らないときの確認手順" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
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
