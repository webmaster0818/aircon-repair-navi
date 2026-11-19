import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理の詐欺・高額請求の手口と対策｜国民生活センターの相談件数（4年で約2.8倍）と依頼前の確認点【2026年11月確認】",
  description:
    "エアコン修理の高額請求トラブルを国民生活センターの公表資料（2026年6月3日）で確認しました。相談は2021年度451件から2025年度1,251件に増加しています。広告の格安料金で呼んだ場合のクーリング・オフの考え方、依頼前と作業後の確認点、相談先188を掲載しています。",
  alternates: { canonical: "/guide/repair-scam/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコン修理の高額請求のトラブルは増えていますか？",
    a: "増えています。国民生活センターの公表資料（2026年6月3日）によると、PIO-NETに寄せられたエアコンの修理に関する相談件数は、2021年度451件、2022年度593件、2023年度871件、2024年度975件、2025年度1,251件です（消費生活センター等からの経由相談は含まない・2026年3月31日までの登録分）。2025年度は2021年度の約2.8倍で、同資料は「2倍以上」と記載しています。",
  },
  {
    q: "自分でネット広告の業者を呼んだ場合でも、クーリング・オフはできますか？",
    a: "できる場合があります。消費者庁の「訪問販売等の適用除外に関するQ＆A」は、チラシの表示額と実際の請求額に相当な開きがあり、消費者が数万円程度の代金を要することを認識できなかった場合は、適用除外の対象とはならないと考えられると説明しています。国民生活センターも、見積もりのために来訪した業者に勧誘を受けて契約した場合や、広告の表示額と実際の請求額が大きく異なる場合は、訪問販売によるクーリング・オフ等が適用できる可能性があるとしています。個別の判断は消費生活センター（188）にご相談ください。",
  },
  {
    q: "作業が終わった後、納得できない金額を請求されたらどうすればよいですか？",
    a: "国民生活センターは「後日納得した金額で支払う意思があることを示しつつ、その場での支払いは断りましょう」と案内しています。あわせて、修理業者名・担当者名・連絡先を確認し、作業報告書や領収書の発行を依頼して記録を残すよう勧めています。",
  },
  {
    q: "ガスを入れたら直ると言われましたが、本当に直ったかどうかはどう確かめますか？",
    a: "国民生活センターの資料には「冷房の場合、冷媒ガスを充てんして稼働させた後、５～10分経過すれば冷たい風が出てくることが確認できます」とあり、修理後は業者に試運転に立ち会ってもらい、直ったことを一緒に確認してから帰ってもらうよう勧めています。",
  },
  {
    q: "どこに相談すればよいですか？",
    a: "消費者ホットライン「188」に電話すると、お住まいの地域の消費生活センター等を案内してもらえます。消費者庁によると相談は無料で、通話料金は相談窓口につながった時点から発生します。",
  },
];

const countRows = [
  { year: "2021年度", count: "451件" },
  { year: "2022年度", count: "593件" },
  { year: "2023年度", count: "871件" },
  { year: "2024年度", count: "975件" },
  { year: "2025年度", count: "1,251件" },
];

const caseRows = [
  {
    ad: "「最安約4,000円～」",
    what: "直らないまま、新しいエアコンを25万円で購入すれば約4万円の作業費用を無料にすると言われた",
    when: "2025年8月受付",
  },
  {
    ad: "「見積もり無料」",
    what: "作業後に約5万円を現金で支払ったが、請求書にも領収書にも会社名がなく連絡が取れなくなった",
    when: "2025年6月受付",
  },
  {
    ad: "「即日対応。地域最安値。期間限定1,500円から」",
    what: "見積もりをしないまま作業を始め、「代金は約７万円です」と言われた",
    when: "2025年8月受付",
  },
];

