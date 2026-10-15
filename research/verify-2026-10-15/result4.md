# Fact-check batch4 (2026-10-15)

Method: official pages fetched with curl on 2026-10-15 and converted to text. Only official company pages were used. All pages returned HTTP 200 (no bot blocks). Bears prices are loaded by JS from the official API `https://www.happy-bears.com/api/v1/houseclean/plans/aircon`, which the official page renders with the suffix "（税込）".

Verdicts: OK / WRONG / UNVERIFIABLE.

---

## 22. seifu-ac (エアコンクリーニング清風)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 13,200円〜(エアコンクリーニング) | OK | 「家庭用 壁掛け スタンダードタイプ 13,200円」「価格は全て「税込」表記です。」 | https://seifu-ac.jp/menu/pricelist.html | - |
| responseTime | 要予約(平日9-18時) | OK | 「受付 月〜金 9:00〜18:00（土日祝休）」 (Separately: 「サービス実施は年末年始を除き無休で承ります。」) | https://seifu-ac.jp/ | - |
| coverage | 関東・関西・東海の主要都市圏 | OK | 「関東・関西・東海エリア対応」; area page lists Tokyo 23 wards, Yokohama, Kawasaki, parts of Chiba/Saitama, Osaka, Hyogo, Kyoto, Nara, Nagoya area and Hamamatsu area. 「営業所の近隣エリアに絞ってご訪問」 | https://seifu-ac.jp/sv/area/ | - |
| features[0] | クリーニング専門店 | OK | 「エアコンクリーニング専門店」 | https://seifu-ac.jp/ | - |
| features[1] | 全機種対応 | WRONG | 「お掃除機能付き ほぼ全機種対応」「※設置状況により一定の条件がございます。」 | https://seifu-ac.jp/ | ほぼ全機種対応 |
| features[2] | 機種一律料金 | WRONG | Wall-mounted pricing depends on type: 「スタンダードタイプ 13,200円」「フィルターお掃除機能付き 18,700円」. Only ceiling-embedded is 「全てのタイプ一律 26,400円」. | https://seifu-ac.jp/menu/pricelist.html | 税込・定額の明確な料金 |
| features[3] | 追加料金なし(公式明記) | OK | 「すべて税込・定額の明確な料金設定。汚れの状況や作業時間による追加料金はありません。」 (Note: 駐車料金 up to 2,000円 is charged at cost if no parking is available.) | https://seifu-ac.jp/menu/pricelist.html | - |
| features[4] | 年間3万台実績 | OK | 「年間実績3万台」 | https://seifu-ac.jp/ | - |

---

## 23. r-cleaning (アールクリーニング)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 9,800円〜(エアコンクリーニング) | WRONG | 9,800円 is excl. tax: 「9,800円(税込 10,780円)/台」. It is also a limited-time price, 「10月20日までの受付なら 今だけ特別価格」, and the regular price is 「通常価格 19,350円(税込)」. | https://r-cleaning.com/air-conditioner/ | 10,780円〜(エアコンクリーニング) ※10/20までの特別価格・通常19,350円 |
| responseTime | 要予約(毎日9-18時) | OK | 「毎日9時～18時 電話受付中」; company page: 「営業時間 9:00～18:00（年中無休）」 | https://r-cleaning.com/ , https://r-cleaning.com/corp/ | - |
| coverage | 東京・埼玉・神奈川・千葉 | OK | 「対応エリア 東京都 埼玉県 神奈川県 千葉県」 (listed municipalities only; out-of-area 「出張料金（3,000円～）で承ります」) | https://r-cleaning.com/air-conditioner/ | - |
| features[0] | クリーニング専門 | UNVERIFIABLE | The official site never says "専門". It also offers 「不用品回収」 and 「害虫・害獣駆除」. | https://r-cleaning.com/ | エアコン・ハウスクリーニング |
| features[1] | 首都圏対応 | OK | Service area is the four prefectures 東京都/埼玉県/神奈川県/千葉県 | https://r-cleaning.com/air-conditioner/ | - |
| features[2] | 独自洗剤＋高圧洗浄 | OK | 「独自洗剤と高圧洗浄で奥からゴッソリ除去！」 | https://r-cleaning.com/ | - |
| features[3] | 防カビ抗菌コート無料 | UNVERIFIABLE | "無料" is not stated. The work steps include the coating in the standard process: 「最後に防カビ・抗菌イオンコーティングをして組み立て」 | https://r-cleaning.com/air-conditioner/ | 防カビ・抗菌コート標準施工 |
| features[4] | 作業実績50万件 | OK | Title: 「エアコンクリーニング【作業実績50万件】」 (「50 万件 … 2026年8月31日現在」) | https://r-cleaning.com/ | - |

