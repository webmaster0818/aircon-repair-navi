import Link from "next/link";
import companies from "@/data/companies.json";

const symptoms = [
  { iconSrc: "/images/icon-snowflake.png", label: "冷えない", href: "/symptom/not-cooling", color: "bg-sky-50 border-sky-200 hover:bg-sky-100 hover:border-sky-400", iconBg: "bg-sky-100" },
  { iconSrc: "/images/icon-water-drop.png", label: "水漏れ", href: "/symptom/water-leak", color: "bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400", iconBg: "bg-blue-100" },
  { iconSrc: "/images/icon-sound-wave.png", label: "異音がする", href: "/symptom/noise", color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-400", iconBg: "bg-yellow-100" },
  { iconSrc: "/images/icon-nose.png", label: "臭いがする", href: "/symptom/bad-smell", color: "bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-400", iconBg: "bg-green-100" },
  { iconSrc: "/images/icon-power.png", label: "動かない", href: "/symptom/not-starting", color: "bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-400", iconBg: "bg-red-100" },
  { iconSrc: "/images/icon-gas.png", label: "ガス漏れ", href: "/symptom/gas-leak", color: "bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-400", iconBg: "bg-purple-100" },
  { iconSrc: "/images/icon-remote.png", label: "リモコン不良", href: "/symptom/remote-error", color: "bg-orange-50 border-orange-200 hover:bg-orange-100 hover:border-orange-400", iconBg: "bg-orange-100" },
  { iconSrc: "/images/icon-alert.png", label: "エラーコード", href: "/symptom/error-code", color: "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-400", iconBg: "bg-gray-100" },
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
  { iconType: "speed", title: "対応スピード", desc: "緊急時は最短即日〜翌日対応の業者を選ぶ。受付時間も重要。" },
  { iconType: "area", title: "対応エリア", desc: "全国対応か地域密着型か。地方では対応可能な業者が限られることも。" },
  { iconType: "price", title: "料金の透明性", desc: "事前見積もり無料・追加料金なしの業者が安心。相場との比較を。" },
  { iconType: "reviews", title: "実績・口コミ", desc: "施工実績数や口コミ評価を確認。資格保有者が在籍かも確認を。" },
  { iconType: "guarantee", title: "保証・アフターケア", desc: "修理後の保証期間や再修理対応があるか確認しておく。" },
];

const faqs = [
  {
    q: "エアコン修理の費用相場はどのくらいですか？",
    a: "症状によって大きく異なります。ガス補充で2〜5万円、水漏れで3千〜3万円程度が目安です。コンプレッサー交換など大型修理は8〜20万円になることもあります。まず無料見積もりを依頼することをお勧めします。",
  },
  {
    q: "修理業者を選ぶ際のポイントは？",
    a: "対応スピード 料金の透明性 有資格者の在籍 口コミ・実績 保証内容の5つを確認しましょう。複数業者から見積もりを取ることで相場感がわかります。",
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

      {/* Hero - Full width with background image */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Background image */}
        <img
          src="/images/hero-final.png"
          alt="エアコン修理"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />
        {/* Sky blue gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.82) 0%, rgba(2,132,199,0.75) 50%, rgba(3,105,161,0.65) 100%)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center text-white" style={{ zIndex: 2 }}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>全国10社以上を徹底比較・PRを含みます</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
            エアコンが壊れた？<br />
            <span className="text-yellow-300">最適な修理業者</span>が見つかる。
          </h1>
          <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto drop-shadow">
            症状から業者を探せる。費用相場も一目でわかる。<br />
            信頼できるエアコン修理業者を比較してご紹介します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/symptom/not-cooling"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/50 hover:border-white/80 hover:-translate-y-0.5"
            >
              症状から探す
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>無料見積もり</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><span>最短即日対応</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>修理保証あり</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><span>24時間365日</span>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Diagnosis */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">SYMPTOM SEARCH</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">症状から探す</h2>
          <p className="text-gray-500">あてはまる症状を選んでください</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {symptoms.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 ${s.color}`}
            >
              <span className={`w-14 h-14 flex items-center justify-center rounded-full ${s.iconBg}`}><img src={s.iconSrc} alt="" className="w-8 h-8 inline-block" /></span>
              <span className="font-bold text-sm text-slate-800">{s.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP3 Ranking */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">PR</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">エアコン修理業者 TOP3</h2>
            <p className="text-gray-500 mt-2">編集部が厳選した信頼できる業者</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {top3.map((company, index) => (
              <div
                key={company.slug}
                className={`relative rounded-2xl p-6 border-2 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
                  index === 0
                    ? "border-yellow-400 bg-gradient-to-b from-yellow-50 to-white"
                    : index === 1
                    ? "border-gray-300 bg-gradient-to-b from-gray-50 to-white"
                    : "border-orange-300 bg-gradient-to-b from-orange-50 to-white"
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    人気No.1
                  </div>
                )}
                <div className="absolute -top-5 left-6">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-lg font-black shadow-lg text-white ${
                    index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-orange-500"
                  }`}>
                    {index + 1}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{company.tagline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {company.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">{f}</span>
                    ))}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-1">
                    <p className="text-xs text-gray-600"><span className="font-bold text-slate-700">費用目安:</span> {company.avgCost}</p>
                    <p className="text-xs text-gray-600"><span className="font-bold text-slate-700">対応速度:</span> {company.responseTime}</p>
                  </div>
                  <Link
                    href={`/company/${company.slug}`}
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-all shadow hover:shadow-md ${
                      index === 0
                        ? "bg-yellow-500 hover:bg-yellow-400 text-white"
                        : "bg-sky-500 hover:bg-sky-600 text-white"
                    }`}
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ranking" className="inline-flex items-center gap-2 text-sky-600 font-bold hover:underline text-sm bg-sky-50 px-6 py-3 rounded-full hover:bg-sky-100 transition-colors">
              全10社のランキングを見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Overview */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">COST GUIDE</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">修理費用の目安</h2>
          <p className="text-gray-500">症状別の修理費用相場一覧</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold">症状・修理内容</th>
                <th className="px-6 py-4 text-right text-sm font-bold">費用目安</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {costTable.map((row, i) => (
                <tr key={row.symptom} className={`transition-colors hover:bg-sky-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  <td className="px-6 py-4 text-sm text-slate-700">{row.symptom}</td>
                  <td className="px-6 py-4 text-sm font-bold text-sky-600 text-right">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">※費用はあくまで目安です。実際の費用は症状・機種・業者によって異なります。</p>
        <div className="text-center mt-4">
          <Link href="/cost/repair-price" className="text-sky-600 font-bold hover:underline text-sm">
            詳しい費用相場を見る →
          </Link>
        </div>
      </section>

      {/* All Companies Comparison */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">PR</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">10社 一括比較</h2>
          </div>

          {/* Mobile: Card layout */}
          <div className="md:hidden space-y-3">
            {companies.map((c) => (
              <div key={c.slug} className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-sky-500">#{c.rank}</span>
                    <span className="font-bold text-slate-900">{c.name}</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{c.coverage}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{c.tagline}</p>
                <div className="flex gap-4 text-xs text-gray-700 mb-3 bg-slate-50 rounded-lg p-2">
                  <span><strong>費用:</strong> {c.avgCost}</span>
                  <span><strong>速度:</strong> {c.responseTime}</span>
                </div>
                <Link
                  href={`/company/${c.slug}`}
                  className="block text-center bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  詳細を見る →
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow-md border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">順位</th>
                  <th className="px-4 py-4 text-left">業者名</th>
                  <th className="px-4 py-4 text-left">特徴</th>
                  <th className="px-4 py-4 text-left">費用目安</th>
                  <th className="px-4 py-4 text-left">対応速度</th>
                  <th className="px-4 py-4 text-left">エリア</th>
                  <th className="px-4 py-4 text-center">詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {companies.map((c, i) => (
                  <tr key={c.slug} className={`transition-colors hover:bg-sky-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-4 py-3">
                      <span className="font-black text-sky-600">#{c.rank}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-slate-800">{c.name}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 max-w-xs">{c.tagline}</td>
                    <td className="px-4 py-3 font-bold text-sky-600">{c.avgCost}</td>
                    <td className="px-4 py-3 text-green-600 font-medium">{c.responseTime}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{c.coverage}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Link
                        href={`/company/${c.slug}`}
                        className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow"
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
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">GUIDE</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">優良業者の選び方 5つのポイント</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {choosingPoints.map((p, i) => (
            <div key={p.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center hover:-translate-y-1">
              <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-3">
                {p.iconType === "speed" && <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>}
                {p.iconType === "area" && <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>}
                {p.iconType === "price" && <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9"/><text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11" fontWeight="bold">¥</text></svg>}
                {p.iconType === "reviews" && <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                {p.iconType === "guarantee" && <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>}
              </div>
              <div className="text-xs text-sky-500 font-bold mb-1">POINT {i + 1}</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-bold text-slate-900 hover:bg-sky-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-black">Q</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 bg-sky-50/50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-black">A</span>
                    <span>{faq.a}</span>
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white" style={{ zIndex: 1 }}>
          <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">エアコンのトラブル、今すぐ解決！</h2>
          <p className="text-sky-200 mb-8 text-lg">24時間365日対応の業者多数。まずは無料見積もりから。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              業者ランキングを見る
            </Link>
            <Link
              href="/ranking/fast"
              className="bg-white text-sky-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-sky-50 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              即日対応業者を探す
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
