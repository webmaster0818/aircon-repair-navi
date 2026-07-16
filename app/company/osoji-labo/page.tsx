import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  title:
    "おそうじLaboの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「おそうじLabo」の口コミ・評判をまとめました。実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/osoji-labo" },
};

const UPDATED = "2026年6月28日";

const toc = [
  { id: "summary", label: "おそうじLaboとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い口コミ・評判" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const goodReviews = [
  {
    body:
      "初めてのエアコンクリーニング依頼で不安がありましたが、メッセージのやり取りで丁寧に答えていただけて安心して任せられました。養生もしっかりしていて、部屋を汚す心配もなかったです。",
    who: "Kさん（〜20代）",
    source: "ユアマイスター（株式会社おそうじラボ 利用者口コミ・★5.0）",
  },
  {
    body:
      "作業後にエアコンから出た汚れの多さに驚きました。定期的にお願いしようと思います。",
    who: "Kさん（〜20代）",
    source: "ユアマイスター（株式会社おそうじラボ 利用者口コミ・★5.0）",
  },
  {
    body:
      "想像以上にきれいになって驚きました。料金説明も分かりやすく、追加費用もなく安心でした。",
    who: "利用者の声",
    source: "おそうじLabo公式サイト 掲載のお客様の声",
  },
  {
    body:
      "対応がとてもスムーズで、気持ちよく利用できました。",
    who: "利用者の声",
    source: "おそうじLabo公式サイト 掲載のお客様の声",
  },
];

const faqs = [
  {
    q: "おそうじLaboはエアコン修理もしてくれますか？",
    a: "おそうじLaboはエアコンクリーニング(分解洗浄)を中心としたサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者への相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "大阪府全域(大阪市全域、東大阪市、枚方市、豊中市、堺市ほか)と、兵庫県の一部(尼崎市、伊丹市、西宮市、宝塚市、芦屋市、川西市、猪名川町)に対応しています。地域密着型のため、対応エリアが大阪・兵庫に絞られている点を確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、ノーマルタイプのエアコンが初回限定8,800円(2台目以降7,800円/台)、お掃除機能付きが初回限定17,000円(2台目以降16,000円/台)と案内されています。室外機洗浄は+3,300円/台。価格はキャンペーン等で変わるため、申し込み時に最新の料金を確認してください。",
  },
  {
    q: "受付時間と連絡の早さは？",
    a: "電話受付は10:00〜19:00、LINEは24時間受付とされています。問い合わせ後は最短で当日中に連絡をもらえると案内されています。",
  },
  {
    q: "外注ではなく自社で作業してくれますか？",
    a: "公式サイトでは「100%自社作業」で外注しないと案内されています。自社スタッフが対応するため、作業品質や接客にばらつきが生じにくいとされています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "おそうじLaboの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
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

function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber-500 tracking-tight" aria-hidden>
      {"★".repeat(n)}
      <span className="text-slate-300">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "業者一覧", href: "/ranking" },
          { name: "おそうじLaboの口コミ・評判", href: "/company/osoji-labo" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            おそうじLaboの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-28">最終更新：{UPDATED}</time>
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
            エアコンのニオイが気になる、効きが悪い気がする——そんなときに頼りになるのがエアコンクリーニングです。
            この記事では、大阪・兵庫を中心に対応する
            <strong className="font-semibold text-slate-900">おそうじLabo</strong>
            について、実際に紹介されている利用者の声、料金の目安、対応エリアや受付時間、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※おそうじLaboは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事の口コミは、ユアマイスターや公式サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年6月)。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">おそうじLaboとは</h2>
            <p className="leading-8 text-slate-700">
              おそうじLaboは、株式会社ペイストレージが運営する、大阪・兵庫を中心としたエアコンクリーニングサービスです。家庭用エアコン(ノーマルタイプ・お掃除機能付き・天井埋め込み型)から業務用エアコン、ハウスクリーニングまで幅広く対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              すべての作業を外注せず「100%自社作業」で行う点が特徴で、損害保険にも加入。駐車料金を自社負担とするなど、追加費用が発生しにくい仕組みを掲げています。地域密着で大阪・兵庫の一部に絞って対応しているため、エリア内の人には相談しやすいサービスです。
            </p>
            <FelmatBanner
              slug="osoji-labo"
              heading="おそうじLabo公式サイトで料金・空き状況を確認する"
              note="大阪・兵庫エリアなら、まずは料金と予約可能日を確認してみましょう。"
            />
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "おそうじLabo"],
                    ["運営会社", "株式会社ペイストレージ"],
                    ["サービス内容", "エアコンクリーニング／業務用エアコン洗浄／ハウスクリーニング 等"],
                    ["対応エリア", "大阪府全域、兵庫県の一部(尼崎・伊丹・西宮・宝塚・芦屋・川西・猪名川町)"],
                    ["受付時間", "電話 10:00〜19:00／LINE 24時間受付"],
                    ["連絡の早さ", "最短で当日中に連絡(公称)"],
                    ["施工体制", "100%自社作業・損害保険加入"],
                    ["支払い方法", "現金／銀行振込／クレジットカード(VISA・Mastercard・Amex)／PayPay"],
                    ["電話番号", "050-8893-3636(公式記載)"],
                    ["公式サイト", "osojilabo.com"],
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い口コミ・評判</h2>
            <p className="leading-8 text-slate-700 mb-6">
              口コミで目立つのは、
              <strong className="font-semibold">丁寧な事前説明・養生と、仕上がりへの満足</strong>
              を評価する声です。メッセージのやり取りが丁寧で安心できた、作業後に出た汚れの多さに驚いた、といった内容が見られます。
            </p>
            <div className="grid gap-4">
              {goodReviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <Stars n={5} />
                  <blockquote className="mt-3 text-slate-800 leading-7">「{r.body}」</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {r.who}
                    <span className="block text-xs text-slate-400 mt-0.5">出典：{r.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">※上記はユアマイスターや公式サイトで公開されている利用者の声を引用・要約したものです。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、地域密着型のサービスという性質上、
              <strong className="font-semibold">対応エリアが大阪・兵庫の一部に限られる</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>対応エリアが大阪・兵庫の一部に絞られているため、エリア外では利用できない</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(夏前など)は予約が取りにくく、希望日に作業できない場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>キャンペーン料金や初回限定価格は条件・期間が変わるため、申し込み時に最新料金を確認する</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>100%自社作業で、品質や接客にばらつきが生じにくい</li>
                  <li>損害保険加入・駐車料金自社負担で安心感がある</li>
                  <li>LINEは24時間受付で、相談しやすい</li>
                  <li>初回限定価格やキャンペーン(抗菌防カビコート無料など)がある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが大阪・兵庫の一部に限られる</li>
                  <li>故障修理ではなくクリーニングのサービス</li>
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
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
                  <li>大阪・兵庫エリアでエアコンクリーニングを頼みたい人</li>
                  <li>外注ではなく自社スタッフの作業で安心して任せたい人</li>
                  <li>ニオイや効きの悪さを、内部洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリア外(大阪・兵庫以外)に住んでいる人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              おそうじLaboの公式サイトでは、エアコンクリーニングの料金目安が次のように案内されています(税込・調査時点)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["ノーマルタイプ", "初回限定 8,800円／2台目以降 7,800円(1台)"],
                    ["お掃除機能付き", "初回限定 17,000円／2台目以降 16,000円(1台)"],
                    ["室外機洗浄", "+3,300円(1台)"],
                    ["抗菌防カビコート", "通常+2,200円(キャンペーン時 無料)"],
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
              初回限定価格やキャンペーンは時期によって変わります。台数や機種、オプションによって総額が変わるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。最新の金額は申し込み時にご確認ください。</p>
            <FelmatBanner
              slug="osoji-labo"
              heading="最新の料金・キャンペーンを公式で確認する"
              note="初回限定価格やキャンペーンは時期により変わります。申し込み時に最新料金をご確認ください。"
            />
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・LINEで相談", "機種や台数、汚れの状況を伝えます。電話は10:00〜19:00、LINEは24時間受付です。"],
                ["日程の調整", "都合の良い日時を調整します。問い合わせ後は最短で当日中に連絡をもらえます。"],
                ["訪問・養生", "自社スタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "エアコンを分解し、内部のカビ・ホコリを洗浄します。"],
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
              おそうじLaboは、大阪・兵庫を中心に「100%自社作業」でエアコンクリーニングを行うサービスです。利用者の声では、丁寧な事前説明・養生と、仕上がりへの満足を評価する内容が見られます。一方で、対応エリアが大阪・兵庫の一部に絞られている点や、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。初回限定価格やキャンペーンは時期で変動するため、申し込み時に総額を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">大阪・兵庫エリアなら、まずは料金と空き状況を確認してみましょう。</p>
              <a href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                おそうじLabo公式サイトを見る
              </a>
              <p className="mt-4 text-xs text-sky-200">※本リンクはプロモーション（PR）です。</p>
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
