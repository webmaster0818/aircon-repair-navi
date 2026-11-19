import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングの完全分解洗浄とは｜通常洗浄との違い・外す部品・料金を6社の公式で比較【2026年11月確認】",
  description:
    "エアコンの完全分解洗浄（ドレンパン・送風ファンまで外す洗浄）と通常の分解洗浄の違いを、おそうじ本舗・パナソニック・ダスキン・カジタク・ヤマダデンキ・エディオンの公式ページで確認し、外す部品・料金・作業時間・対象外の条件を比較しました。完全分解を公式に提供していたのは6社中2社です。故障時の補償の規定も掲載しています。",
  alternates: { canonical: "/guide/disassembly-cleaning/" },
};

const UPDATED = "2026年11月19日";

const faqs = [
  {
    q: "完全分解洗浄と通常の分解洗浄は何が違いますか？",
    a: "外す部品が違います。ダスキンの公式コラムでは、完全分解洗浄で外す主な部品を「カバー・フィルター・ドレンパン・送風ファン」とし、通常の分解洗浄は「カバー・フィルターを取り外すのが一般的」で、他の部品は取り付けたまま熱交換器や送風ファンを高圧洗浄すると説明しています（2026年11月19日確認）。作業時間の目安は、分解洗浄が1〜2時間程度、完全分解洗浄が1.5〜3時間程度とされています。",
  },
  {
    q: "完全分解洗浄の料金はいくらですか？",
    a: "おそうじ本舗では、壁掛けエアコンクリーニングのオプションとして完全分解洗浄が1台8,800円（税込）です。パナソニックの完全分解コース（パナソニック製のみ）は、お掃除機能なしが27,280円、お掃除機能ありが32,780円（税込）です（いずれも2026年11月19日確認）。機種や設置状況により対応できない場合があります。",
  },
  {
    q: "完全分解洗浄はどこでも依頼できますか？",
    a: "当サイトが公式ページを確認した6社のうち、完全分解洗浄を料金つきで公式に提供していたのは、おそうじ本舗とパナソニックの2社でした（2026年11月19日確認）。カジタクは「分解洗浄であり、完全分解洗浄ではありません」、ヤマダデンキは「完全分解は致しません」と明記しています。おそうじ本舗も、東芝・ダイキン製は対応できる店舗が限られるとしています。",
  },
  {
    q: "完全分解洗浄は必要ですか？",
    a: "メーカーは完全分解の要否を示していません。送風ファンやドレンパンの奥まで汚れやカビが付着している場合に、通常の高圧洗浄では届きにくい部分まで洗えることが完全分解洗浄の特徴です。一方で、作業時間が長くなり、料金も上がります。古い機種は対象外とされることもあるため、製造年を確認したうえでご依頼ください。",
  },
  {
    q: "完全分解洗浄で故障した場合はどうなりますか？",
    a: "補償の規定は事業者ごとに異なります。おそうじ本舗は責任保険に加入しており補償期間は作業後30日間、パナソニックは作業後7日以内の不具合の連絡と、作業が原因の場合の原則修理対応を規約に定めています（2026年11月19日確認）。ダスキンの公式コラムは、古い機種で完全分解洗浄をきっかけに故障しても通常は保証されないと説明しています。",
  },
];

type Row = {
  name: string;
  full: string;
  parts: string;
  price: string;
  time: string;
  note: string;
};

