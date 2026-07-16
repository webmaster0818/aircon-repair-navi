import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/price-index/" },
  title: "エアコン修理 料金インデックス【2026年7月実査】27社の出張費・見積・実額を当サイトが公式確認",
  description:
    "エアコン修理・クリーニング27社の料金を当サイトが各社公式サイトで実査（2026年7月7日確認）。出張費・見積無料の有無・最低料金・症状別実額（ダイキン公式28,000〜105,000円等）・クリーニング料金（9,800円〜26,400円）を確認日付きで一覧化した一次データ集です。",
};

const SURVEY_DATE = "2026年7月7日";

const repairRows = [
  { name: "エアコントラブルセンター", slug: "aircon-trouble-center", trip: "無料", quote: "無料（依頼前キャンセル無料）", price: "8,800円〜（WEBクーポン1,000円OFF）", note: "全国加盟店ネットワーク型" },
  { name: "テイクサービス", slug: "take-service", trip: "無料", quote: "無料（特殊調査は有料・金額非公表）", price: "公式記載なし", note: "24時間受付" },
  { name: "電気の工事屋さん", slug: "denki-koujiya", trip: "記載なし", quote: "0円明記", price: "修理3,300円〜／ガス充填16,500円〜／水漏れ5,500円〜", note: "症状別実額の公式掲載が最多" },
  { name: "ライフ救急車", slug: "life-kyukyusha", trip: "記載なし", quote: "原則無料（遠方・深夜キャンセルは5,500円）", price: "公式記載なし", note: "夜間料金の可能性の記載あり" },
  { name: "生活110番", slug: "seikatsu110", trip: "記載なし", quote: "記載なし", price: "平均相場2.7万円（2019年集計の注記あり）", note: "紹介ポータル" },
  { name: "すまいのホットライン", slug: "sumai-hotline", trip: "記載なし", quote: "記載なし", price: "相場: ガス漏れ16,000〜19,000円／水漏れ11,000〜20,000円", note: "マッチング型" },
  { name: "電気110番", slug: "denki110", trip: "記載なし", quote: "見積後キャンセル可（無料の明記なし）", price: "公式記載なし", note: "作業完了後払い" },
];

const platformRows = [
  { name: "ミツモア", slug: "mitsumoa", trip: "業者により0円〜4,400円", quote: "無料（最大5件比較）", price: "相場6,000〜15,800円／ガス漏れ14,400〜19,000円" },
  { name: "くらしのマーケット", slug: "kurashi-market", trip: "業者個別", quote: "記載なし", price: "掲載価格11,000〜22,000円（実査日時点）" },
  { name: "EPARKくらしのレスキュー", slug: "epark", trip: "無料の業者多数", quote: "無料の業者多数", price: "最低3,300円〜／ガス補充7,700円〜" },
  { name: "ユアマイスター", slug: "yourmystar", trip: "記載なし", quote: "記載なし", price: "業者個別ページ制（再発1ヶ月無償の記載）" },
  { name: "ゼヒトモ", slug: "zehitomo", trip: "記載なし", quote: "記載なし", price: "相場記事: 修理約2〜5万円" },
];

const makerRows = [
  { name: "パナソニック出張修理", slug: "panasonic-repair", trip: "出張料4,950円（訪問後キャンセルでも発生）", price: "品番検索型（修理診断ナビ）", extra: "時間外・休日の時間指定+2,200円" },
  { name: "ダイキン", slug: "daikin-cc", trip: "出張点検費8,500〜19,000円（修理しなくても発生）", price: "症状別28,000〜105,000円／圧縮機交換等15〜20万円", extra: "公式の症状別概算が最も詳細" },
  { name: "ヤマダ（テクニカルサービス）", slug: "yamada-repair", trip: "出張料4,500円", price: "冷房不良20,000円〜／水漏れ10,000円〜（公式PDF）", extra: "運営はヤマダHDグループのYTS" },
  { name: "ケーズデンキ", slug: "ksdenki-repair", trip: "金額記載なし", price: "公式記載なし", extra: "見積後キャンセルで診断料の場合あり（保証外）" },
];

