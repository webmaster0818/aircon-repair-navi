import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import FelmatBanner from "@/app/components/FelmatBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/price-index/" },
  title: "エアコン修理 料金インデックス【2026年10月調査】24社の出張費・見積もり・公式掲載額",
  description:
    "エアコン修理・クリーニング24社の料金を、当サイトが各社の公式サイトで確認した一覧です（2026年10月17日確認）。出張費・見積もり無料の有無・最低料金・症状別の金額・クリーニング料金（9,800円〜26,400円）を、確認日とともに掲載しています。",
};

const SURVEY_DATE = "2026年10月17日";

const repairRows = [
  { name: "エアコントラブルセンター", slug: "aircon-trouble-center", trip: "無料", quote: "無料（施工依頼前のキャンセルは無料）", price: "8,800円〜（WEB限定クーポン1,000円引きの表示あり）", note: "全国加盟店ネットワーク型" },
  { name: "テイクサービス", slug: "take-service", trip: "無料", quote: "無料（器具の取り外し・通電チェック・漏電調査等は調査費用あり〈金額非公表〉）", price: "作業事例: 作業料金8,800円（基本料金込み）＋部品代5,500円＝14,300円（税込・公式の一例）", note: "24時間受付" },
  { name: "電気の工事屋さん", slug: "denki-koujiya", trip: "公式記載なし", quote: "無料（見積もり後の辞退可と記載）", price: "修理3,300円〜／冷媒ガス充填16,500円〜／水漏れ5,500円〜（いずれも税込）", note: "症状別の金額の公式掲載が最多" },
  { name: "ライフ救急車", slug: "life-kyukyusha", trip: "公式記載なし", quote: "原則無料（計測・分解等の調査は有料の場合あり。遠方・深夜の出張を希望した場合のキャンセル料は5,500円）", price: "作業費（調査・施工）5,500円〜＋部材費", note: "夜間料金が発生する場合ありと記載" },
  { name: "エアホーム", slug: "airhome-support", trip: "無料", quote: "無料（故障診断は別途料金の場合あり。作業確定前のキャンセルは無料）", price: "基本料金2,980円〜（通常6,000円）", note: "24時間365日受付（公称）" },
  { name: "生活110番", slug: "seikatsu110", trip: "公式記載なし", quote: "電話・メールの概算は無料（現地調査の無料対応は受付時に申し出。キャンセル料の記載なし）", price: "平均費用2.7万円（2019年11月更新・過去3年の利用料金から算出）", note: "紹介ポータル" },
  { name: "すまいのホットライン", slug: "sumai-hotline", trip: "出店者により異なる", quote: "出店者により異なる", price: "相場: ガス漏れ16,000〜19,000円／水漏れ11,000〜20,000円（1台あたり）", note: "マッチング型" },
  { name: "DENKI110", slug: "denki110", trip: "公式記載なし", quote: "見積もり後のキャンセル可・キャンセル料は原則なし（遠方・22時以降の深夜出張を除く。見積料の明記なし）", price: "エアコン修理の料金は公式記載なし（電気トラブル全般は作業費込み6,600円〜）", note: "作業完了後払い" },
];

const platformRows = [
  { name: "ミツモア", slug: "mitsumoa", trip: "業者により0円〜4,400円", quote: "無料（最大5件比較）", price: "相場6,000〜15,400円／ガス漏れ修理・補充15,000〜19,500円（2026年10月16日更新の公式相場）" },
  { name: "くらしのマーケット", slug: "kurashi-market", trip: "業者個別", quote: "原則不要（掲載料金で予約・一部例外あり）", price: "掲載価格10,000〜25,000円（調査日時点・一覧1ページ目50件）" },
  { name: "EPARKくらしのレスキュー", slug: "epark", trip: "無料の業者多数（点検費を設定する業者もあり）", quote: "無料の業者多数", price: "最低2,200円〜（施工費・掲載業者例）／ガス補充8,800円〜（掲載業者例）" },
  { name: "ユアマイスター", slug: "yourmystar", trip: "記載なし", quote: "訪問診断で確定（無料・有料の記載なし）", price: "業者個別（修理の掲載価格なし。再発保証の有無は業者ごと）" },
  { name: "ゼヒトモ", slug: "zehitomo", trip: "業者個別", quote: "依頼・提案の受け取りは無料（見積もりのみで調査費を設定するプロあり）", price: "故障内容別の目安0.6〜13万円（公式掲載）" },
];

