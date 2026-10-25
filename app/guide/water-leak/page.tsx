import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの水漏れを自分で直す方法｜公式の確認手順と修理費用の相場【2026年】",
  description:
    "エアコン室内機からの水漏れの確認手順を、ダイキン公式FAQにもとづいてご説明します。ドレンホースの詰まりの確認からフィルター清掃まで、ご自身で対応できる範囲と、メーカー修理の目安額（ダイキン公式：壁掛け17,000〜64,000円）、業者の実額相場、賃貸の場合の費用負担を、公式情報にもとづいて掲載しています。",
  alternates: { canonical: "/guide/water-leak/" },
};

const UPDATED = "2026年10月25日";

const faqs = [
  {
    q: "エアコンから水が漏れた場合、まず何をすればよいですか？",
    a: "まず使用をお控えください。ダイキン公式FAQでも「床や壁などの家屋や家具を傷める恐れがありますので、ご使用を控えてください」と案内されています（2026年10月25日確認）。バケツや雑巾で被害を抑えたうえで、屋外のドレンホースから水が排出されているかを確認してください。",
  },
  {
    q: "水漏れは自分で直せますか？",
    a: "原因がドレンホース先端の詰まり（植木鉢などの障害物）やフィルターの汚れであれば、障害物の除去やフィルター清掃で改善する場合があります。これらは、ダイキン公式FAQが利用者による確認範囲として案内している内容です。一方、ドレンホース内部の詰まりや折れ曲がり、ドレンポンプの故障が原因の場合は、点検・修理の依頼が必要です。",
  },
  {
    q: "水漏れの修理費用はどのくらいかかりますか？",
    a: "ダイキンに直接依頼する場合の公式目安は壁掛けタイプで17,000〜64,000円程度（税込・出張料/技術料/部品代込み・保証期間終了後、2026年10月25日確認）です。想定される作業は、ドレンパン交換・ドレン清掃・ドレンポンプ交換などです。修理業者では、水漏れ5,500円〜と公式サイトに掲載している業者（電気の工事屋さん）や、相場11,000〜20,000円（すまいのホットライン掲載）といった金額を確認しています。原因によって金額の幅が大きいため、作業前に書面で見積もりを確認することが重要です。",
  },
  {
    q: "室外機から水が出ている場合も故障ですか？",
    a: "故障ではありません。ダイキン公式FAQによると、冷房・除湿運転では室外機内部や配管接続部が冷媒ガスで冷やされて水滴が発生し、暖房運転では霜取り運転による水や湯気が出ます（2026年10月25日確認）。ただし、室外機の周辺が多量の水でぬれている場合は、ドレンホースからの排水や雨水の可能性もあります。",
  },
  {
    q: "賃貸の部屋で水漏れした場合、修理費は誰の負担ですか？",
    a: "備え付けのエアコンが通常使用で故障した場合の修理費は、原則として貸主（大家）の負担です（民法606条）。借主が独自に業者を手配すると費用を負担してもらえないおそれがあるため、まず管理会社・大家へご連絡ください。詳しくは、賃貸エアコン修理のガイドで法律の条文と手順をご説明しています。",
  },
];

