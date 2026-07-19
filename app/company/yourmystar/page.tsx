import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ユアマイスターの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "職人登録型マッチングサービス「ユアマイスター」の口コミ・評判をまとめました。累計作業50万件超の実績、実際の利用者の声、料金の目安、対応エリアや特徴、メリット・デメリットまで中立的に解説します。",
  alternates: { canonical: "/company/yourmystar" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "ユアマイスターとは" },
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
    q: "ユアマイスターはエアコンの修理にも対応していますか？",
    a: "ユアマイスターはエアコンクリーニングを中心としたサービスですが、修理・リペアにも対応しています。依頼内容によって対応できる職人が異なるため、申し込み時に対応可否を確認しておくと安心です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "全国に対応しています。登録している職人のエリアによって対応できる地域や日程が変わるため、お住まいの地域で対応可能な職人がいるかを確認しておきましょう。",
  },
  {
    q: "どんな職人に依頼できるのですか？",
    a: "ユアマイスターは職人登録型のマッチングサービスで、累計作業件数は50万件を超えるとされています。各職人のプロフィールや口コミを確認したうえで依頼先を選べるのが特徴です。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "作業内容や依頼する職人によって料金は異なります。サイト上で内容ごとの料金が提示されるため、申し込み前に金額を確認できます。追加作業が必要な場合は別途費用がかかることがあるため、事前に総額を確認しておくと安心です。",
  },
  {
    q: "お掃除機能付きエアコンにも対応していますか？",
    a: "対応している職人もいますが、お掃除機能付きは構造が複雑で作業の難易度が上がります。対応実績や口コミを確認し、お掃除機能付きの作業に慣れた職人を選ぶと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ユアマイスターの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
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
          { name: "ユアマイスターの口コミ・評判", href: "/company/yourmystar" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ユアマイスターの口コミ・評判は？
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
              src="/images/hero-a.png"
              alt="室内機のエアコン作業を行う職人のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの不調や汚れが気になったとき、信頼できる職人に直接依頼できると安心です。
            この記事では、職人登録型のマッチングサービス
            <strong className="font-semibold text-slate-900">ユアマイスター</strong>
            について、実際に紹介されている利用者の声、料金の目安、対応エリアや特徴、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の口コミは、口コミ掲載サイトや公式サイトで公開されている利用者の声を引用・要約したものです。料金や対応内容は時期・地域・依頼内容により変わるため、最新の情報は申し込み時にご確認ください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ユアマイスターとは</h2>
            <p className="leading-8 text-slate-700">
              ユアマイスターは、ユアマイスター株式会社が運営する職人登録型のマッチングサービスです。エアコンクリーニングを中心に、ハウスクリーニングや修理・リペアまで幅広く対応しており、利用者は登録された職人のプロフィールや口コミを見比べたうえで依頼先を選べます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              累計作業件数は50万件を超えるとされ、実績が豊富な点も特徴です。全国に対応しており、エアコンの不調や汚れが気になるときに、信頼できる職人を探して直接依頼したいという人に向いています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ユアマイスター"],
                    ["運営会社", "ユアマイスター株式会社"],
                    ["サービス形態", "職人登録型のマッチングサービス"],
                    ["実績", "累計作業50万件超（公称）"],
                    ["対応エリア", "全国（登録職人のエリアにより変動）"],
                    ["主な対応内容", "エアコンクリーニング中心・修理／リペアにも対応"],
                    ["料金", "依頼内容・職人により変動（サイト上で確認可能）"],
                    ["公式サイト", "https://yourmystar.jp/"],
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
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。みん評（minhyo.jp）には200件を超えるレビューが寄せられており、公式サイト掲載の口コミとあわせて確認したところ、次のような評価の傾向が見られました。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>迅速かつ丁寧な作業を評価する内容</li>
                <li>作業前の説明のわかりやすさや仕上がりの丁寧さを評価する内容</li>
                <li>職人の接客・対応の良さで安心して任せられたとする内容</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。上記は口コミ原文の転載ではなく、公開されている情報から確認できた傾向の要約です。評価は時期や依頼する職人・地域により異なります。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              良い評判が多い一方で、職人ごとに依頼先を選ぶマッチング型サービスという性質上、
              <strong className="font-semibold">どの職人に依頼するかで対応に差が出る場合がある</strong>
              点は理解しておきたいところです。特にお掃除機能付きエアコンは作業の難易度が上がるため、業者（職人）選びが大切になります。依頼時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>お掃除機能付きエアコンは構造が複雑なため、対応実績のある職人を選ぶと安心</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>職人ごとに対応エリアや日程が異なるため、希望日に依頼できるか事前に確認</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを確認してから依頼するのが安心</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>累計50万件超の実績があり、口コミが豊富で選びやすい</li>
                  <li>職人のプロフィール・口コミを見比べて依頼先を選べる</li>
                  <li>全国対応で、近くの職人を探しやすい</li>
                  <li>口コミでは作業の丁寧さ・接客の良さを評価する声が多い</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>依頼する職人によって対応に差が出ることがある</li>
                  <li>お掃除機能付きは難易度が高く、職人選びが重要</li>
                  <li>料金は依頼内容で変わるため、事前の見積もり確認が前提</li>
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
                  <li>口コミやプロフィールを見て自分で職人を選びたい人</li>
                  <li>クリーニングとあわせて点検・リペアも相談したい人</li>
                  <li>実績の多いサービスから安心して依頼したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>24時間即日の緊急駆けつけを最優先したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              ユアマイスターの料金は、依頼内容や選ぶ職人によって異なります。エアコンクリーニングや修理・リペアといった作業ごとにサイト上で料金が提示されるため、
              <strong className="font-semibold">申し込み前に金額を確認できる</strong>
              のが特徴です。追加作業が必要になった場合は別途費用がかかることがあります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理か買い替えかで迷うようなケースもあるため、作業前には作業範囲と総額の見積もりを確認し、納得してから依頼するのがおすすめです。可能であれば、複数の職人や業者から見積もりを取って比較すると安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は依頼内容・職人により異なります。正確な金額は申し込み時の提示内容でご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["サービス・職人を選ぶ", "サイトで依頼内容を選び、職人のプロフィールや口コミを見て依頼先を検討します。"],
                ["申し込み・日程調整", "希望の作業内容と日程を伝え、職人と日時を調整します。"],
                ["当日の作業・確認", "職人が訪問し、作業内容を確認のうえ作業を実施します。"],
                ["仕上がり確認", "作業後に仕上がりや動作を確認します。"],
                ["支払い・評価", "支払いを済ませ、必要に応じて口コミ・評価を残して完了です。"],
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
              ユアマイスターは、累計50万件超の実績を持つ職人登録型のマッチングサービスで、口コミやプロフィールを見て自分で職人を選べる点が強みです。口コミでは作業の丁寧さと接客の良さを評価する声が目立ちます。一方で、依頼する職人によって対応に差が出る場合があり、特にお掃除機能付きエアコンは作業の難易度が高いため、対応実績のある職人を選び、見積もりを確認してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンの作業や修理は内容によって費用が変わります。急ぎでないときは複数の職人や業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">信頼できる職人を探したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは口コミや料金を確認して、依頼先を比較してみましょう。</p>
              <a href="https://yourmystar.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ユアマイスター公式サイトを見る
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
