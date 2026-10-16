import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { getAffiliate } from "@/lib/affiliates";
import { getFelmat } from "@/lib/felmat";

export const metadata: Metadata = {
  title: "エアコン修理を即日で依頼する方法｜24時間受付の業者と当日予約の手順",
  description: "エアコンが急に故障し、すぐに修理を依頼したい方向けの即日対応業者ランキングです。最短5分で手配できると公称している業者も掲載しています。",
  alternates: { canonical: "/ranking/fast/" },
};

// Sort by fastest response
const fastCompanies = [...companies]
  .sort((a, b) => {
    // 「最短N分」は分数、即日・当日は同日扱い、翌日はその次
    const getSpeed = (t: string) => {
      const m = t.match(/最短(\d+)分/);
      if (m) return parseInt(m[1]);
      if (t.includes("即日") || t.includes("当日")) return 600;
      if (t.includes("翌日")) return 1440;
      return 99999;
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

      <section className="bg-[var(--color-brand)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4"> 即日対応の修理業者ランキング</h1>
          <p className="text-orange-100 text-lg">急なエアコントラブルに早く対応できる上位5社です</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Emergency Tips */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-10">
          <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <span></span> 急な修理の前に確認すること
          </h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">1.</span> 最初にブレーカーとコンセントを確認します（これらが原因の場合も多くあります）</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">2.</span> リモコンの電池を確認します</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">3.</span> エラーコードが表示されている場合は記録します</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">4.</span> 焦げ臭い場合は使用を中止し、ブレーカーを切ります</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">5.</span> 機種名（型番）を確認しておくと、手配が円滑になります</li>
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
                    <span key={f} className="text-xs border border-[var(--color-line-strong)] text-[var(--color-brand)] px-2 py-1 rounded">{f}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-sky-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">費用の目安</p>
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
                    className="ac-btn ac-btn-outline flex-1 text-sm py-2.5"
                  >
                    詳細を見る
                  </Link>
                  {getAffiliate(c.slug) ? (
                    <AffiliateOfficialButton
                      slug={c.slug}
                      label="公式サイトで相談する（PR）"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : getFelmat(c.slug) ? (
                    <FelmatOfficialButton
                      slug={c.slug}
                      label="公式サイトで相談する（PR）"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : (
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    >
                      公式サイトで相談する（PR）
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[var(--color-brand)] rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">エアコンの修理をお急ぎの方へ</h2>
          <p className="text-orange-100 text-sm mb-6">24時間365日受付の業者に相談できます。最短で即日の修理に対応する業者もあります。</p>
          <Link
            href="/ranking"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors"
          >
            全26社のランキングを見る
          </Link>
        </div>
        {/* 今日直すための実用ガイド（2026-07-04追加） */}
        <section className="mt-12 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">当日中に修理を依頼するための4つの手順</h2>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
              <li><strong>朝一番（受付開始直後）に電話する</strong>：即日の訪問枠は先着順で埋まるためです。24時間受付の業者であれば、深夜〜早朝の予約も有効です。</li>
              <li><strong>症状・機種情報を先にまとめる</strong>：室内機のメーカー名と型番（前面パネル下部などのシール）、症状（冷えない/水漏れ/異音/エラーコード）、設置年をメモしてから電話すると、手配が円滑に進みます。</li>
              <li><strong>複数社に同時に問い合わせる</strong>：繁忙期は、1社目で「明日以降」と案内される場合があります。24時間受付の複数の業者に問い合わせ、早く訪問できる業者に依頼することをおすすめします。</li>
              <li><strong>集合住宅の場合は管理会社にも連絡します</strong>：賃貸物件では、修理費の負担者（貸主負担の場合があります）を事前に確認すると、トラブルを防げます。</li>
            </ol>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h2 className="text-xl font-bold text-orange-900 mb-3">業者の到着までの応急対処（安全を最優先してください）</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・電源プラグを抜き差しして再起動します（リセットで解消する一時的な不具合もあります）</li>
              <li>・フィルターの目詰まりを確認・清掃し、室外機の周りの物を移動します（吸排気の確保のためです）</li>
              <li>・冷房が効かない間は、カーテンで直射日光を遮る、扇風機を併用する、水分を補給するなど、熱中症対策を最優先してください</li>
              <li>・<strong>焦げ臭い・煙・火花がある場合は使用を中止</strong>し、プラグを抜いて業者に連絡してください（火災のおそれがあるためです）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">※分解を伴う作業や冷媒ガスの処置は資格が必要です。無理をせず、業者にご依頼ください。症状別の詳しい対処は<Link href="/symptom" className="text-sky-600 underline font-bold">症状から探す</Link>をご覧ください。</p>
          </div>
        </section>

      </div>
    </>
  );
}