---

## 24. osouji-kakumei (おそうじ革命)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 9,980円〜(エアコンクリーニング) | OK | 「壁掛けタイプエアコン（お掃除機能なし） 1台目料金（税込） 9,980円」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |
| responseTime | 要予約(店舗による) | UNVERIFIABLE | No reception hours or "店舗による" wording is given. FAQ: 「年末年始を除き、土日祝日も営業しております。」「スケジュールに空きが有れば、当日にでもお伺いすることが可能です。」 | https://www.osoujikakumei.jp/support/faq/ | 要予約(土日祝も営業・空きがあれば当日可) |
| coverage | 全国47都道府県 | OK | The 「対応エリア」 list covers all 47 prefectures, 北海道 to 沖縄県; 「全国どこでもプロが対応！」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |
| features[0] | クリーニング専門 | UNVERIFIABLE | The site never calls itself "専門". It also offers 「家財整理・遺品整理・不用品整理」. | https://www.osoujikakumei.jp/aircon-cleaning/ | ハウスクリーニング全般 |
| features[1] | 全国47都道府県対応 | OK | Same as coverage; also 「全国一律価格：どの地域でも同じ料金」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |
| features[2] | 追加料金なし宣言 | OK | 「汚れ具合、出張費、駐車場代など、『追加料金絶対なし宣言！』」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |
| features[3] | エコ洗剤使用 | OK | 「子どもやペットにも安心の自社開発エコ洗剤使用。」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |
| features[4] | 損害保険・無料再作業 | OK | 「万一の故障も損害保険で完全保証！」「仕上がりに満足できない場合、エアコン再洗浄を無料で対応！」 | https://www.osoujikakumei.jp/aircon-cleaning/ | - |

---

## 25. kajitaku (カジタク)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 9,700円〜(エアコンクリーニング) | OK (caution) | 「エアコンクリーニングライト … 10,780円 → 9,700円」「今だけ1,080円OFF！」. Caveats: (1) this is a limited-time price; (2) the ライト plan does not disassemble the unit: 「本体の分解洗浄はしないプランです。」 The cheapest disassembly plan is 「エアコンクリーニング スタンダード（通常タイプ）14,300円 → 11,880円」. | https://www.kajitaku.com/house-cleaning/airconditioner/ | (optional) 9,700円〜(ライト・分解なし／分解洗浄は11,880円〜) |
| responseTime | 要予約(Web申込) | OK | 「申し込みから日次予約までこのページで簡単に完結」「Webからのお申し込みは、クレジットカードまたはAmazon Payでの事前決済」; about: 「申込から最短３日でお掃除」 | https://www.kajitaku.com/house-cleaning/airconditioner/ | - |
| coverage | 全国(沖縄・一部離島を除く) | WRONG | 「対象エリアは全国（沖縄県・一部離島を除く）」 on the aircon page applies to 宅配クリーニング, not aircon cleaning. The official area table lists aircon cleaning as available in Okinawa (e.g. 那覇市, 26 municipalities). 山形・福井・長崎・大分 do not appear at all (43 prefectures listed), and most prefectures are covered only in listed municipalities. | https://www.kajitaku.com/zipcode/area | 43都道府県の対象市区町村(郵便番号で要確認) |
| features[0] | クリーニング専門 | UNVERIFIABLE | Self-description: 「お掃除・クリーニングサービスです」. It also offers 家事代行, and "専門" is not stated. | https://www.kajitaku.com/about | お掃除・クリーニングサービス |
| features[1] | イオングループ運営 | OK | 「カジタクはイオングループが運営する…お掃除・クリーニングサービスです」 | https://www.kajitaku.com/about | - |
| features[2] | Web完結・明朗料金 | OK | 「申し込みから日次予約までこのページで簡単に完結」; 「見積もり無し 全国一律料金」「追加費用はいただきません」 | https://www.kajitaku.com/house-cleaning/airconditioner/ , https://www.kajitaku.com/about | - |
| features[3] | 3プランから選択 | OK | 「選べる3プラン ライト スタンダード プレミアム」 | https://www.kajitaku.com/house-cleaning/airconditioner/ | - |
| features[4] | 再施工保証あり | OK | 「作業完了後7日以内であれば無料でやり直し（再施工・再仕上げ）を行う「仕上がり満足保証」」 | https://www.kajitaku.com/house-cleaning/airconditioner/ | - |

---

