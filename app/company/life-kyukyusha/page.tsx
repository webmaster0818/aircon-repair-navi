import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "ライフ救急車のエアコン修理の評判｜口コミ・料金の調査結果【2026年8月】",
  description:
    "エアコン修理の窓口「ライフ救急車」の料金・対応エリア・口コミの傾向を、公式ページで確認しています（2026年10月15日再確認）。料金は作業費5,500円〜＋部材費、対応エリアは24府県です。施工は別会社が担う紹介型であることや、許認可が公式に確認できない点についてもご説明します。",
  alternates: { canonical: "/company/life-kyukyusha" },
};

const UPDATED = "2026年7月12日";

const toc = [
  { id: "summary", label: "ライフ救急車とは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "制限条件・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の実態" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "ライフ救急車の公式サイトはどこですか？",
    a: "かつて使われていたドメイン（life-kyukyusha.jp）は、当サイトが2026年7月12日に確認した時点でアクセスできない状態（名前解決不可）でした。2026年10月15日には、エアコン修理の公式ページ（lifeqq.info/denki/aircon/）で料金・対応エリア・営業時間を確認できました（同日時点でこのページのSSL証明書は期限切れでした）。会社概要などの公式な情報開示が少ない点に、依頼前にご留意ください。",
  },
  {
    q: "ライフ救急車は自社で修理を行っていますか？",
    a: "紹介サイトの情報によると、ライフ救急車は受付・手配を担う窓口で、実際の施工は提携する施工会社（株式会社ARSなどと紹介されています）が対応するとされる紹介型のサービスです。実際に訪問する担当者・料金・保証は手配先により異なる場合があるため、訪問時に会社名と見積もりをご確認ください（2026年7月12日確認）。",
  },
  {
    q: "料金の目安を教えてください。",
    a: "公式ページでは、基本料金として「作業費（調査・施工）5,500円〜＋部材費」と掲載され、5,500円で終わるものから数万〜10万円以上かかるものまであると注記されています（2026年10月15日・公式確認）。症状別の実額・キャンセル料は公式に確認できず、夜間・早朝は夜間料金が発生する場合があります。金額を比較して決めたい方には、実額を公開している業者との相見積もりをおすすめします（当サイトの料金調査一覧が目安になります）。",
  },
  {
    q: "24時間対応していますか？",
    a: "2026年10月15日に確認した公式ページでは、24時間受付や最短の駆けつけ時間の記載は確認できませんでした。営業時間は「年中無休 365日施工」とされ、深夜・早朝の対応も可能ですが夜間料金が発生する場合があるとされています。訪問時間は地域や手配状況によって変わり、口コミでは当日連絡がつかない・エリア外を理由に直前で断られたという報告も見られます。お急ぎの場合は、受付時に到着の目安と対応可否をご確認ください。",
  },
  {
    q: "許認可（建設業許可・電気工事業登録）はありますか？",
    a: "当サイトが確認した範囲では、建設業許可や電気工事業登録の公式な表示は確認できませんでした（2026年7月12日確認）。エアコンの設置・修理では電気工事士等の資格が必要な作業もあるため、訪問時に施工会社名と有資格者かどうかをご確認ください。",
  },
  {
    q: "トラブルを避けるための方法を教えてください。",
    a: "口コミでは「ガス補充だけで根本修理をせずメーカー修理を勧められた」「不要な作業を勧められ高額請求だった」といった傾向の指摘があります。作業前に総額の見積もりを書面（またはスマートフォンの写真）で記録すること、その場で追加作業を即決しないこと、複数業者から相見積もりを取ることが有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ライフ救急車のエアコン修理の評判｜口コミ・料金の調査結果【2026年8月】",
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
          { name: "ライフ救急車の口コミ・評判", href: "/company/life-kyukyusha" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ライフ救急車のエアコン修理の評判
            <br className="hidden md:block" />
            口コミ・料金の調査結果【2026年8月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-12">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="life-kyukyusha" name="ライフ救急車" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="text-[0.95rem] leading-7 text-slate-700">
              <strong className="font-semibold text-slate-900">「エアコン救急隊」の情報をお探しの方へ</strong>
              「ライフ救急車」と「エアコン救急隊」は名称が似ていますが別のサービスです。エアコン救急隊(株式会社SAZANKA運営ほか同名サービス)の運営情報・料金・見分け方は
              <Link href="/company/aircon-kyukyusha/" className="text-sky-700 underline font-semibold">エアコン救急隊の評判・調査ページ</Link>
              にまとめています。
            </p>
          </div>
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが急に効かなくなった際、24時間受付や迅速な対応を掲げる出張サービスは有力な選択肢のひとつです。
            本記事では、エアコンなど電気まわりのトラブルの出張受付窓口である
            <strong className="font-semibold text-slate-900">ライフ救急車</strong>
            のエアコン修理について、当サイトが公式・関連情報を直接確認した内容（2026年7月12日確認・2026年10月15日に公式ページで再確認）をもとに、料金の実態・口コミの傾向・依頼前に確認すべき点を、良い点と注意すべき点の両面から中立的な立場でまとめています。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">本記事の要点</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・かつての<strong>公式ドメイン（life-kyukyusha.jp）はアクセスできず</strong>（2026年7月12日確認）、会社概要など<strong>公式の情報開示は限られています</strong>。現在の公式ページで確認できる料金は作業費5,500円〜＋部材費、対応エリアは24府県です（2026年10月15日・公式確認）</li>
              <li>・<strong>施工会社を手配する紹介型の受付窓口</strong>です（施工は株式会社ARS等とされる）。症状別の料金実額・許認可は公式に確認できませんでした（保証期間は公式FAQで1年）</li>
              <li>・口コミには<strong>「ガス補充だけで根本修理をしない」「高額請求」「直前キャンセル」といった注意すべき傾向</strong>の指摘があるため、依頼前に<Link href="/cost/price-index/" className="text-sky-700 underline">料金の実額を公開している業者との相見積もり</Link>をおすすめします</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月12日に公式ドメインの稼働状況・関連紹介サイト・口コミ掲載サイトで確認した内容です。料金・対応エリア・営業時間・保証は2026年10月15日に公式ページで再確認しました。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ライフ救急車とは</h2>
            <p className="leading-8 text-slate-700">
              ライフ救急車は、冷えない・水漏れ・異音といったエアコントラブルなど電気まわりの困りごとに対応する<strong className="font-semibold">出張の受付窓口</strong>です。紹介サイトの情報によると、受付・手配を担う窓口で、実際の相談・見積もり・施工は提携する施工会社（株式会社ARSなどと紹介されています）が対応する<strong className="font-semibold">紹介型</strong>の仕組みとされています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              2026年10月15日に確認した公式ページ（lifeqq.info/denki/aircon/）では、対応エリアは24府県（岩手・宮城・山形・茨城・栃木・群馬・埼玉・千葉・東京・神奈川・山梨・岐阜・愛知・三重・滋賀・京都・大阪・兵庫・奈良・和歌山・岡山・広島・福岡・沖縄）、営業時間は「年中無休 365日施工」とされています。24時間受付や最短の駆けつけ時間は公式ページでは確認できませんでした。なお、2026年7月12日に確認した時点では、かつての公式ドメイン（life-kyukyusha.jp）は名前解決ができずアクセスできない状態で、会社概要・許認可などの<strong className="font-semibold">公式な情報開示は確認できませんでした</strong>。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "ライフ救急車"],
                    ["運営会社", "公式に会社概要ページを確認できず。関連紹介サイトでは「合同会社JCC」と紹介（正式名称・所在地は公式に記載なし・2026年7月12日確認）"],
                    ["施工体制", "紹介型（受付・手配を行い、施工は提携施工会社が実施。株式会社ARS等とされる）"],
                    ["許認可の表示", "建設業許可・電気工事業登録等の公式な記載を確認できず（2026年7月12日確認）"],
                    ["対応エリア", "24府県（岩手・宮城・山形・茨城・栃木・群馬・埼玉・千葉・東京・神奈川・山梨・岐阜・愛知・三重・滋賀・京都・大阪・兵庫・奈良・和歌山・岡山・広島・福岡・沖縄。2026年10月15日・公式確認）"],
                    ["営業時間", "年中無休・365日施工（公式）。24時間受付の記載は確認できず（2026年10月15日・公式確認）"],
                    ["対応の早さ", "公式ページに明記なし（2026年10月15日確認）"],
                    ["料金", "作業費（調査・施工）5,500円〜＋部材費（2026年10月15日・公式確認）"],
                    ["公式サイト", "lifeqq.info/denki/aircon/（2026年10月15日確認。SSL証明書は期限切れ）。旧ドメイン life-kyukyusha.jp はアクセス不可（名前解決不可・2026年7月12日確認）"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式ドメインの稼働状況の確認、および関連紹介サイトの掲載情報（2026年7月12日確認）。対応エリア・営業時間・料金は公式ページ（2026年10月15日確認）。運営会社名・施工会社名は第三者の紹介サイトによる情報で、公式の会社概要ページは確認できませんでした。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、Q&Aサイト・電話番号情報サイト等で確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています（2026年7月調査）。ライフ救急車自身による利用者の声の掲載は確認できず、第三者サイトでは注意を促す内容が目立ちました。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">評価されている点（公称・傾向）</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・電話がつながりやすく、相談しやすいという声（一部）</li>
                  <li>・エアコン以外の電気まわりのトラブルも相談できる窓口への評価</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">注意を促す声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・ガス補充だけで根本修理をせずメーカー修理を勧められた、という指摘</li>
                  <li>・不要な作業を勧められ相場より高く感じた、という指摘</li>
                  <li>・当日連絡がつかない、エリア外を理由に直前で断られた、という指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※Yahoo!知恵袋などのQ&Aサイト、電話番号情報サイト等に掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証・断定するものではありません。紹介型サービスのため、実際の作業品質は担当する施工会社により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              注意すべき傾向は、いずれも作業内容と料金の妥当性に関するものです。紹介型で公式の情報開示が限られているサービスのため、<strong className="font-semibold">作業前に総額の見積もりと施工会社名を書面で記録する</strong>こと、その場で追加作業を即決しないことが、トラブルの防止に有効です。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（調査結果にもとづく）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>旧公式ドメインにアクセスできず、情報開示が限られています</strong>——かつての公式ドメイン（life-kyukyusha.jp）は2026年7月12日時点で名前解決ができない状態でした。現在の公式ページ（lifeqq.info）も2026年10月15日時点でSSL証明書の期限が切れており、会社概要・許認可は公式に確認できません</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>症状別の料金実額が公表されていません</strong>。公式の料金は「作業費（調査・施工）5,500円〜＋部材費」のみで、数万〜10万円以上かかる作業もあると注記されています。深夜・早朝は夜間料金が発生する場合があります（2026年10月15日・公式確認）。キャンセル料は原則無料で、遠方・深夜の出張を希望した場合のみ5,500円と公式FAQに記載されています（2026年10月17日・公式確認）。金額を重視する方は、料金の実額を公開している業者との比較をおすすめします</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>紹介型で施工は別会社が担います</strong>。公式FAQでは保証期間は1年とされていますが、訪問する担当者・料金は手配先（株式会社ARS等とされる）により異なるため、保証の範囲は依頼前にご確認ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>建設業許可・電気工事業登録などの公式な許認可表示が確認できません</strong>。電気工事を伴う作業もあるため、訪問時に施工会社名と有資格者かどうかをご確認ください</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>口コミで作業・料金トラブルの指摘が見られます</strong>（ガス補充のみで根本的な修理を行わずメーカー修理を勧められた、高額請求、直前キャンセル等）。作業前の書面による見積もりと相見積もりが特に重要です</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>年中無休で、深夜・早朝の対応も可能とされています（夜間料金あり）</li>
                  <li>エアコン以外の電気まわりのトラブルも相談できる窓口があります</li>
                  <li>基本料金（作業費5,500円〜＋部材費）と1年保証が公式に掲載されています</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>旧公式ドメインにアクセスできず、会社情報・許認可の開示が限られています</li>
                  <li>対応エリアは24府県で、それ以外の地域は対象外です</li>
                  <li>紹介型のため、実際の対応・料金・保証が手配先によって異なります</li>
                  <li>口コミに作業・料金トラブルの指摘があるため、事前の確認が必要です</li>
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
                  <li>電話で状況を相談できる窓口を探している方</li>
                  <li>その場で書面の見積もりを受け取り、内容を確認できる方</li>
                  <li>複数社の相見積もりを取ったうえで判断できる方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金・会社情報・許認可を事前に確認して選びたい方</li>
                  <li>その場で提示された作業内容を判断することが難しい方</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の実態（2026年10月15日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["公式料金表", "基本料金のみ掲載（症状別の料金表はなし）"],
                    ["作業料金", "作業費（調査・施工）5,500円〜＋部材費（公式）"],
                    ["出張費", "依頼時に要確認"],
                    ["見積もり", "公式に記載なし（受付時に無料かどうかを要確認）"],
                    ["症状別の修理実額", "公式に記載なし（現地見積もりで決まる）"],
                    ["キャンセル料", "原則無料（遠方・深夜の出張を希望した場合は5,500円・2026年10月17日公式確認）"],
                    ["深夜・早朝の割増", "夜間料金が発生する場合あり（公式FAQ）"],
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
              症状別の実額を公開している業者と異なり、ライフ救急車の公式料金は基本料金（作業費5,500円〜＋部材費）のみで、5,500円で終わるものから数万〜10万円以上かかるものまであると注記されています。<strong className="font-semibold">実際の金額は現地見積もりで決まる方式</strong>です。口コミには料金トラブルの指摘もあるため、<strong className="font-semibold">提示された総額の見積もりと施工会社名を書面で記録する</strong>ことをおすすめします。費用の相場は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">料金調査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>でご確認いただけます。
            </p>
          </section>

          <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-1">料金相場の確認と比較</p>
            <p className="text-sm text-slate-500 mb-4">実額を公開している業者と相見積もりを取ると、金額の妥当性を判断しやすくなります。</p>
            <Link href="/cost/price-index/" className="ac-btn ac-btn-primary px-7 py-3">
              各社の料金調査一覧を見る →
            </Link>
          </div>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話で相談", "症状や設置状況を伝えます。"],
                ["手配・訪問日時の調整", "都合の良い日時を調整し、提携施工会社が訪問します。"],
                ["現地確認・見積もり", "施工会社がエアコンの状態を確認し、作業内容と費用を提示します。施工会社名と総額を書面で記録してください。"],
                ["修理作業", "見積もり内容に同意したうえで、修理を実施します。追加作業はその場で即決せず、内容を確認します。"],
                ["動作確認・支払い", "正常に動作することを確認し、支払いを済ませて完了です。"],
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
              ライフ救急車は、年中無休で24府県のエアコンなど電気まわりのトラブルを受け付ける窓口です（2026年10月15日・公式確認）。一方で、旧公式ドメインは2026年7月12日時点でアクセスできず、会社情報・許認可の公式な開示が限られているうえ、施工は別会社が担う紹介型で、口コミには作業・料金トラブルの指摘も見られました。依頼する場合は「施工会社名と総額の見積もりを書面で記録する」「追加作業をその場で即決しない」「複数社で相見積もりを取る」の3点をご確認ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。お急ぎでない場合は、料金や会社情報を公開している業者を含む複数の業者から見積もりを取り、内容と対応を比較したうえで選ぶことをおすすめします。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">料金・会社情報が明確な業者と比較したい方へ</p>
              <p className="text-sky-100 text-sm mb-5">当サイトが調査した業者ランキングと料金相場をもとに、依頼先をお選びいただけます。</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                  エアコン修理業者ランキングを見る
                </Link>
                <Link href="/cost/price-index/" className="ac-btn bg-transparent text-white border-white/60 hover:bg-white/10 px-7 py-3">
                  料金調査一覧を見る
                </Link>
              </div>
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
