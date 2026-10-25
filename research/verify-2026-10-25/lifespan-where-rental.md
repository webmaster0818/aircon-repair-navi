# Fact-check 2026-10-25: lifespan / where-to-repair / rental-aircon-repair

Method: curl (browser UA) into /tmp/vf1025lwr, pdftotext for PDFs, e-Gov API v1 for 民法 text. Only official sources (manufacturer, retailer's own site, 内閣府, 国交省, 経産省, 国民生活センター, e-Gov) were used as evidence.

Paths: L = app/guide/lifespan/page.tsx, W = app/guide/where-to-repair/page.tsx, R = app/guide/rental-aircon-repair/page.tsx

| file | line | claim (page text) | official value (short verbatim quote) | URL | verdict |
|---|---|---|---|---|---|
| L | 7,9,18,54,73,95,108,208 | 平均使用年数13.6年（内閣府 消費動向調査） | 2023年3月調査: 「ルームエアコン（13.6 年）」. **最新 2026年3月調査: 「最も長いものはルームエアコン（13.4 年）」** (2025年3月調査は14.2年) | https://www.esri.cao.go.jp/jp/stat/shouhi/honbun202603.pdf / honbun202303.pdf | WRONG (outdated; the page gives no survey year and calls it 最新-equivalent) |
| L | 9,73,113,208 | 買替え理由 故障65.1% | 2023年調査: 「13.6 65.1」. **2026年3月調査 第5表: ルームエアコン 13.4／故障 66.6** | same as above | WRONG (outdated) |
| L | 109,207,208 | 13.6年・65.1%は「パナソニック公式ページ掲載値」 | 「平均使用年数は『13.6年※』…『故障（65.1％）』」「※…2023年調査分より」 | https://panasonic.jp/aircon/contents/replacement.html | OK (the citation is accurate, but Panasonic quotes the 2023 data) |
| L | 18,72,85-86 | 設計上の標準使用期間は多くのメーカーで壁掛け形10年。本体シールで確認できる | 「多くのメーカーで、壁掛け形エアコンの標準使用期間は『10年』に設定されていて、エアコン本体に貼ってあるシールなどの表示で確認することができます」 | https://panasonic.jp/aircon/contents/replacement.html | OK |
| L | 84-85 | 無償保証期間とは別物。標準的な使用条件のもと、製造年から安全上支障なく使用できる期間 | 「『無償保証期間』とは異なり、運転時間や温湿度など、標準的な使用条件に基づく経年劣化に対して、製造された年から安全上支障なく使用することができる標準的な期間です」 | same | OK |
| L | 89 | 期間を超えると経年劣化による発煙・発火などのリスクが高まる目安 | 経産省 長期使用製品安全表示制度: エアコンは対象製品。表示例「経年劣化による発火・けが等の事故に至るおそれがあります」 | https://www.meti.go.jp/product_safety/producer/shouan/07_tyouki.html ; https://www.meti.go.jp/policy/consumer/seian/denan/choki/choki02.pdf | UNSOURCED on page (the fact is supported by METI; add the citation and use 「発火・けが等」 rather than 「発煙・発火」) |
| L | 22,74,130-131 | 修理部品の保有期間＝製造打ち切り後おおむね10年（パナソニック公式解説＝買い替えページ） | 買い替えページ: 「『保有期間』を定めているメーカーもあります。製造から10年以上経ったエアコンを…部品がなく修理ができないこともあります」(it does not say 製造打ち切り後). Panasonic 保証ページ: 「エアコン 10年」「保有期間はその製品の製造を打ち切ったときから起算します」 | https://panasonic.jp/support/repair/warranty.html ; https://panasonic.jp/aircon/support.html | OK in substance, but the cited page is wrong. Change the source to the Panasonic 補修用性能部品保有期間 page (/support/repair/warranty.html) |
| L | 18 | 実際には13年前後まで使用する方が多い | The statistic is an average (平均使用年数); there is no distribution data | honbun202603.pdf | UNSOURCED wording (an average does not mean most people) |
| L | 30,176 | 判断基準「修理費が新品購入価格の半分を超えるかどうか」 | No official source found (the Daikin/Panasonic pages use years of use as the criterion) | — | UNSOURCED |
| L | 30,180 | 10年超は修理後も他部品が続けて故障する可能性・買い替えが有利 | Daikin: 「10年程度使ったエアコンは、修理より買い替えがおすすめです」 | https://www.ac.daikin.co.jp/customercenter/useful/article/7 | OK (cite Daikin) |
| W | 10,79,216-219,337 | ダイキン 本体1年・冷媒系統5年。冷媒系統＝現地配管を除く圧縮機、熱交換器および室内・室外ユニットの内配管 | 「お買い上げ日から 1年間 です。ただし、冷媒系統部分については5年間」「現地配管を除く圧縮機、熱交換器および室内ユニット、室外ユニットの内配管の部分」 | https://www.daikincc.com/faq/customer/web/knowledge2915.html | OK |
| W | 79,219,337 | パナソニック 本体1年・冷媒循環回路5年 | 「冷媒回路：保証期間５年 その他：保証期間１年」 | https://panasonic.jp/aircon/support.html | OK |
| W | 10,87,229-230,338 | ダイキン・パナソニック 補修用性能部品 製造打切り後10年 | Daikin: 「ルームエアコンの補修用性能部品の保有期限は製造打切り後10年」. Panasonic: 「エアコン 10年」「製造を打ち切ったときから起算」 | daikincc knowledge2915 ; https://panasonic.jp/support/repair/warranty.html | OK |
| W | 30,32 | ダイキン 0120-88-1081・24時間365日 | (verified 2026-10-17) | daikincc.com | OK (prior) |
| W | 31 | ダイキン Web修理申込あり | 「修理のご相談お申込み」 | https://www.daikin.co.jp/contact/consumer | OK |
| W | 37 | パナソニック 0120-878-554 | 「修理ご相談窓口 0120-878-554」 | https://panasonic.jp/aircon/support.html | OK |
| W | 37 | **（携帯: 0570-087-692）** | 0570-087-692 is listed under **商品相談窓口**: 「商品相談窓口…スマートフォン・携帯電話をご利用の方 0570-087-692（有料）固定電話をご利用の方 0120-878-692」. For the repair line the fallback is 「フリーダイヤルに接続できない場合：03-6633-6700(有料)」 | https://panasonic.jp/aircon/support.html | WRONG |
| W | 38-39 | パナソニック Web出張修理申込あり／9:00〜18:00・年中無休 | 「【受付時間】 9:00 – 18:00 年中無休」「出張修理サービス」 | same | OK |
| W | 44-46 | 三菱電機 お客さま相談センター 0120-139-365／WEBフォーム受付あり（三菱電機システムサービス） | 「0120-139-365（無料）」. Repair page: 「三菱電機修理受付センターにて、電話・FAX・WEBフォームでの修理のご依頼を承ります」 | https://www.mitsubishielectric.co.jp/lsg/kaden/support/support/ ; https://www.mitsubishielectric.co.jp/ldg/repair/ | OK |
| W | 46 | 相談センターは平日9:00〜19:00 | 「ご相談対応時間 平日 9：00～19：00 ※2026年4月1日より…土・日・祝・弊社休日は休業」 | https://www.mitsubishielectric.co.jp/lsg/kaden/support/support/ | OK (consider adding 「土日祝は休業」) |
| W | 51-53 | 日立 0120-3121-68（携帯0570-0031-68）／月〜土9-18・日祝9-17・時間外は自動音声 | 「TEL 0120-3121-68 携帯電話から 0570-0031-68（有料）」「9:00～18:00（月～土） 9:00～17:00（日・祝日、年末年始）」「自動音声による修理受付は、上記の営業時間以外もご利用が可能」 | https://kadenfan.hitachi.co.jp/support/inquiry/repair/consultation.html | OK |
| W | 57-60 | シャープ 0120-02-4649（携帯0570-550-447）／Web 24時間／月〜土9-18・日祝9-17 | 「フリーダイヤル 0120-02-4649 携帯電話からは、ナビダイヤル 0570-550-447」「Web修理申し込み…（24時間受付）」「月曜日～土曜日：午前9時～午後6時 日曜日・祝日：午前9時～午後5時」 | https://jp.sharp/support/rp_4649.html | OK |
| W | 64-67 | 東芝 0120-1048-76（有料 0570-0570-33）／Web受付（ルームエアコン対象）／月〜土9-18・日祝9-17 | 「0120-1048-76（フリーダイヤル） 0570-0570-33（有料）」「出張修理Web受付…（対象商品：冷蔵庫、洗濯機、ルームエアコン、電子レンジ）」「9:00～18:00（月～土）、9:00～17:00（日・祝日）」 | https://www.toshiba-lifestyle.com/jp/support/contact-onsite/ | OK |
| W | 83,243-244 | ヤマダ無料長期保証: 税込33,000円以上・4/6/11年・3年目まで技術工料・部品代・出張料、4年目以降は技術工料・購入時のみ加入 | Current terms (2025-09-01版): 「33,000円(税込)以上の…エアコン」「加入は、保証対象商品の購入と同時に限ります」「4年間・6年間・11年間」「購入後3年目まで『技術工料・部品代・出張料』、4年目以降は『技術工料』を保証」. 11年 is 「冷蔵庫・エアコンのみ」 | https://www.yamada-denki.jp/service/repairs/pdf/free/1_20250901.pdf | OK |
| W | 184 | 量販店の長期保証（5〜11年） | Yamada (the only retailer cited) offers 4年間 | same | WRONG / UNSOURCED (contradicts the page's own 4/6/11年) |
| W | 91 | 7〜8月の繁忙期は1週間以上待つ場合もあります | No official source cited | — | UNSOURCED |
| W | 269,348 | 国民生活センター 2026年6月3日公表「エアコン修理のトラブルに注意！」 | 「［2026年6月3日:公表］ エアコン修理のトラブルに注意！－ネット広告で『安い』『即日対応』の業者に…」 | https://www.kokusen.go.jp/news/data/n-20260603_1.html | OK |
| R | 30,126,172 | 民法606条1項 原文 | 「賃貸人は、賃貸物の使用及び収益に必要な修繕をする義務を負う。ただし、賃借人の責めに帰すべき事由によってその修繕が必要となったときは、この限りでない。」 | https://laws.e-gov.go.jp/document?lawid=129AC0000000089 | OK |
| R | 34,179-181 | 民法607条の2 原文 | 「…賃借人が賃貸人に修繕が必要である旨を通知し、又は賃貸人がその旨を知ったにもかかわらず、賃貸人が相当の期間内に必要な修繕をしないとき。二 急迫の事情があるとき。」 | same | OK |
| R | 38,188,272 | 民法608条1項 原文 | 「賃借人は、賃借物について賃貸人の負担に属する必要費を支出したときは、賃貸人に対し、直ちにその償還を請求することができる。」 | same | OK |
| R | 194,333 | e-Gov link elaws.e-gov.go.jp/document?lawid=… | 301 → https://laws.e-gov.go.jp/document?lawid=129AC0000000089 | — | OK (works through a redirect; updating the URL is recommended) |
| R | 143,207-208 | ガイドライン: 経年変化・通常損耗は賃貸人負担 | 「設備機器の故障、使用不能（機器の寿命によるもの）（考え方）経年劣化による自然損耗であり、賃借人に責任はないと考えられる」 | https://www.mlit.go.jp/common/001016469.pdf | OK |
| R | 209 | エアコンなど冷暖房機器は耐用年数6年 | 「●耐用年数6年のもの・冷房用、暖房用機器(エアコン、ルームクーラー、ストーブ等)」 | same | OK |
| R | 46 | エアコン内部洗浄の引用 | 「喫煙等による臭い等が付着していない限り、通常の生活において必ず行うとまでは言い切れず、賃借人の管理の範囲を超えているので、賃貸人負担とすることが妥当と考えられる」 | same | OK |
| R | 216 / 46 | 「清掃・手入れを怠った結果汚損が生じた場合は、賃借人の善管注意義務違反に該当すると判断されることが多い」 | The verbatim text exists, but in the guideline it is listed for 風呂・トイレ・洗面台 etc., not specifically for aircon. Aircon-specific: 「クーラーから水漏れし、賃借人が放置したため壁が腐食」 | same | OK (the quote is accurate; applying it to aircon is the site's own interpretation) |
| R | 257 | 水漏れ放置で壁や床を傷めると入居者責任 | 「水漏れを放置したり、その後の手入れを怠った場合は…善管注意義務違反と判断されることが多い」 | same | OK |
| R | 38,270 | 相当の期間＝「真夏の生活必需設備なら数日程度が目安とされます」／比較的短い期間で判断されると考えられています | No official source. 民法 says only 「相当の期間内」 | — | UNSOURCED |
| R | 42,153,223,297 | 残置物は大家に修繕義務なし・入居者負担が通例 | Page already says 「直接定めた公的資料は、当サイトでは確認しておりません」 | — | UNSOURCED (disclosed on page) |
