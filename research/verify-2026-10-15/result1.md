# Fact-check result: batch1 (verified 2026-10-15)

Method: I fetched each officialUrl and its official subpages with curl (browser UA) and extracted text and image alt text. For key images (prices, hours) I opened the image itself. Sources are limited to the company's own official pages. Site files were not edited.

Verdicts: OK / WRONG / UNVERIFIABLE

---

## 1. aircon-trouble-center (エアコントラブルセンター)

Official: https://aircon-troubleone.com/ (single-page LP. Most of the copy is in images, so I checked it through their alt text.)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 8,000〜50,000円 | WRONG | 「作業開始…安心価格8800円〜」(step4 image alt). No upper figure stated | https://aircon-troubleone.com/ | 8,800円〜 |
| responseTime | 最短即日 | OK | 「熟練した施工技術により即日修理可能になります」/「1時間以内に現場へ向かいます」 | https://aircon-troubleone.com/ | (no change) |
| coverage | 全国 | OK | 「全国どこでも対応しております」 | https://aircon-troubleone.com/ | (no change) |
| features: 24時間365日受付 | 24時間365日受付 | OK | 「24時間365日全国どこでも・すぐに対応致します」(step1 image alt) | https://aircon-troubleone.com/ | (no change) |
| features: 全国対応 | 全国対応 | OK | 「全国どこでも対応！エアコントラブルセンター」 | https://aircon-troubleone.com/ | (no change) |
| features: 見積もり無料 | 見積もり無料 | OK | 「出張料・見積もり料金はいただいておりません。」 | https://aircon-troubleone.com/ | (no change) |
| features: 提携業者2,000社以上 | 提携業者2,000社以上 | OK | 「全国2000社以上の加盟店をご用意」 (official wording is 加盟店) | https://aircon-troubleone.com/ | (optional wording fix: 加盟店2,000社以上) |
| features: 最短即日対応 | 最短即日対応 | OK | 「即日修理可能になります」 | https://aircon-troubleone.com/ | (no change) |

---

## 2. take-service (テイクサービス)

Official: https://aircon-syuri.jp/ is **unreachable**. Ports 443 and 80 timed out (curl 45 s, then nc). WebFetch failed with `ECONNREFUSED 141.147.166.78:443`. A web search turned up no other official domain for the company.

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 10,000〜60,000円 | UNVERIFIABLE | Official site unreachable (connection timeout/refused) | https://aircon-syuri.jp/ | — (re-check later; consider hiding until verified) |
| responseTime | 最短5分で手配 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| coverage | 全国 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| features: 最短5分でスタッフ手配 | 〃 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| features: 年間30,000件以上の実績 | 〃 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| features: 全国対応 | 〃 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| features: 24時間受付 | 〃 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |
| features: アフターフォロー完備 | 〃 | UNVERIFIABLE | Same as above | https://aircon-syuri.jp/ | — |

Note: if the site is closed for good, the affiliate link itself is probably dead. Check it separately.

---

## 3. denki-koujiya (電気の工事屋さん)

Official: https://denki-koji.work/ ; /price/ ; /air-conditioner/ ; /company/ ; /faq/

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 15,000〜80,000円 | WRONG | 「エアコン修理 3,300円(税込)～」 (other items: 冷媒ガス充填 16,500円～, 水漏れ 5,500円～). Lower bounds only | https://denki-koji.work/air-conditioner/ | 3,300円〜（税込） |
| responseTime | 最短翌日 | WRONG | 「都合が合えば最短30分でお伺いいたします！」; title says 「即日対応可」 | https://denki-koji.work/ | 最短30分 |
| coverage | 全国 | WRONG | The header says 「全国エリアのエアコン取付取外・電気工事」, but the 出張対応エリア list has only 42 prefectures. 岩手・秋田・長野・鳥取・島根 are not listed | https://denki-koji.work/company/ | 42都道府県（岩手・秋田・長野・鳥取・島根を除く） |
| features: 有資格の電気工事士対応 | 〃 | OK | 「第二種電気工事士などの国家資格保有者が必ず現場にて施⼯します。」 | https://denki-koji.work/ | (no change) |
| features: 全国対応 | 〃 | WRONG | Same as coverage (42 prefectures listed) | https://denki-koji.work/company/ | 42都道府県対応 |
| features: 施工後保証あり | 〃 | UNVERIFIABLE | 「保証内容」 appears only in the /company/ page `<title>`. No warranty terms anywhere in the body of top, company, price, air-conditioner or faq | https://denki-koji.work/company/ | — (remove, or replace with e.g. 見積り0円) |
| features: 電気系トラブルも対応 | 〃 | OK | 「スイッチやコンセント、ブレーカー（分電盤）や照明、アンテナなどなど、電気⼯事全般幅広く対応可能です。」 | https://denki-koji.work/ | (no change) |
| features: 見積もり無料 | 〃 | OK | 「お⾒積り0円」/「詳細は無料でお見積り致します」 | https://denki-koji.work/ | (no change) |

