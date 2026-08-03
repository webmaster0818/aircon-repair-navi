import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "EPARKくらしのレスキューの評判は？口コミ・料金・仕組みを実査【2026年8月】",
  description:
    "「EPARKくらしのレスキューの評判は悪い？」を公式実査で検証（2026年7月確認）。運営は株式会社REsta（旧EPARK）で、実は“修理業者を紹介する仕組み”＝料金も品質も掲載業者ごとに変わり、運営はトラブルを仲介しない規約です。良い口コミ・悪い口コミの傾向、依頼前に必ず確認したい3点（出張費・見積・キャンセル料）、安く早く頼むコツまでエアコン修理目線で中立に整理しました。",
  alternates: { canonical: "/company/epark" },
};

const UPDATED = "2026年7月7日";

const toc = [
  { id: "summary", label: "EPARKくらしのレスキューとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "EPARKくらしのレスキューはどんなサービスですか？",
    a: "エアコン修理・水まわり・鍵・ガラス・害虫駆除などの駆けつけ業者を、全国47都道府県で検索・比較して予約できるプラットフォームです。運営は株式会社REsta（旧・株式会社EPARKくらしのレスキュー、2024年11月に社名変更）。EPARKグループの一員で、設立2020年・資本金9,000万円の企業です（2026年7月7日公式確認）。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "EPARK自体は料金を設定しておらず、掲載業者ごとの料金が適用されます。エアコンカテゴリの掲載例では基本料金3,300円〜・修理8,800円〜等の業者がありました（2026年7月7日時点・業者により異なる）。予約前に必ず業者ページの料金・キャンセル料を確認してください。",
  },
  {
    q: "トラブルがあったら運営が対応してくれますか？",
    a: "利用規約上、運営は利用者と業者間の相談等を「仲介・代理・斡旋・保証等するものではない」と明記されており、トラブルは当事者間での解決が原則です。契約は業者との直接契約になるため、作業前の見積もり確認と、業者選びの段階での口コミチェックが重要です。",
  },
  {
    q: "支払いはどうやりますか？",
    a: "施工完了後に業者へ直接後払いする方式です。クレジットカードやスマホ決済の可否は業者によって異なるため、カード払い希望の場合は予約時に確認しましょう。",
  },
  {
    q: "24時間対応していますか？",
    a: "受付時間は掲載業者ごとに異なります。24時間受付の業者もあれば10:00〜24:00等の業者もあり、到着目安（最短10分等）も個別業者の表記です。急ぎの場合は業者ページで受付時間を確認のうえ予約してください。",
  },
  {
    q: "掲載されている業者は信頼できますか？",
    a: "公式には「厳選された業者のみを掲載」とありますが、具体的な審査基準や必要許認可は公開されていません（2026年7月7日確認）。業者ページの口コミ・料金表記の具体性（実額を書いているか・キャンセル料の明記があるか）を自分の目で確認して選ぶのが確実です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "EPARKくらしのレスキューの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-07",
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
          { name: "EPARKくらしのレスキューの口コミ・評判", href: "/company/epark" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            EPARKくらしのレスキューの口コミ・評判は？
            <br className="hidden md:block" />
            エアコン修理の料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-07">最終更新：{UPDATED}</time>
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
            エアコンが急に効かなくなったとき、口コミを見て信頼できる業者を予約できると安心です。
            この記事では、生活トラブルの駆けつけ業者を検索・予約できるプラットフォーム
            <strong className="font-semibold text-slate-900">EPARKくらしのレスキュー</strong>
            のエアコン修理について、掲載業者の実際の口コミ、料金の目安、運営会社や受付時間、メリット・デメリットを、良い点・気になる点の両面から中立的にまとめました。
          </p>
          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・EPARKくらしのレスキューは<strong>業者を比較して選べる検索プラットフォーム</strong>。料金・受付時間・キャンセル料は<strong>すべて掲載業者ごとに異なります</strong>（運営は料金を決めていません）</li>
              <li>・利用規約上、<strong>契約は利用者と業者の直接契約で、運営はトラブルを仲介・保証しません</strong>。「どの業者を選ぶか」が全てです</li>
              <li>・向くのは「複数業者の掲載条件・口コミを見比べて自分で選びたい人」。選ぶ手間を省きたい人は、当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査</Link>で実額公開業者から選ぶ方が早いケースもあります</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月7日に公式サイト・利用規約・運営会社情報を確認した内容です。</p>
          </div>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">EPARKくらしのレスキューとは</h2>
            <p className="leading-8 text-slate-700">
              EPARKくらしのレスキューは、エアコン修理をはじめ、水まわり・鍵・ガラス・害虫駆除・生活家電修理など、暮らしの「困った」に駆けつける業者をWeb上で検索・比較し、電話で予約できるプラットフォームです。各業者の特徴・料金・口コミを見比べて依頼先を選べます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              さまざまな分野のサービスを掲載する大手「EPARK」グループのサービスのひとつで、運営は株式会社REsta。エアコンの「冷えない・効かない」「水漏れ」「ガス漏れ」といったトラブルに対応する業者が掲載されており、口コミを参考にしながら選べる点が支持されています。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-02追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                EPARKくらしのレスキューのような「仲介・マッチング型」は、複数の登録業者から比較して選べるのが利点です。一方で、実際の作業は登録業者が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>迷ったら</strong>：今日・明日中に直したい→直接依頼型に電話、複数の見積もりを比べてから決めたい→仲介型、が1秒で選べる目安です。</p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">仲介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "EPARKくらしのレスキュー"],
                    ["運営会社", "株式会社REsta（REsta, Inc.）"],
                    ["サービス形態", "生活トラブルの駆けつけ業者を検索・予約できるプラットフォーム"],
                    ["掲載カテゴリ", "エアコン修理・水まわり・鍵・ガラス・害虫駆除・生活家電 ほか"],
                    ["対応エリア", "全国（掲載業者の対応地域による）"],
                    ["受付時間", "業者により異なる（24時間受付対応の業者もあり）"],
                    ["料金確認", "各業者ページで料金・口コミを比較可能"],
                    ["公式サイト", "rescue.epark.jp"],
                    ["運営会社", "株式会社REsta（旧・株式会社EPARKくらしのレスキュー／2024年11月1日社名変更・EPARKグループ）"],
                    ["会社情報", "東京都港区芝5-15-2／設立2020年3月／資本金9,000万円"],
                    ["許認可の表示", "プラットフォーム運営のため施工系許認可の主体ではない。掲載業者の審査基準・必要許認可は非開示（2026年7月7日確認）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：EPARKくらしのレスキュー公式サイトの掲載情報。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載はせず、公式サイトの掲載業者ページ・レビューサイトで確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・複数業者を口コミ・料金で見比べてから選べる利便性</li>
                  <li>・オペレーター経由の予約で当日手配できたという声</li>
                  <li>・業者ページの口コミで事前に雰囲気が分かる安心感</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声・構造的な指摘の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・結局の品質は「選んだ加盟業者次第」という構造的指摘</li>
                  <li>・EPARKブランド全体のレビューと混ざりがちで、サービス単体の評判が見えにくい</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※公式サイト掲載の業者別口コミ・外部レビューサイトの内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（利用規約・公式FAQ確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>運営はトラブルを仲介・保証しません</strong>——利用規約に「仲介・代理・斡旋・保証等するものではありません」「（トラブルは）利用者及び利用施設間で解決する」と明記。契約はあなたと業者の直接契約です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>料金・キャンセル料は業者ごとに異なります</strong>——プラットフォーム共通の料金はなく、「業者によりキャンセル料が発生する場合がある」と公式FAQに記載。予約前に業者ページの条件確認が必須です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>加盟業者の審査基準は非開示</strong>——「厳選された業者のみ掲載」とありますが、具体的な基準・必要許認可は公開されていません（2026年7月7日確認）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>サイト共通の保証制度はありません</strong>——アフター保証の有無・内容は各業者依存です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>受付時間・到着目安も業者ごとに違います</strong>——「24時間」「最短10分」等はあくまで個別業者の表記です</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>掲載業者の口コミを見てから予約できる</li>
                  <li>EPARKグループの知名度・予約のしやすさ</li>
                  <li>エアコン以外の生活トラブルもまとめて探せる</li>
                  <li>24時間受付に対応する業者も掲載されている</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>選ぶ業者によって対応・料金に差が出る</li>
                  <li>エアコン専門に特化したサービスではない</li>
                  <li>料金は症状で変わるため、事前の見積もり確認が前提</li>
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
                  <li>口コミを見て安心して予約したい人</li>
                  <li>知名度のあるプラットフォームから探したい人</li>
                  <li>エアコン以外の暮らしの困りごとも相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>エアコン専門業者に絞って比較したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月7日 公式確認）</h2>
            <p className="leading-8 text-slate-700 mb-4">
              EPARKくらしのレスキュー自体は料金を設定せず、<strong className="font-semibold">掲載業者ごとの料金がそのまま適用されます</strong>。支払いも施工完了後に業者へ直接後払いで、カード可否も業者次第です。エアコンカテゴリの掲載例（実査日時点）では、基本料金3,300円〜・エアコン修理8,800円〜・ガスチャージ8,800円〜（エアコントラブルセンター）などの表記がありました。
            </p>
            <p className="leading-8 text-slate-700">
              つまり「EPARKだから安い/高い」は存在せず、<strong className="font-semibold">選んだ業者の料金表がすべて</strong>です。同じ業者に直接申し込む場合と条件が変わらないか、業者の公式サイトともあわせて確認すると確実です。相場感は<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>をご覧ください。
            </p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["業者を検索・比較", "エアコン修理に対応する業者を、口コミや料金で比較して選びます。"],
                ["電話で予約・相談", "気になる業者に電話で相談し、症状や設置状況を伝えます。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払いをして完了です。"],
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
              EPARKくらしのレスキューは、生活トラブルの駆けつけ業者を検索・予約できるプラットフォームで、エアコン修理でも掲載業者の口コミや料金を見比べてから予約できる点が強みです。利用者の声では、オペレーターや職人の親身な対応、修理内容・料金の丁寧な説明を評価する内容が目立ちます。一方で、選ぶ業者によって対応や料金が変わるため、依頼時には見積もりを確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者を比較し、料金と口コミを見比べて選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミを見て業者を選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは掲載業者の口コミ・料金を比較して、症状と費用の目安を確認してみましょう。</p>
              <a href="https://rescue.epark.jp/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                EPARKくらしのレスキュー公式サイトを見る
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
