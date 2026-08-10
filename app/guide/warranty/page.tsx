import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの保証期間まとめ｜無料修理になる条件は？本体1年・冷媒回路5年・量販店保証【2026年】",
  description:
    "エアコン修理が無料になる条件を三層で整理。メーカー保証（本体1年・冷媒回路5年＝ダイキン/パナソニック/三菱/シャープ公式確認）、量販店の長期保証（ヤマダ4・6・11年など）、部品保有期間（製造打切後10年）まで、公式一次情報（2026年8月10日確認）で解説します。",
  alternates: { canonical: "/guide/warranty/" },
};

const UPDATED = "2026年8月10日";

const faqs = [
  {
    q: "エアコンのメーカー保証は何年ですか？",
    a: "本体はお買い上げ日から1年間、冷媒回路（冷媒系統）は5年間というのが大手各社の公式規定です。ダイキンは「本体1年間／冷媒系統5年間」、パナソニックは「本体1年・冷媒循環回路部品5年」、三菱電機は「冷媒回路は5年間・それ以外は1年間」、シャープも「冷媒回路は5年間のメーカー保証対象部品」と公式に明記しています（いずれも2026年8月10日確認）。",
  },
  {
    q: "冷媒回路とは、どの部分のことですか？",
    a: "冷媒（ガス）が循環する心臓部のことで、三菱電機の公式規定では「圧縮機、冷却器、凝縮器、本体付属配管など」、ダイキンでは「現地配管を除く圧縮機、熱交換器および室内・室外ユニットの内配管」とされています。『冷えない』故障の原因になりやすい高額修理箇所（6万〜20万円程度）がここに含まれるため、購入5年以内かどうかで負担が大きく変わります。",
  },
  {
    q: "購入から3年です。冷えなくなったのですが無料で直せますか？",
    a: "原因が冷媒回路（圧縮機・熱交換器等）の故障であれば、5年間のメーカー保証で無償修理になる可能性があります。まず保証書と購入日の分かるもの（レシート・注文履歴）を用意してメーカー窓口へ相談してください。ただし基板など冷媒回路以外の故障は1年の本体保証が切れていれば有償です。また誤って冷媒ガスを放出させた場合は保証対象外とダイキンが明記しています。",
  },
  {
    q: "量販店の長期保証は入っていないと使えませんか？",
    a: "はい。例えばヤマダデンキの無料長期保証は「保証対象商品の購入と同時に限る」と規定されており、故障してから加入することはできません。自分が加入しているか分からない場合は、購入店のレシート・保証書・会員アプリの購入履歴を確認するか、購入店に直接問い合わせてみてください。",
  },
  {
    q: "製造から10年たったエアコンは修理できませんか？",
    a: "ダイキン・パナソニックは補修用性能部品の保有期間を「製造打切り後10年」と公式に案内しており、これを過ぎると部品の在庫がなく修理をお断りされる場合があります。10年超のエアコンで高額故障が起きた場合は、電気代の面でも新しい機種が有利なことが多いため、買い替えとの比較をおすすめします。",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/warranty/" },
          { name: "エアコンの保証期間まとめ", href: "/guide/warranty/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">保証ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの保証期間まとめ
            <br className="hidden md:block" />
            無料修理になる条件を三層で整理
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの修理費を払う前に、必ず確認したいのが<strong className="font-semibold text-slate-900">「無料で直せる保証が残っていないか」</strong>です。
            エアコンの保証は<strong className="font-semibold text-slate-900">①メーカー保証 ②量販店の長期保証 ③部品保有期間</strong>の三層構造になっており、
            知らずに有償修理を頼むと数万円損することがあります。各社公式の規定（{UPDATED}確認）にもとづいて整理しました。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
            <p className="font-bold text-sky-800 mb-1">先に結論：無料修理のチェックリスト</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>□ 購入から<strong>1年以内</strong> → 本体のメーカー保証で無償の可能性大</li>
              <li>□ 購入から<strong>5年以内＋「冷えない」故障</strong> → 冷媒回路の5年保証の可能性あり</li>
              <li>□ <strong>量販店の長期保証</strong>に加入（購入時のみ加入可） → 購入店へ</li>
              <li>□ 賃貸の備え付け → そもそも<Link href="/guide/rental-aircon-repair/" className="text-sky-700 underline underline-offset-2 font-semibold">大家さん負担</Link>の可能性</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="maker" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">①メーカー保証：本体1年・冷媒回路5年</h2>
            <p className="leading-8 text-slate-700 mb-4">
              大手メーカーの保証書規定は共通して<strong className="font-semibold">「本体1年・冷媒回路（冷媒系統）5年」</strong>の二段構えです（下表の4社で公式確認）。
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
                    <td className="border border-slate-300 px-3 py-2">冷媒回路（圧縮機、熱交換器および本体配管）は5年間のメーカー保証対象部品と明記</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-5 text-sm leading-7">
              <p className="font-bold text-orange-700 mb-1">💡 ここが最大の見落としポイント</p>
              <p>
                「保証は1年で切れた」と思い込んで有償修理を頼む人が多いのですが、
                <strong>「冷えない」故障の主要因である冷媒回路は5年保証</strong>です。
                冷媒回路の修理は各社公式概算で6万〜20万円程度と最も高額な箇所なので、購入5年以内なら必ずメーカーに保証適用を確認してから動きましょう。
              </p>
            </div>
          </section>

          <section id="shop" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">②量販店の長期保証：5〜11年カバーだが「購入時のみ加入」</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                量販店の長期保証は、メーカー保証が切れた後をカバーする制度です。公式規定を確認できた
                <strong className="font-semibold">ヤマダデンキの「無料 長期保証」</strong>の内容（{UPDATED}確認）:
              </p>
              <ul className="list-disc pl-5 text-[0.95rem] leading-7 space-y-1">
                <li>対象: 税込33,000円以上の指定商品（エアコン含む）・<strong>加入料無料・購入と同時のみ加入可</strong></li>
                <li>期間: <strong>4年間・6年間・11年間から選択</strong>（11年間は冷蔵庫・エアコンのみ。メーカー保証期間を含む）</li>
                <li>負担区分: メーカー保証満了の翌日〜3年目は技術工料・部品代・出張料をすべて保証。<strong>4年目以降は技術工料のみ</strong>保証（部品代・出張料は自己負担）</li>
                <li>対象外の例: リモコン・フィルター等の付属品、エアコンのガスチャージ、フィルター詰まりの除去 など</li>
              </ul>
              <p>
                ケーズデンキにも「長期無料保証」があり、エアコンは10年間無料保証の対象機種があるとされています（当サイトで{UPDATED}時点の公式ページをライブ確認できなかったため、加入条件・年数の最新情報は公式サイトでご確認ください）。
                ビックカメラ・ヨドバシカメラ・エディオン等にも同種の制度がありますが、年数・条件は各社異なります。
              </p>
              <p className="text-sm leading-7 text-slate-500">
                関連: <Link href="/company/yamada-repair/" className="text-sky-600 underline underline-offset-2">ヤマダデンキの出張修理レビュー</Link> / <Link href="/company/ksdenki-repair/" className="text-sky-600 underline underline-offset-2">ケーズデンキの修理レビュー</Link>
              </p>
            </div>
          </section>

          <section id="parts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">③部品保有期間：製造打切り後10年の壁</h2>
            <p className="leading-8 text-slate-700">
              保証とは別に、修理できるかどうか自体を決めるのが<strong className="font-semibold">補修用性能部品の保有期間</strong>です。
              ダイキン・パナソニックとも、エアコンの部品保有期間を<strong className="font-semibold">製造打切り後10年</strong>と公式に案内しています（{UPDATED}確認）。
              この期間を過ぎると部品がなく、保証や費用以前に修理そのものができない場合があります。
              製造年は室内機側面などの銘板シールで確認できます。10年前後の機種で高額故障が出たら、
              <Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2 font-semibold">修理と買い替えの比較</Link>をおすすめします。
            </p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">保証が全部使えなかったら</h2>
            <p className="leading-8 text-slate-700">
              三層すべてに当てはまらない場合は有償修理です。メーカーは点検だけでも約4,000〜19,000円かかる一方（
              <Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2 font-semibold">6社の出張費・診断料の横断比較</Link>）、
              修理業者には見積もり無料の会社もあります。総額の書面見積もりを確認したうえで、納得できる依頼先を選びましょう。
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">保証切れなら業者比較で安く</p>
              <p className="text-sky-100 text-sm mb-5">見積もり無料・料金確認日つきで比較しています。</p>
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
              <p className="mb-2">いずれも{UPDATED}に各社公式サイトで確認。</p>
              <ul className="space-y-1">
                <li>・ダイキン公式FAQ（保証期間・冷媒系統の定義・部品保有期間）</li>
                <li>・パナソニック公式FAQ（保証期間・部品保有期間）</li>
                <li>・三菱電機公式FAQ（冷媒回路5年保証）</li>
                <li>・シャープ「エアコン 出張修理概算料金」（冷媒回路の保証記載）</li>
                <li>・ヤマダデンキ「無料 長期保証」規定ページ</li>
                <li>・ケーズデンキ「長期無料保証」はライブ確認不可のため参考情報として記載（最新条件は公式サイト参照）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼む？使い分けガイド" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料 横断比較" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えどっちが得？判断基準" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸のエアコン修理費は誰が負担？" },
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