const rows: Row[] = [
  {
    name: "おそうじ本舗",
    full: "あり（オプション）",
    parts: "ドレンパン・送風ファンまで外す（ドレンパン分解洗浄／送風ファンの奥の洗浄）",
    price: "通常の壁掛け洗浄（お掃除機能なし14,300円・あり24,200円）＋完全分解洗浄8,800円",
    time: "完全分解洗浄 約1〜2時間",
    note: "東芝・ダイキン製は対応店舗が限られる。製造9年以上は断る場合あり。床置き・ウィンドウ型は対応不可",
  },
  {
    name: "パナソニック",
    full: "あり（パナソニック製のみ）",
    parts: "外装・フィルター掃除機構・吹出グリル・クロスフローファン・電装部。内部部品を手洗い",
    price: "お掃除機能なし27,280円／あり32,780円（通常分解コースは17,600円／22,000円）",
    time: "120〜180分（通常分解コースは60〜100分）",
    note: "購入から10年以上の機種は対応できない場合あり。ドレンパンの扱いは記載なし",
  },
  {
    name: "ダスキン",
    full: "なし（通常の分解洗浄）",
    parts: "カバーとフィルターを外し、熱交換器やファンは高圧洗浄",
    price: "1台15,400円／お掃除機能付き26,400円",
    time: "お掃除機能なし1〜1.5時間／付き1.5〜3時間",
    note: "製造後長期間経過した機種は断る場合あり",
  },
  {
    name: "カジタク（イオングループ）",
    full: "なし（「分解洗浄であり、完全分解洗浄ではありません」）",
    parts: "本体カバー・フィルター・本体内部（電装ボックス、ドレンパンの分解は除く）",
    price: "お掃除機能なし14,300円／付き25,080円",
    time: "記載を確認できず",
    note: "10年以上の機種は当日断る場合あり（施工しなかった場合は全額返金）",
  },
  {
    name: "ヤマダデンキ",
    full: "なし（「完全分解は致しません」）",
    parts: "ドレンパンと送風ファンを取り付けたまま高圧洗浄",
    price: "1台目13,200円／2台目以降11,000円",
    time: "約90分",
    note: "ノクリアX・Airest・三菱FZ/FDは7,700円追加",
  },
  {
    name: "エディオン",
    full: "公式ページに記載なし",
    parts: "記載を確認できず",
    price: "おそうじ機能なし13,800円／付き19,800円（1台目）",
    time: "約1〜1.5時間",
    note: "作業起因の故障は作業後3か月以内なら無償修理",
  },
];

