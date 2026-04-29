import Link from "next/link";
import companies from "@/data/companies.json";

const symptoms = [
  { icon: "🥵", label: "冷えない", href: "/symptom/not-cooling", color: "bg-sky-50 border-sky-200 hover:bg-sky-100" },
  { icon: "💧", label: "水漏れ", href: "/symptom/water-leak", color: "bg-blue-50 border-blue-200 hover:bg-blue-100" },
  { icon: "🔊", label: "異音がする", href: "/symptom/noise", color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100" },
  { icon: "👃", label: "臭いがする", href: "/symptom/bad-smell", color: "bg-green-50 border-green-200 hover:bg-green-100" },
  { icon: "❌", label: "動かない", href: "/symptom/not-starting", color: "bg-red-50 border-red-200 hover:bg-red-100" },
  { icon: "💨", label: "ガス漏れ", href: "/symptom/gas-leak", color: "bg-purple-50 border-purple-200 hover:bg-purple-100" },
  { icon: "📱", label: "リモコン不良", href: "/symptom/remote-error", color: "bg-orange-50 border-orange-200 hover:bg-orange-100" },
  { icon: "⚠️", label: "エラーコード", href: "/symptom/error-code", color: "bg-gray-50 border-gray-200 hover:bg-gray-100" },
];

const costTable = [
  { symptom: "ガス補充（冷えない）", range: "20,000〜50,000円" },
  { symptom: "水漏れ修理", range: "3,000〜30,000円" },
  { symptom: "異音修理（ファン系）", range: "8,000〜40,000円" },
  { symptom: "基板交換", range: "30,000〜100,000円" },
  { symptom: "コンプレッサー交換", range: "80,000〜200,000円" },
  { symptom: "リモコン交換", range: "2,000〜10,000円" },
];

const choosingPoints = [
  { icon: "⏱️", title: "対応スピード", desc: "緊急時は最短即日〜翌日対応の業者を選ぶ。受付時間も重要。" },
  { icon: "📍", title: "対応エリア", desc: "全国対応か地域密着型か。地方では対応可能な業者が限られることも。" },
  { icon: "💴", title: "料金の透明性", desc: "事前見積もり無料・追加料金なしの業者が安心。相場との比較を。" },
  { icon: "⭐", title: "実績・口コミ", desc: "施工実績数や口コミ評価を確認。資格保有者が在籍かも確認を。" },
  { icon: "🔧", title: "保証・アフターケア", desc: "修理後の保証期間や再修理対応があるか確認しておく。" },
];

const faqs = [
  {
    q: "エアコン修理の費用相場はどのくらいですか？",
    a: "症状によって大きく異なります。ガス補充で2〜5万円、水漏れで3千〜3万円程度が目安です。コンプレッサー交換など大型修理は8〜20万円になることもあります。まず無料見積もりを依頼することをお勧めします。",
  },
  {
    q: "修理業者を選ぶ際のポイントは？",
    a: "①対応スピード ②料金の透明性 ③有資格者の在籍 ④口コミ・実績 ⑤保証内容の5つを確認しましょう。複数業者から見積もりを取ることで相場感がわかります。",
  },
  {
    q: "エアコン修理と買い替えどちらが得ですか？",
    a: "修理費用が新品価格の50%以上になる場合や、使用年数が10年以上の場合は買い替えが経済的なことが多いです。省エネ性能の向上により、新しいエアコンは電気代が大幅に節約できます。",
  },
  {
    q: "緊急時に最も早く対応してくれる業者は？",
    a: "テイクサービスは最短5分でスタッフ手配が可能で、緊急時に特に頼りになります。エアコントラブルセンターも24時間365日対応で即日対応できます。",
  },
];

export default function HomePage() {
  const top3 = companies.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
            <span>❄️</span>
            <span>全国10社以上を徹底比較・PRを含みます</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            エアコンが壊れた？<br />
            <span className="text-yellow-300">最適な修理業者</span>が見つかる。
          </h1>
          <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            症状から業者を探せる。費用相場も一目でわかる。<br />
            信頼できるエアコン修理業者を比較してご紹介します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/symptom/not-cooling"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors border border-white/40"
            >
              症状から探す
            </Link>
          </div>
        </div>
      </section>

      {/* Symptom Diagnosis */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">症状から探す</h2>
          <p className="text-gray-600">あてはまる症状を選んでください</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {symptoms.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${s.color}`}
            >
              <span className="text-3xl">{s.icon}</span>
              <span className="font-bold text-sm text-slate-800">{s.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP3 Ranking */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">PR</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">エアコン修理業者 TOP3</h2>
            <p className="text-gray-600 mt-2">編集部が厳選した信頼できる業者</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {top3.map((company, index) => (
              <div
                key={company.slug}
                className={`relative rounded-2xl p-6 border-2 ${
                  index === 0
                    ? "border-yellow-400 bg-yellow-50"
                    : index === 1
                    ? "border-gray-300 bg-gray-50"
                    : "border-orange-300 bg-orange-50"
                }`}
              >
                <div className="absolute -top-4 left-6">
                  <span className={`text-2xl font-black px-3 py-1 rounded-full text-white ${
                    index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-500" : "bg-orange-500"
                  }`}>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{company.tagline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {company.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-700 mb-4">
                    <p><strong>費用目安:</strong> {company.avgCost}</p>
                    <p><strong>対応速度:</strong> {company.responseTime}</p>
                  </div>
                  <Link
                    href={`/company/${company.slug}`}
                    className="block text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/ranking" className="inline-flex items-center gap-2 text-sky-600 font-bold hover:underline">
              全10社のランキングを見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Overview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">修理費用の目安</h2>
          <p className="text-gray-600">症状別の修理費用相場一覧</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold">症状・修理内容</th>
                <th className="px-6 py-3 text-right text-sm font-bold">費用目安</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {costTable.map((row, i) => (
                <tr key={row.symptom} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-3 text-sm text-slate-700">{row.symptom}</td>
                  <td className="px-6 py-3 text-sm font-bold text-sky-700 text-right">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">※費用はあくまで目安です。実際の費用は症状・機種・業者によって異なります。</p>
        <div className="text-center mt-4">
          <Link href="/cost/repair-price" className="text-sky-600 font-bold hover:underline text-sm">
            詳しい費用相場を見る →
          </Link>
        </div>
      </section>

      {/* All Companies Comparison */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">PR</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">10社 一括比較</h2>
          </div>

          {/* Mobile: Card layout */}
          <div className="md:hidden space-y-4">
            {companies.map((c) => (
              <div key={c.slug} className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-sky-500">#{c.rank}</span>
                    <span className="font-bold text-slate-900">{c.name}</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{c.coverage}</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{c.tagline}</p>
                <div className="flex gap-4 text-xs text-gray-700 mb-3">
                  <span><strong>費用:</strong> {c.avgCost}</span>
                  <span><strong>速度:</strong> {c.responseTime}</span>
                </div>
                <Link
                  href={`/company/${c.slug}`}
                  className="block text-center bg-sky-500 text-white text-xs font-bold py-2 rounded-lg"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">順位</th>
                  <th className="px-4 py-3 text-left">業者名</th>
                  <th className="px-4 py-3 text-left">特徴</th>
                  <th className="px-4 py-3 text-left">費用目安</th>
                  <th className="px-4 py-3 text-left">対応速度</th>
                  <th className="px-4 py-3 text-left">エリア</th>
                  <th className="px-4 py-3 text-center">詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {companies.map((c, i) => (
                  <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3">
                      <span className="font-black text-sky-600">#{c.rank}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-slate-800">{c.name}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs">{c.tagline}</td>
                    <td className="px-4 py-3 font-bold text-sky-700">{c.avgCost}</td>
                    <td className="px-4 py-3 text-green-700">{c.responseTime}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{c.coverage}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link
                        href={`/company/${c.slug}`}
                        className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        詳細
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">優良業者の選び方 5つのポイント</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {choosingPoints.map((p, i) => (
            <div key={p.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="text-xs text-sky-600 font-bold mb-1">POINT {i + 1}</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">よくある質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-bold text-slate-900 hover:bg-sky-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-sky-500 font-black">Q.</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="text-green-600 font-black mr-2">A.</span>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">エアコンのトラブル、今すぐ解決！</h2>
          <p className="text-sky-100 mb-8">24時間365日対応の業者多数。まずは無料見積もりから。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/ranking/fast"
              className="bg-white text-sky-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-sky-50 transition-colors"
            >
              即日対応業者を探す
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
