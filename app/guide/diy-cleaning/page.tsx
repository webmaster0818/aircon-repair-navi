import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン掃除を自分でできる範囲｜メーカー3社の公式手順と、してはいけない内部洗浄【2026年11月確認】",
  description:
    "エアコン掃除をご自身で行う場合の範囲・頻度・手順を、ダイキン・パナソニック・三菱電機の公式ページで確認し、1つの表に整理しました。3社ともエアフィルターは約2週間に1回が目安です。市販の洗浄スプレーによる内部洗浄を3社とNITE（製品評価技術基盤機構）が控えるよう案内している理由と、火災事故の件数も掲載しています。",
  alternates: { canonical: "/guide/diy-cleaning/" },
};

const UPDATED = "2026年11月19日";

const faqs = [
  {
    q: "エアコン掃除は自分でどこまでできますか？",
    a: "メーカーが案内している範囲は、エアフィルター、前面パネル、本体の外側、手の届く範囲の風向板（ルーバー・フラップ）、室外機の周りの片付けまでです。ダイキンは「自分でできるのは、フィルター類と外から見える前面パネルやフラップのみ」、パナソニックは「吹出口の内部に汚れやカビが付着した場合、お客様ではお手入れすることはできません」と案内しています（2026年11月19日確認）。熱交換器や送風ファンの洗浄は専門業者へのご依頼が必要です。",
  },
  {
    q: "エアフィルターはどのくらいの頻度で掃除すればよいですか？",
    a: "ダイキン・パナソニック・三菱電機の3社とも、約2週間に1回を目安として案内しています（2026年11月19日確認）。三菱電機は、本体の「お手入れランプ」「お掃除ランプ」が点灯した時点でのお手入れもあわせて案内しています。フィルター自動お掃除機能のある機種は、パナソニックの案内ではダストボックスのお手入れが中心になります。",
  },
  {
    q: "市販のエアコン洗浄スプレーを使ってもよいですか？",
    a: "使用はお控えください。パナソニックは公式FAQで「市販の洗浄スプレーは使わないでください」とし、内部部品の破損による水漏れや電気部品の故障、最悪の場合は発煙・発火のおそれがあると説明しています（2026年11月19日確認）。NITE（製品評価技術基盤機構）は、誤った内部洗浄方法による火災事故が2015年度から2019年度の5年間に20件発生したと公表しています（2020年6月25日公表）。",
  },
  {
    q: "洗浄スプレーをすでに使ってしまった場合はどうすればよいですか？",
    a: "ダイキンは、すぐに電源プラグを抜いた状態にして運転しないこと、部屋を十分に換気すること、換気後にしばらく冷房運転をすることを案内しています（2026年11月19日確認）。異臭・異音・水漏れが続く場合は、運転を止めて販売店またはメーカーへご相談ください。",
  },
  {
    q: "自分で掃除しても臭いが取れない場合はどうすればよいですか？",
    a: "臭いの原因が熱交換器や送風ファンに付着したカビ・汚れである場合、フィルター掃除や内部クリーン機能では取り除けません。パナソニックは内部クリーン運転について「すでに付着した臭いやカビ菌を取り除くことはできません」と説明しています（2026年11月19日確認）。業者による分解洗浄をご検討ください。料金の目安はクリーニング料金ガイドに掲載しています。",
  },
];

const makers = [
  {
    name: "ダイキン",
    filter: "2週間に1回程度。掃除機で吸い取り、汚れがひどい場合は薄めた中性洗剤で洗い、日陰で乾かす",
    other: "前面パネル・フラップは柔らかい布で拭く。室外機は表面を拭き、葉や枝を取り除く程度で十分",
    ng: "40℃以上のお湯・ベンジン・シンナー・みがき粉・綿棒・タワシ・消臭剤などのスプレー。熱交換器など内部は専門業者へ",
    src: "CLUB DAIKIN「自分でできるエアコンクリーニングの範囲は？」「シーズンの合間、今のうちにエアコンのお掃除を！」",
  },
  {
    name: "パナソニック",
    filter: "フィルターおそうじ運転機能がない機種は約2週間に1回。掃除機または水洗い（薄めた中性洗剤のつけ置き可）",
    other: "ルーバーは取り外せないため、停止して開き、プラグを抜いてから手の届く範囲をからぶき。前面パネルは機種により水洗い可",
    ng: "空気清浄・除菌・脱臭フィルター等は水洗い不可。吹出口の内部・本体内部の汚れはお客様ではお手入れ不可",
    src: "パナソニック公式FAQ「エアコンのお手入れ方法」",
  },
  {
    name: "三菱電機",
    filter: "2週間に1度をめやす、または「お手入れランプ」「お掃除ランプ」点灯時。掃除機または水洗いし日陰で乾かす",
    other: "フィルターおそうじメカ搭載機種でも、油汚れ・タバコのヤニが気になる場合はお手入れが必要",
    ng: "ブラシやたわしでこすらない。約50度以上の湯で洗わない。直射日光や火にあてて乾かさない",
    src: "三菱電機 よくあるご質問「フィルターはいつ掃除すればいいですか？」",
  },
];

