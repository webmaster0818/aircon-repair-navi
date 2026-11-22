import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン取り付け費用の目安｜家電量販店4社の標準工事費・追加工事費と買い替え時の総額試算【公式・2026年11月確認】",
  description:
    "エアコンの取り付け費用を、ケーズデンキ・ヨドバシ・ビックカメラ・コジマの公式ページで比較しました。標準工事費は4.0kW前後まで14,300円〜18,700円（税込）。標準工事の範囲の違い、追加工事費、リサイクル料金を含む買い替え時の総額試算を掲載しています。",
  alternates: { canonical: "/cost/installation/" },
};

const UPDATED = "2026年11月22日";
const CHECKED = "2026年11月22日確認";

const standard = [
  { shop: "ケーズデンキ", fee: "4.0kWまで 18,700円／4.1kW以上 24,200円", scope: "同階工事・配管4mまで（露出・テープ巻き）・木造/モルタル壁の穴あけ1か所・既存アース端子への接続・室外機は平地置き/ベランダ置き。既設の配管穴がある場合も値引きなし" },
  { shop: "ヨドバシカメラ", fee: "3.9kWまで 14,300円から", scope: "配管4m未満（露出タイプのみ）・室外機用の台（プラロック）・室外機は平地置き/ベランダ置きに限る。4.0kW以上の金額は同ページに記載なし" },
  { shop: "ビックカメラ", fee: "4.0kW以下 18,700円／5.0kW以上 24,200円", scope: "真空引き作業を含む。料金一覧ページに配管の長さなどの範囲の記載なし。ビックカメラ.comでエアコンを購入した場合の料金" },
  { shop: "コジマ", fee: "2.2〜4.9kW 18,700円／5.0kW以上 24,200円", scope: "配管4mまで（露出タイプのみ）・配管穴が貫通済みの壁での設置・室内機と同じ階の地面かベランダ置き・真空引き。ドレン排水処理は含まない" },
];

const extra = [
  { item: "配管延長（1mあたり・2分3分）", ks: "3,850円〜", yd: "2,750円", bc: "4,950円〜", kj: "4,950円" },
  { item: "化粧カバー（室外）", ks: "5,500円（2mまで）", yd: "7,700円（2mまで）", bc: "6,050円〜", kj: "6,600円〜（2m）" },
  { item: "化粧カバー（室内）", ks: "11,000円（1mまで）", yd: "8,800円（1mまで）", bc: "11,000円〜", kj: "11,000円〜" },
  { item: "穴あけ（木造・モルタル）", ks: "追加1か所 3,300円", yd: "3,300円", bc: "4,400円〜", kj: "3,300円〜" },
  { item: "穴あけ（コンクリート）", ks: "11,000円〜", yd: "14,300円（18cm）", bc: "16,500円〜（20cmまで）", kj: "16,500円〜（20cmまで）" },
  { item: "石綿（アスベスト）の事前調査", ks: "3,300円", yd: "3,300円", bc: "3,850円", kj: "3,850円" },
  { item: "室外機の屋根置き", ks: "15,400円〜", yd: "標準工事費＋14,300円〜", bc: "14,300円〜（3.6kW以下）", kj: "14,300円（3.6kWまで）" },
  { item: "専用コンセント工事（同じ階）", ks: "16,500円", yd: "見積もり", bc: "16,500円〜", kj: "16,500円（配線10mまで）" },
  { item: "既存エアコンの取り外し", ks: "6,600円", yd: "4,400円", bc: "5,500円", kj: "6,600円" },
  { item: "収集運搬料金（買い替え時）", ks: "3,300円", yd: "550円", bc: "記載なし", kj: "2,200円" },
];

const total = [
  { shop: "ケーズデンキ", calc: "18,700＋6,600＋990＋3,300", sum: "29,590円" },
  { shop: "ヨドバシカメラ", calc: "14,300＋4,400＋990＋550", sum: "20,240円〜" },
  { shop: "ビックカメラ", calc: "18,700＋5,500＋リサイクル3,190〜", sum: "27,390円〜（収集運搬料の記載なし）" },
  { shop: "コジマ", calc: "18,700＋6,600＋990＋2,200", sum: "28,490円" },
];

