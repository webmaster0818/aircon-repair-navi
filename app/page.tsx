import Link from "next/link";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import AreaFinder from "@/app/components/AreaFinder";
import SiteShot, { hasShot } from "@/app/components/SiteShot";

// 症状アイコンは2026-10-04に8点を同一スタイルで作り直した（512px/背景透過）。
// 色はブランド紺#0F4C81＋スカイ#38A3E0の2色のみ。カードの色は変えずに統一する。
const symptoms = [
  { icon: "/images/icons/icon-not-cooling.png", label: "冷えない", note: "ガス漏れ・フィルター詰まり", href: "/symptom/not-cooling" },
  { icon: "/images/icons/icon-water-leak.png", label: "水漏れ", note: "ドレンホース・結露", href: "/symptom/water-leak" },
  { icon: "/images/icons/icon-noise.png", label: "異音がする", note: "ガガガ・カラカラ音", href: "/symptom/noise" },
  { icon: "/images/icons/icon-bad-smell.png", label: "臭いがする", note: "カビ臭・酸っぱい臭い", href: "/symptom/bad-smell" },
  { icon: "/images/icons/icon-not-starting.png", label: "動かない", note: "電源が入らない", href: "/symptom/not-starting" },
  { icon: "/images/icons/icon-gas-leak.png", label: "ガス漏れ", note: "室外機・配管から", href: "/symptom/gas-leak" },
  { icon: "/images/icons/icon-remote-error.png", label: "リモコン不良", note: "反応しない・表示が消える", href: "/symptom/remote-error" },
  { icon: "/images/icons/icon-error-code.png", label: "エラーコード", note: "ランプ点滅・数字表示", href: "/symptom/error-code" },
];

const costTable = [
  { symptom: "ガス補充（冷えない）", range: "20,000〜50,000円" },
  { symptom: "水漏れ修理", range: "3,000〜30,000円" },
  { symptom: "異音修理（ファン系）", range: "8,000〜40,000円" },
  { symptom: "基板交換", range: "30,000〜100,000円" },
  { symptom: "コンプレッサー交換", range: "80,000〜200,000円" },
  { symptom: "リモコン交換", range: "2,000〜10,000円" },
];

const choosingPoints = [
  { iconType: "speed", title: "対応スピード", desc: "緊急時は最短即日〜翌日対応の業者を選ぶ。受付時間も重要。" },
  { iconType: "area", title: "対応エリア", desc: "全国対応か地域密着型か。地方では対応可能な業者が限られることも。" },
  { iconType: "price", title: "料金の透明性", desc: "事前見積もり無料・追加料金なしの業者が安心。相場との比較を。" },
  { iconType: "reviews", title: "実績・口コミ", desc: "施工実績数や口コミ評価を確認。資格保有者が在籍かも確認を。" },
  { iconType: "guarantee", title: "保証・アフターケア", desc: "修理後の保証期間や再修理対応があるか確認しておく。" },
];

