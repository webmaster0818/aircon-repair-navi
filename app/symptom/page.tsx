import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import symptoms from "@/data/symptoms.json";

export const metadata: Metadata = {
  title: "エアコンの故障・症状から原因と対処法を探す｜症状別ガイド【2026年】",
  description:
    "エアコンが冷えない・水漏れ・異音・ガス漏れ・動かないなど、症状別に原因と自分でできる対処法、業者に頼むべきサイン、修理費用の目安（要見積もり）を解説しています。該当する症状を選択すると、原因と対処法をご確認いただける症状別ガイドの一覧です。",
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
            エアコンの故障・トラブルは症状ごとに原因と対処法が異なります。該当する症状を選択すると、考えられる原因、ご自身でできる対処、業者への依頼を検討すべき症状、修理費用の目安をご確認いただけます。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Symptom grid */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">症状から探す（全{sorted.length}種類）</h2>
          <p className="text-sm text-gray-500 mb-6">該当する症状を選択してください。</p>
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
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/cost/repair-price/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン修理費用の相場ガイド</span>
              <span className="block text-xs text-gray-500">症状・修理内容別の費用相場と見積もりのポイント</span>
            </Link>
            <Link href="/guide/noise" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンの異音の原因と対処ガイド</span>
              <span className="block text-xs text-gray-500">ガガガ・カラカラなど音の種類別の原因と対処法</span>
            </Link>
            <Link href="/guide/louver-not-closing/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">ルーバー（風向板）が閉まらない原因</span>
              <span className="block text-xs text-gray-500">故障ではない場合の見分け方とリセット方法</span>
            </Link>
            <Link href="/guide/stops-midway/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンが途中で止まる原因</span>
              <span className="block text-xs text-gray-500">タイマー・霜取り・保護停止と故障の見分け方</span>
            </Link>
            <Link href="/guide/gas-overcharge/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">冷媒ガスの入れすぎ（過充填）</span>
              <span className="block text-xs text-gray-500">メーカー説明書の記載と規定量の決まり方</span>
            </Link>
            <Link href="/cost/fan-motor/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">ファンモーター交換の費用</span>
              <span className="block text-xs text-gray-500">日立・東芝・ダイキンの公式修理料金目安</span>
            </Link>
            <Link href="/guide/repair-scam/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン修理の詐欺・高額請求の対策</span>
              <span className="block text-xs text-gray-500">国民生活センターの相談事例と依頼前の確認点</span>
            </Link>
            <Link href="/guide/fire-insurance/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンの故障と火災保険</span>
              <span className="block text-xs text-gray-500">落雷・台風・電気的事故の補償と対象外の条件</span>
            </Link>
            <Link href="/guide/installation-trouble/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">取り付け工事のトラブルの対処</span>
              <span className="block text-xs text-gray-500">室内機の脱落・施工不良の紛争事例と依頼前の確認点</span>
            </Link>
            <Link href="/guide/ten-years-no-cleaning/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンを10年掃除していない場合</span>
              <span className="block text-xs text-gray-500">業者5社の受付条件とクリーニングか買い替えかの判断</span>
            </Link>
            <Link href="/guide/cleaning-failure/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンクリーニングの失敗を防ぐ方法</span>
              <span className="block text-xs text-gray-500">国民生活センターの相談事例と業者5社の補償規定</span>
            </Link>
            <Link href="/guide/error-code-hitachi/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">日立(白くまくん)のランプ点滅の意味</span>
              <span className="block text-xs text-gray-500">タイマーランプ・みはりランプの回数別一覧と公式の修理料金</span>
            </Link>
            <Link href="/guide/error-code-toshiba/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">東芝(大清快)のエラー表示の意味</span>
              <span className="block text-xs text-gray-500">公式が公表している表示と故障ではない点滅</span>
            </Link>
            <Link href="/guide/error-code-panasonic/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">パナソニック(エオリア)のエラーコード一覧</span>
              <span className="block text-xs text-gray-500">H11・F91など公式FAQの18コードと確認方法</span>
            </Link>
            <Link href="/guide/error-code-sharp/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">シャープのエラー番号の確認方法</span>
              <span className="block text-xs text-gray-500">ランプ点滅の読み方と公式の故障診断ナビの内容</span>
            </Link>
            <Link href="/cost/installation/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン取り付け費用の目安</span>
              <span className="block text-xs text-gray-500">量販店4社の標準工事費・追加工事費と総額試算</span>
            </Link>
            <Link href="/guide/parts-names/" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコンの部品の名称と役割</span>
              <span className="block text-xs text-gray-500">室内機・室外機の各部とメーカー別の呼び方</span>
            </Link>
            <Link href="/ranking" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">エアコン修理業者ランキング</span>
              <span className="block text-xs text-gray-500">編集部が比較した修理業者の一覧</span>
            </Link>
            <Link href="/cost/repair-price" className="block bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all">
              <span className="block font-bold text-slate-900 mb-1">修理費用の詳細</span>
              <span className="block text-xs text-gray-500">部位別の修理価格と買い替え判断の目安</span>
            </Link>
          </div>
        </section>

        <p className="text-xs text-gray-400">
          ※掲載している原因・対処法は一般的な知見にもとづくもので、すべてのケースに当てはまるものではありません。費用は目安であり、実際の金額は症状・機種・地域・業者によって変動します。正確な金額は見積もりにてご確認ください。
        </p>
      </div>
    </>
  );
}
