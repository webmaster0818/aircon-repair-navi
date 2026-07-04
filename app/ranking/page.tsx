import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { getAffiliate } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "エアコン修理業者ランキング｜2024年最新おすすめ10社",
  description: "エアコン修理業者の総合ランキング。対応スピード・料金・口コミ・実績を徹底比較。最短即日対応から安い業者まで、あなたに最適な業者が見つかります。",
};

export default function RankingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "業者ランキング", href: "/ranking" }]} />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">エアコン修理業者 総合ランキング</h1>
          <p className="text-sky-100 text-lg">2024年最新・編集部が厳選した信頼できる10社を徹底比較</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/ranking/fast" className="bg-white/20 hover:bg-white/30 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors">
               即日対応ランキング
            </Link>
            <Link href="/ranking/cheap" className="bg-white/20 hover:bg-white/30 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors">
               安い業者ランキング
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-6">
          {companies.map((c, index) => (
            <div
              key={c.slug}
              className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden ${
                index === 0 ? "border-yellow-400" : index === 1 ? "border-gray-300" : index === 2 ? "border-orange-300" : "border-gray-100"
              }`}
            >
              {/* Rank badge */}
              <div className={`flex items-center gap-3 px-6 py-3 ${
                index === 0 ? "bg-yellow-50" : index === 1 ? "bg-gray-50" : index === 2 ? "bg-orange-50" : "bg-slate-50"
              }`}>
                <span className={`text-2xl font-black ${
                  index === 0 ? "text-yellow-600" : index === 1 ? "text-gray-500" : index === 2 ? "text-orange-500" : "text-slate-400"
                }`}>
                  #{c.rank}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{c.name}</h2>
                {index < 3 && (
                  <span className="text-2xl">{index === 0 ? "" : index === 1 ? "" : ""}</span>
                )}
                <span className="ml-auto text-sm font-bold text-sky-600"> {c.rating}</span>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{c.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center bg-sky-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">費用目安</p>
                    <p className="font-bold text-sky-700 text-sm">{c.avgCost}</p>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">対応速度</p>
                    <p className="font-bold text-green-700 text-sm">{c.responseTime}</p>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">対応エリア</p>
                    <p className="font-bold text-blue-700 text-sm">{c.coverage}</p>
                  </div>
                  <div className="text-center bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">評価</p>
                    <p className="font-bold text-purple-700 text-sm"> {c.rating}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.features.map((f) => (
                    <span key={f} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/company/${c.slug}`}
                    className="flex-1 text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                  >
                    詳細を見る
                  </Link>
                  {getAffiliate(c.slug) ? (
                    <AffiliateOfficialButton
                      slug={c.slug}
                      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                    />
                  ) : (
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                    >
                      公式サイトへ（PR）
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 夜間・24時間受付で選ぶ（2026-07-04・夏の熱帯夜対策） */}
        <section className="mt-12 bg-sky-50 border border-sky-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">夜間・24時間受付で選ぶ（熱帯夜の故障に）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            7〜8月の夜間にエアコンが止まると熱中症のリスクに直結します。当サイト掲載業者のうち、<strong>24時間受付を公称している業者</strong>は次のとおりです（受付=相談・予約の受付時間。実際の訪問時間帯は業者・地域・混雑状況で異なるため、電話時に到着目安をご確認ください）。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-4">
            {companies.filter((c) => (c.features || []).some((f) => String(f).includes("24時間"))).map((c) => (
              <li key={c.slug} className="flex items-center justify-between gap-3 bg-white rounded-lg px-4 py-2.5 border border-gray-100">
                <span><Link href={`/company/${c.slug}`} className="font-bold text-sky-700 hover:underline">{c.name}</Link><span className="text-xs text-gray-500 ml-2">{c.responseTime}</span></span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500">※「24時間」は各社公式の受付に関する公称です。深夜帯は割増料金の業者もあるため、料金条件もあわせてご確認ください。</p>
        </section>

        {/* Related Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/ranking/fast" className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-200 transition-colors">
            <span className="text-3xl"></span>
            <div>
              <h3 className="font-bold text-slate-900">即日対応ランキング</h3>
              <p className="text-sm text-gray-600">急ぎで修理したい方はこちら</p>
            </div>
          </Link>
          <Link href="/ranking/cheap" className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-200 transition-colors">
            <span className="text-3xl"></span>
            <div>
              <h3 className="font-bold text-slate-900">安い業者ランキング</h3>
              <p className="text-sm text-gray-600">費用を抑えたい方はこちら</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
