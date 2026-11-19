import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのファンモーター交換費用｜日立・東芝・ダイキンの公式修理料金目安（室内機・室外機）【2026年11月確認】",
  description:
    "エアコンのファンモーター交換費用をメーカー公式の修理料金目安で確認しました。室内は東芝24,000〜34,000円・日立41,000〜56,000円前後、室外は東芝26,000〜31,000円・日立39,000〜54,000円前後（税込）です。設置場所による差と部品の保有期間も掲載しています。",
  alternates: { canonical: "/cost/fan-motor/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンのファンモーター交換の費用はいくらですか？",
    a: "メーカーに直接依頼した場合の公式の目安（税込）は、室内ファンモーターが東芝24,000〜34,000円、日立41,000〜56,000円前後（通常設置）、室外ファンモーターが東芝26,000〜31,000円、日立39,000〜54,000円前後（平地置き）です（2026年11月20日確認）。日立は技術料・部品代・出張料の合計と明記しています。機種や設置状況により金額は変わります。",
  },
  {
    q: "室外機が高い所にあると費用は上がりますか？",
    a: "日立の修理料金目安では、室外ファンモーターは平地置きで39,000〜54,000円前後、天吊り・壁掛け・屋根置きで56,000〜71,000円前後と、設置場所で約17,000円の差があります。室内ファンモーターも高所設置では59,000〜74,000円前後です（税込・2026年11月20日確認）。",
  },
  {
    q: "ファンが回らない場合、必ずファンモーターの交換になりますか？",
    a: "いいえ。ダイキンは「ファンが回らない」場合の想定交換部品として、室内機はプリント基板・クロスフローファン・ファンモータ、室外機はプリント基板・プロペラファン・ファンモータを挙げています。原因の部品によって費用が変わるため、点検で原因を特定してから見積もりを確認してください。",
  },
  {
    q: "古いエアコンでもファンモーターを交換できますか？",
    a: "メーカー各社は、ルームエアコンの補修用性能部品の保有期間を製造打ち切り後10年としています（ダイキン・日立・東芝ほか）。この期間を過ぎると部品が手に入らず、修理できない場合があります。",
  },
  {
    q: "シャープ・三菱電機・パナソニックのファンモーター交換の料金は載っていますか？",
    a: "2026年11月20日時点で、シャープと三菱電機の公式の修理料金目安は症状別の表で、ファンモーターの項目はありませんでした。パナソニックは型番を入力して目安を確認する方式で、公開ページには金額の掲載がありませんでした。これらのメーカーは、型番を伝えて見積もりを依頼してください。",
  },
];

const feeRows = [
  {
    maker: "東芝",
    indoor: "24,000〜34,000円",
    outdoor: "26,000〜31,000円",
    note: "税込。修理料金は技術料・部品代・出張料などで構成（2025年4月1日現在の表）",
  },
  {
    maker: "日立",
    indoor: "41,000〜56,000円前後（高所設置 59,000〜74,000円前後）",
    outdoor: "39,000〜54,000円前後（天吊り・壁掛け・屋根置き 56,000〜71,000円前後）",
    note: "税込。技術料・部品代・出張料（3,850円）の合計",
  },
  {
    maker: "ダイキン",
    indoor: "51,000〜98,000円程度（「ファンが回らない」の修理金額）",
    outdoor: "37,000〜79,000円程度（同）",
    note: "税込。出張料・技術料（点検費含む）・部品代。基板・ファン本体の交換も含む幅で、ファンモーター単独の額ではありません",
  },
];

