import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "住まいのホットラインの評判は？口コミ・料金を実査【2026年8月】",
  description:
    "住まい（すまい）のホットラインのエアコン修理の口コミ傾向・料金の仕組みを当サイトが公式サイト（hotlines.shop）で実査（2026年7月12日確認）。運営は株式会社ハイファイブ、実態は掲載店舗を比較予約する仲介（マーケットプレイス）型。ガス漏れ・水漏れの料金目安、受付時間、出張費・保証が店舗ごとに異なる点、依頼前チェックまで正直に解説します。",
  alternates: { canonical: "/company/sumai-hotline" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "住まいのホットラインとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "住まいのホットラインはどんなサービスですか？",
    a: "株式会社ハイファイブ（HighFive, Inc.）が運営する、暮らしまわり200種類以上のサービスを口コミ・料金で比較して予約できる仲介（マーケットプレイス）型のプラットフォームです。実際の施工は掲載されている各店舗が行い、代金は作業後に利用者が担当店舗へ直接支払う仕組みです（2026年7月12日確認）。",
  },
  {
    q: "エアコン修理の料金はいくらくらいですか？",
    a: "公式サイトのまとめでは、ガス漏れ修理が1台あたり16,000円〜19,000円、水漏れが11,000円〜20,000円程度が目安として示されています。掲載店舗の実額には幅があり、最安11,000円〜最高33,000円程度まで確認できました。実際の金額は依頼する店舗と症状で決まるため、見積もりで確定させてください（2026年7月12日確認）。",
  },
  {
    q: "誰が修理に来るのですか？",
    a: "掲載されている協力店舗（加盟店）のスタッフが訪問します。ハイファイブは検索・予約プラットフォームの運営者であり、実際の施工・保証・支払い方法は担当店舗によって異なります。店舗ページの口コミと料金を見比べて選ぶ仕組みです。",
  },
  {
    q: "受付時間は何時までですか？",
    a: "運営（ハイファイブ）の問い合わせ受付は平日10時〜18時と案内されています。各掲載店舗の対応時間は店舗ごとに異なり、年中無休・即日対応をうたう店舗もあります。夜間・休日に急ぐ場合は、店舗ページで対応可能な時間を確認しておくと安心です。",
  },
  {
    q: "出張費や見積もりは無料ですか？",
    a: "プラットフォーム共通のルールはなく、店舗によって異なります。見積もり・出張を無料とする店舗もあれば、距離に応じた出張費が発生する店舗もあります（掲載店舗の例では30km以上で3,300円〜）。依頼前に作業範囲と総額の見積もりを確認してから契約するのがおすすめです。",
  },
  {
    q: "保証はありますか？",
    a: "保証もプラットフォーム共通ではなく、店舗ごとに条件が異なります。掲載店舗の中には「修理箇所1年保証」を掲げる店もありますが、期間・範囲は店舗により差があるため、依頼前に担当店舗へ確認してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "住まいのホットラインの評判は？口コミ・料金を実査【2026年8月】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-12",
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
          { name: "住まいのホットラインの評判・口コミ", href: "/company/sumai-hotline" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            住まいのホットラインの評判は？
            <br className="hidden md:block" />
            口コミ・料金を実査【2026年8月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-12">最終更新：{UPDATED}</time>
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
            エアコンが急に効かなくなったとき、口コミや料金を見比べて依頼先を選べると安心です。
            この記事では、暮らしまわりのサービスを比較・予約できるプラットフォーム
            <strong className="font-semibold text-slate-900">住まいのホットライン</strong>
            のエアコン修理について、当サイトが公式サイト（hotlines.shop）を直接確認した事実（2026年7月12日実査）をもとに、料金の仕組み・口コミの傾向・依頼前に確認すべき点を、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・実態は<strong>掲載店舗を口コミ・料金で比較予約する「仲介（マーケットプレイス）型」</strong>。運営は株式会社ハイファイブで、施工・保証・支払いは<strong>担当店舗ごとに異なります</strong></li>
              <li>・エアコン修理の料金目安は<strong>ガス漏れ16,000〜19,000円／台・水漏れ11,000〜20,000円／台</strong>（公式まとめ）。掲載店舗の実額は最安11,000円〜最高33,000円程度と幅があります</li>
              <li>・向くのは「口コミと料金を比べてから選びたい人」。<strong>今日・明日中に確実に来てほしい人は、24時間受付の直接依頼型と相見積もりが安全</strong>です（<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月12日に公式サイト（hotlines.shop）で確認した内容です。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">住まいのホットラインとは</h2>
            <p className="leading-8 text-slate-700">
              住まいのホットラインは、エアコン修理をはじめ、クリーニングや家事代行、不用品回収など暮らしまわりの<strong className="font-semibold">200種類以上のサービスを口コミと料金で比較して予約できるプラットフォーム</strong>です。運営は株式会社ハイファイブ（HighFive, Inc.）。企業や個人事業主が無料で出店できる「集客マーケットプレイス」で、公式にも「出張訪問サービスの検索・予約サイト」と説明されています（2026年7月12日確認）。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              仕組みは、利用者が店舗ページの口コミ・料金を見比べて予約すると担当店舗に通知が届き、日時を調整して訪問・施工。<strong className="font-semibold">代金は作業後に利用者が担当店舗へ直接支払う</strong>流れです。エアコン修理カテゴリでは全国の店舗（掲載は約161業者）が登録されており、「冷えない・効かない」「水漏れ」「ガス漏れ」などのトラブルに対応する店を探せます。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                住まいのホットラインのような「仲介・マッチング型」は、複数の登録業者から比較して選べるのが利点です。一方で、実際の作業は登録業者が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
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
                    ["サービス名", "住まいのホットライン（すまいのホットライン）"],
                    ["運営会社", "株式会社ハイファイブ（HighFive, Inc.）"],
                    ["所在地", "大阪市淀川区東三国1-32-18 奥田ビル（本社。神奈川・愛知・大阪・福岡に支社）"],
                    ["設立・代表", "2006年3月／代表取締役 奥田良忠"],
                    ["サービス形態", "仲介（マーケットプレイス）型。掲載店舗が施工し、代金は作業後に利用者が店舗へ直接支払い"],
                    ["許認可の表示", "運営会社は建設業許可・電気工事業登録の記載なし（プラットフォーム運営のため）。施工する各掲載店舗の許認可はサイト上で一律開示されておらず、店舗ごとに要確認（2026年7月12日確認）"],
                    ["掲載サービス", "暮らしまわり200種類以上（エアコン修理を含む）"],
                    ["対応エリア", "全国（エアコン修理カテゴリの掲載は約161業者。対応地域は店舗による）"],
                    ["受付時間", "運営の問い合わせ受付は平日10時〜18時（TEL 06-6152-8990 ほか）。各店舗の対応時間は店舗により異なる"],
                    ["支払い方法", "作業後に利用者が担当店舗へ直接支払い（支払い手段は店舗により異なる）"],
                    ["公式サイト", "hotlines.shop"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：住まいのホットライン公式サイト（hotlines.shop）および運営会社 株式会社ハイファイブ 会社概要（2026年7月12日確認）。受付時間や対応エリア・掲載店舗数は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、公式サイトの掲載口コミやレビュー傾向から確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします。エアコン修理カテゴリの掲載口コミは平均★4.75・736件（2026年8月3日確認）でした。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・連休中・繁忙期でも早く対応してくれた</li>
                  <li>・作業前の説明が丁寧で分かりやすかった</li>
                  <li>・良心的な金額設定だと感じた</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">気になる声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・掲載店舗によって対応・料金に差がある</li>
                  <li>・配管交換・脱着など追加作業で想定より高額になる場合がある</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※住まいのホットライン公式サイト（hotlines.shop）エアコン修理カテゴリの掲載口コミ・料金表の傾向を当サイトで整理したものです（2026年7月12日確認）。個別の体験を保証するものではありません。仲介型サービスのため、実際の作業品質・料金は担当する掲載店舗により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              気になる傾向はいずれも「店舗差」と「追加料金」に関するものです。仲介型のサービスなので、<strong className="font-semibold">店舗ページの口コミと料金表を確認し、作業前に総額見積もりを書面（またはスマホ写真）で残す</strong>だけでトラブルの大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>仲介型のため、施工・料金・保証は掲載店舗ごとに異なります</strong>。プラットフォーム一律の料金や保証はなく、選ぶ店舗で条件が変わります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>症状別の統一料金はなく、公式は目安レンジのみ提示</strong>（ガス漏れ16,000〜19,000円等）。実額は各店舗の見積もりで確定するため、金額重視なら複数店舗の比較が前提です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>出張費・見積もりの無料／有料は店舗により異なります</strong>。掲載店舗の例では距離別の出張費（30km以上3,300円〜）が発生するケースもあり、依頼前に確認が必要です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>運営の受付は平日10時〜18時</strong>。夜間・休日の緊急即時対応は各店舗次第で、プラットフォーム運営が代わりに手配してくれるわけではありません</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>許認可（建設業許可・電気工事業登録）はサイト上で一律開示されていません</strong>。施工店舗の資格・保険加入は個別に確認する必要があります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span>配管交換・室内外機の脱着・隠蔽配管などの追加作業は別途加算になりやすく、掲載店舗の料金表でも高額項目があります。見積もりで内訳を確認しましょう</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>口コミと料金を見比べて依頼先を選べる</li>
                  <li>地域密着の店舗を見つけやすい</li>
                  <li>予約前にチャット等で相談・確認しやすい</li>
                  <li>エアコン修理以外の暮らしのサービスもまとめて探せる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>選ぶ店舗によって対応・料金・保証に差が出る</li>
                  <li>運営受付は平日10〜18時。夜間・休日の即時対応は店舗次第</li>
                  <li>料金は症状・追加作業で変わるため、事前の見積もり確認が前提</li>
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
                  <li>口コミと料金を比較してから依頼先を決めたい人</li>
                  <li>地域密着の店舗にお願いしたい人</li>
                  <li>エアコン以外の暮らしの困りごともまとめて相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>深夜・早朝に即時の緊急対応を最優先したい人</li>
                  <li>統一料金・統一保証で安心して任せたい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安（2026年7月12日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["ガス漏れ修理", "1台あたり16,000円〜19,000円が目安（公式まとめ）。掲載店舗の例ではガス充填のみ16,000円、ガス充填+漏れ箇所修理22,600円"],
                    ["水漏れ修理", "1台あたり11,000円〜20,000円が目安（公式まとめ）。掲載店舗の例では16,600円〜"],
                    ["料金の幅", "掲載店舗の実額は最安11,000円〜最高33,000円程度"],
                    ["出張費", "店舗により異なる（無料の店舗も、距離別加算の店舗も。掲載例：30km以上3,300円〜）"],
                    ["見積もり", "店舗により無料／有料が異なる（依頼前に要確認）"],
                    ["深夜・早朝の割増／キャンセル料", "プラットフォーム共通の記載なし（店舗により異なる・要確認）"],
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
              住まいのホットラインの料金は<strong className="font-semibold">掲載店舗ごとに設定</strong>されており、公式に示されるのは症状別の目安レンジです。各店舗ページで料金と口コミを見比べられるので、<strong className="font-semibold">複数の店舗を比較し、訪問時には作業範囲と総額の見積もりを書面で残す</strong>ことが自衛の要点になります。相場感は当サイトの<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>と<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式まとめおよび掲載店舗の目安です。正確な金額は各店舗の見積もりでご確認ください（2026年7月12日確認）。</p>
          </section>

          <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-1">口コミと料金を比べて選びたい方へ</p>
            <p className="text-sm text-slate-500 mb-4">掲載店舗の口コミ・料金を比較して、症状と費用の目安を確認できます。</p>
            <a href="https://hotlines.shop/repair-aircon/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-sky-600 px-7 py-3 font-bold text-white hover:bg-sky-700 transition-colors">
              住まいのホットラインでエアコン修理店を探す
            </a>
          </div>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["店舗を検索・比較", "エアコン修理に対応する店舗を、口コミや料金で比較して選びます。"],
                ["予約・相談", "気になる店舗にチャットや予約で相談し、症状や設置状況を伝えます。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、作業後に担当店舗へ直接支払って完了です。"],
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
              住まいのホットラインは、株式会社ハイファイブが運営する、暮らしまわりのサービスを口コミと料金で比較して予約できる仲介型プラットフォームです。エアコン修理でも各店舗の評価や料金を見比べてから選べる点が強みで、口コミの傾向は「繁忙期でも早い対応」「説明が丁寧」を評価する声が目立ちます。一方で、施工・料金・保証は掲載店舗ごとに異なり、追加作業で費用が上がることもあるため、依頼時には「店舗ページの口コミ・料金の確認」「総額見積もりを書面で」「保証・許認可の店舗確認」の3点を押さえれば、この種のサービスの弱点はほぼカバーできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の店舗を比較し、料金と口コミを見比べて選ぶと失敗を防げます。今日・明日中に確実に来てほしいときは、24時間受付の直接依頼型とも相見積もりを取るのが安全です。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミと料金を比べて選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは店舗の口コミ・料金を比較して、症状と費用の目安を確認してみましょう。</p>
              <a href="https://hotlines.shop/repair-aircon/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                住まいのホットライン公式サイトを見る
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
