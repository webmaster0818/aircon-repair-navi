# Batch B fact-check: official sites as of 2026-10-24

Scope: seikatsu110 / yourmystar / zehitomo / airhome-support / take-service. Each page's `app/company/<slug>/page.tsx`, its entry in `data/companies.json`, and its row in `app/cost/price-index/page.tsx` were checked against the company's official site.
Method: curl with a browser UA. Puppeteer (`/tmp/mm_g.cjs`) was used for JS pages. HTML comments were stripped. Where text sits inside images, the images were downloaded and viewed (airhome and take-service display almost all of their content as images). Raw files are in `/tmp/verifyB/`.
Review-trend summaries and third-party sources (みん評, 口評, 知恵袋, リフォームファクト, etc.) are marked **third-party, not re-checked**.

---

## 1. 生活110番 (seikatsu110)

Official URLs checked:
- top: https://www.seikatsu110.jp/
- aircon repair: https://www.seikatsu110.jp/service/electronics/es_air_conditioner/
- FAQ: https://www.seikatsu110.jp/faq/
- company: https://www.seikatsu110.jp/company/
- https://www.sharing-tech.co.jp/company/

| Claim (line) | Page says | Official says today | Official URL | Verdict |
|---|---|---|---|---|
| Operator (L138, L164) | シェアリングテクノロジー株式会社（東証グロース上場） | 「会社名 シェアリングテクノロジー株式会社」; 「生活110番は、東証上場企業が運営しております。」; corp site: 「東証グロースへの上場といったシェアリングテクノロジーの歴史」 | /company/, sharing-tech.co.jp/company/ | OK |
| Number of service genres (L138, L168) | 「150以上のサービスジャンル」「エアコン修理ほか150以上の生活トラブル」 | Top-page badge image (alt and image text agree): 「140カテゴリ以上対応」 | top | **WRONG** (140+, not 150+) |
| Partner count (L141, L166, json tagline/description/features) | 全国7,600社以上の提携業者 | Top and aircon page: 「全国7,600社以上の提携業者」「7,600社を超える提携業者」. The FAQ page still says 「全国5,100社以上の提携業者」 (the official site contradicts itself) | top, aircon page, /faq/ | OK (note: FAQ still shows 5,100社) |
| Hours (L37, L141, L167, L278) | 24時間365日年中無休 | 「24時間365日・日本全国受付対応！」「通話料無料・24時間365日受付」 | top | OK (the word 「年中無休」 does not appear; the meaning is equivalent) |
| Free consultation and estimates (L41, L169, L227, L266) | 相談・見積もり無料（公称） | FAQ: 「お困りごとの相談やお見積もり・ご依頼に至るまで無料で承っております。」 and 「お電話もしくはメールでの概算提示は無料でございます。電話・メール概算、無料現地調査をご希望の場合は、受付時にお申し付けくださいませ。」 | /faq/ | OK. Nuance: free on-site survey must be requested at intake. The price-index row already reflects this |
| Average cost (L45, L266, json avgCost, price-index L21) | 平均2.7万円（2019年11月更新・過去3年の利用料金に基づく） | 「平均費用 2.7 万円 ※2019年11月更新。過去3年のご利用料金に基づいて算出しています。」 | aircon page | OK |
| Matching model (L33, L116, L165) | 加盟店紹介型 | 「あなたの地域で対応できる業者を、検索・ご紹介するサービスです」「専門業者を無料でご紹介」 | top | OK |
| Area (L166, json coverage) | 全国 | 「日本全国受付対応」 | top | OK |
| price-index: cancellation (L21) | キャンセル料の記載なし | FAQ 「キャンセル料は発生しますか？」 is answered only with 「対応状況を確認いたします。こちらからお問い合わせくださいませ。」 | /faq/ | OK |
| price-index: trip fee (L21) | 公式記載なし | No trip-fee statement found | aircon page / FAQ | OK |
| Official aircon reviews (not on page) | — | 「口コミ平均評価 4.3 / 口コミ 38件」 (for information only) | aircon page | n/a |
| Review trends (L186-197, L209, L313) | 駆けつけの早さ等 | — | — | third-party, not re-checked |
| json pros 「口コミ評価が充実」「料金の透明性が高い」 | editorial | — | — | not verifiable (editorial wording) |

---

## 2. ユアマイスター (yourmystar)

