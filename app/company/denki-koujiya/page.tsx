import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "電気の工事屋さんの評判は悪い？エアコン修理の料金は高い？口コミと他社比較による調査【2026年最新】",
  description:
    "電気の工事屋さんの評判と料金について、有資格の電気工事士が対応するエアコン修理の口コミの傾向・費用の目安・対応エリア・受付時間を他社と比較し、メリット・デメリットや向いている方を中立的な立場でご説明します。",
  alternates: { canonical: "/company/denki-koujiya" },
};

const UPDATED = "2026年7月19日";

const toc = [
  { id: "summary", label: "電気の工事屋さんとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "ご利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "電気の工事屋さんは有資格者が対応しますか？",
    a: "公式サイトでは、国家資格を持つ電気工事士が対応するとされています。エアコンの電気系統に関わる作業も依頼しやすい点が特徴です。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトの出張対応エリアには42都道府県が掲載されており、岩手・秋田・長野・鳥取・島根は掲載されていません（2026年10月15日・公式確認）。依頼前に自宅の住所が対応範囲かご確認ください。",
  },
  {
    q: "出張料や見積もりは有料ですか？",
    a: "公式サイトでは見積もり無料と案内されています。出張料の金額は公式サイトに記載がありません（2026年10月15日・公式確認）。料金はエアコン修理3,300円（税込）〜と掲載されているため、出張料が含まれるかを依頼時にご確認ください。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "症状や作業内容によって幅があります。ガス補充や部品交換などが必要な場合は追加費用がかかります。正確な金額は現地の見積もりで確認し、総額を書面で受け取ることをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "電気の工事屋さんの評判は悪い？エアコン修理の料金は高い？口コミと他社比較による調査【2026年最新】",
  datePublished: "2026-06-10",
  dateModified: "2026-07-19",
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
          { name: "電気の工事屋さんの口コミ・評判", href: "/company/denki-koujiya" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電気の工事屋さんの口コミ・評判
            <br className="hidden md:block" />
            エアコン修理の料金・対応エリアを調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-07-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="denki-koujiya" name="電気の工事屋さん" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが効かない、電源が入らないといったトラブルは、本体だけでなく電気系統が原因のこともあります。
            本記事では、有資格の電気工事士が対応する
            <strong className="font-semibold text-slate-900">電気の工事屋さん</strong>
            のエアコン修理について、公開されている利用者の声の傾向、料金の目安、対応エリアと受付時間、メリット・デメリットを、評価される点と注意点の両面から中立的な立場でまとめています。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事では、口コミ本文の転載・創作を控え、確認できた評価の傾向のみを要約して掲載しています。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査時点：2026年7月）。
          </p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">電気の工事屋さんとは</h2>
            <p className="leading-8 text-slate-700">
              電気の工事屋さんは、国家資格を持つ電気工事士が対応する電気工事・修理サービスです。エアコンの取り付けや修理に加え、コンセント・ブレーカー・照明・アンテナなど、住まいの電気まわり全般に対応しています。エアコンが効かない原因が電気系統にある場合でも相談しやすい点が特徴です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              見積もりは無料と公式に案内されており、エアコン修理は3,300円（税込）〜、冷媒ガス充填は16,500円（税込）〜など、作業別の料金が公式サイトに掲載されています（2026年10月15日・公式確認）。技術面の信頼性を重視する方に適したサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "電気の工事屋さん"],
                    ["主な対応内容", "エアコン取り付け・修理、コンセント・ブレーカー・照明・アンテナ工事 など"],
                    ["対応する作業者", "有資格の電気工事士（公称）"],
                    ["対応エリア", "42都道府県（岩手・秋田・長野・鳥取・島根を除く／2026年10月15日・公式確認）"],
                    ["料金", "エアコン修理3,300円（税込）〜（出張料の記載なし）"],
                    ["見積もり", "無料（公式）"],
                    ["公式サイト", "denki-koji.work"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式・関連サイトの掲載情報。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトでは、口コミ本文の転載・創作を控え、確認できた<strong className="font-semibold">傾向の要約</strong>のみを掲載しています。電気の工事屋さんについては、公式サイトのお客様の声（施工後アンケート）で評価の傾向を確認しました。なお、第三者の口コミプラットフォームでは傾向を十分に確認できませんでした。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>問い合わせから訪問までの対応が早いという評価</li>
                <li>電話対応や、希望に合わせた提案が丁寧という評価</li>
                <li>有資格の電気工事士が対応する点と、説明のわかりやすさを評価する内容</li>
                <li>見積もり時に費用の内訳が明確だったという評価</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価の傾向は時期・担当者・地域によって異なる場合があります。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              技術面の評価が高い一方で、
              <strong className="font-semibold">料金は症状や作業内容によって幅がある</strong>
              点にご留意ください。依頼時には、以下の点をご確認ください。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期（真夏・真冬）は予約が取りにくく、訪問まで時間がかかる場合があります。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>公式の出張対応エリアは42都道府県で、岩手・秋田・長野・鳥取・島根は掲載されていません（2026年10月15日・公式確認）。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、出張料・調査費を含む総額の見積もりを書面で確認してから依頼することをおすすめします。</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>国家資格を持つ電気工事士が対応する</li>
                  <li>エアコンの電気系統トラブルにも対応しやすい</li>
                  <li>作業別の料金が公式に掲載され、見積もりは無料</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金は症状により異なるため、事前の見積もり確認が必要</li>
                  <li>繁忙期は予約が取りにくくなる場合がある</li>
                  <li>岩手・秋田・長野・鳥取・島根は対応エリアに掲載されていない</li>
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
                  <li>有資格者に作業を依頼したい方</li>
                  <li>エアコンの電源・配線など電気系統の不調が疑われる方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>料金の安さを最優先したい方</li>
                  <li>対応エリア外の地域に住んでいる方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理の費用は、症状や必要な作業（点検・ガス補充・部品交換など）によって幅があります。電気の工事屋さんの公式サイトでは、エアコン修理が
              <strong className="font-semibold">3,300円（税込）〜</strong>
              、冷媒ガス充填が16,500円（税込）〜、水漏れが5,500円（税込）〜と案内されており、見積もりは無料です（2026年10月15日・公式確認）。出張料の金額は記載がありません。ガス補充や基板交換など追加作業が必要な場合は、その分の費用が加算されます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              訪問時には、出張料・調査費を含めた作業範囲と総額の見積もりを書面で確認したうえで依頼することをおすすめします。可能であれば、複数の業者から見積もりを取って比較してください。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webでの相談", "症状や設置状況を伝え、おおよその対応内容を確認します。"],
                ["訪問日時の調整", "都合の良い日時を調整し、有資格の電気工事士が訪問します。"],
                ["現地確認・見積もり", "エアコンや電気系統の状態を確認し、作業内容と費用が提示されます。"],
                ["修理作業", "見積もり内容に同意した後、修理を実施します。"],
                ["動作確認・支払い", "正常に動作することを確認し、支払いを行って完了です。"],
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
              電気の工事屋さんは、国家資格を持つ電気工事士が対応する点と、作業別の料金が公式に掲載され見積もりが無料である点が強みのサービスです。利用者の声では、対応の早さと丁寧さ、有資格者が対応する点を評価する内容が多く見られます。一方で、料金は症状によって幅があるため、依頼時には総額の見積もりを書面で確認したうえで依頼することをおすすめします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理の費用は症状によって異なります。お急ぎでない場合は複数の業者から見積もりを取り、料金と対応を比較してお選びください。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンや電気まわりのトラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">無料見積もりにて、症状と費用の目安をご確認いただけます。</p>
              <a href="https://denki-koji.work/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                電気の工事屋さん公式サイトを見る
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
