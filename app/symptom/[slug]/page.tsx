import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import symptoms from "@/data/symptoms.json";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";

const UPDATED = "2026年6月29日";

const guideMeta: Record<string, { href: string; label: string }> = {
  "repair-cost": { href: "/cost/repair-price/", label: "エアコン修理費用の相場ガイド" },
  noise: { href: "/guide/noise", label: "エアコンの異音 原因と対処ガイド" },
};

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};
  const s = symptom as Record<string, unknown>;
  return {
    title: (s.seoTitle as string) ?? symptom.title,
    description: (s.seoDescription as string) ?? symptom.description,
    alternates: { canonical: `/symptom/${symptom.slug}` },
  };
}

const difficultyLabel: Record<string, { label: string; color: string }> = {
  easy: { label: "DIY可能", color: "bg-green-100 text-green-700" },
  medium: { label: "注意が必要", color: "bg-yellow-100 text-yellow-700" },
  professional: { label: "業者依頼推奨", color: "bg-red-100 text-red-700" },
};

const urgencyLabel: Record<string, { label: string; color: string }> = {
  low: { label: "低（急がない）", color: "text-green-600" },
  medium: { label: "中（早めに対処）", color: "text-yellow-600" },
  high: { label: "高（早急に対処）", color: "text-red-600" },
};

interface CostRow {
  item: string;
  range: string;
}

