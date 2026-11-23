import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン取り付け業者がひどい場合の対処｜国民生活センターの紛争事例（室内機の脱落・施工不良）と依頼前の確認点【2026年11月確認】",
  description:
    "エアコン取り付け工事のトラブルを国民生活センターの紛争解決（ADR）の事例で確認しました。室内機の脱落は補修費約12万円の半額で、施工不良6点の事例は25万円で和解しています。メーカーが案内する依頼先、電気工事士法、引越時の追加料金、相談先を掲載しています。",
  alternates: { canonical: "/guide/installation-trouble/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "取り付け工事が原因でエアコンが落ちたり水漏れしたりした場合、業者に補償を求められますか？",
    a: "求めることはできますが、施工不良かどうかで争いになる場合があります。国民生活センターの紛争解決委員会の事例（2021年9月16日公表）では、取り付け後に室内機が壁から脱落し、業者は施工不良を否定しましたが、仲介委員が据え付けの問題点を指摘し、補修費用の半額である約6万円を業者が支払う内容で和解しました。話し合いで解決しない場合は、消費生活センター（188）にご相談ください。",
  },
  {
    q: "取り付け工事の不具合は、どのような点で見つかっていますか？",
    a: "国民生活センターの紛争解決委員会の事例（2023年6月28日公表）では、購入者がご自身で点検し、配管穴の下り勾配が大きすぎる、配管スリーブの割れ、配管の断熱材の亀裂、配管カバーの取り付け位置、パテ埋めの不足、室内機の据付板が木ネジのみで固定されていた、の6点を指摘しています。この事例は25万円の支払いで和解しました。",
  },
  {
    q: "エアコンの取り付けを自分で行ってもよいですか？",
    a: "メーカーは自分で行わないよう案内しています。三菱電機は「エアコンの据付は『お買上げの販売店』にご依頼ください」「お客様自身で据付工事をされ不備があると、水漏れや感電・火災の原因になります」、パナソニックは「お客様ご自身でエアコンに係る諸工事（取り外し・据え付け等）を行わないでください」としています。",
  },
  {
    q: "引越のときのエアコンの取り外し・取り付けで追加料金を請求されました。",
    a: "国民生活センターの「引越トラブルにご注意」（2026年2月4日）には、見積り時に説明がなかったエアコンの当日脱着費用や高所作業費として、約２万円の追加料を支払った事例が掲載されています。同資料は、エアコンの脱着などの附帯サービスは費用が引越料金に含まれると思っていたら別途請求されたトラブルがみられるとしています。見積りの段階で、脱着の費用と追加料金の条件をご確認ください。",
  },
  {
    q: "取り付け工事にはどのような資格が必要ですか？",
    a: "電気工事士法第3条第2項は、第一種電気工事士または第二種電気工事士の免状を受けている者でなければ、一般用電気工作物等に係る電気工事の作業（保安上支障がないと認められる作業で経済産業省令で定めるものを除く）に従事してはならないと定めています。コンセントの増設など電気工事を伴う場合は、作業者が電気工事士であるかを業者にご確認ください。",
  },
];

const caseRows = [
  {
    label: "室内機が壁から脱落",
    detail: "引越業者に取り付けを依頼（工事約2万円）。その後、室内機が壁から脱落し配管につり下がった。他社による補修は計約12万円",
    result: "業者は施工不良を否定。仲介委員が据え付けの問題点を指摘し、補修費用の半額の約6万円を業者が支払う内容で和解",
    published: "2021年9月16日公表",
  },
  {
    label: "ネット通販の設置工事の施工不良",
    detail: "新築戸建てにエアコン3台をネット通販で購入。工事で壁内の電線カバー管が破損し、のちに購入者の点検で配管穴の勾配・据付板の固定など6つの不具合が判明",
    result: "申請人の請求は約80万円（のちに約50万円）。25万円の支払いで和解",
    published: "2023年6月28日公表",
  },
];

