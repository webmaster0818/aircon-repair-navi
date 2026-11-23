import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの風が弱い原因｜メーカー7社の公式FAQで確認した設定・フィルター・暖房時の弱風と、修理が必要な場合の料金【2026年11月確認】",
  description:
    "エアコンの風が弱い原因を、メーカー7社の公式FAQで整理しました。フィルターの目詰まり、風量・節電の設定、設定温度に近づいたときの弱風、暖房開始時・霜取り中の停止など故障ではない場合と、ファンモーター交換など修理の料金目安を掲載しています。",
  alternates: { canonical: "/guide/weak-airflow/" },
};

const UPDATED = "2026年11月23日";

const faqs = [
  {
    q: "エアコンの風が急に弱くなったのは故障ですか？",
    a: "故障ではない場合が多くあります。メーカー各社は、フィルターの目詰まり、風量設定（「微」「弱」「静」など）、節電・電流制限の設定、室温が設定温度に近づいたときの自動的な弱風を原因として挙げています。フィルター掃除と設定の確認をしても改善せず、運転ランプが点滅する、室外機のファンが回らないといった場合は、点検を依頼してください。",
  },
  {
    q: "暖房をつけてもすぐに風が出ないのはなぜですか？",
    a: "冷たい風が出ないよう、室内機の内部を暖めてから風を出すためです。開始直後に風が出ない時間は、シャープが約1〜5分、日立が2〜3分、三菱電機が約3分としています。また、暖房中は室外機の霜を取る霜取り運転で温風が止まることがあり、ダイキンは約3〜10分、日立は5〜22分としています。",
  },
  {
    q: "フィルターはどのくらいの頻度で掃除すればよいですか？",
    a: "自動お掃除機能のない機種について、ダイキン・パナソニック・三菱電機・日立・東芝・シャープ・ゼネラルの7社とも、2週間に1回程度を目安としています。ダイキンは、ホコリが付着していると室内機に空気を取り込みにくくなり、風量が弱くなるとしています。自動お掃除機能付きの機種も、シャープは6か月に1回は汚れを確認するよう案内しています。",
  },
  {
    q: "風量を「強」にしても風が弱いのはなぜですか？",
    a: "日立は、風速の設定よりも設定温度が優先される仕組みのため、室温が設定温度に近づくと自動的に風が弱まると説明しています。冷房であれば設定温度を下げて確認する方法が案内されています。また、東芝・ダイキンのパワーセレクト、三菱電機のピークカット・電流切替などの電流を抑える設定がオンの場合も、能力が抑えられます。",
  },
  {
    q: "風が出ない場合の修理費用はいくらですか？",
    a: "メーカー公式の目安（税込）では、東芝の「室内機から風が出ない（冷房）」は室内ファンモーター24,000〜34,000円・室内基板33,000〜36,000円、日立の室内ファンモーターは41,000〜56,000円前後、ダイキンの「ファンが回らない」（室内機）は51,000〜98,000円程度です（2026年11月23日確認）。原因の部品によって費用が変わるため、点検で原因を確認してから見積もりをご確認ください。",
  },
];

const checkRows = [
  { item: "フィルターの目詰まり", detail: "ホコリが付着していると空気を取り込みにくくなり、風量が弱くなる", maker: "ダイキン・パナソニック・シャープ ほか" },
  { item: "風量の設定", detail: "「微」「弱」「静」「しずか」になっていないか。「自動」か「強」で試す", maker: "ダイキン・三菱電機・東芝" },
  { item: "設定温度に近づいた", detail: "設定温度が風速の設定より優先され、室温が近づくと自動で風が弱まる・微風になる", maker: "日立・三菱電機・ゼネラル・シャープ" },
  { item: "節電・電流制限の設定", detail: "パワーセレクト・ピークカット・電流切替・eco・節電冷房・ハイブリッド節電などがオンだと能力が抑えられる", maker: "ダイキン・東芝・三菱電機・日立" },
  { item: "省エネファン機能", detail: "動作中は風が止まることがあり、故障ではない", maker: "ゼネラル" },
  { item: "吸込口・吹出口のふさがり", detail: "家具やカーテンで吸気口・吹き出し口がふさがれていないか", maker: "パナソニック" },
  { item: "運転モード", detail: "「除湿」になっている場合は「冷房」に切り替える", maker: "シャープ" },
];

const heatRows = [
  { maker: "シャープ", start: "約1〜5分", defrost: "—" },
  { maker: "日立", start: "2〜3分（予熱運転）", defrost: "5〜22分" },
  { maker: "三菱電機", start: "約3分", defrost: "—" },
  { maker: "ダイキン", start: "暖めてから風を出すため、すぐには出ない", defrost: "約3〜10分" },
  { maker: "ゼネラル", start: "内部が暖まるまで、ごく弱い風で運転", defrost: "霜取り中は運転ランプがゆっくり点滅し、ファンが停止" },
];

