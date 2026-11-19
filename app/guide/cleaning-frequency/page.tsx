import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングの頻度｜メーカー7社のフィルター掃除の目安と業者クリーニングの年数の根拠【2026年11月確認】",
  description:
    "エアコンクリーニングの頻度を、メーカー7社と大手クリーニング事業者3社の公式ページで確認しました。フィルター掃除は7社とも約2週間に1回が目安です。業者による内部クリーニングの「年1回」は事業者の目安で、メーカーは年数を示さず、汚れ・臭いの状態での判断を案内しています。おすすめの時期と繁忙期も掲載しています。",
  alternates: { canonical: "/guide/cleaning-frequency/" },
};

const UPDATED = "2026年11月19日";

const faqs = [
  {
    q: "エアコンクリーニングはどのくらいの頻度で行えばよいですか？",
    a: "ご自身で行うエアフィルターの掃除は、メーカー7社とも約2週間に1回を目安としています。業者による内部クリーニングは、ダスキン・おそうじ本舗が年1回、カジタクが年1〜2回を目安として案内しています（2026年11月19日確認）。一方、メーカーは年数を示しておらず、汚れや臭いの状態を確認したうえでの依頼を案内しています。",
  },
  {
    q: "メーカーは業者クリーニングの頻度を何年に1回と案内していますか？",
    a: "当サイトが確認したメーカー（ダイキン・パナソニック・三菱電機・日立・東芝・シャープ・ゼネラル）の公式ページでは、年数による目安は見当たりませんでした（2026年11月19日確認）。最も具体的な記載はゼネラルの「エアコンを数シーズンご使用になると、内部の汚れやにおいが発生することがあります」で、点検・クリーニング（有料）をすすめています。",
  },
  {
    q: "お掃除機能付きエアコンでもクリーニングは必要ですか？",
    a: "パナソニックは「使用頻度や設置している環境によって、クリーニングが必要な場合もございます」と案内しています（2026年11月19日確認）。お掃除機能が自動で掃除するのはエアフィルターで、熱交換器や送風ファンは対象外です。また、日立・ゼネラル・三菱電機・東芝はダストボックスのお手入れを年1回程度と案内しています。",
  },
  {
    q: "エアコンクリーニングに適した時期はいつですか？",
    a: "パナソニックは「暖房の時期が終わった春や、冷房の時期が終わった秋」、日立は夏のシーズン前（4月・5月ごろ）の早めの相談、ゼネラルはエアコンを比較的使用しない時期の依頼をすすめています（2026年11月19日確認）。おそうじ本舗は繁忙期を5月中旬〜9月上旬頃と11月中旬〜12月下旬、閑散期を3月後半〜4月頃と9月後半〜11月前半としています。",
  },
  {
    q: "クリーニングの頻度を上げたほうがよい家庭はありますか？",
    a: "おそうじ本舗は、室内でペットを飼っている、エアコンがキッチンの近くにある、喫煙者がいる、乳幼児やアレルギー体質の方がいる場合に年2回程度を、カジタクはほぼ毎日使用する場合なども含めて年2回を目安として案内しています（2026年11月19日確認）。いずれも事業者の目安です。",
  },
];

const filterRows = [
  { maker: "ダイキン", filter: "2週間に1回程度（お掃除機能なし）", box: "お掃除ランプ点灯時。目安は約3年〜10年", src: "CLUB DAIKIN" },
  { maker: "パナソニック", filter: "約2週間に1回（フィルターおそうじ運転機能なし）", box: "「ボックスお手入れランプ」「おそうじランプ」で通知", src: "公式FAQ a_id/9890" },
  { maker: "三菱電機", filter: "2週間に1度、またはお手入れランプ点灯時", box: "年1回が目安", src: "公式FAQ・霧ヶ峰お手入れページ" },
  { maker: "日立", filter: "フィルターサイン表示時。サインがない機種は2週間に1回程度", box: "1年に1回が目安", src: "日立の家電品 Q&A" },
  { maker: "東芝", filter: "2週間に1回ほど（自動お掃除機能なし）", box: "1年に1回程度（Uシリーズ）", src: "東芝ライフスタイル IoLIFE・Uシリーズお手入れ" },
  { maker: "シャープ", filter: "2週間に1度（自動掃除なし）。自動掃除ありは6カ月に1回確認", box: "記載なし", src: "シャープ サポート「フィルターのお手入れ」" },
  { maker: "ゼネラル", filter: "2週間に1度（自動おそうじ機能なし）", box: "1年に1回が目安", src: "ゼネラル よくあるご質問 0077" },
];