const makerRows = [
  { name: "パナソニック出張修理", slug: "panasonic-repair", trip: "出張料4,950円（訪問後キャンセルでも発生）", price: "品番検索型（修理診断ナビ）", extra: "時間外・休日の時間指定+2,200円" },
  { name: "ダイキン", slug: "daikin-cc", trip: "出張点検費8,500〜19,000円（保証対象外・修理しなくても発生）", price: "症状別 約10,000〜105,000円（主な故障は28,000円〜）／圧縮機交換等15〜20万円", extra: "公式の症状別概算が最も詳細" },
  { name: "ヤマダ（テクニカルサービス）", slug: "yamada-repair", trip: "金額の公式掲載なし（訪問後キャンセル時は出張費・診断料等の負担あり）", price: "公式記載なし（以前の料金表PDFは掲載終了）", extra: "運営はヤマダHDグループのYTS" },
  { name: "ケーズデンキ", slug: "ksdenki-repair", trip: "金額記載なし（2026年7月7日確認）", price: "公式記載なし（同上）", extra: "見積後キャンセルで診断料の場合あり（保証外）。10月17日は公式サイトに接続できず未確認" },
];

const cleaningRows = [
  { name: "おそうじ革命", slug: "osouji-kakumei", normal: "9,980円", robot: "18,700円", extra: "追加料金絶対なし宣言・全国対応" },
  { name: "おそうじラボ", slug: "osoji-labo", normal: "9,800円（初回8,800円）", robot: "18,000円", extra: "出張・駐車無料（大阪中心）" },
  { name: "セイフウ", slug: "seifu-ac", normal: "13,200円", robot: "18,700円", extra: "現地見積不要の一律制" },
  { name: "カジタク", slug: "kajitaku", normal: "14,300円（ライト10,780円）", robot: "25,080円", extra: "通常価格。期間の記載がない割引価格の表示あり（11,880円・ライト9,700円・お掃除機能付き18,980円）。駐車料金カジタク負担・イオングループ" },
  { name: "ハッピーベアーズ", slug: "happy-bears", normal: "14,190円", robot: "21,780円", extra: "敷地内に駐車場が無い場合は駐車料金の一部（1,018〜2,037円）を利用者負担・39都道府県" },
  { name: "ダスキン", slug: "duskin-servicemaster", normal: "15,400円", robot: "26,400円", extra: "土日祝夜間は追加の場合あり・全国1,208店" },
  { name: "Rクリーニング", slug: "r-cleaning", normal: "19,350円（キャンペーン時10,780円）", robot: "24,750円（同18,700円）", extra: "キャンペーンは10月31日受付分まで（10月21日公式確認）・関東" },
];

