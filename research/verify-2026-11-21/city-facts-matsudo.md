# 松戸市（slug: matsudo）city-facts 証跡

- 対象: 松戸市公式サイト（www.city.matsudo.chiba.jp）のみ
- 確認日 2026年11月21日
- 方法: `curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"` で取得し、HTML をタグ除去したテキストを保存。引用は保存テキストから `grep -F` で一致を確認したもの。URL の候補探しにのみ Web 検索と市サイト内のリンクを使用。

## 保存テキスト対応表（/tmp/cf1121v/）

| ファイル | URL |
|---|---|
| matsudo-1.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/index.html |
| matsudo-2.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/hikitoriirai.html |
| matsudo-3.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/tyokusetuhannyu.html |
| matsudo-4.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/kaikae.html |
| matsudo-5.txt | https://www.city.matsudo.chiba.jp/shiminnokoe/soudan/shouhisoudan_188.html |
| matsudo-6.txt | https://www.city.matsudo.chiba.jp/kurashi/syouhiseikatu/shouhiseikatsu_c/akushitsu/20170307soudan.html |
| matsudo-7.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/syuusyuufuka.html |
| matsudo-8.txt | https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/tokuteikaden.html |
| matsudo-9.txt | https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/index.html |
| matsudo-10.txt | https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/shoene.html |
| matsudo-11.txt | https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/hojokinyosan.html |
| matsudo-12.txt | https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/shoenej.html |

（同名の .html は取得した生 HTML）

## 1. 使わなくなったエアコンの処分

結論: 市では収集・処理しない（家電リサイクル法対象品目）。市が示す処分方法は「小売店に引き取ってもらう」「自分で指定引取場所に持ち込む」「一般廃棄物処理業者に収集を依頼する」の3通り。松戸市内に指定引取場所はなく、近隣4か所が掲載されている。

### 1-a 特定家庭用機器（家電リサイクル法対象品目）とは（matsudo-8.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/tokuteikaden.html
- ページタイトル: 特定家庭用機器（家電リサイクル法対象品目）とは｜松戸市
- 更新日: 2013年11月25日
- 取得: HTTP 200
- 引用:
  - 「特定家庭用機器(家電リサイクル法対象品目)とは以下の品目のことを指し、自治体では収集や処理ができません。」（品目に「エアコン」を含む）
  - 「特定家庭用機器は次の3通りの方法で処分してください。」
  - 「買い替えやお買い求めになった小売店がわかる場合」「家電リサイクル料金と収集運搬料金を支払うことで、小売店に機器を引き取ってもらいます。」
  - 「ご自身で指定引取場所に持ち込む場合」「事前に郵便局で手続きをし、家電リサイクル料金を支払うことで、ご自身でお近くの指定引取場所に持ち込むことができます。」
  - 「一般廃棄物処理業者に収集を依頼する場合」「事前に郵便局で手続きと家電リサイクル料金の支払いを行い、収集運搬料金を支払うことで一般廃棄物業者に機器を収集してもらいます。」
  - 問い合わせ: 「環境部 廃棄物対策課 家庭ごみ相談コールセンター」「電話番号：0120-264-057」

### 1-b 家電4品目 一覧ページ（matsudo-1.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/index.html
- ページタイトル: 「家電4品目」（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）｜松戸市
- 更新日: 確認できず（ページに更新日の表示なし）
- 取得: HTTP 200
- 引用:
  - パンくず: 「市が収集しない・取扱いできないごみ」＞「「家電4品目」（エアコン、テレビ、冷蔵庫・冷凍庫、洗濯機・衣類乾燥機）」

### 1-c 指定引取場所へ直接搬入する場合（matsudo-3.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/tyokusetuhannyu.html
- ページタイトル: 買い替え以外で、ご自分で指定引取場所へ直接搬入する場合｜松戸市
- 更新日: 2024年6月29日
- 取得: HTTP 200
- 引用:
  - 「お買い求めになった小売店がわからない場合、または引越しなどでお買い求めになった小売店から離れてしまった場合は、お近くの指定引取場所へ持ち込むことが可能です。」
  - 「松戸市内には指定引取場所がありませんので,下記の指定引取場所をご利用ください。」
  - 「指定引取場所は変更になる場合があります。」
  - 掲載の指定引取場所（ページ表記のまま）:
    - 「新柏倉庫株式会社柏取扱所」「柏市十余二164」「電話：04-7128-5001」
    - 「丸全京葉物流株式会社 船橋営業所」「船橋市潮見町19の4」「電話：047-431-4880」
    - 「MDロジスフィールドサービス株式会社 市川営業所」「市川市塩浜3の12」「電話：047-395-2549」
    - 「株式会社信光物流新三郷DC」「埼玉県三郷市仁蔵194」「電話：048-954-7586」
  - リサイクル料金の目安: 「エアコン |」「900円（税抜き） |」
  - 「※表で示したリサイクル料金は一般的なものであり、外国メーカー製品等については、この限りではありません。」
  - 注記: ページ本文に「1から4が済んだら指定取引場所へ持ち込みます。」と「指定取引場所」の表記がある（原文のまま）。