const proRows = [
  { who: "ダイキン", kind: "メーカー", years: "年数の記載なし", basis: "熱交換器など内部の掃除は専門業者へ" },
  { who: "パナソニック", kind: "メーカー", years: "年数の記載なし", basis: "効き具合・ホコリ・カビ・ニオイを確かめて相談。春・秋がおすすめ" },
  { who: "三菱電機", kind: "メーカー", years: "年数の記載なし", basis: "内部洗浄は専門知識を有する業者へ" },
  { who: "日立", kind: "メーカー", years: "年数の記載なし", basis: "夏のシーズン前（4〜5月ごろ）の早めの相談" },
  { who: "シャープ", kind: "メーカー", years: "年数の記載なし", basis: "お手入れしてもカビ臭いなどが改善しない場合" },
  { who: "ゼネラル", kind: "メーカー", years: "「数シーズン」使用で点検・クリーニングを推奨", basis: "フィルター掃除後も臭う、熱交換器の汚れがひどい場合" },
  { who: "ダスキン", kind: "クリーニング事業者", years: "1年に1回（使用が少なければ2〜3年に1回）", basis: "春3〜5月・秋9〜11月" },
  { who: "おそうじ本舗", kind: "クリーニング事業者", years: "年1回（条件により年2回）", basis: "春と秋、特に秋" },
  { who: "カジタク（イオングループ）", kind: "クリーニング事業者", years: "年に1〜2回（夏だけ・お掃除機能付きは1〜2年に1回）", basis: "年1回なら秋、年2回なら春と秋" },
];

