import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ダイキンのエアコン修理・お客様窓口の電話番号｜コンタクトセンター0120-88-1081（24時間）とWeb申込・料金【2026年10月確認】",
  description:
    "ダイキンのエアコンのお客様窓口（空調お客様サポート／ダイキンコンタクトセンター）の修理受付電話0120-88-1081は24時間365日受付です（2026年10月31日公式確認）。買い替え相談の別番号、Web修理申込の手順、点検費・保証期間、電話がつながらない場合の対処を掲載しています。",
  alternates: { canonical: "/company/daikin-cc" },
};

const UPDATED = "2026年10月31日";

const toc = [
  { id: "contact", label: "修理依頼の電話番号・Web申込" },
  { id: "summary", label: "ダイキンコンタクトセンターとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "評価できる点・強み" },
  { id: "bad", label: "ご利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "相談から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const strengths = [
  {
    title: "空調メーカー直営窓口の正規対応",
    body:
      "空調を主力事業とするメーカー自身が修理にあたるため、ルームエアコンの構造や症状を踏まえた的確な対応が期待できます。",
  },
  {
    title: "年中無休の相談体制",
    body:
      "電話窓口（0120-88-1081）は24時間365日受け付けています。Webからの修理申込やメールでの問い合わせも用意されています。",
  },
  {
    title: "全国を網羅するサービス網",
    body:
      "全国規模のサービス体制により、地域を問わずルームエアコンの出張修理に対応しています。",
  },
  {
    title: "純正部品による修理",
    body:
      "部品交換が必要な場合も純正部品が使用されるため、修理後の品質や互換性の面で信頼性があります。",
  },
];

const faqs = [
  {
    q: "ダイキン以外のメーカーのエアコンも修理してもらえますか？",
    a: "ダイキンコンタクトセンターは、原則としてダイキン製品の修理相談を受け付ける窓口です。他メーカーの製品については、各メーカーの修理窓口、家電量販店、民間の修理業者へご相談ください。",
  },
  {
    q: "受付時間は何時から何時までですか？",
    a: "公式の問い合わせページでは、フリーダイヤル0120-88-1081を「24時間365日サポート」と案内しています（2026年10月17日確認）。なお、買い替えの相談は別番号（0120-085-022・平日9:30〜17:00）です。最新の受付時間は公式サイトでご確認ください。",
  },
  {
    q: "電話がつながらない場合はどうすればよいですか？",
    a: "公式サイトでは、回線の混雑時にオペレーターへつなぐ途中で電話が切断される場合があると案内しており、その際は時間をおいてかけ直すか、Webでの修理依頼またはメールでの問い合わせを利用するよう求めています。Webの修理申込は公式サイトの「修理のご相談・お申し込み」から進められます。",
  },
  {
    q: "Webの修理相談はどう使えばよいですか？",
    a: "公式サイトの修理相談フォームから、製品の品番や症状を入力して相談できます。電話がつながりにくい時間帯でも手続きを進められるため、お急ぎでない場合に適しています。事前に品番と症状を控えておくと、手続きが円滑に進みます。",
  },
  {
    q: "修理料金はどのくらいかかりますか？",
    a: "修理料金は出張料・技術料（点検費を含む）・部品代で構成され、公式FAQに症状別の目安（例：冷えない・暖まらない場合、電気系統28,000〜46,000円・冷媒系統70,000〜105,000円、税込）が掲載されています。訪問または引き取りで点検した後に修理をしなかった場合も、ルームエアコンは1台あたり8,500〜19,000円（税込）の出張（引取）点検費がかかります。部品手配で複数回訪問しても点検費は二重にかからないと案内されています（2026年10月27日・公式FAQ確認）。",
  },
  {
    q: "保証期間内なら無料で修理してもらえますか？",
    a: "ダイキンのルームエアコンの保証期間は、お買い上げから本体1年間・冷媒系統5年間です（2026年10月27日・公式FAQ確認）。保証期間内で保証規定の対象となる自然故障であれば、無償修理となる場合があります。保証書の内容や購入時期をご確認のうえ、ご相談ください。使用状況による故障は保証期間内でも有償となることがあります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ダイキンのエアコン修理・お客様窓口の電話番号｜コンタクトセンター0120-88-1081（24時間）とWeb申込・料金【2026年10月確認】",
  datePublished: "2026-06-10",
  dateModified: "2026-10-31",
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
          { name: "ダイキンのエアコン修理の電話番号・依頼方法", href: "/company/daikin-cc" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理サービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ダイキンのエアコン修理・お客様窓口の電話番号
            <br className="hidden md:block" />
            コンタクトセンターへの依頼方法と料金・評判【2026年10月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-31">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="daikin-cc" name="ダイキンコンタクトセンター" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="mb-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">結論：ダイキンのエアコン修理の依頼先</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>電話：ダイキンコンタクトセンター 0120-88-1081</strong>（フリーダイヤル・24時間365日受付。AI音声ガイダンスで用件を話すと担当窓口に案内されます）</li>
              <li>・<strong>Web：</strong>公式サイト「修理のご相談・お申し込み」から申し込めます。事前に故障診断を行うと、その結果を反映して申し込めます</li>
              <li>・<strong>買い替えの相談は別番号</strong>（0120-085-022・平日9:30〜17:00）です</li>
              <li>・<strong>窓口の名称：</strong>公式サイトでは、エアコンなど空調製品の問い合わせ先を「空調お客様サポート（ダイキンコンタクトセンター）」、購入相談の窓口を「ダイキンカスタマーセンター」と表記しています。「お客様センター」「コールセンター」で検索した場合も、修理の依頼先は上記の0120-88-1081です（2026年10月31日確認）</li>
              <li>・<strong>費用：</strong>点検後に修理をしなかった場合も、ルームエアコン1台あたり<strong>8,500〜19,000円（税込）の出張（引取）点検費</strong>がかかります。保証期間は本体1年・冷媒系統5年です（2026年10月27日・公式FAQ確認）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※電話番号・Web申込は2026年10月17日（10月31日に再確認）、点検費・保証期間は2026年10月27日にダイキン公式（daikincc.com の問い合わせページ・よくあるご質問）で確認した内容です。詳しくは<a href="#contact" className="underline">電話番号・Web申込の表</a>をご覧ください。</p>
          </div>
          <p className="text-[1.05rem] leading-8 text-slate-700">
            ダイキン製のエアコンが冷えない・効かない、水漏れや異音、エラー表示が出るといったトラブルが生じた場合、メーカー公式の相談窓口に直接相談する方法があります。
            本記事では、
            <strong className="font-semibold text-slate-900">ダイキンコンタクトセンター</strong>
            について、空調メーカー直営窓口としての特長と信頼性、料金の考え方、電話・Webでの相談方法、ご利用前の注意点を中立的な立場でまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本窓口はメーカー公式の相談窓口のため、利用者個人の口コミは限定的です。本記事は公式サイトで公開されている情報をもとに、サービスの特徴と一般的な注意点を整理しています。料金や受付内容は時期により変わるため、最新情報は公式サイトでご確認ください（調査時点：2026年6月、電話番号・受付時間・Web申込は2026年10月17日に再確認）。
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
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ダイキンのエアコン修理を依頼する電話番号・Web申込</h2>
            <p className="leading-8 text-slate-700 mb-5">
              ダイキン製エアコンの修理は、メーカー窓口の「ダイキンコンタクトセンター」に電話またはWebで申し込みます。以下は2026年10月17日に公式の問い合わせページ（daikincc.com）で確認した内容です。
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["修理の電話", "0120-88-1081（フリーダイヤル・24時間365日）"],
                    ["電話の流れ", "AI音声ガイダンスで、用件を話すと適切な窓口に案内されます"],
                    ["Web申込", "公式サイト「修理のご相談・お申し込み」から申込。事前に故障診断を行うと、診断結果を反映して申し込めます（ルームエアコン・店舗用エアコン・エコキュート・空気清浄機）"],
                    ["申込後の変更・キャンセル", "Web申込の場合は控えメールに記載のURLから。SMSが届いた場合はSMS記載のURLから"],
                    ["買い替えの相談", "0120-085-022（平日9:30〜17:00）※修理とは別番号"],
                    ["つながらない場合", "時間をおいてかけ直すか、Webでの修理依頼・メールでの問い合わせを利用（公式の案内）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              電話・Webのどちらでも、室内機の銘板などに記載された<strong className="font-semibold">品番</strong>と、<strong className="font-semibold">症状（エラー表示・ランプの点滅など）</strong>を控えておくと、申込が円滑に進みます。リモコンにエラーコードが表示されている場合は、<Link href="/guide/error-code-daikin" className="text-sky-600 font-bold hover:underline">ダイキンのエラーコード一覧</Link>で症状の目安を確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-400">出典：ダイキン工業「お問い合わせ」「修理のご相談・お申し込み」（daikincc.com・2026年10月17日確認）。公式サイトでは間違い電話が増えているとして、番号の確認を呼びかけています。</p>
          </section>

          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ダイキンコンタクトセンターとは</h2>
            <p className="leading-8 text-slate-700">
              ダイキンコンタクトセンターは、「空調」「化学」「フィルタ」を柱に事業を展開するダイキン工業株式会社が運営する、同社製品の相談を受け付けるメーカー公式の窓口です。ルームエアコンの出張修理にも対応しており、冷えない・効かない、水漏れ、異音、エラー表示など、家庭で起きやすいエアコンのトラブルを相談できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              電話窓口（0120-88-1081）は24時間365日受け付けており、Webからの修理申込やメールでの問い合わせも用意されています。メーカー自身が対応するため、製品構造を踏まえた正規対応が期待できる点が、民間の修理サービスとの大きな違いです。
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
                    ["電話番号", "0120-88-1081（24時間365日）／買い替え相談は0120-085-022（平日9:30〜17:00）"],
                    ["サポート体制", "AI音声ガイダンスで用件に応じた窓口を案内／Web修理申込・メール問い合わせあり（2026年10月17日・公式確認）"],
                    ["料金", "出張料・技術料（点検費含む）・部品代。症状別の目安を公式に公開し、正式な金額は現地点検後に案内（2026年10月15日・公式確認）"],
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
              <strong className="font-semibold">空調メーカー直営窓口の正規対応・純正部品・全国網羅という信頼性</strong>
              が大きな強みです。公式サイトの情報をもとに、主な特徴を以下のとおり整理しています。
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
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              信頼性の高いメーカー公式窓口ですが、利用にあたっては
              <strong className="font-semibold">対象がダイキン製品に限られる</strong>
              点など、事前にご確認いただきたい点があります。円滑にご相談いただくため、以下の点をご確認ください。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>修理対象は原則としてダイキン製品です。他メーカーの製品は対象外となります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は相談が集中するため、電話がつながりにくい場合や、訪問まで時間がかかる場合があります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>保証期間外の故障は有償です。症状を具体的に伝え、見積もりを確認してから依頼することをおすすめします。</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>空調メーカー直営窓口による正規修理を受けられます。</li>
                  <li>純正部品が使用されるため、修理後の品質・互換性が確保されます。</li>
                  <li>年中無休の電話受付とWeb相談を利用できます。</li>
                  <li>全国対応のため、地域を問わず相談できます。</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対象は原則としてダイキン製品に限られます。</li>
                  <li>繁忙期は、電話がつながりにくい場合や訪問が遅れる場合があります。</li>
                  <li>保証期間外は有償で、料金は症状・部品により異なります。</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">向いている方・向いていない方</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>ダイキン製エアコンを使用しており、正規修理を希望する方</li>
                  <li>メーカー保証期間内で、まず公式窓口に相談したい方</li>
                  <li>純正部品による修理を希望する方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>ダイキン以外のメーカーのエアコンを修理したい方</li>
                  <li>当日・深夜などの即時の訪問を最優先したい方</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意（2026-07-02追加） */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は「予約の取りやすさ」もご確認ください</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、メーカー（ダイキン）の修理窓口に限らず、繁忙期はどの窓口も予約が取りにくくなる傾向があります。修理を待つ間の熱中症リスクを考慮し、料金だけでなく訪問可能な日時もあわせてご確認ください。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                お急ぎの場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着の早い方に依頼する「相見積もり」が有効です。※対応スピードは地域・混雑状況により変動するため、受付時に到着の目安をご確認ください。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応スピードで業者を比較する →</Link>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・部品交換など）によって幅があります。ダイキンコンタクトセンターの出張修理金額は出張料・技術料（点検費含む）・部品代で構成され、公式サイトで症状別の目安が公開されています（例：冷えない・暖まらない場合、電気系統部品で28,000〜46,000円程度、冷媒系統部品で70,000〜105,000円程度・税込）。正式な金額は、サービスエンジニアが現地で点検した後に案内されます（2026年10月15日・公式確認）。費用を把握するため、症状をできるだけ具体的に伝え、
              <strong className="font-semibold">見積もり内容を確認してから修理を依頼する</strong>
              ことをおすすめします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお、メーカー保証期間内で保証対象の自然故障であれば、規定に基づいて無償修理となる場合があります。保証書や購入時期をご確認のうえ、ご相談ください。修理と買い替えで迷う場合は、見積もり額と製品の年式を踏まえて判断することをおすすめします。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は症状・部品により変動します。正確な金額は現地診断後に提示されます。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">メーカー直営窓口と地域の修理業者の料金・対応の早さの比較</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                メーカー正規対応には信頼性がある一方、混雑期は訪問まで日数がかかる場合があります。地域の修理業者のほうが安く、早く対応できる場合もあるため、料金相場や対応の早い業者を比較したうえでご判断ください。
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
                ["電話・Webでの相談", "品番と症状を控えたうえで、電話（0120-88-1081）またはWebの修理申込から相談します。"],
                ["訪問日時の調整", "都合の良い日時を調整し、出張修理の予約を行います。"],
                ["現地診断・見積もり", "技術者が状態を確認し、作業内容と費用を提示します。"],
                ["修理作業", "見積もり内容に同意した後、純正部品などを用いて修理を実施します。"],
                ["動作確認・支払い", "正常に動作することを確認し、支払い（保証対象の場合は無償となる場合があります）を行って完了です。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-brand)] text-white font-bold text-sm">{i + 1}</span>
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
              ダイキンコンタクトセンターは、空調メーカー直営窓口による正規対応・純正部品・全国を網羅するサービス網を強みとするメーカー公式窓口です。利用者個人の口コミは限定的ですが、ダイキン製エアコンを正規の方法で修理したい方にとって、有力な相談先です。年中無休の電話受付に加え、24時間365日のサポート体制やWeb修理相談も用意されています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、対象は原則としてダイキン製品に限られ、繁忙期は電話がつながりにくい場合や、訪問まで時間がかかる場合があります。保証期間や見積もり内容をご確認のうえ、ご自宅のエアコンに適した修理方法をお選びください。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">ダイキン製エアコンの故障でお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">ご利用前に、公式サイトにて相談方法と修理の流れをご確認ください。</p>
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
