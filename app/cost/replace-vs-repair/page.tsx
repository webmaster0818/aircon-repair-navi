import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エアコン修理 vs 買い替え｜どっちがお得か判断する方法",
  description: "エアコンを修理すべきか買い替えるべきか迷ったときの判断基準を解説。使用年数・修理費用・省エネ性能から総合的に判断する方法をわかりやすく紹介。",
};

const decisionFactors = [
  {
    factor: "使用年数",
    icon: "📅",
    repair: "5年未満",
    replace: "10年以上",
    detail: "エアコンの平均寿命は約10〜15年。使用年数が長いほど部品の劣化が進み、修理してもすぐに別の箇所が壊れるリスクがあります。",
  },
  {
    factor: "修理費用の比率",
    icon: "💴",
    repair: "新品価格の30%未満",
    replace: "新品価格の50%以上",
    detail: "修理費が新品購入費の50%を超える場合、買い替えの方が長期的にお得なことが多いです。",
  },
  {
    factor: "省エネ性能",
    icon: "⚡",
    repair: "5年以内のモデル",
    replace: "10年以上前のモデル",
    detail: "最新エアコンは旧モデルと比較して電気代が20〜40%安くなる場合があります。長期的な電気代の節約効果も考慮しましょう。",
  },
  {
    factor: "部品の入手可能性",
    icon: "🔩",
    repair: "部品が入手可能",
    replace: "部品保有期間終了後",
    detail: "メーカーは製造終了後7〜9年程度で補修部品の保有を終了します。部品が入手できない場合は修理不可能になります。",
  },
  {
    factor: "修理頻度",
    icon: "🔧",
    repair: "初めて故障した",
    replace: "過去に何度も修理",
    detail: "短期間に複数回故障している場合、耐用年数が来ている可能性が高く、買い替えを検討すべきシグナルです。",
  },
];

const checklist = [
  { check: "使用年数が10年以上", score: "買い替え +2点" },
  { check: "修理費が5万円以上", score: "買い替え +2点" },
  { check: "過去3年以内に修理歴あり", score: "買い替え +1点" },
  { check: "電気代が高いと感じる", score: "買い替え +1点" },
  { check: "メーカー保証期間内", score: "修理 +3点" },
  { check: "使用年数が5年未満", score: "修理 +2点" },
  { check: "修理費が2万円未満", score: "修理 +2点" },
  { check: "最新モデルへの興味なし", score: "修理 +1点" },
];

export default function ReplaceVsRepairPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用・比較", href: "/cost/repair-price" },
          { name: "修理 vs 買い替え", href: "/cost/replace-vs-repair" },
        ]}
      />

      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">修理 vs 買い替え 判断ガイド</h1>
          <p className="text-purple-100 text-lg">どっちがお得か？状況別に徹底解説</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Quick Answer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span>🔧</span> 修理すべきケース
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 使用年数が5年未満</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> メーカー保証期間内</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 修理費が2〜3万円未満</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> フィルター詰まりなど軽微な不具合</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 冬季・夏季の繁忙期で新品入手困難</li>
            </ul>
          </div>
          <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <span>🛒</span> 買い替えすべきケース
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">!</span> 使用年数が10年以上</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">!</span> 修理費が新品の50%以上</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">!</span> コンプレッサーが故障</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">!</span> 短期間に何度も故障</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">!</span> 部品保有期間終了後</li>
            </ul>
          </div>
        </div>

        {/* Decision Factors */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-sky-500">判断基準の詳細解説</h2>
          <div className="space-y-6">
            {decisionFactors.map((factor) => (
              <div key={factor.factor} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{factor.icon}</span>
                  {factor.factor}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">修理推奨</p>
                    <p className="font-bold text-green-700 text-sm">{factor.repair}</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">買い替え推奨</p>
                    <p className="font-bold text-orange-700 text-sm">{factor.replace}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{factor.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">かんたん判断チェックリスト</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold">チェック項目</th>
                  <th className="px-4 py-3 text-right text-sm font-bold">判定</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {checklist.map((item, i) => (
                  <tr key={item.check} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-sky-500" />
                        {item.check}
                      </label>
                    </td>
                    <td className={`px-4 py-3 text-sm font-bold text-right ${
                      item.score.includes("買い替え") ? "text-orange-600" : "text-green-600"
                    }`}>
                      {item.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※修理点数が高ければ修理、買い替え点数が高ければ買い替えを検討してください。
          </p>
        </section>

        {/* Cost Comparison */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">10年間のコスト比較（試算例）</h2>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-3">修理して継続使用（10年落ちの機種）</h3>
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">修理費用</td>
                      <td className="py-2 text-right font-bold">40,000円</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">年間電気代（旧機種）× 5年</td>
                      <td className="py-2 text-right font-bold">150,000円</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">追加修理（想定）</td>
                      <td className="py-2 text-right font-bold">30,000円</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-2 font-bold text-red-700">合計（5年）</td>
                      <td className="py-2 text-right font-bold text-red-700">220,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3">新品に買い替え（省エネ機種）</h3>
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">新品購入費</td>
                      <td className="py-2 text-right font-bold">100,000円</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">年間電気代（新機種）× 5年</td>
                      <td className="py-2 text-right font-bold">100,000円</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">追加修理（想定）</td>
                      <td className="py-2 text-right font-bold">0円</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-2 font-bold text-green-700">合計（5年）</td>
                      <td className="py-2 text-right font-bold text-green-700">200,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※上記はあくまでも試算例です。電気代・修理費用・使用環境によって大きく異なります。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">まずは専門業者に相談してみよう</h2>
          <p className="text-sky-100 text-sm mb-6">修理か買い替えか迷ったら、プロの診断を受けることが一番確実です。多くの業者が無料で診断してくれます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/cost/repair-price"
              className="bg-white text-sky-700 font-bold px-8 py-3 rounded-xl hover:bg-sky-50 transition-colors"
            >
              修理費用の相場を確認
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
