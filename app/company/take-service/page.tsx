import type { Metadata } from "next";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";

export const metadata: Metadata = {
  title:
    "テイクサービスの口コミ・評判は？完全見積制の料金と注意点を実査【2026年8月】",
  description:
    "エアコン修理のテイクサービス（運営: 株式会社アシスト）の口コミ傾向・料金の仕組みを当サイトが公式ページで実査（2026年7月7日確認）。出張費・見積・依頼前キャンセル無料、症状別の実額は非公開＝完全見積制という特徴、調査費用が有料になる条件、依頼前チェック3点まで正直に解説します。",
  alternates: { canonical: "/company/take-service" },
};

const UPDATED = "2026年8月2日";

const toc = [
  { id: "summary", label: "テイクサービスとは" },
  { id: "review-summary", label: "口コミ総評" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "flow-detail", label: "申し込み〜作業完了までの流れ【詳細版】" },
  { id: "menu-price", label: "対応メニューと料金の見方" },
  { id: "payment", label: "支払い方法・キャンセル規定" },
  { id: "checklist", label: "見積もりで確認すべきチェックポイント" },
  { id: "confusion", label: "同名・類似業者との混同に注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "テイクサービスの出張費・見積もりは本当に無料ですか？",
    a: "はい。公式ページに「出張料はいただいておりません。作業料金のみでご案内」「お見積は無料」「施工依頼前のキャンセル料金はいただいておりません」と明記されています（2026年7月7日確認）。ただし器具の取り外し・通電チェック・電波状況調査・漏電調査は調査費用が発生する場合があると注記されています（金額非公開）。",
  },
  {
    q: "料金はいくらくらいかかりますか？",
    a: "症状別の実額は公式に掲載されておらず、現地見積もりで金額が決まる完全見積制です。「見積金額の範囲内での作業」を公式に明記しているため、作業前に総額見積もりを書面で受け取ってから判断しましょう。相場の目安は当サイトの27社料金実査（/cost/price-index/）が参考になります。",
  },
  {
    q: "誰が修理に来るのですか？",
    a: "テイクサービス自体は受付・手配を行う窓口で、「当社に登録頂いている加盟店のスタッフがお伺いします」と公式に明記されています。実際の施工は全国の加盟店が行うため、作業品質・カード対応・保証の細部は担当加盟店により異なります。",
  },
  {
    q: "保証はありますか？",
    a: "施工後に同じ症状が再発した場合は保証期間内なら無料保証、修理箇所と別の箇所の故障は対象外というのが公式の基本線です。ただし「工事内容により保障期間が異なる」ため、期間と範囲は依頼前に加盟店へ確認するよう公式も案内しています。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "公称は最短5分です。ただし夜間や繁忙期・出勤人数の関係で素早い対応ができない場合は他の業者を紹介されることがあると公式FAQに明記されています。真夏のピーク時は受付時に到着目安を確認しましょう。",
  },
  {
    q: "支払い方法は何が使えますか？",
    a: "VISA・マスター・JCBのクレジットカードに対応しています（一部の加盟店では不可）。法人の後日請求払いも条件付きで対応とされています。カード払い希望の場合は受付時に伝えておくのが確実です。",
  },
  {
    q: "修理以外の作業(クリーニングや取り付け・取り外し)も頼めますか？",
    a: "公式受付ページでは、エアコン修理のほかにエアコンクリーニング・取り付け・取り外し・ガスチャージがメニューとして掲載されています(2026年8月2日確認)。ただし、いずれも個別の料金は掲載されておらず、現地見積もりで金額が決まる方式です。",
  },
  {
    q: "他社の見積もりが高かった場合、安くしてもらえますか？",
    a: "公式FAQには「他社よりも安いご案内を心掛けております」と記載されています(2026年8月2日確認)。ただし必ず安くなることを保証する記載ではないため、金額を重視する場合は他社の見積書を手元に用意したうえで比較・相談するのが現実的です。",
  },
  {
    q: "作業後に高額請求される心配はありませんか？",
    a: "公式FAQでは「作業後に高額請求されることはありますか？」という質問に対し「いいえ、御座いません」とし、作業前に方法と料金を詳しく説明すると回答しています(2026年8月2日確認)。そのうえで、口コミでは金額の認識ズレに関する指摘も確認できるため、作業前の見積もりを書面やスマホ写真で残しておくことをおすすめします。",
  },
  {
    q: "夜間でも作業してもらえますか？",
    a: "公式FAQでは、夜間対応について「ご相談頂ければお客様のご希望に合わせてお伺い致します」と案内されています(2026年8月2日確認)。ただし、夜間や繁忙期は対応できず他の業者を紹介される場合があることもFAQに明記されているため、受付時に到着目安を確認しましょう。",
  },
  {
    q: "施工を依頼した後のキャンセルはできますか？",
    a: "無料と明記されているのは「施工依頼前」のキャンセルです(2026年8月2日確認)。施工依頼後・作業開始後のキャンセル規定は公式ページに記載が確認できないため、見積もりを承諾する前に、依頼後にキャンセルした場合の扱いを担当スタッフに確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "テイクサービスの口コミ・評判は？エアコン修理の料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-10",
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
          { name: "テイクサービスの口コミ・評判", href: "/company/take-service" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            テイクサービスの口コミ・評判は？
            <br className="hidden md:block" />
            エアコン修理の料金・対応エリアを徹底調査【2026年最新】
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
            エアコンが急に効かなくなったり、水漏れや異音が起きたりしたとき、すぐに動いてくれる修理サービスは心強い存在です。
            この記事では、24時間受付のエアコン修理受付サービス
            <strong className="font-semibold text-slate-900">テイクサービス</strong>
            について、当サイトが公式ページを直接確認した事実（2026年7月7日実査）をもとに、料金の仕組み・口コミの傾向・依頼前に確認すべき点を、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>出張費・見積もり・依頼前キャンセルは無料</strong>（公式明記）。ただし<strong>症状別の料金実額は公式に掲載がなく「完全見積制」</strong>です</li>
              <li>・実態は<strong>全国の加盟店を紹介する受付サービス（紹介型）</strong>。施工は加盟店が行い、保証内容も工事内容・加盟店により異なります</li>
              <li>・向くのは「夜間・急ぎでとにかく早く来てほしい人」。<strong>金額を比較してから決めたい人は、実額公開のある業者と相見積もりが安全</strong>です（<Link href="/cost/price-index/" className="text-sky-700 underline">27社の料金実査一覧</Link>）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月7日に公式受付ページで確認した内容です。</p>
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
          <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-3">＼ 公式サイトはこちら ／</p>
            <div className="flex justify-center mb-4"><a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NKMSH" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www25.a8.net/svt/bgt?aid=260628928534&wid=013&eno=01&mid=s00000014894010006000&mc=1" /></a></div>
            <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">テイクサービス公式サイトを見る →</a>
            <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">テイクサービスとは</h2>
            <p className="leading-8 text-slate-700">
              テイクサービスは、冷えない・水漏れ・異音・電源が入らないといったエアコントラブルの<strong className="font-semibold">受付・紹介サービス</strong>です。公式ページに「当社に登録頂いている加盟店のスタッフがお伺いします」と明記されているとおり、コールセンターが全国の加盟店を手配し、施工は加盟店が行う仕組みです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              年間30,000件以上の出動実績（公称）・24時間受付・最短5分での駆けつけ（公称）をうたっており、「まずスピーディーに動いてほしい」ニーズに向いた窓口です。難易度が高く他社に断られた内容にも対応するとしています（2026年7月7日公式確認）。
            </p>
            <AffiliateBanner
              slug="take-service"
              heading="公式サイトで詳細・料金を確認する"
              note="24時間受付・最短即日対応。まずは無料相談で症状と費用の目安を確認してみましょう。"
            />
          </section>

          <section id="review-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ総評</h2>
            <p className="leading-8 text-slate-700">
              テイクサービスの口コミは評価がはっきり分かれています。口コミまとめサイト「口評」では総合4.0/5.0とされ、相見積もりで見積額が最安だった・深夜でも電話が繋がった・急な依頼に対応してもらえたという好意的な声が確認できます。一方、Yahoo!知恵袋では「テイクサービスというエアコン業者は安全ですか?」という質問(2019年投稿・閲覧7.7万回超)に対し、無料のはずの出張・見積もりで費用を請求されたという報告や修理後すぐの再故障の報告など、強い否定的な回答が付いており、厳しい声も確認できます(2026年8月1日時点)。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              実作業は全国の提携業者(加盟店)が行う紹介型のため「品質は担当業者に依存し当たり外れがある」という構造的な指摘は第三者の解説記事でも共通しています。急ぎで駆けつけてほしい場面では利用価値があるものの、金額トラブルを避けるため、作業前の書面見積もりの確保と、急ぎでなければ相見積もりを強くおすすめします。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "テイクサービス"],
                    ["運営会社", "株式会社アシスト（東京都渋谷区渋谷3-28-15）"],
                    ["業態", "加盟店紹介型（受付・手配を行い、施工は全国の加盟店が実施）"],
                    ["許認可の表示", "公式ページに建設業許可・電気工事業登録等の記載なし（施工する加盟店の許認可も非開示・2026年7月7日確認）"],
                    ["対応エリア", "全国47都道府県（地域により対応スピードが異なる）"],
                    ["受付時間", "24時間365日（公称。訪問時間は地域・状況により変動）"],
                    ["対応スピード", "最短5分で駆けつけ（公称）"],
                    ["実績", "年間30,000件以上（公称・算出条件の記載なし）"],
                    ["支払い方法", "VISA・マスター・JCB（一部加盟店は不可）／法人の後日請求払いは条件付き対応"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式受付ページの掲載情報（2026年7月7日確認）。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、レビューサイト・Q&Aサイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・連絡から手配までが早かった（24時間受付・即日対応への評価）</li>
                  <li>・電話対応・訪問スタッフの説明が丁寧だった</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・見積額と最終請求額が違ったという指摘</li>
                  <li>・相場より高く感じた、明細が分かりにくかったという指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※複数のレビュー紹介サイト・Q&Aサイトに掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。紹介型サービスのため、実際の作業品質は担当する加盟店により差が出る点は構造的な特徴です。</p>
            <p className="mt-2 text-xs text-slate-400">参照元: <a href="https://kuchihyou.xsrv.jp/take-service/" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">口評(総合4.0/5.0の口コミまとめ)</a> ／ <a href="https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10210386690" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">Yahoo!知恵袋(安全性を尋ねるQ&A・強い否定的な回答あり)</a> ／ <a href="https://reformfact.com/takeservice-reputation/" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">リフォームファクト(業界経験者による解説記事)</a>(いずれも2026年8月1日確認)</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向はいずれも「金額の認識ズレ」に関するものです。完全見積制のサービスなので、<strong className="font-semibold">作業前に総額見積もりを書面（またはスマホ写真）で残す</strong>だけでトラブルの大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>症状別の料金実額は公式に掲載がありません</strong>（完全見積制）。「業界最安水準」等の文言はありますが金額の根拠は非公開のため、金額重視の方は実額公開業者との比較が前提です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>見積もりは無料でも、調査は有料になる場合があります</strong>——器具の取り外し作業・通電チェック・電波状況調査・漏電調査は調査費用が発生と公式明記（金額は非公開）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>保証の期間・詳細は工事内容と加盟店により異なります</strong>。「同じ症状の再発は無料保証・別箇所の故障は対象外」が公式の基本線ですが、期間の明記はないため作業前に必ず確認を</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>クレジットカードが使えない加盟店があります</strong>（VISA・マスター・JCB対応は「一部加盟店では不可」と注記）。カード払い希望は受付時に伝えるのが確実</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>繁忙期・夜間は対応できず他業者を紹介される場合があります</strong>（公式FAQ明記）。真夏のピーク時は到着目安を受付時に確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span>メーカー・年式・賃貸物件の扱いなど対応可否の条件は公式に記載がありません。特殊なケースは受付時の確認が必要です</span></li>
            </ul>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" label="テイクサービス公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>24時間受付で、急なトラブルでも相談しやすい</li>
                  <li>最短即日・スピーディーな手配を公称しており緊急時に心強い</li>
                  <li>年間30,000件以上とされる実績があり対応範囲が広い</li>
                  <li>エアコン以外の電気工事もまとめて相談しやすい</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金は作業内容で変わるため、事前の見積もり確認が前提</li>
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>地域によっては対応に時間がかかる場合がある</li>
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
                  <li>夜間や休日など、急なエアコントラブルですぐ相談したい人</li>
                  <li>エアコンと合わせて電気まわりもまとめて頼みたい人</li>
                  <li>とにかくスピーディーに手配してほしい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>あらかじめ業者と料金をじっくり比較して選びたい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月7日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張費", "無料（「どんな場所も出張費用は頂きません」と公式明記）"],
                    ["見積もり", "無料"],
                    ["依頼前キャンセル", "無料"],
                    ["調査費用", "器具外し・通電チェック・電波状況調査・漏電調査は有料（金額非公開）"],
                    ["症状別の修理実額", "公式に掲載なし（完全見積制）"],
                    ["深夜・早朝の割増", "記載なし（受付時に要確認）"],
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
              症状別の実額を公開している業者（例: 修理3,300円〜等）と違い、テイクサービスは<strong className="font-semibold">現地見積もりで金額が決まる方式</strong>です。「見積金額の範囲内での作業」を公式に約束しているため、<strong className="font-semibold">提示された見積もりを書面で残す</strong>ことが自衛の要点になります。相場感は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>で確認できます。
            </p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" label="テイクサービス公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

          <AffiliateBanner
            slug="take-service"
            heading="まずは無料見積もりで金額を確認"
            note="出張費・見積もり・依頼前キャンセルは無料（公式明記）。金額を見てから判断できます。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。受付は24時間365日とされています。"],
                ["訪問日時の調整", "都合の良い日時を調整し、スタッフが訪問します。"],
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

          <section id="flow-detail" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申し込み〜作業完了までの流れ【詳細版】</h2>
            <p className="leading-8 text-slate-700 mb-6">
              2026年8月2日に公式受付ページを再確認したところ、依頼の流れ自体は「簡単3ステップ」と案内されているものの、各ステップのテキストでの説明は掲載されていませんでした。そこで、公式FAQ・注意書きから確認できる事実をもとに、実際の依頼で通過する段階を当サイトで整理すると次のようになります。
            </p>
            <ol className="space-y-4">
              {[
                ["受付(24時間365日)", "電話・Webで症状(冷えない・水漏れ・異音・電源が入らない等)と設置状況を伝えます。夜間の作業も相談すれば希望に合わせて対応すると公式FAQにあります。カード払い希望・法人の後日請求払い希望はこの時点で伝えておきましょう。"],
                ["加盟店の手配・訪問", "テイクサービスに登録している加盟店のスタッフが訪問します(最短5分・公称)。夜間・繁忙期など対応が難しい場合は、他の業者を紹介されることがあると公式FAQに明記されています。"],
                ["現地確認・無料見積もり", "出張費・見積もりは無料です。ただし、器具の取り外し・通電チェック・電波状況調査・漏電調査が必要な場合は調査費用が発生すると注記されています(金額非公開)。該当しそうな症状のときは、調査費用の有無と金額を作業前に確認しましょう。"],
                ["依頼するかどうかの判断", "見積もりに納得できなければ、施工依頼前のキャンセルは無料と明記されています。「見積金額の範囲内での作業」が公式の約束のため、依頼する場合は総額見積もりを書面またはスマホ写真で残しておくのが安全です。"],
                ["施工・動作確認", "見積もり承諾後に加盟店が作業を行い、完了後に動作を確認します。同じ症状が保証期間内に再発した場合は無料保証の対象(別箇所の故障は対象外)のため、保証の期間と範囲をこの時点で聞いておきましょう。"],
                ["支払い", "VISA・マスター・JCBのクレジットカードに対応(一部加盟店は不可)。法人の後日請求払いは条件付き対応です。"],
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
            <p className="mt-4 text-xs text-slate-400">※2026年8月2日公式確認。公式ページの「簡単3ステップ」は画像での案内のみで、上記は公式FAQ・注意書きの記載を当サイトが段階順に整理したものです。</p>
          </section>

          <section id="menu-price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">対応メニューと料金の見方</h2>
            <p className="leading-8 text-slate-700">
              2026年8月2日に公式受付ページを確認したところ、対応メニューとして次の5つが掲載されていました。いずれも<strong className="font-semibold">個別の料金表は掲載されておらず、現地見積もりで金額が決まる完全見積制</strong>です。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["エアコン修理", "冷えない・水漏れ・異音・電源が入らない等のトラブル対応。実額は現地見積もり"],
                    ["エアコンクリーニング", "メニューとして掲載あり。料金掲載なし"],
                    ["エアコン取り付け", "メニューとして掲載あり。料金掲載なし"],
                    ["エアコン取り外し", "メニューとして掲載あり。料金掲載なし"],
                    ["ガスチャージ", "冷媒ガスの補充。メニューとして掲載あり。料金掲載なし"],
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
              完全見積制のサービスで金額の妥当性を判断するには、<strong className="font-semibold">症状別の相場を先に頭に入れてから見積もりを受ける</strong>のが有効です。ガス補充・基板交換・水漏れ修理などの相場感は、当サイトの<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>と<Link href="/cost/price-index/" className="text-sky-700 underline">27社料金実査インデックス</Link>で確認できます。提示額が相場から大きく外れている場合は、内訳(部品代・技術料・出張関連費)の説明を求めましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※メニューの掲載内容は2026年8月2日に公式受付ページで確認したものです。対応可否は症状・機種・地域により異なります。</p>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">支払い方法・キャンセル規定</h2>
            <p className="leading-8 text-slate-700 mb-4">
              2026年8月2日に公式受付ページで確認できた、費用まわりの規定を整理します。
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["クレジットカード", "VISA・マスター・JCBに対応(一部の加盟店では不可)"],
                    ["法人の後日請求払い", "柔軟に対応(一定基準により非対応の場合あり・受付時に相談)"],
                    ["出張費", "無料(「出張料はいただいておりません」と公式FAQに明記)"],
                    ["見積もり", "無料。ただし器具外し・通電チェック・電波状況調査・漏電調査は調査費用あり(金額非公開)"],
                    ["施工依頼前のキャンセル", "無料(「キャンセル料金はいただいておりません」と公式FAQに明記)"],
                    ["施工依頼後のキャンセル", "規定の記載なし(依頼前に要確認)"],
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
              注意したいのは、カード対応が<strong className="font-semibold">加盟店単位</strong>である点と、無料と明記されているキャンセルが<strong className="font-semibold">「施工依頼前」に限られる</strong>点です。現金の持ち合わせがない状態でカード不可の加盟店が来ると支払いに困るため、カード払い希望は受付時に必ず伝え、見積もりを承諾する前に「依頼後にキャンセルした場合の扱い」も確認しておきましょう。
            </p>
            <p className="mt-3 text-xs text-slate-400">※2026年8月2日公式確認。規定は変更される場合があります。</p>
          </section>

          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりで確認すべきチェックポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              テイクサービスは完全見積制かつ施工が加盟店に委ねられる仕組みのため、<strong className="font-semibold">見積もり時点でどこまで条件を固められるか</strong>がトラブル回避の分かれ目です。訪問スタッフに次の点を確認しましょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">総額と内訳</strong>：部品代・技術料・その他費用を分けた書面見積もり(またはスマホ写真での記録)。「見積金額の範囲内での作業」が公式の約束のため、これが最大の自衛策です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">調査費用</strong>：器具外し・通電チェック・電波状況調査・漏電調査に該当する作業があるか、ある場合の金額(公式には金額非公開)</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">保証の期間と範囲</strong>：同一症状の再発は無料保証が公式の基本線ですが、期間は工事内容・加盟店により異なるため、具体的な日数と対象範囲を確認</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">支払い方法</strong>：訪問する加盟店がカード対応か(VISA・マスター・JCB対応でも一部加盟店は不可)</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">依頼後キャンセルの扱い</strong>：無料と明記されているのは施工依頼前のみ。承諾後にやめた場合の費用を事前に確認</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">相場との照合</strong>：提示額を<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別相場</Link>と比べ、大きく外れる場合は説明を求める。急ぎでなければ相見積もりが安全です</span></li>
            </ul>
          </section>

          <section id="confusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">同名・類似業者との混同に注意</h2>
            <p className="leading-8 text-slate-700">
              「株式会社テイクサービス」という名称の法人は、業種の異なる複数の会社が実在します。口コミや評判を調べる際に混同しやすいため、次の区別を押さえておきましょう。
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">大阪市住吉区の株式会社テイクサービス(take-service.jp)</strong>：ボディコーティング・板金・車内クリーニングなどカーケア専門の会社(法人番号2120001110791)。エアコン修理のテイクサービスとは別会社です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">東京都練馬区西大泉の株式会社テイクサービス</strong>：管工事・冷暖房設備工事を手がける建設業の会社で、こちらも別会社です</span></li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              本記事で紹介しているエアコン修理受付のテイクサービスは、株式会社アシスト(東京都渋谷区)が運営するとされる紹介型サービスです。評判を調べる際は、運営会社名とサービス内容(エアコン修理の受付・紹介)が一致しているかを確認し、同名の別会社の評価と取り違えないよう注意してください。
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
              テイクサービスは、24時間受付・出張費見積無料で急なエアコントラブルにすぐ相談できる受付窓口です。一方で料金は完全見積制（実額非公開）で、施工は加盟店が行うため品質や保証は担当店により差があります。依頼時には「総額見積もりを書面で」「保証期間の確認」「カード可否の確認」の3点を押さえれば、この種のサービスの弱点はほぼカバーできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは相談・見積もりで、症状と費用の目安を確認してみましょう。</p>
              <div className="flex justify-center mb-5">
                <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NKMSH" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www25.a8.net/svt/bgt?aid=260628928534&wid=013&eno=01&mid=s00000014894010006000&mc=1" /></a>
              </div>
              <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" target="_blank" rel="sponsored nofollow" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
                テイクサービス公式サイトを見る
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
      <StickyCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M" label="テイクサービス公式サイトを見る" />
</article>
    </>
  );
}
