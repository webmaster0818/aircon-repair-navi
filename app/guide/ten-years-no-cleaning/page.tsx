import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンを10年掃除していない場合｜業者5社の受付条件とクリーニングか買い替えかの判断【2026年11月確認】",
  description:
    "10年間掃除していないエアコンをクリーニングに出せるかを、おそうじ本舗・パナソニック・カジタク・ダスキン・ヤマダデンキの公式ページで確認しました。年数で断る場合があると明記していたのは5社中3社です。資源エネルギー庁のフィルター清掃の省エネ効果と、クリーニングか買い替えかの判断の目安も掲載しています。",
  alternates: { canonical: "/guide/ten-years-no-cleaning/" },
};

const UPDATED = "2026年11月21日";

const faqs = [
  {
    q: "10年掃除していないエアコンでもクリーニングを頼めますか？",
    a: "頼める場合と断られる場合があります。おそうじ本舗は「古いエアコンでも不具合なく稼働しているものであれば、ほとんどの場合クリーニングいたします」としつつ、製造から9年以上の機種は断る場合や保証できない場合があると記載しています。カジタクは10年以上の機種を当日断る場合がある（施工しなかった場合は全額返金）、パナソニックは購入から10年以上の機種は対応できない場合がある、としています（いずれも2026年11月21日確認）。",
  },
  {
    q: "10年掃除していないと電気代はどれくらい変わりますか？",
    a: "資源エネルギー庁の省エネポータルサイトでは、フィルターが目詰まりしたエアコン（2.5kW）とフィルターを月1〜2回清掃した場合を比べ、年間で約37.90kWh・約1,170円の節約になるとしています（目詰まりによる風量低下率を20％と想定）。内部の汚れによる差を示した公的な数値は、当サイトでは確認できていません。",
  },
  {
    q: "古いエアコンのクリーニングで壊れた場合は補償されますか？",
    a: "古い機種は補償の対象外とする業者があります。おそうじ本舗は、補修用性能部品の最低保有期間を一般的に製造から9年とし、清掃が原因の故障でも本体交換等の補償の対象にはならないと公式FAQに記載しています（2026年11月21日確認）。依頼前に、製造年と補償の範囲を業者に確認してください。",
  },
  {
    q: "クリーニングと買い替えのどちらがよいですか？",
    a: "正常に動いていて、カビ臭さや風量の低下が気になる程度であれば、クリーニングで改善が見込めます。一方、冷えない・異音がする・水漏れが続くなど故障の症状がある場合は、クリーニングでは直りません。製造から10年前後の機種は部品の保有期間が終わっている可能性があるため、修理と買い替えを比較したうえでご判断ください。",
  },
  {
    q: "自分で内部を洗浄してもよいですか？",
    a: "お控えください。NITE（製品評価技術基盤機構）は、誤った内部洗浄方法による火災事故が2019年度までの5年間に20件発生したと公表し、内部洗浄は正しい知識を持った業者に依頼するよう呼びかけています。ご自身でできるのはフィルターなどメーカーが案内する範囲のお手入れです。",
  },
];

type Row = { name: string; rule: string; quote: string };

const rows: Row[] = [
  {
    name: "おそうじ本舗",
    rule: "製造から9年以上",
    quote: "「製造から9年以上経過しているエアコンは…サービスをお断りさせていただく場合、もしくはサービスを保証できない可能性がございます」。FAQでは「不具合なく稼働しているものであれば、ほとんどの場合クリーニングいたします」",
  },
  {
    name: "パナソニック",
    rule: "購入から10年以上",
    quote: "「お買い上げから10年以上経過しているエアコンや、一部機種によっては対応できない場合がございます」",
  },
  {
    name: "カジタク（イオングループ）",
    rule: "10年以上",
    quote: "【当日お断りする可能性があるケース】として「10年以上のエアコンの場合」。「施工しなかった場合全額返金」",
  },
  {
    name: "ダスキン",
    rule: "年数の記載なし",
    quote: "「製造後、長期間経過している機種や、正常動作しないもの、設置環境等によってはお断りさせていただく場合がございます」",
  },
  {
    name: "ヤマダデンキ",
    rule: "年数の記載なし",
    quote: "年数による受付制限の記載は確認できず。「設置場所、設置状況により施工対応ができない場合がございます」",
  },
];

