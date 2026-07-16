import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { getAffiliate } from "@/lib/affiliates";
import { getFelmat } from "@/lib/felmat";

export const metadata: Metadata = {
  title: "エアコン修理を即日で頼むには？【今日直したい】24時間受付業者と当日予約のコツ",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4"> 即日対応 修理業者ランキング</h1>
          <p className="text-orange-100 text-lg">急なエアコントラブルに最速で対応する業者TOP5</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Emergency Tips */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-10">
          <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <span></span> 急な修理の前に確認すること
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
                   {c.responseTime}
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
                  {getAffiliate(c.slug) ? (
                    <AffiliateOfficialButton
                      slug={c.slug}
                      label="今すぐ相談する（PR）"
                      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    />
                  ) : getFelmat(c.slug) ? (
                    <FelmatOfficialButton
                      slug={c.slug}
                      label="今すぐ相談する（PR）"
                      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    />
                  ) : (
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    >
                      今すぐ相談する（PR）
                    </a>
                  )}
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
        {/* 今日直すための実用ガイド（2026-07-04追加） */}
        <section className="mt-12 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">今日中に修理してもらうための4つのコツ</h2>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
              <li><strong>朝一番（受付開始直後）に電話する</strong>：即日枠は先着で埋まります。24時間受付の業者なら深夜〜早朝の予約も有効です。</li>
              <li><strong>症状・機種情報を先にまとめる</strong>：室内機のメーカー名と型番（前面パネル下部などのシール）、症状（冷えない/水漏れ/異音/エラーコード）、設置年をメモしてから電話すると、手配が速くなります。</li>
              <li><strong>複数社に同時に問い合わせる</strong>：繁忙期は1社目で「明日以降」と言われることも。24時間受付の業者に相見積もりし、早く来られる方に頼むのが現実的です。</li>
              <li><strong>集合住宅は管理会社にも一報</strong>：賃貸は修理費の負担者（貸主負担のケースあり）を先に確認するとトラブルを防げます。</li>
            </ol>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h2 className="text-xl font-bold text-orange-900 mb-3">業者を待つ間の応急対処（安全第一）</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・電源プラグの抜き差しで再起動（リセットで直る一時的な不具合もあります）</li>
              <li>・フィルターの目詰まり確認・清掃、室外機の周りの物をどける（吸排気の確保）</li>
              <li>・冷えない間は、カーテンで直射日光を遮る・扇風機併用・水分補給で熱中症対策を最優先に</li>
              <li>・<strong>焦げ臭い・煙・火花がある場合は使用を中止</strong>し、プラグを抜いて業者へ（火災リスク）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">※分解を伴う作業や冷媒ガスの処置は資格が必要です。無理をせず業者にお任せください。症状別の詳しい対処は<Link href="/symptom" className="text-sky-600 underline font-bold">症状から探す</Link>へ。</p>
          </div>
        </section>

      </div>
    </>
  );
}