Official URLs checked:
- https://yourmystar.jp/
- aircon repair category: https://yourmystar.jp/c0_138/c1_173/
- all 47 prefecture pages `/c0_138/c1_173/a0_*/`
- wall-mount cleaning: https://yourmystar.jp/c0_1/c1_2/c2_23/
- /partner/
- /explanation/
- https://corp.yourmystar.jp/

| Claim (line) | Page says | Official says today | Official URL | Verdict |
|---|---|---|---|---|
| Operator (L138, L152, json) | ユアマイスター株式会社 | Footer 「© ユアマイスター株式会社」. corp site: 「ユアマイスター株式会社 〒150-0043 東京都渋谷区道玄坂1-19-14 コエル渋谷道玄坂 7階」 | top, corp.yourmystar.jp | OK |
| Prefectures with aircon-repair pros (L11, L33, L37, L141, L154, L219, L241, L301, json) | 12道県 only: 北海道・青森・岩手・福島・千葉・富山・石川・長野・愛知・福岡・熊本・大分. 東京都など35都府県は0件 | All 47 prefecture pages were crawled today. Pros are listed in exactly these 12: 北海道3, 青森1, 岩手1, 福島1, 千葉1, 長野1, 富山1, 石川1, 愛知2, 福岡1, 熊本2, 大分1. The other 35 pages show 「選択された条件に該当するプロが見つかりませんでした。」 (東京都: 「0 件を表示」) | /c0_138/c1_173/a0_*/ | OK |
| Cleaning available nationwide (L141, L154, L212) | 全国でプロを探せる | Cleaning LP: 「日本全国 対応」. Wall-mount list shows 「全 554 件」 | /cleaning/aircon/, /c0_1/c1_2/c2_23/ | OK |
| Repair price model (L45, L156, L252-254, json avgCost, price-index L30) | 修理の掲載に料金なし。訪問日当日に職人が故障状況を診断し最終的な修理代金を確定 | 「3.診断・見積もり 訪問日当日、職人さんがエアコンの故障状況を診断し、最終的な修理代金を確定します。」 Prefecture listings show no repair prices (only 「2,000円OFF対象」 coupon tags) | /c0_138/c1_173/ | OK |
| Cleaning price example (L45, L252) | 例：壁掛型7,150〜10,400円/台 | Wall-mount list page 1 shows per-pro prices from 6,500 to 16,250 (e.g. 9,100 / 6,890 / 11,440 / 6,500 / 7,150 / 10,400 / 16,250). The site's own 料金相場 box says 「通常タイプ 8,000〜12,000円(税込) お掃除機能付き 13,000〜17,000円(税込)」. Cleaning LP: 「8,800 (税込) 円〜」 | /c0_1/c1_2/c2_23/, /cleaning/aircon/ | OK as an example (both values still appear), but no longer representative. Consider citing the official 相場 8,000〜12,000円 instead |
| Partner screening (L41) | 確認書類の提出とスキル審査（オンライン上のテスト）がある | /partner/ flow only says 「必要な書類を提出していただき、契約を結びます」. No mention of 審査, テスト or スキル on /partner/, /explanation/, the satisfaction-guarantee page, the top page or the cleaning LP | /partner/ | **NOT FOUND today** (only document submission is confirmed) |
| Repair reviews are few (L210) | 修理の口コミは少数 | 「エアコン修理の新着口コミ 累計評価 4.38 （10件）」 | /c0_138/c1_173/ | OK |
| Service scope (L138, L155) | クリーニング中心・修理／リペアにも対応 | Categories ハウスクリーニング / 家電の修理・お手入れ > エアコン修理 exist | top | OK |
| みん評 200件超 (L173) | — | — | — | third-party, not re-checked |
| Review trends (L176-183, json pros) | — | — | — | third-party, not re-checked |

---

## 3. ゼヒトモ (zehitomo)

Official URLs checked:
- https://www.zehitomo.com/
- https://www.zehitomo.com/about
- https://www.zehitomo.com/home/repair-exchange-set/air-conditioner/air-conditioner-repair

