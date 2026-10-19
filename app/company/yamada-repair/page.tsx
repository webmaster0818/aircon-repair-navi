import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ヤマダ電機のエアコン修理依頼の方法｜受付電話・Web申込・出張修理料金と評判【2026年10月】",
  description:
    "ヤマダ電機のエアコン出張修理（施工：株式会社ヤマダテクニカルサービス）の受付方法・料金・口コミの傾向を、当サイトが公式サイトで確認しています（2026年10月19日確認）。料金表の掲載がない現在の状況、参考となる旧公式掲載額（出張料4,500円等）、申込前に総額を確認する方法をご説明します。",
  alternates: { canonical: "/company/yamada-repair" },
};

const UPDATED = "2026年10月19日";
const OFFICIAL = "https://yamada-ts.co.jp/";

const toc = [
  { id: "summary", label: "ヤマダ電機の出張修理とは" },
  { id: "request", label: "修理依頼の方法（受付電話・Web・受付時間）" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の仕組み" },
  { id: "flow", label: "申込から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ヤマダ電機のエアコン修理の出張費はいくらですか？",
    a: "2026年8月の公式サイト刷新（yamada-ts.co.jp）に伴い、現在は出張料の金額掲載がなくなりました（2026年10月19日確認）。刷新前の旧公式ページでは出張料（エリア内）4,500円・修理代とは別途と案内されていました（2026年7月11日当サイト確認）。申込時に、電話またはフォームで最新の出張料をご確認ください。",
  },
  {
    q: "見積もり後にキャンセルしたら費用はかかりますか？",
    a: "ヤマダデンキの出張修理案内には「訪問後にキャンセルをされた場合、訪問にかかった実費や診断料等をご負担いただくことがございます」と明記されています。そのため、修理を行わない場合でも費用が発生する可能性があります。金額は公式に公開されていないため、申込時にご確認ください（2026年10月19日確認）。",
  },
  {
    q: "エアコン修理の料金の目安はどのくらいですか？",
    a: "刷新前の公式料金表では冷房不良（冷えない）20,000円〜、水漏れ10,000円〜・出張料4,500円別途と案内されていました（2026年7月11日当サイト確認）。2026年8月の公式サイト刷新後は料金表の掲載がなくなったため（2026年10月19日確認）、現地での見積もりで総額を確認してから依頼することをおすすめします。",
  },
  {
    q: "他店で買ったエアコンでも修理してもらえますか？",
    a: "はい。ヤマダデンキの出張修理申込フォームには「他社購入」の選択肢があり、他店購入品も対応可能です。ただし保証条件により自己負担が発生する場合があります。また地域によっては出張修理を承れない場合がある旨も公式に明記されているため、対応可否は申込時にご確認ください。",
  },
  {
    q: "メーカー保証や長期保証は使えますか？",
    a: "公式には「各種保証をご利用の際は、事前に保証内容をご確認の上お申込みください」と案内されています。メーカー保証期間内・ヤマダの長期保証（ベストFC保証等）に加入していれば負担が変わる場合があるため、保証書と加入内容を手元に用意してお申し込みいただくことをおすすめします。保証期間内は、メーカー修理のほうが有利な場合もあります。",
  },
  {
    q: "対応エリアを教えてください。",
    a: "ヤマダテクニカルサービスが直営で出張修理を行う地域は、公式ページ上では群馬県（前橋・高崎・藤岡・渋川・伊勢崎）、新潟市、九州地区（福岡・佐賀・熊本・長崎・鹿児島・宮崎・沖縄）、北海道（札幌市・石狩市の一部）と限定的に案内されています。それ以外の地域はヤマダデンキの申込窓口経由での手配となり、「地域によっては出張修理を承れない場合がある」と明記されています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ヤマダ電機のエアコン修理依頼の方法｜受付電話・Web申込・出張修理料金と評判【2026年10月】",
  datePublished: "2026-06-10",
  dateModified: "2026-10-14",
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
          { name: "ヤマダ電機のエアコン修理の評判", href: "/company/yamada-repair" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ヤマダ電機のエアコン修理依頼の方法
            <br className="hidden md:block" />
            受付電話・Web申込・料金と評判【2026年10月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-14">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="yamada-repair" name="ヤマダ電機 出張修理" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが効かない、水漏れや異音が発生したといった場合、大手家電量販店の出張修理は窓口が明確で、相談しやすい選択肢です。
            本記事では、
            <strong className="font-semibold text-slate-900">ヤマダ電機のエアコン出張修理（施工＝株式会社ヤマダテクニカルサービス）</strong>
            について、当サイトが公式ページを直接確認した内容（2026年7月11日確認）をもとに、料金・出張費・口コミの傾向・利用前に確認すべき点を、良い点と注意すべき点の両面から中立的な立場でまとめています。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">本記事の要点</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・実際に修理を担当するのは<strong>株式会社ヤマダテクニカルサービス（電気工事業登録・建設業許可・フロン回収業の有資格事業者）</strong>です。量販店グループの有資格事業者が施工する点が主な特徴です</li>
              <li>・料金は<strong>2026年8月の公式サイト刷新後は掲載されていません（見積もりで確認）</strong>。刷新前の旧公式掲載額は出張料4,500円／冷房不良20,000円〜／水漏れ10,000円〜（2026年7月11日当サイト確認）。<strong>訪問後キャンセル・修理不能でも実費・診断料等がかかる場合</strong>があります</li>
              <li>・<strong>直営の出張エリアは群馬・新潟市・九州・札幌石狩の一部に限られます</strong>。エリア外の場合やお急ぎの場合は、料金の実額を公開している業者との<Link href="/cost/price-index/" className="text-sky-700 underline">相見積もり</Link>をおすすめします</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月11日にヤマダテクニカルサービス／ヤマダデンキの公式ページで確認した内容です。料金・エリアは変更される場合があります。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ヤマダ電機の出張修理とは</h2>
            <p className="leading-8 text-slate-700">
              ヤマダ電機のエアコン出張修理は、<strong className="font-semibold">ヤマダホールディングスグループの株式会社ヤマダテクニカルサービス（YTS）</strong>が施工を担当する、家電の出張修理サービスです。技術スタッフが自宅を訪問し、設置された状態のエアコンを点検・修理します。エアコンは持ち込みではなく、出張での対応が前提です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              YTSは2019年設立で、公式会社概要に<strong className="font-semibold">電気工事業登録・みなし電気工事業登録・建設業許可・第一種フロン類充填回収業</strong>などの許認可が明記されている有資格事業者です。エアコンは電気工事とフロンを扱うため、これらの資格を公表している点は、資格を公表していない業者との明確な違いといえます（2026年7月11日公式確認）。
            </p>
            <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
              <p className="text-base font-bold text-slate-800 mb-1">公式サイトで対応エリア・料金を確認する</p>
              <p className="text-sm text-slate-500 mb-4">出張料・診断料の有無と、お住まいの地域が対応エリアかどうかをご確認ください。</p>
              <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="ac-btn ac-btn-primary px-7 py-3">
                ヤマダテクニカルサービス公式サイトを見る
              </a>
            </div>
          </section>

          <section id="request" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理依頼の方法（受付電話・Web・受付時間）</h2>
            <p className="leading-8 text-slate-700 mb-4">
              ヤマダデンキでエアコンの修理を依頼する窓口は、<strong className="font-semibold">加入している保証の種類によって電話番号が分かれています</strong>。2026年10月14日にヤマダデンキ公式サイトのお問い合わせページ・修理受付ページで確認した内容は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {["ご利用の場面", "窓口", "受付"].map((h) => (
                      <th key={h} className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Webで申し込みたい（保証の有無を問わない）", "公式サイトの出張修理受付フォーム", "24時間。メーカー・型番・購入日・症状・保証の種類を入力。ヤマダ以外で買った製品・保証なしも選択可（ベストFC保証は電話のみ）"],
                    ["家電総合保証「家電保」に入っている", "修理受付サポートセンター 0120-506-858", "電話24時間受付（19:00〜翌10:00は自動音声）・元日を除く。9時台・10時台はつながりにくいと注記"],
                    ["ヤマダの長期無料保証を使う", "長期無料保証の窓口 0570-666-533", "電話24時間受付（19:00〜翌10:00は自動音声）・元日を除く。オンライン受付は24時間"],
                    ["修理を受け付けた後の問い合わせ", "YAMADA SELECT 0120-258-260", "10:00〜19:00（元日を除き年中無休）"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      {r.map((v, i) => (
                        <td key={i} className={`border border-slate-300 px-3 py-2 leading-7 ${i === 0 ? "font-semibold" : ""}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700 text-[0.95rem] leading-7">
              <li>・<strong className="font-semibold">用意するもの</strong>：購入時のレシートまたは保証書（長期無料保証は保証No.21桁・保証台紙）、エアコンのメーカーと型番、購入日、症状のメモをご用意ください</li>
              <li>・<strong className="font-semibold">受付時間の注意</strong>：公式の告知ページでは「有人対応は9:00〜19:00、それ以外は自動受付」とされ、お問い合わせページの「19:00〜翌10:00は自動音声」と表記が分かれています。時間外に電話するとSMSで受付フォームのURLが届く仕組みです。21時頃以降の問い合わせは翌日の受付扱いと案内されています</li>
              <li>・<strong className="font-semibold">訪問時期</strong>：訪問までの日数の目安は公式に記載されていません。受付後に担当者から電話で訪問日の連絡があり、希望日に沿えない場合やその場で直らず再訪問になる場合があると案内されています</li>
              <li>・<strong className="font-semibold">料金</strong>：金額表は公式に掲載されていません。見積もりは訪問時に担当者へ確認する形で、訪問後にキャンセルすると訪問の実費や診断料がかかる場合があります（家電保の規程でも、修理キャンセル時の点検診断料・出張料はお客様負担）</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              夏場や繁忙期は電話がつながりにくいという口コミも見られるため、お急ぎの場合は、電話よりも先にWebフォームで受付を済ませることをおすすめします。保証が切れていて早く直したい場合は、<Link href="/ranking/fast" className="text-sky-600 underline underline-offset-2">対応が早い修理業者</Link>への相見積もりも選択肢になります。
            </p>
            <p className="mt-3 text-xs text-slate-400">出典：ヤマダデンキ公式「お問い合わせ」「修理のご依頼」「出張修理受付フォーム」「24時間受付のお知らせ」、家電保リーフレット（いずれも2026年10月14日確認）。電話番号・受付時間は変更される場合があります。</p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ヤマダ電機 エアコン出張修理"],
                    ["受付窓口", "株式会社ヤマダデンキ（本社：群馬県高崎市栄町1番1号）の出張修理申込ページ"],
                    ["施工会社", "株式会社ヤマダテクニカルサービス（群馬県高崎市栄町1-1 ヤマダHD本社10F・2019年11月設立・資本金1,000万円・親会社=株式会社ヤマダホールディングス）"],
                    ["許認可（施工会社）", "電気工事業登録・みなし電気工事業登録／建設業許可（国土交通大臣許可（般-5）第29087号）／第一種フロン類充填回収業／産業廃棄物収集運搬業／古物商（群馬県公安委員会第421032020100号）／ISMS認定（公式明記）"],
                    ["サービス形態", "家電量販店グループによる出張修理（持ち込み不可・出張前提）"],
                    ["出張料（エリア内）", "現在は公式掲載なし・申込時に確認（旧公式掲載4,500円=2026年7月11日当サイト確認）"],
                    ["対応可否", "他店購入品も対応可。ただし地域により出張修理を承れない場合あり（公式明記）"],
                    ["申込方法", "公式サイトの出張修理申込フォーム（ベストFC保証利用者は電話受付）"],
                    ["公式サイト", "https://yamada-ts.co.jp/（2026年8月刷新）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：株式会社ヤマダテクニカルサービス公式（会社概要・サービスページ）およびヤマダデンキ公式の出張修理案内（2026年7月11日確認）。料金・対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、レビュー紹介サイト・体験談ブログ・Q&Aサイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・大手家電量販店グループが運営している点への信頼</li>
                  <li>・申込みから訪問までの手順や窓口がわかりやすい点</li>
                  <li>・有資格の技術スタッフが訪問する点への信頼</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・出張費や診断料が別途かかり割高に感じたという指摘</li>
                  <li>・自分の地域が出張エリア外で断られたという指摘</li>
                  <li>・繁忙期は訪問日が先になったという指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※複数のレビュー紹介サイト（最安修理.com・セーフリー・DENKI110・フィルムプリンター等）・Q&Aサイトに掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向は、想定外の費用と、エリア・日程の2点に集約されます。いずれも<strong className="font-semibold">申込時に出張料・診断料の有無、対応エリア、訪問の目安を確認</strong>することで、多くは事前に回避できます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>出張料が修理代とは別にかかります</strong>。2026年8月の公式サイト刷新後は金額が掲載されていないため、申込時にご確認ください（刷新前の旧公式掲載は4,500円=2026年7月11日当サイト確認）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>訪問後にキャンセル・修理不能でも費用が発生する場合があります</strong>——ヤマダデンキ公式に「訪問にかかった実費や診断料等をご負担いただくことがある」と明記されています（金額は公式に公開されていません・2026年10月19日確認）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>直営の出張エリアが限定的です</strong>。公式に案内される直営地域は群馬・新潟市・九州地区・札幌石狩の一部で、「地域によっては出張修理を承れない場合がある」と明記されています</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>持ち込み修理には対応しておらず、出張修理が前提</strong>です。エアコンは設置された状態での点検・修理となります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>各種保証は事前の確認が必要です</strong>——メーカー保証期間内やヤマダの長期保証（ベストFC保証等）加入時は負担が変わる場合があり、公式でも「事前に保証内容をご確認の上お申込みください」と案内されています。保証期間内はメーカー修理が有利な場合もあります</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>全国展開の大手家電量販店グループのため、窓口が明確です</li>
                  <li>電気工事業登録・建設業許可・フロン回収業などを公表する有資格の施工会社が対応します</li>
                  <li>許認可・会社情報を公式に公開する施工会社が対応します（料金は2026年8月のサイト刷新後は見積もり確認方式）</li>
                  <li>他店で購入したエアコンでも相談できます</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出張料に加え、キャンセル・修理不能時にも費用がかかる場合があります</li>
                  <li>直営の出張エリアが限定的で、地域により断られることがあります</li>
                  <li>持ち込み不可・出張前提で、繁忙期は訪問日が先になる傾向があります</li>
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
                  <li>大手の有資格施工会社に依頼したい方</li>
                  <li>対応エリア（群馬・新潟市・九州・札幌石狩など）に住んでいる方</li>
                  <li>ヤマダの長期保証やメーカー保証を活用したい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>出張費・診断料をかけずに料金を最小限に抑えたい方</li>
                  <li>直営エリア外で、早急な対応が必要なトラブルがある方</li>
                  <li>複数業者の実額を比較してから決めたい方</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 夏の繁忙期・緊急性の注意 */}
          <section className="scroll-mt-24">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-orange-900 mb-2">7〜8月の繁忙期は予約の取りやすさも比較の対象になります</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコン修理の依頼は夏場（7〜8月）に集中するため、ヤマダ電機の出張修理に限らず、繁忙期はどの窓口も予約が取りにくくなる傾向があります。修理を待つ間の熱中症のリスクを考慮し、料金だけでなく訪問可能な日時もあわせて確認することをおすすめします。
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                急ぎの場合や直営エリア外の場合は、24時間受付・最短即日対応を公称する専門業者（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>）にも同時に見積もりを依頼し、到着が早い方に依頼する「相見積もり」が有効です。※対応の早さは地域・混雑状況により変動するため、受付時に到着の目安をご確認ください。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">対応の早さで業者を比較する →</Link>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月11日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張料（エリア内）", "現在は公式掲載なし・申込時に確認（旧公式掲載4,500円=2026年7月11日当サイト確認）"],
                    ["エアコン冷房不良（冷えない）", "旧公式掲載20,000円〜（2026年7月11日当サイト確認・現在は公式掲載なし）"],
                    ["エアコン水漏れ", "旧公式掲載10,000円〜（2026年7月11日当サイト確認・現在は公式掲載なし）"],
                    ["見積もり", "公式に無料/有料の明記なし（現地見積もりで総額を確認）"],
                    ["訪問後キャンセル・修理不能時", "訪問の実費・診断料等を負担する場合あり（金額は公式非開示／第三者情報で計4,950円の例・要確認）"],
                    ["深夜・早朝の割増", "公式に記載なし（申込時に要確認）"],
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
              ヤマダ電機の出張修理は、現在は公式に料金の金額が掲載されておらず（2026年10月15日・公式確認）、見積もりで総額を確認する方式です。そのうえで、<strong className="font-semibold">「修理をしなくても訪問実費・診断料がかかる場合がある」</strong>点は、量販店・メーカー系の修理に共通する、見落とされやすい費用です。出張料や診断料まで含めると、街の修理業者のほうが費用が安く、対応も早い場合があります。費用の相場は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">料金調査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でご確認いただけます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※旧公式掲載額は、2026年8月の公式サイト刷新前に施工会社（ヤマダテクニカルサービス）の公式ページ・公式料金表に記載されていた目安です。2026年10月19日時点の公式ページ（yamada-ts.co.jp／yamada-denki.jp の修理案内）には金額の記載はありません。旧料金表PDFは現在、施工会社のトップページへ転送されます。正確な金額は申込・現地の見積もりでご確認ください。</p>
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
              <p className="text-base font-bold text-slate-800 mb-1">量販店と街の業者の費用比較</p>
              <p className="text-sm text-slate-500 mb-4">出張費・診断料を含めた総額で比較することをおすすめします。費用の相場と、対応の早い業者をご確認ください。</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/cost/repair-price/" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  エアコン修理の料金相場ガイド →
                </Link>
                <Link href="/ranking" className="block rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition-colors">
                  修理業者ランキングで比較する →
                </Link>
              </div>
            </div>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申込から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["公式サイトから申込み", "出張修理の申込フォームに、症状・設置状況・製品情報・保証の有無を入力して申込みます（ベストFC保証利用者は電話受付）。"],
                ["受付・費用と対応エリアの確認", "確認メールや連絡で受付され、出張料・診断料の有無や対応可能エリアかどうかを確認できます。"],
                ["訪問日時の調整", "都合の良い日時を調整し、技術スタッフが訪問します（繁忙期は先の日程になる場合あり）。"],
                ["現地確認・見積もり", "技術スタッフがエアコンの状態を確認し、作業内容と費用の総額を提示します。"],
                ["修理作業・動作確認・支払い", "見積もり内容に同意したうえで修理を実施し、動作確認と支払いを済ませて完了です。"],
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
              ヤマダ電機のエアコン出張修理は、電気工事業登録・建設業許可・フロン回収業などを公表する有資格の施工会社（ヤマダテクニカルサービス）が対応するサービスです。料金は2026年8月の公式サイト刷新後は掲載されていないため、見積もりで総額を確認したうえで依頼を判断できます（刷新前の旧公式掲載は出張料4,500円・冷房不良20,000円〜等）。一方で、訪問後キャンセル・修理不能時にも費用がかかる場合があること、直営の出張エリアが限られていることは、依頼前にご確認いただきたい点です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              申込時には「出張料・診断料の有無と金額」「自分の地域が対応エリアか」「メーカー保証・長期保証が使えるか」の3点を確認し、現地での総額の見積もりに納得したうえで依頼することで、量販店系修理の注意点の多くは事前に解消できます。お急ぎでない場合は、複数の業者から見積もりを取り、料金と対応を比較したうえで選ぶことをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンの出張修理を検討している方へ</p>
              <p className="text-sky-100 text-sm mb-5">お申し込みの前に、出張料・診断料の有無と対応エリアをご確認ください。</p>
              <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                ヤマダテクニカルサービス公式サイトを見る
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
