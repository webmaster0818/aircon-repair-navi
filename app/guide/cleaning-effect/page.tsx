import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングは意味ない？効果の根拠と依頼する価値がある・ない状態の見分け方【2026年11月確認】",
  description:
    "エアコンクリーニングは意味ないのかを、メーカー公式・資源エネルギー庁・国民生活センターの公表情報で確認しました。電気代の節約として公表されている数値はフィルター掃除のものです。業者クリーニングが役立つのは内部のカビ・汚れ・臭いで、故障やガス漏れは対象外です。依頼する価値がある状態を表で整理しています。",
  alternates: { canonical: "/guide/cleaning-effect/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンクリーニングは本当に意味がないのですか？",
    a: "意味がないわけではありません。パナソニックは公式FAQで「吹出口の内部に汚れやカビが付着した場合、お客様ではお手入れすることはできません」と案内しており、内部のカビ・汚れ・臭いを落とす手段は業者によるクリーニングに限られます（2026年11月20日確認）。一方で、故障・ガス漏れ・エラー表示はクリーニングでは改善しないため、その場合は修理の相談が必要です。",
  },
  {
    q: "業者クリーニングで電気代はどのくらい安くなりますか？",
    a: "業者による内部クリーニングの節電量を数値で示した公式ページは、当サイトが確認したメーカー（ダイキン・日立・パナソニック・ゼネラル）では見当たりませんでした（2026年11月20日確認）。公表されている数値はフィルター掃除の効果で、資源エネルギー庁は目詰まりしたフィルターを月1〜2回清掃した場合、年間約1,170円（2.5kW）〜約1,250円（4.0kW）の節約と試算しています。",
  },
  {
    q: "フィルター掃除だけで十分な場合はありますか？",
    a: "臭いやカビが見られず、効きの低下がフィルターの目詰まりによるものであれば、まずフィルター掃除で改善するかをご確認ください。日立は、エアフィルターのゴミやホコリを取り除くことで「約5～10％の省エネ効果が期待できる」としています。フィルター掃除の後も臭いが残る場合や、吹出口の奥にカビが見える場合は、業者への依頼をご検討ください。",
  },
  {
    q: "故障しているエアコンでもクリーニングを頼めますか？",
    a: "断られる場合があります。パナソニックのエアコンクリーニングの利用規約では、「故障、不具合がある、または正常に動作しない対象製品のクリーニング作業」や、お買い上げから10年以上経過している製品のクリーニング作業を、対象外となる場合がある作業として挙げています（2026年11月20日確認）。故障が疑われる場合は、先に修理の相談をおすすめします。",
  },
  {
    q: "クリーニングを依頼する前に確認しておくことはありますか？",
    a: "国民生活センターは、複数社から見積もりを取ること、作業中に故障や損傷があった場合の補償内容や保険の加入状況を契約前に確認することを呼びかけています（2025年2月28日公表）。エアコンの場合はクリーニング方法も確認し、必要に応じてメーカーに問い合わせることも一つの方法としています。",
  },
];

const effectRows = [
  {
    who: "ダイキン",
    target: "フィルター掃除",
    value: "掃除をしないと冷房時の消費電力が25％高くなる",
    note: "ダイキンによる試算",
  },
  {
    who: "日立",
    target: "エアフィルターのお手入れ",
    value: "約5～10％の省エネ効果が期待できる",
    note: "目詰まりしたフィルターのゴミ・ホコリを取り除いた場合",
  },
  {
    who: "資源エネルギー庁",
    target: "フィルターを月に1回か2回清掃",
    value: "2.5kW：年間37.90kWh・約1,170円の節約／4.0kW：年間40.30kWh・約1,250円の節約",
    note: "目詰まりによる風量低下率を20％と想定。電気料金は31円/kWhで換算",
  },
  {
    who: "ゼネラル",
    target: "業者による内部クリーニング（自社の有料サービス）",
    value: "数値の記載なし",
    note: "効果として「冷暖房の効きが良くなります」「電気代の節約にもつながります」と記載",
  },
];

