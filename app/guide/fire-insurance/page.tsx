import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの故障は火災保険で直せる？落雷・台風・電気的事故の補償と経年劣化が対象外の理由【損保4社・2026年11月確認】",
  description:
    "エアコンの故障に火災保険が使えるかを損保4社と日本損害保険協会の公式情報で確認しました。落雷は補償の対象、台風は支払いの可能性あり、内部の故障は電気的・機械的事故特約が必要で、経年劣化は対象外です。特約の築年数の条件、請求期限3年、勧誘業者への注意を掲載しています。",
  alternates: { canonical: "/guide/fire-insurance/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "落雷でエアコンが壊れた場合、火災保険で補償されますか？",
    a: "東京海上日動のよくあるご質問では、「自宅に雷が落ちエアコンが故障した場合、補償されますか？」に対し「火災リスクで補償の対象となります。」と回答しています（2026年10月1日改定を反映・2026年11月20日確認）。補償の範囲や免責金額はご契約内容によって異なるため、保険会社または代理店にご確認ください。",
  },
  {
    q: "古くなって壊れたエアコンは火災保険の対象になりますか？",
    a: "対象外です。日本損害保険協会は「自然の消耗もしくは劣化または性質によるさびなどによって生じた損害はお支払いの対象とはなりません」と説明しています。国民生活センターも、経年劣化による損害は対象外であり、うその理由で申請するよう勧められても決して応じないよう呼びかけています。",
  },
  {
    q: "落雷や台風が原因ではない故障（内部のショートなど）は補償されますか？",
    a: "基本の補償では対象外で、「電気的・機械的事故特約」（名称は各社で異なります）を付けている場合に補償されることがあります。損保ジャパンのパンフレットには、エアコン室外機の内部の電気部品がショートして使用不能になった事例が掲載されています。ただし特約には建物の築年数の条件があり、自然の消耗・劣化による損害やメーカー保証の対象となる損害は対象外です。",
  },
  {
    q: "賃貸住宅で自分で買ったエアコンは、建物と家財のどちらで補償されますか？",
    a: "東京海上日動は、賃貸住宅の入居者がエアコンを所有している場合について「エアコンや照明器具は『家財』の一部としてお申込みください。」と回答しています。持ち家で建物に設置されたエアコンは、建物の付属設備として扱われるのが一般的です（日本損害保険協会の重要事項説明書の例）。",
  },
  {
    q: "保険金の請求に期限はありますか？",
    a: "保険法第95条により、保険給付を請求する権利は、行使することができる時から3年間行使しないときは時効によって消滅します。東京海上日動も「事故が発生してから3年以内」と案内しています。",
  },
];

const caseRows = [
  {
    cause: "落雷",
    result: "補償の対象（火災リスク）",
    source: "東京海上日動 FAQ",
  },
  {
    cause: "台風・暴風雨",
    result: "台風によって壊れた場合は支払いの可能性あり。業者に原因の確認を依頼",
    source: "東京海上日動 FAQ",
  },
  {
    cause: "内部のショート・焼付けなどの故障",
    result: "基本の補償では対象外。電気的・機械的事故特約で補償される場合あり",
    source: "損保ジャパン・東京海上日動・三井住友海上・あいおいニッセイ同和損保",
  },
  {
    cause: "経年劣化・自然の消耗",
    result: "対象外（特約を付けていても対象外）",
    source: "日本損害保険協会・各社",
  },
  {
    cause: "メーカー保証の対象となる故障",
    result: "特約の対象外（メーカー・販売店が責任を負う損害）",
    source: "損保ジャパン・三井住友海上",
  },
];

const riderRows = [
  {
    company: "損保ジャパン",
    name: "建物電気的・機械的事故特約",
    condition: "保険の対象に建物が含まれていること",
    other: "対象設備の図にエアコン・エアコンの室外機を記載",
  },
  {
    company: "東京海上日動",
    name: "建物付属機械設備等電気的・機械的事故補償特約",
    condition: "建物を補償し破損等リスクを補償する契約。始期日時点の築年数10年未満（2026年9月30日以前始期契約から継続の場合を除く）",
    other: "免責金額は破損等リスクの免責金額と同額または10万円のいずれか高い額",
  },
  {
    company: "三井住友海上",
    name: "建物電気的・機械的事故特約（専用・併用住宅用）",
    condition: "築年数10年1か月以上の契約には新たにセットできない。保険期間の中途ではセットできない",
    other: "対象設備の例にエアコンを記載（FAQ）",
  },
  {
    company: "あいおいニッセイ同和損保",
    name: "建物電気的・機械的事故特約（専用・併用住宅用）",
    condition: "築年数が10年超の建物には新たにセットできない",
    other: "建物の免責金額「なし」「1万円」「3万円」を選択した場合は免責金額5万円を適用",
  },
];