export default function InstallationTroublePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/installation-trouble/" },
          { name: "エアコン取り付け工事のトラブル", href: "/guide/installation-trouble/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">依頼前の確認ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン取り付け業者がひどい場合の対処
            <br className="hidden md:block" />
            国民生活センターの紛争事例と依頼前の確認点
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            取り付け工事のトラブルは、<strong className="font-semibold text-slate-900">施工不良による室内機の脱落・水漏れと、事前の説明がない追加料金</strong>の2つに分かれます。
            施工不良は業者が否定して争いになることがあり、国民生活センターの紛争解決の手続で和解した事例もあります。
            本記事では、当サイトが{UPDATED}に国民生活センターの公表資料、メーカーの公式FAQ、電気工事士法を確認した結果をもとに、対処の方法と依頼前の確認点をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">公表資料にもとづく要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>室内機の脱落：業者は否定したが、<strong>補修費約12万円の半額（約6万円）で和解</strong>（国民生活センターADR）</li>
              <li>ネット通販の設置工事：<strong>6つの不具合を指摘し、25万円で和解</strong>（同）</li>
              <li>引越時の脱着：<strong>見積り時に説明のない当日費用・高所作業費を請求</strong>された事例あり</li>
              <li>工事の依頼先：メーカーは<strong>販売店または専門業者</strong>への依頼を案内</li>
              <li>電気工事：<strong>電気工事士の免状</strong>が必要な作業があります（電気工事士法第3条）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">国民生活センターの紛争解決（ADR）の事例</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              国民生活センターの紛争解決委員会が扱い、結果を公表したエアコンの取り付け工事の事例を2件、同じ項目でそろえました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事例</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">経緯</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">結果</th>
                  </tr>
                </thead>
                <tbody>
                  {caseRows.map((r) => (
                    <tr key={r.label}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top">
                        {r.label}
                        <span className="block text-xs font-normal text-slate-500 mt-1">{r.published}</span>
                      </td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.detail}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※国民生活センター「ADRの実施状況と結果概要について」（2021年9月16日公表の事案6、2023年6月28日公表の事案10）を当サイトで要約しました。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              室内機の脱落の事例では、石膏ボードの壁に据付板を取り付ける場合について、業界団体が、ねじ込み式アンカーは締めすぎると保持強度が極端に落ちる場合があるため使用せず、カサ式アンカーを使用するよう注意喚起していることが、仲介委員の判断の材料として記載されています。
              どちらの事例も、業者側は当初、申請人の請求をそのまま認めていませんでした。施工の状態を写真で残し、工事の内容がわかる書類を保管しておくことが、話し合いの材料になります。
            </p>
          </section>

          <section id="extra-fee" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">説明のない追加料金のトラブル</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              国民生活センターの「引越トラブルにご注意」（2026年2月4日）には、引越の見積り時にエアコンの脱着の当日費用や高所作業費の説明がなく、当日脱着は約１万円の追加料金がかかると後から伝えられ、転居先の高所作業費も含めた約２万円の追加料を支払った事例（2025年7月受付）が掲載されています。
            </p>
            <p className="text-sm leading-7 text-slate-700">
              同資料は、エアコンの脱着などの「附帯サービス」について、費用が引越料金に含まれると思っていたら別途料金を請求されたというトラブルがみられるとしています。
              家電量販店などの取り付け工事でも、標準工事に含まれる範囲（配管の長さ・設置場所など）と追加工事の料金は販売店ごとに異なります。見積りの段階で、標準工事の範囲と追加料金がかかる条件を書面でご確認ください。
            </p>
          </section>

          <section id="before" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼する前の確認点</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>標準工事の範囲と追加料金の条件</strong>：配管の長さ、室外機の設置場所、穴あけ、専用コンセントの有無で追加費用が出るかを確認します</li>
              <li><strong>電気工事の有無と作業者の資格</strong>：電気工事士法第3条第2項は、電気工事士の免状を受けている者でなければ一般用電気工作物等に係る電気工事の作業（省令で定める軽微な作業を除く）に従事してはならないと定めています</li>
              <li><strong>工事後の不具合への対応</strong>：施工が原因の不具合をどの期間・どの範囲で対応するかを確認します</li>
              <li><strong>業者の名称・連絡先</strong>：販売店の提携先や下請けが作業する場合もあります（上の通販の事例）。工事を行う会社と連絡先を確認しておきます</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              ご自身での取り付けはお控えください。三菱電機は「エアコンの据付は『お買上げの販売店』にご依頼ください」「お客様自身で据付工事をされ不備があると、水漏れや感電・火災の原因になります」と案内しています。
              パナソニックも、エアコンには専用の電気回路とアース工事等が必要であり、ご自身で取り外し・据え付け等の工事を行わないよう案内しています。
            </p>
          </section>

          <section id="after" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">工事のあと不具合が出た場合の進め方</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>状態を記録する</strong>：水漏れ・傾き・異音などの状態を写真や動画で残します</li>
              <li><strong>工事をした業者に連絡する</strong>：販売店経由で依頼した場合は販売店にも連絡します</li>
              <li><strong>話し合いで解決しない場合は相談する</strong>：消費者ホットライン188で地域の消費生活センターを案内してもらえます。上の2件は、国民生活センターの紛争解決委員会の手続で和解した事例です</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              取り付け後の水漏れの確認手順は<Link href="/guide/water-leak/" className="text-sky-700 underline">エアコンの水漏れの対処</Link>に、修理を別の業者に依頼する場合の選び方は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理の依頼先の選び方</Link>に掲載しています。修理業者の高額請求の手口は<Link href="/guide/repair-scam/" className="text-sky-700 underline">エアコン修理の詐欺・高額請求の対策</Link>をご覧ください。
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
              <li>国民生活センター「ADRの実施状況と結果概要について」（2021年9月16日公表）事案6 https://www.kokusen.go.jp/pdf/n-20210916_4.pdf</li>
              <li>国民生活センター「ADRの実施状況と結果概要について（令和5年度第1回）」（2023年6月28日公表）事案10 https://www.kokusen.go.jp/pdf/n-20230628_1.pdf</li>
              <li>国民生活センター「引越トラブルにご注意」（2026年2月4日）https://www.kokusen.go.jp/news/data/n-20260204_1.html ／本文 https://www.kokusen.go.jp/pdf/n-20260204_1.pdf</li>
              <li>三菱電機 よくあるご質問（ルームエアコンの据付）https://faq01.mitsubishielectric.co.jp/faq/show/3586?site_domain=default</li>
              <li>パナソニック エアコン サポート「安全に関するご注意」https://panasonic.jp/aircon/support.html</li>
              <li>電気工事士法（昭和三十五年法律第百三十九号）第3条 https://laws.e-gov.go.jp/law/335AC0000000139</li>
              <li>消費者庁「消費者ホットライン」https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/installation/", label: "エアコン取り付け費用の目安（量販店4社）" },
                { href: "/guide/online-purchase-installation/", label: "通販で買う場合の取り付け工事" },
                { href: "/guide/water-leak/", label: "エアコンの水漏れの対処" },
                { href: "/guide/repair-scam/", label: "エアコン修理の詐欺・高額請求の対策" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸のエアコン修理費の負担区分" },
                { href: "/ranking/", label: "エアコン修理業者ランキング" },
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
