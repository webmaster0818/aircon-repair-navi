import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "パナソニックのエアコン修理は高いのか｜メーカー直営と街の業者の料金・対応の早さを比較【2026年最新】",
  description:
    "パナソニックのエアコン修理（メーカー出張修理）について、メーカー直営と街の修理業者を第三者の立場で比較しています。出張料4,950円、修理キャンセル時の費用、時間指定料、補修用性能部品の保有期間10年などの公式情報（2026年7月確認）をもとに、料金・対応の早さ・保証の観点から選び方をご説明します。",
  alternates: { canonical: "/company/panasonic-repair" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "conclusion", label: "本記事の要点" },
  { id: "official", label: "パナソニック公式修理の料金と仕組み" },
  { id: "merit", label: "メーカー直営のメリット・デメリット" },
  { id: "compare", label: "メーカー直営と街の業者の比較表" },
  { id: "fit", label: "メーカーが向く方・街の業者が向く方" },
  { id: "parts", label: "古い機種の修理と部品保有期間" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const compareRows = [
  {
    axis: "料金の傾向",
    maker:
      "出張料4,950円＋技術料＋部品代の合計。メーカーによる正規修理のため、総額は高めになる傾向",
    local:
      "出張費・見積もり無料を掲げる業者もあり、総額を抑えやすい傾向。ただし実額を公開していない業者も多数",
  },
  {
    axis: "対応の早さ",
    maker: "繁忙期（真夏）は申し込みが集中し、訪問まで日数がかかる場合あり",
    local: "24時間受付・最短即日対応を掲げる業者もあり（地域・混雑状況により変動）",
  },
  {
    axis: "対象メーカー",
    maker: "原則パナソニック製品のみ",
    local: "メーカーを問わず対応する業者が多数",
  },
  {
    axis: "部品・品質",
    maker: "メーカーによる正規修理（補修用性能部品の保有期間を公開）",
    local: "品質は業者により大きな差あり（実績・口コミ・保証の確認が必要）",
  },
  {
    axis: "キャンセル費用",
    maker: "訪問後にキャンセルしても出張料4,950円が発生（公式明記）",
    local: "見積もり無料の業者であれば、見積もり後のキャンセルも無料の場合あり",
  },
];

const faqs = [
  {
    q: "パナソニックのエアコン修理は高いですか？",
    a: "パナソニックの出張修理は「出張料4,950円（税込）＋技術料＋部品代」の合計で費用が決まります（公式・2026年7月確認）。メーカーによる正規修理ですが、総額はやや高めになりやすい傾向です。費用を抑えたい場合は、街の修理業者にも見積もりを依頼し、料金と対応の早さを比較することをおすすめします。",
  },
  {
    q: "メーカー修理と街の修理業者、どちらが安いですか？",
    a: "一概には言えませんが、一般的な故障（水漏れ・軽度の不調など）では、出張費・見積もり無料を掲げる街の業者のほうが総額を抑えられる場合があります。一方、基板やコンプレッサーなど主要部品の交換が必要な修理では、メーカーの正規対応も有力な選択肢です。症状を伝えたうえで、複数社の見積もりを比較することをおすすめします。",
  },
  {
    q: "修理をキャンセルしても費用はかかりますか？",
    a: "パナソニックでは、技術員が訪問した後に修理をキャンセルした場合でも、出張料4,950円（税込）を負担する必要があります（公式明記・2026年7月確認）。また営業時間外や日曜・祝日の時間指定には、別途で指定料金2,200円（税込）がかかります。依頼前に、費用が発生する条件をご確認ください。",
  },
  {
    q: "古いパナソニックのエアコンでも修理できますか？",
    a: "パナソニックのエアコンの補修用性能部品の保有期間は製造打ち切りから10年です（公式・2026年7月確認）。この期間を過ぎると補修用部品が入手できず、メーカーでの修理を受けられない場合があります。年式が古い機種は、修理と買い替えのどちらが経済的かを費用面から判断することをおすすめします。",
  },
  {
    q: "メーカーと街の業者では、どちらが早く訪問できますか？",
    a: "繁忙期（真夏）はどの窓口も混み合いますが、24時間受付・最短即日対応を掲げる街の専門業者のほうが早く訪問できる場合があります。ただし、到着までの時間は地域や混雑状況によって変わるため、お急ぎの場合はメーカーと業者の両方に問い合わせ、到着が早い方に依頼する相見積もりが有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "パナソニックのエアコン修理は高いのか｜メーカー直営と街の業者の料金・対応の早さを比較【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-12",
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
          { name: "業者一覧", href: "/ranking" },
          { name: "パナソニックのエアコン修理（メーカーと街の業者の比較）", href: "/company/panasonic-repair" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            メーカー修理と街の業者の比較
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            パナソニックのエアコン修理は高いのか
            <br className="hidden md:block" />
            メーカー直営と街の業者の料金・対応の早さを比較【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-12">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="panasonic-repair" name="パナソニック修理ご相談窓口" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            パナソニック製のエアコンに冷えない・水漏れ・異音・エラー表示などの故障が起きた際、
            <strong className="font-semibold text-slate-900">メーカー公式（パナソニックの出張修理）に頼むべきか、街の修理業者に頼むべきか</strong>
            で迷われる方は少なくありません。本記事では、パナソニック公式の料金の仕組み（出張料・キャンセル費用など）と、街の修理業者との違いを、第三者の立場で比較しています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事のパナソニックの料金・条件は、いずれも同社公式サイトの掲載情報にもとづき、当サイトが確認したものです（確認日：2026年7月12日）。料金や受付内容は時期により変わるため、ご利用前に、公式サイトにて最新情報をご確認ください。
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
          <section id="conclusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">本記事の要点</h2>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <ul className="space-y-3 text-slate-700 leading-7 text-[0.98rem]">
                <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">1.</span><span><strong>メーカーによる正規修理・保証を重視する場合はメーカー直営が適しています</strong>。基板やコンプレッサーなど主要部品の交換が必要な故障や、保証期間内の故障に向いています。</span></li>
                <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">2.</span><span><strong>費用と対応の早さを重視する場合は街の修理業者が適しています</strong>。出張費・見積もり無料や最短即日対応を掲げる業者もあり、水漏れなど一般的な故障は総額を抑えやすい傾向です（品質は業者により異なります）。</span></li>
                <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">3.</span><span>パナソニック公式は<strong>出張料4,950円＋技術料＋部品代</strong>が基本。訪問後にキャンセルしても出張料4,950円は発生します（公式・2026年7月確認）。両方に見積もりを依頼し、料金と対応の早さを比較することをおすすめします。</span></li>
              </ul>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <Link href="/ranking" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors text-center">
                  街の修理業者ランキングを見る →
                </Link>
                <Link href="/cost/repair-price/" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors text-center">
                  症状別の料金相場を見る →
                </Link>
              </div>
            </div>
          </section>

          <section id="official" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">パナソニック公式修理の料金と仕組み</h2>
            <p className="leading-8 text-slate-700">
              パナソニックの家庭用エアコンの出張修理は、運営会社の
              <strong className="font-semibold">パナソニック テクノサービス株式会社</strong>
              が対応します。修理料金は次の3つの合計で決まります。
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張料", "4,950円（税込）／技術員の派遣料金。訪問後に修理をキャンセルした場合も負担が必要"],
                    ["技術料", "不具合箇所の特定・修理・調整・点検の料金（症状により変動）"],
                    ["部品代", "修理に使用した部品・補助材料の料金"],
                    ["時間指定料", "営業時間外・日曜・祝日の時間指定は指定料金2,200円（税込）が追加"],
                    ["料金の調べ方", "公式「修理診断ナビ」で品番（CS-から始まる型番）から修理料金の目安を確認可能"],
                    ["受付", "修理ご相談窓口 0120-878-554（受付9:00〜18:00・年中無休／2026年10月15日・公式確認）／Web申込は随時"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：パナソニック公式サイト（修理料金の目安・修理サービスのご案内）。当サイト確認日：2026年7月12日。料金は税込で、地域・商品グレード・交換箇所により上記以外の費用がかかる場合があります。</p>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-bold text-amber-900 mb-1">費用が発生する条件について</p>
              <p className="text-sm text-slate-700 leading-7">
                メーカー修理では、修理を行わない場合にも費用が発生する点にご注意ください。パナソニックは訪問後にキャンセルしても出張料4,950円が発生します（参考：ダイキンは出張点検費8,500〜19,000円が修理キャンセル時にも発生）。一方、街の修理業者には「出張費・見積もり無料」を明記している会社もあり、見積もり後のキャンセルであれば無料の場合があります。依頼前に、出張費・見積もり・キャンセル料の3点をご確認ください。
              </p>
            </div>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー直営のメリット・デメリット</h2>
            <p className="leading-8 text-slate-700 mb-6">
              パナソニックのメーカー直営修理は、
              <strong className="font-semibold">メーカー自身による正規修理</strong>
              が主な特徴です。一方で、費用が高めになる傾向、繁忙期には訪問まで日数を要すること、古い機種では部品の保有期間が終了していることといった注意点もあります。以下に両面を整理します。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>製造元のメーカー自身による正規修理です</li>
                  <li>補修用性能部品の保有期間（製造打ち切りから10年）を公開しています</li>
                  <li>保証期間内で保証対象であれば、無償修理になる場合があります</li>
                  <li>品番（CS-）から修理料金の目安を事前に確認できます</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出張料＋技術料＋部品代で、総額はやや高めになる傾向があります</li>
                  <li>繁忙期（真夏）は申し込みが集中し、訪問まで日数がかかることがあります</li>
                  <li>製造打ち切りから10年を過ぎた機種は、部品の保有期間終了により修理できない場合があります</li>
                  <li>対象は原則としてパナソニック製品に限られます</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意 */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は予約の取りやすさも比較の対象になります</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、メーカー（パナソニック）の修理窓口に限らず、繁忙期はどの窓口も予約が取りにくくなる傾向があります。修理を待つ間の熱中症のリスクを考慮し、料金だけでなく訪問可能な日時もあわせて確認することをおすすめします。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                急ぎの場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着が早い方に依頼する「相見積もり」が有効です。※対応の早さは地域・混雑状況により変動するため、受付時に到着の目安をご確認ください。
              </p>
              <Link href="/ranking/fast" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応が早い業者を比較する →</Link>
            </div>
          </section>

          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー直営と街の業者の比較表</h2>
            <p className="leading-8 text-slate-700 mb-6">
              料金・対応の早さ・品質・保証の観点から、パナソニックのメーカー直営修理と街の修理業者を比較しています。どちらが優れているかではなく、
              <strong className="font-semibold">故障の内容と優先する条件に応じて選ぶ</strong>
              ことが重要です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.9rem] bg-white rounded-xl border border-slate-200 overflow-hidden min-w-[640px]">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-3 py-3 text-left w-1/6">観点</th>
                    <th className="px-3 py-3 text-left">メーカー直営（パナソニック）</th>
                    <th className="px-3 py-3 text-left">街の修理業者</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareRows.map((r, i) => (
                    <tr key={r.axis} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="px-3 py-3 text-left font-bold text-slate-700 align-top">{r.axis}</th>
                      <td className="px-3 py-3 text-slate-700 align-top leading-6">{r.maker}</td>
                      <td className="px-3 py-3 text-slate-700 align-top leading-6">{r.local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">※パナソニックの料金・条件は公式サイトの掲載情報（当サイト確認日：2026年7月12日）。街の業者の傾向は当サイトが実施した掲載各社の調査にもとづく一般的な整理であり、実際の料金・対応は業者により異なります。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">実額で比べたい方へ</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                当サイトでは、掲載各社の出張費、見積もり無料の有無、公式サイトに掲載された実額を一覧にまとめ、確認日を記載しています。メーカーと業者の料金条件を比較してご確認いただけます。
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/cost/price-index/" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  料金インデックス（当サイト調査） →
                </Link>
                <Link href="/ranking" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  修理業者ランキングで比較する →
                </Link>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカーが向く方・街の業者が向く方</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">メーカー直営が向く方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>メーカーによる正規修理にこだわりたい方</li>
                  <li>基板・コンプレッサーなど主要部品の交換が必要な故障の場合</li>
                  <li>メーカー保証期間内で、まず公式に相談したい方</li>
                  <li>費用よりも品質を優先したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">街の修理業者が向く方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>費用をできるだけ抑えたい方</li>
                  <li>当日・即日など早い駆けつけを優先したい方</li>
                  <li>水漏れなど一般的な故障の場合</li>
                  <li>複数メーカーの家電をまとめて相談したい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="parts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">古い機種の修理と部品保有期間</h2>
            <p className="leading-8 text-slate-700">
              パナソニックのエアコンの
              <strong className="font-semibold">補修用性能部品の保有期間は、製造打ち切りから10年</strong>
              です（公式・2026年7月確認）。この期間を過ぎると補修用部品が入手できず、メーカーでの修理を受けられない場合があります。年式の古い機種は、修理費用と本体の残り寿命を踏まえ、
              <strong className="font-semibold">修理するか買い替えるか</strong>
              を判断することをおすすめします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一般に、修理費が本体価格の半分を超える場合や、使用10年前後で複数の不調が出ている場合は、買い替えのほうが総費用を抑えやすいとされています。判断に迷う場合は、見積もり額と年式を比較したうえでご判断ください。
            </p>
            <p className="mt-3 text-xs text-slate-400">出典：パナソニック公式「補修用性能部品の保有期間」（エアコン10年）。当サイト確認日：2026年7月12日。</p>
            <div className="mt-6">
              <Link href="/cost/replace-vs-repair" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">修理と買い替えどちらが得か判断する →</Link>
            </div>
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
              パナソニックのメーカー直営修理は、メーカー自身による正規修理と保証の明確さが強みです。基板やコンプレッサーなど主要部品の交換が必要な故障、保証期間内の故障には有力な選択肢といえます。一方で、出張料4,950円＋技術料＋部品代で総額はやや高めになりやすく、繁忙期は訪問まで時間がかかることや、製造打ち切りから10年を過ぎた機種は部品の保有期間終了により修理できない場合がある点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              費用と対応の早さを優先する場合は、出張費・見積もり無料や最短即日対応を掲げる街の修理業者も有力な選択肢です（品質は業者により異なるため、実績と保証内容をご確認ください）。どちらが適しているかは、故障の内容と優先する条件によって異なります。メーカーと業者の両方に見積もりを依頼し、料金と対応の早さを比較したうえで選ぶことをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">パナソニック製エアコンの故障でお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">費用と対応の早さを重視する場合は街の業者、メーカー対応と保証を重視する場合は公式窓口が適しています。両方を比較のうえご検討ください。</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                  街の修理業者を比較する
                </Link>
                <a href="https://panasonic.jp/support/repair/on-site.html" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-white/70 px-7 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  パナソニック公式修理を見る
                </a>
              </div>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/ranking/fast", label: "対応が早い修理業者" },
                { href: "/cost/repair-price", label: "エアコン修理の料金相場" },
                { href: "/cost/replace-vs-repair", label: "修理と買い替えどちらが得か" },
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