export default function FireInsurancePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/fire-insurance/" },
          { name: "エアコンの故障と火災保険", href: "/guide/fire-insurance/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">費用の備えガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの故障は火災保険で直せる？
            <br className="hidden md:block" />
            損保4社の公式情報で確認した補償の範囲
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの故障に火災保険が使えるかどうかは、<strong className="font-semibold text-slate-900">故障の原因で決まります</strong>。
            落雷や台風など外からの原因で壊れた場合は補償される可能性があり、内部の電気的・機械的な故障は特約が必要で、経年劣化はどの場合も対象外です。
            本記事では、当サイトが{UPDATED}に損害保険会社4社と日本損害保険協会の公式情報を確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">エアコンの故障と火災保険の要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>落雷：<strong>補償の対象</strong>（東京海上日動）</li>
              <li>台風：<strong>壊れた場合は支払いの可能性あり</strong>（東京海上日動）</li>
              <li>内部のショートなど：<strong>電気的・機械的事故特約が必要</strong>。多くは築10年未満の建物が条件</li>
              <li>経年劣化：<strong>対象外</strong>（日本損害保険協会）</li>
              <li>請求期限：<strong>3年</strong>（保険法第95条）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="cause" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障の原因別：火災保険の補償の考え方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式情報から、エアコンに関する記載を原因別にそろえました。実際に補償されるかどうかは、ご契約のプランと特約、免責金額によって異なります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">故障の原因</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式情報の記載</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出典</th>
                  </tr>
                </thead>
                <tbody>
                  {caseRows.map((r) => (
                    <tr key={r.cause}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top">{r.cause}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.result}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。各社の公式サイト・パンフレット・よくあるご質問の記載です。東京海上日動のFAQは2026年10月1日改定を反映した内容です。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              日本損害保険協会の重要事項説明書の例では、「破損・汚損」の補償があっても「電気的・機械的事故(故障)によって生じた損害」は支払われないとされています。外から力が加わった損害と、機器の内部で起きた故障は、別の扱いになる点にご注意ください。
            </p>
          </section>

          <section id="rider" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">内部の故障を補償する「電気的・機械的事故特約」4社の条件</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ショート・過電流などの電気的事故や、機械の内的要因による焼付けなどで建物の設備に損害が出た場合を補償する特約です。損保ジャパンのパンフレットには「エアコン室外機の内部の電気部品がショートし、焼付けが生じたことにより、室外機が使用不能になった」事例が掲載されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">保険会社</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">特約の名称</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">付けられる条件</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">その他</th>
                  </tr>
                </thead>
                <tbody>
                  {riderRows.map((r) => (
                    <tr key={r.company}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top whitespace-nowrap">{r.company}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.condition}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。損保ジャパンは「THE すまいの保険」パンフレット（2025年9月版）、東京海上日動は「トータルアシスト住まいの保険」の特約のページ、三井住友海上は「GK すまいの保険」の特約のページとFAQ、あいおいニッセイ同和損保は「タフ・すまいの保険」のページによります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              4社とも、特約を新たに付けられるのはおおむね築10年未満の建物です。また、損保ジャパン・三井住友海上は、自然の消耗・劣化による損害や、メーカー・販売店が保証書や延長保証にもとづいて責任を負う損害を対象外としています。
              メーカー保証の期間内であれば、先に保証での修理をご確認ください（<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>）。
            </p>
          </section>

          <section id="owner" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコンは「建物」と「家財」のどちらで補償されるか</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>持ち家で建物に設置されたエアコン</strong>：日本損害保険協会の重要事項説明書の例では、建物には「建物設備(建物に定着している電気、ガス、暖房、冷房設備その他の付属設備)」が含まれるとされています</li>
              <li><strong>賃貸住宅で入居者が所有するエアコン</strong>：東京海上日動は「エアコンや照明器具は『家財』の一部としてお申込みください。」と回答しています</li>
              <li><strong>賃貸住宅に備え付けのエアコン</strong>：建物の所有者（大家）の設備です。修理費の負担区分は<Link href="/guide/rental-aircon-repair/" className="text-sky-700 underline">賃貸のエアコン修理費の負担区分</Link>をご覧ください</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              建物だけ、家財だけの契約では、もう一方に含まれるエアコンは補償されません。保険証券で、保険の対象に建物・家財のどちらが含まれているかをご確認ください。
            </p>
          </section>

          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">火災保険を使う場合の進め方</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>保険会社・代理店に事故の連絡をする</strong>：東京海上日動は台風後に電源がつかない場合について、事故の連絡とあわせて業者への原因の確認を案内しています</li>
              <li><strong>修理業者に故障の原因を確認してもらう</strong>：落雷・台風などの原因か、経年劣化かで補償の可否が変わります。点検の結果と見積書を保管してください</li>
              <li><strong>3年以内に請求する</strong>：保険法第95条により、請求権は行使できる時から3年で時効により消滅します</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              修理業者の出張費・点検費は業者ごとに異なります。<Link href="/cost/price-index/" className="text-sky-700 underline">エアコン修理 料金インデックス</Link>で各社の公式掲載額を比較できます。
            </p>
          </section>

          <section id="caution" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「保険が使える」と勧誘する業者に注意</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              日本損害保険協会は、「住宅修理などに関し、『保険が使える』と言って勧誘する業者とのトラブルが増加しています」として、住宅の修理を業者と契約する前に、契約している損害保険会社または代理店へ相談するよう呼びかけています。
              同協会は、保険金の請求は保険契約者自身で行うことができ、手数料はかからないとも案内しています。
            </p>
            <p className="text-sm leading-7 text-slate-700">
              国民生活センターも、経年劣化による損害は対象外であり、うその理由で申請するよう勧められても決して応じないよう注意を呼びかけています。困ったときは消費者ホットライン188にご相談ください。修理業者の高額請求の手口は<Link href="/guide/repair-scam/" className="text-sky-700 underline">エアコン修理の詐欺・高額請求の対策</Link>に掲載しています。
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
              <li>東京海上日動 よくあるご質問「自宅に雷が落ちエアコンが故障した場合、補償されますか？」https://faq.tokiomarine-nichido.co.jp/faq/show/6235?site_domain=default</li>
              <li>東京海上日動 よくあるご質問「賃貸住宅に入居していますが、エアコンや照明器具を所有している場合」https://faq.tokiomarine-nichido.co.jp/faq/show/6237?site_domain=default</li>
              <li>東京海上日動 よくあるご質問「台風の後、エアコンの電源がつかなくなりました」https://faq.tokiomarine-nichido.co.jp/faq/show/4883?site_domain=default</li>
              <li>東京海上日動 トータルアシスト住まいの保険 特約 https://www.tokiomarine-nichido.co.jp/service/live/total_assist/shohin/tokuyaku.html</li>
              <li>東京海上日動 火災保険の申請方法 https://www.tokiomarine-nichido.co.jp/world/guide/casestudy/shinsei.html</li>
              <li>損保ジャパン THE すまいの保険 パンフレット（2025年9月版）https://www.sompo-japan.co.jp/-/media/SJNK/files/kinsurance/habitation/sumai/sumai2509.pdf</li>
              <li>三井住友海上 GK すまいの保険 特約 https://www.ms-ins.com/personal/kasai/gk/compensation/option.html ／FAQ https://faq2.ms-ins.com/faq/show/1227?site_domain=default ・https://faq2.ms-ins.com/faq/show/1222?site_domain=default</li>
              <li>あいおいニッセイ同和損保 タフ・すまいの保険 その他の補償 https://www.aioinissaydowa.co.jp/personal/product/tough/house/other_comp.html</li>
              <li>日本損害保険協会 家庭用火災保険 重要事項のご説明（例）https://www.sonpo.or.jp/about/guideline/keiyaku_guideline/ctuevu0000005hpl-att/kasai2024.pdf</li>
              <li>日本損害保険協会「住宅の修理などに関するトラブルにご注意」https://www.sonpo.or.jp/news/caution/syuri.html</li>
              <li>日本損害保険協会「あなたの保険金が狙われています！」https://www.sonpo.or.jp/news/notice/2022/2208_03.html</li>
              <li>国民生活センター 見守り新鮮情報 第454号 https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen454.html</li>
              <li>保険法（平成二十年法律第五十六号）第95条 https://laws.e-gov.go.jp/law/420AC0000000056</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸のエアコン修理費の負担区分" },
                { href: "/guide/repair-scam/", label: "エアコン修理の詐欺・高額請求の対策" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の目安" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
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
