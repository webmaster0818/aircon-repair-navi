import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { getAffiliate } from "@/lib/affiliates";
import { getFelmat } from "@/lib/felmat";

export const metadata: Metadata = {
  title: "エアコン修理業者ランキング【2026年8月】おすすめ27社を徹底比較",
  description: "エアコン修理業者の総合ランキング。対応スピード・料金・口コミ・実績を徹底比較。最短即日対応から安い業者まで、あなたに最適な業者が見つかります。",
};

export default function RankingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "業者ランキング", href: "/ranking" }]} />

      <section className="bg-[var(--color-brand)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/50 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">エアコン修理業者 総合ランキング</h1>
          <p className="text-[var(--color-brand-wash)] text-sm md:text-base">
            編集部が各社公式サイトを確認して比較した27社。公式サイトの画面は当サイトで撮影したものです
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/ranking/fast" className="ac-btn bg-white text-[var(--color-brand)] border-white hover:bg-[var(--color-brand-wash)] text-sm">
              即日対応ランキング
            </Link>
            <Link href="/ranking/cheap" className="ac-btn bg-transparent text-white border-white/60 hover:bg-white/10 text-sm">
              安い業者ランキング
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-5">
          {companies.map((c) => (
            <div key={c.slug} className="ac-card overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-[var(--color-brand-wash)] border-b border-[var(--color-line)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--color-brand)] text-white text-sm font-bold shrink-0">
                  {c.rank}
                </span>
                <h2 className="text-lg font-bold">{c.name}</h2>
              </div>

              <div className="p-5 md:flex md:gap-5">
                <SiteShot slug={c.slug} name={c.name} className="md:w-[280px] shrink-0 mb-4 md:mb-0" />

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--color-ink-2)] leading-[2] mb-4">{c.description}</p>

                  <dl className="grid grid-cols-3 border border-[var(--color-line)] rounded-lg overflow-hidden text-center mb-4">
                    {([["費用目安", c.avgCost], ["対応速度", c.responseTime], ["対応エリア", c.coverage]] as const).map(([k, v], i) => (
                      <div key={k} className={`px-2 py-3 ${i < 2 ? "border-r border-[var(--color-line)]" : ""}`}>
                        <dt className="text-[11px] text-[var(--color-ink-3)] mb-0.5">{k}</dt>
                        <dd className="font-bold text-sm text-[var(--color-brand)] leading-snug">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.features.map((f) => (
                      <span key={f} className="text-[11px] border border-[var(--color-line-strong)] text-[var(--color-brand)] px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link href={`/company/${c.slug}`} className="ac-btn ac-btn-outline flex-1 text-sm">
                      詳細を見る
                    </Link>
                    {getAffiliate(c.slug) ? (
                      <AffiliateOfficialButton slug={c.slug} className="ac-btn ac-btn-cta flex-1 text-sm" />
                    ) : getFelmat(c.slug) ? (
                      <FelmatOfficialButton slug={c.slug} className="ac-btn ac-btn-cta flex-1 text-sm" />
                    ) : (
                      <a
                        href={c.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="ac-btn ac-btn-cta flex-1 text-sm"
                      >
                        公式サイトへ（PR）
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 夜間・24時間受付で選ぶ（2026-07-04・夏の熱帯夜対策） */}
        <section className="mt-12 bg-sky-50 border border-sky-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">夜間・24時間受付で選ぶ（熱帯夜の故障に）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            7〜8月の夜間にエアコンが止まると熱中症のリスクに直結します。当サイト掲載業者のうち、<strong>24時間受付を公称している業者</strong>は次のとおりです（受付=相談・予約の受付時間。実際の訪問時間帯は業者・地域・混雑状況で異なるため、電話時に到着目安をご確認ください）。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-4">
            {companies.filter((c) => (c.features || []).some((f) => String(f).includes("24時間"))).map((c) => (
              <li key={c.slug} className="flex items-center justify-between gap-3 bg-white rounded-lg px-4 py-2.5 border border-gray-100">
                <span><Link href={`/company/${c.slug}`} className="font-bold text-sky-700 hover:underline">{c.name}</Link><span className="text-xs text-gray-500 ml-2">{c.responseTime}</span></span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500">※「24時間」は各社公式の受付に関する公称です。深夜帯は割増料金の業者もあるため、料金条件もあわせてご確認ください。</p>
        </section>

        {/* Related Links */}
        <div className="mt-6 bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm">
          <Link href="/cost/price-index/" className="font-bold text-sky-700 hover:underline">27社の料金実査データ（2026年7月・出張費/見積無料/実額の一覧）→</Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/ranking/fast" className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-200 transition-colors">
            <span className="text-3xl"></span>
            <div>
              <h3 className="font-bold text-slate-900">即日対応ランキング</h3>
              <p className="text-sm text-gray-600">急ぎで修理したい方はこちら</p>
            </div>
          </Link>
          <Link href="/ranking/cheap" className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-sky-200 transition-colors">
            <span className="text-3xl"></span>
            <div>
              <h3 className="font-bold text-slate-900">安い業者ランキング</h3>
              <p className="text-sm text-gray-600">費用を抑えたい方はこちら</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