export default function DisassemblyCleaningPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/disassembly-cleaning/" },
          { name: "完全分解洗浄とは", href: "/guide/disassembly-cleaning/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">クリーニングガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングの完全分解洗浄とは
            <br className="hidden md:block" />
            通常洗浄との違い・外す部品・料金の比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの<strong className="font-semibold text-slate-900">完全分解洗浄</strong>とは、カバーとフィルターに加えて<strong className="font-semibold text-slate-900">ドレンパンや送風ファンまで取り外して洗う</strong>クリーニングです。
            多くの業者が行う通常の分解洗浄は、これらの部品を取り付けたまま高圧洗浄します。
            当サイトでは主要6社の公式ページを{UPDATED}に確認し、外す部品・料金・作業時間を比較しました。完全分解を料金つきで公式に提供していたのは<strong className="font-semibold text-slate-900">おそうじ本舗とパナソニックの2社</strong>です。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">完全分解洗浄と通常の分解洗浄の違い（ダスキン公式コラムの説明）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>完全分解洗浄：カバー・フィルター・<strong>ドレンパン・送風ファン</strong>を外す（業者によっては熱交換器も）。作業時間は<strong>1.5〜3時間程度</strong></li>
              <li>通常の分解洗浄：カバー・フィルターを外し、他の部品は取り付けたまま熱交換器や送風ファンを高圧洗浄。作業時間は<strong>1〜2時間程度</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">主要6社の洗浄範囲・料金の比較</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              壁掛けエアコン1台の料金（税込）を、各社の公式ページの記載どおりに掲載しています。複数台割引・キャンペーン価格は含めていません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[760px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">完全分解</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">外す部品・洗浄方法</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">料金（税込・1台）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">作業時間</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対象外・条件</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.full}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.parts}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.price}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.time}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}に各社の公式ページで確認。料金は改定されることがあります（パナソニックは2026年4月1日に完全分解コースの価格を改定）。ご依頼前に公式サイトで最新の料金をご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              表のとおり、おそうじ本舗の完全分解洗浄は通常洗浄への<strong>追加オプション</strong>で、パナソニックは<strong>自社製品専用のコース</strong>です。
              パナソニック製以外のエアコンで完全分解を希望される場合は、おそうじ本舗など対応する事業者へ、お使いのメーカー・機種で対応できるかを事前にご確認ください。
              主要業者の通常洗浄の料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>にも掲載しています。
            </p>
          </section>

          <section id="when" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">完全分解洗浄を検討する目安</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>送風ファンの奥に汚れ・カビが見える</strong>：日立は「室内機のファンのお手入れは分解を伴うため、お客様ご自身で掃除ができません」と案内しています。</li>
              <li><strong>通常のクリーニング後も臭いが残る</strong>：ドレンパンや送風ファンの奥に汚れが残っている可能性があります。</li>
              <li><strong>水漏れの原因がドレンパンの汚れと考えられる</strong>：おそうじ本舗の完全分解洗浄はドレンパン分解洗浄を含みます。ただし、水漏れの原因は汚れ以外の場合もあります（<Link href="/guide/water-leak/" className="text-sky-700 underline">水漏れの確認手順</Link>）。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              一方、製造から年数がたった機種は、完全分解・通常洗浄とも断られる場合があります（おそうじ本舗は製造9年以上、パナソニックは購入から10年以上、カジタクは10年以上の機種について記載）。
              10年を超えている場合は、<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命と買い替えの判断</Link>もあわせてご検討ください。
              クリーニングの頻度の目安は<Link href="/guide/cleaning-frequency/" className="text-sky-700 underline">エアコンクリーニングの頻度</Link>に掲載しています。
            </p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">作業が原因で故障した場合の補償</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式の規定</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">おそうじ本舗</td><td className="border border-slate-300 px-3 py-2 leading-7">責任保険に加入。補償期間は作業後30日間（公式FAQ）。古い機種は本体交換等の補償の対象外</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td><td className="border border-slate-300 px-3 py-2 leading-7">作業後7日以内に不具合を連絡。作業が原因の場合は原則として修理対応。賠償は製品の価値に相当する額が上限（利用規約）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">エディオン</td><td className="border border-slate-300 px-3 py-2 leading-7">作業に起因する故障は作業後3か月以内なら無償修理。汚れ残りは1か月以内なら無料で再清掃</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダスキン</td><td className="border border-slate-300 px-3 py-2 leading-7">満足されるまでサービスをやり直す「満足の保証」。破損時の補償の規定は公式ページで確認できず</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※{UPDATED}確認。</p>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身での分解はお控えください</h2>
            <p className="text-sm leading-7 text-slate-700">
              パナソニックは「ご自身で市販の洗浄剤を用いて内部の洗浄をしたり、工具を使った分解掃除を行わないでください」と案内しています。最悪の場合、発煙・発火にいたるおそれがあるためです。
              NITE（製品評価技術基盤機構）は、誤った内部洗浄方法による火災事故が2019年度までの5年間に20件発生したと公表しています。
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
              <li>おそうじ本舗 よくあるご質問 https://www.osoujihonpo.com/house-cleaning/faq/42/ ・ https://www.osoujihonpo.com/house-cleaning/faq/53/</li>
              <li>パナソニック「Panasonic エアコンクリーニング」https://panasonic.jp/membership/cleaning/aircon.html</li>
              <li>パナソニック「エアコンクリーニングサービス ご利用規約」https://panasonic.jp/membership/cleaning/aircon/policy.html</li>
              <li>ダスキン「エアコンクリーニング（壁掛けタイプ）」https://www.duskin.jp/servicemaster/spot/sm000010/</li>
              <li>ダスキン「エアコンクリーニングの完全分解洗浄とは？」https://www.duskin.jp/servicemaster/column/detail/00051/</li>
              <li>カジタク「エアコンに「完全分解洗浄」は必要か？」https://www.kajitaku.com/column/aircon/aircon-howto/25295</li>
              <li>カジタク エアコンクリーニング https://www.kajitaku.com/lp/lp-00056</li>
              <li>ヤマダデンキ「ヤマダデンキのエアコンクリーニング」https://www.yamada-denki.jp/service/house_cleaning/aircon.html</li>
              <li>エディオン「家電のプロのクリーニングサービス」https://www.edion.co.jp/service/satisfied/cleaning</li>
              <li>日立「室内機のファンの汚れを取りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-33.html</li>
              <li>NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）https://www.nite.go.jp/jiko/chuikanki/press/2020fy/prs200625.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度の目安" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/company/duskin-servicemaster/", label: "ダスキンのエアコンクリーニングの評判" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
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