### 1-d 業者に引き取りを依頼する場合（matsudo-2.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/hikitoriirai.html
- ページタイトル: 買い替え以外で家電対象品目を収集する業者に引き取りを依頼する場合｜松戸市
- 更新日: 2026年7月28日
- 取得: HTTP 200
- 引用:
  - 「郵便局での手続き→払込書・家電リサイクル券の記入→リサイクル料金の振込み→廃棄物(家電対象品目)にリサイクル券を貼る→業者へ引き渡し→収集運搬料を支払う」
  - 「松戸市一般廃棄物処理事業協同組合へ連絡し、収集運搬業者の紹介を受けてください。」
  - 「電話：0120-535-309（携帯電話からおかけの方は電話：047-312-2275）」
  - リサイクル料金の目安: 「エアコン |」「900円（税抜き）+収集運搬料 |」

### 1-e 買い替え・購入店がわかる場合（matsudo-4.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/kaderecycle/kaikae.html
- ページタイトル: 買い替え及びお買い求めになった小売店がわかる場合｜松戸市
- 更新日: 2019年11月28日
- 取得: HTTP 200
- 引用:
  - 「買い替えの場合やお買い求めになった小売店がわかる場合は小売店へご相談ください。」
  - 「特定家庭用機器を買い換える場合やお買い求めになった小売店がわかる場合は、家電リサイクル法により小売店に商品の引取義務があります。」
  - 「また、収集運搬料についても、各小売業者によって異なりますので販売店等にお問合せ下さい。」

### 1-f 参考: 市が収集しないごみ（matsudo-7.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/syoridekinaigomi/syuusyuufuka.html
- ページタイトル: 市が収集しないごみ｜松戸市
- 更新日: 2016年4月1日
- 取得: HTTP 200
- 引用（エアコン固有の記載ではなく、一般廃棄物処理業者の紹介先として）:
  - 「松戸市一般廃棄物処理事業協同組合事務局」
  - 「電話：0120－5353－09（携帯電話からおかけの方は、電話：047－312－2275）」
  - 「住所：松戸市松戸2060」
- 注記: 同じ組合のフリーダイヤルが 1-d では「0120-535-309」、このページでは「0120－5353－09」と区切り位置・ハイフンの字種が異なる（数字列は同一）。掲載時は更新日の新しい 1-d（2026年7月28日）の表記を使うのが無難。

## 2. 修理トラブルの相談先（消費生活センター）

結論: 松戸市消費生活センター。京葉ガスF松戸第2ビル5階、相談専用電話 047-365-6565、受付は月曜日から金曜日の午前8時30分から午後4時まで（祝日・年末年始を除く）。電話または来庁のみ（メール・手紙不可）。松戸市在住者が対象。

### 2-a 消費生活相談（matsudo-5.txt）
- URL: https://www.city.matsudo.chiba.jp/shiminnokoe/soudan/shouhisoudan_188.html
- ページタイトル: 消費生活相談｜松戸市
- 更新日: 2023年5月10日
- 取得: HTTP 200
- 引用:
  - 「消費生活センターでは、市民の方の商品やサービスの契約トラブルなどの消費生活に関する相談を専門の消費生活相談員が受け付け、解決のための助言などを行っています。」
  - 受付時間: 「午前8時30分から午後4時まで（来庁・電話とも）」「月曜日から金曜日(祝日・年末年始を除く)」
  - 場所: 「京葉ガスF松戸第2ビル5階『松戸市消費生活センター』」
  - 相談対象者: 「松戸市に在住している方」
  - 電話: 「電話：047-365-6565(相談専用)」
  - 「誤認識を避けるため、メールや手紙での相談はお受けしておりません。電話または来庁でのご相談をお願いします。」
  - 「事業者を指導したり、弁護士のように代理人として交渉したりはできません。」
  - 時間外: 「土曜・日曜・祝日や受付時間外の消費生活相談は、消費者ホットライン「188」をご利用ください。」
  - 所在地（ページ末尾の問い合わせ欄）: 「経済振興部 消費生活課」「千葉県松戸市小根本7番地の8 京葉ガスF松戸第2ビル5階」「電話番号：047-366-7329 FAX：047-365-9606」
