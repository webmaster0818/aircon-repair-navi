import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのガス入れすぎ（過充填）｜メーカー説明書の記載と、規定量が配管長で決まる仕組み【2026年11月確認】",
  description:
    "エアコンの冷媒ガスを入れすぎた場合について、メーカー5社の据付説明書で確認しました。規定量を超える充填は不具合の原因になるとゼネラルの説明書に明記されています。規定量は機種と配管長で決まります。5社の追加充填の条件の比較と、指定冷媒以外を補充してはいけない理由を掲載しています。",
  alternates: { canonical: "/guide/gas-overcharge/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンのガスを入れすぎるとどうなりますか？",
    a: "ゼネラル（旧富士通ゼネラル）の室外機の据付説明書（英語版）には「Adding more refrigerant than the specified amount will cause a malfunction.（規定量を超えて冷媒を追加すると不具合の原因になります）」と記載されています（2026年11月20日確認）。一方、冷えにくくなる・圧縮機に負担がかかるといった具体的な症状を示した国内メーカーの公式資料は、当サイトでは確認できていません。",
  },
  {
    q: "エアコンのガスの「規定量」はどのように決まりますか？",
    a: "室外機には工場出荷時に一定の配管長に見合う冷媒が封入されており、配管がその長さを超える場合にだけ追加充填を行うのが各社の据付説明書の考え方です。たとえば、日立（RAS-XJ2227S）は配管長さ最大20mまでチャージレス、アクア（AQA-AX・AQG-AXシリーズ）は15m以下がチャージレス、シャープの工事説明書（R410A機種）は10mを超える場合に1mあたり20gの補充が必要としています（2026年11月20日確認）。値は機種ごとに異なるため、お使いの機種の説明書と室外機の銘板で確認する必要があります。",
  },
  {
    q: "ガスが減っている場合、足りない分だけ足せばよいのですか？",
    a: "三菱電機の据付工事説明書は、ガス漏れが止まらない場合について「漏れ箇所修理後サービスポートより本体ガスをすべて回収し、ガスボンベより規定量を充てんしてください」と案内しています（2026年11月20日確認）。漏れの修理と、規定量での充填をあわせて専門業者に依頼することをおすすめします。漏れの症状は「ガス漏れの症状」のページに掲載しています。",
  },
  {
    q: "R410AのエアコンにR32を補充するなど、別の冷媒を入れてもよいですか？",
    a: "入れてはいけません。アクア・日立・ゼネラルの据付説明書には「指定冷媒（R32）以外は使用（冷媒補充・入れ替え）しない」と記載されており、アクアと日立はその理由を「機器の故障や破裂、けがなどの原因になります」と説明しています。シャープのR410A機種の工事説明書にも「指定冷媒(R410A)以外は使用(冷媒補充・入替え)しない」と記載されています（2026年11月20日確認）。",
  },
  {
    q: "家庭用エアコンの冷媒の扱いに関係する法律はありますか？",
    a: "環境省のフロン排出抑制法に関するQ&Aでは、同法の点検・回収などの義務の対象は業務用の機器（第一種特定製品）であり、「家庭用のエアコン、冷蔵庫及び衣類乾燥機（中略）は本法に基づく回収その他の義務はありません」「家電リサイクル法（中略）でフロン類の回収が義務付けられています」と説明されています（2026年11月20日確認）。また、各社の据付説明書には「移設・修理・廃棄などにあたってはフロン類の回収が必要です」と記載されています。",
  },
];

const chargeRows = [
  {
    maker: "日立",
    model: "RAS-XJ2227S（白くまくん）",
    refrigerant: "R32",
    rule: "配管長さ最大20m（チャージレス）／高低差10m以内",
  },
  {
    maker: "アクア",
    model: "AQA-AX・AQG-AXシリーズ（2026年）",
    refrigerant: "R32",
    rule: "配管長さ15m以下（チャージレス）／高低差10m以下",
  },
  {
    maker: "シャープ",
    model: "ルームエアコン工事説明書（R410A機種）",
    refrigerant: "R410A",
    rule: "最大配管長さ15m。10mを超える場合は20g/mの冷媒補充が必要。充填は液相側から",
  },
  {
    maker: "三菱電機",
    model: "MSZ-JXV／MUZ-JXVシリーズ",
    refrigerant: "R410A",
    rule: "延長配管長10m以下は追加充てん不要。10mを超える場合は説明書の計算式で追加冷媒質量を算出。電子はかりでボンベの液相から徐々に充てん",
  },
  {
    maker: "ゼネラル（海外向け）",
    model: "AOYG36KBTA5ほか（英語版）",
    refrigerant: "R32",
    rule: "18・24形は配管30m、30・36形は40mまでの冷媒を工場で封入。超える分は20g/m。電子はかりで重量を量り、液相側から充填",
  },
];

