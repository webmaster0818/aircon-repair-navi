import Link from "next/link";

const footerLinks: { category: string; links: { href: string; label: string }[] }[] = [
  {
    category: "サイト情報",
    links: [
      { href: "/terms", label: "利用規約" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/content-policy", label: "記事の制作ポリシー" },
    ],
  },
  {
    category: "業者ランキング",
    links: [
      { href: "/ranking", label: "総合ランキング" },
      { href: "/ranking/cheap", label: "安い業者ランキング" },
      { href: "/ranking/fast", label: "即日対応ランキング" },
    ],
  },
  {
    category: "症状から探す",
    links: [
      { href: "/symptom/not-cooling", label: "冷えない" },
      { href: "/symptom/water-leak", label: "水漏れ" },
      { href: "/symptom/noise", label: "異音がする" },
      { href: "/symptom/bad-smell", label: "臭いがする" },
      { href: "/symptom/not-starting", label: "動かない" },
      { href: "/symptom/gas-leak", label: "ガス漏れ" },
      { href: "/symptom/remote-error", label: "リモコン不良" },
      { href: "/symptom/error-code", label: "エラーコード" },
    ],
  },
  {
    category: "費用・比較",
    links: [
      { href: "/cost/repair-price", label: "修理費用の相場" },
      { href: "/cost/replace-vs-repair", label: "修理 vs 買い替え" },
    ],
  },
  {
    category: "業者レビュー",
    links: [
      { href: "/company/aircon-trouble-center", label: "エアコントラブルセンター" },
      { href: "/company/take-service", label: "テイクサービス" },
      { href: "/company/denki-koujiya", label: "電気の工事屋さん" },
      { href: "/company/life-kyukyusha", label: "ライフ救急車" },
      { href: "/company/seikatsu110", label: "生活110番" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerLinks.map(({ category, links }) => (
            <div key={category}>
              <h3 className="text-white font-bold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-sky-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <Link href="/" className="flex items-center gap-2 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.44-1.799-1.442-2.798L4.2 15.3"/></svg>
                <span className="font-bold text-white">エアコン修理ナビ</span>
              </Link>
              <p className="mt-2 text-xs text-gray-500 max-w-md">
                当サイトはエアコン修理業者の比較・紹介を行うサイトです。一部記事にはPR（広告）を含みます。
                掲載情報は2024年時点のものです。最新情報は各業者サイトをご確認ください。
              </p>
            </div>
            <div className="text-xs text-gray-500">
              <p>© 2024 エアコン修理ナビ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
