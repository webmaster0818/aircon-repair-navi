import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ダイキンの修理は高い？メーカー直営 vs 街の業者はどっちが安い・早い？料金比較【2026年最新】",
  description:
    "ダイキンのエアコン修理（コンタクトセンター）は高い？メーカー直営 vs 街の業者はどっちが安い・早いかを第三者視点で比較。正規対応の強みと出張費・料金の考え方（要確認）、エアコン修理の料金相場・業者ランキングと合わせて損しない選び方を解説します。",
  alternates: { canonical: "/company/daikin-cc" },
};

const UPDATED = "2026年6月10日";

const toc = [
  { id: "summary", label: "ダイキンコンタクトセンターとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "評価できる点・強み" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "相談から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const strengths = [
  {
    title: "空調専業メーカーの正規対応",
    body:
      "空調を専門とするメーカー自身が修理にあたるため、ルームエアコンの構造や症状を踏まえた的確な対応が期待できます。",
  },
  {
    title: "年中無休の相談体制",
    body:
      "電話窓口（0120-881-081）は年中無休9時〜19時で受付。Webからの修理相談も用意され、相談のハードルが低い体制です。",
  },
  {
    title: "全国を網羅するサービス網",
    body:
      "全国規模のサービス体制により、地域を問わずルームエアコンの出張修理に対応しています。",
  },
  {
    title: "純正部品による修理",
    body:
      "交換が必要な場合も純正部品が使われるため、修理後の品質や互換性の面で安心感があります。",
  },
];

const faqs = [
  {
    q: "ダイキン以外のメーカーのエアコンも修理してもらえますか？",
    a: "ダイキンコンタクトセンターは、原則としてダイキン製品の修理相談を受け付ける窓口です。他メーカーの製品については、各メーカーの修理窓口や家電量販店、民間の修理業者へ相談するのが基本です。",
  },
  {
    q: "受付時間は何時から何時までですか？",
    a: "電話窓口（0120-881-081）は年中無休で9時〜19時の受付とされています。あわせて24時間365日のサポート体制やWebからの修理相談も用意されています。最新の受付時間は公式サイトでご確認ください。",
  },
  {
    q: "Webの修理相談はどう使えばよいですか？",
    a: "公式サイトの修理相談フォームから、製品の品番や症状を入力して相談できます。電話がつながりにくい時間帯でも手続きを進められるため、急ぎでない場合に便利です。品番と症状を手元に控えておくとスムーズです。",
  },
  {
    q: "修理料金はどのくらいかかりますか？",
    a: "症状や交換部品によって異なります。正確な金額は現地診断後に提示されるため、相談時に症状を具体的に伝え、見積もりを確認してから依頼するのがおすすめです。保証期間内で保証対象の場合は無償となることがあります。",
  },
  {
    q: "保証期間内なら無料で修理してもらえますか？",
    a: "メーカー保証期間内で、保証規定の対象となる自然故障であれば、無償修理となる場合があります。保証書の内容や購入時期を確認したうえで相談しましょう。経年劣化や使用状況による故障は有償となることがあります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダイキンエアコン修理の口コミ・評判は？コンタクトセンターの料金・相談方法を徹底調査【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
          { name: "ダイキンコンタクトセンターの口コミ・評判", href: "/company/daikin-cc" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理サービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ダイキンエアコン修理の口コミ・評判は？
            <br className="hidden md:block" />
            コンタクトセンターの料金・相談方法を徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="室内機のエアコン修理を行う作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            ダイキン製のエアコンが冷えない・効かない、水漏れや異音、エラー表示が出るといったトラブルが起きたとき、メーカー公式の相談窓口に直接相談するという選択肢があります。
            この記事では、
            <strong className="font-semibold text-slate-900">ダイキンコンタクトセンター</strong>
            について、空調専業メーカーならではの強みや信頼性、料金の考え方、電話・Webでの相談方法、利用前に知っておきたい注意点を中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本窓口はメーカー公式の相談窓口のため、利用者個人の口コミは限定的です。本記事は公式サイトで公開されている情報をもとに、サービスの特徴と一般的な注意点を整理しています。料金や受付内容は時期により変わるため、最新情報は公式サイトでご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ダイキンコンタクトセンターとは</h2>
            <p className="leading-8 text-slate-700">
              ダイキンコンタクトセンターは、空調機器を専門とするダイキン工業株式会社が運営する、同社製品の相談を受け付けるメーカー公式の窓口です。ルームエアコンの出張修理にも対応しており、冷えない・効かない、水漏れ、異音、エラー表示など、家庭で起きやすいエアコンのトラブルを相談できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              電話窓口（0120-881-081）は年中無休9時〜19時で受付し、24時間365日のサポート体制やWebからの修理相談も用意されています。空調を専門とするメーカー自身が対応するため、製品構造を踏まえた正規対応が期待できる点が、民間の修理サービスとの大きな違いです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ダイキンコンタクトセンター"],
                    ["運営会社", "ダイキン工業株式会社"],
                    ["対応製品", "ダイキン製のルームエアコン ほか"],
                    ["対応エリア", "全国（メーカー公式のサービス網が対応）"],
                    ["電話番号", "0120-881-081（年中無休 9:00〜19:00）"],
                    ["サポート体制", "24時間365日のサポート体制／Web修理相談あり"],
                    ["料金", "症状・部品により変動（現地診断後に提示）"],
                    ["公式サイト", "https://www.daikincc.com/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ダイキン公式サイト（daikincc.com／ac.daikin.co.jp）の掲載情報。受付時間や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">評価できる点・強み</h2>
            <p className="leading-8 text-slate-700 mb-6">
              メーカー公式窓口のため利用者個人の口コミは限定的ですが、サービスの性質上、
              <strong className="font-semibold">空調専業メーカーの正規対応・純正部品・全国網羅という信頼性</strong>
              が大きな強みです。公式サイトの情報から読み取れる主な特徴を整理しました。
            </p>
            <div className="grid gap-4">
              {strengths.map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <h3 className="font-bold text-sky-800 mb-2">{s.title}</h3>
                  <p className="text-slate-700 leading-7 text-[0.95rem]">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">※上記はメーカー公式サイトに掲載されている情報をもとにした特徴の整理です。利用者個人の口コミは公開情報が限定的です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              信頼性の高いメーカー公式窓口ですが、利用にあたっては
              <strong className="font-semibold">対象がダイキン製品に限られる</strong>
              点など、いくつか押さえておきたいポイントがあります。スムーズに相談するために、次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>修理対象は原則ダイキン製品。他メーカー品は対象外となる</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は相談が集中し、電話がつながりにくい・訪問まで時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>保証期間外の故障は有償。症状を具体的に伝え、見積もりを確認してから依頼すると安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>空調専業メーカーによる正規修理で安心感が高い</li>
                  <li>純正部品が使われ、修理後の品質・互換性で安心</li>
                  <li>年中無休の電話受付とWeb相談で相談しやすい</li>
                  <li>全国対応で、地域を問わず相談できる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対象が原則ダイキン製品に限られる</li>
                  <li>繁忙期は電話がつながりにくい・訪問が遅れることがある</li>
                  <li>保証期間外は有償。料金は症状・部品で変わる</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">向いている人・向いていない人</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>ダイキン製エアコンを使っていて正規修理を希望する人</li>
                  <li>メーカー保証期間内で、まず公式窓口に相談したい人</li>
                  <li>純正部品での修理にこだわりたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>ダイキン以外のメーカーのエアコンを修理したい人</li>
                  <li>当日・深夜などの即時駆けつけを最優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意（2026-07-02追加） */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は「予約の取りやすさ」も比較を</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、メーカー（ダイキン）の修理窓口に限らず、繁忙期はどの窓口も予約が取りにくくなる傾向があります。故障したエアコンを待つ間の熱中症リスクを考えると、「どこが安いか」だけでなく「いつ来てもらえるか」を並行して確認するのが現実的です。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                急ぎの場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着が早い方に頼む「相見積もり」が有効です。※対応スピードは地域・混雑状況で変動するため、受付時に到着目安の確認をおすすめします。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応スピードで業者を比較する →</Link>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・部品交換など）によって幅があります。ダイキンコンタクトセンターでは、相談時に症状を伝えたうえで、現地診断後に作業内容と費用が提示されます。費用感を把握するためにも、症状をできるだけ具体的に伝え、
              <strong className="font-semibold">見積もりに納得してから修理を依頼する</strong>
              のがおすすめです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお、メーカー保証期間内で保証対象の自然故障であれば、規定に基づいて無償修理となる場合があります。保証書や購入時期を確認したうえで相談しましょう。修理か買い替えかで迷うケースでは、見積もり額と製品の年式を踏まえて判断するのがおすすめです。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は症状・部品により変動します。正確な金額は現地診断後に提示されます。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">メーカー直営 vs 街の業者、どっちが安い・早い？</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                メーカー正規の安心感がある一方、混雑期は訪問まで日数がかかることも。街の修理業者のほうが安く早いケースもあるため、実際の料金相場や対応が早い業者を比較してから判断すると失敗を防げます。
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/cost/repair-price/" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  エアコン修理の料金相場ガイド →
                </Link>
                <Link href="/ranking" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  修理業者ランキングで比較する →
                </Link>
              </div>
            </div>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">相談から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "品番と症状を控えたうえで、電話（0120-881-081）またはWebの修理相談から相談します。"],
                ["訪問日時の調整", "都合の良い日時を調整し、出張修理の予約を行います。"],
                ["現地診断・見積もり", "技術者が状態を確認し、作業内容と費用を提示します。"],
                ["修理作業", "見積もりに納得後、純正部品などを用いて修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払い（保証対象は無償の場合あり）をして完了です。"],
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
              ダイキンコンタクトセンターは、空調専業メーカーによる正規対応・純正部品・全国網羅という信頼性が強みのメーカー公式窓口です。利用者個人の口コミは限定的ですが、ダイキン製エアコンを安心して直したい人にとって、有力な相談先といえます。年中無休の電話受付に加え、24時間365日のサポート体制やWeb修理相談も用意され、相談しやすい点も魅力です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、対象は原則ダイキン製品に限られ、繁忙期は電話がつながりにくい・訪問まで時間がかかる場合があります。保証期間や見積もり内容を確認したうえで、自宅のエアコンに合った修理方法を選びましょう。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">ダイキン製エアコンの故障でお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは公式窓口で相談方法と修理の流れを確認してみましょう。</p>
              <a href="https://www.daikincc.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ダイキンコンタクトセンターを見る
              </a>
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
