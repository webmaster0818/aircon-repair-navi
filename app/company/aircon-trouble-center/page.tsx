import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  title:
    "エアコントラブルセンターの評判は？口コミ・料金を実査【2026年7月】",
  description:
    "エアコントラブルセンター（運営: 株式会社composure）の口コミ傾向・料金の仕組みを当サイトが公式ページで実査（2026年7月11日確認）。出張費・見積もり・施工前キャンセルは無料、基本料金8,800円〜の公称のみで症状別実額は公式非公開、実態は全国2,000社以上の加盟店を手配する紹介型という特徴、保証・許認可の表示状況まで正直に解説します。",
  alternates: { canonical: "/company/aircon-trouble-center" },
};

const UPDATED = "2026年7月11日";

const toc = [
  { id: "summary", label: "エアコントラブルセンターとは" },
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
    q: "エアコントラブルセンターの出張費・見積もりは無料ですか？",
    a: "はい。公式サイトに「出張費用・見積もり料金はいただいておりません」「施工前のキャンセルは無料」と明記されています（2026年7月11日確認）。ただし無料なのは相談・見積もりまでで、実際に施工に至った場合は基本料金（公称8,800円〜）以降の作業料金が発生します。",
  },
  {
    q: "料金はいくらくらいかかりますか？",
    a: "公式サイトの掲載は「基本料金8,800円〜」という公称のみで、症状別の実額は公式には掲載されていません（現地見積制）。第三者の紹介掲載サイト（EPARKくらしのレスキュー）ではガスチャージ・修理が8,800円〜、真空引き・高所作業が3,300円〜、新規取付65,000円〜といった参考額も掲載されていますが、公式の公称と数値が異なるため、必ず現地見積もりで総額を確認してください。相場の目安は当サイトの料金実査（/cost/price-index/）が参考になります。",
  },
  {
    q: "誰が修理に来るのですか？",
    a: "運営元の株式会社composureは会社概要上の事業内容が「情報通信業・広告代理店業・メディア事業・マーケティングサポート」で、自社施工の会社ではありません。公式サイトも「全国2,000社以上の加盟店」と明記しており、実際の施工は各地域の加盟店が行う紹介型サービスです。そのため作業品質・保証の細部は担当加盟店により異なります。",
  },
  {
    q: "保証はありますか？",
    a: "公式サイトには「もしまた故障したら全額返金する」旨の記載がありますが、保証期間・対象範囲・適用条件の詳細は公式に明記されていません（2026年7月11日確認）。紹介型のため実際の保証運用は加盟店により差が出る可能性があり、期間と範囲は依頼前に必ず確認してください。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "公称は最短30分〜1時間です。ただし公式も「加盟スタッフの作業スケジュールや遠方の場合は時間が変動する」旨を注記しており、真夏・真冬の繁忙期や夜間は到着が遅れることがあります。急ぎの場合は受付時に到着目安を確認しましょう。",
  },
  {
    q: "支払い方法は何が使えますか？",
    a: "公式サイトではVISA・マスター・JCBのクレジットカード、銀行振込、現金に対応と記載されています。カード払い希望の場合は、加盟店により可否が異なる可能性があるため受付時に伝えておくのが確実です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコントラブルセンターの評判は？口コミ・料金を実査【2026年7月】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-11",
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
          { name: "エアコントラブルセンターの口コミ・評判", href: "/company/aircon-trouble-center" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコントラブルセンターの評判は？
            <br className="hidden md:block" />
            口コミ・料金を実査【2026年7月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-11">最終更新：{UPDATED}</time>
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
            この記事では、24時間受付・全国対応をうたうエアコン修理受付サービス
            <strong className="font-semibold text-slate-900">エアコントラブルセンター</strong>
            について、当サイトが公式ページを直接確認した事実（2026年7月11日実査）をもとに、料金の仕組み・口コミの傾向・依頼前に確認すべき点を、良い点・気になる点の両面から中立的にまとめました。
          </p>

          <div className="mt-6 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-6">
            <p className="font-bold text-slate-900 mb-3">先に結論（30秒まとめ）</p>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700">
              <li>・<strong>出張費・見積もり・施工前キャンセルは無料</strong>（公式明記）。ただし<strong>公式の料金掲載は「基本料金8,800円〜」の公称のみで、症状別の実額は非公開</strong>です</li>
              <li>・実態は<strong>全国2,000社以上の加盟店を手配する紹介型サービス</strong>。運営会社（株式会社composure）の事業は情報通信・広告・マーケティングで、施工は加盟店が行い、保証内容も加盟店により異なります</li>
              <li>・向くのは「夜間・急ぎでとにかく早く来てほしい人」。<strong>金額を比較してから決めたい人は、実額公開のある業者と相見積もりが安全</strong>です（<Link href="/cost/price-index/" className="text-sky-700 underline">料金実査一覧</Link>）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">※2026年7月11日に公式受付ページ（aircon-troubleone.com）で確認した内容です。</p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコントラブルセンターとは</h2>
            <p className="leading-8 text-slate-700">
              エアコントラブルセンターは、冷えない・水漏れ・異音・電源が入らないといったエアコントラブルの<strong className="font-semibold">受付・紹介サービス</strong>です。公式サイトに「全国2,000社以上の加盟店」と明記されているとおり、受付窓口が各地域の加盟店を手配し、施工は加盟店が行う仕組みです。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              24時間365日受付・最短30分〜1時間での駆けつけ（いずれも公称）をうたっており、「まずスピーディーに動いてほしい」ニーズに向いた窓口です。運営元は株式会社composure（東京都新宿区）で、会社概要上の事業内容は情報通信業・広告代理店業・メディア事業・マーケティングサポートとされ、自社で施工を行う工事会社ではない点は理解しておきたいところです（2026年7月11日公式確認）。
            </p>

            <FelmatBanner
              slug="aircon-trouble-center"
              heading="公式サイトで詳細・料金を確認する"
              note="24時間受付・最短即日対応。まずは無料相談で症状と費用の目安を確認してみましょう。"
            />
          </section>

          {/* 仲介型と直接依頼型の違い（中立の比較導線） */}
          <section className="scroll-mt-24">
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-2">先に知っておきたい：「紹介型」と「直接依頼型」の違い</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                エアコントラブルセンターのような「紹介・マッチング型」は、全国ネットワークで近くの加盟店を素早く手配できるのが利点です。一方で、実際の作業は加盟店が行うため、料金や対応品質は担当業者によって幅があります。急ぎの修理では、業者へ直接依頼する「直接依頼型」（例：<Link href="/company/take-service" className="text-sky-600 font-bold hover:underline">テイクサービス</Link>＝24時間受付・最短即日対応を公称）と並行して見積もりを取り、条件と到着スピードで選ぶのが失敗しにくい使い方です。
              </p>
              <Link href="/ranking" className="inline-flex items-center gap-1 text-sky-600 font-bold hover:underline text-sm">紹介型・直接型を含む業者比較ランキングを見る →</Link>
            </div>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアコントラブルセンター"],
                    ["運営会社", "株式会社composure（東京都新宿区高田馬場2-17-3 東京三協信用金庫本店ビル8階／2023年4月28日設立）"],
                    ["業態", "加盟店紹介型（運営会社の事業内容は情報通信業・広告代理店業・メディア事業・マーケティング。施工は全国2,000社以上の加盟店が実施）"],
                    ["許認可の表示", "公式サイト・運営会社の会社概要に建設業許可・電気工事業登録等の記載なし（施工する加盟店の許認可も非開示・2026年7月11日確認）"],
                    ["対応エリア", "全国（2,000社以上の加盟店・公称。地域により対応スピードが異なる）"],
                    ["受付時間", "24時間365日（公称。訪問時間は地域・加盟店の状況により変動）"],
                    ["対応スピード", "最短30分〜1時間で駆けつけ（公称）"],
                    ["保証", "「再故障時は全額返金」旨の記載あり（期間・対象範囲の詳細は公式に記載なし）"],
                    ["支払い方法", "VISA・マスター・JCB／銀行振込／現金（加盟店により可否が異なる場合あり）"],
                    ["連絡先", "電話 050-5369-1348（公式サイト掲載）"],
                    ["公式サイト", "aircon-troubleone.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式受付ページ（aircon-troubleone.com）および運営会社の会社概要（composure.jp）の掲載情報（2026年7月11日確認）。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として口コミ本文の転載・創作はせず、複数のレビュー紹介サイトで確認できた<strong className="font-semibold">傾向の要約</strong>のみお伝えします（2026年7月調査）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">好意的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・連絡から訪問までが早かった（24時間受付・最短対応への評価）</li>
                  <li>・料金の説明が明確で追加料金がなかったという声</li>
                  <li>・電話対応・訪問スタッフの接客が丁寧だった</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <h3 className="font-bold text-orange-800 mb-3">否定的な声の傾向</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>・加盟店によって対応品質にばらつきがあるという指摘</li>
                  <li>・繁忙期は対応が遅れることがあるという指摘</li>
                  <li>・作業中に追加料金が発生した、深夜・休日は割増だったという指摘</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">※複数のレビュー紹介サイト（Stay&不動産、ハウスケアラボ、楽ちんおそうじ術ほか）に掲載された内容の傾向を当サイトで整理したものです。個別の体験を保証するものではありません。紹介型サービスのため、実際の作業品質は担当する加盟店により差が出る点は構造的な特徴です。</p>
            <p className="mt-4 leading-8 text-slate-700">
              否定的な傾向は「加盟店ごとの品質差」と「金額の認識ズレ」に集約されます。<strong className="font-semibold">作業前に総額見積もりを書面（またはスマホ写真）で残す</strong>だけでトラブルの大半は防げます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">制限条件・利用前の注意点（公式確認ベース）</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">①</span><span><strong>症状別の料金実額は公式に掲載がありません</strong>。掲載は「基本料金8,800円〜」の公称のみで金額の根拠は非公開のため、金額重視の方は実額公開業者との比較が前提です</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">②</span><span><strong>運営会社は施工会社ではなく紹介型です</strong>。運営元（株式会社composure）の事業内容は情報通信・広告・マーケティングで、施工は全国2,000社以上の加盟店が行うため、品質・保証・カード可否は担当加盟店により異なります</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">③</span><span><strong>保証の期間・範囲・条件の詳細は非公開です</strong>。公式に「再故障時は全額返金」旨の記載はありますが、対象期間や適用条件の明記がないため、作業前に必ず加盟店へ確認を</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">④</span><span><strong>深夜・休日は割増になる場合があります</strong>。公式に割増料金の明記はありませんが、レビューでは深夜・休日の割増を指摘する声があるため、時間外に依頼する際は受付時に確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑤</span><span><strong>繁忙期・遠方は対応が遅れる場合があります</strong>。公式も「加盟スタッフのスケジュールや遠方の場合は時間が変動する」旨を注記しており、真夏のピーク時は到着目安を受付時に確認しましょう</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">⑥</span><span><strong>許認可の表示がありません</strong>。公式・会社概要に建設業許可・電気工事業登録の記載がなく、施工加盟店の資格も非開示のため、高所作業や電気工事を伴う内容は担当者の資格を確認しておくと安心です</span></li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>24時間365日受付で、急なトラブルでも相談しやすい</li>
                  <li>全国2,000社以上の加盟店から近いところを手配してもらえる</li>
                  <li>出張費・見積もり・施工前キャンセルが無料（公式明記）</li>
                  <li>最短30分〜1時間の駆けつけを公称しており緊急時に心強い</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>症状別の実額は非公開で、事前の見積もり確認が前提</li>
                  <li>施工は加盟店のため、品質・保証に差が出ることがある</li>
                  <li>繁忙期・遠方は予約が取りにくく到着が遅れる場合がある</li>
                  <li>建設業許可・電気工事業登録などの許認可表示がない</li>
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
                  <li>近くに頼める業者がわからず、まず相談先を探している人</li>
                  <li>とにかくスピーディーに手配してほしい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>あらかじめ業者と料金をじっくり比較して選びたい人</li>
                  <li>許認可や保証内容を明確に確認してから依頼したい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の仕組み（2026年7月11日 公式確認）</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-4">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["出張費", "無料（公式明記）"],
                    ["見積もり", "無料（公式明記）"],
                    ["施工前キャンセル", "無料（公式明記）"],
                    ["基本料金", "8,800円〜（公称）"],
                    ["症状別の修理実額", "公式に掲載なし（現地見積制）"],
                    ["深夜・早朝の割増", "公式に記載なし（受付時に要確認）"],
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
              公式の料金掲載は「基本料金8,800円〜」の公称のみで、症状別の実額は<strong className="font-semibold">現地見積もりで決まる方式</strong>です。第三者の紹介掲載サイト（EPARKくらしのレスキュー）では、ガスチャージ・修理が8,800円〜、真空引き・高所作業が3,300円〜、新規取付65,000円〜といった参考額も掲載されていますが、公式の公称と数値が異なるため、<strong className="font-semibold">提示された見積もりを書面で残す</strong>ことが自衛の要点になります。相場感は当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">料金実査インデックス</Link>と<Link href="/cost/repair-price/" className="text-sky-700 underline">症状別の修理相場</Link>で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイト（aircon-troubleone.com・基本料金8,800円〜）、EPARKくらしのレスキュー掲載情報（症状別参考額）。いずれも2026年7月11日確認。</p>
          </section>

          <FelmatBanner
            slug="aircon-trouble-center"
            heading="まずは無料見積もりで金額を確認"
            note="出張費・見積もり・施工前キャンセルは無料（公式明記）。金額を見てから判断できます。"
          />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "症状や設置状況を伝えます。受付は24時間365日とされています。"],
                ["訪問日時の調整", "都合の良い日時を調整し、加盟店のスタッフが訪問します。"],
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
              エアコントラブルセンターは、24時間受付・出張費見積無料で急なエアコントラブルにすぐ相談できる受付窓口です。一方で公式の料金掲載は「基本料金8,800円〜」の公称のみで症状別実額は非公開、施工は全国2,000社以上の加盟店が行うため品質や保証は担当店により差があります。依頼時には「総額見積もりを書面で」「保証期間の確認」「カード可否・担当者の資格の確認」の3点を押さえれば、この種のサービスの弱点はほぼカバーできます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは無料相談・見積もりで、症状と費用の目安を確認してみましょう。</p>
              <a href="https://t.felmat.net/fmcl?ak=N119806.1.G1645575.X138222G" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                エアコントラブルセンター公式サイトを見る
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
      </article>
    </>
  );
}
