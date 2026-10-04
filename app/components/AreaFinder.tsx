import Link from "next/link";
import { PREFS, CITIES } from "@/data/areas-def";
import { REGIONS, PREF_NAME_EXTRA } from "@/data/regions";

const prefName = (slug: string) =>
  PREFS.find((p) => p.slug === slug)?.name ?? PREF_NAME_EXTRA[slug] ?? slug;

/**
 * TOPのエリア導線（2026-10-04 施主指示で新設）。
 * 地方 → 都道府県 → その県の主要市、の3段をアコーディオンなしで一覧表示する。
 * 静的書き出し（output:export）のためJSは使わず、details/summaryで開閉する。
 */
export default function AreaFinder() {
  const citiesOf = (prefSlug: string) => CITIES.filter((c) => c.prefSlug === prefSlug);

  return (
    <section id="area" className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="ac-eyebrow">AREA SEARCH</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">エリアから探す</h2>
          <p className="text-[var(--color-ink-2)] text-sm">
            47都道府県・191エリアの修理費用の目安と、その地域で使える業者をまとめています
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 items-start">
          {REGIONS.map((region) => (
            <details
              key={region.key}
              className="ac-card overflow-hidden group"
              open={region.key === "kanto" || region.key === "kinki"}
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-5 py-4 bg-[var(--color-brand-wash)] border-b border-[var(--color-line)]">
                <span className="font-bold text-[var(--color-brand)]">{region.name}</span>
                <span className="flex items-center gap-2 text-xs text-[var(--color-ink-2)]">
                  {region.prefs.length}県
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>

              <div className="p-4 space-y-3">
                {region.prefs.map((slug) => {
                  const cities = citiesOf(slug);
                  return (
                    <div key={slug} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <Link
                        href={`/area/${slug}/`}
                        className="inline-flex items-center rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-bold text-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] hover:border-[var(--color-brand)] transition-colors"
                      >
                        {prefName(slug)}
                      </Link>
                      {cities.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/area/${c.slug}/`}
                          className="text-xs text-[var(--color-ink-2)] underline decoration-[var(--color-line-strong)] underline-offset-4 hover:text-[var(--color-brand)] hover:decoration-[var(--color-brand)]"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
