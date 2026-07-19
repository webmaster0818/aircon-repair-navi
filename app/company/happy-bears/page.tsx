import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ベアーズ(ハッピーベアーズ)の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「ベアーズ」の口コミ・評判をまとめました。みん評・マイナビ等の実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/happy-bears" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "ベアーズとは" },
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
    q: "ベアーズはエアコン修理もしてくれますか？",
    a: "ベアーズはエアコンクリーニング(分解洗浄)を中心としたハウスクリーニングのサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者やメーカーへの相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "ベアーズは全国に対応しています(地域ごとにサービス提供範囲があります)。地域によって対応状況が変わる場合があるため、申し込み時に対応可否と空き状況を確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "料金は機種(壁掛け・お掃除機能付きなど)や台数、オプションによって変わります。標準作業時間は壁掛け1台につき約1〜2時間とされています。正確な金額は公式サイトまたは申し込み時に確認してください。",
  },
  {
    q: "受付時間と連絡先は？",
    a: "公式サイトでは受付時間を9:00〜18:00(年中無休)、電話番号を0120-552-445と案内しています。サービス終了後30分以内のフォローコール対応や手直し保証も掲げられています。",
  },
  {
    q: "支払い方法は何がありますか？",
    a: "公式サイトでは、クレジットカードの事前登録による決済や、後払い決済(コンビニ・銀行振込・郵便局など)が案内されています。詳細は申し込み時に確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ベアーズ(ハッピーベアーズ)の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "ベアーズの口コミ・評判", href: "/company/happy-bears" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ベアーズ(ハッピーベアーズ)の口コミ・評判は？
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
            家事代行でも知られる大手で、研修を受けたスタッフにエアコンを任せたい——そんなときに候補になるのが
            <strong className="font-semibold text-slate-900">ベアーズ(ハッピーベアーズ)</strong>
            です。この記事では、全国対応のベアーズについて、みん評・マイナビ等の調査記事や公式サイトで公開されている利用者の声、料金の目安、対応エリアや受付体制、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※ベアーズは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事の口コミは、みん評・口コミ調査記事・公式サイト等で公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年6月)。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ベアーズとは</h2>
            <p className="leading-8 text-slate-700">
              ベアーズは、株式会社ベアーズが運営する家事代行・ハウスクリーニングのサービスです。エアコンクリーニングでは、研修を受けたスタッフが内部を分解し、高圧洗浄でカビ・ホコリ・ダニを除去します。標準作業時間は壁掛け1台につき約1〜2時間とされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              累計サービス実績は250万件超を公表しており、サービス終了後30分以内のフォローコールや手直し保証など、アフター対応の手厚さを掲げている点が特徴です。大手の安心感を重視する人に候補となるサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ベアーズ(Happy Bears)"],
                    ["運営会社", "株式会社ベアーズ"],
                    ["サービス内容", "エアコンクリーニング／ハウスクリーニング／家事代行 等"],
                    ["対応エリア", "全国(地域ごとにサービス提供範囲あり)"],
                    ["受付時間", "9:00〜18:00(年中無休)"],
                    ["施工内容", "分解洗浄による高圧洗浄／研修を受けたスタッフが対応"],
                    ["アフター", "終了後30分以内のフォローコール／手直し保証(公称)"],
                    ["支払い方法", "クレジットカード事前登録／後払い決済(コンビニ・銀行振込・郵便局など)"],
                    ["電話番号", "0120-552-445(公式記載)"],
                    ["公式サイト", "www.happy-bears.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトの掲載情報。受付時間や料金は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。ベアーズについては、みん評・マイナビなどの口コミ調査記事や公式サイトのお客様の声で利用者の評価が公開されています。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>スタッフの丁寧な説明や、日程調整のスムーズさを評価する声が目立つ</li>
                <li>長年掃除していないエアコンの頑固なカビ・汚れも落ちたとする内容が見られる</li>
                <li>作業前後の写真を使ったわかりやすい説明への評価がある</li>
                <li>作業終了後のフォローコールなど、アフター対応の安心感を評価する傾向がある</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当スタッフ・地域により異なります。上記は口コミ原文の転載ではなく、公開されている評価から確認できた傾向の要約です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判がある一方で、全国規模で多くのスタッフが対応するサービスという性質上、
              <strong className="font-semibold">担当スタッフや時期によって対応・予約状況に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(夏前など)は予約が取りにくく、日程調整に時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>担当スタッフによって作業や接客の感じ方に差が出る場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>料金は機種・台数・オプションで変わるため、申し込み時に総額を確認する</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>累計250万件超の実績がある大手の安心感</li>
                  <li>研修を受けたスタッフによる分解洗浄</li>
                  <li>終了後30分以内のフォローコール・手直し保証(公称)</li>
                  <li>後払い決済など支払い方法が選べる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>担当スタッフにより対応に差が出ることがある</li>
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
                  <li>実績の多い大手で安心して依頼したい人</li>
                  <li>アフターのフォローや手直し保証を重視したい人</li>
                  <li>ニオイや効きの悪さを内部洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>とにかく最短で当日来てほしい人(繁忙期は調整に時間がかかる)</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ベアーズのエアコンクリーニングの料金は、機種(壁掛け・お掃除機能付きなど)や台数、室外機・防カビコートなどのオプションによって変わります。標準作業時間は壁掛け1台につき約1〜2時間とされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              台数が増えると割引が適用される場合もあります。お掃除機能付きは作業内容が変わり料金も上がるため、お持ちの機種を伝えたうえで、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※具体的な料金は時期・機種により変動します。最新の金額は公式サイト・申し込み時にご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "機種や台数、汚れの状況を伝えます。受付は9:00〜18:00(年中無休)です。"],
                ["日程の調整", "希望日を伝えると折り返しの連絡で日程を調整します。"],
                ["訪問・養生", "研修を受けたスタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "エアコンを分解し、高圧洗浄で内部のカビ・ホコリを洗い流します。"],
                ["動作確認・フォロー", "仕上がりと動作を確認し、終了後にフォローコールがあります。"],
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
              ベアーズは、家事代行・ハウスクリーニングで実績の多い大手のエアコンクリーニングサービスです。利用者の声では、スタッフの丁寧な説明・対応や、頑固な汚れまで落とす洗浄力、終了後のフォローを評価する内容が見られます。一方で、繁忙期の予約の取りにくさや担当による差、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。申し込み時に総額と作業範囲を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">大手の安心感とアフター対応を重視するなら、まずは料金を確認してみましょう。</p>
              <a href="https://www.happy-bears.com/houseclean/aircon/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ベアーズ公式サイトを見る
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
