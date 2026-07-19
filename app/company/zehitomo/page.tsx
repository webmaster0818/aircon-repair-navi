import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ゼヒトモの評判は？エアコン修理の口コミ・料金・仕組みを実査【2026年7月】",
  description:
    "ゼヒトモ（運営: 株式会社Zehitomo）のエアコン修理の評判・口コミの傾向・料金の考え方を実査。フォーム入力でプロから相見積もり提案が届くマッチングの仕組み、依頼者は無料で提案を受け取れる点、プロごとに料金・対応が変わる注意点まで中立的に解説します。",
  alternates: { canonical: "/company/zehitomo" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "ゼヒトモとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
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
    a: "対応しています。2025年6月の人気依頼ランキングではエアコン修理が3位に入っており、実績が蓄積されています。ただし依頼内容によって提案が届くプロは異なるため、フォーム入力時に内容を具体的に伝えておくと、より適した提案が得られます。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国に対応しています。登録しているプロのエリアによって、届く提案の数や日程が変わるため、お住まいの地域で対応できるプロがいるかを確認しておきましょう。",
  },
  {
    q: "提案や見積もりを受け取るのに費用はかかりますか？",
    a: "提案を受け取る段階では、利用者側に費用は基本的にかかりません。実際の作業料金は依頼するプロによって異なるため、提案内容と総額を確認したうえで依頼するのがおすすめです。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "料金は依頼するプロや作業内容によって異なります。複数の提案を比較できるため、内容と金額を見比べて納得のいくプロを選べます。追加作業が発生する場合は別途費用がかかることがあるため、事前に総額を確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ゼヒトモの評判は？エアコン修理の口コミ・料金・仕組みを実査【2026年7月】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-19",
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
            ゼヒトモの評判は？
            <br className="hidden md:block" />
            エアコン修理の口コミ・料金・仕組みを実査【2026年7月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-19">最終更新：{UPDATED}</time>
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
            エアコンの修理を依頼したいけれど、どの業者に頼めばよいか分からない。そんなときに、複数のプロから提案を受け取って比較できるサービスは便利です。
            この記事では、フォーム入力でプロから相見積もり提案が届くマッチングサービス
            <strong className="font-semibold text-slate-900">ゼヒトモ</strong>
            について、口コミ・評判の傾向、料金の考え方、対応エリアや特徴、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※当サイトは口コミ本文の転載・創作を行わず、確認できた傾向の要約のみを掲載しています。料金や対応内容は時期・地域・依頼内容により変わるため、最新の情報は申し込み時にご確認ください（最終確認：2026年7月19日）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ゼヒトモとは</h2>
            <p className="leading-8 text-slate-700">
              ゼヒトモは、株式会社Zehitomo（東京都品川区・2015年設立）が運営するマッチングサービスです。フォームに依頼内容を入力すると、登録しているプロ（業者）から見積もりや提案が届く仕組みで、利用者は複数の提案を比較したうえで依頼先を選べます。エアコンの修理・取り付けをはじめ、暮らしのさまざまな依頼に対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              2025年6月の人気依頼ランキングではエアコン修理が3位に入っており、実績が蓄積されています。全国に対応しており、複数の業者を比較してから依頼先を決めたいという人に向いています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ゼヒトモ"],
                    ["運営会社", "株式会社Zehitomo（東京都品川区・2015年8月設立）"],
                    ["サービス形態", "フォーム入力でプロから相見積もり提案が届くマッチング"],
                    ["実績", "2025年6月の人気依頼ランキングでエアコン修理が3位"],
                    ["対応エリア", "全国（登録プロのエリアにより変動）"],
                    ["主な対応内容", "エアコン修理・取り付けほか暮らしの依頼全般"],
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
            <p className="mt-3 text-xs text-slate-400">出典：公式・関連サイトの掲載情報。対応エリアやサービス内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-4">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。ゼヒトモでは、サイト上の各プロ（業者）のプロフィールに利用者のレビューが公開される仕組みがあり、依頼前に個別のプロの評価を確認できます。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>・<strong>複数のプロの提案を比較して選べる便利さ</strong>を評価する傾向——料金や対応を見比べてから決められる点がマッチング型の利点として挙げられます</li>
                <li>・フォーム入力だけで提案が届くため、<strong>自分で一から業者を探す手間が省ける</strong>という利便性への評価</li>
                <li>・一方で、<strong>評価はプロ（業者）ごとに大きく異なる</strong>ため、サービス全体ではなく「依頼するプロ個人のレビュー」を確認することが重要です</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。ゼヒトモはマッチング型のため、施工品質・対応は登録プロごとに異なります。依頼前に各プロのプロフィール上のレビューと実績をご確認ください。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              便利な仕組みである一方、プロから提案が届くマッチング型サービスという性質上、
              <strong className="font-semibold">どのプロに依頼するかで対応や料金に差が出る場合がある</strong>
              点は理解しておきたいところです。また、修理単体の依頼は取り付けなどに比べるとやや限定的なため、依頼内容を具体的に伝えることが大切です。依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>地域や依頼内容によって、届く提案の数や日程が変わることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>修理単体の依頼はやや限定的なため、症状を具体的に伝えると提案が得やすい</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>依頼前に、各プロの作業範囲と総額の見積もりを比較・確認するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>複数のプロから提案が届き、料金や対応を比較して選べる</li>
                  <li>フォーム入力だけで提案が届き、自分で探す手間が省ける</li>
                  <li>全国対応で、暮らしの依頼を幅広くカバー</li>
                  <li>エアコン修理は人気依頼ランキング3位で実績が蓄積</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼するプロによって対応や料金に差が出ることがある</li>
                  <li>修理単体の依頼はやや限定的な場合がある</li>
                  <li>料金は提案内容で変わるため、事前の見積もり比較が前提</li>
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
                  <li>複数の業者を比較してから依頼先を決めたい人</li>
                  <li>自分で一から業者を探す手間を省きたい人</li>
                  <li>料金や提案内容をじっくり見比べたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>今すぐ即日で駆けつけてほしい緊急のトラブルがある人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ゼヒトモの料金は、依頼するプロや作業内容によって異なります。フォーム入力後に
              <strong className="font-semibold">複数のプロから提案・見積もりが届く</strong>
              ため、内容と金額を見比べて納得のいくプロを選べるのが特徴です。追加作業が必要になった場合は別途費用がかかることがあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理か買い替えかで迷うようなケースもあるため、依頼前には各プロの作業範囲と総額の見積もりを確認し、納得してから依頼するのがおすすめです。複数の提案を比較できる仕組みを活かして、料金と対応を見比べると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は依頼するプロ・作業内容により異なります。正確な金額は届いた提案でご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["フォームに入力", "依頼内容や症状、希望条件をフォームに入力します。"],
                ["プロから提案が届く", "登録しているプロから見積もりや提案が届きます。"],
                ["提案を比較・選択", "届いた提案を比較し、料金や対応を見て依頼先を選びます。"],
                ["日程調整・作業", "選んだプロと日程を調整し、訪問・作業を実施します。"],
                ["確認・支払い", "仕上がりや動作を確認し、支払いをして完了です。"],
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
              ゼヒトモは、フォーム入力で複数のプロから相見積もり提案が届くマッチングサービスで、料金や対応を比較してから依頼先を決められる点が強みです。エアコン修理は人気依頼ランキング3位に入る実績があり、口コミでは比較できる便利さと提案の丁寧さを評価する声が目立ちます。一方で、依頼するプロによって対応や料金に差が出る場合があるため、届いた提案を比較し、見積もりを確認してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の提案を比較し、料金と対応を見比べて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">複数の業者を比較して選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずはフォーム入力で、プロからの提案と費用の目安を確認してみましょう。</p>
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
