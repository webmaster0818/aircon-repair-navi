import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "即日対応エアコン修理業者ランキング｜急ぎの修理はこれ",
  description: "エアコンが急に壊れた！今すぐ修理したい方向けの即日・最速対応業者ランキング。最短5分で手配可能な業者も。",
};

// Sort by fastest response
const fastCompanies = [...companies]
  .sort((a, b) => {
    const getSpeed = (t: string) => {
      if (t.includes("5分")) return 1;
      if (t.includes("即日")) return 2;
      if (t.includes("当日")) return 3;
      if (t.includes("翌日")) return 4;
      return 5;
    };
    return getSpeed(a.responseTime) - getSpeed(b.responseTime);
  })
  .slice(0, 5);

export default function FastRankingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "業者ランキング", href: "/ranking" },
          { name: "即日対応ランキング", href: "/ranking/fast" },
        ]}
      />

      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">⚡ 即日対応 修理業者ランキング</h1>
          <p className="text-orange-100 text-lg">急なエアコントラブルに最速で対応する業者TOP5</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Emergency Tips */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-10">
          <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <span>🚨</span> 急な修理の前に確認すること
          </h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">1.</span> まずブレーカーとコンセントを確認する（意外と多い）</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">2.</span> リモコンの電池を確認する</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">3.</span> エラーコードが表示されていれば記録しておく</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">4.</span> 焦げ臭がする場合は使用を中止してブレーカーを落とす</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">5.</span> 機種名（型番）を確認しておくとスムーズ</li>
          </ol>
        </div>

        {/* Ranking */}
        <div className="space-y-6">
          {fastCompanies.map((c, index) => (
            <div key={c.slug} className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-3 bg-orange-50">
                <span className="text-xl font-black text-orange-600">#{index + 1}</span>
                <h2 className="text-lg font-bold text-slate-900">{c.name}</h2>
                <span className="ml-auto font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
                  ⚡ {c.responseTime}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{c.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.features.map((f) => (
                    <span key={f} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-sky-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">費用目安</p>
                    <p className="font-bold text-sky-700 text-sm">{c.avgCost}</p>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">対応エリア</p>
                    <p className="font-bold text-green-700 text-sm">{c.coverage}</p>
                  </div>
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
                    今すぐ相談する（PR）
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">今すぐエアコンを修理したい方へ</h2>
          <p className="text-orange-100 text-sm mb-6">24時間365日対応の業者に相談。最短即日修理も可能です。</p>
          <Link
            href="/ranking"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors"
          >
            全10社ランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