Reference: phone hours are 「電話受付 10:00〜19:00 年中無休」 (not 24h).

---

## 4. life-kyukyusha (ライフ救急車)

Official: https://lifeqq.info/denki/aircon/ (the TLS certificate has **expired**. I read the page with curl -k, read-only. https://lifeqq.info/ returned 403.)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 8,000〜45,000円 | WRONG | The price image shows 「基本料金 作業費（調査・施工）5,500円〜＋部材費」. Its alt text says 8,800円～ (stale). Caution note: 「5,500円で終了するものから数万～10万円以上するものもあります」 | https://lifeqq.info/denki/aircon/ | 5,500円〜＋部材費 |
| responseTime | 最短当日 | UNVERIFIABLE | 「急なトラブルも即日対応」 exists only in an image alt. The visible image says 上場企業グループ会社／東京電力登録工事店／安心1年保証, and no visible text gives a timing | https://lifeqq.info/denki/aircon/ | — |
| coverage | 全国 | WRONG | The 対応エリア list has 24 prefectures: 岩手・宮城・山形・茨城・栃木・群馬・埼玉・千葉・東京・神奈川・山梨・岐阜・愛知・三重・滋賀・京都・大阪・兵庫・奈良・和歌山・岡山・広島・福岡・沖縄. Text says 「上記の地域に対応中です」. 全国 appears only in an image alt | https://lifeqq.info/denki/aircon/ | 24府県（対応エリア記載地域） |
| features: 365日年中無休 | 〃 | OK | The 営業時間 image reads 「年中無休 365日施工」 | https://lifeqq.info/denki/aircon/ | (no change) |
| features: 全国対応 | 〃 | WRONG | Same as coverage | https://lifeqq.info/denki/aircon/ | 24府県対応 |
| features: 生活全般のトラブル対応 | 〃 | UNVERIFIABLE | The readable page lists only electrical categories (エアコン/アンテナ/インターホン/コンセント/漏電/照明/スイッチ/換気扇). The brand top page returns 403 | https://lifeqq.info/denki/aircon/ | 電気まわりのトラブル対応 |
| features: 緊急対応可能 | 〃 | UNVERIFIABLE | The visible text only says 「深夜や早朝は対応できますか？ 対応可能です。夜間早朝をご希望の場合は、夜間料金が発生する可能性があります」 | https://lifeqq.info/denki/aircon/ | 深夜・早朝対応可（夜間料金あり） |
| features: 電話受付24時間 | 〃 | UNVERIFIABLE | No 24-hour reception wording. Hours image says 「年中無休 365日施工」 only | https://lifeqq.info/denki/aircon/ | — (remove) |

Reference (official): 「保証…期間は１年」 (FAQ Q9). 安心1年保証 is supported if you want to use it as a feature.

---

## 5. seikatsu110 (生活110番)

Official: https://www.seikatsu110.jp/ ; /service/electronics/es_air_conditioner/ ; /faq/ ; /about/

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 7,000〜40,000円 | WRONG | No range is stated. Official gives an average: 「エアコン修理の費用相場 平均費用 2.7万円 ※2019年11月更新。過去3年のご利用料金に基づいて算出」 | https://www.seikatsu110.jp/service/electronics/es_air_conditioner/ | 平均2.7万円 |
| responseTime | 最短当日 | UNVERIFIABLE | No 即日/当日/最短 statement on official pages (only inside a user review) | https://www.seikatsu110.jp/ | — |
| coverage | 全国 | OK | 「24時間365日・日本全国受付対応！」 | https://www.seikatsu110.jp/ | (no change) |
| features: 加盟業者数業界最大級 | 〃 | WRONG | No 「業界最大級」 claim. Official says 「全国7,600社以上の提携業者」 | https://www.seikatsu110.jp/ | 提携業者7,600社以上 |
| features: ASPアフィリエイト対応 | 〃 | UNVERIFIABLE | Not on official pages. This is an internal note, not a user-facing feature | https://www.seikatsu110.jp/ | — (remove from display) |
| features: 全国対応 | 〃 | OK | 「日本全国受付対応」 | https://www.seikatsu110.jp/ | (no change) |
| features: 24時間受付 | 〃 | OK | 「通話料無料・24時間365日受付」 | https://www.seikatsu110.jp/ | (no change) |
| features: 無料見積もり | 〃 | OK | 「お困りごとの相談やお見積もり・ご依頼に至るまで無料で承っております。」 | https://www.seikatsu110.jp/faq/ | (no change) |

