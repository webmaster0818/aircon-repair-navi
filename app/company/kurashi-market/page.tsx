import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "くらしのマーケットのエアコン修理の評判は？料金・口コミ・仕組みを実査【2026年7月】",
  description:
    "くらしのマーケットのエアコン修理の評判・料金・仕組みを当サイトが公式ページで実査（2026年7月12日確認）。運営はみんなのマーケット株式会社。出店者（個人事業主含む）が直接施工し料金も出店者が設定するマーケットプレイス型、利用者の手数料は無料、損害賠償補償制度の条件、許認可が出店者次第という構造的な注意点まで正直に解説します。",
  alternates: { canonical: "/company/kurashi-market" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "くらしのマーケットとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "くらしのマーケットはエアコン修理にも対応していますか？",
    a: "はい。公式サイトにエアコン修理カテゴリがあり、料金と口コミで出店者を比較して予約できます（2026年7月12日確認）。ただし実際に施工するのは各出店者で、修理対応の可否や範囲は出店者ごとに異なります。冷えない・効かないなどはメーカー修理が適する場合もあるため、依頼前に各店舗のサービス内容を確認しましょう。",
  },
  {
    q: "利用に手数料はかかりますか？",
    a: "利用者がくらしのマーケットへ支払う手数料はありません。出店者がページに提示している料金（作業料金・出張費を含む）だけを支払う仕組みです。出店者側は予約成立時にサービス料金の20％（税込22％、10,000円未満は一律2,000円）の予約手数料を負担しますが、これは利用者の請求には上乗せされない建付けです（2026年7月12日確認）。",
  },
  {
    q: "エアコン修理の料金はいくらくらいですか？",
    a: "公式のエアコン修理カテゴリでは、ガス漏れ修理が1台あたり16,000〜19,000円、水漏れ修理が11,000〜20,000円が目安として掲載されています（2026年7月時点・各出店者により異なり追加料金が発生する場合あり）。実額は出店者が設定するため、複数の出店者を比較し、追加料金の条件を予約前にメッセージで確認しておくと安心です。",
  },
  {
    q: "施工する人の資格や品質は保証されますか？",
    a: "くらしのマーケットはプラットフォームで、施工は各出店者（個人事業主を含む）が直接行います。技術・品質・保有資格は出店者ごとに異なり、プラットフォーム側が一律に保証するものではありません。冷媒（フロン）を扱う作業や電気工事は資格が必要な場合があるため、口コミ件数・内容に加え、出店者ページや事前メッセージで有資格かどうかを確認するのが安全です。",
  },
  {
    q: "作業でトラブルが起きたときの補償はありますか？",
    a: "「損害賠償補償制度」があり、くらしのマーケット経由の予約で出店者が起こした対人・対物事故（作業中・作業後・預け物の保管中）を最高1億円まで補償します（火災は1事故500万円限度・引受は三井住友海上火災保険）。保険料は不要で全予約が対象です。ただし作業自体の不出来（直らない・きれいにならない等）や、出店者と連絡がつかない場合は対象外です（2026年7月12日確認）。",
  },
  {
    q: "予約はすぐに取れますか？",
    a: "出店者のスケジュールによります。繁忙期（真夏・真冬）は人気の出店者ほど希望日時が埋まりやすく、今すぐ駆けつけてほしい緊急・即日対応には不向きな場合があります。スピードを重視する場合は、空き状況を複数の出店者に確認するとよいでしょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "くらしのマーケットのエアコン修理の評判は？料金・口コミ・仕組みを実査【2026年7月】",
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

function CtaBox({
  heading,
  note,
}: {
  heading: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6 text-center">
      <p className="text-lg font-bold text-slate-900 mb-1">{heading}</p>
      <p className="text-slate-600 text-sm mb-4">{note}</p>
      <a
        href="https://curama.jp/aircon-repair/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-sky-700 px-7 py-3 font-bold text-white hover:bg-sky-800 transition-colors"
      >
        くらしのマーケットで料金・口コミを見る
      </a>
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
          { name: "くらしのマーケットの口コミ・評判", href: "/company/kurashi-market" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            くらしのマーケットのエアコン修理の評判は？
            <br className="hidden md:block" />
            料金・口コミ・仕組みを実査【2026年7月】
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
            エアコンの不調で業者を探すとき、料金や評判が分からず不安に感じることがあります。
            この記事では、口コミと料金で業者を比較して予約できるマーケットプレイス型サービス
            <strong className="font-semibold text-slate-900">くらしのマーケット</strong>
            のエアコン修理について、当サイトが公式ページを直接確認した事実（2026年7月12日実査）をもとに、料金の仕組み・口コミの傾向・依頼前に確認すべき点を、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・運営は<strong>みんなのマーケット株式会社</strong>。自社で施工せず、<strong>出店者（個人事業主を含む）が直接サービスを提供し、料金も出店者が設定する</strong>マーケットプレイス型です</li>
              <li>・<strong>利用者がくらしのマーケットに払う手数料は無料</strong>。エアコン修理はガス漏れ16,000〜19,000円／水漏れ11,000〜20,000円が公式カテゴリの目安（2026年7月時点・追加料金あり）</li>
              <li>・<strong>技術・品質・許認可は出店者ごとに異なり、プラットフォームが一律保証するものではありません</strong>。口コミ件数・資格表示を確認し、追加料金の条件は予約前にメッセージで確認するのが安全です</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月12日にくらしのマーケット公式ページ・運営会社サイトで確認した内容です。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">くらしのマーケットとは</h2>
            <p className="leading-8 text-slate-700">
              くらしのマーケットは、みんなのマーケット株式会社が運営する、暮らしのサービスに特化したインターネット商店街（マーケットプレイス）です。エアコン修理・クリーニング・取り付け・取り外しをはじめ、ハウスクリーニング、不用品回収、家の修理など多数のカテゴリの出張・訪問サービスを、口コミと料金で比較してオンラインで予約できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              最大の特徴は、くらしのマーケット自身が作業をするのではなく、<strong className="font-semibold">登録した出店者（個人事業主・店舗）が直接サービスを提供する仕組み</strong>である点です。掲載料金も各出店者が自分で設定し、各出店者ページには料金と、実際に利用した人だけが投稿できる口コミが蓄積されます。予約・支払い・メッセージのやり取りがプラットフォーム上で完結するため、はじめての人でも業者を比較して選びやすいのが利点です。
            </p>
          </section>

          <CtaBox
            heading="料金と口コミを見比べて選びたい方へ"
            note="出店者ごとの料金と実利用者の口コミを比較して、納得できる依頼先を探せます。"
          />

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "くらしのマーケット（curama.jp）"],
                    ["運営会社", "みんなのマーケット株式会社"],
                    ["設立・資本金", "2011年1月17日／資本金1億円"],
                    ["所在地", "東京都港区南青山2-5-17 ポーラ青山ビルディング7階"],
                    ["代表者", "浜野勇介"],
                    ["サービス形態", "マーケットプレイス型（出店者が直接サービスを提供し、料金も出店者が設定。口コミと料金で比較して予約）"],
                    ["許認可の扱い", "運営会社はプラットフォーム事業者で、公式会社概要に建設業許可・電気工事業登録等の記載はなし。実際に施工する各出店者の許認可・資格は出店者ごとに異なり、プラットフォーム側では一律に保証されません（2026年7月12日確認）"],
                    ["エアコン関連", "修理・クリーニング・取り付け・取り外し等（修理対応の可否は出店者により異なる）"],
                    ["利用者の手数料", "無料（くらしのマーケットへの手数料はなく、出店者提示の料金のみ支払う）"],
                    ["補償", "損害賠償補償制度（最高1億円・保険料無料・全予約対象／作業自体の不出来等は対象外。詳細は料金の仕組み欄）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：みんなのマーケット株式会社 公式会社概要（minma.jp）、くらしのマーケット 公式サイト（curama.jp）。2026年7月12日確認。出店者数や対応内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、公式サイトのレビューやレビュー紹介サイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。くらしのマーケットの口コミは、実際に作業を完了した利用者だけが投稿できる仕組みです。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・事前に費用を提示してくれた、追加料金なしで対応してくれたという評価</li>
                  <li>・症状を丁寧に診てくれた、説明・養生が丁寧だったという声</li>
                  <li>・料金と口コミを見比べて自分で選べる安心感への評価</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・出店者によって技術・品質・対応にばらつきがあるという指摘</li>
                  <li>・繁忙期は人気の出店者ほど予約が取りにくいという声</li>
                  <li>・修理ではなくクリーニング・設置が中心の出店者もいるという指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※出典：くらしのマーケット公式エアコン修理カテゴリ（curama.jp／2026年7月時点で累計口コミ18,049件・平均点4.86）、およびみん評・口コミ紹介サイト等で公開されている内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。作業を行うのは各出店者のため、品質は担当出店者により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向はいずれも「出店者ごとの品質差」に関するものです。マーケットプレイス型のサービスなので、<strong className="font-semibold">口コミ件数・内容・資格表示をよく確認し、作業範囲や追加料金の条件を予約前にメッセージで確認する</strong>だけでトラブルの大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検・作業するスタッフのイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>実際に施工するのは各出店者（個人事業主を含む）です。</strong>技術・品質・対応はプラットフォームが一律に保証するものではなく、出店者ごとに差が出ます。口コミ件数・内容をよく確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>許認可・資格の扱いも出店者次第です。</strong>冷媒（フロン）を扱う作業や電気工事は資格が必要な場合があり、プラットフォーム側で一律に担保されるわけではありません。出店者ページや事前メッセージで有資格かを確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>損害賠償補償制度には対象外があります。</strong>補償されるのは出店者が起こした対人・対物事故で、作業自体の不出来（直らない・きれいにならない等）や、出店者と連絡がつかない場合は対象外です（2026年7月12日確認）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>修理対応の可否・範囲は出店者により異なります。</strong>くらしのマーケットはクリーニング・取り付けの出店者も多く、冷えない等の症状はメーカー修理が適する場合もあります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>繁忙期（真夏・真冬）は予約が取りにくくなります。</strong>人気の出店者ほど希望日時が埋まりやすく、今すぐ来てほしい緊急・即日対応には不向きな場合があります</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>実利用者の口コミ・評価を見て出店者を選べる</li>
                  <li>料金が出店者ごとに明示され、比較しやすい（利用者の手数料は無料）</li>
                  <li>予約前にメッセージで直接相談できる</li>
                  <li>予約・支払い・やり取りがプラットフォーム上で完結し記録が残る</li>
                  <li>損害賠償補償制度が全予約に適用される（保険料は無料）</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出店者によって技術・品質・許認可に差が出ることがある</li>
                  <li>補償は作業自体の不出来や連絡不能には及ばない</li>
                  <li>繁忙期は希望日時の予約が取りにくい・緊急対応に不向きな場合</li>
                  <li>修理対応の可否は出店者により異なる（クリーニング・設置中心の店も多い）</li>
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
                  <li>口コミと料金を比較して、自分で納得して業者を選びたい人</li>
                  <li>エアコンクリーニングや取り付け・取り外しも依頼したい人</li>
                  <li>予約前にメッセージで料金や作業内容を確認しておきたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>今すぐ駆けつけてほしい緊急の故障対応を求めている人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                  <li>資格・品質が一律に保証された窓口を求めている人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月12日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["利用者の手数料", "無料（くらしのマーケットへの手数料はなく、出店者提示の料金のみ）"],
                    ["料金の決まり方", "各出店者が作業料金・出張費を含めて自ら設定（ページ上で事前確認・メッセージ相談可）"],
                    ["エアコン修理（ガス漏れ）の目安", "16,000〜19,000円（公式カテゴリ掲載・2026年7月時点）"],
                    ["エアコン修理（水漏れ）の目安", "11,000〜20,000円（公式カテゴリ掲載・2026年7月時点）"],
                    ["追加料金", "発生する場合あり（症状・出店者により異なる）"],
                    ["補償", "損害賠償補償制度（最高1億円／火災は1事故500万円・保険料無料・全予約対象。作業自体の不出来や連絡不能は対象外）"],
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
              エアコン修理の料金は<strong className="font-semibold">出店者が設定する方式</strong>で、上記はあくまで公式カテゴリに掲載された目安です（各出店者により異なり追加料金が発生する場合があります）。複数の出店者を比較し、<strong className="font-semibold">追加料金が発生する条件まで予約前にメッセージで確認する</strong>のが自衛の要点です。相場感は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でも確認できます。冷えない・効かないなど故障の修理は、メーカー修理が適している場合もあるため、症状に応じて選びましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※出典：くらしのマーケット公式エアコン修理カテゴリ（curama.jp）、損害賠償補償制度ページ（curama.jp/guarantee/）。2026年7月12日確認。料金は目安であり、正確な金額は各出店者のページ・見積もりでご確認ください。</p>
          </section>

          <CtaBox
            heading="まずは料金と口コミを確認"
            note="利用者の手数料は無料。出店者ごとの料金と実利用者の口コミを見てから判断できます。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["出店者を検索・比較", "エリアやサービスで絞り込み、料金・口コミ・資格表示を見比べて出店者を選びます。"],
                ["メッセージで相談・予約", "作業内容や料金、追加料金の条件を確認し、希望日時で予約します。"],
                ["当日の作業", "出店者が訪問し、養生のうえで作業を行います。"],
                ["動作確認・支払い", "仕上がりを確認し、プラットフォーム上で支払いをします。"],
                ["口コミの投稿", "利用後に口コミを投稿でき、次の利用者の参考になります。"],
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
              くらしのマーケットは、みんなのマーケット株式会社が運営する、口コミと料金を比較して出店者を選べるマーケットプレイス型サービスです。利用者の手数料は無料で、実際に利用した人だけが投稿できる口コミを見て選べる安心感が強みです。一方で、施工するのは各出店者（個人事業主を含む）のため、技術・品質・許認可は出店者ごとに異なり、プラットフォームが一律に保証するものではありません。損害賠償補償制度も作業自体の不出来や連絡不能には及びません。依頼時は「口コミ件数・資格表示の確認」「追加料金の条件を事前メッセージで確認」「補償の対象範囲の理解」の3点を押さえれば、この種のサービスの弱点はほぼカバーできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンクリーニングや取り付け、事前に費用を確認してから頼みたい修理には向いていますが、急な故障で今すぐ駆けつけてほしい場合は、緊急対応に強い業者と比較して選ぶとよいでしょう。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">口コミ・料金を見比べて選びたい方へ</p>
              <p className="text-sky-100 text-sm mb-5">出店者の評価と料金を比較して、納得のいく依頼先を見つけましょう。</p>
              <a href="https://curama.jp/aircon-repair/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                くらしのマーケット 公式サイトを見る
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