const judgeRows = [
  {
    state: "フィルターを掃除しても臭いが残る",
    worth: "依頼する価値がある",
    tone: "text-emerald-700",
    basis: "パナソニックは、本体内部のにおいが改善しない場合は販売店またはクリーニングサービスへの申し込みを案内しています",
  },
  {
    state: "吹出口の奥・ファンにカビや汚れが見える",
    worth: "依頼する価値がある",
    tone: "text-emerald-700",
    basis: "パナソニックは、吹出口の内部の汚れやカビはお客様ではお手入れできないとしています",
  },
  {
    state: "効きが弱いが、フィルターにホコリがたまっている",
    worth: "まずフィルター掃除",
    tone: "text-amber-700",
    basis: "公表されている省エネ効果（ダイキン・日立・資源エネルギー庁）はフィルター掃除のものです。掃除後も改善しなければ次の段階へ",
  },
  {
    state: "臭い・カビがなく、フィルターも定期的に掃除している",
    worth: "急ぐ必要は低い",
    tone: "text-amber-700",
    basis: "ゼネラルは、内部の汚れ方は使用時間や部屋の状況で異なるため、汚れを確認したうえでの依頼を案内しています",
  },
  {
    state: "エラー表示・電源が入らない・正常に動作しない",
    worth: "クリーニングの対象外",
    tone: "text-rose-700",
    basis: "パナソニックの利用規約は、故障・不具合がある製品や正常に動作しない製品のクリーニングを対象外となる場合がある作業としています",
  },
  {
    state: "冷媒ガスの漏れが疑われる",
    worth: "クリーニングの対象外",
    tone: "text-rose-700",
    basis: "クリーニングはカビやホコリ等を取り除くサービスです（パナソニック利用規約第3条）。同規約はガス漏れを作業が直接の原因ではない不具合の例に挙げています",
  },
  {
    state: "お買い上げから10年以上経過している",
    worth: "受付可否の確認が必要",
    tone: "text-amber-700",
    basis: "パナソニックは、部品供給の終了した製品やお買い上げから10年以上経過している製品を対象外となる場合があるとしています",
  },
];

