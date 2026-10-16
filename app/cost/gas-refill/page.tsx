import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのガス補充費用｜補充のみの場合の注意点と公式掲載額【2026年】",
  description:
    "エアコンの冷媒ガス補充の費用を、公式サイトの掲載額にもとづき整理しました。業者の公式掲載額（ガス充填16,500円〜等）とダイキン公式の冷媒系統修理70,000〜105,000円に差が生じる理由として、漏れを修理しない補充は再発しやすい仕組みをご説明します。ヤマダ電機・ケーズデンキに依頼する場合の状況も掲載しています。",
  alternates: { canonical: "/cost/gas-refill/" },
};

const UPDATED = "2026年8月19日";

const faqs = [
  {
    q: "ガス補充だけなら費用はいくらですか？",
    a: "業者の公式掲載額では、電気の工事屋さんがガス充填16,500円〜、EPARKくらしのレスキュー掲載業者でガス補充7,700円〜という水準が確認できています（当サイト調査）。ただし、ガスが減っている場合の多くは、どこかに漏れ箇所があります。漏れを特定・修理せずに補充のみを行うと再びガスが抜けるため、「補充のみの金額」と「漏れ修理を含む金額」を分けて見積もりで確認することが重要です。",
  },
  {
    q: "メーカーに依頼した場合、ガス系の修理費用はどのくらいですか？",
    a: "ダイキン公式FAQでは、冷えない・暖まらない症状の修理目安として電気系統部品28,000〜46,000円程度、冷媒系統部品70,000〜105,000円程度（いずれも税込・出張料/技術料/部品代込み・保証期間終了後）と案内されています（2026年8月19日確認）。また、圧縮機交換など溶接を伴う作業では、約15万〜20万円程度になる場合があると公式に記載されています。",
  },
  {
    q: "ヤマダ電機やケーズデンキでガス補充を頼めますか？",
    a: "ヤマダ電機（ヤマダテクニカルサービス）は現在、症状別の料金表を公式サイトに掲載しておらず、見積もりで確認する方式です（旧公式サイトには出張料4,500円等の掲載がありました。2026年7月11日当サイト確認値）。ケーズデンキは、公式サイトで症状別の金額を確認できませんでした（当サイトの確認時にアクセス制限あり・2026年8月時点）。いずれも購入店・保証経由であれば費用面のメリットがあるため、保証書をご確認のうえでお問い合わせいただくことをおすすめします。",
  },
  {
    q: "ガスが漏れているかどうかは自分で判断できますか？",
    a: "確実な判定には、業者による点検（ガス圧測定・リークテスト）が必要です。目安として、冷房で風は出るものの冷えない、室内機の熱交換器が凍る、以前より効きが明らかに悪いといった症状がある場合は、冷媒不足が疑われます。なお、冷媒ガスの取り扱いには専門知識が必要であり、誤ってガスを放出させた場合はメーカー保証の対象外になるとダイキン公式FAQに明記されています。DIYでの補充はお控えください。",
  },
  {
    q: "補充と買い替えはどちらが経済的ですか？",
    a: "冷媒系統の修理は70,000〜105,000円程度（ダイキン公式の目安）と高額になりやすく、圧縮機交換では15万円を超える場合もあります。使用年数が10年前後で、部品保有期間の終了が近い機種であれば、買い替えも選択肢となります。判断基準は、修理と買い替えの比較ガイドにまとめています。",
  },
];

