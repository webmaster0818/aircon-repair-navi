import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エアコン修理費用の相場｜症状別の料金目安を徹底解説",
  description: "エアコン修理費用の相場を症状別に詳しく解説。ガス補充・水漏れ・基板交換など、修理内容ごとの費用目安と料金の内訳をわかりやすく紹介します。",
};

const costItems = [
  {
    category: "ガス・冷媒系",
    items: [
      { name: "冷媒ガス補充（R32）", min: 20000, max: 40000, note: "補充量によって変動" },
      { name: "冷媒ガス補充（R22）", min: 30000, max: 60000, note: "旧式冷媒は高め" },
      { name: "ガス漏れ修理+補充", min: 35000, max: 80000, note: "漏れ箇所の修理費用を含む" },
    ],
  },
  {
    category: "水漏れ・排水系",
    items: [
      { name: "ドレンホース詰まり除去", min: 3000, max: 8000, note: "簡易作業" },
      { name: "ドレンパン清掃", min: 8000, max: 20000, note: "分解清掃が必要" },
      { name: "ドレンパン交換", min: 15000, max: 35000, note: "部品代込み" },
    ],
  },
  {
    category: "電気・基板系",
    items: [
      { name: "基板（室内機）交換", min: 30000, max: 80000, note: "機種によって大きく異なる" },
      { name: "基板（室外機）交換", min: 40000, max: 100000, note: "高額になる場合が多い" },
      { name: "センサー交換", min: 8000, max: 20000, note: "比較的安価" },
    ],
  },
  {
    category: "機械系",
    items: [
      { name: "ファンモーター交換", min: 15000, max: 40000, note: "室内機・室外機で異なる" },
      { name: "コンプレッサー交換", min: 80000, max: 200000, note: "最高額の修理" },
      { name: "膨張弁交換", min: 20000, max: 50000, note: "冷媒回路の修理" },
    ],
  },
  {
    category: "その他",
    items: [
      { name: "リモコン交換（純正）", min: 5000, max: 15000, note: "メーカー純正品" },
      { name: "リモコン交換（汎用）", min: 2000, max: 5000, note: "互換品" },
      { name: "エアコンクリーニング", min: 8000, max: 20000, note: "壁掛けタイプ" },
      { name: "出張費・診断料", min: 3000, max: 8000, note: "修理費用に含まれる場合も" },
    ],
  },
];

export default function RepairPricePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用・比較", href: "/cost/repair-price" },
          { name: "修理費用の相場", href: "/cost/repair-price" },
        ]}
      />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">エアコン修理費用の相場</h1>
          <p className="text-sky-100 text-lg">症状・修理内容別の料金目安を徹底解説</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Summary */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span></span> 修理費用の基本的な仕組み
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span>・</span> <span><strong>出張費</strong>（3,000〜8,000円）+ <strong>診断料</strong>（2,000〜5,000円）+ <strong>修理費</strong>が基本構成</span></li>
            <li className="flex items-start gap-2"><span>・</span> <span>業者によっては診断料・出張費を修理費に含める場合がある</span></li>
            <li className="flex items-start gap-2"><span>・</span> <span>夏場（7〜9月）は繁忙期のため料金が高くなる場合がある</span></li>
            <li className="flex items-start gap-2"><span>・</span> <span>見積もりは複数社から取ることを強くお勧めします</span></li>
          </ul>
        </div>

        {/* Cost Tables */}
        {costItems.map((category) => (
          <section key={category.category}>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">{category.category}</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold">修理内容</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">最安値目安</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">最高値目安</th>
                    <th className="px-4 py-3 text-left text-sm font-bold hidden md:table-cell">備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {category.items.map((item, i) => (
                    <tr key={item.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-sm font-medium text-slate-800">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-center text-green-700 font-bold">
                        {item.min.toLocaleString()}円〜
                      </td>
                      <td className="px-4 py-3 text-sm text-center text-red-600 font-bold">
                        〜{item.max.toLocaleString()}円
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 hidden md:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Warning */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            ※上記費用はあくまでも参考目安です。実際の費用は機種・使用年数・地域・業者によって大きく異なります。
            必ず事前に無料見積もりを取得し、複数社を比較されることをお勧めします。
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">無料見積もりで実際の費用を確認しよう</h2>
          <p className="text-sky-100 text-sm mb-6">複数社に見積もりを依頼すると最大30〜50%費用を抑えられるケースも。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/cost/replace-vs-repair"
              className="bg-white text-sky-700 font-bold px-8 py-3 rounded-xl hover:bg-sky-50 transition-colors"
            >
              修理 vs 買い替え判断ガイド
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
