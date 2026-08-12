// エリア量産の定義(46都道府県+54都市)。大阪府は既存 /area/osaka/ が担当。
// 都市のprefSlugは統計データ(都道府県単位)の参照先。

export type AreaDef = {
  slug: string;
  name: string; // 表示名(例: 横浜市/東京都)
  type: "pref" | "city";
  prefSlug: string; // 統計参照先(osakaは既存ページのデータを内蔵)
  prefName: string;
};

export const PREFS: AreaDef[] = [
  ["hokkaido", "北海道"], ["aomori", "青森県"], ["iwate", "岩手県"], ["miyagi", "宮城県"],
  ["akita", "秋田県"], ["yamagata", "山形県"], ["fukushima", "福島県"], ["ibaraki", "茨城県"],
  ["tochigi", "栃木県"], ["gunma", "群馬県"], ["saitama", "埼玉県"], ["chiba", "千葉県"],
  ["tokyo", "東京都"], ["kanagawa", "神奈川県"], ["niigata", "新潟県"], ["toyama", "富山県"],
  ["ishikawa", "石川県"], ["fukui", "福井県"], ["yamanashi", "山梨県"], ["nagano", "長野県"],
  ["gifu", "岐阜県"], ["shizuoka", "静岡県"], ["aichi", "愛知県"], ["mie", "三重県"],
  ["shiga", "滋賀県"], ["kyoto", "京都府"], ["hyogo", "兵庫県"], ["nara", "奈良県"],
  ["wakayama", "和歌山県"], ["tottori", "鳥取県"], ["shimane", "島根県"], ["okayama", "岡山県"],
  ["hiroshima", "広島県"], ["yamaguchi", "山口県"], ["tokushima", "徳島県"], ["kagawa", "香川県"],
  ["ehime", "愛媛県"], ["kochi", "高知県"], ["fukuoka", "福岡県"], ["saga", "佐賀県"],
  ["nagasaki", "長崎県"], ["kumamoto", "熊本県"], ["oita", "大分県"], ["miyazaki", "宮崎県"],
  ["kagoshima", "鹿児島県"], ["okinawa", "沖縄県"],
].map(([slug, name]) => ({ slug, name, type: "pref" as const, prefSlug: slug, prefName: name }));

const CITY_LIST: [string, string, string, string][] = [
  // [slug, 市名, prefSlug, 県名]
  ["sapporo", "札幌市", "hokkaido", "北海道"],
  ["sendai", "仙台市", "miyagi", "宮城県"],
  ["saitama-city", "さいたま市", "saitama", "埼玉県"],
  ["kawaguchi", "川口市", "saitama", "埼玉県"],
  ["kawagoe", "川越市", "saitama", "埼玉県"],
  ["tokorozawa", "所沢市", "saitama", "埼玉県"],
  ["chiba-city", "千葉市", "chiba", "千葉県"],
  ["funabashi", "船橋市", "chiba", "千葉県"],
  ["kashiwa", "柏市", "chiba", "千葉県"],
  ["ichikawa", "市川市", "chiba", "千葉県"],
  ["hachioji", "八王子市", "tokyo", "東京都"],
  ["machida", "町田市", "tokyo", "東京都"],
  ["tachikawa", "立川市", "tokyo", "東京都"],
  ["yokohama", "横浜市", "kanagawa", "神奈川県"],
  ["kawasaki", "川崎市", "kanagawa", "神奈川県"],
  ["sagamihara", "相模原市", "kanagawa", "神奈川県"],
  ["utsunomiya", "宇都宮市", "tochigi", "栃木県"],
  ["maebashi", "前橋市", "gunma", "群馬県"],
  ["takasaki", "高崎市", "gunma", "群馬県"],
  ["mito", "水戸市", "ibaraki", "茨城県"],
  ["tsukuba", "つくば市", "ibaraki", "茨城県"],
  ["niigata-city", "新潟市", "niigata", "新潟県"],
  ["kanazawa", "金沢市", "ishikawa", "石川県"],
  ["toyama-city", "富山市", "toyama", "富山県"],
  ["fukui-city", "福井市", "fukui", "福井県"],
  ["nagano-city", "長野市", "nagano", "長野県"],
  ["matsumoto", "松本市", "nagano", "長野県"],
  ["gifu-city", "岐阜市", "gifu", "岐阜県"],
  ["shizuoka-city", "静岡市", "shizuoka", "静岡県"],
  ["hamamatsu", "浜松市", "shizuoka", "静岡県"],
  ["nagoya", "名古屋市", "aichi", "愛知県"],
  ["toyohashi", "豊橋市", "aichi", "愛知県"],
  ["okazaki", "岡崎市", "aichi", "愛知県"],
  ["ichinomiya", "一宮市", "aichi", "愛知県"],
  ["yokkaichi", "四日市市", "mie", "三重県"],
  ["otsu", "大津市", "shiga", "滋賀県"],
  ["kyoto-city", "京都市", "kyoto", "京都府"],
  ["kobe", "神戸市", "hyogo", "兵庫県"],
  ["himeji", "姫路市", "hyogo", "兵庫県"],
  ["amagasaki", "尼崎市", "hyogo", "兵庫県"],
  ["nishinomiya", "西宮市", "hyogo", "兵庫県"],
  ["sakai", "堺市", "osaka", "大阪府"],
  ["higashiosaka", "東大阪市", "osaka", "大阪府"],
  ["hirakata", "枚方市", "osaka", "大阪府"],
  ["toyonaka", "豊中市", "osaka", "大阪府"],
  ["suita", "吹田市", "osaka", "大阪府"],
  ["takatsuki", "高槻市", "osaka", "大阪府"],
  ["nara-city", "奈良市", "nara", "奈良県"],
  ["wakayama-city", "和歌山市", "wakayama", "和歌山県"],
  ["okayama-city", "岡山市", "okayama", "岡山県"],
  ["hiroshima-city", "広島市", "hiroshima", "広島県"],
  ["kitakyushu", "北九州市", "fukuoka", "福岡県"],
  ["fukuoka-city", "福岡市", "fukuoka", "福岡県"],
  ["kumamoto-city", "熊本市", "kumamoto", "熊本県"],
];

export const CITIES: AreaDef[] = CITY_LIST.map(([slug, name, prefSlug, prefName]) => ({
  slug, name, type: "city" as const, prefSlug, prefName,
}));

export const ALL_AREAS: AreaDef[] = [...PREFS, ...CITIES];
