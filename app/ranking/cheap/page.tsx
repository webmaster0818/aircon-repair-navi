import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { getAffiliate } from "@/lib/affiliates";
import { getFelmat } from "@/lib/felmat";

export const metadata: Metadata = {
  title: "安いエアコン修理業者ランキング｜費用を抑える方法",
  description: "エアコン修理の費用を抑えたい方向けのランキングです。各社の公式サイトに記載された最低料金が安い順に、上位5社を紹介しています。見積もりの比較により費用を抑える方法も解説しています。",
  alternates: { canonical: "/ranking/cheap/" },
};

// Sort by cheapest (based on min avg cost)
const cheapCompanies = [...companies]
  .sort((a, b) => {
    // 最初に出てくる0円以外の金額（「2.7万円」は27000）。「出張費0円」は料金ではないので飛ばす。金額が無いものは末尾
    const getMin = (cost: string) => {
      for (const m of cost.matchAll(/(\d[\d,]*(?:\.\d+)?)(万)?(?:円|〜)/g)) {
        const n = parseFloat(m[1].replace(/,/g, "")) * (m[2] ? 10000 : 1);
        if (n > 0) return n;
      }
      return 999999;
    };
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

      <section className="bg-[var(--color-brand)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/50 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">安いエアコン修理業者ランキング</h1>
          <p className="text-emerald-100 text-lg">修理費用を抑えたい方向けの上位5社です</p>
          <p className="text-emerald-100 text-xs mt-2">各社の公式サイトに記載された最低料金の安い順に掲載しています（2026年10月15日確認）。料金に含まれる作業や条件は、各社で異なります。</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Tips */}
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mb-10">
          <h2 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
            <span></span> 修理費用を抑えるための5つの方法
          </h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">1.</span> 複数の業者から見積もりを取り、比較します</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">2.</span> 繁忙期（夏・冬）を避けて依頼すると、割安になる場合があります</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">3.</span> フィルター清掃など、ご自身でできる作業はご自身で行います</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">4.</span> メーカー保証の期間内かどうかを必ず確認します</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">5.</span> 見積もり後に追加料金が発生しないか、事前に確認します</li>
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
                    className="ac-btn ac-btn-outline flex-1 text-sm py-2.5"
                  >
                    詳細を見る
                  </Link>
                  {getAffiliate(c.slug) ? (
                    <AffiliateOfficialButton
                      slug={c.slug}
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : getFelmat(c.slug) ? (
                    <FelmatOfficialButton
                      slug={c.slug}
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : (
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    >
                      公式サイトへ（PR）
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[var(--color-brand)] rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">複数社の比較による費用の削減</h2>
          <p className="text-sky-100 text-sm mb-6">複数社から無料見積もりを取ることで、費用を最大50%節約できる場合があります。</p>
          <Link
            href="/ranking"
            className="ac-btn ac-btn-cta px-8 py-4 text-lg"
          >
            全26社のランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