| Claim (line) | Page says | Official says today | Official URL | Verdict |
|---|---|---|---|---|
| Operator name (L11, L138, L152) | 株式会社Zehitomo | 「社名 株式会社Zehitomo」 | /about | OK |
| Operator name (**companies.json description**) | 「ゼヒトモ株式会社が運営する」 | 「社名 株式会社Zehitomo」 | /about | **WRONG** (json only) |
| Location (L138, L152) | 東京都品川区 | 「〒141-0031 東京都品川区西五反田7-22-17 TOCビル11階」 | /about | OK |
| Founded (L138, L152) | 2015年設立 / 2015年8月設立 | 「ゼヒトモは2015年に2人のアメリカ人が…生まれたプラットフォームです」. No 設立 field and no month on the official page. The month 2015年8月 appears only in third-party sources (Weblio: 株式会社JAM Groupとして設立) | /about | 2015: OK. **「8月」: NOT FOUND on the official site** |
| Ranking (L37, L141, L154, L214, L301, json description) | 2025年6月の人気依頼ランキングでエアコン修理が3位 | No ranking found on the top page or the aircon repair page. The top page has only an unranked 「今の季節に人気のサービス」 list (エアコンクリーニング, エアコンの交換・取り付け, パーソナルトレーニング, リノベーション・リフォーム, 写真撮影, エアコン修理). A web search also found nothing | top, aircon page | **NOT FOUND today** |
| Free for requesters (L45, json features 「無料で利用可」, price-index L31) | 提案受け取りは原則無料 | 「完全無料 ゼヒトモは依頼に関する手数料・利用料は一切かからない」 | top | OK |
| Mechanism (L33, L153) | フォーム入力でプロから見積もり・提案 | 「STEP 1：簡単無料依頼 2分で…」「STEP 2：提案を受ける 最大5人のプロから提案を受けられます」 | top | OK (could add 最大5人) |
| Nationwide (L41, L141, L155, json) | 全国対応 | No explicit 「全国」 wording. The aircon page has 「都道府県で探す」 covering prefectures | aircon page | OK in substance (no explicit wording) |
| price-index L31: 故障内容別の目安0.6〜13万円（公式掲載） | — | Table: 電源が入らない 2〜3.5万円 / 風が出ない 0.9〜13万円 / 冷暖房が効かない 2.7〜10.5万円 / 水漏れ 0.8〜6万円 / 室外機 2〜11万円 / リモコン 0.6〜3.5万円 | aircon page | OK |
| price-index L31: 見積もりのみで調査費を設定するプロあり | — | Pro answer: 「修理不可、見積りのみの場合は調査費として8,800円いただいております。」 | aircon page | OK |
| Review trends (L174-184, json pros/cons) | — | — | — | third-party, not re-checked |

---

## 4. エアホーム (airhome-support)

Official URL: https://airhomesupport.com/ (a one-page LP). Nearly all content is in images: `images/fv_pc.png`, `merit.png`, `reasons.png`, `flow.png`, `faq.png`, `japan.png`, `cta_pc_text.png`. Every image has empty alt text except the phone number and buttons. Last-Modified headers: faq/flow/reasons 2023-08-14, merit 2023-08-21, fv_pc 2026-06-15, japan 2026-09-14. **So the payment and track-record text below has been on the site since 2023. These are missed facts, not recent changes.**