const faqs = [
  {
    q: "エアコン修理の費用相場はどのくらいですか？",
    a: "症状によって大きく異なります。ガス補充で2〜5万円、水漏れで3千〜3万円程度が目安です。コンプレッサー交換など大型修理は8〜20万円になることもあります。まず無料見積もりを依頼することをお勧めします。",
  },
  {
    q: "修理業者を選ぶ際のポイントは？",
    a: "対応スピード 料金の透明性 有資格者の在籍 口コミ・実績 保証内容の5つを確認しましょう。複数業者から見積もりを取ることで相場感がわかります。",
  },
  {
    q: "エアコン修理と買い替えどちらが得ですか？",
    a: "修理費用が新品価格の50%以上になる場合や、使用年数が10年以上の場合は買い替えが経済的なことが多いです。省エネ性能の向上により、新しいエアコンは電気代が大幅に節約できます。",
  },
  {
    q: "緊急時に最も早く対応してくれる業者は？",
    a: "テイクサービスは最短5分でスタッフ手配が可能で、緊急時に特に頼りになります。エアコントラブルセンターも24時間365日対応で即日対応できます。",
  },
];

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export default function HomePage() {
  // TOP3はアフィリエイト提携済みの業者のみで構成（施主方針・2026-07-16）
  const top3 = ["aircon-trouble-center", "take-service", "airhome-support"]
    .map((s) => companies.find((c) => c.slug === s))
    .filter((c): c is (typeof companies)[number] => c !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============ ヒーロー ============
          写真は左、文字は右の明るい面に置く。文字の上に色を被せず、
          背景とのコントラストで読ませる（施主指示⑤）。 */}
      <section className="relative bg-[var(--color-surface)] border-b border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[260px] lg:min-h-[520px] order-1 lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="エアコンの室内機を点検する修理スタッフ"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>

          <div className="px-6 py-12 lg:px-14 lg:py-20 flex flex-col justify-center">
            <span className="ac-eyebrow self-start">AIRCON REPAIR GUIDE</span>
            <h1 className="mt-6 text-[28px] lg:text-[40px] font-bold leading-[1.45] text-[var(--color-ink)]">
              エアコンが壊れた。
              <br />
              <span className="text-[var(--color-brand)]">どこに頼むか</span>を、
              <br className="hidden lg:block" />
              5分で決める。
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[var(--color-ink-2)] leading-[2.1]">
              症状から原因を切り分け、費用の目安を確かめ、全国27社から条件に合う業者を選べます。
              料金は各社が公表している金額のみを掲載しています。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#symptom" className="ac-btn ac-btn-primary">
                症状から探す
                <Chevron />
              </Link>
              <Link href="#area" className="ac-btn ac-btn-outline">
                エリアから探す
                <Chevron />
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 border border-[var(--color-line)] rounded-lg overflow-hidden">
              {[
                ["掲載業者", "27社"],
                ["対応エリア", "191"],
                ["症状別ガイド", "8種"],
              ].map(([k, v], i) => (
                <div key={k} className={`px-3 py-4 text-center ${i < 2 ? "border-r border-[var(--color-line)]" : ""}`}>
                  <dt className="text-[11px] text-[var(--color-ink-3)] tracking-wider">{k}</dt>
                  <dd className="text-xl font-bold text-[var(--color-brand)] leading-tight mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ 症状から探す ============ */}
      <section id="symptom" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="ac-eyebrow">SYMPTOM SEARCH</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">症状から探す</h2>
          <p className="text-[var(--color-ink-2)] text-sm">あてはまる症状を選ぶと、原因の切り分けと対処法、費用の目安が確認できます</p>
        </div>

        {/* カードの色は8枚すべて同一。選択肢ごとに色を変えない（施主指示④） */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {symptoms.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="ac-card group flex flex-col items-center text-center px-4 py-7 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt="" width={112} height={112} className="w-20 h-20 lg:w-28 lg:h-28" />
              <span className="mt-4 font-bold text-[15px] lg:text-base text-[var(--color-ink)]">{s.label}</span>
              <span className="mt-1 text-[11px] lg:text-xs text-[var(--color-ink-3)] leading-relaxed">{s.note}</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/symptom" className="ac-btn ac-btn-outline">
            すべての症状の原因と対処法を見る
            <Chevron />
          </Link>
        </div>
      </section>

      {/* ============ エリアから探す（2026-10-04 新設） ============ */}
      <AreaFinder />

      {/* ============ 注目の3社 ============ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="ac-eyebrow">PICK UP</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">まず検討したい3社</h2>
            <p className="text-[var(--color-ink-2)] text-sm">当サイトが提携している業者です（PR）。公式サイトの内容は下の画像でご確認いただけます</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {top3.map((company, index) => (
              <div key={company.slug} className="ac-card overflow-hidden flex flex-col">
                <div className="relative">
                  <SiteShot slug={company.slug} name={company.name} caption={false} className="[&>div]:rounded-none [&>div]:border-0 [&>div]:border-b [&>div]:border-[var(--color-line)]" />
                  {!hasShot(company.slug) && (
                    <div className="aspect-[16/10] bg-[var(--color-brand-wash)] border-b border-[var(--color-line)]" />
                  )}
                  <span className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--color-brand)] text-white text-sm font-bold shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold">{company.name}</h3>
                  <p className="text-xs text-[var(--color-ink-3)] mt-1">{company.tagline}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {company.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-[11px] border border-[var(--color-line-strong)] text-[var(--color-brand)] px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>

                  <dl className="mt-4 border border-[var(--color-line)] rounded-lg divide-y divide-[var(--color-line)] text-xs">
                    <div className="flex px-3 py-2">
                      <dt className="w-20 text-[var(--color-ink-3)]">費用目安</dt>
                      <dd className="font-bold">{company.avgCost}</dd>
                    </div>
                    <div className="flex px-3 py-2">
                      <dt className="w-20 text-[var(--color-ink-3)]">対応速度</dt>
                      <dd className="font-bold">{company.responseTime}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-col gap-2 mt-auto pt-5">
                    <Link href={`/company/${company.slug}`} className="ac-btn ac-btn-outline w-full text-sm">
                      詳細を見る
                      <Chevron />
                    </Link>
                    <AffiliateOfficialButton slug={company.slug} className="ac-btn ac-btn-cta w-full text-sm" />
                    <FelmatOfficialButton slug={company.slug} className="ac-btn ac-btn-cta w-full text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/ranking" className="ac-btn ac-btn-outline">
              全27社の比較を見る
              <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 修理費用の目安 ============ */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="ac-eyebrow">COST GUIDE</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">修理費用の目安</h2>
            <p className="text-[var(--color-ink-2)] text-sm">症状別の修理費用相場</p>
          </div>

          <div className="border border-[var(--color-line)] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-brand)] text-white">
                  <th className="px-5 py-3.5 text-left font-bold">症状・修理内容</th>
                  <th className="px-5 py-3.5 text-right font-bold">費用目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-line)]">
                {costTable.map((row) => (
                  <tr key={row.symptom} className="bg-[var(--color-surface)]">
                    <td className="px-5 py-3.5">{row.symptom}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-[var(--color-brand)] whitespace-nowrap">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-ink-3)] mt-3">
            ※費用はあくまで目安です。実際の費用は症状・機種・業者によって異なります。
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/cost/repair-price/" className="text-[var(--color-brand)] font-bold hover:underline underline-offset-4">
              エアコン修理の費用・料金相場ガイド
            </Link>
            <Link href="/guide/noise/" className="text-[var(--color-brand)] font-bold hover:underline underline-offset-4">
              異音「ガガガ」の原因と対処ガイド
            </Link>
            <Link href="/guide/busy-season/" className="text-[var(--color-brand)] font-bold hover:underline underline-offset-4">
              修理はいつ頼むべき？繁忙期カレンダー
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 27社一括比較 ============ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="ac-eyebrow">COMPARISON</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">27社 一括比較</h2>
            <p className="text-[var(--color-ink-2)] text-sm">各社の公式サイトを当サイトで撮影して掲載しています</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <div key={c.slug} className="ac-card overflow-hidden flex flex-col">
                <div className="relative">
                  <SiteShot slug={c.slug} name={c.name} caption={false} className="[&>div]:rounded-none [&>div]:border-0 [&>div]:border-b [&>div]:border-[var(--color-line)]" />
                  {!hasShot(c.slug) && (
                    <div className="aspect-[16/10] bg-[var(--color-brand-wash)] border-b border-[var(--color-line)] flex items-center justify-center text-xs text-[var(--color-ink-3)]">
                      公式サイト画像は準備中
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-[var(--color-ink-3)]">#{c.rank}</span>
                    <h3 className="font-bold leading-snug">{c.name}</h3>
                  </div>
                  <p className="text-xs text-[var(--color-ink-3)] mt-1 leading-relaxed">{c.tagline}</p>

                  <dl className="mt-3 border border-[var(--color-line)] rounded-lg divide-y divide-[var(--color-line)] text-xs">
                    <div className="flex px-3 py-2">
                      <dt className="w-16 text-[var(--color-ink-3)] shrink-0">費用</dt>
                      <dd className="font-bold">{c.avgCost}</dd>
                    </div>
                    <div className="flex px-3 py-2">
                      <dt className="w-16 text-[var(--color-ink-3)] shrink-0">速度</dt>
                      <dd className="font-bold">{c.responseTime}</dd>
                    </div>
                    <div className="flex px-3 py-2">
                      <dt className="w-16 text-[var(--color-ink-3)] shrink-0">エリア</dt>
                      <dd className="font-bold">{c.coverage}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-col gap-2 mt-auto pt-4">
                    <Link href={`/company/${c.slug}`} className="ac-btn ac-btn-outline w-full text-xs py-2.5">
                      詳細を見る
                      <Chevron className="w-3.5 h-3.5" />
                    </Link>
                    <AffiliateOfficialButton slug={c.slug} className="ac-btn ac-btn-cta w-full text-xs py-2.5" />
                    <FelmatOfficialButton slug={c.slug} className="ac-btn ac-btn-cta w-full text-xs py-2.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 選び方 ============ */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="ac-eyebrow">GUIDE</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">優良業者の選び方 5つのポイント</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {choosingPoints.map((p, i) => (
              <div key={p.title} className="ac-card p-5 text-center">
                <div className="w-14 h-14 border border-[var(--color-line-strong)] rounded-full flex items-center justify-center mx-auto mb-3 text-[var(--color-brand)]">
                  {p.iconType === "speed" && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" /></svg>}
                  {p.iconType === "area" && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>}
                  {p.iconType === "price" && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M9 8l3 4 3-4M12 12v5M9.5 13.5h5M9.5 15.5h5" /></svg>}
                  {p.iconType === "reviews" && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinejoin="round" d="M12 3.5l2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6L3.27 9.85l6.03-.88L12 3.5z" /></svg>}
                  {p.iconType === "guarantee" && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>}
                </div>
                <div className="text-[11px] tracking-widest text-[var(--color-ink-3)] font-bold mb-1">POINT {i + 1}</div>
                <h3 className="font-bold mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-[var(--color-ink-2)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="ac-eyebrow">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="ac-card overflow-hidden group">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-bold">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 border border-[var(--color-brand)] text-[var(--color-brand)] rounded flex items-center justify-center text-xs font-bold mt-0.5">Q</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 shrink-0 text-[var(--color-ink-3)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 py-4 bg-[var(--color-wash)] border-t border-[var(--color-line)]">
                  <p className="text-sm text-[var(--color-ink-2)] flex gap-3 leading-[2]">
                    <span className="shrink-0 w-6 h-6 bg-[var(--color-brand)] text-white rounded flex items-center justify-center text-xs font-bold mt-0.5">A</span>
                    <span>{faq.a}</span>
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 末尾CTA ============ */}
      <section className="bg-[var(--color-brand)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">エアコンのトラブル、今すぐ解決</h2>
          <p className="text-[var(--color-brand-wash)] mb-8 text-sm md:text-base">
            24時間365日対応の業者も掲載しています。まずは無料見積もりから。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ranking" className="ac-btn ac-btn-cta">
              全27社の比較を見る
              <Chevron />
            </Link>
            <Link
              href="/ranking/fast"
              className="ac-btn bg-white text-[var(--color-brand)] border-white hover:bg-[var(--color-brand-wash)]"
            >
              即日対応の業者を探す
              <Chevron />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
