# 春日井市（slug: kasugai）city-facts 証跡

- 対象: 春日井市公式サイト（www.city.kasugai.lg.jp）のみ
- 確認日 2026年11月21日
- 方法: `curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"` で取得を試行。URL の候補探しに Web 検索を使用。

## 結果: 公式サイトが取得できなかったため、3項目すべて確認できず

春日井市公式サイトは Imperva Incapsula のボット対策で全リクエストが拒否され、本文を1ページも取得できなかった。

試したこと（すべて失敗）:
- curl（Chrome UA）: トップ `https://www.city.kasugai.lg.jp/` が 307/302 で自分自身へリダイレクトを繰り返し、curl が exit 47（リダイレクト上限）で終了
- curl（Chrome UA＋cookie jar）: HTTP 403、本文は「Request unsuccessful. Incapsula incident ID: 442000230096833032-232648689007068660」
- curl（Accept / Accept-Language / sec-ch-ua / Sec-Fetch-* などブラウザのヘッダー一式）: HTTP 403（同じブロックページ）
- curl（iPhone Safari UA・Mac Safari UA、HTTP/1.1）で `/kurashi/index.html`: HTTP 403
- WebFetch: 「Too many redirects (exceeded 10)」
- ローカルの Google Chrome（headless, --dump-dom）: Incapsula のブロックページ（約900バイト）のみ

これ以上の回避（ボットのふりなど）はしていない。Web 検索でも city.kasugai.lg.jp のページはほぼ出てこず（site: 指定でも0件）、候補 URL は得られなかった。

## 保存テキスト対応表（/tmp/cf1121v/）

| ファイル | URL |
|---|---|
| kasugai-1.txt | https://www.city.kasugai.lg.jp/ （HTTP 403 の Incapsula ブロックページをそのまま保存。証跡用で、市の掲載内容ではない） |

## 1. 使わなくなったエアコンの処分

- URL: 確認できず（公式サイトが 403 のため、該当ページを特定・取得できなかった）
- ページタイトル: 確認できず
- 更新日: 確認できず
- 取得: https://www.city.kasugai.lg.jp/ → HTTP 403（Incapsula）
- 引用: なし
- 理由: 公式ページの本文を取得できなかった。

## 2. 修理トラブルの相談先（消費生活センター）

- URL: 確認できず
- ページタイトル: 確認できず
- 更新日: 確認できず
- 取得: https://www.city.kasugai.lg.jp/ → HTTP 403（Incapsula）
- 引用: なし
- 理由: 公式ページの本文を取得できなかった。
- 注記（掲載には使わない）: Web 検索の結果では、愛知県（pref.aichi.jp）の資料に春日井市の窓口の記載があった。ただし県の資料で版が古い可能性があり、市公式ページで確かめられていないため、電話番号・住所・受付時間はここに書かない。

## 3. エアコン購入の補助（令和8年度・市の制度）

- 結論: 確認できず
- 確認したページ: なし（公式サイトが 403 のため。トップ https://www.city.kasugai.lg.jp/ と /kurashi/index.html はどちらも 403）
- 補足: Web 検索（「春日井市 エアコン 補助金 令和8年度」「春日井市 エアコン 購入 助成 OR 省エネ家電 買い替え 補助 OR ポイント」）では、春日井市のエアコン購入補助の公式ページは見つからなかった。民間の地域情報サイトに「住宅用地球温暖化対策機器設置費補助」の言及があるが、市公式で確かめられていない上、エアコンが対象かもわからないため、根拠にはしない。

## 次にやること（提案）

- 普通のブラウザ（人が操作するもの）で公式サイトを開き、ごみ（家電リサイクル）・消費生活センター・環境政策課の補助金のページの URL と本文を控える。または、別の回線（別機体）から curl で取り直す。
