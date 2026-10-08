import Link from "next/link";
import { PREFS, CITIES } from "@/data/areas-def";
import { REGIONS, PREF_NAME_EXTRA } from "@/data/regions";

const prefName = (slug: string) =>
  PREFS.find((p) => p.slug === slug)?.name ?? PREF_NAME_EXTRA[slug] ?? slug;

// 東京23区の並び順（住居表示の区番号順）。この順番で出すと探している区が見つけやすい。
const WARD_ORDER = [
  "chiyoda", "chuo-ku", "minato-ku", "shinjuku", "bunkyo", "taito", "sumida", "koto",
  "shinagawa", "meguro", "ota-ku", "setagaya", "shibuya", "nakano", "suginami", "toshima",
  "kita-ku", "arakawa", "itabashi", "nerima", "adachi", "katsushika", "edogawa",
];

/**
 * TOPのエリア導線。
 * 2026-10-08: 東京都を最上段の別枠にし、23区を並べた（施主指示）。
 * 関東のブロックからは東京都を外している（上で扱うため二重に出さない）。
 * タップ領域は最小48px、1行あたりの項目数を画面幅で切り替える。
 */
export default function AreaFinder() {
  const citiesOf = (prefSlug: string) => CITIES.filter((c) => c.prefSlug === prefSlug);

  const tokyoAll = citiesOf("tokyo");
  const wards = WARD_ORDER
    .map((s) => tokyoAll.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const tamaCities = tokyoAll.filter((c) => !WARD_ORDER.includes(c.slug));

  // 関東から東京都を外す
  const regions = REGIONS.map((r) =>
    r.key === "kanto" ? { ...r, prefs: r.prefs.filter((p) => p !== "tokyo") } : r
  );

  const totalAreas = PREFS.length + CITIES.length + 1; // +1 は個別ページの大阪府

  return (
    <section id="area" className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <span className="ac-eyebrow">AREA SEARCH</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3">エリアから探す</h2>
          <p className="text-[var(--color-ink-2)] text-sm">
            47都道府県・{totalAreas}エリアの修理費用の目安と、その地域で使える業者をまとめています
          </p>
        </div>

        {/* ===== 東京都（別枠・最上段） =====
            2026-10-08: 他の地方と同じアコーディオンにした（施主指示）。
            見出しの「東京都」はリンクのまま（押すと都のページへ行く）、
            右側のシェブロンで開閉する。既定は開いた状態。 */}
        <details className="ac-card overflow-hidden mb-6 group" open>
          <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-4 md:px-5 min-h-[56px] bg-[var(--color-brand-wash)] border-b border-[var(--color-line)]">
            <Link
              href="/area/tokyo/"
              className="inline-flex items-center gap-1.5 min-h-[44px] font-bold text-[var(--color-brand)] hover:underline underline-offset-4"
            >
              東京都
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </Link>
            <span className="flex items-center gap-2 text-xs text-[var(--color-ink-2)]">
              23区・多摩地域 {tokyoAll.length}エリア
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

          <div className="p-4 md:p-5">
            <p className="text-[11px] font-bold tracking-widest text-[var(--color-ink-3)] mb-3">23区から探す</p>
            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {wards.map((w) => (
                <li key={w.slug}>
                  <Link
                    href={`/area/${w.slug}/`}
                    className="flex items-center justify-center min-h-[48px] px-2 rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] text-[13px] font-bold text-[var(--color-ink)] text-center leading-tight hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {w.name}
                  </Link>
                </li>
              ))}
            </ul>

            {tamaCities.length > 0 && (
              <>
                <p className="text-[11px] font-bold tracking-widest text-[var(--color-ink-3)] mt-6 mb-3">
                  多摩地域から探す
                </p>
                <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                  {tamaCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/area/${c.slug}/`}
                        className="flex items-center justify-center min-h-[48px] px-2 rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] text-[13px] font-bold text-[var(--color-ink)] text-center leading-tight hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] hover:text-[var(--color-brand)] transition-colors"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </details>

        {/* ===== 東京都以外の地方 ===== */}
        <div className="grid gap-3 md:grid-cols-2 items-start">
          {regions.map((region) => (
            <details
              key={region.key}
              className="ac-card overflow-hidden group"
              open={region.key === "kanto" || region.key === "kinki"}
            >
              <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-4 md:px-5 min-h-[56px] bg-[var(--color-brand-wash)] border-b border-[var(--color-line)]">
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

              <div className="divide-y divide-[var(--color-line)]">
                {region.prefs.map((slug) => {
                  const cities = citiesOf(slug);
                  return (
                    <div key={slug} className="px-4 md:px-5 py-3">
                      <Link
                        href={`/area/${slug}/`}
                        className="inline-flex items-center gap-1.5 min-h-[44px] pr-2 text-[15px] font-bold text-[var(--color-brand)] hover:underline underline-offset-4"
                      >
                        {prefName(slug)}
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </Link>
                      {cities.length > 0 && (
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                          {cities.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={`/area/${c.slug}/`}
                                className="flex items-center justify-center min-h-[44px] px-2 rounded-md border border-[var(--color-line)] text-[13px] text-[var(--color-ink-2)] text-center leading-tight hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-wash)] hover:text-[var(--color-brand)] transition-colors"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
