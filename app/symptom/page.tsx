import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import symptoms from "@/data/symptoms.json";

export const metadata: Metadata = {
  title: "エアコンの故障・症状から原因と対処法を探す｜症状別ガイド【2026年】",
  description:
    "エアコンが冷えない・水漏れ・異音・ガス漏れ・動かないなど、症状別に原因と自分でできる対処法、業者に頼むべきサイン、修理費用の目安（要見積もり）を解説。あてはまる症状を選んで原因と直し方を確認できる症状別ガイドの一覧です。",
  alternates: { canonical: "/symptom" },
};

const iconMap: Record<string, { iconSrc: string; color: string; iconBg: string }> = {
  "not-cooling": { iconSrc: "/images/icon-snowflake.png", color: "bg-sky-50 border-sky-200 hover:bg-sky-100 hover:border-sky-400", iconBg: "bg-sky-100" },
  "water-leak": { iconSrc: "/images/icon-water-drop.png", color: "bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400", iconBg: "bg-blue-100" },
  noise: { iconSrc: "/images/icon-sound-wave.png", color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-400", iconBg: "bg-yellow-100" },
  "bad-smell": { iconSrc: "/images/icon-nose.png", color: "bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-400", iconBg: "bg-green-100" },
  "not-starting": { iconSrc: "/images/icon-power.png", color: "bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-400", iconBg: "bg-red-100" },
  "gas-leak": { iconSrc: "/images/icon-gas.png", color: "bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-400", iconBg: "bg-purple-100" },
  "remote-error": { iconSrc: "/images/icon-remote.png", color: "bg-orange-50 border-orange-200 hover:bg-orange-100 hover:border-orange-400", iconBg: "bg-orange-100" },
  "error-code": { iconSrc: "/images/icon-alert.png", color: "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-400", iconBg: "bg-gray-100" },
};

const order = [
  "not-cooling",
  "water-leak",
  "noise",
  "gas-leak",
  "bad-smell",
  "not-starting",
  "remote-error",
  "error-code",
];

export default function SymptomHubPage() {
  const sorted = order
    .map((slug) => symptoms.find((s) => s.slug === slug))
    .filter((s): s is (typeof symptoms)[number] => Boolean(s));

  return (
    <>
      <Breadcrumb items={[{ name: "症状から探す", href: "/symptom" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">エアコンの症状から原因と対処法を探す</h1>
          <p className="text-sky-100 text-lg max-w-2xl">
            エアコンの故障・トラブルは症状ごとに原因と対処法が異なります。あてはまる症状を選ぶと、考えられる原因・自分でできる対処・業者に頼むべきサイン・修理費用の目安を確認できます。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Symptom grid */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">症状から探す（全{sorted.length}種類）</h2>
          <p className="text-sm text-gray-500 mb-6">あてはまる症状を選んでください。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sorted.map((s) => {
              const icon = iconMap[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/symptom/${s.slug}`}
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all shadow-sm hover:shadow-md ${icon?.color ?? "bg-white border-gray-200 hover:border-sky-300"}`}
                >
                  {icon && (
                    <span className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${icon.iconBg}`}>
                      <img src={icon.iconSrc} alt="" className="w-7 h-7 inline-block" />
                    </span>
                  )}
                  <span className="flex-1">
                    <span className="block font-bold text-slate-900 mb-1">{s.title}</span>
                    <span className="block text-xs text-gray-500 line-clamp-2">{s.description}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">もっと詳しく知りたい方へ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/guide/repair-cost" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン修理費用の相場ガイド</span>
              <span className="block text-xs text-gray-500">症状・修理内容別の費用相場と見積もりのポイント</span>
            </Link>
            <Link href="/guide/noise" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンの異音 原因と対処ガイド</span>
              <span className="block text-xs text-gray-500">ガガガ・カラカラなど音の種類別の原因と対処法</span>
            </Link>
            <Link href="/ranking" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン修理業者ランキング</span>
              <span className="block text-xs text-gray-500">編集部が比較したおすすめ修理業者一覧</span>
            </Link>
            <Link href="/cost/repair-price" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">修理費用の詳細</span>
              <span className="block text-xs text-gray-500">部位別の修理価格と買い替え判断の目安</span>
            </Link>
          </div>
        </section>

        <p className="text-xs text-gray-400">
          ※掲載している原因・対処法は一般的な知見に基づくもので、すべてのケースに当てはまるとは限りません。費用はあくまで目安で、実際の金額は症状・機種・地域・業者によって変動します。正確な額は見積もりでご確認ください。
        </p>
      </div>
    </>
  );
}
