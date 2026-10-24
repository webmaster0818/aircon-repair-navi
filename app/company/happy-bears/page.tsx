import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ベアーズ(ハッピーベアーズ)の口コミ・評判｜料金・対応エリアを調査【2026年最新】",
  description:
    "エアコンクリーニング「ベアーズ」の口コミ・評判をまとめています。みん評・マイナビ等で公開されている利用者の声の傾向、料金の目安、対応エリアや受付時間、メリット・ご利用前の注意点を中立的な立場でご説明します。",
  alternates: { canonical: "/company/happy-bears" },
};

const UPDATED = "2026年10月24日";

const toc = [
  { id: "summary", label: "ベアーズとは" },
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
    q: "ベアーズはエアコン修理もしてくれますか？",
    a: "ベアーズはエアコンクリーニング(分解洗浄)を中心としたハウスクリーニングのサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流し、ニオイや効きの改善を目的とするサービスである点にご注意ください。故障の場合は、修理業者やメーカーへご相談ください。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "公式のエアコンクリーニングのページの「サービス提供エリア」に掲載されているのは39都道府県（一部地域）です。青森・岩手・秋田・新潟・富山・石川・福井・岡山は掲載されていません（2026年10月24日・公式確認）。公式トップページの説明文には「全国5大都市を中心にサービスエリアを全国に拡大中」とあります。地域によって対応状況が変わるため、お申し込み時に対応可否と空き状況をご確認ください。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、家庭用壁掛けエアコンの通常タイプが14,190円（税込）、お掃除機能付きが21,780円と案内されています（2026年10月15日・公式確認）。台数やオプションによって総額は変わります。標準作業時間は壁掛け1台につき約1〜2時間とされています。正確な金額は公式サイトまたはお申し込み時にご確認ください。",
  },
  {
    q: "受付時間と連絡先を教えてください。",
    a: "公式サイトでは受付時間を9:00〜18:00(年中無休)、電話番号を0120-552-445と案内しています。サービス終了後30分以内のフォローコール対応や手直し保証も掲げられています。",
  },
  {
    q: "どのような支払い方法がありますか？",
    a: "公式サイトでは、クレジットカードの事前登録による決済や、後払い決済(コンビニ・銀行振込・郵便局など)が案内されています。詳細はお申し込み時にご確認ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ベアーズ(ハッピーベアーズ)の口コミ・評判｜料金・対応エリアを調査【2026年最新】",
  datePublished: "2026-06-28",
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
          { name: "ベアーズの口コミ・評判", href: "/company/happy-bears" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ベアーズ(ハッピーベアーズ)の口コミ・評判
            <br className="hidden md:block" />
            料金・対応エリアを調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-24">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="happy-bears" name="ベアーズ" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            家事代行でも知られる大手で、研修を受けたスタッフがエアコンクリーニングを行うサービスとして候補の一つになるのが
            <strong className="font-semibold text-slate-900">ベアーズ(ハッピーベアーズ)</strong>
            です。本記事では、39都道府県の一部地域でサービスを提供するベアーズについて、みん評・マイナビ等の調査記事や公式サイトで公開されている利用者の声の傾向、料金の目安、対応エリアや受付体制、メリット・注意点を中立的な立場でまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※ベアーズは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事の口コミに関する記載は、みん評・口コミ調査記事・公式サイト等で公開されている利用者の声の傾向を要約したものです。料金や対応内容は時期・地域により変わるため、最新の情報はお申し込み時にご確認ください(調査時点：2026年6月)。
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
              累計サービス実績は250万件超を公表しており、サービス終了後30分以内のフォローコールや手直し保証など、アフター対応の体制を掲げている点が特徴です。大手の実績を重視する方に適したサービスです。
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
                    ["対応エリア", "39都道府県の一部地域（エアコンクリーニングのサービス提供エリア。青森・岩手・秋田・新潟・富山・石川・福井・岡山は掲載なし）（2026年10月24日・公式確認）"],
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
              当サイトでは、口コミ本文の転載・創作を控え、確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています。ベアーズについては、みん評・マイナビなどの口コミ調査記事や公式サイトのお客様の声で利用者の評価が公開されています。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>スタッフの丁寧な説明や、日程調整の円滑さを評価する内容</li>
                <li>長年掃除していないエアコンの頑固なカビ・汚れも落ちたとする内容</li>
                <li>作業前後の写真を使ったわかりやすい説明を評価する内容</li>
                <li>作業終了後のフォローコールなど、アフター対応を評価する内容</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当スタッフ・地域により異なります。上記は口コミ原文の転載ではなく、公開されている評価から確認できた傾向の要約です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              好意的な評価がある一方で、多くのスタッフが対応するサービスという性質上、
              <strong className="font-semibold">担当スタッフや時期によって対応・予約状況に差が生じる場合がある</strong>
              点にご留意ください。お申し込み時には、以下の点をご確認ください。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(夏前など)は予約が取りにくく、日程調整に時間がかかる場合があります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>担当スタッフによって、作業や接客の受け止め方に差が生じる場合があります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うかをご確認ください。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>料金は機種・台数・オプションにより異なるため、お申し込み時に総額をご確認ください。</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>累計250万件超の実績がある大手企業が運営しています。</li>
                  <li>研修を受けたスタッフが分解洗浄を行います。</li>
                  <li>作業終了後30分以内のフォローコールと、手直し保証があります（公称）。</li>
                  <li>後払い決済など、支払い方法を選べます。</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアは39都道府県の一部地域で、掲載のない県もあります。</li>
                  <li>繁忙期は予約が取りにくくなる場合があります。</li>
                  <li>担当スタッフにより、対応に差が生じる場合があります。</li>
                  <li>故障修理ではなく、クリーニングのサービスです。</li>
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
                  <li>実績の多い大手に依頼したい方</li>
                  <li>アフターのフォローや手直し保証を重視したい方</li>
                  <li>ニオイや効きの悪さを内部洗浄で改善したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>当日中の訪問を最優先したい方(繁忙期は日程調整に時間がかかります)</li>
                  <li>清掃ではなく、故障の修理を頼みたい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ベアーズのエアコンクリーニングの料金は、公式サイトで家庭用壁掛けエアコンの通常タイプが14,190円（税込）、お掃除機能付きが21,780円と案内されています（2026年10月15日・公式確認）。台数や、室外機・防カビコートなどのオプションによって総額は変わります。標準作業時間は壁掛け1台につき約1〜2時間とされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              お掃除機能付きは作業内容が変わり料金も上がるため、お持ちの機種を伝えたうえで、お申し込み時に最新の料金と総額をご確認ください。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は2026年10月15日時点の公式サイトの表示です。変更される場合があるため、最新の金額は公式サイト・お申し込み時にご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webでの相談", "機種や台数、汚れの状況を伝えます。受付は9:00〜18:00(年中無休)です。"],
                ["日程の調整", "希望日を伝えると、折り返しの連絡で日程を調整します。"],
                ["訪問・養生", "研修を受けたスタッフが訪問し、周囲を養生します。"],
                ["分解洗浄", "エアコンを分解し、高圧洗浄で内部のカビ・ホコリを洗い流します。"],
                ["動作確認・フォロー", "仕上がりと動作を確認し、終了後にフォローコールがあります。"],
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
              ベアーズは、家事代行・ハウスクリーニングで実績の多い大手のエアコンクリーニングサービスです。利用者の声では、スタッフの丁寧な説明・対応や、頑固な汚れまで落とす洗浄力、終了後のフォローを評価する内容が見られます。一方で、繁忙期の予約の取りにくさや担当による差、故障の修理ではなくクリーニングである点にご留意ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションにより異なります。お申し込み時に総額と作業範囲を確認したうえで依頼することをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">ご利用前に、公式サイトにて最新の料金をご確認ください。</p>
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
