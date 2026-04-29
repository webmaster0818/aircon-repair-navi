import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・料金`,
    description: `${company.name}の特徴・料金・口コミを徹底解説。${company.tagline}。無料見積もり可能。`,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const serviceFlow = [
    { step: 1, title: "無料相談・見積もり", desc: "電話またはWebフォームから気軽に相談。見積もりは無料です。" },
    { step: 2, title: "日程調整・訪問", desc: "ご都合の良い日時に担当スタッフが訪問します。" },
    { step: 3, title: "現地確認・診断", desc: "エアコンの状態を確認し、修理内容と費用をご提案します。" },
    { step: 4, title: "修理・作業", desc: "承諾後、速やかに修理作業を開始します。" },
    { step: 5, title: "確認・お支払い", desc: "作業完了後にご確認いただき、お支払いをお願いします。" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    url: company.officialUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.rating,
      bestRating: "5",
      worstRating: "1",
      ratingCount: "100",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "業者一覧", href: "/ranking" },
          { name: company.name, href: `/company/${company.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">#{company.rank}</span>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{company.coverage}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{company.name}</h1>
              <p className="text-sky-100 text-lg mb-4">{company.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {company.features.map((f) => (
                  <span key={f} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center min-w-48">
              <div className="text-4xl font-black text-yellow-300 mb-1">{company.rating}</div>
              <div className="flex justify-center mb-2">
                {"★".repeat(Math.floor(company.rating)).split("").map((s, i) => (
                  <span key={i} className="text-yellow-300">{s}</span>
                ))}
              </div>
              <div className="text-sky-200 text-xs">編集部評価</div>
              <div className="mt-4 text-sm">
                <p className="text-sky-100">費用目安</p>
                <p className="font-bold text-white">{company.avgCost}</p>
              </div>
              <div className="mt-3 text-sm">
                <p className="text-sky-100">対応速度</p>
                <p className="font-bold text-green-300">{company.responseTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Description */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">サービス概要</h2>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
        </section>

        {/* Pros / Cons */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span> メリット
              </h3>
              <ul className="space-y-2">
                {company.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">●</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span> デメリット
              </h3>
              <ul className="space-y-2">
                {company.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 mt-0.5">●</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service Flow */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-sky-500">サービスの流れ</h2>
          <div className="space-y-4">
            {serviceFlow.map((step, index) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {index < serviceFlow.length - 1 && (
                  <div className="absolute left-8 mt-10 w-px h-4 bg-sky-200" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Coverage */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">対応エリア</h2>
          <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📍</span>
              <span className="font-bold text-sky-800 text-lg">{company.coverage}対応</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {company.coverage === "全国"
                ? "北海道から沖縄まで全国に対応しています。離島や一部地域では対応できない場合もありますので、事前にご確認ください。"
                : "主要都市エリアを中心に対応しています。対応エリア外の場合は、近隣の提携業者をご紹介する場合があります。"}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">{company.name}についてよくある質問</h2>
          <div className="space-y-4">
            {[
              {
                q: `${company.name}の見積もりは無料ですか？`,
                a: "はい、見積もりは無料です。まずはお気軽にご相談ください。",
              },
              {
                q: "修理後の保証はありますか？",
                a: "修理内容によって保証期間が異なります。詳細は担当スタッフにお問い合わせください。",
              },
              {
                q: "即日対応は可能ですか？",
                a: `${company.responseTime}で対応可能な場合があります。お急ぎの場合はお電話でご相談ください。`,
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-bold text-slate-900 hover:bg-sky-50 transition-colors text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-sky-500 font-black">Q.</span>
                    {faq.q}
                  </span>
                </summary>
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-700">
                  <span className="text-green-600 font-black mr-2">A.</span>{faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">{company.name}に無料相談する</h2>
          <p className="text-sky-100 text-sm mb-6">まずは無料見積もりから。最短{company.responseTime}で対応可能。</p>
          <a
            href={company.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            公式サイトで無料相談する（PR）
          </a>
          <p className="text-xs text-sky-200 mt-3">※外部サイトに移動します</p>
        </div>

        {/* Back to ranking */}
        <div className="text-center">
          <Link href="/ranking" className="text-sky-600 font-bold hover:underline">
            ← 全業者ランキングに戻る
          </Link>
        </div>
      </div>
    </>
  );
}