- 注記: 住所「千葉県松戸市小根本7番地の8」は担当課（消費生活課）の問い合わせ欄の記載。センターの「場所」欄は建物名と階のみ。両者とも「京葉ガスF松戸第2ビル5階」で一致。047-366-7329 は消費生活課の番号で、相談は 047-365-6565。

### 2-b 補足（matsudo-6.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/syouhiseikatu/shouhiseikatsu_c/akushitsu/20170307soudan.html
- ページタイトル: 消費者トラブルに巻き込まれてしまったら「消費生活センター」に相談しましょう｜松戸市
- 更新日: 2017年3月7日
- 取得: HTTP 200
- 引用:
  - 「消費生活センター 電話047-365-6565」
  - 「受付時間 平日（年末年始を除く）8時30分から16時」
  - 「上記時間以外の相談は消費者ホットライン「188」へ」

## 3. エアコン購入の補助（令和8年度・市の制度）

結論: 確認できず。市の省エネ関連助成（住宅用省エネルギー設備等設置費補助金ほか）の令和8年度の補助対象設備にエアコンは含まれていない。以下のページを確認し、本文に「エアコン」「空調」の語はいずれも0件だった（grep で確認）。

確認したページ:

### 3-a 助成制度のご案内（matsudo-9.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/index.html
- ページタイトル: 助成制度のご案内｜松戸市
- 更新日: 確認できず（ページに更新日の表示なし）
- 取得: HTTP 200
- 引用: 掲載されている補助金は「住宅用省エネルギー設備等設置費補助金」「省エネルギー住宅普及促進事業費補助金」「事業用省エネルギー設備等導入促進事業費補助金」の3つ（と「省エネルギー設備等補助金の予算額・予算残額一覧」）。

### 3-b 住宅用省エネルギー設備等設置費補助金（matsudo-10.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/shoene.html
- ページタイトル: 住宅用省エネルギー設備等設置費補助金｜松戸市
- 更新日: 2026年7月28日
- 取得: HTTP 200
- 引用:
  - 申請期間: 「令和8年4月1日（水曜）から令和9年2月26日（金曜）まで」
  - 補助対象設備の表に載っている種類: 家庭用燃料電池システム（エネファーム）、太陽光発電システム、定置用リチウムイオン蓄電システム、窓の断熱改修、電動バイク等、電気自動車、プラグインハイブリッド自動車、燃料電池自動車、V2H充放電設備、集合住宅用充電設備、住民の合意形成のための資料、集合住宅共用部のLED照明、宅配ボックス（エアコンなし）

### 3-c 予算額・予算残額一覧（matsudo-11.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/hojokinyosan.html
- ページタイトル: 省エネルギー設備等補助金の予算額・予算残額一覧｜松戸市
- 更新日: 2026年11月18日
- 取得: HTTP 200
- 引用: 「※電気自動車（区分A）、宅配ボックス、LCCM住宅は終了しました」（一覧にエアコンの項目なし）

### 3-d 省エネルギー住宅普及促進事業費補助金（matsudo-12.txt）
- URL: https://www.city.matsudo.chiba.jp/kurashi/kankyou/tikyuuondanka/hojokin/shoenej.html
- ページタイトル: 省エネルギー住宅普及促進事業費補助金｜松戸市
- 更新日: 2026年4月23日
- 取得: HTTP 200
- 引用: 本文に「エアコン」の記載なし（住宅全体の省エネ化が対象で、エアコン単体の購入補助ではない）。

補足: Web 検索（「松戸市 エアコン 補助金 令和8年度」「松戸市 エアコン 購入 助成 熱中症 高齢者 OR 省エネ家電 買い替え」）でも、松戸市のエアコン購入補助・キャンペーン・ポイント事業のページは見つからなかった。福祉部門（高齢者向けエアコン購入助成など）のページは市サイト内検索ができず網羅していないため、「無い」とは断定しない。
