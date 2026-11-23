import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのコンプレッサー（圧縮機）故障｜症状と故障ではない場合、メーカー5社の公式修理料金と5年保証【2026年11月確認】",
  description:
    "エアコンのコンプレッサー故障が疑われる症状と、霜取りなど故障ではない場合の見分け方を整理しました。修理料金は東芝75,000〜126,000円、日立117,000〜137,000円前後（税込）など5社の公式目安を掲載。冷媒回路は5年保証です。",
  alternates: { canonical: "/guide/compressor-failure/" },
};

const UPDATED = "2026年11月23日";

const faqs = [
  {
    q: "エアコンのコンプレッサー交換の費用はいくらですか？",
    a: "メーカー公式の目安（税込）では、東芝が圧縮機75,000〜126,000円、日立がコンプレッサー117,000〜137,000円前後（通常設置。高所・天吊りなどは174,000〜194,000円前後）です。ダイキンは圧縮機交換など溶接を伴う作業は約15万〜20万円程度の高額な修理となる場合があるとしています（2026年11月23日確認）。機種・設置状況により金額は変わります。",
  },
  {
    q: "コンプレッサーの故障は保証で直せますか？",
    a: "ダイキン・シャープ・日立は、圧縮機を含む冷媒回路（冷媒系統）を5年間のメーカー保証の対象としています。本体の保証が1年で切れていても、購入から5年以内であれば無料修理の対象になる場合があります。保証書と購入日がわかるものをご用意のうえ、メーカーにご確認ください。",
  },
  {
    q: "室外機が止まっていたらコンプレッサーの故障ですか？",
    a: "必ずしもそうではありません。設定温度に達すると室外機は一時停止します（ダイキン・日立）。暖房中は霜取り運転で室外機の動きや温風が止まることがあり、日立は5〜10分間（最大で約22分間）、パナソニックは最長で12分程度としています。運転ランプの点滅やエラー表示がある場合は、故障の可能性があります。",
  },
  {
    q: "コンプレッサーが故障した場合、修理と買い替えのどちらがよいですか？",
    a: "コンプレッサー交換は10万円を超えることが多い修理です。メーカー各社は補修用性能部品の保有期間を製造打ち切り後10年としており（ダイキン）、設計上の標準使用期間も10年とされています。製造から年数がたっている場合は、修理費と買い替え費用を比べて判断することをおすすめします。",
  },
  {
    q: "コンプレッサーの故障を示すエラーコードはありますか？",
    a: "ダイキンはE5（圧縮機の吐出管温度が高くなりすぎた）、E6・E8（圧縮機の過電流）、H6（圧縮機の始動不良を検出）を、日立はみはりランプの3回点滅（コンプレッサーの低速回転異常）・6回点滅（コンプレッサー部の高温検知）などを公表しています。表示の意味はメーカー別のエラーコードのページでご確認ください。",
  },
];

const feeRows = [
  {
    maker: "東芝",
    item: "圧縮機",
    fee: "75,000〜126,000円",
    symptom: "室内機から風は出るが室外機が動作しない／運転後しばらくすると室外機が止まる",
    note: "技術料・部品代・出張料などで構成（2025年4月1日現在の表）。作業員が2名以上の場合は増加人数分の出張料を加算",
  },
  {
    maker: "日立",
    item: "コンプレッサー（5年保証）",
    fee: "117,000〜137,000円前後（高所・天吊りなど 174,000〜194,000円前後）",
    symptom: "冷えない・暖まらない／みはりランプ2回点滅（室外機過電流異常）など",
    note: "技術料・部品代・出張料（3,850円）の合計",
  },
  {
    maker: "ダイキン",
    item: "冷媒系統部品（圧縮機ほか）",
    fee: "145,000〜248,000円程度",
    symptom: "冷えない・暖まらない",
    note: "出張料・技術料（点検費含む）・部品代。圧縮機交換など溶接を伴う作業は約15万〜20万円程度となる場合があると記載",
  },
  {
    maker: "シャープ",
    item: "冷媒回路（圧縮機など）の交換",
    fee: "60,000〜98,000円",
    symptom: "冷えない／暖まらない、室外機から気になる音、水が漏れる など",
    note: "技術料・部品代・出張料を含むおおよその目安（購入後5年以上の場合）",
  },
  {
    maker: "三菱電機",
    item: "冷媒回路（冷媒部品・圧縮機など）",
    fee: "23,100〜136,400円",
    symptom: "室外機が動作しない／しばらくすると室外機が止まる／冷えが弱い など",
    note: "技術料・部品代・出張料（基本料金20kmまで）を含む。冷媒回路を含む高額な部品交換は別途見積もり",
  },
];