export default function DiyCleaningPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/diy-cleaning/" },
          { name: "エアコン掃除を自分でできる範囲", href: "/guide/diy-cleaning/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">お手入れガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン掃除を自分でできる範囲
            <br className="hidden md:block" />
            メーカー3社の公式手順と、控えるべき内部洗浄
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコン掃除のうち、ご自身で行えるのは<strong className="font-semibold text-slate-900">エアフィルター・前面パネル・本体の外側・手の届く範囲の風向板・室外機の周り</strong>までです。
            <strong className="font-semibold text-slate-900">熱交換器や送風ファンなど内部の洗浄</strong>は、ダイキン・パナソニック・三菱電機のいずれも専門業者や販売店への依頼を案内しています。
            当サイトでは3社の公式ページを{UPDATED}に確認し、範囲・頻度・禁止事項を1つの表に整理しました。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">3社の公式案内に共通する点</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>エアフィルターの掃除は<strong>約2週間に1回</strong>が目安です（3社とも）</li>
              <li>掃除の前に<strong>運転を止め、電源プラグを抜く</strong>（またはブレーカーを切る）よう案内しています</li>
              <li>市販の洗浄スプレー等による<strong>内部洗浄は控える</strong>よう案内しています（ダイキン・パナソニック）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー3社が案内するお手入れの範囲と頻度</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式FAQ・公式記事の記載を、同じ項目でそろえて比較しました。機種によって異なる場合があるため、実際の作業はお使いの機種の取扱説明書もあわせてご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアフィルター</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">その他の部位</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">してはいけないこと</th>
                  </tr>
                </thead>
                <tbody>
                  {makers.map((m) => (
                    <tr key={m.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{m.name}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{m.filter}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{m.other}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{m.ng}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-2 text-xs leading-6 text-slate-400 space-y-1">
              {makers.map((m) => (
                <li key={m.name}>※{m.name}の出典: {m.src}（{UPDATED}確認）</li>
              ))}
            </ul>
          </section>

          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアフィルター掃除の手順</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>運転を停止し、電源プラグを抜きます（またはブレーカーを切ります）。高い位置の作業は、安定した脚立をご使用ください（パナソニック公式FAQ）。</li>
              <li>前面パネルを開け、エアフィルターを引き出します。</li>
              <li>表面のホコリを掃除機で吸い取ります。</li>
              <li>汚れがひどい場合は、液体の中性洗剤を少量入れた水で、柔らかい布やスポンジで軽くなでるように洗います。ブラシやたわしでこすらないでください（三菱電機公式FAQ）。</li>
              <li>十分にすすぎ、日陰でよく乾かしてから元に戻します。直射日光や火にあてて乾かすと変形のおそれがあります。</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              パナソニックの案内では、空気清浄フィルター・除菌フィルター・脱臭フィルターなどは水洗いできません。汚れが気になる場合は掃除機で吸い取ります。
              また、内部の金属部（熱交換器）には手を触れないよう、ダイキンが案内しています。けがや機器の変形の原因になるためです。
            </p>
          </section>

          <section id="dustbox" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">お掃除機能付きエアコンの場合</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              フィルター自動お掃除機能のある機種は、フィルターから集めたホコリをためるダストボックスのお手入れが必要です。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>パナソニック</strong>：「ボックスお手入れランプ」または「おそうじランプ」で時期を知らせます。ダストボックスのホコリを掃除機で吸い取ります。水洗いの可否は機種により異なります。ホコリを屋外に自動排出する方式で設置した場合、ダストボックスのお手入れは不要です。</li>
              <li><strong>ダイキン</strong>（うるさら7の例）：お掃除ランプの点灯時にダストボックスとダストブラシのホコリを掃除機で吸い取ります。時期は機種や使用状況により異なり、目安は約3年〜10年と案内されています。</li>
              <li><strong>三菱電機</strong>：フィルターおそうじメカ搭載機種でも、油汚れやタバコのヤニが気になる場合はフィルターのお手入れを案内しています。</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: パナソニック公式FAQ「エアコンのお手入れ方法」、CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」、三菱電機 よくあるご質問（{UPDATED}確認）。
            </p>
          </section>

          <section id="ng" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身での内部洗浄を控えるべき理由</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              パナソニックは公式FAQで「市販の洗浄スプレーは使わないでください。エアコン内部の洗浄は高い専門知識が必要です」と案内しています。ダイキンの公式記事では、洗浄スプレーやすすぎ用の製品を使った場合に起こり得る不具合として、次の内容が挙げられています（{UPDATED}確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">不具合</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ダイキン公式記事の説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">臭い・カビ</td><td className="border border-slate-300 px-3 py-2 leading-7">流しきれなかった洗剤と汚れが熱交換器にこびりつきます</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">水漏れ</td><td className="border border-slate-300 px-3 py-2 leading-7">ドレンパン・ドレンホースの詰まり、熱交換器のコーティングの劣化、ドレンパンの割れ</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ガス漏れ</td><td className="border border-slate-300 px-3 py-2 leading-7">冷媒配管を腐食させるおそれがあります</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">故障</td><td className="border border-slate-300 px-3 py-2 leading-7">洗浄剤が温度センサーや電気部品にかかると故障の原因になります</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">火災</td><td className="border border-slate-300 px-3 py-2 leading-7">噴霧後に十分換気せず暖房運転すると、揮発したガスが機内にとどまり、静電気などで火災が発生するおそれがあります</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              ダイキンは、エアダスターにも可燃性ガスが含まれていることが多いこと、ほこり取り棒などでファンを掃除するとけがやファン破損のおそれがあること（運転停止後もファンはしばらく回転しています）もあわせて案内しています。
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">NITE（製品評価技術基盤機構）が公表している事故件数</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">対象期間</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">内容</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">公表日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">2015〜2019年度</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">エアコンの事故263件（うち火災244件）。このうち<strong>誤った内部洗浄方法による火災事故が20件</strong></td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">2020年6月25日</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">2019〜2023年度</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">エアコンの事故340件。製品に起因しない事故のうち<strong>「洗浄剤の付着により室内機の電気部品から発火」が10件</strong></td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">2024年5月30日</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）、NITE「その“レトロ”ちょっと待った～！」（2024年5月30日・PDF）。2つの数字は対象期間と分類が異なるため、合算や増減の比較はできません。NITEは同資料で、取扱説明書に記載されたフィルターなどの手入れは「内部洗浄」に該当しないと定義しています。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              NITEは「エアコンの内部洗浄は正しい知識を持った業者に依頼してください」とし、消毒用アルコールなどの可燃性の溶液や、次亜塩素酸ナトリウムなど腐食性のある溶液で内部を掃除しないよう呼びかけています。
            </p>
          </section>

          <section id="sprayed" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">洗浄スプレーをすでに使った場合の対処</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">ダイキンの公式記事では、次の順で対処するよう案内しています（{UPDATED}確認）。</p>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>速やかに電源プラグを抜き、すぐに運転しないでください。</li>
              <li>部屋を十分に換気します。</li>
              <li>換気後、しばらく冷房運転をします。</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              その後に異臭・異音・水漏れが続く場合は、運転を止めて販売店またはメーカーへご相談ください。水漏れの確認手順は<Link href="/guide/water-leak/" className="text-sky-700 underline">水漏れの対処ガイド</Link>に掲載しています。
            </p>
          </section>

          <section id="pro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者へのクリーニング依頼をご検討いただく目安</h2>
            <p className="text-sm leading-7 text-slate-700">
              フィルターを掃除しても臭いが残る場合や、吹出口の奥・送風ファンに黒い汚れが見える場合は、内部の洗浄が必要な状態です。
              パナソニックは「ルーバー奥（フェルト部など）の手の届かないところやエアフィルターを外した本体内部に汚れやカビが付着しているときは、エアコンクリーニングが必要です」と案内しています。
              主要業者の公表料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>で比較できます。
              臭いの原因と対処は<Link href="/guide/smell/" className="text-sky-700 underline">エアコンの臭いの対処ガイド</Link>もあわせてご覧ください。
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
              <li>ダイキン工業 CLUB DAIKIN「自分でできるエアコンクリーニングの範囲は？」https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_care</li>
              <li>ダイキン工業 CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_clean</li>
              <li>パナソニック 公式FAQ「エアコンのお手入れ方法」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9890</li>
              <li>パナソニック 公式FAQ「市販の洗浄スプレーでエアコン内部のお手入れはできるか」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9704</li>
              <li>パナソニック 公式FAQ「エアコンの内部クリーン運転のしくみと運転条件は」https://jpn.faq.panasonic.com/app/answers/detail/a_id/62157</li>
              <li>三菱電機 よくあるご質問「フィルターはいつ掃除すればいいですか？」https://faq01.mitsubishielectric.co.jp/faq/show/706?site_domain=default</li>
              <li>NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）https://www.nite.go.jp/jiko/chuikanki/press/2020fy/prs200625.html</li>
              <li>NITE「その“レトロ”ちょっと待った～！～古いエアコン・扇風機の事故に注意～」（2024年5月30日）https://www.nite.go.jp/data/000154234.pdf</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度の目安" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
                { href: "/guide/water-leak/", label: "エアコンの水漏れ対処" },
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