## 26. happy-bears (ベアーズ)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 機種・台数で変動 | WRONG | There is a fixed published price: 「家庭用壁掛けエアコン 通常タイプ 14,190円（税込）」「お掃除機能付き 21,780円」. The figure is rendered on the aircon page from the official API. | https://www.happy-bears.com/houseclean/aircon/ (data: https://www.happy-bears.com/api/v1/houseclean/plans/aircon) | 14,190円〜(壁掛け通常タイプ) |
| responseTime | 要予約(9-18時・年中無休) | OK | 「受付時間 9:00〜18:00（年中無休）」; 「電話またはインターネット問合せフォームよりお申込み」 | https://www.happy-bears.com/houseclean/aircon/ | - |
| coverage | 全国(地域により範囲あり) | WRONG | 「全国5大都市を中心に」. The official ハウスクリーニング area list covers 34 prefectures; for example 青森・岩手・秋田・新潟・富山・石川・福井・岐阜・岡山・山口・徳島・香川・熊本 are not listed. The aircon page's own area widget is empty, so this list is for housecleaning overall. | https://www.happy-bears.com/houseclean/about , https://www.happy-bears.com/area | 5大都市中心(34都道府県の一部地域) |
| features[0] | クリーニング専門 | WRONG | 「家事代行のリーディングカンパニー」; 業務内容: 「家事代行サービス」「ハウスクリーニング」「キッズ＆ベビーシッターサービス」「高齢者支援サービス」 etc. | https://www.happy-bears.com/houseclean/about , https://www.happy-bears.com/company/info | 家事代行大手のハウスクリーニング |
| features[1] | 全国対応 | WRONG | 「全国5大都市を中心に年間55万件超のサービス提供実績」 (area list: 34 prefectures) | https://www.happy-bears.com/houseclean/about | 5大都市中心に対応 |
| features[2] | 研修スタッフが対応 | OK | 「徹底的に研修をされたスタッフが、…エアコン内部を分解洗浄」 | https://www.happy-bears.com/houseclean/aircon/ | - |
| features[3] | 累計250万件超 | OK | 「累計サービス250万件を超える豊富な実績」 | https://www.happy-bears.com/houseclean/aircon/ | - |
| features[4] | フォローコール・手直し保証 | OK | 「サービス後30分以内のフォローコール・手直し保証で安心をお約束します。」 | https://www.happy-bears.com/houseclean/aircon/ | - |

---

## 27. duskin-servicemaster (ダスキン サービスマスター)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 15,400円〜(壁掛けタイプ) | OK | 「■家庭用壁掛けタイプ（幅120cm未満） 標準料金 1台 15,400円（税抜14,000円）」 | https://www.duskin.jp/servicemaster/spot/sm000010/ | - |
| responseTime | 要予約(店舗による) | OK | 「※土日・祝日・その他の休業日及び夜間の作業は、お受けできない場合や標準料金に加えて追加の費用が発生する場合があります。詳細は担当店へお問い合わせください。」 | https://www.duskin.jp/servicemaster/spot/sm000010/ | - |
| coverage | 全国(約1,200店舗) | OK | 「全国1,208の店舗でどのエリアでもご対応いたします。※2025年2月末時点 ※一部対応できない地域があります。」 | https://www.duskin.jp/servicemaster/spot/sm000010/ | - |
| features[0] | クリーニング専門 | UNVERIFIABLE | Not stated as "専門". Duskin also sells and rents products and runs 家事代行・害虫獣駆除 etc. The page describes 「ダスキンのエアコンクリーニング」. | https://www.duskin.jp/servicemaster/spot/sm000010/ | ダスキンのハウスクリーニング |
| features[1] | 全国約1,200店舗 | OK | 「全国1,208の店舗」(2025年2月末時点) | https://www.duskin.jp/servicemaster/spot/sm000010/ | - |
| features[2] | 徹底分解洗浄 | OK | 「徹底的な分解洗浄で、いまよりもっと快適な空間に」「徹底分解で熱交換器までしっかり洗浄！」 | https://www.duskin.jp/servicemaster/spot/sm000010/ | - |
| features[3] | 30年以上・300万件実績 | OK (caution) | 「全国のご家庭への対応と30年以上の豊富な実績」「300万件※の実績」「※家庭用エアコンクリーニング2015年4月～2025年3月末までの実績」. The 300万件 covers 10 years, not 30. | https://www.duskin.jp/servicemaster/spot/sm000010/ | (optional) 30年以上の実績・直近10年で300万件 |
| features[4] | 大手のサポート体制 | UNVERIFIABLE | No such wording. The closest official item is the 「満足の保証制度」 (「あなたの満足を保証します」). | https://www.duskin.jp/manzoku/ | 満足の保証制度あり |