export default function CleaningFrequencyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/cleaning-frequency/" },
          { name: "エアコンクリーニングの頻度", href: "/guide/cleaning-frequency/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">お手入れガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングの頻度
            <br className="hidden md:block" />
            メーカー7社と大手事業者3社の目安の比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの掃除の頻度は、<strong className="font-semibold text-slate-900">ご自身で行うエアフィルター掃除が約2週間に1回</strong>、<strong className="font-semibold text-slate-900">業者による内部クリーニングが年1回程度</strong>というのが一般的な目安です。
            ただし、当サイトが{UPDATED}に公式ページを確認したところ、「年1回」はクリーニング事業者が示している目安で、メーカー7社はいずれも年数を示していませんでした。
            本記事では、メーカーと事業者の案内を分けて整理しています。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">頻度の目安（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>エアフィルター：<strong>約2週間に1回</strong>（メーカー7社が共通して案内）</li>
              <li>ダストボックス（お掃除機能付き）：<strong>年1回程度</strong>（三菱電機・日立・東芝・ゼネラル）</li>
              <li>業者の内部クリーニング：<strong>年1回</strong>（ダスキン・おそうじ本舗）、<strong>年1〜2回</strong>（カジタク）。メーカーは汚れ・臭いの状態で判断するよう案内</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="filter" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー7社のフィルター・ダストボックスのお手入れ頻度</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式FAQ・取扱説明書・公式記事の記載を、同じ項目でそろえました。パナソニックのフィルター頻度は公式FAQの記載です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">エアフィルター</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ダストボックス</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出典</th>
                  </tr>
                </thead>
                <tbody>
                  {filterRows.map((r) => (
                    <tr key={r.maker}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.maker}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.filter}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.box}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top text-xs text-slate-500">{r.src}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。三菱電機（ダストボックス）と東芝（ダストボックス）の頻度は、公式ページの画像内の記載です。ゼネラルは旧富士通ゼネラルです。機種により異なるため、お使いの機種の取扱説明書もご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              フィルター掃除の効果について、ダイキンは「フィルター掃除をしないと、冷房時の消費電力が25％も高くなる」という自社の試算を、日立は「約5～10％の省エネ効果が期待できる」という目安を公表しています。
              掃除の手順は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>に掲載しています。
            </p>
          </section>

          <section id="pro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者による内部クリーニングの頻度：メーカーと事業者の案内の違い</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              熱交換器や送風ファンなど内部の洗浄は、各社ともご自身で行わず専門業者へ依頼するよう案内しています。その頻度について、メーカーと事業者の公式ページの記載は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">案内元</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">区分</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">頻度の記載</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">判断の基準・時期</th>
                  </tr>
                </thead>
                <tbody>
                  {proRows.map((r) => (
                    <tr key={r.who}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.who}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top text-xs">{r.kind}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.years}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。事業者の頻度は各社のコラム記事の記載で、事業者としての目安です。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              メーカーが年数を示していない理由として、ゼネラルは「エアコン内部の汚れ方は、使用時間やお部屋の状況などによって異なります。エアコン内部の汚れを確認した上で、クリーニングをご依頼ください」と説明しています。
              そのため当サイトでは、<strong>年1回を一般的な目安としつつ、次のサインが出た時点での依頼</strong>をおすすめしています。
            </p>
          </section>

          <section id="signs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">クリーニングを依頼する目安になるサイン</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>フィルターを掃除しても臭いが取れない</strong>（ゼネラル・シャープが案内）</li>
              <li><strong>熱交換器（アルミフィン）の汚れがひどい</strong>：ゼネラルは、エアフィルターとダストボックスを外して熱交換器を目視で確認する方法を案内しています。熱交換器には手を触れないでください</li>
              <li><strong>吹出口の奥やファンに黒カビが見える</strong>：パナソニックは、吹出口の内部の汚れやカビはお客様ではお手入れできないとしています</li>
              <li><strong>効きが悪くなった</strong>：パナソニックは効き具合も確認項目に挙げています。ただし、冷えない原因は汚れ以外の場合もあります（<Link href="/symptom/not-cooling/" className="text-sky-700 underline">冷えない症状の切り分け</Link>）</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              ゼネラルの取扱説明書では、点検整備を行わないと室内機内部の汚れが除湿水の排水経路を詰まらせ、水漏れの原因になると説明されています。水漏れが起きている場合は<Link href="/guide/water-leak/" className="text-sky-700 underline">水漏れの確認手順</Link>をご覧ください。
            </p>
          </section>

          <section id="season" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼に適した時期と繁忙期</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">案内元</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">すすめている時期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td><td className="border border-slate-300 px-3 py-2 leading-7">暖房の時期が終わった春や、冷房の時期が終わった秋</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">日立</td><td className="border border-slate-300 px-3 py-2 leading-7">夏季のシーズン前（4月、5月ごろ）など早めの相談</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ゼネラル</td><td className="border border-slate-300 px-3 py-2 leading-7">エアコンを比較的使用しない時期</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">おそうじ本舗</td><td className="border border-slate-300 px-3 py-2 leading-7">春と秋、特に秋。繁忙期は5月中旬〜9月上旬頃・11月中旬〜12月下旬、閑散期は3月後半〜4月頃・9月後半〜11月前半</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">ダスキン</td><td className="border border-slate-300 px-3 py-2 leading-7">春は3月〜5月、秋は9月〜11月</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※{UPDATED}確認。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              修理の繁忙期も夏に集中します。修理・点検をあわせて検討される場合は<Link href="/guide/busy-season/" className="text-sky-700 underline">エアコン修理の繁忙期カレンダー</Link>もご参照ください。
              クリーニング料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>で比較できます。
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
              <li>ダイキン工業 CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_clean</li>
              <li>パナソニック 公式FAQ「エアコンのお手入れ方法」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9890</li>
              <li>パナソニック「Panasonic エアコンクリーニング」https://panasonic.jp/membership/cleaning/aircon.html</li>
              <li>三菱電機 よくあるご質問「フィルターはいつ掃除すればいいですか？」https://faq01.mitsubishielectric.co.jp/faq/show/706?site_domain=default</li>
              <li>三菱電機 霧ヶ峰「フィルターのお手入れ」https://www.mitsubishielectric.co.jp/home/kirigamine_user/care/filter/</li>
              <li>三菱電機 よくあるご質問「エアコン内部の洗浄について」https://faq01.mitsubishielectric.co.jp/faq/show/712?site_domain=default</li>
              <li>日立「エアフィルターのお手入れ方法を知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-91.html</li>
              <li>日立「ホコリキャッチャーやダストボックスのお手入れ方法を知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-11.html</li>
              <li>日立「エアコンクリーニング（内部洗浄）をしたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-26.html</li>
              <li>東芝ライフスタイル IoLIFE「フィルターのお掃除って、本当に大変。」https://content.toshiba-lifestyle.com/jp/iolife/4e63b9bcf8ee04e5685c84f5cb05b1bdd409b27b/</li>
              <li>東芝ライフスタイル「お手入れ Uシリーズ」https://www.toshiba-lifestyle.com/jp/air_conditioners/feature/u_series_care/</li>
              <li>シャープ「フィルターのお手入れ」https://jp.sharp/support/air_con/mt_doc/filter.html</li>
              <li>ゼネラル よくあるご質問「室内機の日常のお手入れはどうすれば良いですか？」https://www.generalww.com/jp/support/faq/as/0077/index.html</li>
              <li>ゼネラル よくあるご質問「クリーニング（内部洗浄）を行うのはいつが最適ですか？」https://www.generalww.com/jp/support/faq/as/0053/index.html</li>
              <li>ゼネラル「点検・クリーニング」https://www.generalww.com/jp/support/const_mainte/index.html</li>
              <li>ダスキン「エアコンクリーニングは毎年必要？頻度の判断基準と最適な時期を解説」https://www.duskin.jp/servicemaster/column/detail/00050/</li>
              <li>おそうじ本舗「エアコンクリーニングの頻度は年１回！」https://www.osoujihonpo.com/guide/aircon/220216-01/</li>
              <li>カジタク「エアコンクリーニングはいつやるのがいい？」https://www.kajitaku.com/column/aircon/aircon-period/17189</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
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