const feeRows = [
  { maker: "東芝", fee: "室内ファンモーター 24,000〜34,000円／横流ファン 24,000〜31,000円／室内基板 33,000〜36,000円", note: "「室内機から風が出ない（冷房）」の行。2025年4月1日現在の表" },
  { maker: "日立", fee: "室内ファンモーター 41,000〜56,000円前後（高所設置 59,000〜74,000円前後）", note: "技術料・部品代・出張料（3,850円）の合計" },
  { maker: "ダイキン", fee: "51,000〜98,000円程度", note: "「ファンが回らない」（室内機）。プリント基板・クロスフローファン・ファンモータを含む幅" },
  { maker: "三菱電機", fee: "電気部品・基板 17,600〜52,800円／冷媒回路 23,100〜136,400円", note: "「室内機から風が出ない」などの症状の行。出張料（基本料金20kmまで）を含む" },
  { maker: "シャープ", fee: "18,000〜50,000円", note: "「室内機から風が出ない」で基板などを交換する場合。技術料・部品代・出張料を含む" },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-7 align-top";

export default function WeakAirflowPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom/" },
          { name: "エアコンの風が弱い原因", href: "/guide/weak-airflow/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの風が弱い原因
            <br className="hidden md:block" />
            メーカー7社の確認項目と修理が必要な場合
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの風が弱い場合、まず確認したいのは<strong className="font-semibold text-slate-900">フィルターの目詰まりと、風量・節電の設定</strong>です。
            室温が設定温度に近づいたときや、暖房の開始直後・霜取り中に風が弱まる・止まるのは、故障ではない動作です。
            本記事では、当サイトが{UPDATED}にメーカー7社（ダイキン・パナソニック・三菱電機・日立・東芝・シャープ・ゼネラル）の公式FAQと修理料金表を確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">最初に確認すること（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>フィルター掃除：<strong>7社とも2週間に1回程度</strong>が目安（自動お掃除機能のない機種）</li>
              <li>風量設定が「微」「弱」「静」になっていないか → <strong>「自動」か「強」で試す</strong></li>
              <li>節電・電流制限（パワーセレクト・ピークカットなど）が<strong>オンになっていないか</strong></li>
              <li>暖房の開始直後は<strong>約1〜5分</strong>、霜取り中は<strong>数分〜20分程度</strong>風が弱い・止まることがある</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー公式FAQに載っている確認項目</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              メーカー7社の公式FAQで「風が弱い」「風が出ない」の原因として挙げられているものを、当サイトで項目ごとにまとめました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>確認項目</th>
                    <th className={th}>公式の説明</th>
                    <th className={th}>記載しているメーカー</th>
                  </tr>
                </thead>
                <tbody>
                  {checkRows.map((r) => (
                    <tr key={r.item}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.item}</td>
                      <td className={td}>{r.detail}</td>
                      <td className={`${td} text-xs leading-6`}>{r.maker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              日立は、風速の設定よりも設定温度が優先される仕組みのため、設定温度に近づくと自動的に風が弱まるとしています。冷房で風が弱いと感じる場合は、設定温度を一時的に下げて（例：26℃→24℃）風量が戻るかを確認する方法が案内されています。
              フィルター掃除の手順は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>に掲載しています。
            </p>
          </section>

          <section id="heating" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">暖房で風が弱い・出ない場合の時間の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              暖房では、冷たい風が出ないように内部を暖めてから風を出すため、開始直後は風が出ない・弱い状態が続きます。また、室外機に付いた霜を取る霜取り運転の間は温風が止まります。各社の公式に記載されている時間は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>メーカー</th>
                    <th className={th}>暖房開始直後</th>
                    <th className={th}>霜取り運転</th>
                  </tr>
                </thead>
                <tbody>
                  {heatRows.map((r) => (
                    <tr key={r.maker}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.maker}</td>
                      <td className={td}>{r.start}</td>
                      <td className={td}>{r.defrost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※{UPDATED}確認。「—」は公式FAQで時間の記載を確認できなかったものです。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              東芝は、室外機の吸込口・吹出口がふさがれていると霜が付きやすくなり、温風が頻繁に止まるとしています。ダイキンは、風向が上向きだと天井付近だけが暖まるため「自動」か「下向き」にするよう案内しています。
              暖房の不調は<Link href="/guide/heating-not-working/" className="text-sky-700 underline">暖房が効かない原因</Link>もあわせてご覧ください。
            </p>
          </section>

          <section id="repair" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理が必要な場合のサインと料金の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              上の項目を確認しても改善しない場合は、ファンモーターや基板などの故障の可能性があります。メーカーの公式FAQでは、次のような場合に点検を案内しています。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700 mb-4">
              <li>タイマーランプなどが点滅している（ゼネラル。日立はタイマーランプ10回点滅を「室内ファンモータ異常」としています）</li>
              <li>冷房16℃・風速「自動」でも冷風が出ず、室外機のファンが回らない（日立）</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>メーカー</th>
                    <th className={th}>公式の修理料金目安（税込）</th>
                    <th className={th}>該当する行・注意</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r) => (
                    <tr key={r.maker}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.maker}</td>
                      <td className={td}>{r.fee}</td>
                      <td className={`${td} text-xs leading-6`}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。保証期間が終了した製品をメーカーに直接依頼した場合の目安です。パナソニックは品番を入力する方式、ゼネラルは公式ページで金額を確認できませんでした。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              熱交換器の汚れで風量が落ちている場合は、クリーニングで改善することがあります。日立はメーカーによる冷却器洗浄を51,000〜66,000円前後（税込）としています。業者のクリーニング料金は<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>を、ファンモーター交換の詳細は<Link href="/cost/fan-motor/" className="text-sky-700 underline">ファンモーター交換の費用</Link>をご覧ください。
              修理業者の出張費・見積もり費用は<Link href="/cost/price-index/" className="text-sky-700 underline">エアコン修理 料金インデックス</Link>で比較できます。
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
              <li>ダイキン「冷えない」https://www.daikincc.com/faq/customer/web/knowledge3008.html ／「暖まらない」https://www.daikincc.com/faq/customer/web/knowledge3007.html</li>
              <li>ダイキン「ファンが回らない（修理金額）」https://www.daikincc.com/faq/customer/web/knowledge2741.html ／フィルター https://www.daikincc.com/faq/customer/web/knowledge2700.html</li>
              <li>パナソニック エアコンの風が出ない・弱い https://panasonic.jp/life/air/170129.html ／霜取り https://panasonic.jp/aircon/contents/tips/season-trouble.html</li>
              <li>パナソニック よくあるご質問 https://jpn.faq.panasonic.com/app/answers/detail/a_id/15346</li>
              <li>三菱電機 霧ヶ峰 お悩み相談室 https://www.mitsubishielectric.co.jp/home/kirigamine_user/trouble/ ／故障かな？診断 https://faq01.mitsubishielectric.co.jp/faq/show/5872?site_domain=default</li>
              <li>三菱電機 霧ヶ峰 修理料金の目安 https://www.mitsubishielectric.co.jp/ldg/repair/charge/kirigamine.html</li>
              <li>日立 よくあるご質問 https://kadenfan.hitachi.co.jp/support/ra/q_a/a03.html ／ https://kadenfan.hitachi.co.jp/support/ra/q_a/post-19.html ／ https://kadenfan.hitachi.co.jp/support/ra/q_a/post-20.html ／ https://kadenfan.hitachi.co.jp/support/ra/q_a/post-91.html</li>
              <li>日立 ルームエアコン 修理料金目安 https://kadenfan.hitachi.co.jp/support/repair/raj.html</li>
              <li>東芝 よくあるご質問 https://faq-toshiba-lifestyle.dga.jp/answer.html?id=2683&amp;category=126 ／ https://faq-toshiba-lifestyle.dga.jp/answer.html?id=2690</li>
              <li>東芝ライフスタイル ルームエアコン 修理料金の目安 https://www.toshiba-lifestyle.com/jp/support/ryokin/room_airconditioner/ ／節電 https://www.toshiba-lifestyle.com/jp/support/setsuden/</li>
              <li>シャープ 故障かな？と思ったら（冷房）https://jp.sharp/support/air_con/doc/trial_check.html ／（暖房）https://jp.sharp/support/air_con/doc/trial_check_winter.html ／フィルター https://jp.sharp/support/air_con/mt_doc/filter.html</li>
              <li>シャープ エアコン 修理料金の目安 https://jp.sharp/support/repair_cost_air_con.html</li>
              <li>ゼネラル よくあるご質問 https://www.fujitsu-general.com/jp/support/faq/as/0086/index.html ／ as/0087 ／ as/0020 ／ as/0077</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/not-cooling/", label: "エアコンが冷えない原因と対策" },
                { href: "/guide/heating-not-working/", label: "暖房が効かない原因" },
                { href: "/cost/fan-motor/", label: "ファンモーター交換の費用" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない原因" },
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
