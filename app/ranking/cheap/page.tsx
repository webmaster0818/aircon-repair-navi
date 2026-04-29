import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "安いエアコン修理業者ランキング｜費用を抑えるコツも解説",
  description: "エアコン修理費用を安く抑えたい方向けのランキング。費用相場が安い業者TOP5を厳選。見積もり比較で賢く節約する方法も紹介。",
};

// Sort by cheapest (based on min avg cost)
const cheapCompanies = [...companies]
  .sort((a, b) => {
    const getMin = (cost: string) => parseInt(cost.replace(/[^0-9]/g, "").slice(0, 5) || "99999");
    return getMin(a.avgCost) - getMin(b.avgCost);
  })
  .slice(0, 5);

export default function CheapRankingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "業者ランキング", href: "/ranking" },
          { name: "安い業者ランキング", href: "/ranking/cheap" },
        ]}
      />

      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">安いエアコン修理業者ランキング</h1>
          <p className="text-emerald-100 text-lg">修理費用を最小限に抑えたい方向け・費用重視TOP5</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Tips */}
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mb-10">
          <h2 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
            <span></span> 修理費用を安く抑える5つのコツ
          </h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">1.</span> 複数の業者から見積もりを取って比較する</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">2.</span> 繁忙期（夏・冬）を避けて依頼すると割安になる場合がある</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">3.</span> フィルター清掃などDIYできる作業は自分でやる</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">4.</span> メーカー保証期間内かどうかを必ず確認する</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">5.</span> 見積もり後の追加料金がないか事前に確認する</li>
          </ol>
        </div>

        {/* Ranking */}
        <div className="space-y-6">
          {cheapCompanies.map((c, index) => (
            <div key={c.slug} className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-3 bg-emerald-50">
                <span className="text-xl font-black text-emerald-600">#{index + 1}</span>
                <h2 className="text-lg font-bold text-slate-900">{c.name}</h2>
                <span className="ml-auto font-bold text-emerald-700">{c.avgCost}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{c.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.features.map((f) => (
                    <span key={f} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/company/${c.slug}`}
                    className="flex-1 text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={c.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                  >
                    公式サイトへ（PR）
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">複数社を比較して最安値を見つけよう</h2>
          <p className="text-sky-100 text-sm mb-6">無料見積もりを複数社から取ることで、最大50%費用を節約できるケースも。</p>
          <Link
            href="/ranking"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            全10社ランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
