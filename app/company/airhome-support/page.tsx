import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  title:
    "エアホームのエアコン修理の評判は？口コミ・料金を実査【2026年7月】",
  description:
    "エアコン修理「エアホーム」(横浜市西区)の口コミ・料金を当サイトが公式サイトで実査(2026年7月12日確認)。料金・受付時間・保証・許認可・特定商取引法の表記がいずれも非掲載という実態、第三者口コミが確認できない点、依頼前に確認すべき点まで中立的に解説します。",
  alternates: { canonical: "/company/airhome-support" },
};

const UPDATED = "2026年8月2日";

const toc = [
  { id: "summary", label: "エアホームとは" },
  { id: "review-summary", label: "口コミ総評" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "flow-detail", label: "申し込みの流れ・フォーム入力の詳細" },
  { id: "menu-scope", label: "症状・メニュー別の対応範囲" },
  { id: "payment", label: "支払い方法・キャンセル規定" },
  { id: "checklist", label: "見積もりで確認すべきチェックポイント" },
  { id: "confusion", label: "同名・類似業者との混同に注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "エアホームはどんなトラブルに対応していますか？",
    a: "公式サイトでは「冷えない」「水漏れ」「異音」「電源が入らない」「その他」といった、家庭で起きやすいエアコンのトラブルに対応していると案内されています(2026年7月12日確認)。症状が当てはまるか不安な場合も、まずは電話で相談してみるとよいでしょう。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "公式サイトには出張費・見積もり料・症状別の修理実額・キャンセル料・深夜割増のいずれも記載がありません(2026年7月12日確認)。エアコン修理の費用は症状や作業内容(点検・ガス補充・部品交換など)によって変わるため、訪問時に作業範囲と総額の見積もりを書面で確認してから依頼するのがおすすめです。相場の目安は当サイトの症状別の修理相場が参考になります。",
  },
  {
    q: "運営会社や許認可は公表されていますか？",
    a: "公式サイトには「エアホーム」という表記のみで、法人格(株式会社等)の正式名称・代表者名の記載がなく、特定商取引法に基づく表記や会社概要のページも確認できませんでした(2026年7月12日確認)。建設業許可・電気工事業登録などの許認可の記載もありません。契約前に事業者情報や資格の有無を電話で確認しておくと安心です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトには日本地図が掲示され全国対応をうかがわせますが、対応する具体的な都道府県の明記はありません。運営拠点は神奈川県横浜市西区に置かれているため、地域によって訪問までの時間や対応の可否が変わる場合があります。お住まいの地域が対応範囲か、問い合わせ時に確認しておきましょう(2026年7月12日確認)。",
  },
  {
    q: "見積もりだけでもお願いできますか？",
    a: "症状の確認や見積もりの相談は、まず電話(公式記載：050-1793-2218)またはお問い合わせフォームで問い合わせる形になります。出張料・見積もり料が無料か有料かは公式に明記がないため、相談時に必ず確認しておきましょう。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "公式サイトに受付時間や対応スピードの具体的な記載はありません。申し込みフォームでは訪問時間帯として「9〜12時」「12〜15時」「15〜18時」「18〜21時」の4枠が選べるようになっています。地域や繁忙期(真夏・真冬)によって訪問までの時間は変動するため、急ぎの場合は最短の訪問可能日を確認しておくと安心です(2026年7月12日確認)。",
  },
  {
    q: "キャンセル料や日程変更の規定はありますか？",
    a: "公式サイトにキャンセル料・日程変更の規定は掲載されていません（2026年8月2日再確認）。見積もり後に断った場合の費用の有無も不明なため、訪問前の電話の時点で「見積もりだけで断った場合に出張費やキャンセル料がかかるか」を確認しておくことをおすすめします。",
  },
  {
    q: "支払いにクレジットカードは使えますか？",
    a: "支払い方法は公式サイトに記載がありません（2026年8月2日確認）。現金以外（クレジットカード・銀行振込・QRコード決済など）を希望する場合は、受付時に対応可否を確認しておきましょう。支払いのタイミング（作業完了後か前払いか）もあわせて確認しておくと安心です。",
  },
  {
    q: "法人でも依頼できますか？",
    a: "お問い合わせフォームには任意入力の「法人名」欄があり、法人からの依頼も想定した造りになっています（2026年8月2日確認）。ただし法人対応の詳細（請求書払いの可否など）は公式に明記されていないため、必要な場合は電話で確認してください。",
  },
  {
    q: "エアコンクリーニングや取り付けも頼めますか？",
    a: "公式サイトで確認できる依頼内容は「冷えない」「水漏れ」「異音」「電源が入らない」「その他」の5択のみで、クリーニング・取り付け・撤去といった修理以外のメニューは明記されていません（2026年8月2日確認）。修理以外の作業は「その他」として相談し、対応可否を確認する形になります。",
  },
  {
    q: "訪問希望日はどのように指定しますか？",
    a: "申し込みフォームでは訪問希望日を第1希望・第2希望の2枠まで指定でき、時間帯は9〜12時・12〜15時・15〜18時・18〜21時の4枠から選択します（2026年8月2日確認）。確定日時の連絡方法・返信までの目安時間は明記されていないため、急ぎの場合は電話での問い合わせが確実です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアホームのエアコン修理の評判は？口コミ・料金を実査【2026年7月】",
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
          { name: "エアホームの口コミ・評判", href: "/company/airhome-support" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアホームのエアコン修理の評判は？
            <br className="hidden md:block" />
            口コミ・料金を実査【2026年7月】
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
            エアコンが急に冷えなくなったり、水漏れや異音、電源が入らないといったトラブルが起きると、すぐに見てくれる修理サービスは心強い存在です。
            この記事では、横浜市を拠点とするエアコン修理サービス
            <strong className="font-semibold text-slate-900">エアホーム</strong>
            について、当サイトが公式サイトを直接確認した事実(2026年7月12日実査)をもとに、料金の考え方・口コミの傾向・依頼前に確認すべき点を、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>料金・受付時間・保証・許認可・会社概要のいずれも公式サイトに掲載がありません</strong>(2026年7月12日確認)。金額や事業者情報は問い合わせて確認する前提のサービスです</li>
              <li>・<strong>第三者の口コミは公開情報として確認できませんでした</strong>。件数の多さや評価で選びたい人には情報が不足しています</li>
              <li>・向くのは「まず電話で症状を相談してみたい人」。<strong>料金を比較してから決めたい人は、実額を公開している業者との相見積もりが安全</strong>です(<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>)</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月12日に公式サイト(airhomesupport.com)で確認した内容です。掲載内容は変更される場合があります。</p>
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

        <div className="max-w-3xl mx-auto px-5 mt-8">
          <div className="flex justify-center mb-4">
            <FelmatBanner slug="airhome-support" heading="＼ 公式サイトはこちら ／" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアホームとは</h2>
            <p className="leading-8 text-slate-700">
              エアホームは、家庭用エアコンの修理に対応する出張修理サービスです。公式サイトでは「冷えない」「水漏れ」「異音」「電源が入らない」「その他」といった、エアコンで起きやすい代表的なトラブルに対応すると案内されています(2026年7月12日確認)。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営拠点は神奈川県横浜市西区にあり、公式サイトには日本地図が掲示され全国対応をうかがわせます。サイトは症状の相談窓口とお問い合わせフォームが中心のシンプルな構成で、電話またはフォームで症状を伝え、訪問のうえ修理してもらう流れが想定されるサービスです。ただし後述のとおり、料金・保証・運営会社の詳細などは公式サイトに掲載がなく、情報公開は限定的です。
            </p>
          </section>

          <section id="review-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ総評（出典ベース）</h2>
            <p className="leading-8 text-slate-700">
              エアホーム（airhomesupport.com）については、Yahoo!知恵袋・みん評・Googleマップ・くらしのマーケットなどを対象に再調査を行いましたが、同社を特定できる一次的な口コミの掲載は確認できず、<strong className="font-semibold">第三者サイトでの口コミ蓄積はまだ少ない</strong>のが実情です（2026年8月1日調査時点）。公式サイトにもお客様の声・実績件数の掲載はありません。つまり、良い評判・悪い評判のどちらも、出典を示せる形では存在しないというのが確認できた事実です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口コミが確認できないこと自体は「悪い評判がある」という意味ではありません。ただし第三者情報での裏づけが取れない分、依頼前に<strong className="font-semibold">「総額見積もりの書面化」「運営法人名・許認可の有無」「再発時の保証の有無」</strong>を電話で直接確認しておくことが、口コミの代わりになる自衛策です。
            </p>
          </section>

          <FelmatBanner
            slug="airhome-support"
            heading="エアホーム公式サイトで相談・見積もりを確認する"
            note="まずは症状を伝えて、対応可否と費用の目安を確認してみましょう。"
          />

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアホーム"],
                    ["運営会社", "公式サイトに「エアホーム」の表記のみ。法人格(株式会社等)の正式名称・代表者名の記載なし(2026年7月12日確認)"],
                    ["所在地", "〒220-0072 神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402"],
                    ["電話番号", "050-1793-2218(公式記載)"],
                    ["対応内容", "冷えない／水漏れ／異音／電源が入らない／その他のエアコン修理"],
                    ["訪問時間帯", "9〜12時／12〜15時／15〜18時／18〜21時(申込フォームの選択肢)"],
                    ["対応エリア", "公式サイトに日本地図の掲示あり(全国対応を示唆)。対応する具体的な都道府県の明記なし"],
                    ["許認可の表示", "建設業許可・電気工事業登録等の記載なし(2026年7月12日確認)"],
                    ["受付時間", "公式サイトに明記なし"],
                    ["料金", "公式サイトに明記なし(要問い合わせ)"],
                    ["保証", "公式サイトに明記なし"],
                    ["特定商取引法・会社概要", "該当ページを確認できず(2026年7月12日時点)"],
                    ["公式サイト", "airhomesupport.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイト(airhomesupport.com)の掲載情報(2026年7月12日確認)。料金・受付時間・保証・許認可・会社概要は公式に記載がなく、内容は変更される場合があります。</p>
          </section>

          <section id="review" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-4">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。エアホーム(airhomesupport.com)については、2026年7月12日時点で、くらしのマーケット・ミツモアなどの主要な口コミプラットフォームや検索結果を調べても、<strong className="font-semibold">同社を特定できる第三者の口コミ・評価は確認できませんでした</strong>。2026年8月1日にYahoo!知恵袋・みん評・Googleマップも含めて再調査しましたが、結果は同じです。知恵袋には同社を名指しするスレッドが見つからず、検索でヒットしたエアコン故障相談のスレッドを実際に開いて確認しても同社への言及はありませんでした。「エアホームの口コミ」を扱う体裁の外部記事も確認しましたが、実際の口コミは一件も引用されておらず、業界一般論の紹介にとどまっていました。
            </p>
            <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
              <h3 className="font-bold text-orange-800 mb-3">評判を見るうえでの前提</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>・公開されている利用者の口コミ・星評価が見当たらないため、<strong>実績や満足度を第三者情報から裏づけることができません</strong></li>
                <li>・公式サイトにも実績件数・お客様の声の掲載がなく、<strong>サービスの実態を外部から判断できる材料が乏しい</strong>状態です</li>
                <li>・そのため本記事では、事実として確認できた公式サイトの掲載内容のみを扱い、評価の断定は避けています</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月12日（2026年8月1日に再調査）。調査対象：エアホーム公式サイト、Yahoo!知恵袋、みん評、Googleマップ、くらしのマーケット・ミツモア等の口コミプラットフォーム、一般検索結果。いずれにも同社を特定できる一次口コミの掲載はなく、リンクでご案内できる出典もありません。口コミが確認できないことは「悪い評判がある」という意味ではありませんが、事前の情報収集がしづらい点は依頼前に留意しておきましょう。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>料金が公式サイトに一切掲載されていません</strong>——出張費・見積もり料・症状別の修理実額・キャンセル料・深夜割増のいずれも記載なし(2026年7月12日確認)。金額重視の方は、実額を公開している業者との比較が前提です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>運営会社の正式名称・代表者・特定商取引法に基づく表記が確認できません</strong>。契約前に事業者情報(法人名・所在地・連絡先)を電話で確認しておくと安心です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>建設業許可・電気工事業登録などの許認可の記載がありません</strong>。ガス補充や電気系統を伴う作業では有資格者の対応か、依頼前に確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>保証内容の記載がありません</strong>。修理後に同じ症状が再発した場合の保証の有無・期間・範囲を、作業前に必ず確認してください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>受付時間・対応スピードの明記がありません</strong>。申込フォームの訪問時間帯は9〜21時の4枠のみで、繁忙期(真夏・真冬)は訪問まで時間がかかる場合があります。急ぎなら最短の訪問可能日を確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span>自社施工か下請け・紹介型かの記載がありません。誰が作業に来るのか、対応可能なメーカー・年式・賃貸物件の扱いなども受付時に確認が必要です</span></li>
            </ul>
          </section>

          <MiniCta href="https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G" label="エアホーム公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>エアコン修理に絞ったサービスで、症状から相談しやすい</li>
                  <li>代表的なトラブル(冷えない・水漏れ・異音など)に対応</li>
                  <li>電話一本、またはフォームで症状を伝えられる</li>
                  <li>訪問時間帯を4枠から選べる形式で、予定を立てやすい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金・受付時間・保証・許認可・会社概要がいずれも非掲載で、事前確認が前提</li>
                  <li>第三者の口コミが公開情報として確認できない</li>
                  <li>地域や繁忙期によって訪問までの時間が変動する</li>
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
                  <li>冷えない・水漏れなど、症状からまず電話で相談してみたい人</li>
                  <li>対応可否や見積もりを、その場で聞いて判断したい人</li>
                  <li>訪問時間帯を選んで来てもらいたい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>申し込み前にWeb上で料金を細かく比較してから選びたい人</li>
                  <li>口コミ件数や第三者評価を重視して業者を選びたい人</li>
                  <li>許認可・保証など事業者情報を事前にしっかり確認したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方（2026年7月12日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張費", "公式サイトに記載なし(要問い合わせ)"],
                    ["見積もり料", "公式サイトに記載なし(無料か有料か不明・要確認)"],
                    ["最低料金", "公式サイトに記載なし"],
                    ["症状別の修理実額", "公式サイトに記載なし(要見積もり)"],
                    ["キャンセル料", "公式サイトに記載なし"],
                    ["深夜・早朝の割増", "公式サイトに記載なし"],
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
              エアホームの公式サイトには、料金に関する数字が一切掲載されていません。エアコン修理の費用は、症状や必要な作業(点検・ガス補充・部品交換など)によって大きく変わるため、
              <strong className="font-semibold">正確な金額は現地の見積もりで確認する</strong>
              のが基本です。問い合わせの際は、出張料・見積もり料が発生するか、キャンセル料の扱いはどうかもあわせて確認しておきましょう。相場感は当サイトの<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>と<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの比較</Link>で確認できます。可能であれば複数の業者から見積もりを取り、料金と対応を比較すると失敗を防げます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイトに明記がありません。正確な金額は現地の見積もりでご確認ください(2026年7月12日確認)。</p>
          </section>

          <MiniCta href="https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G" label="エアホーム公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

          <FelmatBanner
            slug="airhome-support"
            heading="まずは無料相談で費用の目安を確認"
            note="料金は公式サイトに掲載がないため、症状を伝えて見積もりを確認してから判断しましょう。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・フォームで相談", "症状(冷えない・水漏れ・異音など)や設置状況を伝えます。公式記載の電話番号は050-1793-2218です。"],
                ["訪問日時の調整", "訪問時間帯(9〜12時・12〜15時・15〜18時・18〜21時)から都合の良い枠を選びます。地域により訪問までの時間が変わります。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。総額の見積もりは書面で残しましょう。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払いをして完了です。保証の有無・期間も確認しておきましょう。"],
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申し込みの流れ・フォーム入力項目の詳細（2026年8月2日 公式確認）</h2>
            <p className="leading-8 text-slate-700">
              公式サイトの申し込みルートは、電話（050-1793-2218）とお問い合わせフォームの2つです。2026年8月2日にフォームの構成を再確認したところ、入力項目は次のとおりで、訪問希望日は第1希望・第2希望の2枠まで指定できます。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["必須項目", "お名前／フリガナ／メールアドレス／電話番号（確認用含む）／郵便番号／ご住所／ご依頼内容／ご希望の訪問日"],
                    ["ご依頼内容の選択肢", "冷えない／水漏れ／異音／電源が入らない／その他 の5択"],
                    ["訪問希望日", "第1希望・第2希望の2枠を指定"],
                    ["訪問時間帯", "9〜12時／12〜15時／15〜18時／18〜21時 の4枠から選択"],
                    ["任意項目", "法人名／お問い合わせ内容（自由記入）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              フォームに法人名の入力欄があり、法人からの依頼も想定した造りになっています（請求書払いの可否など法人対応の詳細は公式に明記がないため、必要な場合は電話で確認を）。一方で、<strong className="font-semibold">フォーム送信後の連絡方法・返信までの目安時間、訪問後の見積もり提示から作業完了までの所要時間は、いずれも公式に記載がありません</strong>。急ぎの場合は電話で問い合わせ、訪問時には作業内容と総額を書面で確認するのが確実です。
            </p>
          </section>

          <section id="menu-scope" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">症状・メニュー別の対応範囲（2026年8月2日 公式確認）</h2>
            <p className="leading-8 text-slate-700">
              公式サイトで対応範囲として確認できるのは、申し込みフォームの「ご依頼内容」に並ぶ次の5つの選択肢です。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["冷えない", "対応症状として掲載（作業内容・料金の詳細は記載なし）"],
                    ["水漏れ", "対応症状として掲載（同上）"],
                    ["異音", "対応症状として掲載（同上）"],
                    ["電源が入らない", "対応症状として掲載（同上）"],
                    ["その他", "上記以外の症状・相談のための選択肢"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              エアコンクリーニング・取り付け・撤去といった修理以外のメニュー、対応メーカー・年式・業務用エアコンの可否は、いずれも公式に記載がありません（2026年8月2日確認）。症状別・機種別の対応範囲を事前に比べたい場合は情報が不足しているため、該当するか微妙な依頼内容は「その他」で相談し、受付時に対応可否を確認する形になります。
            </p>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">支払い方法・キャンセル規定（2026年8月2日 公式確認）</h2>
            <p className="leading-8 text-slate-700 mb-4">
              2026年8月2日に公式サイトを再確認しましたが、支払い方法・キャンセル規定はいずれも掲載がありません。掲載がない項目は「ない」のではなく「電話で確認する」項目と捉えて、依頼前に次を押さえておきましょう。
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["支払い方法", "公式に記載なし。現金以外（クレジットカード・振込・QR決済）を使いたい場合は受付時に要確認"],
                    ["支払いタイミング", "公式に記載なし（作業完了後か前払いかを要確認）"],
                    ["キャンセル料", "公式に記載なし。無料でキャンセルできる期限があるかを要確認"],
                    ["日程変更", "公式に記載なし。変更の連絡期限・手数料の有無を要確認"],
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
              この4点は業者による差が大きい項目です。とくにキャンセル規定は、<strong className="font-semibold">見積もり金額に納得できなかった場合に無料で断れるか</strong>に直結します。訪問前の電話の時点で「見積もり後に断った場合、出張費やキャンセル料はかかりますか」と確認し、回答をメモに残しておくのが安全です。
            </p>
          </section>

          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりで確認すべきチェックポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              料金の考え方の表で見たとおり、エアホームは出張費・見積もり料・症状別実額・キャンセル料・割増のいずれも非公開です。非公開の項目が多い業者ほど、見積もり時の確認がそのまま自衛策になります。訪問時には次の6点をチェックしましょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>出張費・見積もり料の有無</strong>——見積もりだけで断った場合にも費用が発生するか、訪問前の電話で確認する</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>総額の内訳</strong>——点検料・部品代・作業料が見積書に項目ごとに分かれて記載されているか</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>時間帯による割増</strong>——18〜21時枠など遅い時間帯の訪問で割増が付くか</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>保証</strong>——修理後に同じ症状が再発した場合の無償対応の有無・期間が書面に残るか</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>事業者情報</strong>——見積書・請求書に法人名（屋号）・担当者名・連絡先が記載されるか</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span><strong>資格</strong>——ガス補充や電気系統の作業を伴う場合、有資格者が対応するか</span></li>
            </ul>
          </section>

          <section id="confusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">同名・類似業者との混同に注意</h2>
            <p className="leading-8 text-slate-700 mb-4">
              「エアホーム（AIR HOME）」は一般的な語の組み合わせのため、検索すると不動産・住宅・空調以外の「エア○○」系など、無関係の事業者・サービスが結果に混ざりやすい名称です。実際、当サイトの調査でも検索結果の上位にエアコン修理と無関係の「エア」関連ページが多く表示されました（2026年8月1日確認）。なお「株式会社エアホーム」という同名法人の実在は、今回の調査では確認できませんでした。
            </p>
            <p className="leading-8 text-slate-700">
              評判や口コミを調べる際に別事業者の情報を同社のものと誤認しないよう、次の3点で同一の事業者かを確認しましょう。
            </p>
            <ul className="mt-3 space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span>公式ドメインが <strong className="font-semibold">airhomesupport.com</strong> であること</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span>所在地が<strong className="font-semibold">神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402</strong>であること</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span>電話番号が<strong className="font-semibold">050-1793-2218</strong>（公式記載）であること</span></li>
            </ul>
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
              エアホームは、冷えない・水漏れ・異音・電源が入らないといった代表的なエアコントラブルに対応する、横浜市拠点の出張修理サービスです。エアコン修理に絞って症状から相談できる点は分かりやすい一方、料金・受付時間・保証・許認可・会社概要のいずれも公式サイトに掲載がなく、第三者の口コミも公開情報として確認できませんでした(2026年7月12日実査)。依頼時には「総額見積もりを書面で」「保証の有無・期間の確認」「運営会社・資格の確認」の3点を押さえておくと安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは症状を伝えて、対応可否と費用の目安を確認してみましょう。</p>
              <a href="https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
                エアホーム公式サイトを見る
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
      <StickyCta href="https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G" label="エアホーム公式サイトを見る" />
</article>
    </>
  );
}
