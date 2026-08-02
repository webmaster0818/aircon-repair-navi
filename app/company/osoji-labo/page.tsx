import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  title:
    "おそうじLaboの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「おそうじLabo」の口コミ・評判をまとめました。実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/osoji-labo" },
};

const UPDATED = "2026年8月2日";

const toc = [
  { id: "summary", label: "おそうじLaboとは" },
  { id: "review-summary", label: "口コミ総評" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "flow-detail", label: "流れの詳細と作業時間の目安" },
  { id: "menu-detail", label: "機種・メニュー別の対応範囲" },
  { id: "payment", label: "支払い方法・キャンセル規定" },
  { id: "checklist", label: "申し込み前に確認すべきチェックポイント" },
  { id: "confusion", label: "同名・類似業者との混同に注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
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
  {
    q: "キャンセルや日程変更はいつまでできますか？",
    a: "キャンセル・日時変更は前日までと公式サイトに明記されています。当日のお客様都合によるキャンセル・日時変更は、見積もり料金の100%がキャンセル料として発生します（2026年8月2日公式確認）。予定が不確実な場合は、必ず前日までに連絡しましょう。",
  },
  {
    q: "クレジットカード払いはいつ支払いますか？",
    a: "銀行振込・クレジットカード払いは前払いと公式サイトに明記されています（2026年8月2日確認）。当日に支払う場合は現金となるため、カード払いを希望する場合は予約時に前払いの手続き方法とタイミングを確認しておきましょう。",
  },
  {
    q: "天井埋め込み型や業務用のエアコンも対応していますか？",
    a: "はい。家庭用天井埋め込み型は通常13,800円・初回限定12,800円（2台目以降11,800円）、作業時間90〜120分と案内されています。業務用も壁掛け型（初回12,000円）、天井埋め込み型・吊り下げ型（初回25,000円）に対応しています（いずれも税込・2026年8月2日公式確認）。",
  },
  {
    q: "作業時間はどのくらいかかりますか？",
    a: "公称の作業時間は、ノーマルタイプ60〜90分、お掃除機能付き120〜180分、天井埋め込み型90〜120分、業務用120〜180分です（2026年8月2日確認）。複数台を依頼する場合はその分長くなるため、予約時に全体の所要時間を確認しておくと安心です。",
  },
  {
    q: "仕上がりに不満があった場合はどうなりますか？",
    a: "公式サイトには、仕上がりに満足できなければ無料で追加作業を行う旨が記載されています（2026年8月2日確認）。また損害保険に加入しており、作業の際に発生した壁の破損・汚れ・エアコン本体の故障に関する費用は同社が補償すると明記されています。気になる点は作業完了の確認時にその場で伝えましょう。",
  },
  {
    q: "洗浄に使う水場がない場合はどうなりますか？",
    a: "洗浄時の水場はベランダ・風呂場・庭を優先し、使えない場合は洗面台を使用すると公式FAQに記載されています（2026年8月2日確認）。水場の状況が特殊な場合は、予約時に伝えておくと当日の作業がスムーズです。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "おそうじLaboの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
  dateModified: "2026-08-02",
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
            <time dateTime="2026-08-02">最終更新：{UPDATED}</time>
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
            ※おそうじLaboは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事の口コミ・評判は、エキテンや公式サイトで公開されている情報の傾向を要約したもので、原文の転載は行っていません。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年7月、口コミ出典は2026年8月1日に再調査)。
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
          <div className="flex justify-center mb-4">
            <FelmatBanner slug="osoji-labo" heading="＼ 公式サイトはこちら ／" />
          </div>
        </div>

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

          <section id="review-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ総評（出典ベース）</h2>
            <p className="leading-8 text-slate-700">
              おそうじLabo（大阪・株式会社ペイストレージ）については、<strong className="font-semibold">第三者サイトでの口コミ蓄積はまだ少ない</strong>のが実情です（2026年8月1日調査時点）。店舗情報サイトのエキテンにはページがあり評点3.06と表示されていますが、口コミ本文の投稿は0件で、評価の傾向を判断できる材料はありません。公式サイトには「想像以上にきれいになった」といった5つ星のお客様の声が掲載されているものの、自社サイト掲載のため第三者による検証はできません。くらしのマーケットの出店ページも確認できませんでした。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方で、悪い評判の一次出典も確認できておらず、口コミが少ないこと自体は「悪評がある」という意味ではありません。第三者の裏づけが少ない分、申し込み時に<strong className="font-semibold">「オプション込みの総額」「作業範囲」「仕上がりに不満があった場合の対応」</strong>を事前確認しておくことが、口コミの代わりになるチェックポイントです。
            </p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。おそうじLabo（大阪）については、エキテンの店舗ページと公式サイトで公開されているお客様の声を確認しました。なお、ユアマイスターに掲載のある「株式会社おそうじラボ」は東京の別法人のため（後述）、同社の口コミは本記事では扱っていません。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向（公式サイト自社掲載の声より）</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>「想像以上にきれいになった」など、仕上がりへの驚き・満足を伝える内容</li>
                <li>料金説明が明確で分かりやすかった点を評価する内容</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">※いずれも公式サイトに自社掲載されたお客様の声のため、第三者による検証はできません。</p>
            </div>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold text-slate-700 text-sm mb-2">参照元（2026年8月1日確認）</p>
              <ul className="space-y-2 text-[0.9rem] leading-7 text-slate-600">
                <li>
                  ・参照元: <a href="https://www.ekiten.jp/shop_27504638/" target="_blank" rel="nofollow noopener" className="text-sky-700 underline">エキテン（おそうじLabo店舗ページ）</a>
                  ——評点表示は3.06ですが、口コミ本文の投稿は0件です（2026年8月1日確認）。掲載はエアコンクリーニング8,800円〜等のメニュー情報が中心です
                </li>
                <li>
                  ・参照元: 公式サイト（osojilabo.com）——5つ星のお客様の声を自社掲載。自社サイト掲載のため第三者検証はできません
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">※みん評に該当ページはなく、くらしのマーケットの出店ページ・Googleマップの評点も確認できませんでした（2026年8月1日調査）。口コミ本文の長文転載は行わず、傾向の要約のみ掲載しています。</p>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日（2026年8月1日に再調査）。評価は時期・担当スタッフ・地域により異なります。上記は口コミ原文の転載ではなく、当サイトが確認した範囲での傾向の要約です。</p>
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

          <MiniCta href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" label="おそうじLabo公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

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

          <MiniCta href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" label="おそうじLabo公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

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

          <section id="flow-detail" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">流れの詳細と作業時間の目安（2026年8月2日 公式確認）</h2>
            <p className="leading-8 text-slate-700">
              公式サイトの案内をもとに、予約から作業完了までの実務的なポイントを時系列で整理しました。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["予約〜前日", "電話（10:00〜19:00）またはLINE（24時間）で見積もり・予約。問い合わせへの返信は最短当日中。キャンセル・日時変更は前日までに連絡すれば対応してもらえます"],
                    ["支払いの準備", "銀行振込・クレジットカード払いは前払い（公式明記）。当日払いは現金などになるため、支払い方法と手続きのタイミングは予約時に決めておきましょう"],
                    ["当日：訪問・説明", "自社スタッフが訪問し、作業前に内容を説明。洗浄にはベランダ・風呂場・庭などの水場を使用します（使えない場合は洗面台）"],
                    ["作業", "公称の作業時間はノーマルタイプ60〜90分／お掃除機能付き120〜180分／天井埋め込み型90〜120分／業務用120〜180分"],
                    ["確認・完了後", "仕上がりと動作を確認。仕上がりに満足できなければ無料で追加作業を行うと案内されています。作業後の不安・疑問に対応するアフターフォローも明記されています"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">※作業時間は公式サイト掲載の目安です。汚れの状態・台数・設置環境により前後します（2026年8月2日確認）。</p>
          </section>

          <section id="menu-detail" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">機種・メニュー別の対応範囲と作業時間（2026年8月2日 公式確認）</h2>
            <p className="leading-8 text-slate-700">
              公式サイトには、家庭用・業務用エアコンとハウスクリーニングのメニューが掲載されています。エアコン関連の主なメニューと公称の作業時間は次のとおりです（税込・調査時点）。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["家庭用ノーマルタイプ", "初回8,800円／2台目以降7,800円（作業60〜90分）"],
                    ["家庭用お掃除機能付き", "初回17,000円／2台目以降16,000円（作業120〜180分）"],
                    ["家庭用天井埋め込み型", "通常13,800円・初回限定12,800円／2台目以降11,800円（作業90〜120分）"],
                    ["業務用壁掛け型", "初回12,000円／2台目以降11,000円"],
                    ["業務用天井埋め込み型・吊り下げ型", "初回25,000円／2台目以降24,000円（作業120〜180分）"],
                    ["オプション", "室外機洗浄+3,300円／抗菌・防カビコート（キャンペーン時 無料）"],
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
              エアコン以外にも、レンジフード（9,800円〜）・キッチン・浴室・トイレ・洗面所の単品クリーニング、水回りセット（29,800円〜）、在室・空室のまるごとクリーニング、ベランダ・バルコニー清掃まで対応メニューが公開されています。エアコンクリーニングとあわせて依頼する場合は、合計金額と全体の所要時間を予約時に確認しておきましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金・メニューは公式サイト掲載の内容（2026年8月2日確認）。キャンペーン等により変わる場合があります。</p>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">支払い方法・キャンセル規定（2026年8月2日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["支払い方法", "現金／銀行振込／クレジットカード（VISA・Mastercard・American Express）／PayPay"],
                    ["支払いタイミング", "銀行振込・カード払いは前払い（公式明記）。当日は仕上がり・動作確認後に支払い"],
                    ["キャンセル・日時変更", "前日までの連絡で対応（公式明記）"],
                    ["当日キャンセル", "お客様都合の当日キャンセル・日時変更は、見積もり料金の100%がキャンセル料として発生（公式明記）"],
                    ["駐車料金", "当社負担（公式明記）"],
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
              当日キャンセルは<strong className="font-semibold">見積もり料金の100%</strong>と明確に規定されているため、予定が不確実な場合は前日までに連絡するのが鉄則です。カード払い・銀行振込は前払いのため、支払い方法を決めたうえで手続きの段取りを予約時に確認しておくとスムーズです。駐車料金が自社負担と明記されている点は、都市部のマンションなどでは地味に効く安心材料です。
            </p>
          </section>

          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申し込み前に確認すべきチェックポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              料金の目安の表で見た初回限定価格・オプションを、実際の申し込みに落とし込むときの確認ポイントを整理しました。予約の連絡時に次の6点を押さえておくと、当日の認識ズレを防げます。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>初回限定価格の適用条件</strong>——「初回」がどの単位で適用されるか（世帯か・キャンペーン期間か）、2台目以降の価格と合わせて総額で確認する</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>オプション込みの総額</strong>——室外機洗浄（+3,300円）・抗菌防カビコートを付けるかどうかを先に決め、台数分の合計を見積もりで確認する</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>キャンペーンの期限</strong>——抗菌・防カビコート無料などのキャンペーンは時期で変わるため、申し込み時点で適用されるかを確認する</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>支払い方法と前払いの期限</strong>——カード・振込は前払いのため、手続きの方法と期限を予約時に確認する</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>補償の適用手順</strong>——壁の破損・汚れ・エアコン本体の故障は補償と明記されています。万一の際の連絡先・手順を作業前に聞いておく</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span><strong>対応エリアの確認</strong>——大阪府全域と兵庫県の一部が対象で、近郊は「要相談」。エリアの境目にお住まいの場合は最初に確認する</span></li>
            </ul>
          </section>

          <section id="confusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">同名・類似業者との混同に注意</h2>
            <p className="leading-8 text-slate-700 mb-4">
              東京都には<strong className="font-semibold">「株式会社おそうじラボ」という同名（表記違い）の別法人</strong>が実在し、ハウスクリーニング予約サイトの<a href="https://yourmystar.jp/suppliers/osoujilab/" target="_blank" rel="nofollow noopener" className="text-sky-700 underline">ユアマイスターに出店</a>しています（壁掛けエアコンクリーニングの口コミ1件・評点5.0／2026年8月1日時点）。カタカナ・英字の表記が違うだけの同名のため、ユアマイスター上の高評価口コミを大阪の「おそうじLabo」のものと誤認しやすい状況ですが、<strong className="font-semibold">両者は別の会社</strong>です。本記事でも東京の同名法人の口コミは、大阪のおそうじLaboの評価として扱っていません。
            </p>
            <p className="leading-8 text-slate-700">
              本記事で扱う「おそうじLabo」は、<strong className="font-semibold">株式会社ペイストレージ運営・大阪市中央区南船場拠点・公式ドメイン osojilabo.com</strong>のサービスです。口コミを調べる際は、運営法人名と所在地（大阪か東京か）が一致しているかを確認しましょう。
            </p>
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
              おそうじLaboは、大阪・兵庫を中心に「100%自社作業」でエアコンクリーニングを行うサービスです。公式サイト掲載のお客様の声では、仕上がりへの満足や料金説明の分かりやすさを評価する内容が見られます（自社掲載のため第三者検証は不可）。一方で、エキテン等の第三者サイトでの口コミ蓄積はまだ少なく、対応エリアが大阪・兵庫の一部に絞られている点や、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。初回限定価格やキャンペーンは時期で変動するため、申し込み時に総額を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">大阪・兵庫エリアなら、まずは料金と空き状況を確認してみましょう。</p>
              <a href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
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
      <StickyCta href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" label="おそうじLabo公式サイトを見る" />
</article>
    </>
  );
}