export default function GasOverchargePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/gas-overcharge/" },
          { name: "エアコンのガス入れすぎ（過充填）", href: "/guide/gas-overcharge/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">冷媒ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのガス入れすぎ（過充填）
            <br className="hidden md:block" />
            メーカー5社の据付説明書で確認した規定量の決まり方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの冷媒ガスは、<strong className="font-semibold text-slate-900">多く入れるほどよく冷えるものではなく、機種と配管長で決まる「規定量」を充填するもの</strong>です。
            ゼネラルの据付説明書には、規定量を超える充填は不具合の原因になると明記されています。
            本記事では、当サイトが{UPDATED}にメーカー5社の据付説明書を確認した結果をもとに、規定量の決まり方と正しい補充の進め方をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">ガス入れすぎに関するメーカー資料の記載（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>規定量を超える充填：<strong>「不具合（malfunction）の原因になる」</strong>（ゼネラル・英語版据付説明書）</li>
              <li>規定量の決まり方：<strong>工場封入量＋配管長に応じた追加量</strong>。チャージレスの配管長は機種により10m〜20m（国内4社の説明書）</li>
              <li>漏れがあった場合：<strong>漏れ箇所を修理し、本体ガスをすべて回収してから規定量を充てん</strong>（三菱電機）</li>
              <li>具体的な症状（冷えにくい等）：国内メーカーの公式資料では<strong>確認できていません</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="overcharge" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ガスを入れすぎた場合についてのメーカーの記載</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              当サイトが確認した資料のうち、規定量を超える充填の影響を直接記載していたのは、ゼネラル（旧富士通ゼネラル）の海外向け室外機の据付説明書（英語版）です。冷媒の追加充填の注意事項として、次のように書かれています。
            </p>
            <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
              When charging the refrigerant R32, always use an electronic scales for refrigerant charging (to measure the refrigerant by weight). Adding more refrigerant than the specified amount will cause a malfunction.
            </blockquote>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※当サイト訳：冷媒R32を充填する際は、必ず冷媒充填用の電子はかりを使用し、重量で量ってください。規定量を超えて冷媒を追加すると、不具合の原因になります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              国内メーカー（日立・アクア・シャープ・三菱電機・ゼネラル）の家庭用エアコンの据付説明書では、入れすぎた場合の影響そのものは記載されていませんでした。その代わりに、充填する量を配管長ごとに数値で指定し、重量で量って充填する手順を定めています。
              なお、「入れすぎると冷えなくなる」「圧縮機に負担がかかる」といった具体的な症状を示した国内メーカーの公式資料は、当サイトでは確認できていません。症状から過充填かどうかを判断することはできないため、点検は専門業者にご依頼ください。
            </p>
          </section>

          <section id="amount" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">規定量は機種と配管長で決まります：5社の追加充填の条件</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              室外機には、工場出荷時に一定の長さの配管に見合う冷媒が封入されています。配管がその長さを超える場合にだけ、超えた分の冷媒を追加します。各社の据付説明書の記載を、同じ項目でそろえました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対象機種</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">冷媒</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">追加充填が不要な範囲・追加量</th>
                  </tr>
                </thead>
                <tbody>
                  {chargeRows.map((r) => (
                    <tr key={r.maker}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.maker}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top text-xs">{r.model}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top">{r.refrigerant}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。各社の公式サイトで公開されている据付説明書（工事説明書）の記載です。値は記載の機種のもので、他の機種には当てはまりません。ゼネラルは海外向けの英語版です。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              表の国内4社の機種では、配管長が10〜20m以内（機種により異なります）であれば追加充填は不要です。追加が必要な場合も、シャープ・ゼネラルの記載では1mあたり20gで、重量で量って充填します。適正な冷媒の量は、機種と実際の配管長がわかって初めて決まります。
            </p>
          </section>

          <section id="refill" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ガスが減っているときの正しい補充の進め方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              冷媒が減っている場合に、どれだけ不足しているかを正確に知る方法は据付説明書には示されていません。三菱電機の据付工事説明書は、ガス漏れが止まらない場合の対応を次のように案内しています。
            </p>
            <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
              増締めを行っても止まらない場合は、漏れ箇所修理後サービスポートより本体ガスをすべて回収し、ガスボンベより規定量を充てんしてください。
            </blockquote>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              また、ゼネラルの説明書には「After vacuuming the system, add refrigerant.（真空引きの後に冷媒を追加する）」「Do not reuse recovered refrigerant.（回収した冷媒を再使用しない）」とあります。
              三菱電機は冷媒充てん用電子はかりの使用を指定し、「液冷媒を一気に充てんすると圧縮機が故障するおそれがありますので、徐々に充てんしてください」と注意しています。
            </p>
            <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
              <p className="font-bold text-sky-900 mb-2">メーカーの説明書にもとづく補充の流れ</p>
              <ol className="text-sm leading-7 text-slate-700 list-decimal pl-5 space-y-1">
                <li>漏れ箇所を特定して修理する</li>
                <li>機器内に残っている冷媒を回収する</li>
                <li>真空引きを行う</li>
                <li>機種と配管長から決まる規定量を、電子はかりで量りながら液相側から充填する</li>
              </ol>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              ご依頼の際は、「漏れの修理を含むか」に加えて「規定量を重量で充填するか」も業者にご確認いただくことをおすすめします。
              漏れの症状は<Link href="/symptom/gas-leak/" className="text-sky-700 underline">ガス漏れの症状</Link>に、補充の費用は<Link href="/cost/gas-refill/" className="text-sky-700 underline">エアコンのガス補充費用</Link>に掲載しています。
            </p>
          </section>

          <section id="refrigerant" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">指定冷媒以外を補充しないでください</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              量だけでなく、冷媒の種類も機種ごとに決まっています。各社の据付説明書には、次の禁止事項が記載されています。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>指定冷媒以外の補充・入れ替えの禁止</strong>：アクア・日立・ゼネラルは「指定冷媒（R32）以外は使用（冷媒補充・入れ替え）しない」、シャープ（R410A機種）は「指定冷媒(R410A)以外は使用(冷媒補充・入替え)しない」と記載しています。アクア・日立は理由を「機器の故障や破裂、けがなどの原因になります」と説明しています</li>
              <li><strong>空気などの混入の禁止</strong>：アクアは「空気などが混入すると、冷凍サイクル内が異常高圧になり、破裂・けがなどの原因になります」としています</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              お使いのエアコンの冷媒の種類は、据付説明書や取扱説明書に記載されています。市販のガス缶でのご自身での補充はお控えいただき、専門業者またはメーカーにご依頼ください。
            </p>
          </section>

          <section id="law" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">家庭用エアコンの冷媒と法律の関係</h2>
            <p className="text-sm leading-7 text-slate-700">
              環境省のフロン排出抑制法に関するQ&Aでは、同法で点検やフロン類の回収などが義務となるのは業務用のエアコン・冷凍冷蔵機器（第一種特定製品）であり、「家庭用のエアコン、冷蔵庫及び衣類乾燥機（中略）は本法に基づく回収その他の義務はありません」と説明されています。家庭用エアコンのフロン類の回収は、家電リサイクル法で義務付けられています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              また、三菱電機・シャープ・日立・ゼネラルの家庭用エアコンの据付説明書には、「移設・修理・廃棄などにあたってはフロン類の回収が必要です」（表記は各社でわずかに異なります）と記載されています。冷媒を扱う作業は、専門業者にご依頼いただくのが確実です。
            </p>
          </section>

          <section id="consult" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ガスの入れすぎが心配な場合の相談先</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>補充後から冷えが悪い・異音がする</strong>：補充を行った業者に、充填した量と機種の規定量を確認してください。冷えない原因は冷媒以外の場合もあります（<Link href="/symptom/not-cooling/" className="text-sky-700 underline">冷えない症状の切り分け</Link>）</li>
              <li><strong>メーカー保証の期間内</strong>：保証書の内容を確認したうえで、購入店またはメーカーにご相談ください（<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証の確認方法</Link>）</li>
              <li><strong>依頼先を選びたい</strong>：メーカー修理・家電量販店・修理専門業者の違いは<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理の依頼先の選び方</Link>に掲載しています</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              三菱電機は、漏れがある場合の対応として、漏れ箇所の修理後に本体ガスをすべて回収して規定量を充てんする手順を案内しています。修理全体の費用の目安は<Link href="/guide/repair-cost/" className="text-sky-700 underline">エアコン修理費用の目安</Link>をご覧ください。
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
              <li>ゼネラル（旧富士通ゼネラル）AIR CONDITIONER OUTDOOR UNIT INSTALLATION MANUAL（PART No. 9319205465-06）https://www.fujitsu-general.com/datafiles/W9319205465-0601_IM_En_AOYG36KBTA5.pdf</li>
              <li>三菱電機 三菱ルームエアコン 据付工事説明書（MSZ-JXV／MUZ-JXVシリーズ・JG79A863H01）https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/RAC_IM/jg79a863h01.pdf</li>
              <li>日立 日立ルームエアコン据付説明書（RAS-XJ2227S）https://kadenfan.hitachi.co.jp/support/raj/item/docs/ras_xj2227s_a_sue.pdf</li>
              <li>アクア AQA-AX・AQG-AXシリーズ 据付説明書（2026年）https://aqua-has.com/wp-content/uploads/2026/03/2026-ax_series_setmanual.pdf</li>
              <li>シャープ ルームエアコン 工事説明書（R410A機種）https://jp.sharp/support/air_con/doc/ayc_vx_setting.pdf</li>
              <li>ゼネラル ルームエアコン 据付説明書（9332947182-01）https://www.fujitsu-general.com/jp/support/downloads/data/aircon/installation/inst-9332947182-01.pdf</li>
              <li>環境省 フロン排出抑制法 よくある質問 https://www.env.go.jp/earth/furon/faq/index.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/gas-refill/", label: "エアコンのガス補充費用" },
                { href: "/symptom/gas-leak/", label: "エアコンのガス漏れの症状" },
                { href: "/symptom/not-cooling/", label: "エアコンが冷えない原因" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/guide/warranty/", label: "エアコンの保証の確認方法" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の目安" },
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
