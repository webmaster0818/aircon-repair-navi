import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "おそうじ革命の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「おそうじ革命」の口コミ・評判をまとめました。みん評・Googleマップ等の実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/osouji-kakumei" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "おそうじ革命とは" },
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
    q: "おそうじ革命はエアコン修理もしてくれますか？",
    a: "おそうじ革命はエアコンクリーニング(分解洗浄)を中心としたハウスクリーニングのサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者やメーカーへの相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "おそうじ革命は全国47都道府県に対応しています。フランチャイズ展開のため、店舗によって対応状況が異なる場合があります。申し込み時に最寄り店舗の対応エリアと空き状況を確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、壁掛け(お掃除機能なし)が1台目9,980円、お掃除機能付きが18,700円、壁埋め込み型が14,300円などと案内されています(税込)。室外機+3,300円、防カビ抗菌コート+2,750円などのオプションがあります。料金は時期で変わるため、申し込み時に確認してください。",
  },
  {
    q: "追加料金が発生することはありますか？",
    a: "公式サイトでは「追加料金絶対なし宣言」を掲げ、事前提示した料金で確定すると案内しています。万一の故障は損害保険で保証、満足できない場合は3日以内の連絡で無料再作業に対応するとされています。詳細は申し込み時に確認しておくと安心です。",
  },
  {
    q: "受付・連絡先は？",
    a: "公式サイトでは電話番号0120-963-933が案内されています。本部所在地は東京都港区です。受付時間や予約の取りやすさは時期・店舗によって異なるため、申し込み時に確認してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "おそうじ革命の口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "おそうじ革命の口コミ・評判", href: "/company/osouji-kakumei" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            おそうじ革命の口コミ・評判は？
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
            全国対応の大手で、料金もわかりやすいエアコンクリーニングを探している——そんなときに候補になるのが
            <strong className="font-semibold text-slate-900">おそうじ革命</strong>
            です。この記事では、全国47都道府県に対応するおそうじ革命について、みん評・Googleマップ・公式サイトで公開されている利用者の声、料金の目安、対応エリアや特徴、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※おそうじ革命は故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事では、みん評・Googleマップ等で公開されている口コミについて、本文の転載・創作は行わず、確認できた傾向の要約のみを掲載しています。料金や対応内容は時期・地域・店舗により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年6月)。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">おそうじ革命とは</h2>
            <p className="leading-8 text-slate-700">
              おそうじ革命は、全国47都道府県に展開するハウスクリーニングのサービスで、エアコンクリーニングにも幅広く対応しています。壁掛け・お掃除機能付き・壁埋め込み型・天井埋め込み型・床置き型など、家庭用から業務用まで多様な機種に対応している点が特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              「追加料金絶対なし宣言」による料金の透明性、自社開発のエコ洗剤、損害保険による保証、満足できない場合の無料再作業などを掲げています。オリコン顧客満足度のコストパフォーマンス部門で複数年第1位を獲得した実績も公表しています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "おそうじ革命"],
                    ["サービス内容", "エアコンクリーニング／ハウスクリーニング 等"],
                    ["対応エリア", "全国47都道府県(フランチャイズ展開)"],
                    ["本部所在地", "東京都港区海岸1-9-18 国際浜松町ビル7F"],
                    ["料金体系", "追加料金絶対なし宣言(公称)／自社開発エコ洗剤使用"],
                    ["保証", "損害保険／3日以内連絡で無料再作業(公称)"],
                    ["支払い方法", "現金／クレジットカード／電子マネー／バーコード決済／法人請求書払い"],
                    ["電話番号", "0120-963-933(公式記載)"],
                    ["公式サイト", "www.osoujikakumei.jp"],
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
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。おそうじ革命については、みん評・Googleマップなどの口コミプラットフォームで多数の利用者の声が公開されており、料金の安さと基本的な品質を評価する傾向が見られます。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>ビフォーアフターの写真で汚れの落ち具合がわかりやすく、カビ臭の改善など仕上がりに満足したという評価</li>
                <li>作業前の流れ・注意点の説明や、質問への受け答えが丁寧だったという評価</li>
                <li>作業が丁寧かつ迅速で、エアコンの状態についての説明もあったという評価</li>
                <li>大手としての安心感があり、料金が抑えめでコストパフォーマンスが良いという評価</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当スタッフ・地域(店舗)により異なります。上記は口コミ原文の転載ではなく、公開されている評価から確認できた傾向の要約です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、フランチャイズ展開のサービスという性質上、
              <strong className="font-semibold">店舗・担当スタッフによって対応や仕上がりに差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>フランチャイズ展開のため、店舗・スタッフによって対応に差が出ることがある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(夏前など)は予約が取りにくく、希望日に作業できない場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>家具・壁紙の養生やオプション内容は、作業前に範囲を確認しておくと安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>全国47都道府県対応で、多くの地域で依頼できる</li>
                  <li>「追加料金絶対なし宣言」で料金がわかりやすい(公称)</li>
                  <li>損害保険・無料再作業など保証がある(公称)</li>
                  <li>各種キャッシュレス決済に幅広く対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>店舗・スタッフにより対応に差が出ることがある</li>
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
                  <li>全国規模の大手で、料金の明確さを重視したい人</li>
                  <li>コストパフォーマンスを重視してエアコンを洗浄したい人</li>
                  <li>ニオイや効きの悪さを内部洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>店舗による差を避け、特定の職人を指名したい人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              おそうじ革命の公式サイトでは、エアコンクリーニングの料金目安が次のように案内されています(税込・1台目・調査時点)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["壁掛け(お掃除機能なし)", "9,980円(2台目以降7,980円〜)"],
                    ["お掃除機能付き", "18,700円(2台目以降16,700円〜)"],
                    ["壁埋め込み型", "14,300円(2台目以降12,300円〜)"],
                    ["天井埋め込み型(家庭用)", "20,900円(2台目以降18,900円〜)"],
                    ["室外機", "+3,300円"],
                    ["防カビ抗菌コート", "+2,750円"],
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
              料金は時期・店舗によって変わる場合があります。台数や機種、オプションによって総額が変わるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。最新の金額は申し込み時にご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "機種や台数、汚れの状況を伝えます。最寄り店舗の対応エリアを確認します。"],
                ["日程の調整", "都合の良い日時を調整します。事前に料金を提示してもらえます。"],
                ["訪問・養生", "スタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "エアコンを分解し、エコ洗剤で内部のカビ・ホコリを洗浄します。"],
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
              おそうじ革命は、全国47都道府県に対応し、料金のわかりやすさとコストパフォーマンスを強みとするエアコンクリーニングのサービスです。利用者の声では、仕上がりへの満足や説明の丁寧さ、料金の明確さを評価する内容が見られます。一方で、フランチャイズ展開のため店舗・スタッフによる差がある点や、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。店舗による差もあるため、申し込み時に総額と作業範囲を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは料金と最寄り店舗の空き状況を確認してみましょう。</p>
              <a href="https://www.osoujikakumei.jp/aircon-cleaning/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                おそうじ革命公式サイトを見る
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