| Claim (line) | Page says | Official says today (image text unless noted) | Official URL | Verdict |
|---|---|---|---|---|
| Operator (L49, L213, L261) | 「エアホーム」の表記のみ、法人格・代表者なし | HTML text: 「運営会社 エアホーム」. No legal form or representative | top | OK |
| Address (L214, L485) | 〒220-0072 神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402 | Same (HTML text) | top | OK |
| Phone (L57, L215, L360, L380, L486) | 050-1793-2218 | 「050-1793-2218」 | top | OK |
| Basic fee (L13, L45, L151, L221, L260, L327, L341, L508, json avgCost, price-index L20) | 基本料金2,980円〜（通常6,000円）「さらに今なら」 | fv_pc.png: 「基本料金 6,000円(取消線) ▶▶▶ さらに今なら 2,980円〜」 | top | OK |
| Trip fee, consultation and estimate free | 出張費0円・ご相談0円・お見積り0円 | fv_pc.png: 「出張費 0円」「ご相談 0円」「お見積り 0円」. merit.png: 「出張費用なし 相談費用なし 見積り費用なし」 | top | OK |
| Diagnosis may be charged (L45, L57, L221, L260, L326) | 「故障診断に別途料金が発生する場合がございます」 | merit.png: 「※故障診断に別途料金が発生する場合がございます。」. reasons.png: 「※故障診断に別途費用が発生する場合がございます。」. faq.png: 「別途調査費用がかかる場合もございますが、その際にはスタッフから事前にお伝えしますのでご安心ください。」. flow.png: 「※症状によっては調査費用が発生する場合がございます。」 | top | OK |
| Hours / speed (L61, L220, L264, json responseTime) | 24時間365日受付中！ / 最短10分で現場急行！ / 場合によって即日対応も可能 | cta_pc_text.png: 「24時間365日受付中！」. fv: 「最短10分で現場急行！」. flow.png STEP03: 「場合によって、即日対応も可能です。」 | top | OK |
| Area map (L53, L186, L218, L264, json coverage/description) | 8都府県＋注記 | japan.png: 「東京、神奈川、千葉、埼玉 愛知、岐阜、大阪、兵庫」「※一部地域ではご案内までお時間を頂く場合や、やむを得ない事情でご対応出来ない場合もございます。」 | top | OK |
| FAQ: nationwide (L53, L218) | 「全国どこでも対応可能ですか？」→「対応可能です」 | faq.png: 「対応可能です。一部地域では時期や状況に応じてすぐに対応致しかねる場合もございますので、詳しくはお問い合わせください。」 | top | OK |
| Cancellation (L65, L329, L444, price-index L20) | 作業確定前までは無料・無断キャンセルは基本料金のみ請求 | faq.png: 「作業確定前までのキャンセル料は無料です。事前連絡なしのキャンセルにつきましては基本料金のみご請求させて頂きます」 | top | OK |
| **Payment method (L69, L442, L436)** | 支払い方法は公式サイトに記載なし。現金以外は受付時に要確認 | faq.png: 「Q.支払いは現金のみですか？ A.現金以外にクレジットカードがご使用頂けます。予めスタッフにお伝えください。」 | top | **WRONG** |
| **Payment timing (L443)** | 公式に記載なし（作業完了後か前払いか要確認） | flow.png STEP04: 「作業後現金もしくはクレジットカードで料金のお支払いをお願いします。」 | top | **WRONG** |
| **Track record / testimonials (L193, L246)** | 公式サイトにも…実績件数の掲載はありません | reasons.png POINT02: 「年間実績30,000件以上！」「年間30,000件以上の実績を持つ」 (there is no お客様の声 section, so that half is OK) | top | **WRONG** (実績件数 is published) |
| **Service scope beyond the 5 form options (L77, L429)** | 修理以外のメニューは明記なし | reasons.png: 「他の業者様に断られた場合でもご相談ください。また、その他電気工事等にも対応しております。」. merit.png lists 「ガス補充 水漏れ 異音 異臭 電源がつかない」 | top | **WRONG/incomplete** (「その他電気工事等にも対応」 is stated; cleaning, installation and removal are indeed not stated) |
| Extra charges (not on page) | — | faq.png: 「ご提示したお見積り金額を超えることはございません。…事前に判明しなかった内容が作業当日に判明した場合は、作業前に必ずご説明させて頂きます。」 | top | n/a (could be added) |
| Self-performed vs subcontracted (L265) | 記載なし | fv_pc.png has a 「協力店募集」 badge. trouble.png: 「専門スタッフが、各拠点に常時待機しています。」 | top | OK (not explicit; the 協力店募集 badge suggests a partner network) |
| Form fields (L386-390) | 必須項目… / 法人名・お問い合わせ内容 任意 / 時間帯4枠 / 第1・第2希望 | HTML form matches: required お名前, フリガナ, メール, 電話(確認用含む), 郵便番号, ご住所, ご依頼内容, ご希望の訪問日. 法人名 and お問い合わせ内容 have no 必須 mark. Time slots 9～12 / 12～15 / 15～18 / 18～21 | top | OK |
| 5 request options (L41, L216, L414-418) | 冷えない／水漏れ／異音／電源が入らない／その他 | Form options identical | top | OK |
| Licences (L219, L262) | 記載なし | None found in text or images | top | OK |
| Guarantee (L222, L263) | 明記なし | None found | top | OK |
| 特商法 page (L223) | 確認できず | No such page or link | top | OK |
| Night/early surcharge (L330) | 記載なし | None found | top | OK |
| Third-party reviews (L193, L240-250) | — | — | — | third-party, not re-checked |

---

## 5. テイクサービス (take-service)

Official URLs checked:
- https://aircon.assist-life-service.com/ (A8 destination LP)
- https://assist-corp.net/company.html (linked from the LP footer 「会社概要」)

