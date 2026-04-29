import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import symptoms from "@/data/symptoms.json";
import companies from "@/data/companies.json";

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
  return {
    title: symptom.title,
    description: symptom.description,
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

export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const recommendedCompanies = companies.filter((c) =>
    symptom.recommendedCompanies.includes(c.slug)
  );

  const jsonLd = {
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

  const urgency = urgencyLabel[symptom.urgencyLevel] ?? urgencyLabel.medium;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom/not-cooling" },
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
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${diff.color}`}>
                      {diff.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                  {!solution.diy && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
                      <span>️</span>
                      <span>専門資格が必要な作業です。必ず業者に依頼してください。</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* DIY vs Pro */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">DIY対応 vs 業者依頼の判断基準</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>️</span> DIYで対応できる場合
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500"></span> フィルターの清掃・交換</li>
                <li className="flex items-start gap-2"><span className="text-green-500"></span> リモコンの電池交換</li>
                <li className="flex items-start gap-2"><span className="text-green-500"></span> ドレンホースの簡単な詰まり除去</li>
                <li className="flex items-start gap-2"><span className="text-green-500"></span> 電源リセット・再起動</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <span>‍</span> 業者依頼が必要な場合
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-orange-500">!</span> 冷媒ガスの補充・修理（資格が必要）</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">!</span> 基板・コンプレッサーの修理・交換</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">!</span> 電気系統のトラブル</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">!</span> 焦げ臭がする場合（火災リスク）</li>
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
                <Link
                  href={`/company/${c.slug}`}
                  className="flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  詳細
                </Link>
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">まずは無料相談・見積もりを</h2>
          <p className="text-sky-100 text-sm mb-6">専門業者に相談することで、最適な修理方法と費用がわかります。</p>
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
