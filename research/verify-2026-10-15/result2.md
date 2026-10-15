# Fact-check result: batch2 (2026-10-15)

Method: I fetched official pages with WebFetch, or with curl when WebFetch was blocked. Quotes are verbatim from those pages. Only the company's own domains or subdomains count as sources. "Platform-level" means the platform states something itself, as opposed to a single vendor listing on it.

Verdicts: OK / WRONG / UNVERIFIABLE

---

## 8. sumai-hotline (すまいのホットライン)

The aircon pages give 相場 values: https://hotlines.shop/repair-aircon/ , https://hotlines.shop/cleaning-aircon/ , https://hotlines.shop/install-aircon/

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 7,000〜40,000円 | WRONG | 「エアコン修理の相場 ガス漏れ/1台 16,000円〜19,000円 / 水漏れ/1台 11,000円〜20,000円」. Cleaning: 「壁掛け型エアコン / 1台 8,000円〜10,000円」「天井埋込型エアコン / 1台 15,000円〜25,000円」. Install: 「1台 13,000円〜17,000円」. No official figure of 40,000円 and no lower bound of 7,000円. | https://hotlines.shop/repair-aircon/ | 11,000〜20,000円 (修理相場). For cleaning: 8,000〜25,000円 |
| responseTime | 最短当日 | UNVERIFIABLE | The platform does not state a response time. Some vendor listings do, e.g. 「【最短・当日からでもOK】急なトラブル、お任せください！」 and 「最短翌日お伺い可能です」. | https://hotlines.shop/repair-aircon/ | 出店者により異なる |
| coverage | 全国主要都市 | WRONG | 「全国のエアコン修理業者を比較しやすくまとめており」. Search covers 北海道〜九州・沖縄. The phrase 「主要都市」 does not appear. | https://hotlines.shop/repair-aircon/ | 全国 |
| features: 価格比較機能 | 価格比較機能 | OK | 「料金や口コミ、評価を見比べながら、納得できるサービスを選びやすいです。」 | https://hotlines.shop/repair-aircon/ | - |
| features: 住まい全般のトラブル対応 | 住まい全般のトラブル対応 | OK | 「暮らしにまつわる200種類以上のサービスを検索予約できる」 | https://hotlines.shop/about/ | - |
| features: 全国対応 | 全国対応 | OK | 「全国のエアコン修理業者を比較しやすくまとめており」 | https://hotlines.shop/repair-aircon/ | - |
| features: 無料相談 | 無料相談 | UNVERIFIABLE | No 「無料相談」 statement. The about page only says 「サービスに関するご不明点・ご質問はお気軽にお問い合わせください。（受付時間：平日10時～18時）」 and does not say the inquiry is free. The help center (hotlines.zendesk.com) returned 403. | https://hotlines.shop/about/ | 出店者へ事前に質問可 (「出店者にお問い合わせもできる」) |
| features: 登録業者の審査あり | 登録業者の審査あり | OK | 「掲載されている店舗はすべて、運営による事前審査と本人確認を通過しています。」 | https://hotlines.shop/safety/ | - |

---

## 9. epark (EPARK)

