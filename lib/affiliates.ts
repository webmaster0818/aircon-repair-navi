// A8アフィリエイトリンク中央集約
// ※ここに定義するコード（a8mat ID・画像URL・gif URL・href）は
//   各 app/company/<slug>/page.tsx に掲載済みの実コードをそのまま転記したものです。
//   アフィリ報酬に直結するため、1文字も改変しないでください。

export interface AffiliateEntry {
  /** 300x250バナー画像のリンク先（imageHref） */
  imageHref: string;
  /** 300x250バナー画像のsrc（imageSrc） */
  imageSrc: string;
  /** バナー用トラッキングgif URL（imageGif） */
  imageGif: string;
  /** テキストリンクのリンク先（textHref） */
  textHref: string;
  /** テキストリンク文言（textLabel） */
  textLabel: string;
  /** テキストリンク用トラッキングgif URL（textGif） */
  textGif: string;
}

export const AFFILIATES: Record<string, AffiliateEntry> = {
  "take-service": {
    imageHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NKMSH",
    imageSrc: "https://www25.a8.net/svt/bgt?aid=260628928534&wid=013&eno=01&mid=s00000014894010006000&mc=1",
    imageGif: "https://www13.a8.net/0.gif?a8mat=4B66KG+8TXR2Q+36X8+1NKMSH",
    textHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M",
    textLabel: "テイクサービス公式サイトを見る",
    textGif: "https://www19.a8.net/0.gif?a8mat=4B66KG+8TXR2Q+36X8+1NJK7M",
  },
  "duskin-servicemaster": {
    imageHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+60OXD",
    imageSrc: "https://www27.a8.net/svt/bgt?aid=260628928547&wid=013&eno=01&mid=s00000023342001011000&mc=1",
    imageGif: "https://www10.a8.net/0.gif?a8mat=4B66KG+91ODXU+503W+60OXD",
    textHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+91ODXU+503W+63WO2",
    textLabel: "ダスキン サービスマスター公式サイトを見る",
    textGif: "https://www18.a8.net/0.gif?a8mat=4B66KG+91ODXU+503W+63WO2",
  },
  "r-cleaning": {
    imageHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+601S1",
    imageSrc: "https://www22.a8.net/svt/bgt?aid=260628928542&wid=013&eno=01&mid=s00000022947001008000&mc=1",
    imageGif: "https://www18.a8.net/0.gif?a8mat=4B66KG+8YP7WY+4X26+601S1",
    textHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q",
    textLabel: "アールクリーニング公式サイトを見る",
    textGif: "https://www12.a8.net/0.gif?a8mat=4B66KG+8YP7WY+4X26+61C2Q",
  },
  "seifu-ac": {
    imageHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BXYE9",
    imageSrc: "https://www24.a8.net/svt/bgt?aid=260628928539&wid=013&eno=01&mid=s00000020635002006000&mc=1",
    imageGif: "https://www11.a8.net/0.gif?a8mat=4B66KG+8WWX3M+4F7Y+BXYE9",
    textHref: "https://px.a8.net/svt/ejp?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6",
    textLabel: "エアコンクリーニング清風 公式サイトを見る",
    textGif: "https://www14.a8.net/0.gif?a8mat=4B66KG+8WWX3M+4F7Y+BX3J6",
  },
};

export function getAffiliate(slug: string): AffiliateEntry | undefined {
  return AFFILIATES[slug];
}
