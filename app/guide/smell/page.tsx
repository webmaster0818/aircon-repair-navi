import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンから変な臭いがする原因と対処｜洗浄スプレーを使用してはいけない理由【公式FAQにもとづく】",
  description:
    "エアコンのカビ臭・酸っぱい臭いの原因と対処を、ダイキン公式FAQにもとづいてご説明します。臭いの原因（ホコリ・生活臭と結露水によるカビ）、公式が案内する対処（クリーニング・内部クリーン・ドライキープ）、市販の洗浄スプレーの使用を公式が控えるよう案内している理由（発煙発火のおそれ）を掲載しています。",
  alternates: { canonical: "/guide/smell/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "エアコンの臭いの原因は何ですか？",
    a: "ダイキン公式FAQでは、運転時に部屋の空気と一緒にホコリや生活臭などの臭い成分が吸い込まれてエアコン内部に付着し、さらに冷房時の結露水の影響で発生したカビと混ざり合うことで、独特な臭いになると説明されています（2026年9月8日確認）。「カビ臭い」「酸っぱい」と感じる臭いの多くは、この複合的な臭いです。",
  },
  {
    q: "市販のエアコン洗浄スプレーで掃除してもよいですか？",
    a: "使用はお控えください。ダイキン公式FAQでは「市販の洗浄スプレーは、ご使用しないでください」と案内されています（2026年9月8日確認）。エアコン内部のクリーニングには高い専門知識が必要であり、誤った方法では部品の破損による水漏れや電気部品の故障、最悪の場合は発煙発火につながるおそれがあるためです。内部の洗浄は専門業者へご依頼ください。",
  },
  {
    q: "自分でできる臭い対策はありますか？",
    a: "エアフィルターの清掃と、エアコンの機能の活用が有効です。ダイキン公式FAQでは、冷房・除湿後に内部を乾燥させてカビ・臭いの発生を抑える「内部クリーン」機能（運転停止後に約80〜140分）と、設定温度到達時に室内ファンを止めて臭いの放出を抑える「ドライキープ」機能（2009年モデル以降の一部機種）の利用が案内されています（2026年9月8日確認）。ただし、公式FAQには「すでに発生してしまったカビや臭いは内部クリーンでは除去できません」とも明記されており、すでに付着した臭いを取り除くにはクリーニングが必要です。",
  },
  {
    q: "エアコンクリーニングの費用はどのくらいですか？",
    a: "壁掛けの通常タイプとお掃除機能付きタイプで料金帯が異なります。当サイトのクリーニング料金ガイドでは、主要業者の公表料金を一覧で比較しています。臭いの再発を防ぐには、クリーニング後も内部クリーン機能を継続して使用することが、公式の案内に沿った方法です。",
  },
  {
    q: "運転開始直後だけ臭うのはなぜですか？",
    a: "冷房・除湿時は、室内機にこもった臭いが出るのを抑える機能が働くため、運転を開始してもすぐに風が出ない機種があります（ダイキン公式FAQ・2026年9月8日確認）。それでも最初の風で臭いを感じる場合は、内部に臭い成分やカビが蓄積している可能性があります。フィルター清掃、内部クリーン機能の活用の順に対処し、改善しない場合はクリーニングをご検討ください。",
  },
];

export default function SmellPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/smell/" },
          { name: "エアコンの臭い", href: "/guide/smell/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンから変な臭いがする原因と対処
            <br className="hidden md:block" />
            洗浄スプレーの使用を控えるべき理由
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-08">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            久しぶりに冷房を使用した際の<strong className="font-semibold text-slate-900">カビ臭い・酸っぱい臭い</strong>は、夏に多いトラブルのひとつです。
            臭いの原因と対処はメーカーが公式FAQで説明しており、その中には<strong className="font-semibold text-slate-900">市販の洗浄スプレーを使用しないよう求める案内</strong>も含まれています。
            本記事ではダイキン公式FAQの記載にもとづき、原因、ご自身でできる対策、避けるべき行為、業者によるクリーニングの順にご説明します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50/70 p-5">
            <p className="font-bold text-red-800 mb-1">公式の注意事項：市販の洗浄スプレーは使用しないでください</p>
            <p className="text-sm leading-7 text-slate-700">
              ダイキン公式FAQでは「市販の洗浄スプレーは、ご使用しないでください」と案内されています。誤った方法での内部クリーニングは<strong>部品破損による水漏れ・電気部品の故障、最悪の場合は発煙発火</strong>につながるおそれがあるためです（{UPDATED}確認）。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="cause" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">臭いの原因（公式FAQの説明）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ダイキン公式FAQ「室内機からニオイがする」によると、臭いの発生メカニズムは次の2段階です（{UPDATED}確認）。
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>吸着</strong>：運転中に部屋の空気と一緒にホコリ・生活臭などの臭い成分が吸い込まれ、内部に付着します。</li>
              <li><strong>カビ</strong>：冷房時の結露水の影響で、内部にカビが発生します。</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              公式FAQでは、この2つが混ざり合って「独特なニオイ」になると説明されています。臭いは故障ではなく<strong>汚れの蓄積</strong>によるものであり、対処の基本は清掃です。
            </p>
          </section>

          <section id="self" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身でできる対策（公式が案内する範囲）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">対策</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">内容</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">効果の範囲</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">フィルター清掃</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">エアフィルターのホコリを掃除機で吸い取り、水洗いして乾かします（取扱説明書に記載の範囲）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">臭い成分の付着を減らす基本の対策です。定期的な実施をおすすめします</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">内部クリーン機能</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">冷房・除湿の停止後に送風・暖房で内部を乾燥させます（約80〜140分で自動停止・公式FAQ）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7"><strong>予防のみ</strong>。「すでに発生したカビ・臭いは除去できない」と公式に明記されています</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ドライキープ機能</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">設定温度到達時に室内ファンを停止し、こもった臭いの放出を抑えます（2009年モデル以降の一部機種）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">冷房中の臭いの放出を抑えます。設定方法は取扱説明書をご参照ください</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「室内機からニオイがする」「内部クリーンとは」（{UPDATED}確認）。機能名・搭載有無はメーカー・機種により異なります。
            </p>
          </section>

          <section id="cleaning" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">付着した臭いにはクリーニングが必要です</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              公式FAQでは「ニオイが気になる場合は、エアコンクリーニングをおすすめします」としたうえで、依頼先として販売店またはメーカーを案内しています。
              内部洗浄は専門知識が必要な作業であり、前述のとおり、ご自身でのスプレー洗浄は公式に控えるよう案内されています。
              業者ごとの公表料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">クリーニング料金の比較ガイド</Link>に掲載しています（壁掛けの通常タイプとお掃除機能付きタイプで料金帯が異なります）。
              クリーニング後も内部クリーン機能を継続して使用することが、公式の予防策に沿った方法です。
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

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/water-leak/", label: "エアコンの水漏れ対処" },
                { href: "/guide/power-not-on/", label: "電源が入らない場合の確認手順" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
                { href: "/guide/where-to-repair/", label: "修理・清掃の依頼先の選び方" },
                { href: "/guide/noise/", label: "エアコンの異音の原因" },
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
