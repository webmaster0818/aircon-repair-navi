import { getAffiliate } from "@/lib/affiliates";

interface Props {
  slug: string;
  /** ボタンに付与する追加クラス（レイアウト調整用） */
  className?: string;
  /** ボタン文言（省略時は「公式サイトへ（PR）」） */
  label?: string;
}

/**
 * コンパクトな「公式サイトへ（PR）」ボタン。
 * A8のテキストリンク(textHref)を使用し、直後に1x1トラッキングgifを描画する。
 * slugがアフィリマップに無い場合は何も描画しない（null）。
 */
export default function AffiliateOfficialButton({ slug, className, label }: Props) {
  const a = getAffiliate(slug);
  if (!a) return null;

  return (
    <>
      <a
        href={a.textHref}
        target="_blank"
        rel="sponsored nofollow"
        className={
          className ??
          "flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
        }
      >
        {label ?? "公式サイトへ（PR）"}
      </a>
      <img
        width={1}
        height={1}
        src={a.textGif}
        alt=""
        style={{ display: "none" }}
      />
    </>
  );
}
