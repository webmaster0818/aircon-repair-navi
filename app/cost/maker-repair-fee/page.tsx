import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理の出張費・診断料はいくら？メーカー6社を横断比較【2026年公式実査】",
  description:
    "「見てもらうだけでいくら取られる？」に直答。ダイキン・パナソニック・三菱・日立・シャープ・東芝の出張料・診断料・修理キャンセル時の費用を各社公式サイトの実査値（2026年8月10日確認）で横断比較。症状別の修理概算と、無料見積もりの業者との使い分けも解説します。",
  alternates: { canonical: "/cost/maker-repair-fee/" },
};

const UPDATED = "2026年8月10日";

const feeTable = [
  {
    maker: "ダイキン",
    dispatch: "単体の公式掲載なし（修理目安金額に込み）",
    cancel: "出張（引取）点検費 8,500〜19,000円",
    holiday: "公式記載なし",
  },
  {
    maker: "パナソニック",
    dispatch: "出張料 4,950円",
    cancel: "見積後キャンセルでも出張料4,950円負担（宅配修理の診断料は1,100円）",
    holiday: "日曜・祝日・時間外の訪問指定は＋2,200円",
  },
  {
    maker: "三菱電機",
    dispatch: "単体の掲載なし（概算に出張料20km分込み）",
    cancel: "見積診断 5,390円",
    holiday: "公式記載なし",
  },
  {
    maker: "日立",
    dispatch: "出張料 3,850円",
    cancel: "見積後キャンセルは診断料＋出張料の合計5,830円",
    holiday: "公式記載なし",
  },
  {
    maker: "シャープ",
    dispatch: "出張診断料 9,020円（20km以内。10kmごとに＋550円・上限11,330円）",
    cancel: "修理しなくても出張診断料を負担",
    holiday: "公式記載なし",
  },
  {
    maker: "東芝",
    dispatch: "実額の公式掲載なし（技術料・部品代・出張料で構成と明記）",
    cancel: "見積後キャンセルで出張費負担（金額の掲載なし）",
    holiday: "公式記載なし",
  },
];

const symptomTable = [
  {
    symptom: "リモコンが効かない",
    range: "三菱 14,300〜26,400円／シャープ 12,000〜21,000円／東芝 10,000〜15,000円",
  },
  {
    symptom: "電源が入らない・風が出ない",
    range: "三菱 14,300〜30,800円／日立 40,000〜45,000円前後（高所設置はさらに高額）",
  },
  {
    symptom: "基板・電気系統の交換",
    range: "ダイキン 28,000〜46,000円程度／三菱 17,600〜52,800円／シャープ 18,000〜50,000円／東芝（室内基板）33,000〜36,000円",
  },
  {
    symptom: "冷えない（冷媒回路・圧縮機）",
    range: "ダイキン 70,000〜105,000円程度（溶接を伴う場合 約15万〜20万円）／三菱 23,100〜136,400円／シャープ 60,000〜98,000円／東芝 74,000〜126,000円／日立 117,000〜194,000円前後",
  },
  {
    symptom: "水漏れ（ドレン詰まり等）",
    range: "三菱 8,800〜26,400円／東芝 11,000〜16,000円",
  },
];

const faqs = [
  {
    q: "エアコンを見てもらうだけだと、いくらかかりますか？",
    a: "メーカーに点検だけ頼んで修理しなかった場合の費用（2026年8月10日公式確認）は、三菱電機が見積診断5,390円、日立が診断料＋出張料で5,830円、パナソニックが出張料4,950円、ダイキンが出張（引取）点検費8,500〜19,000円、シャープが出張診断料9,020円〜です。東芝は出張費負担と明記されていますが金額の公式掲載はありません。つまり「無料で見てもらえるメーカーはない」のが実情です。",
  },
  {
    q: "出張費が一番安いメーカーはどこですか？",
    a: "出張料単体の実額を公式掲載しているのは日立3,850円、パナソニック4,950円、シャープ9,020円（20km以内の出張診断料）です。ダイキン・三菱・東芝は修理概算に込みの形で、単体金額を公表していません。ただし最終的な支払額は技術料・部品代を含む総額で決まるため、出張料だけで選ぶのはおすすめしません。",
  },
  {
    q: "土日や夜間に来てもらうと高くなりますか？",
    a: "6社のうち休日・時間外の追加料金を公式に明記しているのはパナソニックのみで、日曜・祝日・営業時間外の訪問指定に指定料金2,200円が加算されます。他5社は該当する記載が確認できませんでした（2026年8月10日時点）。ただし訪問枠自体が埋まりやすいため、希望日時がある場合は早めの予約が確実です。",
  },
  {
    q: "見積もり無料で来てくれるところはないのですか？",
    a: "メーカーは点検・診断が有料ですが、修理業者には「出張・見積もり無料（施工しなければ費用なし）」をうたう会社があります。保証が切れたエアコンで費用を比較したい場合は、無料見積もりの業者に先に相場を確認する使い分けが有効です。ただし見積もり後の追加請求トラブルを避けるため、総額を書面で確認してから依頼してください。",
  },
  {
    q: "修理費が高額と言われました。買い替えるべきですか？",
    a: "冷媒回路や圧縮機の故障は各社とも6万〜20万円程度と高額です。製造から10年前後たっている場合は部品保有期間（製造打切り後10年）の問題もあるため、修理費が新品購入価格の半分を超えるようなら買い替えの検討をおすすめします。判断基準は「修理と買い替えどっちが得？」で詳しく解説しています。",
  },
];