export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const s = symptom as Record<string, unknown>;
  const seoTitle = (s.seoTitle as string) ?? symptom.title;
  const seoDescription = (s.seoDescription as string) ?? symptom.description;
  const quickCheck = (s.quickCheck as string[] | undefined) ?? [];
  const costBreakdown = (s.costBreakdown as CostRow[] | undefined) ?? [];
  const relatedGuides = (s.relatedGuides as string[] | undefined) ?? [];
  const relatedSymptomSlugs = (s.relatedSymptoms as string[] | undefined) ?? [];

  const recommendedCompanies = companies.filter((c) =>
    symptom.recommendedCompanies.includes(c.slug)
  );

  const relatedSymptoms = relatedSymptomSlugs
    .map((rs) => symptoms.find((x) => x.slug === rs))
    .filter((x): x is (typeof symptoms)[number] => Boolean(x));

  const guideLinks = relatedGuides
    .map((g) => guideMeta[g])
    .filter((g): g is { href: string; label: string } => Boolean(g));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: symptom.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seoTitle,
    description: seoDescription,
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    author: { "@type": "Organization", name: "エアコン修理ナビ編集部" },
    publisher: { "@type": "Organization", name: "エアコン修理ナビ" },
  };

  const urgency = urgencyLabel[symptom.urgencyLevel] ?? urgencyLabel.medium;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom" },
          { name: symptom.title, href: `/symptom/${symptom.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-white/20 ${urgency.color} !text-white`}>
              緊急度: {urgency.label}
            </span>
            <span className="text-xs text-sky-100">最終更新: {UPDATED}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{symptom.title}</h1>
          <p className="text-sky-100 text-lg max-w-2xl">{symptom.description}</p>
          <div className="mt-6 bg-white/10 rounded-xl p-4 inline-flex items-center gap-4">
            <div>
              <p className="text-sky-200 text-xs">修理費用目安</p>
              <p className="font-bold text-white text-lg">{symptom.estimatedCost}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Quick check / conclusion */}
        {quickCheck.length > 0 && (
          <section>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                まず確認すること
              </h2>
              <ul className="space-y-2">
                {quickCheck.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-sky-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                上記を試しても改善しない場合や、専門資格が必要な作業が原因の場合は、無理をせず専門業者への相談をおすすめします。
              </p>
            </div>
          </section>
        )}

        {/* Causes */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">考えられる原因</h2>
          <ul className="space-y-3">
            {symptom.causes.map((cause, i) => (
              <li key={cause} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-slate-700">{cause}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solutions */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">解決策・対処法</h2>
          <div className="space-y-4">
            {symptom.solutions.map((solution) => {
              const diff = difficultyLabel[solution.difficulty] ?? difficultyLabel.easy;
              return (
                <div key={solution.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-slate-900">{solution.title}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${solution.diy ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                        {solution.diy ? "自分で対応可" : "業者依頼"}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${diff.color}`}>
                        {diff.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                  {!solution.diy && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      <span>専門資格・専用工具が必要な作業です。必ず業者に依頼してください。</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Cost table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">修理費用の目安</h2>
          {costBreakdown.length > 0 ? (
            <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-5 py-3 text-left text-sm font-bold">原因・修理内容</th>
                    <th className="px-5 py-3 text-right text-sm font-bold">費用目安</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                      <td className="px-5 py-3 text-sm text-slate-700">{row.item}</td>
                      <td className="px-5 py-3 text-sm text-slate-900 font-semibold text-right whitespace-nowrap">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <p className="text-slate-700">
                修理費用の目安は <span className="font-bold">{symptom.estimatedCost}</span> です。
              </p>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-3">
            ※費用はあくまで目安です。実際の金額は症状・機種・地域・業者によって変動します。正確な額は必ず見積もりで確認してください。
          </p>
        </section>

        {/* DIY vs Pro */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">自分でできること / 業者に頼むべきサイン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 自分で対応できること
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">・</span> フィルターの清掃・交換</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">・</span> リモコンの電池交換</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">・</span> ドレンホース先端の簡単な詰まり除去</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">・</span> 電源リセット・再起動、室外機周りの片付け</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg> 業者に頼むべきサイン
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">!</span> 冷媒ガスの補充・修理（資格が必要）</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">!</span> 基板・コンプレッサーの修理・交換</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">!</span> 電気系統のトラブル・自分での対処で改善しない</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">!</span> 焦げ臭い・煙・火花がある場合（火災リスク・すぐ運転停止）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Companies */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">この症状におすすめの業者</h2>
          <div className="space-y-4">
            {recommendedCompanies.map((c, index) => (
              <div key={c.slug} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 text-2xl font-black text-sky-500">#{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">{c.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{c.tagline}</p>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>費用: {c.avgCost}</span>
                    <span>速度: {c.responseTime}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-stretch gap-1.5">
                  <Link
                    href={`/company/${c.slug}`}
                    className="text-center bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    詳細
                  </Link>
                  <AffiliateOfficialButton
                    slug={c.slug}
                    className="text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">よくある質問</h2>
          <div className="space-y-4">
            {symptom.faqs.map((faq) => (
              <details key={faq.question} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-bold text-slate-900 hover:bg-sky-50 transition-colors text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-sky-500 font-black">Q.</span>
                    {faq.question}
                  </span>
                </summary>
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-700">
                  <span className="text-green-600 font-black mr-2">A.</span>{faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        {(guideLinks.length > 0 || relatedSymptoms.length > 0) && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">関連する情報</h2>
            {guideLinks.length > 0 && (
              <div className="mb-5">
                <p className="text-sm font-bold text-slate-700 mb-2">詳しいガイド</p>
                <ul className="space-y-2">
                  {guideLinks.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href} className="inline-flex items-center gap-2 text-sky-600 font-bold hover:underline text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedSymptoms.length > 0 && (
              <div>
                <p className="text-sm font-bold text-slate-700 mb-2">関連する症状</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedSymptoms.map((rs) => (
                    <Link
                      key={rs.slug}
                      href={`/symptom/${rs.slug}`}
                      className="block bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all text-sm font-bold text-slate-800"
                    >
                      {rs.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">まずは無料相談・見積もりを</h2>
          <p className="text-sky-100 text-sm mb-6">専門業者に相談することで、最適な修理方法と費用がわかります。費用は機種・地域・業者で変動するため、正確な額は見積もりでご確認ください。</p>
          <Link
            href="/ranking"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            業者ランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