export default function PriceIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "費用・料金", href: "/cost/repair-price/" }, { name: "料金インデックス", href: "/cost/price-index/" }]} />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-xs font-bold text-sky-600 tracking-widest mb-2">PRICE INDEX — 当サイト調査の一次データ</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">エアコン修理 料金インデックス【2026年10月調査】</h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-2">
          ランキング掲載26社のうち24社の料金・費用条件を、<strong>当サイトが各社の公式サイトで直接確認</strong>し、一覧にしています（確認日: {SURVEY_DATE}）。外部サイトの相場の引用ではなく、出典を照合できる一次データです。「公式記載なし」は、その項目が公式サイトで公表されていないことを示します（電話・見積もりでの確認が必要です）。
        </p>
        <p className="text-xs text-slate-400 mb-8">※料金は税込で、変更される場合があります。仲介サイトの掲載価格は確認日時点の表示であり、掲載業者の入れ替えにより変動します。</p>

        {/* 結論 */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-slate-900 mb-3">確認の結果明らかになった3つの点</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>1. <strong>「出張費・見積もり無料」を公式に明記しているかどうかが、比較の重要な基準となります</strong>。修理系で明記があるのは、修理系の一部（エアコントラブルセンター・テイクサービス・エアホーム等）とEPARK掲載業者の一部に限られます。</li>
            <li>2. <strong>メーカー修理は、修理を行わない場合にも費用が発生します</strong>。ダイキンは出張点検費8,500〜19,000円、パナソニックは出張料4,950円が修理キャンセル時にも発生します（各社公式に明記）。一方で、ダイキンの症状別概算（約10,000〜105,000円・主な故障は28,000円〜）は、確認した範囲で最も詳細です。</li>
            <li>3. <strong>症状別の金額を公式に掲載している修理業者は少数です</strong>（電気の工事屋さん: 修理3,300円〜・ガス充填16,500円〜等）。低価格を掲げる業者でも金額を公開していない場合が多いため、お電話の際は「出張費・見積もり・キャンセル料の3点」をご確認ください。</li>
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
            heading="出張費・見積もり無料で費用を確認できる窓口（エアコントラブルセンター）"
            note="24時間受付で、全国2,000社の加盟店ネットワークを持つサービスです。無料相談で、症状と費用の目安を確認できます。"
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
                  <th className="px-3 py-2.5 text-left">価格帯（調査日時点）</th>
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
          <p className="text-xs text-slate-500 mt-2">ダイキン公式の症状別概算（税込・出張料込み）: 運転しない28,000〜64,000円／室内基板28,000〜37,000円／ファンモータ28,000〜80,000円／ガス不足（冷媒系統）70,000〜105,000円。エラーコード別の詳細は<Link href="/company/daikin-cc/" className="text-sky-600 underline">ダイキンのページ</Link>をご覧ください。</p>
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
          <p className="text-xs text-slate-500 mt-2">※セーフリー・いえなかまは業者マッチングサイト（自社施工なし）のため、本表には含めていません。分解洗浄の通常価格の安い順は、おそうじラボ9,800円、おそうじ革命9,980円、セイフウ13,200円です（{SURVEY_DATE}時点）。</p>
          <FelmatBanner
            slug="osoji-labo"
            heading="大阪・兵庫のエアコンクリーニング（おそうじLabo）"
            note="すべて自社作業（100%）で、初回限定価格を設けています。最新の料金と予約可能日は公式サイトで確認できます。"
          />
        </section>

        {/* 使い方 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">本データの活用方法（3ステップ）</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["1", "症状別の相場の把握", "ガス系は掲載業者例の8,800円〜からダイキン概算の10.5万円まで幅があります（軽度はガス補充のみ、重度は冷媒系統の修理）。症状別ページで該当する症状をご確認ください。"],
              ["2", "無料を明記した業者への問い合わせ", "出張費・見積もり無料を公式に明記している業者からお問い合わせいただくことをおすすめします。お電話の際は、出張費・見積もり・キャンセル料の3点をご確認ください。"],
              ["3", "メーカー窓口との比較", "保証期間内の場合や高級機の場合は、メーカーへの依頼をおすすめします。保証期間外では、修理を行わない場合にも点検費（ダイキン8,500円〜等）が発生する点にご注意ください。"],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] text-white font-bold flex items-center justify-center mb-3">{n}</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 更新履歴 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-3">更新履歴</h2>
          <ul className="text-sm text-slate-600 space-y-1 bg-slate-50 rounded-xl p-5 border border-slate-200">
            <li>・2026年7月7日: 初回調査（当時の掲載27社の公式サイトを直接確認して公開）</li>
            <li>・2026年10月17日: 23社を公式サイトで再確認し、誤っていた値・掲載が終わった値を更新（ヤマダの料金表は掲載終了、ミツモア・EPARK・くらしのマーケット・ゼヒトモの価格帯を更新、テイクサービス・ライフ救急車の公式掲載額を追記、エアホームを追加）。ケーズデンキは公式サイトに接続できず、7月の確認内容のままです</li>
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
            <p className="text-xs text-slate-500 mt-1">2026年10月更新・26社比較</p>
          </Link>
          <Link href="/ranking/fast/" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-colors">
            <p className="font-bold text-slate-900 text-sm">即日対応の業者ランキング</p>
            <p className="text-xs text-slate-500 mt-1">即日修理の依頼方法・24時間受付</p>
          </Link>
        </div>
      </div>
    </>
  );
}
