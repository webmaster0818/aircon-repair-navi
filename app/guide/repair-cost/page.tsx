import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理の費用・料金相場【2026年】症状別の目安と損しないコツ",
  description:
    "エアコン修理の費用・価格・料金相場を症状別にまとめた2026年版ガイド。ガス補充・基板交換・ファンモーター・水漏れ・リモコンなどの修理代の目安、修理と買い替えの判断基準、見積もりで損しないコツをわかりやすく解説します。",
  alternates: { canonical: "/cost/repair-price/" },
};

const UPDATED = "2026年6月29日";

const toc = [
  { id: "summary", label: "エアコン修理の料金はどう決まる？" },
  { id: "cost", label: "症状別の修理費用相場の目安" },
  { id: "factors", label: "費用が変動する主な要因" },
  { id: "replace", label: "修理 vs 買い替えの判断目安" },
  { id: "save", label: "見積もりで損しないコツ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const costItems = [
  {
    category: "ガス・冷媒系",
    items: [
      { name: "冷媒ガス補充（R32など）", range: "約20,000〜40,000円", note: "補充量・冷媒の種類で変動" },
      { name: "ガス漏れ修理＋補充", range: "約35,000〜80,000円", note: "漏れ箇所の修理費を含む" },
    ],
  },
  {
    category: "水漏れ・排水系",
    items: [
      { name: "ドレンホース詰まり除去", range: "約3,000〜8,000円", note: "比較的軽作業" },
      { name: "ドレンパン清掃・交換", range: "約8,000〜35,000円", note: "分解清掃や部品代で変動" },
    ],
  },
  {
    category: "電気・基板系",
    items: [
      { name: "基板（室内機）交換", range: "約30,000〜80,000円", note: "機種で大きく異なる" },
      { name: "基板（室外機）交換", range: "約40,000〜100,000円", note: "高額になりやすい" },
      { name: "センサー交換", range: "約8,000〜20,000円", note: "比較的安価" },
    ],
  },
  {
    category: "機械系",
    items: [
      { name: "ファンモーター交換", range: "約15,000〜40,000円", note: "室内機・室外機で差" },
      { name: "コンプレッサー交換", range: "約80,000〜200,000円", note: "最も高額になりやすい" },
    ],
  },
  {
    category: "その他",
    items: [
      { name: "リモコン交換（純正／汎用）", range: "約2,000〜15,000円", note: "純正は高め・汎用は安価" },
      { name: "出張費・診断料", range: "約3,000〜8,000円", note: "修理費に含む業者もある" },
    ],
  },
];

const faqs = [
  {
    q: "エアコン修理の費用相場はいくらくらいですか？",
    a: "症状によって幅があります。ドレンホースの詰まり除去など軽作業は数千円程度、ガス補充は2〜4万円前後、基板交換は3〜10万円、コンプレッサー交換は8〜20万円程度が一般的な目安とされています。ただし金額は機種・使用年数・地域・業者によって大きく変わるため、正確な費用は必ず現地の見積もりで確認してください。",
  },
  {
    q: "出張費や診断料は別途かかりますか？",
    a: "業者によって異なります。出張費（3,000〜8,000円程度）や診断料を別途請求する業者もあれば、修理費に含めている業者、見積もり無料の業者もあります。依頼前に「出張費・診断料・キャンセル料がかかるか」を確認しておくと安心です。",
  },
  {
    q: "見積もりだけ取るのは無料ですか？",
    a: "出張・見積もり無料をうたう業者が多い一方で、訪問後にキャンセルすると出張費がかかる場合もあります。無料の範囲（出張・診断・キャンセル時の扱い）を事前に確認しましょう。複数社から相見積もりを取ると相場感がつかめます。",
  },
  {
    q: "修理と買い替えはどちらが得ですか？",
    a: "一般的には、修理費用が新品価格の半額以上になる場合や、使用年数が10年前後を超えている場合は買い替えを検討する目安とされています。古い機種は部品の保有期間が終了して修理できないこともあります。最終的には見積もり金額と残りの使用年数を踏まえて判断するとよいでしょう。",
  },
  {
    q: "繁忙期は料金が高くなりますか？",
    a: "真夏（7〜9月）など需要が集中する時期は予約が取りにくく、対応まで時間がかかる傾向があります。料金そのものは時期で大きく変わらないことが多いものの、急ぎの依頼では選択肢が限られる場合があります。可能であれば需要の少ない時期に点検・修理を済ませておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン修理の費用・料金相場【2026年】症状別の目安と損しないコツ",
  datePublished: "2026-06-29",
  dateModified: "2026-06-29",
  author: { "@type": "Organization", name: "エアコン修理ナビ編集部" },
  publisher: { "@type": "Organization", name: "エアコン修理ナビ" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/repair-cost" },
          { name: "エアコン修理の費用・料金相場", href: "/guide/repair-cost" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            費用ガイド
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理の費用・料金相場【2026年】
            <br className="hidden md:block" />
            症状別の目安と損しないコツ
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-29">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="エアコン修理の費用を確認するイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが冷えない、水漏れする、異音がするといったトラブルが起きたとき、まず気になるのが
            <strong className="font-semibold text-slate-900">修理にいくらかかるのか</strong>
            という点です。この記事では、エアコン修理の費用・価格・料金相場を症状別の目安としてまとめ、修理と買い替えの判断基準、見積もりで損しないコツまで中立的に解説します。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の金額は、一般に公開されている修理費用の相場をもとにした「目安」です。実際の費用は業者・機種・使用年数・地域・症状によって大きく変動します。正確な金額は必ず現地の見積もりでご確認ください（調査時点：2026年6月）。
          </p>
        </div>

        <nav aria-label="目次" className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-bold text-slate-700 mb-3 tracking-wide">目次</p>
            <ol className="space-y-2 text-[0.95rem] text-slate-700">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-sky-600 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="hover:text-sky-700 hover:underline underline-offset-4">{t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコン修理の料金はどう決まる？</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、おおまかに
              <strong className="font-semibold">出張費＋診断料＋作業費（部品代を含む）</strong>
              で構成されます。軽い詰まりの除去のような作業は数千円で済むこともありますが、基板やコンプレッサーなどの主要部品を交換する場合は数万円〜十数万円になることもあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              同じ症状でも、原因が「部品の不具合」なのか「冷媒漏れ」なのかによって作業内容と費用は変わります。そのため、相場はあくまで目安と考え、最終的な金額は現地での点検・見積もりで確認するのが基本です。
            </p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">症状別の修理費用相場の目安</h2>
            <p className="leading-8 text-slate-700 mb-6">
              代表的な修理内容ごとの費用レンジの目安を一覧にまとめました。いずれも一般的に公開されている相場をもとにした参考値です。
            </p>
            <div className="space-y-8">
              {costItems.map((category) => (
                <div key={category.category}>
                  <h3 className="font-bold text-slate-800 mb-3">{category.category}</h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <table className="w-full text-[0.95rem]">
                      <thead className="bg-sky-600 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">修理内容</th>
                          <th className="px-4 py-3 text-center font-bold">費用の目安</th>
                          <th className="px-4 py-3 text-left font-bold hidden md:table-cell">備考</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {category.items.map((item, i) => (
                          <tr key={item.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="px-4 py-3 font-medium text-slate-800">{item.name}</td>
                            <td className="px-4 py-3 text-center text-sky-700 font-bold">{item.range}</td>
                            <td className="px-4 py-3 text-xs text-slate-500 hidden md:table-cell">{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※上記はあくまで参考目安です。実際の費用は機種・使用年数・地域・業者・故障の程度によって大きく異なります。症状ごとの詳しい解説は
              <Link href="/cost/repair-price" className="text-sky-600 underline underline-offset-2">修理費用の相場ページ</Link>
              も参考にしてください。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="factors" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">費用が変動する主な要因</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>機種・メーカー</strong>：お掃除機能付きや業務用などは部品代・作業費が高くなりやすい</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>使用年数</strong>：古い機種は部品の在庫がなく、修理不可・割高になる場合がある</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>設置状況</strong>：高所・室外機が遠い・配管が長いなどで追加費用が発生することがある</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>地域・業者</strong>：出張費や作業単価は地域・業者によって差がある</span></li>
            </ul>
          </section>

          <section id="replace" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理 vs 買い替えの判断目安</h2>
            <p className="leading-8 text-slate-700 mb-4">
              高額修理になりそうなときは、買い替えも視野に入れて検討しましょう。一般的に、次のような場合は買い替えを検討する目安とされています。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">買い替えを検討する目安</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>修理費用が新品価格の半額以上になる</li>
                  <li>使用年数が10年前後を超えている</li>
                  <li>部品の保有期間が終了し、修理できない</li>
                  <li>同じ箇所で何度も故障している</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">修理で済ませやすい目安</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>購入から年数が浅く、保証期間内</li>
                  <li>不具合箇所が限定的で、修理費が比較的安い</li>
                  <li>リモコン交換や軽い詰まりなど軽度の症状</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              ※判断は状況によって異なります。詳しくは
              <Link href="/cost/replace-vs-repair" className="text-sky-600 underline underline-offset-2">修理と買い替えの判断ガイド</Link>
              もご覧ください。保証期間内であればメーカー修理を優先するのも選択肢です。
            </p>
          </section>

          <section id="save" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりで損しないコツ</h2>
            <ol className="space-y-4">
              {[
                ["複数社から相見積もりを取る", "1社だけで決めず、2〜3社から見積もりを取ると相場感がつかめ、過剰な請求を避けやすくなります。"],
                ["作業範囲と総額を書面で確認する", "「何を・いくらで」行うのか、追加費用が発生する条件を含めて書面で確認してから依頼しましょう。"],
                ["出張費・診断料・キャンセル料の有無を聞く", "無料の範囲を事前に確認しておくと、想定外の費用を防げます。"],
                ["保証・アフターケアを確認する", "修理後の保証期間や再修理対応があるかを確認しておくと安心です。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-start gap-3 font-semibold text-slate-800 list-none">
                    <span className="text-sky-600">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-slate-600 leading-7 text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や交換部品によって数千円から十数万円まで大きく変わります。本記事の相場はあくまで目安として参考にし、最終的な金額は現地の見積もりで確認するのが基本です。高額になりそうなときは買い替えも比較し、複数社から相見積もりを取って、料金と対応を見比べて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">まずは無料見積もりで実際の費用を確認</p>
              <p className="text-sky-100 text-sm mb-5">複数社に相談すると相場感がつかめ、納得して依頼できます。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                修理業者ランキングを見る
              </Link>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/noise", label: "エアコンの異音「ガガガ」の原因と対処" },
                { href: "/cost/replace-vs-repair", label: "修理と買い替えどちらが得か" },
                { href: "/company/aircon-trouble-center", label: "エアコントラブルセンターの口コミ・評判" },
                { href: "/company/take-service", label: "テイクサービスの口コミ・評判" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
