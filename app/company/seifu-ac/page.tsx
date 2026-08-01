import type { Metadata } from "next";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";

export const metadata: Metadata = {
  title:
    "エアコンクリーニング清風の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング専門店「清風」の口コミ・評判をまとめました。実際の利用者の声、機種を問わない一律料金、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/seifu-ac" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "エアコンクリーニング清風とは" },
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
    q: "清風はエアコン修理もしてくれますか？",
    a: "清風はエアコンクリーニング(分解洗浄)の専門店です。故障の修理ではなく、内部のカビ・ホコリ・汚れを落として、ニオイや効きの改善を目指すサービスです。故障の場合は修理業者への相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "関東(東京・神奈川・千葉・埼玉)、関西(大阪・兵庫・京都・奈良)、東海(愛知・静岡)の主要都市圏に対応しています。あえてエリアを絞り込んでいるため、対象外の地域では利用できない点に注意してください。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、家庭用壁掛けスタンダードが13,200円、お掃除機能付きが18,700円、天井埋込カセット型が26,400円(1台・税込)と案内されています。機種を問わない一律料金で、2台目から割引がある点が特徴です。最新の料金は申し込み時にご確認ください。",
  },
  {
    q: "お掃除機能付きエアコンも対応できますか？",
    a: "公式サイトでは、お掃除機能付きエアコンを含む全機種に対応していると案内されています。専門店として年間実績3万台を掲げており、複雑な機種にも対応可能とされています。",
  },
  {
    q: "受付時間はいつですか？",
    a: "受付時間は9時〜18時で、土日祝はお休みと案内されています。平日の対応となるため、希望日は早めに相談しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンクリーニング清風の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "エアコンクリーニング清風の口コミ・評判", href: "/company/seifu-ac" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニング清風の口コミ・評判は？
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
            エアコンのニオイや効きが気になってきたら、内部の分解洗浄(エアコンクリーニング)がおすすめです。
            この記事では、エアコンクリーニング専門店
            <strong className="font-semibold text-slate-900">清風(せいふう)</strong>
            について、実際に紹介されている利用者の声、機種を問わない一律料金、対応エリアや受付時間、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※清風は故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」の専門店です。本記事では口コミ本文の引用は行わず、ユアマイスターで公開されている利用者評価の傾向を要約してお伝えしています。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年7月)。
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

        <div className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-3">＼ 公式サイトはこちら ／</p>
            <div className="flex justify-center mb-4"><a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BXYE9" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www24.a8.net/svt/bgt?aid=260628928539&wid=013&eno=01&mid=s00000020635002006000&mc=1" /></a></div>
            <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">エアコンクリーニング清風 公式サイトを見る →</a>
            <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコンクリーニング清風とは</h2>
            <p className="leading-8 text-slate-700">
              清風は、エアコンクリーニングを専門に手がけるサービスです。家庭用の壁掛けエアコン(スタンダード・お掃除機能付き)から天井埋込カセット型、業務用エアコンまで対応し、室外機洗浄や防カビ・抗菌コートのオプションも用意されています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              専門店として年間実績3万台を掲げ、お掃除機能付きを含む全機種に対応する点が強みです。汚れの度合いで追加料金が発生しない「機種を問わない一律料金」を採用し、2台目から割引がある点も分かりやすいポイントです。
            </p>
            <AffiliateBanner
              slug="seifu-ac"
              heading="公式サイトで詳細・料金を確認する"
              note="対応エリア（関東・関西・東海）なら、まずは料金と空き状況を確認してみましょう。"
            />
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアコンクリーニングのプロ 清風"],
                    ["サービス内容", "家庭用・業務用エアコンクリーニング／室外機洗浄／防カビ・抗菌コート"],
                    ["対応エリア", "関東(東京・神奈川・千葉・埼玉)、関西(大阪・兵庫・京都・奈良)、東海(愛知・静岡)"],
                    ["受付時間", "9時〜18時(土日祝休み)"],
                    ["料金の特徴", "機種を問わない一律料金・2台目から割引"],
                    ["実績", "年間実績3万台(公称)"],
                    ["支払い方法", "PayPay／クレジットカード決済"],
                    ["電話番号", "0120-770-102(公式記載)"],
                    ["公式サイト", "seifu-ac.jp"],
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
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。清風については、口コミプラットフォーム「ユアマイスター」に掲載されている利用者評価を確認し、その傾向を整理しました。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>作業員の誠実で丁寧な対応や清潔感を評価する内容が目立つ</li>
                <li>手際が良く、予定より早く作業が完了したという内容が複数見られる</li>
                <li>クリーニング後の風量やニオイの改善など、仕上がりへの満足に触れる内容がある</li>
                <li>複数台の依頼でもスムーズに対応してもらえたという内容がある</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。上記はユアマイスター掲載の利用者評価をもとに編集部が傾向を要約したものです。個々の口コミ本文の引用は掲載していません。最新の口コミは各プラットフォームでご確認ください。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、対応エリアを三大都市圏に絞り込んでいるため、
              <strong className="font-semibold">地域によっては利用できない</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>対応エリアが関東・関西・東海の主要都市圏に絞られている</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>受付は平日9時〜18時(土日祝休み)で、希望日は早めの相談が安心</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>台数やオプション(室外機・防カビコート)で総額が変わるため、申し込み時に確認する</li>
            </ul>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6" label="エアコンクリーニング清風 公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>エアコンクリーニング専門店で、全機種対応の知識・実績がある</li>
                  <li>機種を問わない一律料金で、汚れによる追加料金が発生しにくい</li>
                  <li>2台目から割引があり、複数台依頼でお得</li>
                  <li>作業員の丁寧な対応・手際の良さを評価する声が多い</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが三大都市圏に絞られている</li>
                  <li>受付は平日のみ(土日祝休み)</li>
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
                  <li>関東・関西・東海エリアでエアコンクリーニングを頼みたい人</li>
                  <li>お掃除機能付きエアコンの洗浄を専門店に任せたい人</li>
                  <li>一律料金で、追加料金の心配なく依頼したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリア外に住んでいる人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                  <li>土日祝にどうしても作業してほしい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              清風の公式サイトでは、エアコンクリーニングの料金が次のように案内されています(税込・調査時点)。機種を問わない一律料金で、2台目から割引があります。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["家庭用壁掛け スタンダード", "13,200円"],
                    ["家庭用壁掛け お掃除機能付き", "18,700円"],
                    ["家庭用 天井埋込カセット型", "26,400円(1台)"],
                    ["業務用(1台目／2〜3台)", "36,300円／33,000円(1台)"],
                    ["室外機洗浄(家庭用／業務用)", "5,500円／8,800円"],
                    ["防カビ・抗菌コート", "2,200円(1台)"],
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
              台数やオプションによって総額が変わります。料金は時期によって変更される場合があるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。最新の金額は申し込み時にご確認ください。</p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6" label="エアコンクリーニング清風 公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "機種や台数、汚れの状況を伝えます。受付は平日9時〜18時(土日祝休み)です。"],
                ["日程の調整", "都合の良い日時を調整します。希望日は早めの相談が安心です。"],
                ["訪問・養生", "専門スタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "エアコンを分解し、内部のカビ・ホコリを洗浄します。"],
                ["動作確認・支払い", "仕上がりと動作を確認し、支払い(PayPay・クレジットカード対応)をして完了です。"],
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
              清風は、関東・関西・東海の主要都市圏に対応するエアコンクリーニング専門店です。利用者の声では、作業員の丁寧で誠実な対応と手際の良さ、仕上がりへの満足を評価する内容が多く見られます。機種を問わない一律料金や全機種対応が分かりやすい一方、対応エリアが絞られている点や、受付が平日のみである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。申し込み時に総額を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">対応エリアなら、まずは料金と空き状況を確認してみましょう。</p>
              <div className="flex justify-center mb-5">
                <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BXYE9" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www24.a8.net/svt/bgt?aid=260628928539&wid=013&eno=01&mid=s00000020635002006000&mc=1" /></a>
              </div>
              <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6" target="_blank" rel="sponsored nofollow" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
                エアコンクリーニング清風 公式サイトを見る
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
      <StickyCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6" label="エアコンクリーニング清風 公式サイトを見る" />
</article>
    </>
  );
}