export default function CleaningEffectPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/cleaning-effect/" },
          { name: "エアコンクリーニングは意味ないのか", href: "/guide/cleaning-effect/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">お手入れガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングは意味ない？
            <br className="hidden md:block" />
            公表されている効果の根拠と依頼の判断
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンクリーニングは、<strong className="font-semibold text-slate-900">内部のカビ・汚れ・臭いがある場合には意味があります</strong>。メーカーは、吹出口の奥や熱交換器の汚れはご自身では掃除できないとしており、落とす手段は業者によるクリーニングに限られるためです。
            一方で、<strong className="font-semibold text-slate-900">故障・ガス漏れ・エラー表示はクリーニングでは改善しません</strong>。また、当サイトが{UPDATED}に確認したところ、電気代の節約効果として公表されている数値は、いずれもフィルター掃除によるものでした。
            本記事では、公表されている根拠を整理したうえで、依頼する価値がある状態とない状態をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">効果の根拠の整理（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>節電効果の公表値はフィルター掃除のもの：<strong>ダイキン25％</strong>（掃除しない場合の冷房時の消費電力増）、<strong>日立約5～10％</strong>、<strong>資源エネルギー庁 年間約1,170〜1,250円</strong></li>
              <li>業者の内部クリーニングの効果：<strong>内部のカビ・汚れ・臭いの除去</strong>。節電量の数値は、確認したメーカーの公式ページでは見当たりませんでした</li>
              <li>クリーニングの対象外：<strong>故障・不具合・正常に動作しない状態</strong>（パナソニック利用規約）。冷媒ガスの漏れも修理の対象です</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="evidence" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">公表されている効果の数値と、その対象</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              「エアコンの掃除で電気代が下がる」という説明の根拠になっている公表値を、メーカーと資源エネルギー庁の公式ページで確認し、何を掃除した場合の数値かをそろえて整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">公表元</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対象</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公表されている効果</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">条件・補足</th>
                  </tr>
                </thead>
                <tbody>
                  {effectRows.map((r) => (
                    <tr key={r.who}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.who}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.target}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.value}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top text-xs text-slate-500">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。資源エネルギー庁の金額は、同庁「省エネポータルサイト」の算出根拠に記載された電気料金目安単価31円/kWh（令和4年7月 全国家庭電気製品公正取引協議会）による換算です。ご使用の機器・地域・住宅により異なります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              表のとおり、具体的な数値はすべてフィルター掃除に関するものです。業者による内部クリーニングについては、ゼネラルが自社サービスの効果として冷暖房の効きの回復や電気代の節約を挙げていますが、数値は示されていません。
              資源エネルギー庁の試算による年間の節約額（約1,170〜1,250円）は、当サイトの料金比較（2026年10月25日確認）で壁掛け・お掃除機能なしの業者クリーニングが14,300円からであることと比べると、1割に満たない額です。
              そのため当サイトでは、<strong>電気代の節約だけを目的とする場合は、まずフィルター掃除</strong>をおすすめしています。業者クリーニングは、次の節でご説明する内部の汚れへの対処として検討するのが適切です。
              フィルター掃除の手順は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>、料金の比較は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>に掲載しています。
            </p>
          </section>

          <section id="inside" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者クリーニングでなければ得られない効果</h2>
            <p className="text-sm leading-7 text-slate-700">
              フィルター掃除で落とせるのはフィルターに付いたホコリまでです。エアコン内部の汚れについて、各社の公式ページには次のように記載されています（{UPDATED}確認）。
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>パナソニック</strong>：「吹出口の内部に汚れやカビが付着した場合、お客様ではお手入れすることはできません」「本体内部の洗浄は高い専門知識が必要なため、お客様ご自身でお手入れすることはできません」（公式FAQ）</li>
              <li><strong>ダイキン</strong>：カビはホコリを栄養源にして育つため、内部にホコリがたまるとカビの発生を助長する可能性があると説明しています。熱交換器などフィルター以外の内部の掃除は専門業者に任せるよう案内しています</li>
              <li><strong>ゼネラル</strong>：「エアコンを数シーズンご使用になると、内部の汚れやにおいが発生することがあります」とし、普段のお手入れとは別に点検・クリーニング（有料）をすすめています</li>
              <li><strong>NITE（製品評価技術基盤機構）</strong>：「エアコンの内部洗浄は正しい知識を持った業者に依頼してください」と呼びかけています</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              このように、内部のカビや臭いは、ご自身でのお手入れでは対処できない領域とされています。市販の洗浄スプレーによる内部洗浄を控えるべき理由と事故の件数は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>、臭いの原因の切り分けは<Link href="/guide/smell/" className="text-sky-700 underline">エアコンの臭いの原因と対処</Link>をご覧ください。
            </p>
          </section>

          <section id="judge" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼する価値がある状態・意味が薄い状態</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              上記の公表情報と、パナソニックのエアコンクリーニングサービス利用規約（2026年3月制定）の記載をもとに、当サイトで状態別に整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアコンの状態</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">判断</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">根拠</th>
                  </tr>
                </thead>
                <tbody>
                  {judgeRows.map((r) => (
                    <tr key={r.state}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold leading-7 align-top">{r.state}</td>
                      <td className={`border border-slate-300 px-3 py-2 whitespace-nowrap align-top font-semibold ${r.tone}`}>{r.worth}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。受付の条件は事業者ごとに異なります。ご依頼前に、各事業者の公式サイトにて最新情報をご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              「意味がなかった」と感じる原因の一つは、故障による不調をクリーニングで直そうとすることです。冷えない場合は<Link href="/symptom/not-cooling/" className="text-sky-700 underline">冷えない症状の切り分け</Link>、エラー表示が出ている場合は<Link href="/symptom/error-code/" className="text-sky-700 underline">エラーコードの症状ページ</Link>、水漏れの場合は<Link href="/guide/water-leak/" className="text-sky-700 underline">水漏れの確認手順</Link>で、汚れと故障のどちらが疑われるかを先にご確認ください。
              10年以上お使いの機種は、<Link href="/guide/lifespan/" className="text-sky-700 underline">エアコンの寿命と買い替えの目安</Link>もあわせてご検討ください。
            </p>
          </section>

          <section id="caution" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼前に確認しておきたい点</h2>
            <p className="text-sm leading-7 text-slate-700">
              クリーニングの効果があっても、事業者の選び方を誤るとトラブルにつながる場合があります。公的機関と事業者の公表内容は次のとおりです。
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>国民生活センター（2025年2月28日公表）</strong>：エアコンの掃除の作業中にエアコンを壊され、弁償の約束の後に業者と連絡が取れなくなった相談事例を紹介しています。契約の前に、複数社からの見積もり、故障や損傷時の補償内容、保険の加入状況、クリーニング方法を確認するよう呼びかけています</li>
              <li><strong>仕上がりの範囲</strong>：パナソニックの利用規約には、サービスは「カビ、ゴミ、汚れ等を完全に取り除くことを保証するものではない」と明記されています。どの部品まで分解・洗浄するかは事業者やコースにより異なります（<Link href="/guide/disassembly-cleaning/" className="text-sky-700 underline">完全分解洗浄と通常洗浄の違い</Link>）</li>
              <li><strong>故障の場合の依頼先</strong>：国民生活センターは2026年6月3日、エアコン修理に関する相談件数（PIO-NET）が2025年度に1,251件と、2021年度の451件から2倍以上に増えたと公表し、作業前に故障原因・修理内容・修理費用を確認するよう呼びかけています。修理の依頼先は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理の依頼先の選び方</Link>をご覧ください</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              臭いやカビなど、クリーニングで対処できる状態であれば、補償内容を確認したうえで業者へのご依頼をおすすめします。依頼の時期の目安は<Link href="/guide/cleaning-frequency/" className="text-sky-700 underline">エアコンクリーニングの頻度</Link>に掲載しています。
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
              <li>ダイキン工業 CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_clean</li>
              <li>日立「エアフィルターのお手入れ方法を知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-91.html</li>
              <li>資源エネルギー庁 省エネポータルサイト「空調｜無理のない省エネ節約」https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/howto/airconditioning/index.html</li>
              <li>資源エネルギー庁 省エネポータルサイト「無理のない省エネ節約」（省エネ効果の算出根拠）https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/howto/</li>
              <li>パナソニック 公式FAQ「エアコンのお手入れ方法」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9890</li>
              <li>パナソニック「エアコンクリーニングサービス ご利用規約」https://panasonic.jp/membership/cleaning/aircon/policy.html</li>
              <li>ゼネラル「点検・クリーニング」https://www.generalww.com/jp/support/const_mainte/index.html</li>
              <li>ゼネラル よくあるご質問「クリーニング（内部洗浄）を行うのはいつが最適ですか？」https://www.generalww.com/jp/support/faq/as/0053/index.html</li>
              <li>NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）https://www.nite.go.jp/jiko/chuikanki/press/2020fy/prs200625.html</li>
              <li>国民生活センター「ハウスクリーニングのトラブルにご注意」（2025年2月28日）https://www.kokusen.go.jp/news/data/n-20250228_1.html</li>
              <li>国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日）https://www.kokusen.go.jp/news/data/n-20260603_1.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
                { href: "/symptom/not-cooling/", label: "エアコンが冷えない症状の切り分け" },
                { href: "/guide/cheap-cleaning/", label: "エアコンクリーニングを安く頼む方法" },
                { href: "/guide/auto-clean-function/", label: "お掃除機能付きエアコンは必要か" },
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
