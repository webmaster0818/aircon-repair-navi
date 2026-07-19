import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ケーズデンキの出張修理料金はいくら？診断料の落とし穴と評判を実査【2026年7月】",
  description:
    "ケーズデンキのエアコン出張修理（運営: 株式会社ケーズホールディングス）の料金・出張費・診断料の仕組みを当サイトが公式ページで実査（2026年7月11日確認）。症状が再現しなくても診断料・点検料・出張料がかかる落とし穴、見積もり後キャンセルの診断料は保証外である点、長期無料保証・あんしんパスポートとの関係、口コミの傾向まで正直に解説します。",
  alternates: { canonical: "/company/ksdenki-repair" },
};

const UPDATED = "2026年7月11日";

const toc = [
  { id: "summary", label: "ケーズデンキ 出張修理とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "申込から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ケーズデンキのエアコン出張修理はどうやって申し込みますか？",
    a: "エアコンなどの大型商品の修理は、ケーズデンキオンラインショップの「出張修理WEB受付フォーム」から申込みます（2026年7月11日公式確認）。症状・設置状況・製品情報などを入力して受付を進めます。受付・窓口はケーズデンキが担い、実際の出張修理作業は委託業者が対応する形です。",
  },
  {
    q: "出張費や診断料はかかりますか？無料ですか？",
    a: "公式ページに「訪問後に故障症状が未再現の場合や修理をキャンセルされた場合も、診断料・点検料・出張料がかかる場合があります」と明記されています（2026年7月11日確認）。つまり出張費・診断料は無料ではなく、直らなくても・頼まなくても費用が発生しうる仕組みです。ただし具体的な金額は公式に記載がないため、申込時に有無と金額を必ず確認しましょう。",
  },
  {
    q: "見積もりを見てからキャンセルしても大丈夫ですか？",
    a: "一部メーカーの製品については「お見積りご提示後に修理をキャンセルされた場合、診断料を請求させていただくことがあります。この診断料は保証外となり、お客様にご負担いただきます」と公式に明記されています。見積もりだけ取って断る＝完全無料とは限らないため、申込前にキャンセル時の費用条件を確認しておくのが安全です。",
  },
  {
    q: "長期無料保証やあんしんパスポートに入っていれば修理費は無料ですか？",
    a: "ケーズデンキで購入しあんしんパスポート（加入料・年会費無料）で長期無料保証に加入していれば、保証期間・保証範囲内の故障は無料修理の対象です。エアコンは購入金額10万円以上で10年・5万円以上で5年・3万円以上で3年（いずれもメーカー保証期間を含む）が目安です。ただし症状が未再現の場合やキャンセル時の診断料・点検料・出張料、付属品（リモコン等）は保証外です。他店購入品・保証切れは有料になります。",
  },
  {
    q: "実際に修理に来るのはケーズデンキの社員ですか？",
    a: "出張修理の受付・窓口はケーズデンキですが、実際の作業は委託業者が対応する形とされています。そのため担当する業者によって対応スピードや説明の丁寧さに差が出ることがあります。大手の窓口を通す安心感がある一方、作業品質は担当業者次第という構造的な特徴があります。",
  },
  {
    q: "どのくらいで来てくれますか？急ぎでも対応できますか？",
    a: "訪問日時は申込後の調整制で、即日・当日駆けつけを公称するサービスではありません。特に7〜8月の繁忙期はどの窓口も予約が取りにくくなります。エアコンが止まって急ぐ場合は、24時間受付・最短即日をうたう専門業者にも同時に見積もりを取り、到着が早い方に頼む相見積もりが現実的です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ケーズデンキのエアコン修理の評判は？料金・出張費・診断料を実査【2026年7月】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-11",
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
          { name: "ケーズデンキ 出張修理の口コミ・評判", href: "/company/ksdenki-repair" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ケーズデンキのエアコン修理の評判は？
            <br className="hidden md:block" />
            料金・出張費・診断料を実査【2026年7月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-11">最終更新：{UPDATED}</time>
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
            エアコンが急に効かなくなったり、水漏れや異音が起きたとき、全国に店舗がある
            <strong className="font-semibold text-slate-900">ケーズデンキの出張修理</strong>
            は窓口がはっきりしていて相談しやすい選択肢です。
            この記事では、運営会社の基本情報・料金の仕組み・口コミの傾向・依頼前に確認すべき点を、当サイトが公式ページを直接確認した事実（2026年7月11日実査）をもとに、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・運営は東証プライム上場の<strong>株式会社ケーズホールディングス</strong>。窓口はケーズデンキ、<strong>実際の出張修理は委託業者</strong>が対応します</li>
              <li>・<strong>出張費・診断料は無料ではありません</strong>。公式に「症状が未再現でも・修理をキャンセルしても診断料・点検料・出張料がかかる場合がある」と明記（金額は非公開）</li>
              <li>・<strong>長期無料保証／あんしんパスポート加入品は保証内なら無料修理</strong>。ただし他店購入品・保証切れ・症状未再現の費用は有料です。急ぎ・料金比較重視なら実額公開業者との相見積もりが安全（<Link href="/cost/price-index/" className="text-sky-700 underline">27社の料金実査一覧</Link>）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月11日にケーズデンキ公式サイト（修理・長期無料保証・あんしんパスポート各ページ）で確認した内容です。</p>
          </div>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ケーズデンキ 出張修理とは</h2>
            <p className="leading-8 text-slate-700">
              ケーズデンキの出張修理は、全国に家電量販店「ケーズデンキ」を展開する<strong className="font-semibold">株式会社ケーズホールディングス</strong>が窓口となる、エアコンなどの家電の出張修理サービスです。エアコンのような大型商品の修理は、公式サイトの「出張修理WEB受付フォーム」から申込みでき、実際の作業は委託業者が対応する形となっています（2026年7月11日公式確認）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大手量販店が受付を担うため問い合わせ先がはっきりしていて相談しやすく、ケーズデンキで購入した製品なら長期無料保証・あんしんパスポートとの連携で保証内なら無料修理が受けられる点が最大の特徴です。冷えない・水漏れ・異音などのエアコントラブルに、自宅を訪問して対応します。
            </p>

            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
              <p className="font-bold text-slate-900 mb-1">まずは公式で申込条件・費用を確認</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">出張修理WEB受付フォームから申込みできます。申込前に診断料・出張料の有無を確認しておきましょう。</p>
              <a href="https://www.ksdenki.co.jp/kshd/pages/support_repair.aspx" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-sky-700 px-7 py-3 font-bold text-white hover:bg-sky-800 transition-colors">
                ケーズデンキ公式（修理案内）を見る
              </a>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ケーズデンキ 出張修理"],
                    ["運営会社", "株式会社ケーズホールディングス（東証プライム上場・証券コード8282）"],
                    ["本社所在地", "茨城県水戸市城南二丁目7番5号"],
                    ["業態", "家電量販店による出張修理（受付・窓口はケーズデンキ、実作業は委託業者が実施）"],
                    ["許認可の表示", "出張修理ページに建設業許可・電気工事業登録等の記載なし（施工する委託業者の許認可も非開示・2026年7月11日確認）"],
                    ["申込方法", "出張修理WEB受付フォーム（大型商品はWEB受付）"],
                    ["対応エリア", "全国（店舗網・委託業者が対応）"],
                    ["対応スピード", "訪問日時は申込後の調整制（即日対応の公称なし）"],
                    ["保証", "ケーズデンキ購入品は長期無料保証／あんしんパスポート（加入料・年会費無料）と連携"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ケーズホールディングス公式会社概要・修理案内ページ、Wikipedia「ケーズホールディングス」（2026年7月11日確認）。受付条件や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、レビューサイト・体験談ブログ・Q&Aサイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・大手量販店で問い合わせ先がはっきりしていて安心して任せられた</li>
                  <li>・WEB受付フォームからの申込みがわかりやすかった</li>
                  <li>・購入品が保証期間内で、無料で修理してもらえた</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・直らなかった／症状が出なかったのに診断料・出張料を請求された</li>
                  <li>・専門の緊急業者に比べて訪問までに日数がかかった</li>
                  <li>・委託業者が来るため、対応の丁寧さに差を感じた</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※複数のレビュー紹介サイト・体験談ブログ・Q&Aサイトに掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。実作業は委託業者が担当するため、作業品質・訪問スピードは担当業者により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向の多くは「診断・出張料の想定外」と「訪問までの日数」に関するものです。いずれも申込時に<strong className="font-semibold">診断料・出張料の有無と金額、訪問の目安時期を確認</strong>しておくだけで、大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>出張費・診断料は無料ではありません</strong>。公式に「訪問後に故障症状が未再現の場合や修理をキャンセルされた場合も、診断料・点検料・出張料がかかる場合があります」と明記（金額は非公開）。直らなくても・頼まなくても費用が発生しうる点が量販店修理の要注意ポイントです</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>見積もりだけ取って断ると診断料を請求される場合があります</strong>。一部メーカー製品は「お見積りご提示後にキャンセルした場合、診断料を請求（保証外・お客様負担）」と公式明記。相見積もり目的の利用は費用条件の事前確認が前提です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>症状別の修理料金の実額は公式に掲載がありません</strong>。機種・症状で変動し、金額は現地見積もりで確定します。金額重視の方は実額を公開している業者との比較が前提になります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>無料修理は「ケーズ購入品×保証期間内×保証範囲内」に限られます</strong>。他店購入品・保証切れ・付属品（リモコン等）・症状未再現時の費用は保証外＝有料です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>実作業は委託業者・訪問は調整制です</strong>。即日駆けつけの公称はなく、特に7〜8月の繁忙期は訪問まで日数がかかりやすいため、急ぎの故障には向きません</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>全国展開の大手量販店が窓口で、相談先がはっきりしていて安心感がある</li>
                  <li>ケーズ購入品は長期無料保証・あんしんパスポートで保証内なら無料修理</li>
                  <li>出張修理WEB受付フォームから手軽に申込みできる</li>
                  <li>上場企業が運営し、支払い・記録などの手続きが明快</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>症状未再現・キャンセル時も診断料・点検料・出張料がかかる場合がある</li>
                  <li>修理料金の実額が非公開で、事前の見積もり確認が前提</li>
                  <li>他店購入品・保証切れは有料で、割高になりやすい</li>
                  <li>実作業は委託業者・訪問は調整制のため、急ぎの故障には不向き</li>
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
                  <li>ケーズデンキで購入し、長期無料保証・あんしんパスポートの保証期間内の人</li>
                  <li>大手家電量販店の窓口に安心して相談したい人</li>
                  <li>急ぎではなく、日程を調整して落ち着いて対応したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>診断・出張料をかけずに料金を最小限に抑えたい人（他店購入・保証切れ）</li>
                  <li>あらかじめ業者と料金をじっくり比較して選びたい人</li>
                  <li>その場で即日駆けつけてほしい急ぎのトラブルがある人</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意 */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は「いつ来てもらえるか」も比較を</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、ケーズデンキの出張修理に限らず、繁忙期はどの窓口も予約が取りにくくなります。故障したエアコンを待つ間の熱中症リスクを考えると、「どこが安いか」だけでなく「いつ来てもらえるか」を並行して確認するのが現実的です。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                保証対象外で急ぐ場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着が早い方に頼む「相見積もり」が有効です。※対応スピードは地域・混雑状況で変動するため、受付時に到着目安の確認をおすすめします。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応スピードで業者を比較する →</Link>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月11日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張費・診断料・点検料", "有料になる場合あり（症状未再現・キャンセル時も発生しうると公式明記／金額は非公開）"],
                    ["見積もり後キャンセル", "一部メーカー製品は診断料を請求（保証外・お客様負担と公式明記）"],
                    ["症状別の修理実額", "公式に掲載なし（機種・症状で変動、現地見積もりで確定）"],
                    ["保証内修理", "ケーズ購入品×長期無料保証／あんしんパスポート加入×保証範囲内なら無料"],
                    ["エアコンの長期無料保証", "購入金額10万円以上で10年・5万円以上で5年・3万円以上で3年（メーカー保証期間を含む）"],
                    ["保証外の例", "他店購入品・保証切れ・付属品（リモコン等）・症状未再現時の費用"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-8 text-slate-700">
              ケーズデンキ購入品で保証期間内なら、あんしんパスポート連携の長期無料保証で無料修理が受けられるのが最大の強みです。一方、<strong className="font-semibold">他店購入品や保証切れの場合は、診断・点検・出張料まで含めると街の修理業者のほうが安く早いケースもあります</strong>。症状別の実額を公開している業者と違い、金額は現地見積もりで決まるため、提示された見積もりを書面で残すのが自衛の要点です。相場感は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は機種・症状・保証加入状況により変動します。正確な金額は申込・現地の見積もりでご確認ください（2026年7月11日時点の公式確認）。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">大手量販店 vs 街の業者、どっちが安い？</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                診断・点検・出張料まで含めると、保証対象外なら街の修理業者のほうが安く早いケースもあります。実際の料金相場や、対応が早い業者を比較してから判断すると失敗を防げます。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申込から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["WEB受付フォームから申込み", "出張修理WEB受付フォームから、症状や設置状況、製品情報を入力して申込みます。"],
                ["費用・条件の確認", "診断料・点検料・出張料の有無や金額、保証適用の可否を事前に確認しておくと安心です。"],
                ["訪問日時の調整", "都合の良い日時を調整し、委託業者が訪問します。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業・動作確認・支払い", "見積もりに納得後に修理を実施し、動作を確認して支払いをして完了です。"],
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
              ケーズデンキの出張修理は、東証プライム上場の株式会社ケーズホールディングスが窓口となり、WEB受付フォームから手軽に申し込める安心感が強みです。ケーズで購入し長期無料保証・あんしんパスポートの保証期間内なら、無料修理が受けられます。一方で、症状が再現しない場合やキャンセル時にも診断・点検・出張料が発生する場合があり、これらは保証外・お客様負担と公式に明記されています。実作業は委託業者・訪問は調整制のため、急ぎの故障には向きません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              依頼時は「診断・出張料の有無と金額」「保証適用の可否」「訪問の目安時期」の3点を申込時に確認すれば、量販店修理の弱点はほぼカバーできます。他店購入品・保証切れで急ぐ場合は、複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンの出張修理を検討している方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは申込み前に、診断・出張料の有無と保証適用を確認してみましょう。</p>
              <a href="https://www.ksdenki.co.jp/kshd/pages/support_repair.aspx" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ケーズデンキ公式サイトを見る
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
