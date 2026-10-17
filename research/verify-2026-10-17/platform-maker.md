# Fact-check: price-index platformRows / makerRows (2026-10-17)

- Target: `app/cost/price-index/page.tsx` platformRows and makerRows, plus the Daikin note under the maker table. The table was surveyed on 2026-07-07.
- Method: only each company's own official pages were used, fetched on 2026-10-17 with curl (browser UA) and WebFetch. Search engines were used only to find official URLs.
- Verdicts:
  - **OK:** the cell matches the official site.
  - **WRONG:** the cell differs from the official site, or the official source no longer exists.
  - **UNVERIFIABLE:** the value could not be confirmed on any official page.
- Platform prices are the listing at check time (2026-10-17) and change as listings change.

---

## 1. ミツモア (mitsumoa)

Source: https://meetsmore.com/services/air-conditioner-exchange (the エアコン修理 category page) and https://meetsmore.com/

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張費 | 業者により0円〜4,400円 | UNVERIFIABLE | Neither page shows 0円 or 4,400円. The only statement is 「出張費を含むかどうかは業者によって異なります。」 | https://meetsmore.com/services/air-conditioner-exchange | 業者により異なる（相場に出張費を含むかは業者ごと） |
| 見積もり | 無料（最大5件比較） | OK | 「見積もりは完全無料です。」「ぴったりな見積もり（最大5社）が届きます」 | https://meetsmore.com/ | (no change) Wording option: 無料（最大5社比較） |
| 価格（相場） | 相場6,000〜15,800円 | WRONG | 「相場は6,000～ 15,400円」「エアコン修理の料金相場は6,000円～です。」 | https://meetsmore.com/services/air-conditioner-exchange | 相場6,000〜15,400円 |
| 価格（ガス） | ガス漏れ14,400〜19,000円 | WRONG | 「冷媒ガス漏れ修理・ガス補充 15,000～19,500円」「※直近2年間のエアコン修理の見積もり料金より算出（2026年10月16日更新）」 | same | ガス漏れ修理・補充15,000〜19,500円（2026年10月16日更新の公式相場） |

- The other items in the same official table: ドレンホース詰まり 9,450～16,000円, ドレンパン破損 11,550～22,000円, 室内機の傾き補正 8,800～15,400円, その他の修理（要因調査を含む） 6,000円～.
- companies.json avgCost 「6,000〜15,400円(公式の相場)」 matches the official site (OK). The table is out of line with both the official site and companies.json.

Suggested row: `trip: "業者により異なる"`, `quote: "無料（最大5社比較）"`, `price: "相場6,000〜15,400円／ガス漏れ15,000〜19,500円"`

---

## 2. くらしのマーケット (kurashi-market)

Source: https://curama.jp/aircon-repair/ and https://curama.jp/about/

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張費 | 業者個別 | OK | There is no platform-level statement. Each listing sets its own price. | https://curama.jp/aircon-repair/ | (no change) |
| 見積もり | 記載なし | WRONG (wording) | The about page explains that prices are fixed without a quote: 「見積もりなしで料金が決定 ※。共通の作業内容が決まっているので料金比較も簡単です。 ※一部例外カテゴリあり」 | https://curama.jp/about/ | 原則不要（掲載料金で予約・一部例外あり） |
| 価格 | 掲載価格11,000〜22,000円（調査日時点） | WRONG (as of 10/17) | 「408 件」. The 50 listings on page 1 (default order) range from ¥10,000 to ¥25,000; the most common price is ¥15,000〜¥18,000. | https://curama.jp/aircon-repair/ | 掲載価格10,000〜25,000円（2026年10月17日・1ページ目50件） |

- companies.json avgCost 「出品者ごとに設定」 is consistent (OK).

---

## 3. EPARKくらしのレスキュー (epark)