export default function TenYearsNoCleaningPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/ten-years-no-cleaning/" },
          { name: "10年掃除していないエアコン", href: "/guide/ten-years-no-cleaning/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">クリーニングガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンを10年掃除していない場合
            <br className="hidden md:block" />
            業者の受付条件とクリーニングか買い替えかの判断
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-21">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            10年間掃除していないエアコンでも、<strong className="font-semibold text-slate-900">正常に動いていればクリーニングを受け付ける業者はあります</strong>。
            ただし、製造からの年数で断る場合や、故障時の補償の対象外とする場合があります。
            当サイトでは主要5社の公式ページを{UPDATED}に確認し、年数で断る場合があると明記していたのは<strong className="font-semibold text-slate-900">5社中3社（おそうじ本舗・パナソニック・カジタク）</strong>でした。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">先に確認していただきたい3点</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>室内機の銘板（側面などのシール）で<strong>製造年</strong>を確認する</li>
              <li>冷えない・異音・水漏れなど<strong>故障の症状がないか</strong>を確認する（クリーニングでは直りません）</li>
              <li>依頼先に<strong>年数による受付条件と、作業が原因で故障した場合の補償</strong>を確認する</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="accept" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">古いエアコンの受付条件：主要5社の公式の記載</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式ページにある、製造年・購入年による受付条件の記載を、表記どおりに抜き出しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">年数の条件</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式の記載</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top">{r.rule}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}に各社の公式ページで確認。条件は変更されることがあります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              年数の記載がない業者でも、訪問時の状態確認で断られる場合があります。
              おそうじ本舗は年数で断る理由を「メーカーが部品の製造を終了しておりますので」と説明しています。
              10年前後の機種は、作業中に部品が破損した場合に交換部品が手に入らない可能性があるためです。
              各社の料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>に掲載しています。
            </p>
          </section>

          <section id="effect" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">掃除をしないことによる電気代の差（公的な試算）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              資源エネルギー庁の省エネポータルサイトは、フィルターを月に1〜2回清掃した場合の省エネ効果を次のように示しています（目詰まりによる風量低下率を20％と想定）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアコンの能力</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">年間の省エネ量</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">年間の節約額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2">2.5kW</td><td className="border border-slate-300 px-3 py-2">37.90kWh</td><td className="border border-slate-300 px-3 py-2">約1,170円</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2">4.0kW</td><td className="border border-slate-300 px-3 py-2">40.30kWh</td><td className="border border-slate-300 px-3 py-2">約1,250円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              当サイトの試算では、この差が10年間続いた場合、2.5kWで約11,700円、4.0kWで約12,500円になります（単価・使用条件は資源エネルギー庁の想定のまま、10倍した目安です）。
              ただし、これは<strong>フィルターの目詰まり</strong>による差で、ご自身のお手入れで防げる部分です。
              内部（熱交換器・送風ファン）の汚れによる電気代の差を示した公的な数値は、当サイトでは確認できていません。
              業者のクリーニングで変わる点・変わらない点は<Link href="/guide/cleaning-effect/" className="text-sky-700 underline">エアコンクリーニングの効果</Link>に整理しています。
            </p>
          </section>

          <section id="decide" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">クリーニングか買い替えかの判断の目安</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">状態</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">検討する対応</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2 leading-6">正常に冷暖房できるが、カビ臭さ・吹き出し口の黒い汚れ・風量の低下が気になる</td><td className="border border-slate-300 px-3 py-2 leading-6">クリーニング。製造年と補償の範囲を事前に確認</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 leading-6">冷えない・暖まらない、異音、水漏れが続く、ランプが点滅する</td><td className="border border-slate-300 px-3 py-2 leading-6">クリーニングでは直らないため、点検・修理の見積もりを取る（<Link href="/symptom/" className="text-sky-700 underline">症状別の確認</Link>）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 leading-6">製造から10年前後で、修理の見積もりが高い、または部品がない</td><td className="border border-slate-300 px-3 py-2 leading-6">買い替えを比較する（<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命と買い替えの判断</Link>）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              エアコンの設計上の標準使用期間や平均使用年数は<Link href="/guide/lifespan/" className="text-sky-700 underline">エアコンの寿命</Link>に、修理と買い替えの費用の比べ方は<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>に掲載しています。
              買い替えまでの間も使い続ける場合は、<Link href="/guide/cleaning-frequency/" className="text-sky-700 underline">クリーニングの頻度の目安</Link>もご参照ください。
            </p>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身で内部を洗浄するのはお控えください</h2>
            <p className="text-sm leading-7 text-slate-700">
              長く掃除していないと内部まで洗いたくなりますが、NITE（製品評価技術基盤機構）は、誤った内部洗浄方法による火災事故が2019年度までの5年間に20件発生したと公表しています。
              洗浄液が内部の配線端子に付着し、トラッキング現象で出火した事故例があり、NITEは「エアコンの内部洗浄は正しい知識を持った業者に依頼してください」と呼びかけています。
              ご自身でできる範囲は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>をご覧ください。
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
              <li>おそうじ本舗「壁掛けタイプエアコンクリーニング」https://www.osoujihonpo.com/house-cleaning/aircon/wall/</li>
              <li>おそうじ本舗 よくあるご質問（古いエアコン）https://www.osoujihonpo.com/house-cleaning/faq/53/</li>
              <li>パナソニック「Panasonic エアコンクリーニング」https://panasonic.jp/membership/cleaning/aircon.html</li>
              <li>カジタク エアコンクリーニング https://www.kajitaku.com/lp/lp-00056</li>
              <li>ダスキン「エアコンクリーニング（壁掛けタイプ）」https://www.duskin.jp/servicemaster/spot/sm000010/</li>
              <li>ヤマダデンキ「ヤマダデンキのエアコンクリーニング」https://www.yamada-denki.jp/service/house_cleaning/aircon.html</li>
              <li>資源エネルギー庁 省エネポータルサイト「空調｜無理のない省エネ節約」https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/howto/airconditioning/index.html</li>
              <li>NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）https://www.nite.go.jp/jiko/chuikanki/press/2020fy/prs200625.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの判断" },
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度の目安" },
                { href: "/guide/cleaning-effect/", label: "エアコンクリーニングの効果と依頼の判断" },
                { href: "/guide/cleaning-failure/", label: "エアコンクリーニングの失敗を防ぐ方法" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
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