- epark.jp is a general reservation portal and has no aircon content. Its aircon service is the official subdomain EPARKくらしのレスキュー (rescue.epark.jp). WebFetch got 403 on epark.jp, so I read it with curl.
- I recommend changing officialUrl to https://rescue.epark.jp/category/kaden/aircon

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 8,000〜45,000円 | UNVERIFIABLE | The platform states no price range. Each vendor shows its own 目安料金, e.g. 「目安料金 8,800円～」「3,300円～」「エアコンガスチャージ 19,800円(税込)～」「エアコン新規設置 38,500円(税込)～」. | https://rescue.epark.jp/category/kaden/aircon | 事業者により異なる |
| responseTime | 最短当日 | UNVERIFIABLE | Not stated at platform level. One vendor says 「エアコンのお困りごと最短即日対応！」. | https://rescue.epark.jp/category/kaden/aircon | 事業者により異なる |
| coverage | 全国主要都市 | WRONG | 「全国の水道修理やガラス修理、鍵修理、害虫駆除などの生活駆けつけサービス業者（職人さん）をご紹介するWEBサイトです。」 Search is by prefecture (北海道〜沖縄県). | https://rescue.epark.jp/ | 全国 |
| features: かけつけサービス | かけつけサービス | OK | 「生活駆けつけサービス業者（職人さん）をご紹介する」 | https://rescue.epark.jp/ | - |
| features: 全国対応 | 全国対応 | OK | Same quote (「全国の…生活駆けつけサービス業者」). | https://rescue.epark.jp/ | - |
| features: 急な修理にも対応 | 急な修理にも対応 | OK | 「緊急の場合でも電話でお問い合わせがしやすく安心。営業時間や定休日も確認できます。」 | https://rescue.epark.jp/ | - |
| features: 24時間受付 | 24時間受付 | WRONG | The platform does not claim 24h reception. Aircon vendors list their own hours, e.g. 「営業時間 9:00～20:00」; only some say 「24時間対応」. | https://rescue.epark.jp/category/kaden/aircon | 見積もり・出張・キャンセル無料の業者を検索可 (「出張費用・見積もり費用・キャンセル料無料などに対応した…エアコン屋さんをお探しできます」) |
| features: 複数サービス一括管理 | 複数サービス一括管理 | OK | 「ひとつのIDで全ジャンルのサイトをご利用できます！」 | https://epark.jp/sp/about/ | - |

---

## 10. saiyasu (最安修理.com)

- This is mainly an iPhone/smartphone repair price comparison site: 「iPhone修理比較サイト 修理代の地域別最安値を調べよう！」.
- The aircon category exists but lists **0 vendors** (「全 0 件」) as of 2026-10-15.
- I recommend reconsidering whether this site should be listed at all.

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 5,000〜25,000円 | WRONG | No aircon price exists on the site. The aircon category shows 「全 0 件」 and notes 「掲載価格(税込)には作業代が含まれていない場合があります」. | https://saiyasu-syuuri.com/devices/aircon | 掲載なし (エアコン掲載業者0件) |
| responseTime | 1〜3日 | UNVERIFIABLE | Not stated anywhere. | https://saiyasu-syuuri.com/devices/aircon | - (remove) |
| coverage | 全国 | WRONG | No aircon vendor is listed in any area (「全 0 件」). The site has area search, but it is for iPhone repair shops. | https://saiyasu-syuuri.com/devices/aircon | 掲載なし |
| features: 最安値追求 | 最安値追求 | OK | 「修理代の地域別最安値を調べよう！」 (site-wide; mainly iPhone) | https://saiyasu-syuuri.com/ | - |
| features: 料金透明性 | 料金透明性 | UNVERIFIABLE | No such claim. The page warns 「掲載価格(税込)には作業代が含まれていない場合があります」. | https://saiyasu-syuuri.com/devices/aircon | - |
| features: 全国対応 | 全国対応 | WRONG | The aircon category has 0 listings. | https://saiyasu-syuuri.com/devices/aircon | - (remove) |
| features: 修理費用比較 | 修理費用比較 | OK (no aircon data) | Page title: 「エアコンの修理価格を比較！安い業者・評価・口コミ」, but it has 0 listings. | https://saiyasu-syuuri.com/devices/aircon | - |
| features: 無料見積もり | 無料見積もり | UNVERIFIABLE | The page only says 「事前に電話でお見積もり、予約をしましょう」 and does not say the estimate is free. | https://saiyasu-syuuri.com/devices/aircon | - |

---

