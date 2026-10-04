// 地方区分（TOPのエリア導線用）。prefSlugはareas-def.tsのPREFSと一致させる。
// 大阪府だけは既存の個別ページ /area/osaka/ が担当する。

export type Region = { key: string; name: string; prefs: string[] };

export const REGIONS: Region[] = [
  { key: "hokkaido-tohoku", name: "北海道・東北", prefs: ["hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima"] },
  { key: "kanto", name: "関東", prefs: ["ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa"] },
  { key: "hokuriku-koshinetsu", name: "北陸・甲信越", prefs: ["niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano"] },
  { key: "tokai", name: "東海", prefs: ["gifu", "shizuoka", "aichi", "mie"] },
  { key: "kinki", name: "近畿", prefs: ["shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama"] },
  { key: "chugoku", name: "中国", prefs: ["tottori", "shimane", "okayama", "hiroshima", "yamaguchi"] },
  { key: "shikoku", name: "四国", prefs: ["tokushima", "kagawa", "ehime", "kochi"] },
  { key: "kyushu-okinawa", name: "九州・沖縄", prefs: ["fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"] },
];

// 大阪府はPREFSに含まれないため（既存ページが担当）、表示名をここで補う
export const PREF_NAME_EXTRA: Record<string, string> = { osaka: "大阪府" };
