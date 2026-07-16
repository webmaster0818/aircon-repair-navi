import { getFelmat } from "@/lib/felmat";

interface Props {
  slug: string;
  /** バナー上部の見出し（省略時は「公式サイトで詳細・料金を確認する」） */
  heading?: string;
  /** 見出し下の補足文（任意） */
  note?: string;
}

/**
 * felmat（フェルマ）提供の計測タグ（fmcl/fmimg/fmimp）をバイト厳密一致でそのまま出力するバナー。
 * lib/felmat.ts の html 文字列を dangerouslySetInnerHTML で verbatim 描画する（改変厳禁）。
 * 見出し＋広告表記「※本リンクはプロモーション（PR）です。」を併記。中央寄せ。
 * slug が未登録の場合は何も描画しない（null）。
 */
export default function FelmatBanner({
  slug,
  heading = "公式サイトで詳細・料金を確認する",
  note,
}: Props) {
  const f = getFelmat(slug);
  if (!f) return null;

  return (
    <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
      <p className="text-base font-bold text-slate-800 mb-1">{heading}</p>
      {note && <p className="text-sm text-slate-500 mb-4">{note}</p>}
      <div
        className="flex justify-center items-center mt-4 mb-2 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: f.html }}
      />
      <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
    </div>
  );
}

/**
 * コンパクトな felmat テキストCTAボタン（ランキング等の回遊導線用）。
 * クリック計測URL（fmcl・バイト厳密一致）をそのまま href に使用する。
 * slug が未登録の場合は何も描画しない（null）。
 */
export function FelmatOfficialButton({
  slug,
  className,
  label,
}: {
  slug: string;
  className?: string;
  label?: string;
}) {
  const f = getFelmat(slug);
  if (!f) return null;

  return (
    <a
      href={f.clickUrl}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={
        className ??
        "flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
      }
    >
      {label ?? "公式サイトへ（PR）"}
    </a>
  );
}