## 11. denki110 (電気工事110番 / DENKI110)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 7,000円〜 | WRONG | FAQ: 「作業費込みで6,600円～対応しています。」 This is for 電気がつかない trouble; no aircon-specific own price is published. | https://denki110.net/faq/ | 6,600円〜 |
| responseTime | 最短即日 | WRONG (partly) | 「※電話は即日対応、現場対応はスケジュールにより別日になる可能性があります。」 Also 「お電話 即日対応」. | https://denki110.net/ | 電話即日対応 (現場は別日の場合あり) |
| coverage | 全国 | OK | The 対応エリア list covers all 47 prefectures, 北海道〜沖縄県. | https://denki110.net/company/ | - |
| features: 全国対応 | 全国対応 | OK | 対応エリア lists 47 prefectures. | https://denki110.net/company/ | - |
| features: 年中無休(9-22時) | 年中無休(9-22時) | OK | 「電話は年中無休で9時～22時の受付。」 | https://denki110.net/ | - |
| features: メール24時間受付 | メール24時間受付 | OK | 「メールは24時間受け付けています。」 | https://denki110.net/ | - |
| features: 無料相談 | 無料相談 | OK | 「電話相談無料」「まずは無料相談」 | https://denki110.net/ | - |
| features: 上場企業運営 | 上場企業運営 | WRONG | The operator is 「株式会社イエノナカカンパニー」, which is not listed. Its shareholder 「センコーグループホールディングス株式会社 … 上場取引所 東京証券取引所プライム市場」 is the listed company. | https://denki110.net/company/ , https://ienonaka.co.jp/company/ | 東証プライム上場センコーグループ傘下 |

---

## 12. yourmystar (ユアマイスター)

- Aircon repair (エアコン修理) listings exist in only 12 prefectures as of 2026-10-15: 北海道3, 青森1, 岩手1, 福島1, 千葉1, 富山1, 石川1, 長野1, 愛知1, 福岡2, 熊本2, 大分1. The other 35 prefectures show 0 件, including 東京都 (「選択された条件に該当するプロが見つかりませんでした。」).
- Repair listings show no prices.

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 8,000〜40,000円 | UNVERIFIABLE | No range is stated and repair listings show no price. Final repair cost is set on site: 「訪問日当日、職人さんがエアコンの故障状況を診断し、最終的な修理代金を確定します。」 Cleaning listings show individual prices such as 7,150〜10,400円/台 (壁掛型). | https://yourmystar.jp/c0_138/c1_173/ | 要見積もり (訪問診断で確定) |
| responseTime | 要見積もり | UNVERIFIABLE | Not stated at platform level. 「即日診断に伺えるプロ、24時間365日修理対応してくれるプロなどさまざまな特徴を持つプロに依頼することができます。」 | https://yourmystar.jp/c0_138/c1_173/ | プロにより異なる |
| coverage | 全国 | WRONG (for repair) | Repair pros are in only 12 prefectures (see note). Cleaning has 「全国のエアコンクリーニングのプロを探す」. | https://yourmystar.jp/c0_138/c1_173/a0_100000462/ | 一部地域 (修理の掲載は12道県) |
| features: 職人登録型 | 職人登録型 | OK | The corporate site says 「お客さまと職人さまをつなぎ」; the partner page says 「出店審査にあたり確認書類の提出とスキル審査（オンライン上のテスト）」. | https://corp.yourmystar.jp/ , https://yourmystar.jp/partner/ | - |
| features: 累計50万件超 | 累計50万件超 | UNVERIFIABLE | No cumulative figure found on the top, corporate or partner pages. | https://yourmystar.jp/ , https://corp.yourmystar.jp/ | - (remove) |
| features: 全国対応 | 全国対応 | WRONG (for repair) | Same as coverage. | https://yourmystar.jp/c0_138/c1_173/ | 修理は一部地域 / クリーニングは全国 |
| features: 口コミが豊富 | 口コミが豊富 | OK (cleaning only) | Cleaning listings show review counts such as 3,182 and 2,434. Aircon repair shows only 「累計評価 4.38（10件）」. | https://yourmystar.jp/ , https://yourmystar.jp/c0_138/c1_173/ | - |
| features: 修理・清掃に対応 | 修理・清掃に対応 | OK | Both categories exist: 「エアコン修理」 (/c0_138/c1_173/) and 「エアコンクリーニング」 (/c0_1/c1_2/). | https://yourmystar.jp/ | - |

---

