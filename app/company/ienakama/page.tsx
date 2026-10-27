import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "家仲間コムの評判｜手数料・口コミ・仕組みの調査結果【2026年10月】",
  description:
    "家仲間コム（運営：株式会社マッチングジャパン）のエアコン工事・修理について、公式ページで確認した内容を掲載しています（2026年10月24日確認）。利用者の手数料は無料で、業者側が月額5,000円（成約手数料0円）を負担します。公式の価格相場、賠償責任保険の条件、登録業者による品質の差をご説明します。",
  alternates: { canonical: "/company/ienakama" },
};

const UPDATED = "2026年10月24日";

const toc = [
  { id: "summary", label: "家仲間コムとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金・手数料の仕組み" },
  { id: "flow", label: "依頼から施工完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "家仲間コムの利用に手数料はかかりますか？",
    a: "利用者側の見積もり依頼・利用は無料です。家仲間コムは登録業者から利用料を得て運営しており、利用者から手数料は取らない仕組みです（2026年10月24日 公式確認）。「家仲間コム 手数料」で関心が寄せられることが多いのは業者側の負担で、業者は月額5,000円（税別）を支払いますが、成約時の手数料（成約手数料）は一切かかりません。公式では「手数料がない分、工事代金が安くなる可能性があります」とされています（2026年10月24日・公式確認）。",
  },
  {
    q: "業者側の手数料はどのような仕組みですか？",
    a: "公式（業者向けページ）によると、初期費用は無料、月額5,000円（税別）、成約手数料は0円です。返信は月5案件まで無料で、6案件目以降は初回返信のみ300円（税別）と明記されています。多くのマッチングサイトが工事代金の10％前後の成約手数料を取るのに対し、家仲間コムは成約手数料をゼロにしている点が特徴です（2026年10月24日確認）。",
  },
  {
    q: "エアコン工事・修理の料金の目安を教えてください。",
    a: "家仲間コム公式の価格相場ページでは、エアコン取り付け・取り外し・工事・修理の見積もり事例1,902件をもとに、最低価格0.5万円〜、最多価格帯0.5万〜3万円と掲載されています（同ページの最終更新日は2026年3月26日・当サイトの確認は2026年10月24日）。取り付けと修理をまとめた集計のため、修理だけの相場ではありません。実際の金額は登録業者ごとの見積もりで決まるため、届いた見積もりの作業範囲と総額で確認してください。費用の相場は、当サイトの症状別の修理相場もご参照ください。",
  },
  {
    q: "施工でトラブルや家への損害があった場合の保証はありますか？",
    a: "公式には、工事でお客様の家に損害を与えた場合に最高1,000万円まで補償する賠償責任保険制度があると記載されています。保険利用の規約によると、これは本登録業者が無料で利用できる賠償責任保険（請負業者賠償責任保険・生産物賠償責任保険、身体・財物それぞれ最大1,000万円）で、対象は業者が工事開始前日までに保険申込みをした工事です。本登録後60日間は免責期間があり、保険金の支払い時には10万円の免責額相当がかかります。業者が申込みをしていない工事は対象外のため、全件が自動で対象になるわけではありません（2026年10月24日確認）。施工そのものの保証内容は担当する登録業者により異なるため、依頼前に保証範囲を業者へご確認ください。",
  },
  {
    q: "業者の質はどう担保されていますか？",
    a: "口コミ評価が低い業者は強制退会になると公式に明記されており、業者一覧では「おすすめ率が40%を下回った業者さんは家仲間コムから強制退会」と説明されています。一方で加盟店の審査基準は公式に開示されておらず、「厳選された優良業者」という表現にとどまります。運営会社は公式コラム（最終更新日2025年6月3日）で、2022年6月に投稿された業者による詐欺被害の訴えについて謝罪し、2023年10月に株式会社ユニソンプラネットが同社を子会社化して運営を引き継いだこと、運営体制の見直しに努めていることを説明しています。マッチング型サービスのため、依頼前に複数業者の見積もりと口コミを比較して選ぶことが前提になります。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国の登録業者が対応しています（月間約30万人以上が利用と公称）。ただし、地域によって登録業者の数や対応の早さが異なるため、依頼時に対応可否をご確認ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "家仲間コムの評判｜手数料・口コミ・仕組みの調査結果【2026年10月】",
  datePublished: "2026-06-10",
  dateModified: "2026-10-24",
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
          { name: "家仲間コムの口コミ・評判", href: "/company/ienakama" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン工事・修理サービスレビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            家仲間コムの評判
            <br className="hidden md:block" />
            手数料・口コミ・仕組みの調査結果【2026年10月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-24">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="ienakama" name="家仲間コム" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの取り付け・移設・修理を依頼する際には、料金と対応を比較してから依頼先を選ぶことが大切です。
            本記事では、エアコン工事・修理の業者マッチングサイト
            <strong className="font-semibold text-slate-900">家仲間コム</strong>
            について、当サイトが公式ページを直接確認した内容（2026年10月24日確認）をもとに、手数料の仕組み・口コミの傾向・利用前に確認すべき点を、良い点と注意すべき点の両面から中立的な立場でまとめています。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">本記事の要点</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>利用者の手数料は無料</strong>です。手数料は業者側が負担する仕組みで、業者の負担は<strong>月額5,000円（税別）のみで、成約手数料は0円</strong>です。公式では「手数料がない分、工事代金が安くなる可能性があります」とされています（公式確認）</li>
              <li>・<strong>登録業者を紹介するマッチングプラットフォーム（紹介型）</strong>です。施工は登録業者が行うため、対応品質・保証は業者により差が出ます。エアコン工事のカテゴリには<strong>1,071社</strong>が掲載されています（公式エアコンページの表示・2026年10月27日確認）</li>
              <li>・工事で家に損害が出た場合の<strong>最大1,000万円の賠償責任保険がありますが、条件付き（業者が工事開始前日までに申込みした工事が対象）です</strong>。過去に業者によるトラブル事案もあったため、<strong>複数業者の見積もりと口コミの比較をおすすめします</strong>（<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年10月24日に公式ページで確認した内容です（エアコンカテゴリの掲載業者数は2026年10月27日確認）。口コミの傾向は2026年7月12日の調査です。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">家仲間コムとは</h2>
            <p className="leading-8 text-slate-700">
              家仲間コムは、エアコンの取り付け・取り外し・移設・修理・クリーニングなどを依頼したい人と、施工業者をつなぐ<strong className="font-semibold">業者マッチングサイト</strong>です。利用者は匿名で一括見積もりを依頼し、登録している業者から返信を受け取って比較できます。運営は株式会社マッチングジャパンで、月間約30万人以上が利用すると公称しています（2026年10月24日 公式確認）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              最大の特徴は、<strong className="font-semibold">業者から成約手数料を取らない仕組み</strong>である点です。多くのマッチングサイトが工事代金の10％前後を成約手数料として業者から徴収するのに対し、家仲間コムは成約手数料をゼロにしており、公式では「手数料がない分、工事代金が安くなる可能性があります」と説明されています。評価の低い業者は強制退会になる仕組みもあります。
            </p>
            <div className="mt-6 rounded-2xl bg-sky-50 border border-sky-100 p-6 text-center">
              <p className="font-bold text-slate-900 mb-1">エアコン工事・修理を比較して頼みたい方へ</p>
              <p className="text-slate-600 text-sm mb-4">利用者の見積もり依頼は無料です。複数業者の料金と対応を比較してから選べます。</p>
              <a href="https://www.ienakama.com/aircon/" target="_blank" rel="noopener noreferrer" className="ac-btn ac-btn-primary px-7 py-3">
                家仲間コム公式で無料見積もりを見る
              </a>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "家仲間コム（エアコン工事・修理）"],
                    ["運営会社", "株式会社マッチングジャパン（設立2006年7月3日・資本金1,000万円・株式会社ユニソンプラネットの100%子会社）"],
                    ["所在地", "大阪市阿倍野区阿倍野筋1-1-43 あべのハルカス32F（〒545-6032）"],
                    ["問い合わせ", "お問い合わせフォームのみ（家仲間コムに関する電話での問い合わせは受け付けていないと会社概要に記載）"],
                    ["サービス形態", "業者マッチングプラットフォーム（匿名で一括見積もり依頼→登録業者が返信・施工）"],
                    ["許認可の表示", "公式に建設業許可・電気工事業登録等の記載なし（施工は登録業者が行い、各社の許認可は個別確認・2026年10月24日確認）"],
                    ["対応エリア", "全国（登録業者が対応。地域により業者数・対応の早さに差）"],
                    ["利用者数", "月間約30万人以上（公称）"],
                    ["利用者の費用", "見積もり依頼・利用は無料（手数料は業者側が負担）"],
                    ["損害補償", "本登録業者が無料で利用できる賠償責任保険（身体・財物それぞれ最大1,000万円）。業者が工事開始前日までに申込みした工事が対象・本登録後60日は免責期間"],
                    ["公式サイト", "https://www.ienakama.com/aircon/（リンク稼働・2026年10月24日確認）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイト（<a href="https://www.ienakama.com/company/" target="_blank" rel="noopener noreferrer" className="underline">会社概要</a>・<a href="https://www.ienakama.com/about/" target="_blank" rel="noopener noreferrer" className="underline">家仲間コムについて</a>・<a href="https://www.ienakama.com/d/" target="_blank" rel="noopener noreferrer" className="underline">業者向けページ</a>・<a href="https://www.ienakama.com/d/rules/" target="_blank" rel="noopener noreferrer" className="underline">保険利用における規約</a>）の掲載情報（2026年10月24日確認）。利用者数や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、公式掲載の利用者の声・第三者レビューサイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています（2026年7月12日調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・対応が丁寧・誠実だった、作業が迅速だったという声</li>
                  <li>・他社より金額が安かった、比較して選べて納得できたという声</li>
                  <li>・写真見積もり・日程調整の早さへの評価</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・業者と連絡が取れないなどのトラブル報告</li>
                  <li>・担当する登録業者によって対応に差が出たという声</li>
                  <li>・加盟店の審査基準が公開されておらず、業者選びは利用者の判断に委ねられるという指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※出典：公式サイト掲載の利用者の声、および第三者レビューサイト（リフォーム比較jp／ninenail.com／リフォームのマニュアル 等）の掲載内容の傾向を当サイトで整理したものです（2026年7月12日調査）。個別の体験を保証するものではありません。マッチング型のため実際の作業品質は担当する登録業者により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向の多くは、担当業者による対応の差と連絡に関するトラブルです。マッチング型サービスのため、<strong className="font-semibold">依頼前に複数業者の見積もりと口コミを比較し、作業範囲と総額を書面で記録する</strong>ことで、リスクの多くは抑えられます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する工事作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>実際の施工は登録業者が行います</strong>（紹介型）。家仲間コムは見積もりの場を提供する立場であり、作業品質・対応・保証は担当業者により差が出ます</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>加盟店の審査基準は公式に開示されていません</strong>。「厳選された優良業者」との表現はありますが基準は非公開で、低評価業者の強制退会という事後的な仕組みが中心です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>最大1,000万円の賠償責任保険には条件があります</strong>——本登録業者が無料で利用できる賠償責任保険（請負業者賠償責任保険・生産物賠償責任保険、身体・財物それぞれ最大1,000万円）で、対象は業者が工事開始前日までに保険申込みをした工事です。本登録後60日間は免責期間があり、保険金の支払い時には10万円の免責額相当がかかります（保険利用における規約・2026年10月24日確認）。全件が自動で対象になるわけではありません。施工自体の保証は業者ごとに異なるため、依頼前にご確認ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>過去に業者による詐欺被害の訴えがあり</strong>、運営会社が<a href="https://www.ienakama.com/tips/page/?tid=2631" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">公式コラム</a>（最終更新日2025年6月3日）で謝罪し、2023年10月の運営引き継ぎ以降の運営体制の見直しを説明しています。利用者側でも、複数の見積もりと口コミの確認によりリスクを抑えることが重要です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>公式の価格相場は、取り付け・取り外し・工事・修理をまとめた集計です</strong>（見積もり事例1,902件・最多価格帯0.5万〜3万円）。症状別の修理相場は掲載されていないため、金額は届いた見積もりで確認する必要があります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span>見積書を郵送で受け取る場合は住所開示が必要で、成約に至らなかった業者から営業DMが届く場合があります（公式は電子データでの比較を推奨）</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>利用者は無料。成約手数料がない分、工事代金が安くなる可能性があります（公式）</li>
                  <li>複数の業者から見積もりが届き、料金・対応を比較して選べます</li>
                  <li>写真をもとにした見積もり・日程調整が速いという声があります</li>
                  <li>おすすめ率が40%を下回った業者は強制退会となる仕組みがあります</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>施工は登録業者が行うため、対応品質・保証に差が出ます</li>
                  <li>加盟店の審査基準が公開されておらず、業者選びは利用者の判断に委ねられます</li>
                  <li>公式の価格相場は取り付けと修理をまとめた集計のため、修理の金額は複数の見積もりを比較して確かめる必要があります</li>
                  <li>賠償責任保険には条件があります（業者が工事開始前日までに申込みした工事が対象です）</li>
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
                  <li>料金や対応を比較したうえで依頼先を選びたい方</li>
                  <li>取り付け・移設など工事費をできるだけ抑えたい方</li>
                  <li>写真を送って早めに見積もりを取りたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>即日の訪問が必要な急ぎのトラブルがある方</li>
                  <li>窓口が施工まで一括で保証する体制を求める方</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金・手数料の仕組み（2026年10月24日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["利用者の見積もり依頼", "無料"],
                    ["利用者のマッチング手数料", "なし（無料）"],
                    ["業者の初期費用", "無料"],
                    ["業者の月額利用料", "5,000円（税別）"],
                    ["業者の成約手数料", "なし（0円）※他社は工事代金の10％前後が一般的"],
                    ["業者の返信手数料", "月5案件まで無料／6案件目以降は初回返信のみ300円（税別）"],
                    ["公式の価格相場", "見積もり事例1,902件：最低価格0.5万円〜・最多価格帯0.5万〜3万円（取り付け・取り外し・工事・修理の合計・同ページ最終更新2026年3月26日）"],
                    ["症状別の修理実額", "掲載なし（登録業者の見積もりによる）"],
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
              「家仲間コム 手数料」で検索される方が多く見られますが、<strong className="font-semibold">利用者に手数料はかからず、負担するのは業者側</strong>です。また、業者の負担は月額5,000円（税別）のみで<strong className="font-semibold">成約手数料が0円</strong>のため、公式では「手数料がない分、工事代金が安くなる可能性があります」とされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお、家仲間コム公式の<a href="https://www.ienakama.com/aircon/price/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">価格相場ページ</a>は、エアコンの取り付け・取り外し・工事・修理をまとめた見積もり事例1,902件の集計（最多価格帯0.5万〜3万円）で、症状別の修理の金額は掲載されていません。実際の金額は登録業者の見積もりで決まります。費用の相場は当サイトの<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>と<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの比較</Link>でご確認いただけます。
            </p>
          </section>

          <div className="rounded-2xl bg-sky-50 border border-sky-100 p-6 text-center">
            <p className="font-bold text-slate-900 mb-1">無料の見積もり取り寄せ</p>
            <p className="text-slate-600 text-sm mb-4">利用者の手数料は無料です。複数業者の料金と対応を比較してから決められます。</p>
            <a href="https://www.ienakama.com/aircon/" target="_blank" rel="noopener noreferrer" className="ac-btn ac-btn-primary px-7 py-3">
              家仲間コム公式で無料見積もりを見る
            </a>
          </div>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から施工完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["サイトで依頼内容を入力", "エアコンの作業内容や状況、写真などを入力し、匿名で一括見積もりを依頼します。"],
                ["業者から見積もりが到着", "登録業者から見積もりが届きます。写真見積もりの対応が速いと評価されています。"],
                ["見積もりの比較・依頼先の選定", "料金・対応・口コミを比較し、納得できる業者を選びます。作業範囲と総額もあわせて確認します。"],
                ["日程調整・施工", "都合の良い日時を調整し、選んだ登録業者が作業を行います。"],
                ["動作確認・支払い", "正常に動作することを確認し、業者への支払いを済ませて完了です。"],
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
              家仲間コムは、利用者の手数料が無料で、業者から成約手数料を取らない仕組みで、その分工事代金が安くなる可能性がある（公式）業者マッチングサイトです。写真見積もり・日程調整の速さや、複数社を比較して選べる点が強みです。一方で、施工は登録業者が行うため対応品質や保証に差が出やすく、加盟店の審査基準は公開されておらず、賠償責任保険も業者の申込みが条件であるといった注意点があります。依頼時は「複数業者の見積もり・口コミを比較」「作業範囲と総額を書面で確認」「保証範囲を業者へ確認」の3点を確認することで、この種のサービスの注意点の多くは事前に解消できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン工事・修理は作業内容によって費用が変わります。お急ぎでない場合は、複数の見積もりを比較し、料金と対応をふまえて選ぶことをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコン工事・修理を比較して頼みたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">利用者の手数料は無料です。見積もりを取り寄せ、料金と対応の目安をご確認ください。</p>
              <a href="https://www.ienakama.com/aircon/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                家仲間コム公式サイトを見る
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
