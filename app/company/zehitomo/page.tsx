import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ゼヒトモの評判・口コミ・レビュー｜公式4.81とみん評2.84の違い、エアコン修理の料金【2026年11月】",
  description:
    "ゼヒトモ（株式会社Zehitomo）の評判を、公式のエアコン修理カテゴリのレビュー（4.81・2,730件）、みん評（2.84・230件）、App Store（3.7・3件）の3つで比較しました。評価が分かれる理由、利用者の手数料、症状別の費用目安を公式で確認してご説明します。",
  alternates: { canonical: "/company/zehitomo" },
};

const UPDATED = "2026年11月28日";

const toc = [
  { id: "conclusion", label: "結論：評判は3つの出典で分かれます" },
  { id: "summary", label: "ゼヒトモとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "ご利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ゼヒトモはどんな仕組みのサービスですか？",
    a: "ゼヒトモは、フォームに依頼内容を入力すると、登録しているプロ（業者）から見積もりや提案が届くマッチングサービスです。届いた提案を比較したうえで、依頼先を選べるのが特徴です。",
  },
  {
    q: "エアコンの修理にも対応していますか？",
    a: "対応しています。公式サイトにエアコン修理のカテゴリがあり、フォームから依頼できます（2026年10月24日確認）。ただし、依頼内容によって提案が届くプロは異なるため、フォーム入力時に内容を具体的に記入することで、より適した提案を受けやすくなります。",
  },
  {
    q: "ゼヒトモの評判は良いですか、悪いですか？",
    a: "出典によって大きく異なります。公式のエアコン修理カテゴリでは、依頼者が登録プロを評価したレビューが平均4.81（2,730件）と表示されています。一方、みん評は平均2.84（230件）で、その多くはプロ（事業者）として登録した側の投稿です。App Storeのアプリ評価は3.7（3件）です（いずれも2026年11月28日確認、みん評は11月13日に全件確認）。依頼者として判断する場合は、依頼候補のプロ個別のレビューを確認されることをおすすめします。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国に対応しています。登録しているプロのエリアによって、届く提案の数や日程が変わるため、お住まいの地域で対応できるプロがいるかをご確認ください。",
  },
  {
    q: "提案や見積もりを受け取るのに費用はかかりますか？",
    a: "かかりません。公式の料金ページでは、利用者の登録・依頼の作成・プロの採用はいずれも無料で、ゼヒトモに支払う手数料はなく、採用したプロに承諾した金額を支払う仕組みと記載されています（2026年11月28日確認）。一方、プロ（事業者）側には有料の課金があり、みん評ではその仕組みへの不満が多く投稿されています。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "料金は依頼するプロや作業内容によって異なります。複数の提案を比較できるため、内容と金額を比較してプロを選べます。追加作業が発生する場合は別途費用がかかることがあるため、事前に総額をご確認ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ゼヒトモの評判・口コミ・レビュー｜公式4.81とみん評2.84の違い、エアコン修理の料金【2026年11月】",
  datePublished: "2026-06-10",
  dateModified: "2026-11-28",
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
          { name: "ゼヒトモの口コミ・評判", href: "/company/zehitomo" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ゼヒトモの評判・口コミ・レビュー
            <br className="hidden md:block" />
            公式4.81とみん評2.84の違い、エアコン修理の料金【2026年11月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-28">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="zehitomo" name="ゼヒトモ" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコン修理の依頼先を決めかねている場合、複数のプロから提案を受け取って比較できるサービスを利用する方法があります。
            本記事では、フォーム入力でプロから相見積もり提案が届くマッチングサービス
            <strong className="font-semibold text-slate-900">ゼヒトモ</strong>
            について、みん評の口コミ230件の内訳とエアコンに関する口コミ、料金の考え方、対応エリアと特徴、メリット・デメリットを、評価される点と注意点の両面から中立的な立場でまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※当サイトでは、口コミ本文の転載・創作を控え、確認できた傾向の要約のみを掲載しています。料金や対応内容は時期・地域・依頼内容により変わるため、最新の情報はお申し込み時にご確認ください（口コミの確認：2026年11月13日）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">結論：評判は3つの出典で分かれます</h2>
            <p className="leading-8 text-slate-700 mb-5">
              ゼヒトモの評判は、<strong className="font-semibold">誰が何を評価しているか</strong>によって大きく異なります。公式のレビューは依頼者が担当したプロを評価したもの、みん評はプロ（事業者）として登録した側の投稿が中心です。依頼者として判断する場合は、公式の各プロのレビューと、みん評の依頼者側の投稿を分けてご覧ください。
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-[0.9rem]">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">出典</th>
                    <th className="text-left px-4 py-3 font-semibold">評価・件数</th>
                    <th className="text-left px-4 py-3 font-semibold">誰が何を評価しているか</th>
                    <th className="text-left px-4 py-3 font-semibold">確認日</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ゼヒトモ公式（エアコン修理カテゴリ）", "平均4.81・2,730件", "依頼者が、担当したエアコン修理のプロを評価（ゼヒトモが自社サイトに表示する値）", "2026年11月28日"],
                    ["みん評", "平均2.84・230件", "ゼヒトモ全体（全カテゴリ）。プロ（事業者）側の投稿が多く、エアコンに関する投稿は3件", "2026年11月13日（全件確認）"],
                    ["App Store（iPhoneアプリ）", "★3.7・3件", "アプリの評価（提供元 ZEHITOMO INC.・2026年8月公開）", "2026年11月28日"],
                  ].map((r, i) => (
                    <tr key={r[0]} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      {r.map((c, j) => (
                        <td key={j} className="px-4 py-3 border-t border-slate-100 align-top text-slate-700">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ゼヒトモ公式「エアコン修理業者を探す」ページの表示（プロ1,403人・評価4.81・2,730件）、<a href="https://minhyo.jp/zehitomo" target="_blank" rel="nofollow noopener noreferrer" className="underline underline-offset-2">みん評</a>、App Store（iTunes Search API で取得）。公式の値はゼヒトモ自身が集計・表示しているもので、当サイトでは件数の内訳を確認できていません。数値は日々変わります。</p>
          </section>

          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ゼヒトモとは</h2>
            <p className="leading-8 text-slate-700">
              ゼヒトモは、株式会社Zehitomo（東京都品川区・2015年設立）が運営するマッチングサービスです。フォームに依頼内容を入力すると、登録しているプロ（業者）から見積もりや提案が届く仕組みで、利用者は複数の提案を比較したうえで依頼先を選べます。エアコンの修理・取り付けをはじめ、暮らしのさまざまな依頼に対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトのエアコン修理カテゴリには、2026年11月28日時点で1,403人のプロが登録されています。依頼内容を入力すると最大5人のプロから提案を受けられる仕組みで、複数の業者を比較してから依頼先を決めたい方に適しています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ゼヒトモ"],
                    ["運営会社", "株式会社Zehitomo（2015年設立）"],
                    ["代表者", "代表取締役 三浦雄一郎"],
                    ["所在地", "東京都品川区西五反田7-22-17 TOCビル11階"],
                    ["サービス形態", "フォーム入力でプロから相見積もり提案が届くマッチング"],
                    ["対応エリア", "全国（登録プロのエリアにより変動）"],
                    ["主な対応内容", "エアコン修理・取り付けほか暮らしの依頼全般"],
                    ["エアコン修理のプロ数", "1,403人（公式カテゴリページ表示）"],
                    ["提案数", "最大5人のプロから提案"],
                    ["利用者の費用", "登録・依頼・採用は無料。ゼヒトモへの手数料なし（作業代金は採用したプロに支払い）"],
                    ["料金", "依頼するプロ・作業内容により変動（提案で確認可能）"],
                    ["公式サイト", "https://www.zehitomo.com/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ゼヒトモ公式の会社概要（/about）・ご利用料金（/fee）・トップページ・エアコン修理カテゴリページ（いずれも2026年11月28日確認）。対応エリアやサービス内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトでは、口コミ本文の転載・創作を控え、確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています。ゼヒトモについては、2026年11月13日にみん評の口コミ230件をすべて確認しました。満足度の内訳は、★5が11件・★4が3件・★3が6件・★2が17件・★1が142件・無評価が51件です。ただし、みん評の口コミはエアコンに限らずゼヒトモ全体のもので、<strong className="font-semibold">プロ（事業者）として登録した側の投稿が多くを占めます</strong>（有料の応募の仕組みや営業電話に関する内容など）。依頼者としての評判を知る目的では、件数の内訳をそのまま当てはめられない点にご留意ください。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
                <h3 className="font-bold text-amber-800 mb-3">エアコンに関する口コミ（3件）</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼者：エアコンの取付・電源工事の仕上がりが悪く、数日後にモールが落下したという内容（★1）</li>
                  <li>依頼者：エアコンを修理したがすぐに元に戻り、業者にもゼヒトモにも連絡がつかなかったという内容（無評価）</li>
                  <li>プロ側：エアコン取付の業者として登録したが、有料で連絡した依頼者から返信がなかったという内容（★1）</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">依頼者の好評の傾向（エアコン以外を含む）</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数のプロから提案が届き、予算に合う相手を選べたという内容</li>
                  <li>相見積もりで、大手と比べて費用を抑えられたという内容</li>
                  <li>依頼前に、プロごとの星付きレビューや写真を確認できて安心だったという内容</li>
                  <li>担当したプロの説明・作業が丁寧だったという内容（評価は依頼したプロ個人に向けたもの）</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※確認日：2026年11月13日（みん評のゼヒトモの口コミ230件・全カテゴリ）。上記は口コミ原文の転載ではなく、当サイトが全件を読んで分類した傾向の要約です。ゼヒトモはマッチング型のため、施工品質・対応は登録プロごとに異なります。依頼前に、各プロのプロフィール上のレビューと実績をご確認ください。以前掲載していた「フォーム入力のみで業者を探す手間を省ける」という傾向は、今回の確認で該当する口コミが1件にとどまったため、傾向としては掲載していません。</p>
            <p className="mt-2 text-xs text-slate-500">出典：<a href="https://minhyo.jp/zehitomo" target="_blank" rel="nofollow noopener noreferrer" className="underline underline-offset-2">みん評「Zehitomo（ゼヒトモ）の口コミ・評判」</a>（平均2.84・230件・2026年11月13日取得）。みん評は低い評価の投稿が多くなりやすいと同サイト自身が注記しています。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              利便性の高い仕組みである一方、プロから提案が届くマッチング型サービスという性質上、
              <strong className="font-semibold">依頼するプロによって対応や料金に差が生じる場合がある</strong>
              点にご留意ください。依頼時には以下の点をご確認ください。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>地域や依頼内容によって、届く提案の数や日程が変わる場合があります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>症状（エラー表示・発生時期・型番）を具体的に入力すると、プロが見積もりを出しやすくなります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>依頼前に、各プロの作業範囲と総額の見積もりを比較・確認することをおすすめします。</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数のプロから提案が届き、料金や対応を比較して選べます。</li>
                  <li>フォーム入力のみで提案が届くため、業者を探す手間を省けます。</li>
                  <li>全国対応で、暮らしの依頼に幅広く対応しています。</li>
                  <li>エアコン修理のカテゴリがあり、フォームから複数のプロに依頼できます。</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼するプロによって、対応や料金に差が生じる場合があります。</li>
                  <li>公式のレビューは依頼者がプロ個人を評価したもので、ゼヒトモ全体の評価ではありません。</li>
                  <li>料金は提案内容により異なるため、事前に見積もりを比較してください。</li>
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
                  <li>複数の業者を比較してから依頼先を決めたい方</li>
                  <li>業者を一から探す手間を省きたい方</li>
                  <li>料金や提案内容を十分に比較したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>即日の訪問が必要な緊急のトラブルがある方</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ゼヒトモの料金は、依頼するプロや作業内容によって異なります。フォーム入力後に
              <strong className="font-semibold">複数のプロから提案・見積もりが届く</strong>
              ため、内容と金額を比較してプロを選べる点が特徴です。追加作業が必要になった場合は、別途費用がかかることがあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理と買い替えで迷う場合もあるため、依頼前には各プロの作業範囲と総額の見積もりを確認したうえで依頼することをおすすめします。複数の提案を比較できる仕組みを活用し、料金と対応を比較してください。
            </p>
            <h3 className="mt-6 font-bold text-slate-800">ゼヒトモが掲載している症状別の費用・作業時間の目安</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-[0.9rem]">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">故障内容</th>
                    <th className="text-left px-4 py-3 font-semibold">費用の目安</th>
                    <th className="text-left px-4 py-3 font-semibold">作業時間の目安</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["電源が入らない", "2〜3.5万円", "30〜60分"],
                    ["エアコンから風が出ない", "0.9〜13万円", "60〜120分"],
                    ["冷暖房が効かない", "2.7〜10.5万円", "60〜120分"],
                    ["水漏れ", "0.8〜6万円", "30〜120分"],
                    ["室外機の故障", "2〜11万円", "60〜120分"],
                    ["リモコン操作が効かない", "0.6〜3.5万円", "10〜30分"],
                  ].map((r, i) => (
                    <tr key={r[0]} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      {r.map((c, j) => (
                        <td key={j} className="px-4 py-3 border-t border-slate-100 text-slate-700">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：ゼヒトモ公式「エアコン修理業者を探す」ページの「エアコン修理の費用と工事時間」（2026年11月28日確認）。ゼヒトモが掲載する一般的な目安で、実際の金額は届いた見積もりで決まります。同ページでは、10万円を超える場合は買い替えも検討するよう案内しています（<Link href="/cost/replace-vs-repair" className="underline underline-offset-2">修理と買い替えの比較</Link>）。</p>
            <p className="mt-3 text-xs text-slate-400">※料金は依頼するプロ・作業内容により異なります。正確な金額は届いた提案でご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["フォームへの入力", "依頼内容や症状、希望条件をフォームに入力します。"],
                ["プロからの提案", "登録しているプロから見積もりや提案が届きます。"],
                ["提案の比較・選択", "届いた提案を比較し、料金や対応を確認して依頼先を選びます。"],
                ["日程調整・作業", "選んだプロと日程を調整し、訪問・作業を実施します。"],
                ["確認・支払い", "仕上がりや動作を確認し、支払いを行って完了です。"],
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
              ゼヒトモは、フォーム入力で複数のプロから相見積もり提案が届くマッチングサービスで、料金や対応を比較してから依頼先を決められる点が強みです。みん評の口コミ230件（2026年11月13日確認）では、依頼者から複数の提案を比較して選べた点を評価する声がある一方、エアコンに関する依頼者の口コミ2件はいずれも不満の内容でした。一方で、依頼するプロによって対応や料金に差が生じる場合があるため、届いた提案を比較し、見積もりを確認してから依頼することをおすすめします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理の費用は症状によって異なります。お急ぎでない場合は複数の提案を比較し、料金と対応を確認してお選びください。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">複数の業者を比較して選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">フォームに入力すると、プロからの提案と費用の目安をご確認いただけます。</p>
              <a href="https://www.zehitomo.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ゼヒトモ公式サイトを見る
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