Source: https://rescue.epark.jp/category/kaden/aircon

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 名称 | EPARKくらしのレスキュー | OK | 「EPARKくらしのレスキューなら…」 | same | (no change). Note: companies.json `name` is still 「EPARK」 |
| 出張費 | 無料の業者多数 | OK | 「EPARKくらしのレスキューなら、出張費用・見積もり費用・キャンセル料無料などに対応した…エアコン屋さんをお探しできます」. Badges 「見積もり無料 出張無料 キャンセル無料」 appear on most listings. Some listings charge, e.g. 「エアコン 出張点検 5,500円(税込)～」「点検費用 5,500円～」. | same | 無料の業者多数（点検費を設定する業者もあり） |
| 見積もり | 無料の業者多数 | OK | Same as above (「見積もり費用…無料などに対応した」). | same | (no change) |
| 価格（最低） | 最低3,300円〜 | WRONG (as of 10/17) | The lowest displayed price is 「施工費 2,200円～（税込） トラブル状況により料金は異なります」. Several listings show 「基本料金 3,300円～」 and 「点検調査 3,300円」. | same | 最低2,200円〜（施工費・掲載業者例） |
| 価格（ガス） | ガス補充7,700円〜 | WRONG (as of 10/17) | 7,700円 does not appear for gas. The gas prices shown are 「エアコンガスチャージ 8,800円～」「ガス充填 8,800円～」「ガスチャージ（R32･R410A） 11,000円～」「ガス補充 18,000円（税込）」「エアコンガスチャージ 19,800円(税込)～」. (7,700円 appears only as 「目安料金 7,700円～」 and 「エアコン取り付け 7,700円」.) | same | ガス補充8,800円〜（掲載業者例） |

Suggested price cell: 「最低2,200円〜／ガス補充8,800円〜（2026年10月17日の掲載例）」

---

## 4. ユアマイスター (yourmystar)

Source: https://yourmystar.jp/c0_138/c1_173/

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張費 | 記載なし | OK | No platform-level statement. | same | (no change) |
| 見積もり | 記載なし | OK (supplement) | Only the flow is stated, with no free/paid indication: 「3.診断・見積もり 訪問日当日、職人さんがエアコンの故障状況を診断し、最終的な修理代金を確定します。」 | same | 訪問診断で確定（無料・有料の記載なし） |
| 価格 | 業者個別ページ制（再発1ヶ月無償の記載） | WRONG (attribution) | 「一ケ月以内の症状再発は、無償修理対応致します」 is one pro's answer in the Q&A (インスペクション株式会社 (東京都)), not a platform policy. Another pro answers differently: 「明らかに修理箇所と関…ない不具合に関しましては補償出来ない場合があります」. Repair listings show no price. Per 10/15, repair pros are listed in only 12道県. | same | 業者個別（修理の掲載価格なし・再発保証は職人ごと） |

- companies.json avgCost 「要見積もり(訪問診断で確定)」 is consistent (OK).

---

## 5. ゼヒトモ (zehitomo)

Source: https://www.zehitomo.com/home/repair-exchange-set/air-conditioner/air-conditioner-repair and https://www.zehitomo.com/

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張費 | 記載なし | OK | No platform-level statement. Individual pros' proposals vary (one says 「※出張費用：対象地…」). | category page | (no change) or 業者個別 |
| 見積もり | 記載なし | WRONG | The platform states that requesting is free: 「STEP 1：簡単無料依頼」「完全無料 ゼヒトモは依頼に関する手数料・利用料は一切かからない」. Some pros charge when no repair is done: 「修理不可、見積りのみの場合は調査費として8,800円いただいております。」「※修理不可、お見積りのみの場合現地調査費 6,600円」 | https://www.zehitomo.com/ ; category page | 依頼・提案の受け取りは無料（見積りのみで調査費を設定するプロあり） |
| 価格 | 相場記事: 修理約2〜5万円 | WRONG | 「2〜5万」 is not on the official page. The current official table: 「電源が入らない 2〜3.5万円」「エアコンから風が出ない 0.9〜13万円」「冷暖房が効かない 2.7〜10.5万円」「水漏れ 0.8〜6万円」「室外機の故障 2〜11万円」「リモコン操作が効かない 0.6〜3.5万円」 | category page | 故障内容別の目安0.6〜13万円（公式掲載） |

- companies.json avgCost 「要見積もり」 is consistent (OK).

---

## 6. パナソニック (panasonic-repair)

