import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ミツモアのエアコン修理の評判は？料金・口コミ・仕組みを実査【2026年8月】",
  description:
    "見積もりマッチング「ミツモア」（運営: 株式会社ミツモア）のエアコン修理について、料金・手数料・仕組み・補償・口コミ傾向を公式ページで実査（2026年7月12日確認）。依頼者の手数料は0円、実額は各プロの見積もり次第、品質・許認可はプロ依存という構造的な特徴まで、良い点・注意点の両面から正直に解説します。",
  alternates: { canonical: "/company/mitsumoa" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "ミツモアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金・手数料の仕組み" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ミツモアはどういう仕組みのサービスですか？",
    a: "ミツモアは、依頼内容を入力すると約3分で最大5社のプロ（出店者）から見積もりが届く、見積もり比較・マッチング型のプラットフォームです。届いた見積もりや各事業者の口コミ・評価を比べて、依頼者が自分で依頼先を選びます。運営する株式会社ミツモア自身は施工を行わず、実際の作業を行うのは選んだプロです（2026年8月3日公式確認）。",
  },
  {
    q: "依頼者に手数料はかかりますか？",
    a: "依頼者の手数料は0円です。公式に「見積もり取得からチャット利用、キャンセルまで依頼者は手数料0円」「契約義務もない」と明記されています。一方で事業者（プロ）側には成約手数料として契約金額の8〜35%（税込8.8〜38.5%、サービスにより固定の案件紹介料の場合あり）がかかります。実際の修理料金は各プロが設定するため、届いた見積もりで確定します（2026年7月12日確認）。",
  },
  {
    q: "エアコン修理にも対応していますか？料金の目安は？",
    a: "ミツモアにはエアコンの修理・交換・取り付け・取り外し・クリーニングのカテゴリがあり、対応するプロが登録しています。ミツモア掲載の費用相場では、冷媒ガス漏れ27,000〜50,000円、制御基板20,000〜35,000円、室内機ファンモーター12,000〜32,000円、コンプレッサー58,000〜105,000円などが目安とされています（公式メディア・2026年7月12日確認）。実額は症状・機種・プロにより変わるため、見積もり依頼時に症状を伝えて確認しましょう。メーカー保証内ならメーカー修理が適する場合もあります。",
  },
  {
    q: "保証や補償はありますか？",
    a: "ミツモア上で成約した依頼で事故や破損が発生した場合に備え、最高1億円までの「損害賠償補償」があります。保険料はミツモアが負担し事前申込は不要、引受は東京海上日動火災保険とされています。ただし仕事完了の合意後に発見された作業対象物そのものの破損などは対象外で、適用には事業者からの申請が必要です。別に、事業者と連絡が取れなくなった場合に使える「10万円保証」もあります（2026年7月12日確認）。",
  },
  {
    q: "見積もりが届くと必ず依頼しないといけませんか？",
    a: "いいえ。見積もりを受け取った後に依頼するかどうかは依頼者が選べ、公式にも「契約義務はない」と明記されています。複数社の金額・口コミ・対応を比較したうえで、納得できるプロにだけ依頼すれば問題ありません。",
  },
  {
    q: "急ぎの故障でもすぐ来てもらえますか？",
    a: "見積もりは最短数分〜当日に届きますが、各プロとのやり取りや日程調整を経て依頼が決まるため、今日・明日すぐ直したい緊急の故障対応では時間がかかる場合があります。すぐに来てほしいケースでは、24時間受付・最短即日対応を公称する直接依頼型の業者と並行して比較するとよいでしょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ミツモアのエアコン修理の評判は？料金・口コミ・仕組みを実査【2026年8月】",
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

function CtaBox({ heading, note }: { heading: string; note: string }) {
  return (
    <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
      <p className="text-base font-bold text-slate-800 mb-1">{heading}</p>
      <p className="text-sm text-slate-500 mb-4">{note}</p>
      <a
        href="https://meetsmore.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-sky-600 px-7 py-3 font-bold text-white hover:bg-sky-700 transition-colors"
      >
        ミツモア公式サイトで見積もりを比較する →
      </a>
      <p className="mt-3 text-xs text-slate-400">※依頼者の手数料は0円（公式明記・2026年7月12日確認）。</p>
    </div>
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
          { name: "ミツモアの口コミ・評判", href: "/company/mitsumoa" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ミツモアのエアコン修理の評判は？
            <br className="hidden md:block" />
            料金・口コミ・仕組みを実査【2026年8月】
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
              alt="室内機のエアコン作業を行うスタッフのイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの修理や取り付けを頼むとき、料金が適正か分からず迷うことがあります。
            この記事では、約3分で最大5社から見積もりが届くマッチング型プラットフォーム
            <strong className="font-semibold text-slate-900">ミツモア</strong>
            のエアコン関連サービスについて、当サイトが公式ページを直接確認した事実（2026年7月12日実査）をもとに、料金・手数料の仕組み・補償・口コミの傾向を、良い点・注意点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>依頼者の手数料は0円</strong>で、最大5社の見積もりと口コミを比べて選べる（公式明記）。ただし<strong>実際の修理料金は各プロ（出店者）が設定</strong>し、届いた見積もりで決まります</li>
              <li>・運営の株式会社ミツモアは<strong>施工しないプラットフォーム</strong>。作業・品質・許認可・保証はすべて<strong>選んだプロ次第</strong>で、当たり外れが構造的に生じます</li>
              <li>・向くのは「金額と口コミを比較してから選びたい人」。<strong>今日・明日すぐ直したい急ぎの故障</strong>は、24時間受付・最短即日対応の直接依頼型（例：<Link href="/company/take-service" className="text-sky-700 underline">テイクサービス</Link>）と並行比較が安全です</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月12日にミツモア公式ページで確認した内容です。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ミツモアとは</h2>
            <p className="leading-8 text-slate-700">
              ミツモアは、株式会社ミツモアが運営する<strong className="font-semibold">見積もり比較・受発注プラットフォーム</strong>です。依頼者が質問に沿って希望条件を選ぶだけで、約3分で最大5社のプロ（出店者）から見積もりが届く仕組みで、エアコンの修理・交換・取り付け・取り外し・クリーニングから、暮らしのサービス、士業・ビジネス分野まで幅広いカテゴリを扱っています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              重要なのは、<strong className="font-semibold">運営会社自身は施工を行わない</strong>点です。届いた見積もりと各プロの口コミ・評価を見比べて、依頼者が自分で依頼先を選び、実際の作業は選んだプロが担当します。そのため料金の相場を把握しながら納得して選びたい人に向く一方、作業の品質・対応・保証はプロによって差が出ます（2026年8月3日公式確認）。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-04追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                ミツモアのような「仲介・マッチング型」は、複数の登録プロから比較して選べるのが利点です。一方で、実際の作業は登録プロが行うため、料金や対応品質は担当プロによって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>迷ったら</strong>：今日・明日中に直したい→直接依頼型に電話、複数の見積もりを比べてから決めたい→仲介型、が1秒で選べる目安です。</p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">仲介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <CtaBox
            heading="まずは無料で見積もりを比較"
            note="約3分で最大5社から見積もりが届きます。依頼者の手数料は0円・契約義務なし。"
          />

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ミツモア（meetsmore.com）"],
                    ["運営会社", "株式会社ミツモア（英語名: MeetsMore Inc.）"],
                    ["所在地", "〒104-0061 東京都中央区銀座7-16-12 G7ビルディング8階"],
                    ["設立", "2017年2月8日"],
                    ["代表者", "石川 彩子"],
                    ["資本金", "1億円"],
                    ["業態", "見積もり比較・マッチング型プラットフォーム（施工は登録プロが実施。運営会社は施工しない）"],
                    ["許認可の表示", "プラットフォーム運営会社。会社概要に建設業許可・電気工事業登録等の記載なし。施工プロの許認可はプロ次第で、ミツモアが一括して担保するものではない（2026年7月12日確認）"],
                    ["対応エリア", "全国（実際の対応可否・エリアはプロにより異なる）"],
                    ["見積もりスピード", "約3分で最大5社から見積もり（公称）"],
                    ["補償", "損害賠償補償 最高1億円（保険料はミツモア負担・事前申込不要・引受: 東京海上日動火災保険）ほか"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：株式会社ミツモア 会社情報ページ（company.meetsmore.com）、ミツモア公式サイト・損害賠償補償ページ（2026年7月12日確認）。対応内容や仕様は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、公式サイトのレビューや口コミ紹介サイトで確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・複数社の料金と口コミを見比べてから選べて安心だった</li>
                  <li>・見積もり通りの金額で、作業も時間通り・丁寧だった</li>
                  <li>・チャットで事前に質問でき、対応が早かった</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・依頼後にプロからの連絡・通知が多く戸惑った</li>
                  <li>・プロによって対応や品質に当たり外れを感じた</li>
                  <li>・見積もりから依頼まで、やり取りに手間・時間がかかった</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※公式サイト掲載のレビューおよび口コミ紹介サイト（カジメモ／駅探PICKS ほか）で公開されている利用者の声の傾向を、当サイトで中立的に整理したものです。個別の体験を保証するものではありません。マッチング型のため、実際の作業品質は担当するプロにより差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向の多くは「プロによる当たり外れ」と「やり取りの手間」に集約されます。<strong className="font-semibold">口コミの件数・内容をよく確認し、追加料金の条件を依頼前にチャットで残しておく</strong>だけで、トラブルの大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検・作業するスタッフのイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>修理料金の実額は各プロが設定します</strong>。ミツモア自体は施工せず定価も持たないため、金額は届いた見積もり次第。金額重視なら複数社の見積もりを必ず比較しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>作業の品質・対応・保証はプロ依存で当たり外れがあります</strong>。同じミツモア経由でも担当プロにより結果が変わるのは、マッチング型の構造的な特徴です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>施工プロの許認可はプロ次第です</strong>。プラットフォーム運営会社の会社概要に建設業許可・電気工事業登録等の記載はなく、許認可はミツモアが一括で担保するものではありません。電気工事を伴う修理では、プロの資格・許認可をプロフィールや見積もり時に確認を</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>見積もり〜日程調整に複数のやり取りが必要です</strong>。今日・明日すぐ直したい急ぎの故障には向かず、緊急対応に強い直接依頼型との並行比較が安全です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>損害賠償補償（最高1億円）には対象外があります</strong>。仕事完了の合意後に発見された作業対象物そのものの破損などは対象外で、適用には事業者からミツモア宛の申請が必要。補償を過信せず、作業内容・保証範囲は依頼前に確認を</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>約3分で最大5社から見積もりが届き、料金を比較できる</li>
                  <li>各プロの口コミ・評価を見て選べる安心感がある</li>
                  <li>依頼者の手数料は0円・契約義務なしで相場感をつかみやすい</li>
                  <li>最高1億円の損害賠償補償（保険料はミツモア負担）がある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>作業するプロによって対応・品質・保証に差が出る</li>
                  <li>見積もりから依頼までやり取りが必要で時間がかかる</li>
                  <li>施工プロの許認可はプロ次第で、運営が一括担保しない</li>
                  <li>急ぎの緊急故障対応には向かない</li>
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
                  <li>複数社の見積もりを比較して、料金を抑えたい人</li>
                  <li>口コミや評価を見て、自分で納得してプロを選びたい人</li>
                  <li>エアコンの取り付け・取り外しやクリーニングを頼みたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>今すぐ駆けつけてほしい緊急の故障対応を求めている人</li>
                  <li>プロ選び・やり取りの手間をかけたくない人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金・手数料の仕組み（2026年7月12日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["依頼者の手数料", "0円（見積もり取得・チャット・キャンセルまで無料・契約義務なし）"],
                    ["見積もり取得", "無料（約3分で最大5社）"],
                    ["事業者（プロ）の成約手数料", "契約金額の8〜35%（税込8.8〜38.5%）。サービスにより固定の案件紹介料の場合あり"],
                    ["修理料金の実額", "各プロが設定（届いた見積もりで確定）"],
                    ["冷媒ガス漏れ（相場例）", "27,000〜50,000円（ミツモア掲載の目安）"],
                    ["制御基板／室内機ファンモーター（相場例）", "20,000〜35,000円／12,000〜32,000円（同上）"],
                    ["コンプレッサー（相場例）", "58,000〜105,000円（同上・高額時は買い替え比較を推奨）"],
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
              ミツモアは<strong className="font-semibold">依頼者の手数料が0円</strong>で、実際の修理料金は各プロの見積もりで決まる方式です。上表の相場例はミツモア公式メディア掲載の目安で、症状・機種・プロにより変動します。金額だけでなく口コミの内容も合わせて確認し、<strong className="font-semibold">追加料金が発生する条件まで依頼前にチャットで残しておく</strong>のが自衛の要点です。相場感は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でも確認できます。冷えない・効かないなどの故障は<Link href="/cost/replace-vs-repair" className="text-sky-700 underline">メーカー修理や買い替え</Link>が適する場合もあります。
            </p>
          </section>

          <CtaBox
            heading="最大5社の見積もりと口コミを比較"
            note="依頼者の手数料は0円。金額と評判を見比べて、納得のいくプロを選べます。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["条件を入力して見積もり依頼", "質問に沿って希望条件を選ぶだけで、約3分で見積もり依頼が完了します。依頼者の費用は0円です。"],
                ["最大5社から見積もりが届く", "複数のプロから金額が届くので、口コミ・評価と合わせて比較します。"],
                ["チャットで相談・依頼先を決定", "気になる点や追加料金の条件を確認し、納得できるプロにだけ依頼します（契約義務なし）。"],
                ["当日の作業", "選んだプロが訪問し、見積もり内容に沿って作業を行います。"],
                ["動作確認・支払い・口コミ投稿", "仕上がりを確認して支払い、利用後に口コミを投稿できます。"],
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
              ミツモアは、約3分で最大5社から見積もりが届き、料金と口コミを見比べて依頼先を選べる見積もり比較・マッチング型プラットフォームです。依頼者の手数料は0円で、最高1億円の損害賠償補償も用意されています。一方で、運営会社は施工せず、実際の作業・品質・許認可・保証はすべて選んだプロ次第のため満足度に差が出ることがあり、見積もりから依頼まで手間・時間がかかることもあります。依頼時には「口コミの件数・内容の確認」「追加料金の条件をチャットで確認」「電気工事を伴う場合はプロの許認可・資格の確認」の3点を押さえれば、マッチング型の弱点はほぼカバーできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金を比較したい取り付け・クリーニングには向いていますが、今すぐ駆けつけてほしい急な故障対応は、緊急対応に強い直接依頼型の業者と並行して比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">複数社の見積もりを比較したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">最大5社の料金と口コミを見比べて、納得のいく依頼先を見つけましょう。依頼者の手数料は0円です。</p>
              <a href="https://meetsmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ミツモア 公式サイトを見る
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
