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

// アイコンは2026-10-04に8点を同一スタイルで作り直した（512px/背景透過）。
// カードの色は変えず、全症状で同じ見た目に統一する（施主指示④）。
const iconMap: Record<string, string> = {
  "not-cooling": "/images/icons/icon-not-cooling.png",
  "water-leak": "/images/icons/icon-water-leak.png",
  noise: "/images/icons/icon-noise.png",
  "bad-smell": "/images/icons/icon-bad-smell.png",
  "not-starting": "/images/icons/icon-not-starting.png",
  "gas-leak": "/images/icons/icon-gas-leak.png",
  "remote-error": "/images/icons/icon-remote-error.png",
  "error-code": "/images/icons/icon-error-code.png",
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
      <section className="bg-[var(--color-brand)] text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">エアコンの症状から原因と対処法を探す</h1>
          <p className="text-[var(--color-brand-wash)] max-w-2xl text-sm md:text-base leading-[2]">
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
                  className="ac-card flex items-start gap-4 p-5 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] transition-colors"
                >
                  {icon && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={icon} alt="" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" />
                  )}
                  <span className="flex-1">
                    <span className="block font-bold mb-1">{s.title}</span>
                    <span className="block text-xs text-[var(--color-ink-2)] line-clamp-2 leading-relaxed">{s.description}</span>
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
            <Link href="/cost/repair-price/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
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