Sources:
- Official FAQ 「修理にかかる料金は」: https://jpn.faq.panasonic.com/app/answers/detail/a_id/63915. curl returns 401, but WebFetch could read it.
- https://panasonic.jp/aircon/support.html

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張料 | 出張料4,950円（訪問後キャンセルでも発生） | OK | 「出張料・・・技術員の派遣料金　4,950円（税込）※」「※技術員が訪問後にキャンセルされた場合は、出張料がかかります。」 | https://jpn.faq.panasonic.com/app/answers/detail/a_id/63915 | (no change) |
| 修理料金 | 品番検索型（修理診断ナビ） | OK | 「※目安金額には技術料、部品代、出張料（出張対象商品のみ）が含まれます。」「※点検の結果、複数の部品を交換する必要があるなど、目安金額を超える場合があります。」 aircon/support.html: 「修理料金の確認・修理のお申し込み」 | same ; https://panasonic.jp/aircon/support.html | (no change) |
| 補足 | 時間外・休日の時間指定+2,200円 | OK | 「※営業時間外および休日（日曜・祝日）の指定には、指定料金2,200円（税込）がかかります。」 | FAQ 63915 | (optional addition) 時間外・休日の時間指定+2,200円／一部エリアは遠方料金加算 (official: 「※一部のエリアでは、フェリーなどの特殊料金や遠方料金を加算することがあります。」) |

- Caution for the company page: the 訪問後キャンセル wording at https://panasonic.jp/membership/cleaning/aircon.html (「訪問後のキャンセルは出張料4,950円(税込)をご負担いただきます。なお、お住まいの地域により、出張料が異なる場合がございます」) is on the **エアコンクリーニング** service page. Use FAQ 63915 as the repair source.
- The `on-site.html` link on the company page now redirects to https://panasonic.jp/membership/repair/search/. Consider updating the URL.

---

## 7. ダイキン (daikin-cc)

Sources:
- Fee page 「出張(引取)点検費のご案内」: https://www.daikincc.com/faq/customer/web/knowledge2730.html
- Symptom pages: knowledge2733 / 2736 / 2732 / 2741 / 2737 / 2739 / 2744 / 2742 / 2735
- Index: https://www.daikincc.com/acceptNew/repair_price.html

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張点検費 (table and note) | 出張点検費8,500〜19,000円（修理しなくても発生） | OK | 「保証対象外の場合、サービスエンジニアが訪問、もしくは製品を引き取って点検を行いますと、その後お買い替え等で修理作業を行わなかった場合も下記の出張（引取）点検費が発生いたします。」「ルームエアコン 8,500～19,000円 （税込）」「出張点検費が二重に発生することはございません」 | https://www.daikincc.com/faq/customer/web/knowledge2730.html | 出張点検費8,500〜19,000円（保証対象外・修理しなくても発生） |
| 修理料金 | 症状別28,000〜105,000円／圧縮機交換等15〜20万円 | WRONG (lower bound) | The max of 105,000 and 「約15万～20万円程度」 are OK. However, several symptom pages start below 28,000円: ルーバー 「￥10,000～￥29,000程度（税込）」 (2739), パネル汚れ・破損 「￥12,000～36,000程度」 (2744), 水漏れ 「￥17,000～64,000程度」 (2737), ルーバー作動不良 「￥16,000～59,000程度」 (2739). | knowledge2739 / 2744 / 2737 | 症状別約10,000〜105,000円（主な故障は28,000円〜）／圧縮機交換等15〜20万円 |
| note: 運転しない28,000〜64,000円 | 〃 | OK | 「運転しない・運転中に止まる（修理金額）… 【修理目安金額】 ￥28,000～64,000程度(税込)」 | https://www.daikincc.com/faq/customer/web/knowledge2733.html | (no change) |
| note: 室内基板28,000〜37,000円 | 〃 | OK | Error code A1: 「A1 ￥28,000～37,000 … 【想定部品】室内機基板」 | https://www.daikincc.com/faq/customer/web/knowledge2732.html | 室内基板（エラーA1）28,000〜37,000円 |
| note: ファンモータ28,000〜80,000円 | 〃 | OK (needs context) | This matches error code A6: 「A6 ￥28,000～80,000 … ファンモ－タの不具合により停止 【想定部品】室内機基板、室内機ファン、ファンモータ」. The symptom page 「ファンが回らない」 gives different figures: 「＜室内機＞ ￥53,000～75,000程度」「＜室外機＞ ￥21,000～55,000程度」 (2741). | knowledge2732 ; knowledge2741 | ファンモータ（エラーA6）28,000〜80,000円 |
| note: ガス不足70,000〜105,000円 | 〃 | OK | 「＜冷媒系統部品＞ ￥70,000～105,000程度(税込)」 (2736); U0 「冷媒系統部品 ￥70,000～105,000」 (2732) | knowledge2736 ; knowledge2732 | (no change) |
| note: 「税込・出張料込み」 | 〃 | OK | 「本金額は保証期間が終了したお客様向けの出張修理金額（※１出張料・技術料（点検費含む）・部品代）の目安でございます。」 | knowledge2733 etc. | (no change) |