`aircon-syuri.jp` still fails today: `curl: (28) Connection timed out after 25150 milliseconds`.
LP images viewed: fv_sp_top, hikaku_sp, hikaku_sp_2, step3_sp, reason4_sp2, reason4_sp4.

| Claim (line) | Page says | Official says today | Official URL | Verdict |
|---|---|---|---|---|
| Operator (L12, L223, L499) | 株式会社アシスト（東京都中央区銀座4-14-15） | LP footer: 「Copyright © Assist Corp.」. Company page: 「事業所 東京都中央区銀座4-14-15 サントル銀座4丁目803号室」 (創業2013年2月, 資本金1000万円, 代表取締役 渋谷 雄史, 事業内容 ハウスメンテナンス関連仲介・コールセンター運営) | assist-corp.net/company.html | OK |
| Partner (加盟店) model (L48, L160, L194, L224) | 「当社に登録頂いている加盟店のスタッフがお伺いします」 | 「※当社に登録頂いている加盟店のスタッフがお伺いします｡」 | LP | OK |
| Area (L226, json coverage) | 全国対応 | 「全国各地に完全対応！」. FAQ: 「日本全国に対応しております。」 | LP | OK |
| Hours (L227, L372, L396) | 24時間365日 | alt: 「まずは無料お見積りから 24時間365日対応可能」. step3 image: 「24時間365日お受けしております。」 | LP | OK |
| Speed (L56, L197, L228, json) | 最短5分 | FAQ: 「最短5分で現場までお伺いさせていただきます。」 | LP | OK |
| Track record (L197, L229, json) | 年間30,000件 | 「経験豊富な年間 30,000件 以上の修理を行う」「年間3万件以上の出動実績」 | LP | OK |
| Hard jobs (L197) | 他社に断られた内容にも対応 | 「難易度が高く 他社に断られた内容 も 対応」 | LP | OK |
| Trip fee (L40, L340, L455) | 出張費無料 | 「どんな場所も出張費用は頂きません！」. FAQ: 「出張料はいただいておりません。作業料金のみでご案内させて頂いております。」 | LP | OK |
| Estimate and survey fee (L40, L280, L343, L456, price-index L17) | 見積無料。器具外し・通電チェック・電波状況調査・漏電調査は調査費用（金額非公開） | FAQ: 「お見積は無料ですが、器具の外し作業や通電チェック、電波状況の調査、漏電調査の場合には調査費用をいただいております。」 | LP | OK |
| Cancellation (L72, L80, L342, L457-458) | 施工依頼前は無料・依頼後は規定なし | FAQ: 「施工依頼前のキャンセル料金はいただいておりません。」. Comparison image hikaku_sp: 「見積り後キャンセル … テイクサービス 0円」 | LP | OK (could add 見積り後キャンセル0円) |
| Guarantee (L52, L281) | 同一症状再発は無料保証・別箇所は対象外・工事内容で期間が異なる | 「施工後に同じ症状が生じた場合には、無料にて保証させていただいております。但し、修理した箇所とは別の個所が故障した場合は、保証対象外となります。」「※工事内容により保障期間が異なりますので、ご依頼される前に加盟店にご確認下さい。」 | LP | OK |
| Payment (L60, L231, L282, L401, L453-454) | VISA・マスター・JCB（一部加盟店不可）／法人後日請求は条件付き | FAQ text: 「VISA・マスター・JCB各種に対応しております。※ただし一部の加盟店では対応できない場合があります」. 「柔軟に対応しております。一定の基準に従い出来かねる場合も御座います」. The step3 image also shows 「現金、クレジットカードでのお支払いが可能です」 with JCB / VISA / AMEX / Mastercard / Diners logos | LP | OK (the image adds AMEX and Diners) |
| Night / busy periods (L56, L76, L283) | 夜間は相談可／対応できない場合は他業者紹介 | 「ご相談頂ければお客様のご希望に合わせてお伺い致します。」「夜間や繁忙期・出勤人数などの関係で、素早い対応ができない場合は他の業者をご紹介できます。」 | LP | OK |
| Discount and high-bill FAQ (L68, L72) | 他社よりも安いご案内を心掛けております／「いいえ、御座いません」 | Same wording | LP | OK |
| Estimate ceiling (L44, L356, L399, L480) | 「見積金額の範囲内での作業」 | 「お見積金額の範囲内での作業なのでご安心ください。」 | LP | OK |
| **「業界最安水準」等の文言 (L279)** | 「業界最安水準」等の文言はあります | No 「業界最安水準」 on the LP. It has 「最安値挑戦」 (fv image), 「低価格のサービス」 and 「どこよりも低価格を目指します」 | LP | **NOT FOUND today** (the actual wording is 「最安値挑戦」) |
| Price model (L12, L44, L159, L279, L344, L418) | 症状別の実額は公式に掲載なし・完全見積制 | There is no per-symptom price list. However, image hikaku_sp_2 「作業事例：エアコン修理の場合」 shows 「作業料金(基本料金込み) 8,800円 / 出張費 0円 / 部品代金 5,500円 / 合計金額 14,300円(税込)」 (※競合他社と料金比較表（自社調べ）). The price-index row L17 already cites this | LP | OK, but incomplete: the page should mention the official example (also contradicts the 金額の根拠は非公開 wording at L279) |
| Promotion (not on page) | — | fv_sp_top: 「初回限定 特別価格 はじめてご利用のはお得！ 1,000円OFF」 | LP | n/a (not mentioned on the page) |
| Menu (L64, L424-428) | 修理・クリーニング・取り付け・取り外し・ガスチャージの5メニュー | サービス一覧 alt: 「エアコン修理 / エアコンクリーニング / エアコン取り付け / エアコン取り外し」 (4 items). 「ガスチャージをしたい」 appears only in the お悩み list | LP | Minor: the service list has 4 items. ガスチャージ appears as a trouble item, not a menu item |
| 「簡単3ステップ」 is image-only (L392, L412) | テキスト説明なし・画像のみ | Correct. step3_sp.jpg contains the step text (お問い合わせ → 現場まで急行(最短5分) → 無料お見積り → 作業完了・お支払い) | LP | OK |
| **Other electrical work (L299, L320)** | エアコン以外の電気工事もあわせて相談が可能 | The aircon LP shows only the image caption 「優れた電気工事技師がトラブルを即解決」. It does not offer non-aircon electrical work | LP | **NOT FOUND today** |
| Licences (L225) | 記載なし | None on the LP or the company page | LP, company page | OK |
| Old domain (L230) | aircon-syuri.jp は接続できず | Still times out today | — | OK |
| json pros 「料金が明確」「アフターフォローが充実」 | editorial | LP alt: 「万全のアフターフォロー」. No price list | LP | 「料金が明確」 is not supported (完全見積制). Editorial wording |
| Review summary (L209-212, L247-266) | 口評4.0/知恵袋 etc. | — | — | third-party, not re-checked |