export default function MakerRepairFeePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "料金", href: "/cost/repair-price/" },
          { name: "メーカー別の出張費・診断料", href: "/cost/maker-repair-fee/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">料金ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理の出張費・診断料はいくら？
            <br className="hidden md:block" />
            メーカー6社を横断比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            メーカーに修理を頼むとき、いちばん気になるのが
            <strong className="font-semibold text-slate-900">「見てもらうだけでいくら取られるのか」</strong>。
            この記事では、ダイキン・パナソニック・三菱電機・日立・シャープ・東芝の
            <strong className="font-semibold text-slate-900">6社の公式料金ページを{UPDATED}に実査</strong>し、
            出張料・診断料・キャンセル時の費用を1枚の表にまとめました。各社の公式掲載がない項目は「掲載なし」と正直に記載しています。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
            <p className="font-bold text-sky-800 mb-1">先に結論</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>・<strong>無料で点検してくれるメーカーはない</strong>（診断のみでも約4,000円〜19,000円）</li>
              <li>・出張料の実額を公表しているのは日立（3,850円）・パナソニック（4,950円）・シャープ（9,020円〜）の3社</li>
              <li>・休日・夜間の追加を明記しているのはパナソニックのみ（＋2,200円）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="fee-table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">出張費・診断料 横断比較表（{UPDATED}公式確認）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出張料</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">点検のみ・修理キャンセル時</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">休日・夜間の追加</th>
                  </tr>
                </thead>
                <tbody>
                  {feeTable.map((r) => (
                    <tr key={r.maker}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">{r.maker}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.dispatch}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.cancel}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.holiday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※金額はすべて税込。各社公式サイトの{UPDATED}時点の掲載値で、変更される場合があります。「公式記載なし」は該当ページに記載が確認できなかったことを意味し、費用が発生しないことを保証するものではありません。
            </p>
          </section>

          <section id="symptom" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">症状別の修理概算（各社公式の目安）</h2>
            <p className="leading-8 text-slate-700 mb-4">
              修理まで進んだ場合の概算です。各社とも<strong className="font-semibold">技術料・部品代・出張料込み</strong>の目安として公式掲載している金額を並べました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">症状</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">各社公式の概算（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  {symptomTable.map((r) => (
                    <tr key={r.symptom}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">{r.symptom}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7">{r.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※パナソニックは対話型の料金シミュレーターのみで静的な一覧の公式掲載がないため本表に含めていません。日立は室内機の設置状況（通常／高所等）で金額が変わります。ダイキンは「誤って冷媒ガスを放出させた場合はメーカー保証対象外」と明記しています。
            </p>
            <div className="mt-5 rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-5 text-sm leading-7">
              <p className="font-bold text-orange-700 mb-1">💡 冷媒回路の故障は「5年保証」をまず確認</p>
              <p>
                「冷えない」系の高額修理（6万〜20万円）の原因になりやすい冷媒回路は、
                <strong>購入から5年以内ならメーカー保証で無償になる可能性</strong>があります（ダイキン・パナソニック・三菱・シャープが公式明記）。
                詳しくは<Link href="/guide/warranty/" className="text-sky-700 underline underline-offset-2 font-semibold">保証期間まとめ</Link>へ。
              </p>
            </div>
          </section>

          <section id="vendor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「無料見積もり」の修理業者との使い分け</h2>
            <p className="leading-8 text-slate-700">
              メーカーの点検は有料ですが、修理業者には<strong className="font-semibold">出張・見積もり無料</strong>をうたう会社があります。
              保証が切れている場合は、先に無料見積もりで相場を把握してからメーカー費用と比べるのが合理的です。
              ただし、見積もり後の追加請求トラブルも報告されているため、<strong className="font-semibold">作業前に総額を書面で確認</strong>してから依頼しましょう。
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">見積もり無料の業者を比較する</p>
              <p className="text-sky-100 text-sm mb-5">料金・口コミ・対応スピードを確認日つきで比較しています。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                修理業者ランキングを見る
              </Link>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="rounded-2xl border border-slate-200 bg-white group">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-[0.95rem] hover:bg-slate-50">Q{i + 1}. {f.q}</summary>
                  <div className="px-5 pb-4 pt-2 text-sm leading-7 text-slate-700 border-t border-slate-100">{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">出典</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm leading-7 text-slate-600">
              <p className="mb-2">いずれも{UPDATED}に各社公式サイトで確認した掲載値です。</p>
              <ul className="space-y-1">
                <li>・ダイキン「製品別の修理目安金額」・公式FAQ（点検費・症状別概算）</li>
                <li>・パナソニック公式FAQ「修理にかかる料金は」「修理サービスの流れ」</li>
                <li>・三菱電機「修理料金の目安〈ルームエアコン〉」</li>
                <li>・日立「ルームエアコン 修理料金の目安」</li>
                <li>・シャープ「エアコン 出張修理概算料金」</li>
                <li>・東芝ライフスタイル「ルームエアコン 出張修理概算料金表」（2025年4月1日現在）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場【2026年】" },
                { href: "/guide/warranty/", label: "エアコンの保証期間まとめ（無料修理の条件）" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼む？使い分けガイド" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えどっちが得？判断基準" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
