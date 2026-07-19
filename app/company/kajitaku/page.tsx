import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "カジタク(イオン)の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "イオングループのエアコンクリーニング「カジタク」の口コミ・評判をまとめました。みん評・マイナビ等の実際の利用者の声、料金プラン、対応エリアや保証、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/kajitaku" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "カジタクとは" },
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
    q: "カジタクはエアコン修理もしてくれますか？",
    a: "カジタクはエアコンクリーニング(分解洗浄)を中心としたハウスクリーニングのサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者やメーカーへの相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "カジタクは全国に対応しています(沖縄県・一部離島を除く)。地域によって対応状況が変わる場合があるため、申し込み時に対応可否と空き状況を確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、ライト約9,700円、スタンダード約11,880円、プレミアム約22,770円(いずれも割引適用後の目安)の3プランが案内されています。2台以上の割引制度があり、全プランに約1年間の防カビ抗菌コートが無料で付くとされています。料金は時期で変わるため、申し込み時に確認してください。",
  },
  {
    q: "保証はありますか？",
    a: "カジタクはイオングループの関連会社が運営しており、品質に対して7日以内なら再施工の保証があると案内されています。万一の場合の補償についても用意されています。詳細は申し込み時に確認しておくと安心です。",
  },
  {
    q: "対応できないエアコンはありますか？",
    a: "公式サイトでは、対象を壁掛け型の通常エアコンとお掃除機能付きモデルとし、天井埋め込み・業務用・床置き・ウィンドウ型などは対象外と案内しています。お持ちの機種が対象かどうか、申し込み前に確認しておきましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "カジタク(イオン)の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
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
          { name: "カジタクの口コミ・評判", href: "/company/kajitaku" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            カジタク(イオン)の口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
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
              src="/images/hero-c.png"
              alt="エアコン内部を分解洗浄するクリーニング作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            大手の安心感があって、Webで手軽に申し込めるエアコンクリーニングを探している——そんなときに候補になるのが、イオングループの
            <strong className="font-semibold text-slate-900">カジタク</strong>
            です。この記事では、全国対応のカジタクについて、みん評・マイナビ等の調査記事や公式サイトで公開されている利用者の声、料金プラン、対応エリアや保証、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※カジタクは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事の口コミ・評判は、みん評・口コミ調査記事・公式サイト等で公開されている利用者の声の傾向を要約したもので、原文の転載は行っていません。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年7月)。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">カジタクとは</h2>
            <p className="leading-8 text-slate-700">
              カジタクは、イオングループ傘下のアクティアが運営するハウスクリーニング・宅配クリーニング・家事代行のサービスです。エアコンクリーニングでは、ライト・スタンダード・プレミアムの3プランを用意し、Webから料金を確認して申し込める手軽さが特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              全プランに約1年間の防カビ抗菌コートが無料で付き、品質に対する再施工保証(7日以内)も用意されています。イオングループの信頼感と、料金が事前にわかる明朗さを重視する人に候補となるサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "カジタク(KAJITAKU)"],
                    ["運営", "イオングループ(アクティア株式会社)"],
                    ["サービス内容", "エアコンクリーニング／ハウスクリーニング／宅配クリーニング／家事代行 等"],
                    ["対応エリア", "全国(沖縄県・一部離島を除く)"],
                    ["対象エアコン", "壁掛け型(通常・お掃除機能付き)。天井埋め込み・業務用・床置き・ウィンドウ型は対象外"],
                    ["保証", "7日以内の再施工保証(公称)／防カビ抗菌コート無料"],
                    ["申し込み", "Webで完結・料金が事前にわかる"],
                    ["公式サイト", "www.kajitaku.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトの掲載情報。料金・保証内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。カジタクについては、Googleマップ・みん評・マイナビの口コミ調査記事・公式サイトで公開されている利用者の声を確認しました。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>スタッフの対応が丁寧で、仕上がりがきれいだったという内容</li>
                <li>申し込みから支払いまでWebで完結し、料金が事前にわかる点を評価する内容</li>
                <li>イオングループ運営の安心感で、初めてでも申し込みやすかったという内容</li>
                <li>防カビ仕上げが無料で付く点を評価する内容</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当スタッフ・地域により異なります。上記は口コミ原文の転載ではなく、当サイトが確認した範囲での傾向の要約です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、人気の大手サービスという性質上、
              <strong className="font-semibold">繁忙期は予約が取りにくく、スタッフによって感じ方に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>夏場や年末の繁忙期は予約が殺到し、希望日時に取りにくいことがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>担当スタッフによって作業の丁寧さの感じ方に差が出る場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>お持ちの機種が対象か(天井埋め込み・業務用などは対象外)を申し込み前に確認する</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>イオングループ運営の安心感</li>
                  <li>Webで申し込み・料金が事前にわかる明朗さ</li>
                  <li>7日以内の再施工保証・防カビ抗菌コート無料(公称)</li>
                  <li>3プランから内容を選べる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>対象機種が壁掛け型中心(対象外の機種がある)</li>
                  <li>故障修理ではなくクリーニングのサービス</li>
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
                  <li>大手・イオングループの安心感を重視したい人</li>
                  <li>Webで手軽に申し込み、料金を事前に把握したい人</li>
                  <li>壁掛け型エアコンのニオイ・効きを洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>天井埋め込み・業務用など対象外機種を頼みたい人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              カジタクの公式サイトでは、エアコンクリーニングの料金が次の3プランで案内されています(割引適用後の目安・調査時点)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["ライト", "約9,700円(外側・フィルター・室外機清掃)"],
                    ["スタンダード", "約11,880円(本体内部を高圧洗浄)"],
                    ["プレミアム", "約22,770円(ファインバブル洗浄・ドレンホース洗浄ほか)"],
                    ["2台以上", "割引制度あり(5台以上は別途問い合わせ)"],
                    ["防カビ抗菌コート", "全プラン無料(約1年間・公称)"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              割引やキャンペーンは時期によって変わります。台数やプランによって総額が変わるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。最新の金額は申し込み時にご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["Webで申し込み", "プランを選び、機種や台数を入力します。料金が事前にわかります。"],
                ["日程の調整", "都合の良い日時を調整します。対応エリア・空き状況を確認します。"],
                ["訪問・養生", "スタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "プランに応じて内部を高圧洗浄します。防カビ抗菌コートを施工します。"],
                ["動作確認・支払い", "仕上がりと動作を確認し、支払いをして完了です。"],
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
              カジタクは、イオングループの安心感と、Webで料金を確認して申し込める明朗さを強みとするエアコンクリーニングのサービスです。利用者の声では、丁寧な対応・仕上がりの良さや、防カビ仕上げ無料・再施工保証への評価が見られます。一方で、繁忙期の予約の取りにくさや対象機種の制限、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金はプラン・台数で変わります。申し込み時に総額と対象機種・作業範囲を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">大手の安心感を重視するなら、まずは料金プランを確認してみましょう。</p>
              <a href="https://www.kajitaku.com/house-cleaning/airconditioner/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                カジタク公式サイトを見る
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