---

## Summary of items needing fixes

- **seikatsu110**: 「150以上のサービスジャンル」 is WRONG. The official top-page badge says 「140カテゴリ以上対応」 (L138, L168). Also note that the official FAQ still says 5,100社, while the top and aircon pages say 7,600社.
- **yourmystar**: The 12-prefecture claim is exactly right today. 「スキル審査（オンライン上のテスト）」 is NOT FOUND (L41); /partner/ mentions only document submission. The 7,150〜10,400円 example still appears but is not representative; the official 相場 is 8,000〜12,000円.
- **zehitomo**: 「2025年6月の人気依頼ランキング3位」 is NOT FOUND today (L37, L141, L154, L214, L301, json). 「2015年8月設立」: the month is NOT FOUND on the official site (L152). companies.json 「ゼヒトモ株式会社」 is WRONG; the correct name is 株式会社Zehitomo.
- **airhome-support**:
  - 支払い方法・タイミング 「記載なし」 is WRONG. Official: 「作業後現金もしくはクレジットカード」 and 「現金以外にクレジットカードがご使用頂けます」 (L69, L436, L442-443).
  - 「実績件数の掲載なし」 is WRONG. Official: 「年間実績30,000件以上！」 (L193, L246).
  - 「修理以外のメニュー明記なし」 is incomplete. Official: 「その他電気工事等にも対応しております」 (L77, L429).
  - All of these are in images dated 2023.
- **take-service**:
  - 「業界最安水準」 is NOT FOUND; the LP says 「最安値挑戦」 (L279).
  - 「エアコン以外の電気工事も相談可」 is NOT FOUND (L299, L320).
  - 「実額非公開」 should acknowledge the official 作業事例 14,300円 (8,800+5,500).
  - The menu list has 4 items, not 5 (ガスチャージ appears only as a trouble item).
  - Not on the page yet: the 初回1,000円OFF offer and the AMEX/Diners logos.