export default function GasRefillPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "料金", href: "/cost/gas-refill/" },
          { name: "ガス補充の費用", href: "/cost/gas-refill/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">料金ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのガス補充費用
            <br className="hidden md:block" />
            補充のみの場合の注意点と公式掲載額
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが冷えない場合、ガスを補充すれば安価に直ると考えられることがあります。しかし、
            <strong className="font-semibold text-slate-900">エアコンの冷媒ガスは使用によって減るものではなく、減っている場合はどこかに漏れがあるのが原則</strong>です。
            そのため、「補充のみの価格」と「漏れ修理を含む価格」には大きな差があります。
            本記事では、業者の公式掲載額とメーカー公式の修理目安額を比較し、価格差が生じる仕組みを出典とともにご説明します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">本記事の要点</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>・補充のみの公式掲載額の例: <strong>7,700円〜／16,500円〜</strong>（業者により差・当サイト調査）</li>
              <li>・漏れ修理を含むメーカー目安: <strong>冷媒系統70,000〜105,000円程度</strong>（ダイキン公式・税込）</li>
              <li>・確認事項: <strong>漏れを直さない補充は再発しやすい</strong>ため、見積もりに「漏れ点検・修理を含むか」の確認が必要</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ガス補充・冷媒系修理の実額一覧</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">依頼先</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">金額（税込）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">内容・注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">電気の工事屋さん</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">ガス充填 16,500円〜</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">公式サイトに症状別の金額を掲載（当サイト調査）。見積もり0円と明記</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">EPARKくらしのレスキュー</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">ガス補充 7,700円〜</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">掲載業者の最低価格帯（当サイト調査）。「〜」表記のため、補充量・漏れの状況により変動</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">マッチング型の掲載相場</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">ガス漏れ 14,400〜19,000円</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">ミツモア14,400〜19,000円／すまいのホットライン16,000〜19,000円（いずれも当サイト調査の掲載相場）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダイキン（メーカー直接）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">冷媒系統 70,000〜105,000円程度</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      冷えない・暖まらない症状の公式修理目安（出張料・技術料・部品代込み、保証期間終了後・{UPDATED}確認）。電気系統部品は28,000〜46,000円程度。<strong>圧縮機交換等は約15万〜20万円になる場合がある</strong>と公式に記載
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ヤマダ電機／ケーズデンキ</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">見積もり確認方式</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ヤマダは現在、症状別料金の公式掲載なし（旧公式サイトの出張料4,500円等は2026年7月11日当サイト確認値）。ケーズは公式サイトで症状別の金額を確認できず（確認時にアクセス制限あり）。保証の適用可否を事前にご確認ください
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※金額は{UPDATED}時点までの当サイト調査値・公式掲載値です。冷媒の種類（R32/R410A/R22）・補充量・漏れ箇所により変動します。旧式のR22冷媒は割高になる傾向があります。
            </p>
          </section>

          <section id="why" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">補充のみでは再発しやすい理由</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              エアコンの冷媒ガスは、ガソリンのように消費されるものではなく、<strong>配管の中を循環しています</strong>。
              そのため、正常なエアコンであれば、ガスは長年使用しても減りません。ガスが減っている場合は、配管接続部・熱交換器などのどこかに漏れ箇所があるのが原則です。
            </p>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              これが、「補充のみであれば1〜2万円台」と「メーカー修理は7万円〜」という価格差が生じる理由です。
              メーカーの冷媒系統修理は<strong>漏れ箇所の特定・部品交換までを含む</strong>ため高額になります。一方、
              補充のみの安価なメニューでは、<strong>漏れが残っている場合、数週間〜数カ月で再発する可能性</strong>があります。
            </p>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
              <p className="font-bold text-rose-800 mb-1">見積もり時の確認事項</p>
              <ul className="text-sm leading-7 text-slate-700 space-y-1">
                <li>① その金額は<strong>漏れ点検（ガス圧測定等）を含むか</strong></li>
                <li>② 漏れが見つかった場合の<strong>修理費用の上限目安</strong></li>
                <li>③ 補充のみの場合、<strong>再発時の保証があるか</strong></li>
              </ul>
              <p className="text-sm leading-7 text-slate-700 mt-2">
                国民生活センターも、2026年6月3日にエアコン修理の高額請求トラブルに関する注意喚起を公表しています。総額は書面（メール可）でご確認ください。
              </p>
            </div>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">DIYでの補充とメーカー保証</h2>
            <p className="text-sm leading-7 text-slate-700">
              市販の冷媒ガス缶を使用したご自身での補充はお控えください。ダイキン公式FAQには<strong>「誤って冷媒ガスを放出させてしまった場合は、メーカー保証対象外です」</strong>と明記されています（{UPDATED}確認）。
              冷媒の取り扱いには規定量の管理・真空引きなどの専門作業が必要であり、入れすぎや混合はかえって故障の原因になります。
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
                <li>・ダイキン公式FAQ「冷えない・暖まらない（修理金額）」電気系統28,000〜46,000円／冷媒系統70,000〜105,000円程度・税込、誤放出は保証対象外との記載（{UPDATED}確認）</li>
                <li>・電気の工事屋さん／EPARK／ミツモア／すまいのホットラインの金額: 当サイトの業者横断調査（<Link href="/cost/price-index/" className="text-sky-600 underline underline-offset-2">27社料金インデックス</Link>）</li>
                <li>・ヤマダ電機の旧公式掲載額: 2026年7月11日の当サイト確認値（現在の公式サイトは見積もり方式）</li>
                <li>・国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/cost/repair-price/", label: "症状別の修理費用相場一覧" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断ガイド" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料 横断比較" },
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
