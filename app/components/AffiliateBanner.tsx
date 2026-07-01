import { getAffiliate } from "@/lib/affiliates";

interface Props {
  slug: string;
  /** バナー上部に添えるクリック誘導の見出し（任意） */
  heading?: string;
  /** 見出し下の補足文（任意） */
  note?: string;
  /** 画像下のテキストリンク文言（省略時は「公式サイトで詳細を確認 →」） */
  textLinkLabel?: string;
}

/**
 * 300x250画像バナー（imageHref+imageSrc）＋その下に公式サイトへのテキストリンク（textHref）。
 * 各リンクにトラッキングgifを伴う。中央寄せ。
 * slugがアフィリマップに無い場合は何も描画しない（null）。
 */
export default function AffiliateBanner({
  slug,
  heading = "公式サイトで詳細・料金を確認する",
  note,
  textLinkLabel = "公式サイトで詳細を確認 →",
}: Props) {
  const a = getAffiliate(slug);
  if (!a) return null;

  return (
    <div className="my-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 text-center">
      <p className="text-base font-bold text-slate-800 mb-1">{heading}</p>
      {note && <p className="text-sm text-slate-500 mb-4">{note}</p>}
      <div className="flex justify-center mt-4 mb-4">
        <a href={a.imageHref} rel="sponsored nofollow" target="_blank">
          <img width={300} height={250} alt="" src={a.imageSrc} />
        </a>
        <img
          width={1}
          height={1}
          src={a.imageGif}
          alt=""
          style={{ display: "none" }}
        />
      </div>
      <a
        href={a.textHref}
        target="_blank"
        rel="sponsored nofollow"
        className="inline-block rounded-full bg-sky-600 px-7 py-3 font-bold text-white hover:bg-sky-700 transition-colors"
      >
        {textLinkLabel}
      </a>
      <img
        width={1}
        height={1}
        src={a.textGif}
        alt=""
        style={{ display: "none" }}
      />
      <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
    </div>
  );
}