- companies.json avgCost 「出張料＋技術料＋部品代(正式額は点検後)」 is consistent (OK).

---

## 8. ヤマダ（テクニカルサービス） (yamada-repair)

Sources:
- https://www.yamada-denki.jp/service/repairs/
- https://yamada-ts.co.jp/service/repair/
- Old PDF: https://yamada-dws.jp/pdf/service/service_charge.pdf

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張料 | 出張料4,500円 | WRONG (no longer published) | Neither official page gives an amount. The only wording is 「訪問後にキャンセルをされた場合、訪問にかかった実費や診断料等をご負担いただくことがございます。」 | https://www.yamada-denki.jp/service/repairs/ | 金額の公式掲載なし（訪問後キャンセル時は実費・診断料等の負担あり） |
| 修理料金 | 冷房不良20,000円〜／水漏れ10,000円〜（公式PDF） | WRONG (PDF gone) | The old PDF now returns `301` and redirects to the yamada-ts.co.jp top page. The new site's repair pages contain no amounts at all (no 「円」 in the page text). The Wayback Machine last captured the PDF on 2024-12-11. | https://yamada-dws.jp/pdf/service/service_charge.pdf (→ https://yamada-ts.co.jp/) ; https://yamada-ts.co.jp/service/repair/ | 公式記載なし（2026年8月のサイト刷新で料金表の掲載終了） |
| 補足 | 運営はヤマダHDグループのYTS | OK | 「株式会社ヤマダテクニカルサービス … 訪問修理事業」 | https://yamada-ts.co.jp/service/repair/ | (optional) 運営はヤマダHDグループのYTS・土日祝も対応 (official: 「土・日・祝日にも対応可能」) |

- This aligns the table with the company page and companies.json (「料金は要問い合わせ」).

---

## 9. ケーズデンキ (ksdenki-repair)

Sources (live):
- https://www.ksdenki.co.jp/store/service/support_repair/
- https://www.ksdenki.co.jp/kshd/pages/support_repair.aspx
- https://www.ksdenki.com/shop/everyform/form.aspx?questionnaire=onsite_repair

On 2026-10-17 every curl request timed out with no response (`000`), and WebFetch timed out after 60 seconds. The site appears to block bots.

| field | current | verdict | official wording | source URL | suggested cell text |
|---|---|---|---|---|---|
| 出張料 | 金額記載なし | UNVERIFIABLE | The live site could not be read. | support_repair (above) | (no change; recheck by browser) |
| 修理料金 | 公式記載なし | UNVERIFIABLE | Same. | same | (no change) |
| 補足 | 見積後キャンセルで診断料の場合あり（保証外） | UNVERIFIABLE | Same. For reference only, the 10/15 note quotes the official page as archived on 2026-06-25: 「診断料、点検料、出張料がかかる場合があります」. This is not live and not used as a verdict. | same | (recheck by browser before any edit) |

---

## Cross-check notes
- epark: companies.json `name` is 「EPARK」, while the table and official site use 「EPARKくらしのレスキュー」.
- Daikin, unconfirmed: a search snippet showed an older figure 「ルームエアコン 5,610～12,760円」 on n-faq.daikincc.com (category 774). That page is rendered by JavaScript and the text could not be confirmed by curl. knowledge2730 (8,500～19,000円) is the current primary page.