export default function FanMotorCostPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用・比較", href: "/cost/repair-price/" },
          { name: "ファンモーター交換費用", href: "/cost/fan-motor/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">費用ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのファンモーター交換費用
            <br className="hidden md:block" />
            メーカー公式の修理料金目安で比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            メーカーに直接依頼した場合のファンモーター交換の目安は、<strong className="font-semibold text-slate-900">室内機で約2.4万〜5.6万円、室外機で約2.6万〜5.4万円（税込・通常の設置場所）</strong>です。
            室外機が壁掛けや屋根置きの場合は、日立の目安で約1.7万円高くなります。
            本記事では、当サイトが{UPDATED}にメーカー各社の公式の修理料金目安を確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">ファンモーター交換の公式目安（税込・{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>室内ファンモーター：<strong>東芝 24,000〜34,000円／日立 41,000〜56,000円前後</strong></li>
              <li>室外ファンモーター：<strong>東芝 26,000〜31,000円／日立 39,000〜54,000円前後</strong></li>
              <li>室外機が天吊り・壁掛け・屋根置き：<strong>日立 56,000〜71,000円前後</strong></li>
              <li>部品の保有期間：<strong>製造打ち切り後10年</strong>（各社共通）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="fee" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー公式のファンモーター交換費用の比較</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ファンモーターの交換費用を公式に掲載していたのは東芝と日立です。ダイキンは「ファンが回らない」症状の修理金額として掲載しています。同じ項目でそろえました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">室内ファンモーター</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">室外ファンモーター</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">含まれる費用・注意</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r) => (
                    <tr key={r.maker}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.maker}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.indoor}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.outdoor}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。各社公式サイトの家庭用ルームエアコンの修理料金目安です。保証期間が終了した製品を、メーカーに直接依頼した場合の目安で、機種・設置状況・作業内容により金額は変わります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              東芝と日立の差は、室内ファンモーターで下限17,000円、室外ファンモーターで下限13,000円です。料金の内訳の示し方が各社で異なるため、依頼の際は出張料が含まれているかもあわせてご確認ください。
              東芝は、作業人員が2名以上となる場合は増加人数分の出張料が加算されるとしています。
            </p>
          </section>

          <section id="other" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ほかのメーカーの掲載状況</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>シャープ</strong>：症状別の修理金額の表で、ファンモーターの項目はありません。修理金額は技術料・部品代・出張料を含むおおよその目安とされています</li>
              <li><strong>三菱電機</strong>：症状別の表で、ファンモーターの項目はありません。金額は技術料・部品代・出張料（基本料金20kmまで）を含むとされています</li>
              <li><strong>パナソニック</strong>：型番を入力して目安を確認する方式で、公開ページには金額の掲載がありませんでした</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              各社の出張料・診断料・キャンセル時の費用は、<Link href="/cost/maker-repair-fee/" className="text-sky-700 underline">メーカー6社の出張費・診断料の比較</Link>に掲載しています。
            </p>
          </section>

          <section id="symptom" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ファンモーターの故障が疑われる症状</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              メーカーの修理料金目安で、ファンモーターが交換部品として挙げられている症状は次のとおりです。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>室内機から風が出ない</strong>（東芝：室内ファンモーター・室内基板・横流ファン）</li>
              <li><strong>室内機から「ブーン」「カラカラ／ガラガラ」と音がする</strong>（日立：室内ファンモーター）</li>
              <li><strong>室内機から風は出るが、室外機が動かない</strong>（東芝：室外基板・室外ファンモーター・圧縮機ほか／日立：室外ファンモーター・コンプレッサー）</li>
              <li><strong>ファンが回らない</strong>（ダイキン：プリント基板・ファン・ファンモータ）</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              いずれも、ファンモーター以外の部品が原因の場合があります。基板や圧縮機の交換になると費用が大きく変わるため、点検で原因を特定してから見積もりを確認してください。
              症状ごとの確認手順は<Link href="/guide/outdoor-unit-not-working/" className="text-sky-700 underline">室外機が動かない原因</Link>・<Link href="/guide/noise/" className="text-sky-700 underline">エアコンの異音の原因</Link>に掲載しています。
            </p>
          </section>

          <section id="judge" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理か買い替えかの判断材料</h2>
            <p className="text-sm leading-7 text-slate-700">
              ダイキン・日立・東芝などメーカー各社は、ルームエアコンの補修用性能部品の保有期間を「製造打ち切り後10年」としています。製造年は室内機に表示されています（ダイキン）。製造から10年前後たった機種は、部品が手に入らず修理できない場合があります。
              費用と使用年数をあわせた判断は<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>を、メーカー保証の対象かどうかは<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>をご覧ください。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              メーカー以外の修理業者に依頼する場合は、出張費・見積もり費用が業者ごとに異なります。当サイトの<Link href="/cost/price-index/" className="text-sky-700 underline">エアコン修理 料金インデックス</Link>で、各社の公式掲載額を比較できます。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="rounded-xl border border-slate-200 bg-white">
                  <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-slate-800">{f.q}</summary>
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="sources" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-3">出典（{UPDATED}確認）</h2>
            <ul className="list-disc pl-6 space-y-1 text-xs leading-6 text-slate-500 break-all">
              <li>東芝ライフスタイル ルームエアコン 修理料金の目安 https://www.toshiba-lifestyle.com/jp/support/ryokin/room_airconditioner/</li>
              <li>日立 ルームエアコン 修理料金目安 https://kadenfan.hitachi.co.jp/support/repair/raj.html</li>
              <li>ダイキン「ファンが回らない（修理金額）」https://www.daikincc.com/faq/customer/web/knowledge2741.html</li>
              <li>ダイキン 製造年・補修用性能部品について https://www.daikincc.com/faq/customer/web/knowledge2917.html</li>
              <li>日立 補修用性能部品の保有期間 https://kadenfan.hitachi.co.jp/support/about/products.html</li>
              <li>シャープ エアコン 修理料金の目安 https://jp.sharp/support/repair_cost_air_con.html</li>
              <li>三菱電機 霧ヶ峰 修理料金の目安 https://www.mitsubishielectric.co.jp/ldg/repair/charge/kirigamine.html</li>
              <li>パナソニック エアコン サポート https://panasonic.jp/aircon/support.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料の比較" },
                { href: "/cost/repair-price/", label: "症状別の修理費用相場一覧" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない原因" },
                { href: "/guide/noise/", label: "エアコンの異音の原因" },
                { href: "/guide/parts-names/", label: "エアコンの部品の名称と役割" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-700 transition-colors">
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
