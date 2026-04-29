"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/ranking", label: "業者ランキング" },
  { href: "/symptom/not-cooling", label: "症状から探す", children: [
    { href: "/symptom/not-cooling", label: "冷えない" },
    { href: "/symptom/water-leak", label: "水漏れ" },
    { href: "/symptom/noise", label: "異音" },
    { href: "/symptom/bad-smell", label: "臭い" },
    { href: "/symptom/not-starting", label: "動かない" },
    { href: "/symptom/gas-leak", label: "ガス漏れ" },
    { href: "/symptom/remote-error", label: "リモコン不良" },
    { href: "/symptom/error-code", label: "エラーコード" },
  ]},
  { href: "/cost/repair-price", label: "修理費用" },
  { href: "/cost/replace-vs-repair", label: "修理 vs 買い替え" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.44-1.799-1.442-2.798L4.2 15.3"/></svg>
            <div>
              <span className="font-bold text-lg text-sky-500 leading-none block">エアコン修理ナビ</span>
              <span className="text-xs text-orange-500 font-medium">PRを含みます</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-sky-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/ranking"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              業者を探す
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 px-3 rounded-lg text-xs text-gray-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link
                href="/ranking"
                className="block text-center bg-orange-500 text-white text-sm font-bold py-3 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                業者を探す
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
