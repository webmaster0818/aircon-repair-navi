// アフィリ設置ページ用のCTA部品(2026-08-01・施主承認の推し強化第1弾)
// href は felmat/A8 の支給クリックURLをバイト厳密一致でそのまま渡すこと(改変禁止)。

/** モバイル追従の画面下部CTAバー(md未満のみ表示) */
export function StickyCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-orange-300 bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="block w-full rounded-full bg-orange-500 py-3 text-center text-base font-bold text-white shadow hover:bg-orange-600 transition-colors"
      >
        {label} →
      </a>
      <p className="mt-1 text-center text-[10px] text-slate-400">※PR・公式サイトに移動します</p>
    </div>
  );
}

/** セクション直後に差し込むミニCTA(口コミ直後・料金表直下用) */
export function MiniCta({ href, label, lead }: { href: string; label: string; lead: string }) {
  return (
    <div className="mt-8 rounded-xl border-2 border-orange-200 bg-orange-50 p-5 text-center">
      <p className="text-sm font-bold text-slate-700 mb-3">{lead}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="inline-block rounded-full bg-orange-500 px-8 py-3 font-bold text-white shadow hover:bg-orange-600 transition-colors"
      >
        {label} →
      </a>
      <p className="mt-2 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
    </div>
  );
}
