import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ミツモアのエアコン修理の評判｜料金・口コミ・仕組みの調査結果【2026年8月】",
  description:
    "見積もりマッチングサービス「ミツモア」（運営：株式会社ミツモア）のエアコン修理の料金・手数料・仕組み・補償・口コミの傾向を、公式ページで確認しました（2026年7月12日）。依頼者の手数料は0円であること、実際の料金は各プロの見積もりで決まること、品質や許認可はプロによって異なることをご説明します。",
  alternates: { canonical: "/company/mitsumoa" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "ミツモアとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金・手数料の仕組み" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ミツモアはどのような仕組みのサービスですか？",
    a: "ミツモアは、依頼内容を入力すると約3分で最大5社のプロ（出店者）から見積もりが届く、見積もり比較・マッチング型のプラットフォームです。届いた見積もりや各事業者の口コミ・評価を比べて、依頼者が自分で依頼先を選びます。運営する株式会社ミツモア自身は施工を行わず、実際の作業を行うのは選んだプロです（2026年8月3日公式確認）。",
  },
  {
    q: "依頼者に手数料はかかりますか？",
    a: "依頼者の手数料は0円です。公式に「見積もり取得からチャット利用、キャンセルまで依頼者は手数料0円」「契約義務もない」と明記されています。一方で事業者（プロ）側には成約手数料として契約金額の8〜35%（税込8.8〜38.5%、サービスにより固定の案件紹介料の場合あり）がかかります。実際の修理料金は各プロが設定するため、届いた見積もりで確定します（2026年7月12日確認）。",
  },
  {
    q: "エアコン修理に対応していますか？また、料金の目安を教えてください。",
    a: "ミツモアにはエアコンの修理・交換・取り付け・取り外し・クリーニングのカテゴリがあり、対応するプロが登録しています。ミツモア掲載の費用相場では、冷媒ガス漏れ27,000〜50,000円、制御基板20,000〜35,000円、室内機ファンモーター12,000〜32,000円、コンプレッサー58,000〜105,000円などが目安とされています（公式メディア・2026年7月12日確認）。実額は症状・機種・プロにより変わるため、見積もり依頼時に症状を伝えてご確認ください。メーカー保証内ならメーカー修理が適する場合もあります。",
  },
  {
    q: "保証や補償はありますか？",
    a: "ミツモア上で成約した依頼で事故や破損が発生した場合に備え、最高1億円までの「損害賠償補償」があります。保険料はミツモアが負担し事前申込は不要、引受は東京海上日動火災保険とされています。ただし仕事完了の合意後に発見された作業対象物そのものの破損などは対象外で、適用には事業者からの申請が必要です。別に、事業者と連絡が取れなくなった場合に使える「10万円保証」もあります（2026年7月12日確認）。",
  },
  {
    q: "見積もりを受け取った場合、必ず依頼する必要がありますか？",
    a: "いいえ。見積もりを受け取った後に依頼するかどうかは依頼者が選べ、公式にも「契約義務はない」と明記されています。複数社の金額・口コミ・対応を比較したうえで、納得できるプロにのみ依頼することができます。",
  },
  {
    q: "急ぎの故障にも対応できますか？",
    a: "見積もりは最短数分〜当日に届きますが、各プロとのやり取りや日程調整を経て依頼が決まるため、当日または翌日中に修理したい緊急の故障では、時間がかかる場合があります。早急な訪問が必要な場合は、24時間受付・最短即日対応を公称する直接依頼型の業者と並行して比較することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ミツモアのエアコン修理の評判｜料金・口コミ・仕組みの調査結果【2026年8月】",
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
        className="ac-btn ac-btn-primary px-7 py-3"
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
            ミツモアのエアコン修理の評判
            <br className="hidden md:block" />
            料金・口コミ・仕組みの調査結果【2026年8月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-12">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="mitsumoa" name="ミツモア" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの修理や取り付けを依頼する際、料金が適正かどうかの判断に迷われる方は少なくありません。
            本記事では、約3分で最大5社から見積もりが届くマッチング型プラットフォーム
            <strong className="font-semibold text-slate-900">ミツモア</strong>
            のエアコン関連サービスについて、当サイトが公式ページを直接確認した内容（2026年7月12日確認）をもとに、料金・手数料の仕組み・補償・口コミの傾向を、良い点・注意点の両面から中立的な立場でまとめています。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">本記事の要点</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>依頼者の手数料は0円</strong>で、最大5社の見積もりと口コミを比較して選べます（公式明記）。ただし<strong>実際の修理料金は各プロ（出店者）が設定</strong>し、届いた見積もりで決まります</li>
              <li>・運営の株式会社ミツモアは<strong>施工を行わないプラットフォーム</strong>です。作業・品質・許認可・保証はすべて<strong>選んだプロによって異なり</strong>、仕組み上、品質に差が生じます</li>
              <li>・金額と口コミを比較してから選びたい方に適しています。<strong>当日または翌日中に修理したい急ぎの故障</strong>は、24時間受付・最短即日対応の直接依頼型（例：<Link href="/company/take-service" className="text-sky-700 underline">テイクサービス</Link>）との並行比較をおすすめします</li>
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
              ミツモアは、株式会社ミツモアが運営する<strong className="font-semibold">見積もり比較・受発注プラットフォーム</strong>です。依頼者が質問に沿って希望条件を選ぶと、約3分で最大5社のプロ（出店者）から見積もりが届く仕組みで、エアコンの修理・交換・取り付け・取り外し・クリーニングから、暮らしのサービス、士業・ビジネス分野まで幅広いカテゴリを扱っています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              重要な点は、<strong className="font-semibold">運営会社自身は施工を行わない</strong>ことです。届いた見積もりと各プロの口コミ・評価を比較して依頼者が依頼先を選び、実際の作業は選んだプロが担当します。そのため、料金の相場を把握したうえで依頼先を選びたい方に適している一方、作業の品質・対応・保証はプロによって差が出ます（2026年8月3日公式確認）。
            </p>
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線・2026-07-04追加） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">「仲介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                ミツモアのような「仲介・マッチング型」は、複数の登録プロから比較して選べるのが利点です。一方で、実際の作業は登録プロが行うため、料金や対応品質は担当プロによって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着までの時間で比較することをおすすめします。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3"><strong>選び方の目安</strong>：当日または翌日中に修理したい場合は直接依頼型、複数の見積もりを比較してから決めたい場合は仲介型が適しています。</p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">仲介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <CtaBox
            heading="無料の見積もり比較"
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
                    ["許認可の表示", "プラットフォーム運営会社。会社概要に建設業許可・電気工事業登録等の記載なし。施工プロの許認可はプロごとに異なり、ミツモアが一括して担保するものではない（2026年7月12日確認）"],
                    ["対応エリア", "プロの対応地域による（都道府県別のページあり。「全国対応」の明記は確認できず・2026年10月15日公式確認）"],
                    ["見積もりの早さ", "約3分で最大5社から見積もり（公称）"],
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
              当サイトの方針として、口コミ本文の転載・創作は行わず、公式サイトのレビューや口コミ紹介サイトで確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・複数社の料金と口コミを比較してから選べた</li>
                  <li>・見積もり通りの金額で、作業も時間通り・丁寧だった</li>
                  <li>・チャットで事前に質問でき、対応が早かった</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・依頼後にプロからの連絡・通知が多く戸惑った</li>
                  <li>・プロによって対応や品質に差を感じた</li>
                  <li>・見積もりから依頼まで、やり取りに手間・時間がかかった</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※公式サイト掲載のレビューおよび口コミ紹介サイト（カジメモ／駅探PICKS ほか）で公開されている利用者の声の傾向を、当サイトで中立的に整理したものです。個別の体験を保証するものではありません。マッチング型のため、実際の作業品質は担当するプロにより差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向の多くは、プロによる品質の差と、やり取りの手間に集約されます。<strong className="font-semibold">口コミの件数・内容を確認し、追加料金の条件を依頼前にチャットで記録しておく</strong>ことで、トラブルの多くは防ぐことができます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検・作業するスタッフのイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>修理料金の実額は各プロが設定します</strong>。ミツモア自体は施工を行わず定価もないため、金額は届いた見積もりによって決まります。金額を重視する場合は、複数社の見積もりを比較してください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>作業の品質・対応・保証はプロによって異なります</strong>。同じミツモア経由でも担当プロにより結果が変わる点は、マッチング型の仕組み上の特徴です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>施工プロの許認可はプロごとに異なります</strong>。プラットフォーム運営会社の会社概要に建設業許可・電気工事業登録等の記載はなく、許認可はミツモアが一括で担保するものではありません。電気工事を伴う修理では、プロの資格・許認可をプロフィールや見積もり時にご確認ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>見積もり〜日程調整に複数のやり取りが必要です</strong>。当日または翌日中に修理したい急ぎの故障には適していないため、緊急対応に強い直接依頼型との並行比較をおすすめします</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>損害賠償補償（最高1億円）には対象外があります</strong>。仕事完了の合意後に発見された作業対象物そのものの破損などは対象外で、適用には事業者からミツモア宛の申請が必要です。補償の範囲を確認し、作業内容・保証範囲は依頼前にご確認ください</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>約3分で最大5社から見積もりが届き、料金を比較できる</li>
                  <li>各プロの口コミ・評価を確認して選べる</li>
                  <li>依頼者の手数料は0円・契約義務なしで、費用の相場を把握しやすい</li>
                  <li>最高1億円の損害賠償補償（保険料はミツモア負担）がある</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>作業するプロによって対応・品質・保証に差が出る</li>
                  <li>見積もりから依頼までやり取りが必要で時間がかかる</li>
                  <li>施工プロの許認可はプロごとに異なり、運営が一括して担保するものではない</li>
                  <li>急ぎの故障対応には適していない</li>
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
                  <li>複数社の見積もりを比較して、料金を抑えたい方</li>
                  <li>口コミや評価を確認し、自分でプロを選びたい方</li>
                  <li>エアコンの取り付け・取り外しやクリーニングを頼みたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>早急な訪問が必要な故障対応を求めている方</li>
                  <li>プロ選び・やり取りの手間をかけたくない方</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい方</li>
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
              ミツモアは<strong className="font-semibold">依頼者の手数料が0円</strong>で、実際の修理料金は各プロの見積もりで決まる方式です。上表の相場例はミツモア公式メディア掲載の目安で、症状・機種・プロにより変動します。金額だけでなく口コミの内容もあわせて確認し、<strong className="font-semibold">追加料金が発生する条件を依頼前にチャットで記録しておく</strong>ことをおすすめします。費用の相場は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金調査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でもご確認いただけます。冷えない・効かないなどの故障は<Link href="/cost/replace-vs-repair" className="text-sky-700 underline">メーカー修理や買い替え</Link>が適する場合もあります。
            </p>
          </section>

          <CtaBox
            heading="最大5社の見積もりと口コミを比較"
            note="依頼者の手数料は0円です。金額と評判を比較して、依頼するプロを選べます。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["条件を入力して見積もり依頼", "質問に沿って希望条件を選ぶと、約3分で見積もり依頼が完了します。依頼者の費用は0円です。"],
                ["最大5社から見積もりが到着", "複数のプロから届いた金額を、口コミ・評価とあわせて比較します。"],
                ["チャットで相談・依頼先を決定", "不明な点や追加料金の条件を確認し、納得できるプロに依頼します（契約義務なし）。"],
                ["当日の作業", "選んだプロが訪問し、見積もり内容に沿って作業を行います。"],
                ["動作確認・支払い・口コミ投稿", "仕上がりを確認して支払い、利用後に口コミを投稿できます。"],
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
              ミツモアは、約3分で最大5社から見積もりが届き、料金と口コミを見比べて依頼先を選べる見積もり比較・マッチング型プラットフォームです。依頼者の手数料は0円で、最高1億円の損害賠償補償も用意されています。一方で、運営会社は施工を行わず、実際の作業・品質・許認可・保証は選んだプロによって異なるため、満足度に差が出る場合があり、見積もりから依頼までに手間と時間を要することもあります。依頼時には「口コミの件数・内容の確認」「追加料金の条件をチャットで確認」「電気工事を伴う場合はプロの許認可・資格の確認」の3点を確認することで、マッチング型の注意点の多くは事前に解消できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金を比較したい取り付け・クリーニングには適していますが、早急な訪問が必要な故障の場合は、緊急対応に強い直接依頼型の業者と並行して比較することをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">複数社の見積もりを比較したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">最大5社の料金と口コミを比較し、依頼先をお選びいただけます。依頼者の手数料は0円です。</p>
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
