import Link from "next/link";

const footerLinks: { category: string; links: { href: string; label: string }[] }[] = [
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <span className="text-xl">❄️</span>
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
