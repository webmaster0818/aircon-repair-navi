import { SHOT_SLUGS } from "@/data/shots";

export function hasShot(slug: string) {
  return SHOT_SLUGS.includes(slug);
}

/**
 * 掲載業者の公式サイトのスクリーンショット（2026-10-04 施主指示で追加）。
 * 画像は public/ss/{slug}.jpg。撮影できなかった業者は何も出さない。
 * 撮影日は data/shots.ts のSHOT_DATEで一元管理する。
 */
export default function SiteShot({
  slug,
  name,
  className = "",
  caption = true,
}: {
  slug: string;
  name: string;
  className?: string;
  caption?: boolean;
}) {
  if (!hasShot(slug)) return null;
  return (
    <figure className={className}>
      <div className="ac-shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/ss/${slug}.jpg`}
          alt={`${name}の公式サイト`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] object-cover object-top"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-[11px] text-[var(--color-ink-3)]">
          {name} 公式サイトより（2026年10月4日 当サイト撮影）
        </figcaption>
      )}
    </figure>
  );
}
