import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "エアコン修理ナビ｜信頼できる修理業者を比較・紹介",
    template: "%s｜エアコン修理ナビ",
  },
  description: "エアコンが壊れたときに最適な修理業者が見つかるサービス。症状別の解決策、費用相場、業者ランキングを無料で提供。全国10社以上の修理業者を徹底比較。",
  keywords: "エアコン修理, エアコン修理業者, エアコン冷えない, エアコン水漏れ, エアコン異音, 修理費用",
  openGraph: {
    title: "エアコン修理ナビ｜信頼できる修理業者を比較・紹介",
    description: "エアコンが壊れたときに最適な修理業者が見つかるサービス。全国の優良業者を徹底比較。",
    type: "website",
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
