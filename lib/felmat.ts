// felmat（フェルマ）アフィリエイトリンク中央集約
// ※ html には felmat 提供の計測タグ（fmcl/fmimg/fmimp）を1文字も改変せず転記しています。
//   報酬計測に直結するため、URL・属性・空白（全角スペース含む）を絶対に変更しないでください。
//   html はテンプレートリテラルでそのまま保持し、dangerouslySetInnerHTML で verbatim 出力します。

export interface FelmatEntry {
  /** felmat 提供コードそのまま（バイト厳密一致・改変厳禁） */
  html: string;
  /** クリック計測URL（fmcl・バイト厳密一致）。コンパクトなテキストCTA用 */
  clickUrl: string;
  /** テキストCTAボタン文言 */
  label: string;
}

export const FELMAT: Record<string, FelmatEntry> = {
  // ① エアホーム（画像バナー300x250）
  "airhome-support": {
    html: `<a href="https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/M11945U.3164608W.X138222G" width="300" height="250" alt="" border="0" /></a>`,
    clickUrl: "https://t.felmat.net/fmcl?ak=M11945U.1.3164608W.X138222G",
    label: "エアホーム公式サイトを見る",
  },
  // ② エアコントラブルセンター（テキストリンク＋インプレッションpixel）
  "aircon-trouble-center": {
    html: `<a href="https://t.felmat.net/fmcl?ak=N119806.1.G1645575.X138222G" target="_blank" rel="nofollow noopener">全国2000社の加盟店　エアコン修理サービス【エアコントラブルセンター】</a><img src="https://t.felmat.net/fmimp/N119806.G1645575.X138222G" width="1" height="1" alt="" style="border:none;" />`,
    clickUrl: "https://t.felmat.net/fmcl?ak=N119806.1.G1645575.X138222G",
    label: "エアコントラブルセンター公式サイトを見る",
  },
  // ③ おそうじらぼ（画像バナー300x250）
  "osoji-labo": {
    html: `<a href="https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/A11875S.V1646036.X138222G" width="300" height="250" alt="" border="0" /></a>`,
    clickUrl: "https://t.felmat.net/fmcl?ak=A11875S.1.V1646036.X138222G",
    label: "おそうじLabo公式サイトを見る",
  },
};

export function getFelmat(slug: string): FelmatEntry | undefined {
  return FELMAT[slug];
}