export default function WaterLeakPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/water-leak/" },
          { name: "エアコンの水漏れ対処", href: "/guide/water-leak/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの水漏れを自分で直す方法
            <br className="hidden md:block" />
            公式の確認手順と修理費用の相場
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-25">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            冷房を使用する夏に多いトラブルのひとつが、室内機から水が垂れる<strong className="font-semibold text-slate-900">「水漏れ」</strong>です。
            水漏れは、<strong className="font-semibold text-slate-900">ご自身で確認・解消できる場合と、修理の依頼が必要な場合の切り分け手順を、メーカーが公式に公開している</strong>症状です。
            本記事ではダイキン公式FAQの手順にもとづき、ご自身で対応できる範囲、修理を依頼した場合の実額、賃貸の場合の注意点を、出典とあわせてご説明します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">最初に行うこと（ダイキン公式FAQより）</p>
            <p className="text-sm leading-7 text-slate-700">
              「床や壁などの家屋や家具を傷める恐れがありますので、ご使用を控えてください。水が止まるまでバケツや雑巾で被害を抑えてください」。
              公式の案内では、まず<strong>運転を止めて被害を抑える</strong>ことが最初の手順とされています。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身で確認する手順（公式FAQにもとづく）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ダイキン公式FAQ「室内機から水が漏れる」の切り分けは、<strong>屋外のドレンホースから水が出ているかどうか</strong>が判断の基準です（{UPDATED}確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">状態</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ご自身でできること</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">改善しない場合</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ドレンホースから排水されていない</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ホース先端が植木鉢などの障害物でふさがっていないかを確認し、取り除きます。水が出て水漏れが止まれば正常です
                    </td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ホース内部の詰まり・折れ曲がりなど、排水経路の不具合の可能性があります。点検・修理をご依頼ください
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ドレンホースから排水されている</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      エアフィルターの汚れを確認して清掃します。汚れていると、内部の結露水が吹き出し口から漏れる場合があります
                    </td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      フィルターに汚れがない場合や、清掃後も漏れる場合は、点検・修理をご依頼ください
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「室内機から水が漏れる（ルームエアコン）」（{UPDATED}確認）。他メーカーも構造は同様ですが、お使いの機種の取扱説明書・公式FAQをご確認ください。
            </p>
          </section>

          <section id="outdoor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">室外機からの水は故障ではありません</h2>
            <p className="text-sm leading-7 text-slate-700">
              室外機まわりの水について、ダイキン公式FAQでは<strong>「故障ではありません」</strong>と明記されています（{UPDATED}確認）。
              冷房・除湿運転では室外機内部や配管接続部が冷媒ガスで冷やされて水滴が発生し、暖房運転では霜取り運転で霜が溶けた水や湯気が出ます。
              ベランダへの排水が気になる場合は、ドレンソケットとドレンホースで排水経路を設ける方法が公式に案内されています（寒冷地では凍結するため取り付けできません）。
            </p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理を依頼した場合の費用（公式・実額）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">依頼先</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">水漏れ修理の金額</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダイキン（メーカー直接）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">壁掛け 17,000〜64,000円程度（税込）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      公式の修理目安金額（出張料・技術料・部品代込み、保証期間終了後）。想定部品はドレンパン・ドレン清掃・ドレンポンプ交換等。<strong>修理しなかった場合も出張料と点検費が発生する</strong>と公式に明記されています
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">修理業者（公式実額の例）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">水漏れ 5,500円〜</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      電気の工事屋さんが公式サイトに症状別の実額を掲載しています（当サイト調査）。軽度のドレン詰まりの解消のみであれば、費用を抑えられる場合があります
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">マッチング型の掲載相場</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">11,000〜20,000円</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      すまいのホットラインに掲載されている水漏れ修理の相場です（当サイト調査）。原因により変動します
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※金額はいずれも{UPDATED}時点までの当サイト調査値・公式掲載値です。故障状況・機種・地域により変動するため、必ず作業前に書面の見積もりで総額をご確認ください。
            </p>
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
              <p className="font-bold text-rose-800 mb-1">高額請求のトラブルにご注意ください</p>
              <p className="text-sm leading-7 text-slate-700">
                国民生活センターは2026年6月3日、エアコン修理に関する相談件数が2025年度は1,251件と、2021年度（451件）の2倍以上に増えているとして、注意喚起を公表しています。
                「無料」と表示されていても出張費・点検費が発生する場合があるため、<strong>①出張費 ②見積もり後のキャンセル料 ③総額</strong>の3点を電話の際に確認し、書面（メール可）で残すことをおすすめします。
              </p>
            </div>
          </section>

          <section id="rental" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">賃貸の場合は業者より先に管理会社へご連絡ください</h2>
            <p className="text-sm leading-7 text-slate-700">
              備え付けエアコンの水漏れは、通常使用による故障なら<strong>原則として貸主（大家）負担で修理</strong>されます（民法606条）。
              借主が独自に業者を手配すると費用を負担してもらえないおそれがあるため、①管理会社・大家に連絡する、②対応が遅い場合は民法607条の2にもとづく手順を確認する、の順に進めてください。
              条文と具体的な手順は<Link href="/guide/rental-aircon-repair/" className="text-sky-600 underline underline-offset-2">賃貸エアコン修理の費用負担ガイド</Link>でご説明しています。
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
                <li>・ダイキン公式FAQ「室内機から水が漏れる（ルームエアコン）」（{UPDATED}確認）</li>
                <li>・ダイキン公式FAQ「エアコンから水が漏れている（修理金額）」壁掛け17,000〜64,000円程度・税込（{UPDATED}確認）</li>
                <li>・ダイキン公式FAQ「室外機から水が出る（ルームエアコン）」故障ではない旨の記載あり（{UPDATED}確認）</li>
                <li>・電気の工事屋さん／すまいのホットラインの掲載額：当サイトによる業者横断の調査（<Link href="/cost/price-index/" className="text-sky-600 underline underline-offset-2">料金インデックス</Link>）</li>
                <li>・国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）</li>
                <li>・民法606条（賃貸物の修繕義務）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸エアコン修理の費用負担ガイド" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/cost/price-index/", label: "料金インデックス（当サイト調査）" },
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
