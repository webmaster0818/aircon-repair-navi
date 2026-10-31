import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理はいつ頼むべき？繁忙期カレンダー【2026年】混雑・待ち日数の目安",
  description:
    "エアコン修理を依頼するのに適した時期を、繁忙期（6〜8月）の混雑・待ち日数・予約の傾向とあわせて月別カレンダーでご説明します。ダイキン・パナソニックなど各社の公式告知にもとづき、早く・費用を抑えて依頼するための方法と、業者を待つ間の応急対処を掲載した2026年版のガイドです。",
  alternates: { canonical: "/guide/busy-season/" },
};

const UPDATED = "2026年10月31日";

const toc = [
  { id: "summary", label: "依頼に適した時期" },
  { id: "calendar", label: "月別 繁忙期カレンダー" },
  { id: "reality", label: "繁忙期の実態（公式の告知）" },
  { id: "tips", label: "早く・費用を抑えて依頼する方法" },
  { id: "emergency", label: "業者を待つ間の応急対処" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ・更新履歴" },
];

type Level = "低" | "中" | "高" | "最繁忙";

const levelStyle: Record<Level, string> = {
  低: "bg-emerald-100 text-emerald-700",
  中: "bg-amber-100 text-amber-700",
  高: "bg-orange-100 text-orange-700",
  最繁忙: "bg-red-100 text-red-700",
};

const calendar: { month: string; level: Level; wait: string; note: string }[] = [
  { month: "1月", level: "中", wait: "比較的取りやすい", note: "寒波の直後は暖房の不調が増えますが、冷房の需要はほとんどなく、落ち着いている時期です。" },
  { month: "2月", level: "低", wait: "取りやすい", note: "オフシーズンです。点検やクリーニング、買い替えの検討に適しています。" },
  { month: "3月", level: "低", wait: "取りやすい", note: "新生活前で設置工事は増え始めますが、修理の受付には比較的余裕があります。" },
  { month: "4月", level: "低", wait: "取りやすい", note: "試運転で不調に気づきやすい時期です。梅雨・夏前の点検に適しています。" },
  { month: "5月", level: "中", wait: "やや混み始める", note: "冷房の使用が始まり、点検・クリーニングの需要が増え始めます。" },
  { month: "6月", level: "中", wait: "混み始める", note: "梅雨の時期です。猛暑の前に点検・修理を済ませておくことをおすすめします。" },
  { month: "7月", level: "高", wait: "日程調整に時間がかかりやすい", note: "猛暑日が続き、受付が集中します。訪問まで日数がかかりやすくなります。" },
  { month: "8月", level: "最繁忙", wait: "日程調整に最も時間がかかりやすい", note: "需要のピークです。お盆期間の受付日・訪問日は、依頼先へご確認ください。" },
  { month: "9月", level: "高", wait: "徐々に緩和", note: "残暑で需要は続きますが、下旬にかけて落ち着いていきます。" },
  { month: "10月", level: "低", wait: "取りやすくなる", note: "冷房シーズンの終わりです。翌シーズンに向けた点検に適しています。" },
  { month: "11月", level: "中", wait: "取りやすい", note: "暖房の使用開始にともない不調に気づく方が増えますが、予約には比較的余裕があります。" },
  { month: "12月", level: "中", wait: "年末年始は依頼先の営業日を確認", note: "寒波で暖房の不調に気づく時期です。ダイキンは、年末年始等の長期休暇期間は引取修理のお預かり期間が通常より長くなると案内しています。" },
];

const faqs = [
  {
    q: "エアコン修理が最も混み合うのは何月ですか？",
    a: "一般に需要が集中するのは7〜8月の猛暑日が続く時期で、特に気温が急に上がった猛暑日の直後に問い合わせが集まりやすいとされています。メーカーや大手も夏の繁忙期は受付が混み合い、訪問までの日程調整に時間がかかる場合があると案内しています。急ぎでない場合は、梅雨明け前（6月ごろ）までに点検・修理を済ませておくことをおすすめします。",
  },
  {
    q: "夏に依頼した場合、どのくらい待ちますか？",
    a: "待ち日数は各社・地域・症状・その年の天候によって大きく異なり、メーカー各社も具体的な日数は公表していないため、一律にはお示しできません。パナソニックは、訪問日時を指定せずに申し込んだ場合は当日中に連絡するとしたうえで「繁忙期は日程調整までお時間をいただく場合があります」と案内しており、5日以上たっても連絡がない場合は問い合わせるよう求めています。正確な状況は、依頼先へ直接ご確認ください。",
  },
  {
    q: "少しでも早く修理してもらうにはどうすればよいですか？",
    a: "電話がつながりにくい場合は、Web受付を利用する方法があります。ダイキンは、回線の混雑時は電話が途中で切断される場合があるとして、Webでの修理依頼やメールでの問い合わせを案内しており、Web受付では電話受付時と同じ最短日を選択できるとしています。1社に限定せず複数社に同時に相談することで、早く対応できる業者が見つかりやすくなります。また、メーカー名・型番・エラー表示・症状をあらかじめ記録しておくと、受付や日程調整が円滑に進みます。急ぎの場合は、即日・最短対応を掲げる業者を探す方法もあります。",
  },
  {
    q: "繁忙期は料金が高くなりますか？",
    a: "時期による料金の扱いは依頼先によって異なるため、見積もりの際にご確認ください。繁忙期は予約が取りにくく選択肢が限られるため、相見積もりを取って比較する時間を確保しにくくなります。依頼が少ない時期に点検・修理を済ませておくことで、料金と対応を十分に比較したうえで依頼先を選びやすくなります。",
  },
  {
    q: "業者を待つ間に、自分でできることはありますか？",
    a: "まず安全を最優先にしてください。焦げ臭い・煙・火花などがある場合は、すぐに運転を止めて使用を控えます。そのうえで、フィルターの清掃、室外機の周囲に物を置かない、直射日光を遮って風通しをよくするなど、取扱説明書の範囲で行える対処により症状が和らぐ場合があります。無理な分解は感電やけが、故障の悪化の原因となるため、お控えください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコン修理はいつ頼むべき？繁忙期カレンダー【2026年】混雑・待ち日数の目安",
  datePublished: "2026-07-12",
  dateModified: "2026-10-31",
  author: { "@type": "Organization", name: "エアコン修理ナビ編集部" },
  publisher: { "@type": "Organization", name: "エアコン修理ナビ" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/busy-season" },
          { name: "エアコン修理はいつ頼むべき？繁忙期カレンダー", href: "/guide/busy-season" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            依頼時期ガイド
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理はいつ頼むべき？
            <br className="hidden md:block" />
            繁忙期カレンダー【2026年】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-31">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.jpg"
              alt="エアコン修理を依頼する時期を考えるイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが冷えない・止まった際に確認したいのが、
            <strong className="font-semibold text-slate-900">早く修理するための依頼の時期</strong>
            です。夏季は修理の依頼が集中し、訪問まで日数がかかる場合があります。本記事では、繁忙期（6〜8月）の混雑・待ち日数・予約の傾向を月別カレンダーで掲載し、早く・費用を抑えて依頼する方法と、業者を待つ間の応急対処をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-800 mb-1">2026年10月は予約を取りやすい時期です</p>
            <p className="text-sm leading-7 text-slate-700">
              10月は冷房シーズンが終わり、真夏に比べて日程を取りやすくなります。11月は暖房の使用開始にともない不調に気づく方が増え、年末年始は休業する依頼先もあるため、暖房の試運転と点検・修理の相談は早めに済ませておくことをおすすめします。
            </p>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事の混雑度・待ち日数は、各社の公式告知や一般的な傾向にもとづく「目安」であり、その年の天候・地域・業者・症状によって大きく変わります（推定を含みます）。正確な状況は依頼先へ直接ご確認ください（各社の告知の確認日：2026年10月31日）。
          </p>
        </div>

        <nav aria-label="目次" className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-bold text-slate-700 mb-3 tracking-wide">目次</p>
            <ol className="space-y-2 text-[0.95rem] text-slate-700">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-sky-600 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="hover:text-sky-700 hover:underline underline-offset-4">{t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼に適した時期</h2>
            <p className="leading-8 text-slate-700">
              最も混み合うのは
              <strong className="font-semibold">7〜8月の猛暑日が続く時期</strong>
              で、特に気温が急に上がった直後に問い合わせが集中します。メーカーや大手も、夏の繁忙期は受付が混雑し、訪問までの日程調整に時間がかかる場合があると案内しています。
            </p>
            <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <p className="font-bold text-sky-800 mb-3">早く修理したい方への推奨事項</p>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">1.</span><span><strong>梅雨明け前（6月ごろ）の点検・試運転</strong>：混雑する前に不調を把握できます</span></li>
                <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">2.</span><span><strong>電話がつながらない場合はWeb受付</strong>：ダイキンは、回線の混雑時にWebでの修理依頼を案内しています</span></li>
                <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">3.</span><span><strong>複数社への同時相談</strong>：早く対応できる業者が見つかりやすくなります</span></li>
              </ul>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              夏季に急ぎで修理が必要な場合は、即日・最短対応を掲げる業者を探す方法もあります。
              <Link href="/ranking/fast" className="text-sky-600 underline underline-offset-2">即日対応の業者ランキング</Link>
              もあわせてご覧ください。
            </p>
          </section>

          <section id="calendar" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">月別 繁忙期カレンダー</h2>
            <p className="leading-8 text-slate-700 mb-6">
              1〜12月の混雑度・待ち日数・予約の傾向の目安を一覧で掲載しています。混雑度は
              <span className="inline-flex items-center gap-1 mx-1"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${levelStyle["低"]}`}>低</span></span>
              →
              <span className="inline-flex items-center gap-1 mx-1"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${levelStyle["中"]}`}>中</span></span>
              →
              <span className="inline-flex items-center gap-1 mx-1"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${levelStyle["高"]}`}>高</span></span>
              →
              <span className="inline-flex items-center gap-1 mx-1"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${levelStyle["最繁忙"]}`}>最繁忙</span></span>
              の順で、需要の集中しやすさを相対的に示したものです。
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <thead className="bg-[var(--color-brand)] text-white">
                  <tr>
                    <th className="px-3 py-3 text-left font-bold">月</th>
                    <th className="px-3 py-3 text-center font-bold">混雑度</th>
                    <th className="px-3 py-3 text-left font-bold">待ちの目安</th>
                    <th className="px-4 py-3 text-left font-bold hidden md:table-cell">傾向</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {calendar.map((m, i) => (
                    <tr key={m.month} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-3 font-bold text-slate-800 whitespace-nowrap">{m.month}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${levelStyle[m.level]}`}>{m.level}</span>
                      </td>
                      <td className="px-3 py-3 text-slate-700">{m.wait}</td>
                      <td className="px-4 py-3 text-xs text-slate-500 hidden md:table-cell">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              ※「待ちの目安」は各社の繁忙期の告知や一般的な傾向にもとづく参考値（推定を含む）であり、待ち日数を保証するものではありません。実際の状況は年・地域・業者・症状で大きく異なります。傾向欄はスマートフォンでは省略されます。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="夏の室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="reality" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">繁忙期の実態（公式の告知）</h2>
            <p className="leading-8 text-slate-700 mb-4">
              夏季の混雑は、メーカー各社の公式案内からも確認できます。以下は、各社が公表している告知の例です。
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900 mb-2">パナソニック（出張修理サービス）</h3>
                <p className="text-[0.95rem] leading-7 text-slate-700">
                  訪問日時を申込時に指定しなかった場合は当日中に連絡するとしつつ、
                  <strong className="font-semibold">「繁忙期は日程調整までお時間をいただく場合があります」</strong>
                  と案内しています。
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  出典：Panasonic 出張修理サービスFAQ（
                  <a href="https://jpn.faq.panasonic.com/app/answers/detail/a_id/63906/" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline underline-offset-2">jpn.faq.panasonic.com</a>
                  ）／確認日：2026年10月31日
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900 mb-2">ダイキン（修理のお申し込み窓口）</h3>
                <p className="text-[0.95rem] leading-7 text-slate-700">
                  修理受付の電話窓口のページで
                  <strong className="font-semibold">「現在、電話が大変込み合っております」</strong>
                  と告知し、回線の混雑時はオペレーターにつなぐ途中で電話が切断される場合があるとして、Webでの修理依頼やメールでの問い合わせを案内しています。Web受付では、電話受付時と同じ最短日を選択できるとしています（一部地域を除く）。
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  出典：ダイキン工業「お問合せ」（
                  <a href="https://www.daikincc.com/business_inquiry.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline underline-offset-2">daikincc.com</a>
                  ）・「どんな流れで修理するの？」（
                  <a href="https://www.daikincc.com/acceptnew/howto.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline underline-offset-2">daikincc.com</a>
                  ）／確認日：2026年10月31日
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900 mb-2">報道：繁忙期対応の強化</h3>
                <p className="text-[0.95rem] leading-7 text-slate-700">
                  日本経済新聞は、ダイキンが修理受け付けなどの電話対応の一部をAIに切り替え、
                  <strong className="font-semibold">繁忙期に備える</strong>
                  と報じています。修理の問い合わせが夏に集中していることを示す動きです。
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  出典：日本経済新聞「ダイキン、電話応答の3割AIで 修理受付で繁忙期に備え」（
                  <a href="https://www.nikkei.com/article/DGXZQOUF285T30Y5A220C2000000/" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline underline-offset-2">nikkei.com</a>
                  ）／確認日：2026年10月31日
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              上記のとおり、各社とも夏の繁忙期は受付が混み合い、日程調整に時間がかかる傾向があります。具体的な待ち日数は公表されていないため、正確な状況は依頼先へ直接ご確認ください。
            </p>
          </section>

          <section id="tips" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">早く・費用を抑えて依頼する方法</h2>
            <ol className="space-y-4">
              {[
                ["電話がつながらない場合はWeb受付を使う", "ダイキンは、回線の混雑時は電話が途中で切断される場合があるとして、Webでの修理依頼やメールでの問い合わせを案内しています。Web受付では、電話受付時と同じ最短日を選択できるとしています（一部地域を除く）。"],
                ["複数社に同時に相談する", "1社に限定せず2〜3社に相談することで、早く対応できる業者が見つかりやすくなり、料金の比較もできます。繁忙期は特に、複数の選択肢を確保しておくことをおすすめします。"],
                ["梅雨の時期に予防点検・試運転を行う", "混雑する前に冷房の試運転を行い、不調を把握しておくことで、余裕をもって修理や買い替えを検討できます。"],
                ["メーカー名・型番・症状を記録する", "型番やエラー表示、症状が発生した時期と内容を伝えることで、受付・見積もり・日程調整が円滑に進み、待ち時間の短縮につながります。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-brand)] text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              急ぎの場合は、即日・最短対応を掲げる業者を探す方法もあります。詳しくは
              <Link href="/ranking/fast" className="text-sky-600 underline underline-offset-2">即日対応の業者ランキング</Link>
              をご覧ください。
            </p>
          </section>

          <section id="emergency" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者を待つ間の応急対処</h2>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 mb-5">
              <p className="font-bold text-amber-800 mb-2">安全の確認</p>
              <p className="text-[0.95rem] leading-7 text-slate-700">
                焦げ臭いにおい・煙・火花・急な異音の悪化などがある場合は、すぐに運転を止めて使用を控え、電源プラグを抜いて業者に相談してください。無理な分解は感電・けが・故障悪化の原因になります。
              </p>
            </div>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>フィルターを清掃する</strong>：目詰まりで冷えが悪くなっていることがあります（電源を切ってから作業）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>室外機の周りを片づける</strong>：吹き出し口をふさぐ物を取り除き、風通しをよくします</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>室外機を直射日光から守る</strong>：日よけで日陰をつくると放熱を助けることがあります（吸排気はふさがない）</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong>熱中症に注意する</strong>：修理を待つ間は扇風機の使用・水分補給・涼しい場所への移動など、体調管理を優先してください</span></li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              症状別の詳しい対処は
              <Link href="/symptom/not-cooling" className="text-sky-600 underline underline-offset-2">「冷えない」の原因と対処</Link>
              もあわせてご確認ください。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-start gap-3 font-semibold text-slate-800 list-none">
                    <span className="text-sky-600">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-slate-600 leading-7 text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ・更新履歴</h2>
            <p className="leading-8 text-slate-700">
              エアコン修理が最も混み合うのは7〜8月の猛暑日が続く時期であり、各社とも繁忙期は日程調整に時間がかかる傾向があります。早く修理するには、梅雨明け前の点検、電話がつながらない場合のWeb受付、複数社への同時相談が有効です。急ぎの場合は即日対応の業者を探すとともに、業者を待つ間は安全を最優先にし、可能な範囲で応急対処を行ってください。
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-sm font-bold text-slate-700 mb-3">更新履歴</p>
              <ul className="space-y-1 text-[0.9rem] text-slate-600">
                <li className="flex gap-3"><span className="tabular-nums text-slate-400">2026-10-31</span><span>各社の告知を公式で再確認しました。ダイキンの告知を問い合わせページの記載に差し替え、出典の無い待ち日数（「数日以内」「1週間以上」）と電話がつながりやすい時間帯の記述を削除しました。</span></li>
                <li className="flex gap-3"><span className="tabular-nums text-slate-400">2026-08-03</span><span>8月更新。最繁忙期の状況とお盆期間の注意事項を追記しました。</span></li>
                <li className="flex gap-3"><span className="tabular-nums text-slate-400">2026-07-12</span><span>初版公開。混雑カレンダーと公式告知を掲載しました。</span></li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                ※混雑度・待ち日数の目安と各社告知は、シーズンの変化に合わせて月次で見直します。最新の状況は依頼先の公式案内もご確認ください。
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">混雑する前の無料見積もりのご相談</p>
              <p className="text-sky-100 text-sm mb-5">24時間受付の業者も多数掲載しています。早めにご相談いただくことで、選択肢が広がります。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                修理業者ランキングを見る
              </Link>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking/fast", label: "即日対応の業者ランキング" },
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場" },
                { href: "/guide/noise", label: "エアコンの異音「ガガガ」の原因と対処" },
                { href: "/symptom/not-cooling", label: "エアコンが冷えない場合の原因と対処" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
