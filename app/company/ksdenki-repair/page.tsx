import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ケーズデンキのエアコン修理依頼の方法｜WEB受付・出張修理料金・診断料の注意点と評判",
  description:
    "ケーズデンキのエアコン出張修理（運営：株式会社ケーズホールディングス）の料金・出張費・診断料の仕組みを、公式ページで確認しています（2026年7月11日確認）。症状が再現しない場合にも診断料・点検料・出張料がかかる場合があること、見積もり後のキャンセルによる診断料は保証外であること、長期無料保証との関係をご説明します。",
  alternates: { canonical: "/company/ksdenki-repair" },
};

const UPDATED = "2026年7月11日";

const toc = [
  { id: "summary", label: "ケーズデンキの出張修理とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "申込から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ケーズデンキのエアコン出張修理の申込方法を教えてください。",
    a: "エアコンなどの大型商品の修理は、ケーズデンキオンラインショップの「出張修理WEB受付フォーム」から申込みます（2026年7月11日公式確認）。症状・設置状況・製品情報などを入力して受付を進めます。受付・窓口はケーズデンキが担い、出張修理の対象は原則としてメーカーが出張修理対象としている商品で、メーカー修理を取り次ぐ形です。",
  },
  {
    q: "出張費や診断料はかかりますか？",
    a: "公式ページに「訪問後に故障症状が未再現の場合や修理をキャンセルされた場合も、診断料・点検料・出張料がかかる場合があります」と明記されています（2026年7月11日確認）。そのため、出張費・診断料は無料ではなく、修理が完了しない場合や修理を依頼しない場合にも費用が発生する可能性があります。具体的な金額は公式に記載がないため、申込時に費用の有無と金額をご確認ください。",
  },
  {
    q: "見積もりを確認したうえでキャンセルした場合、費用はかかりますか？",
    a: "一部メーカーの製品については「お見積りご提示後に修理をキャンセルされた場合、診断料を請求させていただくことがあります。この診断料は保証外となり、お客様にご負担いただきます」と公式に明記されています。見積もりのみで依頼を見送る場合も無料とは限らないため、申込前にキャンセル時の費用条件をご確認ください。",
  },
  {
    q: "長期無料保証やあんしんパスポートに入っていれば修理費は無料ですか？",
    a: "ケーズデンキで購入しあんしんパスポート（加入料・年会費無料）で長期無料保証に加入していれば、保証期間・保証範囲内の故障は無料修理の対象です。エアコンは購入金額10万円以上で10年・5万円以上で5年・3万円以上で3年（いずれもメーカー保証期間を含む）が目安です。ただし症状が未再現の場合やキャンセル時の診断料・点検料・出張料、付属品（リモコン等）は保証外です。保証切れは有料になります。",
  },
  {
    q: "実際に修理に来るのはケーズデンキの社員ですか？",
    a: "出張修理の受付・窓口はケーズデンキですが、出張修理の対象は原則としてメーカーが出張修理対象としている商品で、ケーズデンキはメーカー修理を取り次ぐ形です。訪問する担当者については、申込後の連絡でご確認ください。",
  },
  {
    q: "訪問までの日数と、急ぎの依頼への対応について教えてください。",
    a: "訪問日時は申込後の調整制で、即日・当日駆けつけを公称するサービスではありません。特に7〜8月の繁忙期はどの窓口も予約が取りにくくなります。エアコンが停止してお急ぎの場合は、24時間受付・最短即日対応を掲げる専門業者にも同時に見積もりを依頼し、到着が早い方に依頼する相見積もりをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ケーズデンキのエアコン修理の評判｜料金・出張費・診断料の調査結果【2026年7月】",
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
          { name: "ケーズデンキの出張修理の口コミ・評判", href: "/company/ksdenki-repair" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ケーズデンキのエアコン修理の評判
            <br className="hidden md:block" />
            料金・出張費・診断料の調査結果【2026年7月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-11">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="ksdenki-repair" name="ケーズデンキ 出張修理" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが急に効かなくなった、水漏れや異音が発生したといった場合、全国に店舗がある
            <strong className="font-semibold text-slate-900">ケーズデンキの出張修理</strong>
            は窓口が明確で、相談しやすい選択肢です。
            本記事では、運営会社の基本情報・料金の仕組み・口コミの傾向・依頼前に確認すべき点を、当サイトが公式ページを直接確認した内容（2026年7月11日確認）をもとに、良い点と注意すべき点の両面から中立的な立場でまとめています。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">本記事の要点</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・運営は東証プライム上場の<strong>株式会社ケーズホールディングス</strong>。窓口はケーズデンキで、<strong>出張修理はメーカー修理の取次</strong>が基本です</li>
              <li>・<strong>出張費・診断料は無料ではありません</strong>。公式に「症状が未再現でも・修理をキャンセルしても診断料・点検料・出張料がかかる場合がある」と明記されています（金額は非公開）</li>
              <li>・<strong>長期無料保証／あんしんパスポート加入品は、保証の範囲内であれば無料で修理を受けられます</strong>。ただし、保証切れや症状未再現時の費用は有料です。お急ぎの場合や料金を比較したい場合は、料金の実額を公開している業者との相見積もりをおすすめします（<Link href="/cost/price-index/" className="text-sky-700 underline">27社の料金調査一覧</Link>）</li>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ケーズデンキの出張修理とは</h2>
            <p className="leading-8 text-slate-700">
              ケーズデンキの出張修理は、全国に家電量販店「ケーズデンキ」を展開する<strong className="font-semibold">株式会社ケーズホールディングス</strong>が窓口となる、エアコンなどの家電の出張修理サービスです。エアコンのような大型商品の修理は、公式サイトの「出張修理WEB受付フォーム」から申込みでき、出張修理の対象は原則としてメーカーが出張修理対象としている商品です（メーカー修理の取次）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              大手量販店が受付を担うため問い合わせ先が明確で、ケーズデンキで購入した製品であれば、長期無料保証・あんしんパスポートとの連携により保証の範囲内で無料修理を受けられる点が最大の特徴です。冷えない・水漏れ・異音などのエアコントラブルに、自宅を訪問して対応します。
            </p>

            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
              <p className="font-bold text-slate-900 mb-1">公式サイトでの申込条件・費用の確認</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">出張修理WEB受付フォームから申込みできます。申込前に、診断料・出張料の有無をご確認ください。</p>
              <a href="https://www.ksdenki.co.jp/kshd/pages/support_repair.aspx" target="_blank" rel="noopener noreferrer" className="ac-btn ac-btn-primary px-7 py-3">
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
                    ["業態", "家電量販店による出張修理の受付（受付・窓口はケーズデンキ、メーカー修理を取次）"],
                    ["許認可の表示", "出張修理ページに建設業許可・電気工事業登録等の記載なし（2026年7月11日確認）"],
                    ["申込方法", "出張修理WEB受付フォーム（大型商品はWEB受付）"],
                    ["対応エリア", "全国（店舗網）"],
                    ["対応の早さ", "訪問日時は申込後の調整制（即日対応の公称なし）"],
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
              当サイトの方針として、口コミ本文の転載・創作は行わず、レビューサイト・体験談ブログ・Q&Aサイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・大手量販店で問い合わせ先が明確だったという声</li>
                  <li>・WEB受付フォームからの申込みがわかりやすかったという声</li>
                  <li>・購入品が保証期間内で、無料で修理してもらえたという声</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・直らなかった／症状が出なかったのに診断料・出張料を請求されたという声</li>
                  <li>・専門の緊急業者に比べて訪問までに日数がかかったという声</li>
                  <li>・担当者によって対応の丁寧さに差を感じたという声</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※複数のレビュー紹介サイト・体験談ブログ・Q&Aサイトに掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。作業品質・訪問までの日数は担当者や時期により差が出る場合があります。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向の多くは、想定外の診断料・出張料と、訪問までの日数に関するものです。いずれも申込時に<strong className="font-semibold">診断料・出張料の有無と金額、訪問の目安時期を確認</strong>することで、多くは防ぐことができます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>出張費・診断料は無料ではありません</strong>。公式に「訪問後に故障症状が未再現の場合や修理をキャンセルされた場合も、診断料・点検料・出張料がかかる場合があります」と明記されています（金額は非公開）。修理が完了しない場合や修理を依頼しない場合にも費用が発生する可能性がある点に、ご注意ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>見積もりのみで依頼を見送ると、診断料を請求される場合があります</strong>。一部メーカー製品について「お見積りご提示後にキャンセルした場合、診断料を請求（保証外・お客様負担）」と公式に明記されています。相見積もりを目的に利用する場合は、費用条件を事前にご確認ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>症状別の修理料金の実額は公式に掲載がありません</strong>。金額重視の方は実額を公開している業者との比較が前提になります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>無料修理は、ケーズデンキでの購入品で、保証期間内かつ保証範囲内の故障に限られます</strong>。保証切れ・付属品（リモコン等）・症状未再現時の費用は保証外のため、有料です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>訪問日時は調整制です</strong>。即日訪問の公称はなく、特に7〜8月の繁忙期は訪問まで日数がかかりやすいため、急ぎの故障には適していません</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>全国展開の大手量販店が窓口のため、相談先が明確です</li>
                  <li>ケーズデンキでの購入品は、長期無料保証・あんしんパスポートにより保証の範囲内で無料修理を受けられます</li>
                  <li>出張修理WEB受付フォームから申し込みできます</li>
                  <li>上場企業が運営しており、支払い・記録などの手続きが明確です</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>症状未再現・キャンセル時も診断料・点検料・出張料がかかる場合があります</li>
                  <li>修理料金の実額が非公開のため、事前の見積もり確認が必要です</li>
                  <li>保証切れの場合は有料で、割高になる傾向があります</li>
                  <li>訪問は調整制のため、急ぎの故障には適していません</li>
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
                  <li>ケーズデンキで購入し、長期無料保証・あんしんパスポートの保証期間内の方</li>
                  <li>大手家電量販店の窓口に相談したい方</li>
                  <li>急ぎではなく、日程を調整して依頼したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>診断・出張料をかけずに料金を最小限に抑えたい人（保証切れ）</li>
                  <li>事前に業者と料金を比較して選びたい方</li>
                  <li>即日の訪問が必要な急ぎのトラブルがある方</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意 */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は訪問可能な日時も比較の対象になります</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、ケーズデンキの出張修理に限らず、繁忙期はどの窓口も予約が取りにくくなります。修理を待つ間の熱中症のリスクを考慮し、料金だけでなく訪問可能な日時もあわせて確認することをおすすめします。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                保証対象外で急ぐ場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着が早い方に依頼する「相見積もり」が有効です。※対応の早さは地域・混雑状況により変動するため、受付時に到着の目安をご確認ください。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応の早さで業者を比較する →</Link>
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
                    ["症状別の修理実額", "公式に掲載なし"],
                    ["保証内修理", "ケーズ購入品×長期無料保証／あんしんパスポート加入×保証範囲内なら無料"],
                    ["エアコンの長期無料保証", "購入金額10万円以上で10年・5万円以上で5年・3万円以上で3年（メーカー保証期間を含む）"],
                    ["保証外の例", "保証切れ・付属品（リモコン等）・症状未再現時の費用"],
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
              ケーズデンキでの購入品で保証期間内であれば、あんしんパスポートと連携した長期無料保証により無料で修理を受けられる点が主な特徴です。一方、<strong className="font-semibold">保証切れの場合は、診断料・点検料・出張料まで含めると、街の修理業者のほうが費用が安く、対応も早い場合があります</strong>。症状別の実額を公開している業者と異なり、金額は現地での見積もりで決まるため、提示された見積もりを書面で受け取ることをおすすめします。費用の相場は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金調査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でご確認いただけます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は機種・症状・保証加入状況により変動します。正確な金額は申込・現地の見積もりでご確認ください（2026年7月11日時点の公式確認）。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-slate-900 mb-1">大手量販店と街の業者の費用比較</p>
              <p className="text-[0.95rem] leading-7 text-slate-700 mb-4">
                保証対象外の場合、診断料・点検料・出張料まで含めると、街の修理業者のほうが費用が安く、対応も早い場合があります。料金の相場や対応が早い業者を比較したうえでご判断ください。
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
                ["費用・条件の確認", "診断料・点検料・出張料の有無や金額、保証適用の可否を事前に確認します。"],
                ["訪問日時の調整", "都合の良い日時を調整し、担当者が訪問します。"],
                ["現地確認・見積もり", "担当者がエアコンの状態を確認し、作業内容と費用を提示します。"],
                ["修理作業・動作確認・支払い", "見積もり内容に同意したうえで修理を実施し、動作確認と支払いを済ませて完了です。"],
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
              ケーズデンキの出張修理は、東証プライム上場の株式会社ケーズホールディングスが窓口となり、WEB受付フォームから申し込める点が特徴です。ケーズデンキで購入し、長期無料保証・あんしんパスポートの保証期間内であれば、無料で修理を受けられます。一方で、症状が再現しない場合やキャンセル時にも診断・点検・出張料が発生する場合があり、これらは保証外・お客様負担と公式に明記されています。訪問日時は調整制のため、急ぎの故障には適していません。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              依頼時は「診断・出張料の有無と金額」「保証適用の可否」「訪問の目安時期」の3点を申込時に確認することで、量販店修理の注意点の多くは事前に解消できます。保証切れでお急ぎの場合は、複数の業者から見積もりを取り、料金と対応を比較したうえで選ぶことをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンの出張修理を検討している方へ</p>
              <p className="text-sky-100 text-sm mb-5">お申し込みの前に、診断料・出張料の有無と保証の適用可否をご確認ください。</p>
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