const faqs = [
  {
    q: "エアコンの取り付け費用はいくらですか？",
    a: "家電量販店4社の公式の標準工事費（税込）は、ケーズデンキ・ビックカメラ・コジマが18,700円（4.0kW前後まで）、ヨドバシカメラが14,300円から（3.9kWまで）です。5.0kW前後以上の大きい機種は24,200円の社が多くなっています（2026年11月22日確認）。配管の延長やコンクリートの穴あけなど、標準工事の範囲を超える作業は追加料金がかかります。",
  },
  {
    q: "標準工事に含まれない作業には何がありますか？",
    a: "各社とも、配管が4m（ヨドバシは4m未満）を超える場合の延長、化粧カバー、室外機の屋根置き・壁面設置、専用コンセントの新設は追加工事です。穴あけは、ケーズデンキは木造・モルタル壁の1か所を標準工事に含みますが、コジマは配管穴が貫通済みの壁での設置が標準工事の条件です。コンクリート壁の穴あけは各社とも追加料金がかかり、石綿（アスベスト）の事前調査が必要になる場合があります。",
  },
  {
    q: "古いエアコンを処分する費用はどのくらいですか？",
    a: "取り外し工事費・家電リサイクル料金・収集運搬料金がかかります。家電リサイクル料金は、家電リサイクル券センターの公表で、パナソニック・ダイキン・東芝ライフスタイル・コロナが550円、三菱電機・日立・シャープ・ゼネラルが990円、アイリスオーヤマが2,000円です（税込・2026年11月22日確認）。取り外しは4,400〜6,600円、収集運搬は550〜3,300円が当サイトで確認した4社の範囲です。",
  },
  {
    q: "エアコン本体を通販で買って、取り付けだけ依頼できますか？",
    a: "当サイトで確認した範囲では、ケーズデンキはエアコンの販売に設置工事が必須で、ビックカメラの工事料金は同社でエアコンを購入した場合の料金とされています。コジマも工事は注文時の受付です。量販店で取り付けだけを依頼できるとする公式の記載は、4社とも確認できませんでした（2026年11月22日時点）。取り付けのみの依頼は、エアコン工事に対応する業者にご相談ください。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function InstallationCostPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用・比較", href: "/cost/repair-price/" },
          { name: "エアコン取り付け費用の目安", href: "/cost/installation/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">費用ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン取り付け費用の目安
            <br className="hidden md:block" />
            量販店4社の標準工事費・追加工事費の比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-22">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの取り付け費用は、<strong className="font-semibold text-slate-900">標準工事費（4.0kW前後までで14,300円〜18,700円・税込）</strong>に、配管の延長や化粧カバーなどの<strong className="font-semibold text-slate-900">追加工事費</strong>を足した金額になります。
            当サイトでは、ケーズデンキ・ヨドバシカメラ・ビックカメラ・コジマの公式ページに掲載されている工事料金を確認し、標準工事に含まれる範囲と追加工事費を比較しました（{CHECKED}）。
            古いエアコンからの買い替えで必要になる処分費用を含めた総額の試算も掲載しています。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論</p>
            <ul className="list-disc pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>標準工事費は、6〜14畳用（4.0kW前後まで）で14,300円〜18,700円、5.0kW前後以上で24,200円の社が多くなっています。</li>
              <li>同じ「標準工事」でも、穴あけやドレン排水処理を含むかどうかが社によって異なります。金額だけでなく範囲をご確認ください。</li>
              <li>買い替えの場合、取り外し・リサイクル・収集運搬を加えた総額は、2.2kWの機種で約2.0万〜3.0万円（当サイト試算・追加工事なし）です。</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="standard" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">標準工事費と標準工事に含まれる範囲（4社比較）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>販売店</th>
                    <th className={th}>標準工事費（税込）</th>
                    <th className={th}>標準工事に含まれる範囲（公式の記載）</th>
                  </tr>
                </thead>
                <tbody>
                  {standard.map((r) => (
                    <tr key={r.shop}>
                      <td className={`${td} font-bold text-slate-900 whitespace-nowrap`}>{r.shop}</td>
                      <td className={td}>{r.fee}</td>
                      <td className={`${td} text-slate-600`}>{r.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：ケーズデンキ「エアコンの配送・設置工事について」（ksdenki.com/guide/delivery_construction_ac_pop）、ヨドバシ・ドット・コム「エアコンの設置工事について」（yodobashi.com/ec/support/beginner/setup/aircon/）、ビックカメラ.com「エアコン工事料金一覧」（biccamera.com/bc/c/info/purchase/airconconstruction_pricelist.jsp）、コジマネット「エアコン購入前のチェックポイント」（kojima.net/ec/guide/checkpoint/aircon-check.html）。いずれも{CHECKED}。
              ビックカメラには掲載期間が終了した旧ページ（旧料金15,400円〜）が残っていますが、本記事では現行の料金一覧の金額を掲載しています。ヤマダデンキ・ジョーシンは現行の公式料金ページの本文を確認できなかったため掲載していません。
            </p>
          </section>

          <section id="extra" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">主な追加工事の料金（税込）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[760px]">
                <thead>
                  <tr>
                    <th className={th}>工事内容</th>
                    <th className={`${th} whitespace-nowrap`}>ケーズデンキ</th>
                    <th className={`${th} whitespace-nowrap`}>ヨドバシ</th>
                    <th className={`${th} whitespace-nowrap`}>ビックカメラ</th>
                    <th className={`${th} whitespace-nowrap`}>コジマ</th>
                  </tr>
                </thead>
                <tbody>
                  {extra.map((r) => (
                    <tr key={r.item}>
                      <td className={`${td} font-semibold text-slate-900`}>{r.item}</td>
                      <td className={td}>{r.ks}</td>
                      <td className={td}>{r.yd}</td>
                      <td className={td}>{r.bc}</td>
                      <td className={td}>{r.kj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：上記4社の公式ページ、ヨドバシ・ドット・コム「家電リサイクル」、ケーズデンキ「家電リサイクルについて」。{CHECKED}。「〜」付きの金額は目安で、最終的な金額は現地での見積もりによります。配管の太さ（2分4分）や機種の能力により金額が変わる項目があります。ケーズデンキ・ヨドバシ・コジマでは、追加工事費を工事担当者に直接支払う方式です。
            </p>
          </section>

          <section id="total" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">買い替え時の総額試算（当サイト試算）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              6畳用（2.2kW）の新しいエアコンを取り付け、古い日立製エアコン（地面・ベランダ置き）を取り外して処分する場合を、各社の公式料金で計算しました。追加工事は無しとしています。
              リサイクル料金は、家電リサイクル券センターが公表する日立の料金（990円）で計算しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className={th}>販売店</th>
                    <th className={th}>内訳（標準工事＋取り外し＋リサイクル＋収集運搬）</th>
                    <th className={th}>合計（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  {total.map((r) => (
                    <tr key={r.shop}>
                      <td className={`${td} font-bold text-slate-900 whitespace-nowrap`}>{r.shop}</td>
                      <td className={td}>{r.calc}</td>
                      <td className={`${td} font-semibold`}>{r.sum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※当サイトが{CHECKED}の公式料金をもとに計算した参考値です。ヨドバシの標準工事費は「14,300円から」の表記のため「〜」としています。ビックカメラは「エアコンリサイクル 3,190円〜」と掲載されており、内訳と収集運搬料の扱いが記載されていないため、表記どおりの金額で計算しています。実際の金額は、設置場所や配管の長さ、販売店の見積もりによって変わります。
            </p>
          </section>

          <section id="recycle" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコンの家電リサイクル料金（メーカー別）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[480px]">
                <thead>
                  <tr>
                    <th className={th}>メーカー</th>
                    <th className={th}>リサイクル料金（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>パナソニック・ダイキン工業・東芝ライフスタイル・コロナ</td><td className={td}>550円</td></tr>
                  <tr><td className={td}>三菱電機・日立グローバルライフソリューションズ・シャープ・ゼネラル・三菱重工冷熱</td><td className={td}>990円</td></tr>
                  <tr><td className={td}>アイリスオーヤマ</td><td className={td}>2,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：家電リサイクル券センター「再商品化等料金一覧」（rkc.aeha.or.jp/recycle_price_compact.html）。{CHECKED}。リサイクル料金のほかに、販売店などの収集運搬料金がかかります。</p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりの前に確認しておくこと</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li><strong>室外機を置く場所</strong>：各社とも、標準工事は室内機と同じ階の平地（地面）かベランダ置きが条件です。屋根置き・壁面設置は追加料金がかかります。</li>
              <li><strong>配管穴の有無と壁の材質</strong>：コンクリート壁の新規の穴あけは、4社の公式料金で11,000円〜16,500円以上の追加料金がかかり（壁の厚さで変わります）、石綿の事前調査（3,300〜3,850円）が必要な場合があります。</li>
              <li><strong>室内機から室外機までの距離</strong>：配管が4mを超える場合は、1mごとに延長料金がかかります。</li>
              <li><strong>専用コンセントの有無と電圧</strong>：室内機の近くに専用コンセントがない場合は、専用コンセント工事（同じ階で16,500円前後）が必要です。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              取り付け後の施工不良や室内機の脱落などのトラブルへの対処は、<Link href="/guide/installation-trouble/" className="text-sky-600 underline underline-offset-2">取り付け工事のトラブルの対処</Link>でご説明しています。
              既存のエアコンを修理するか買い替えるかの判断は<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>を、修理を依頼する業者は<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>をご覧ください。
            </p>
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">出典・注記</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm leading-7 text-slate-600">
              <ul className="space-y-1">
                <li>・ケーズデンキ「エアコンの配送・設置工事について」「家電リサイクルについて」</li>
                <li>・ヨドバシ・ドット・コム「エアコンの設置工事について」「家電リサイクル」</li>
                <li>・ビックカメラ.com「エアコン工事料金一覧」</li>
                <li>・コジマネット「エアコン購入前のチェックポイント」</li>
                <li>・家電リサイクル券センター「再商品化等料金一覧」</li>
                <li>・確認日：いずれも2026年11月22日</li>
              </ul>
              <p className="mt-2">料金は改定される場合があります。依頼の前に各社の最新の料金と見積もりをご確認ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/installation-trouble/", label: "取り付け工事のトラブルの対処" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの比較" },
                { href: "/cost/repair-price/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの判断" },
                { href: "/cost/price-index/", label: "料金インデックス" },
                { href: "/ranking/", label: "エアコン修理業者ランキング" },
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
