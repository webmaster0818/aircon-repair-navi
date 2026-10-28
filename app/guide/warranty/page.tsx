import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの保証期間｜無料修理になる条件と本体1年・冷媒回路5年・量販店保証【2026年】",
  description:
    "エアコン修理が無料になる条件を、3つの制度に分けてご説明します。メーカー保証（本体1年・冷媒回路5年。ダイキン/パナソニック/三菱/シャープの公式情報を確認）、量販店の長期保証（ヤマダ4・6・11年など）、部品保有期間（製造打切り後10年）について、公式情報（2026年8月10日確認）にもとづいて掲載しています。",
  alternates: { canonical: "/guide/warranty/" },
};

const UPDATED = "2026年10月26日";

const faqs = [
  {
    q: "エアコンのメーカー保証は何年ですか？",
    a: "大手各社の公式規定では、本体はお買い上げ日から1年間、冷媒回路（冷媒系統）は5年間と定められています。ダイキンは「本体1年間／冷媒系統5年間」、パナソニックは「本体1年・冷媒循環回路部品5年」、三菱電機は「冷媒回路は5年間・それ以外は1年間」、シャープも「冷媒回路は5年間のメーカー保証対象部品」と公式に明記しています（いずれも2026年10月26日確認）。",
  },
  {
    q: "冷媒回路とは、どの部分のことですか？",
    a: "冷媒（ガス）が循環するエアコンの中核部分を指し、三菱電機の公式規定では「圧縮機、冷却器、凝縮器、本体付属配管など」、ダイキンでは「現地配管を除く圧縮機、熱交換器および室内・室外ユニットの内配管」とされています。「冷えない」故障の原因になりやすい高額な修理箇所（シャープ・ダイキン公式の目安で6万〜20万円程度）が含まれるため、購入から5年以内かどうかで費用負担が大きく異なります。",
  },
  {
    q: "購入から3年で冷えなくなった場合、無料で修理できますか？",
    a: "原因が冷媒回路（圧縮機・熱交換器など）の故障であれば、5年間のメーカー保証により無償修理となる可能性があります。保証書と購入日を確認できるもの（レシート・注文履歴）をご用意のうえ、メーカー窓口へご相談ください。ただし、基板など冷媒回路以外の故障は、1年間の本体保証が終了している場合は有償となります。また、使用上の誤りや不当な修理・改造による故障、購入後の取付場所の移動による故障は保証期間内でも有料になること、誤って冷媒ガスを放出させた場合はメーカー保証の対象外であることを、ダイキンが公式FAQに明記しています。",
  },
  {
    q: "量販店の長期保証は、加入していない場合は利用できませんか？",
    a: "はい。たとえばヤマダデンキの無料長期保証は「保証対象商品の購入と同時に限る」と規定されており、故障後に加入することはできません。加入状況が不明な場合は、購入店のレシート・保証書・会員アプリの購入履歴を確認するか、購入店へ直接お問い合わせください。",
  },
  {
    q: "製造から10年が経過したエアコンは修理できますか？",
    a: "ダイキン・パナソニックは、補修用性能部品の保有期間を「製造打切り後10年」と公式に案内しており、この期間を過ぎると部品の在庫がなく、修理を受け付けてもらえない場合があります。使用10年を超えるエアコンで高額な故障が発生した場合は、電気代の面でも新しい機種が有利なことが多いため、買い替えとの比較をおすすめします。",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/warranty/" },
          { name: "エアコンの保証期間", href: "/guide/warranty/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">保証ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの保証期間と
            <br className="hidden md:block" />
            無料修理になる3つの条件
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-26">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの修理費を支払う前に、<strong className="font-semibold text-slate-900">無料で修理できる保証が残っていないか</strong>をご確認ください。
            エアコンの保証は<strong className="font-semibold text-slate-900">①メーカー保証 ②量販店の長期保証 ③部品保有期間</strong>の3つの制度で構成されており、
            保証を確認せずに有償修理を依頼すると、本来不要な数万円の費用が発生する場合があります。本記事では、各社公式の規定（{UPDATED}確認）にもとづいてご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
            <p className="font-bold text-sky-800 mb-1">無料修理の確認項目</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>□ 購入から<strong>1年以内</strong> → 本体のメーカー保証により無償となる可能性が高いケース</li>
              <li>□ 購入から<strong>5年以内で「冷えない」故障</strong> → 冷媒回路の5年保証が適用される可能性あり</li>
              <li>□ <strong>量販店の長期保証</strong>に加入済み（購入時のみ加入可） → 購入店へ相談</li>
              <li>□ 賃貸の備え付けエアコン → <Link href="/guide/rental-aircon-repair/" className="text-sky-700 underline underline-offset-2 font-semibold">大家の負担</Link>となる可能性あり</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="maker" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">①メーカー保証：本体1年・冷媒回路5年</h2>
            <p className="leading-8 text-slate-700 mb-4">
              大手メーカーの保証書の規定は、共通して<strong className="font-semibold">「本体1年・冷媒回路（冷媒系統）5年」</strong>の2段階となっています（下表の4社で公式情報を確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式規定（{UPDATED}確認）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダイキン</td>
                    <td className="border border-slate-300 px-3 py-2">本体1年間／冷媒系統5年間（冷媒系統＝現地配管を除く圧縮機、熱交換器および室内・室外ユニットの内配管）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td>
                    <td className="border border-slate-300 px-3 py-2">お買い上げ日から1年間／冷媒循環回路部品は5年</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">三菱電機</td>
                    <td className="border border-slate-300 px-3 py-2">冷媒回路（圧縮機、冷却器、凝縮器、本体付属配管など）はお買上げ日より5年間／上記以外は1年間</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">シャープ</td>
                    <td className="border border-slate-300 px-3 py-2">冷媒回路（圧縮機、熱交換器および本体配管）は5年間のメーカー保証対象部品と明記されています</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-5 text-sm leading-7">
              <p className="font-bold text-orange-700 mb-1">見落とされやすい冷媒回路の5年保証</p>
              <p>
                保証期間は1年で終了していると考え、有償修理を依頼する方が少なくありませんが、
                <strong>「冷えない」故障の主な原因である冷媒回路は5年保証</strong>の対象です。
                冷媒回路の修理は、シャープ公式の概算で6万〜9.8万円（購入後5年以上）、ダイキン公式の目安で7万〜10.5万円（溶接を伴う場合は15万〜20万円）と高額な箇所であるため、購入から5年以内の場合は、必ずメーカーに保証の適用可否を確認してから依頼してください。
              </p>
            </div>
          </section>

          <section id="shop" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">②量販店の長期保証：最長11年の保証は購入時のみ加入可能</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                量販店の長期保証は、メーカー保証の終了後を補う制度です。当サイトで公式規定を確認できた
                <strong className="font-semibold">ヤマダデンキの「無料 長期保証」</strong>の内容は以下のとおりです（保証規定 ver.202509A・{UPDATED}確認）。
              </p>
              <ul className="list-disc pl-5 text-[0.95rem] leading-7 space-y-1">
                <li>対象: 税込33,000円以上の指定商品（エアコン含む）・<strong>加入料無料・購入と同時のみ加入可</strong></li>
                <li>期間: <strong>4年間・6年間・11年間から選択</strong>（11年間は冷蔵庫・エアコンのみ。メーカー保証期間を含む）</li>
                <li>負担区分: メーカー保証満了の翌日〜3年目は技術工料・部品代・出張料をすべて保証。<strong>4年目以降は技術工料のみ</strong>保証（部品代・出張料は自己負担）</li>
                <li>対象外の例: リモコン・フィルター等の付属品、エアコンのガスチャージ、フィルター詰まりの除去 など</li>
              </ul>
              <p>
                ケーズデンキの「長期無料保証」は、あんしんパスポート（加入料・年会費無料）と連携した制度です。エアコンの保証年数と加入条件は、2026年10月に当サイトから公式サイトへ接続できず再確認できていないため、当ページでは記載を控えています。購入時の保証書または公式サイトでご確認ください。
                ビックカメラ・ヨドバシカメラ・エディオンなどにも同様の制度がありますが、年数・条件は各社で異なります。
              </p>
              <p className="text-sm leading-7 text-slate-500">
                関連: <Link href="/company/yamada-repair/" className="text-sky-600 underline underline-offset-2">ヤマダデンキの出張修理レビュー</Link> / <Link href="/company/ksdenki-repair/" className="text-sky-600 underline underline-offset-2">ケーズデンキの修理レビュー</Link>
              </p>
            </div>
          </section>

          <section id="parts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">③部品保有期間：製造打切り後10年</h2>
            <p className="leading-8 text-slate-700">
              保証とは別に、修理の可否そのものを左右するのが<strong className="font-semibold">補修用性能部品の保有期間</strong>です。
              ダイキン・パナソニックとも、エアコンの部品保有期間を<strong className="font-semibold">製造打切り後10年</strong>と公式に案内しています（{UPDATED}確認）。
              この期間を過ぎると部品の在庫がなく、保証や費用にかかわらず修理ができない場合があります。
              製造年は、室内機側面などの銘板シールで確認できます。10年前後の機種で高額な故障が発生した場合は、
              <Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2 font-semibold">修理と買い替えの比較</Link>をおすすめします。
            </p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">保証が適用されない場合の依頼先の選び方</h2>
            <p className="leading-8 text-slate-700">
              3つの制度のいずれにも該当しない場合は、有償修理となります。メーカーは点検のみでも3,850〜19,000円の費用がかかります（
              <Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2 font-semibold">6社の出張費・診断料の比較</Link>）。一方で、
              修理業者には見積もりを無料とする会社もあります。総額の見積もりを書面で確認したうえで、依頼先をお選びください。
            </p>
            <div className="mt-6 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">保証期間が終了した場合の業者比較</p>
              <p className="text-sky-100 text-sm mb-5">見積もり無料の業者を、料金の確認日を記載して比較しています。</p>
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
              <p className="mb-2">いずれも{UPDATED}に各社公式サイトで確認しています。</p>
              <ul className="space-y-1">
                <li>・ダイキン公式FAQ「保証について（ルームエアコン）」「メーカー保証期間について」「冷えない・暖まらない（修理金額）」（保証期間・冷媒系統の定義・部品保有期間・保証期間内でも有料となる場合・冷媒ガス放出時の扱い・冷媒系統の修理目安）</li>
                <li>・パナソニック公式FAQ（保証期間・部品保有期間）</li>
                <li>・三菱電機公式FAQ（冷媒回路5年保証）</li>
                <li>・シャープ「エアコン 出張修理概算料金」（冷媒回路の保証記載）</li>
                <li>・ヤマダデンキ「無料 長期保証 保証書内容確認」（2025年9月版の保証規定）</li>
                <li>・ケーズデンキ「長期無料保証」・あんしんパスポート（2026年7月11日確認。10月は接続できず未再確認）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料の比較" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸のエアコン修理費の負担区分" },
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