const cleaningRows = [
  { name: "おそうじ革命", slug: "osouji-kakumei", normal: "9,980円", robot: "18,700円", extra: "追加料金絶対なし宣言・全国対応" },
  { name: "おそうじラボ", slug: "osoji-labo", normal: "9,800円（初回8,800円）", robot: "18,000円", extra: "出張・駐車無料（大阪中心）" },
  { name: "セイフウ", slug: "seifu-ac", normal: "13,200円", robot: "18,700円", extra: "現地見積不要の一律制" },
  { name: "カジタク", slug: "kajitaku", normal: "14,300円（ライト10,780円）", robot: "25,080円", extra: "駐車料金カジタク負担・イオングループ" },
  { name: "ハッピーベアーズ", slug: "happy-bears", normal: "14,190円", robot: "21,780円", extra: "駐車代一部負担例あり・39都道府県" },
  { name: "ダスキン", slug: "duskin-servicemaster", normal: "15,400円", robot: "26,400円", extra: "土日祝夜間は追加の場合あり・全国1,208店" },
  { name: "Rクリーニング", slug: "r-cleaning", normal: "19,350円（キャンペーン時10,780円）", robot: "24,750円（同17,600円）", extra: "キャンペーンは期限付き・関東" },
];

export default function PriceIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "費用・料金", href: "/cost/repair-price/" }, { name: "料金インデックス", href: "/cost/price-index/" }]} />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-xs font-bold text-sky-600 tracking-widest mb-2">PRICE INDEX — 当サイト実査の一次データ</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">エアコン修理 料金インデックス【2026年7月実査】</h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-2">
          掲載27社の料金・費用条件を、<strong>当サイトが各社公式サイトで直接確認</strong>して一覧化しました（確認日: {SURVEY_DATE}）。外部サイトの相場引用ではなく、出典を照合できる一次データです。「公式記載なし」はその項目を公式サイトが公表していないことを意味します（＝電話・見積で確認が必要）。
        </p>
        <p className="text-xs text-slate-400 mb-8">※料金は税込・変更される場合があります。仲介サイトの掲載価格は実査日時点の表示で、掲載業者の入替により変動します。</p>

        {/* 結論 */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-slate-900 mb-3">実査でわかった3つの結論</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>1. <strong>「出張費・見積無料」を公式に明記しているかが最大の分かれ目</strong>。27社中、明記があるのは修理系の一部（エアコントラブルセンター・テイクサービス・電気の工事屋さん等）とEPARK掲載業者に限られます。</li>
            <li>2. <strong>メーカー修理は「修理しなくても費用が出る」</strong>。ダイキンは出張点検費8,500〜19,000円、パナソニックは出張料4,950円が修理キャンセル時にも発生します（各公式明記）。そのぶんダイキンの症状別概算（28,000〜105,000円）は業界で最も詳細です。</li>
            <li>3. <strong>症状別の実額を公式掲載している修理業者は少数派</strong>（電気の工事屋さん: 修理3,300円〜・ガス充填16,500円〜等）。「安さ」をうたう業者でも実額非公開が多いため、電話時に「出張費・見積・キャンセル料の3点」を必ず確認しましょう。</li>
          </ul>
        </div>

        {/* 修理業者 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">修理業者系（出張費・見積・最低料金）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden min-w-[720px]">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-3 py-2.5 text-left">業者</th>
                  <th className="px-3 py-2.5 text-left">出張費</th>
                  <th className="px-3 py-2.5 text-left">見積もり</th>
                  <th className="px-3 py-2.5 text-left">公式掲載の料金</th>
                </tr>
              </thead>
              <tbody>
                {repairRows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2.5 font-bold whitespace-nowrap"><Link href={`/company/${r.slug}/`} className="text-sky-700 hover:underline">{r.name}</Link></td>
                    <td className="px-3 py-2.5">{r.trip}</td>
                    <td className="px-3 py-2.5">{r.quote}</td>
                    <td className="px-3 py-2.5">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FelmatBanner
            slug="aircon-trouble-center"
            heading="出張費・見積無料で確認するなら（エアコントラブルセンター）"
            note="24時間受付・全国2,000社以上の加盟店ネットワーク。まずは無料相談で症状と費用の目安を確認できます。"
          />
        </section>

        {/* 仲介 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">仲介・マッチング系（プラットフォーム掲載価格）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden min-w-[680px]">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-3 py-2.5 text-left">サービス</th>
                  <th className="px-3 py-2.5 text-left">出張費・診断料</th>
                  <th className="px-3 py-2.5 text-left">見積もり</th>
                  <th className="px-3 py-2.5 text-left">価格帯（実査日時点）</th>
                </tr>
              </thead>
              <tbody>
                {platformRows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2.5 font-bold whitespace-nowrap"><Link href={`/company/${r.slug}/`} className="text-sky-700 hover:underline">{r.name}</Link></td>
                    <td className="px-3 py-2.5">{r.trip}</td>
                    <td className="px-3 py-2.5">{r.quote}</td>
                    <td className="px-3 py-2.5">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* メーカー・量販 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">メーカー・量販店系（出張料と症状別概算）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden min-w-[680px]">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-3 py-2.5 text-left">窓口</th>
                  <th className="px-3 py-2.5 text-left">出張料・点検費</th>
                  <th className="px-3 py-2.5 text-left">修理料金（公式）</th>
                  <th className="px-3 py-2.5 text-left">補足</th>
                </tr>
              </thead>
              <tbody>
                {makerRows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2.5 font-bold whitespace-nowrap"><Link href={`/company/${r.slug}/`} className="text-sky-700 hover:underline">{r.name}</Link></td>
                    <td className="px-3 py-2.5">{r.trip}</td>
                    <td className="px-3 py-2.5">{r.price}</td>
                    <td className="px-3 py-2.5">{r.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">ダイキン公式の症状別概算（税込・出張料込み）: 運転しない28,000〜64,000円／室内基板28,000〜37,000円／ファンモータ28,000〜80,000円／ガス不足（冷媒系統）70,000〜105,000円。エラーコード別の詳細は<Link href="/company/daikin-cc/" className="text-sky-600 underline">ダイキンのページ</Link>へ。</p>
        </section>

        {/* クリーニング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-sky-500">クリーニング系（壁掛け通常／お掃除機能付き）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden min-w-[680px]">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-3 py-2.5 text-left">業者</th>
                  <th className="px-3 py-2.5 text-left">壁掛け通常</th>
                  <th className="px-3 py-2.5 text-left">お掃除機能付き</th>
                  <th className="px-3 py-2.5 text-left">追加費用の扱い</th>
                </tr>
              </thead>
              <tbody>
                {cleaningRows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2.5 font-bold whitespace-nowrap"><Link href={`/company/${r.slug}/`} className="text-sky-700 hover:underline">{r.name}</Link></td>
                    <td className="px-3 py-2.5 font-semibold text-orange-600">{r.normal}</td>
                    <td className="px-3 py-2.5">{r.robot}</td>
                    <td className="px-3 py-2.5">{r.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※セーフリー・いえなかまは業者マッチングサイト（自社施工なし）のため本表から除外しています。安値順: おそうじラボ9,800円→おそうじ革命9,980円→セイフウ13,200円…（{SURVEY_DATE}時点の通常価格）。</p>
          <FelmatBanner
            slug="osoji-labo"
            heading="大阪・兵庫でクリーニングを頼むなら（おそうじLabo）"
            note="100%自社作業・初回限定価格あり。最新の料金と予約可能日を公式サイトで確認できます。"
          />
        </section>

        {/* 使い方 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">このデータの使い方（3ステップ）</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["1", "症状で相場を掴む", "ガス系は1.4万〜10.5万円と幅が大きい（軽度=ガス補充のみ、重度=冷媒系統修理）。まず症状別ページで自分のケースを確認。"],
              ["2", "「無料明記」の業者から当たる", "出張費・見積無料を公式に明記している業者から電話するのが安全。電話では出張費・見積・キャンセル料の3点を必ず確認。"],
              ["3", "メーカー窓口と比べる", "保証期間内・高級機はメーカーへ。保証外は点検費（ダイキン8,500円〜等）が修理しなくても発生する点だけ注意。"],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mb-3">{n}</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 更新履歴 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-3">更新履歴（毎月更新）</h2>
          <ul className="text-sm text-slate-600 space-y-1 bg-slate-50 rounded-xl p-5 border border-slate-200">
            <li>・2026年7月7日: 初回実査（27社の公式サイトを直接確認して公開）</li>
          </ul>
        </section>

        {/* 関連リンク */}
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/cost/repair-price/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-colors">
            <p className="font-bold text-slate-900 text-sm">症状別の修理費用相場</p>
            <p className="text-xs text-slate-500 mt-1">ガス補充・水漏れ・基板交換の目安</p>
          </Link>
          <Link href="/ranking/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-colors">
            <p className="font-bold text-slate-900 text-sm">修理業者ランキング</p>
            <p className="text-xs text-slate-500 mt-1">2026年7月更新・10社比較</p>
          </Link>
          <Link href="/ranking/fast/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-colors">
            <p className="font-bold text-slate-900 text-sm">今日直したい方はこちら</p>
            <p className="text-xs text-slate-500 mt-1">即日修理の頼み方・24時間受付</p>
          </Link>
        </div>
      </div>
    </>
  );
}