const signRows = [
  { sign: "運転ランプが点滅する・エラー表示が出る", judge: "故障の可能性", detail: "ダイキンは「運転ランプの点滅は、エアコンの不具合をお知らせしています」としています" },
  { sign: "冷えない・暖まらないうえに室外機が動かない", judge: "故障の可能性", detail: "東芝・日立・三菱電機の料金表で圧縮機・冷媒回路が交換部品に挙がっている症状です" },
  { sign: "運転後しばらくすると室外機が止まる", judge: "要確認", detail: "設定温度に達した一時停止（サーモオフ）の場合もあります。冷えない・暖まらない状態が続く場合は点検を" },
  { sign: "暖房中に数分〜十数分、温風と室外機が止まる", judge: "故障ではない場合が多い", detail: "霜取り運転です（ダイキン約3〜10分、日立5〜10分・最大約22分、パナソニック最長12分程度）" },
  { sign: "室外機から以前より大きな音がする", judge: "要確認", detail: "ダイキンは、室外機は圧縮機などで動作音がするとしたうえで、以前より大きくなった場合は相談するよう案内しています" },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-7 align-top";

export default function CompressorFailurePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom/" },
          { name: "コンプレッサーの故障", href: "/guide/compressor-failure/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのコンプレッサー（圧縮機）の故障
            <br className="hidden md:block" />
            症状の見分け方とメーカー公式の修理料金
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            コンプレッサー（圧縮機）は室外機の中で冷媒を圧縮する部品で、故障すると<strong className="font-semibold text-slate-900">冷えない・暖まらない、室外機が動かない・すぐ止まる</strong>といった症状が出ます。
            メーカーに依頼した場合の交換費用は<strong className="font-semibold text-slate-900">おおむね10万円前後〜20万円程度</strong>と高額ですが、<strong className="font-semibold text-slate-900">購入から5年以内なら冷媒回路の保証</strong>で無料修理になる場合があります。
            本記事では、当サイトが{UPDATED}にメーカー5社の公式サイトを確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">要点（税込・{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>圧縮機の交換費用：<strong>東芝 75,000〜126,000円／日立 117,000〜137,000円前後</strong></li>
              <li>ダイキン：圧縮機交換など溶接を伴う作業は<strong>約15万〜20万円程度</strong>となる場合あり</li>
              <li>圧縮機を含む冷媒回路は<strong>5年保証</strong>（ダイキン・シャープ・日立）</li>
              <li>暖房中に温風が止まるのは<strong>霜取り運転</strong>の場合が多く、故障ではありません</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="signs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">コンプレッサーの故障が疑われる症状と、故障ではない場合</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              メーカーの公式FAQと修理料金表で、圧縮機に関係する症状として挙げられているものを、当サイトで「故障の可能性」「要確認」「故障ではない場合が多い」に分けました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={th}>症状</th>
                    <th className={`${th} whitespace-nowrap`}>判断の目安</th>
                    <th className={th}>公式の記載</th>
                  </tr>
                </thead>
                <tbody>
                  {signRows.map((r) => (
                    <tr key={r.sign}>
                      <td className={`${td} font-semibold`}>{r.sign}</td>
                      <td className={`${td} whitespace-nowrap`}>{r.judge}</td>
                      <td className={`${td} text-xs leading-6`}>{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              ダイキンは、エアコン専用のブレーカーが落ちていた場合は入れ直さずに点検・修理を依頼するよう案内しています。圧縮機の過電流などで回路に異常がある可能性があるためです。
              エラー表示の読み方は<Link href="/symptom/error-code/" className="text-sky-700 underline">メーカー別エラーコード一覧</Link>から各社のページをご覧ください。ダイキンはE5・E6・E8・H6、日立はみはりランプの3回・4回・6回点滅を、圧縮機に関わる表示として公表しています。
            </p>
          </section>

          <section id="fee" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー5社の公式の修理料金目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              圧縮機単体の金額を出しているのは東芝と日立です。シャープと三菱電機は「冷媒回路」、ダイキンは「冷媒系統部品」の単位で掲載しているため、同じ条件の比較ではない点にご注意ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>メーカー</th>
                    <th className={th}>掲載の単位</th>
                    <th className={th}>金額（税込）</th>
                    <th className={th}>該当する症状の行</th>
                    <th className={th}>含まれる費用・注意</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r) => (
                    <tr key={r.maker}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.maker}</td>
                      <td className={td}>{r.item}</td>
                      <td className={td}>{r.fee}</td>
                      <td className={`${td} text-xs leading-6`}>{r.symptom}</td>
                      <td className={`${td} text-xs leading-6`}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。各社公式サイトの家庭用ルームエアコンの修理料金目安です。保証期間が終了した製品をメーカーに直接依頼した場合の目安で、機種・設置状況・作業内容により金額は変わります。時点の記載があるのは東芝のみです。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              圧縮機の交換は、配管の溶接と冷媒ガスの充填を伴う作業です。東芝は同じ症状の行に「冷凍サイクル修理（溶接を伴う部品交換・冷媒充填）」74,000〜126,000円も掲載しています。
              各社の出張料・診断料は<Link href="/cost/maker-repair-fee/" className="text-sky-700 underline">メーカー6社の出張費・診断料の比較</Link>に、メーカー以外の修理業者の料金は<Link href="/cost/price-index/" className="text-sky-700 underline">エアコン修理 料金インデックス</Link>に掲載しています。
            </p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">購入から5年以内なら保証を確認</h2>
            <p className="text-sm leading-7 text-slate-700">
              ダイキンは、保証期間を1年としたうえで「冷媒系統部分については5年間」とし、その範囲を現地配管を除く圧縮機・熱交換器・室内外ユニットの内配管としています。シャープも「冷媒回路とは、圧縮機、熱交換器および本体配管を指し、5年間のメーカー保証対象部品です」と記載し、日立は料金表の部品名を「コンプレッサー（５年保証）」としています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              コンプレッサーの故障が疑われる場合は、修理を依頼する前に保証書と購入日を確認してください。家電量販店の延長保証に加入している場合も、対象になることがあります。保証の条件は<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>に詳しく掲載しています。
              なお、ダイキンは、誤って冷媒ガスを放出させてしまった場合はメーカー保証の対象外としています。
            </p>
          </section>

          <section id="judge" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">保証が切れている場合の判断材料</h2>
            <p className="text-sm leading-7 text-slate-700">
              ダイキンは、ルームエアコンの設計上の標準使用期間を10年、補修用性能部品の保有期限を製造打ち切り後10年としています。製造から10年前後たった機種は、部品が手に入らず修理できない場合があります。
              コンプレッサー交換は10万円を超えることが多いため、使用年数が長い場合は、買い替え費用（本体価格と取り付け工事費）と比べて判断することをおすすめします。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              判断の目安は<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>を、買い替える場合の工事費は<Link href="/cost/installation/" className="text-sky-700 underline">エアコン取り付け費用の目安</Link>をご覧ください。修理業者に依頼する場合は、点検で原因を特定し、見積もりの内訳（部品代・作業料・冷媒ガス代）を確認してから依頼すると安心です。
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
              <li>日立 室外機のファンが止まる・霜取り運転 https://kadenfan.hitachi.co.jp/support/ra/q_a/post-82.html</li>
              <li>ダイキン「冷えない・暖まらない（修理金額）」https://www.daikincc.com/faq/customer/web/knowledge2736.html</li>
              <li>ダイキン「運転しない・運転中に止まる（修理金額）」https://www.daikincc.com/faq/customer/web/knowledge2733.html</li>
              <li>ダイキン「エアコンが運転中に止まる」https://www.daikincc.com/faq/customer/web/knowledge2707.html</li>
              <li>ダイキン「暖まらない」https://www.daikincc.com/faq/customer/web/knowledge3007.html</li>
              <li>ダイキン「エラーコード」https://www.daikincc.com/faq/customer/web/knowledge3006.html</li>
              <li>ダイキン「室外機から変わった音」https://www.daikincc.com/faq/customer/web/knowledge3010.html</li>
              <li>ダイキン「保証について」https://www.daikincc.com/faq/customer/web/knowledge2915.html</li>
              <li>ダイキン「製品寿命」https://www.daikincc.com/faq/customer/web/knowledge2917.html</li>
              <li>シャープ エアコン 修理料金の目安 https://jp.sharp/support/repair_cost_air_con.html</li>
              <li>三菱電機 霧ヶ峰 修理料金の目安 https://www.mitsubishielectric.co.jp/ldg/repair/charge/kirigamine.html</li>
              <li>パナソニック 霜取り運転 https://panasonic.jp/aircon/contents/defrosting.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない原因" },
                { href: "/guide/stops-midway/", label: "エアコンが途中で止まる原因" },
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/cost/fan-motor/", label: "ファンモーター交換の費用" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料の比較" },
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