---

## 6. kurashi-market (くらしのマーケット)

Official: https://curama.jp/ ; /about/ ; /aircon-repair/

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 6,000〜35,000円 | UNVERIFIABLE | The platform states no range or average. Prices are per listing (407 listings). The default-order page 1 (50 listings) shows ¥10,000〜¥25,000 | https://curama.jp/aircon-repair/ | — (if kept, label as 出店者により異なる) |
| responseTime | 業者によって異なる | OK | Per-listing. 「店舗が予約を受け付けると予約成立」; listings show 「24時間以内の返信」 badges | https://curama.jp/about/ | (no change) |
| coverage | 全国 | UNVERIFIABLE | No 全国 statement on the top, about or aircon-repair pages. They only have an 「エリアを選択」 filter | https://curama.jp/ | — |
| features: 口コミ・評価システム | 〃 | OK | 「顔写真や文章、口コミでプロの人柄がわかる」; 「口コミの平均点 4.84 累計口コミ数 18,588」 | https://curama.jp/about/ | (no change) |
| features: 事前料金確認可能 | 〃 | OK | 「見積もりなしで料金が決定…料金比較も簡単です」 | https://curama.jp/about/ | (no change) |
| features: 全国対応 | 〃 | UNVERIFIABLE | Same as coverage | https://curama.jp/ | — |
| features: 多様な業者から選択 | 〃 | OK | 「様々な事業者の中から、口コミや料金で比較して選ぶことができます」; 「累計出店者数は10万店以上」 | https://curama.jp/about/ | (no change) |
| features: メッセージで事前相談可能 | 〃 | OK | 「メッセージ機能を使って店舗に質問することも可能です。」 | https://curama.jp/about/ | (no change) |

---

## 7. mitsumoa (ミツモア)

Official: https://meetsmore.com/ ; https://meetsmore.com/services/air-conditioner-exchange (official "エアコン修理" category page)

| field | current | verdict | official value | source URL | suggested |
|---|---|---|---|---|---|
| avgCost | 5,000〜30,000円 | WRONG | Body: 「相場は6,000～15,400円」; 「エアコン修理の料金相場は6,000円～です」. The meta description says 「相場は5,000円～13,000円ほど」, which is stale and conflicts with the body | https://meetsmore.com/services/air-conditioner-exchange | 6,000〜15,400円 |
| responseTime | 業者によって異なる | OK | Quotes come per business: 「見積もりが最短1分ですぐに届きます」 | https://meetsmore.com/ | (no change) |
| coverage | 全国 | UNVERIFIABLE | No explicit 全国 statement found. Prefecture pages exist (e.g. /tokyo, /kagoshima) | https://meetsmore.com/services/air-conditioner-exchange | — |
| features: 最大5社同時見積もり | 〃 | OK | 「ぴったりな見積もり（最大5社）が届きます」 | https://meetsmore.com/ | (no change) |
| features: 料金比較が簡単 | 〃 | OK | 「料金や口コミなど複数の条件で比較できます」; 「届いた見積もり内容やレビュー、実績を見比べて」 | https://meetsmore.com/services/air-conditioner-exchange | (no change) |
| features: 全国対応 | 〃 | UNVERIFIABLE | Same as coverage | https://meetsmore.com/ | — |
| features: チャットで相談可能 | 〃 | OK | 「比較して気になる事業者とやりとりしてみましょう」; the review criterion 「電話・チャット対応」; 「チャット上で…」 | https://meetsmore.com/ | (no change) |
| features: 口コミ評価あり | 〃 | OK | 「エアコン修理｜業者を費用や口コミで比較」 | https://meetsmore.com/services/air-conditioner-exchange | (no change) |