## 13. zehitomo (ゼヒトモ)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 要見積もり | OK | 「複数のプロから相見積もりをとり比較する」. The page also gives a symptom-based cost table: 電源が入らない 2〜3.5万円, 風が出ない 0.9〜13万円, 冷暖房が効かない 2.7〜10.5万円, 水漏れ 0.8〜6万円, 室外機 2〜11万円, リモコン 0.6〜3.5万円. | https://www.zehitomo.com/home/repair-exchange-set/air-conditioner/air-conditioner-repair | (optional) 6,000〜130,000円 (故障内容別の目安) |
| responseTime | 要見積もり | UNVERIFIABLE | No response time is stated. The page says 「一般的な故障であれば当日のうちに修理が完了するものの…数日かかることも」, which describes repair duration. | same | プロにより異なる |
| coverage | 全国 | OK | 「都道府県で探す」 lists all 47 prefectures, 東京都〜沖縄県. | same | - |
| features: 相見積もり提案型 | 相見積もり提案型 | OK | 「最大5人のプロから提案を受けられます。」 | https://www.zehitomo.com/ | - |
| features: フォーム入力で簡単 | フォーム入力で簡単 | OK | 「2分でスマホやPCで簡単に依頼内容を入力します。」 | https://www.zehitomo.com/ | - |
| features: 全国対応 | 全国対応 | OK | 47-prefecture search | aircon repair page | - |
| features: プロの実績が見える | プロの実績が見える | OK | 「プロの評価やプロフィールの確認をし、チャットや電話で直接プロと話すことができます。」 | https://www.zehitomo.com/ | - |
| features: 無料で利用可 | 無料で利用可 | OK | 「ゼヒトモは依頼に関する手数料・利用料は一切かからないので、気軽に利用できます。」 | https://www.zehitomo.com/ | - |

---

## 14. panasonic-repair (パナソニック修理ご相談窓口)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 品番で目安確認可 | OK | 「修理の目安金額を確認できる」 and 「製品品番を検索し、サービス種別を選択すると修理をお申込みいただけます。」 | https://panasonic.jp/aircon/support.html , https://panasonic.jp/support/repair/on-site.html | - |
| responseTime | 要予約 | OK | Online application with visit-date selection: 「夜間時間帯（２３時～７時）は出張修理の訪問日指定機能がご利用できません。」 | https://panasonic.jp/support/repair/on-site.html | - |
| coverage | 全国 | UNVERIFIABLE | The repair pages state no service area. The repair policy page (panasonic.com/jp/company/pmj/info/repairpolicy.html) returned 403. Only the cleaning service states 「日本国内が対象…離島及び遠隔地…は承っておりません」, which is not about repair. | https://panasonic.jp/aircon/support.html | - |
| features: メーカー正規対応 | メーカー正規対応 | OK | Manufacturer's own service: 「販売店が不明な場合は、パナソニックの修理サービスをご利用ください。」 Note: 「修理のお申し込みは、お買い上げの販売店にご相談ください。」 | https://panasonic.jp/aircon/support.html | - |
| features: 純正部品使用 | 純正部品使用 | UNVERIFIABLE | No 「純正部品」 claim found. The page only covers 補修用性能部品の保有期間: 「家電製品の修理に必要な性能部品※1の最低保有期間を定めています。」 | https://panasonic.jp/aircon/support.html | 補修用性能部品の保有期間を公開 |
| features: 出張修理 | 出張修理 | OK | 「出張修理　お客様のご自宅やご指定の場所に修理担当者がお伺いして修理を行います。」 | https://panasonic.jp/support/repair/on-site.html | - |
| features: 料金目安が確認可 | 料金目安が確認可 | OK | 「修理の目安金額を確認できる」 | https://panasonic.jp/aircon/support.html | - |
| features: 全国対応 | 全国対応 | UNVERIFIABLE | Same as coverage. | - | - |

Additional Panasonic facts: 修理ご相談窓口 「【受付時間】 9:00 – 18:00 年中無休」 (https://panasonic.jp/aircon/support.html).