export default function RepairScamPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/repair-scam/" },
          { name: "エアコン修理の詐欺・高額請求の対策", href: "/guide/repair-scam/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">依頼前の確認ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理の詐欺・高額請求の手口と対策
            <br className="hidden md:block" />
            国民生活センターの相談事例と依頼前の確認点
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコン修理のトラブルで多いのは、<strong className="font-semibold text-slate-900">広告の格安料金を見て呼んだ業者に、見積もりのないまま作業され、高額な代金を請求される</strong>型です。
            国民生活センターに寄せられた相談は、2025年度に1,251件と、2021年度の約2.8倍に増えています。
            本記事では、当サイトが{UPDATED}に国民生活センター・消費者庁・自治体の公表資料を確認した結果をもとに、手口と対策、相談先をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">公的機関の資料にもとづく要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>依頼前：<strong>メーカー・型番・症状を伝えて、まず見積もりを出してもらう</strong>（国民生活センター）</li>
              <li>作業後：<strong>試運転に立ち会ってもらい、直ったことを一緒に確認する</strong>。業者名・連絡先・領収書を残す</li>
              <li>納得できない請求：<strong>その場での支払いは断り、後日納得した金額で支払う意思を示す</strong></li>
              <li>自分で呼んだ場合も、広告額と請求額に大きな開きがあれば<strong>クーリング・オフ等が適用できる可能性</strong>があります</li>
              <li>相談先：<strong>消費者ホットライン188</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="count" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコン修理の相談件数は4年で約2.8倍</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              国民生活センターは2026年6月3日に「エアコン修理のトラブルに注意！」を公表し、PIO-NET（全国消費生活情報ネットワークシステム）に寄せられた相談件数を年度別に示しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[360px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">年度</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアコンの修理に関する相談件数</th>
                  </tr>
                </thead>
                <tbody>
                  {countRows.map((r) => (
                    <tr key={r.year}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">{r.year}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）より。消費生活センター等からの経由相談は含まれていません。2026年3月31日までの登録分です。増加率（約2.8倍）は当サイトが1,251件÷451件で計算しました。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              同資料は、寄せられた相談の例として「インターネットで検索した即日対応の業者に修理を依頼し、高額な料金を支払ったが直っていなかった」「修理してもエアコンが直らず、再修理を依頼したいが業者と連絡が取れない」を挙げています。
            </p>
          </section>

          <section id="cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある手口：広告の格安料金と実際の請求の差</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              国民生活センターの報告書に掲載された相談事例のうち、広告の表示と請求の内容がわかる3件を、同じ項目でそろえました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">広告の表示</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">相談の内容</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">受付</th>
                  </tr>
                </thead>
                <tbody>
                  {caseRows.map((r) => (
                    <tr key={r.ad}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top">{r.ad}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.what}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top text-xs">{r.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※国民生活センター「エアコン修理のトラブルに注意！」報告書本文（2026年6月3日公表）の事例1・3・4を当サイトで要約しました。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              同資料は、「出張費、見積もり費無料」という広告を見て見積もりのために来てもらったところ、修理を依頼していないのに点検代を請求されたという相談があることも紹介しています。
              また、故障原因を調べたり修理内容を説明したりせずに、いきなり「冷媒ガスが減っているので充てんする」などと言って作業を始める業者にも注意が必要としています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              クリーニングでも同様の相談があります。国民生活センターの見守り新鮮情報（第450号・2023年5月16日）は、「お試し価格の3千円」でエアコンや換気扇のクリーニングを勧誘され、約30万円を請求された80歳代の事例を紹介し、作業当日に追加の契約を勧誘されてもその場で決めないよう呼びかけています。
            </p>
          </section>

          <section id="before" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼する前の確認点</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>見積もりを先に出してもらう</strong>：国民生活センターは「修理を依頼する前に、エアコンのメーカー、型番、現在の症状を伝えて、まずは見積もりを出してもらい修理費用を確認しましょう」と案内しています</li>
              <li><strong>まずメーカー・販売店に確認する</strong>：東京都消費生活総合センターは「まずはメーカーや販売店に、型番や年式、故障の状況を伝えて確認しましょう」としています。メーカー各社の出張料・診断料は<Link href="/cost/maker-repair-fee/" className="text-sky-700 underline">メーカー6社の出張費・診断料の比較</Link>に掲載しています</li>
              <li><strong>直らなかった場合の対応も確認する</strong>：東京都は「作業内容や予想される代金、直らなかった場合の対応等を事前に確認し、納得した上で修理してもらいましょう」としています</li>
              <li><strong>複数社から見積もりを取る</strong>：国民生活センター（ハウスクリーニングのトラブル・2025年2月28日）は「必ず複数社から見積もりを取り、事業者の選定は慎重に行いましょう」と案内しています</li>
              <li><strong>シーズン前に試運転をする</strong>：故障に気づくのが早いほど、業者を比べる時間が取れます。国民生活センターも本格的に気温が高くなる前の試運転を勧めています</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              当サイトでは、修理業者ごとの出張費・見積もり費用の公式掲載額を<Link href="/cost/price-index/" className="text-sky-700 underline">エアコン修理 料金インデックス</Link>にまとめています。依頼先の種類ごとの違いは<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理の依頼先の選び方</Link>をご覧ください。
            </p>
          </section>

          <section id="after" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">作業の後・支払いの前の確認点</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>直ったことを一緒に確認する</strong>：冷房の場合、冷媒ガスを充てんして稼働させた後、5〜10分たてば冷たい風が出ることを確認できます（国民生活センター）</li>
              <li><strong>業者の情報と記録を残す</strong>：修理業者名・担当者名・連絡先を確認し、作業報告書や領収書の発行を依頼します</li>
              <li><strong>納得できなければその場で払わない</strong>：後日納得した金額で支払う意思があることを示しつつ、その場での支払いは断るよう、国民生活センターは案内しています</li>
            </ol>
          </section>

          <section id="cooling-off" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">自分で呼んだ業者でもクーリング・オフできる場合</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              訪問販売は、法律で決められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録によりクーリング・オフができます（消費者庁 特定商取引法ガイド）。役務がすでに提供されている場合でも、その対価を支払う必要はないとされています。
            </p>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              一方、消費者が自分から業者の来訪を求めた場合は、訪問販売の規定が適用されないことがあります。ただし消費者庁の「訪問販売等の適用除外に関するQ＆A」は、チラシの格安料金を見て修理を頼んだ事例について、次のように説明しています。
            </p>
            <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
              実際の修理に数万円程度の代金を要することを概括的に認識しておらず、認識することもできなかったのであれば、「請求した者」とはいえず、同号による適用除外の対象とはならないと考えられます。
            </blockquote>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              国民生活センターも、見積もりのために来訪した修理業者に勧誘を受けて修理を契約した場合や、サイト等の広告の表示額と実際の請求額が大きく異なっていた場合は、特定商取引法の訪問販売によるクーリング・オフ等が適用できる可能性があるとしています。
              なお、現金取引で代金の総額が3,000円未満の場合は、クーリング・オフの規定は適用されません。適用できるかどうかは契約の経緯によって変わるため、早めに消費生活センターへご相談ください。
            </p>
          </section>

          <section id="consult" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">相談先：消費者ホットライン188</h2>
            <p className="text-sm leading-7 text-slate-700">
              消費者ホットライン「188（いやや！）」は、お住まいの地域の消費生活センター等を案内する全国共通の電話番号です。消費者庁によると、相談は無料で、通話料金は相談窓口につながった時点から発生します。土日祝日も、国民生活センターが相談を補完するなどして、施設点検日や年末年始を除き原則毎日利用できます。一部のIP電話・プリペイド式携帯電話などからはつながらないため、その場合はお住まいの地域の相談窓口に直接お電話ください。
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
              <li>国民生活センター「エアコン修理のトラブルに注意！－ネット広告で「安い」「即日対応」の業者に修理依頼したけど直ってない！－」（2026年6月3日）https://www.kokusen.go.jp/news/data/n-20260603_1.html ／報告書本文 https://www.kokusen.go.jp/pdf/n-20260603_1.pdf</li>
              <li>国民生活センター 見守り新鮮情報 第450号「低価格で誘う換気扇やエアコンクリーニングの電話勧誘」（2023年5月16日）https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen450.html</li>
              <li>国民生活センター「ハウスクリーニングのトラブルにご注意」（2025年2月28日）https://www.kokusen.go.jp/news/data/n-20250228_1.html</li>
              <li>東京都消費生活総合センター「夏はエアコン修理のトラブルが増加します」（2023年5月23日）https://www.shouhiseikatu.metro.tokyo.lg.jp/sodan/kinkyu/20230523.html</li>
              <li>消費者庁 特定商取引法ガイド「訪問販売」https://www.no-trouble.caa.go.jp/what/doortodoorsales/</li>
              <li>消費者庁 特定商取引法ガイド「訪問販売等の適用除外に関するQ＆A」https://www.no-trouble.caa.go.jp/qa/exclusion.html</li>
              <li>消費者庁「消費者ホットライン」https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/cost/price-index/", label: "エアコン修理 料金インデックス" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料の比較" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の目安" },
                { href: "/guide/gas-overcharge/", label: "冷媒ガスの入れすぎ（過充填）" },
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
