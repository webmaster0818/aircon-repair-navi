import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "賃貸のエアコンが故障した場合の修理費は誰が負担？大家と入居者の負担区分【民法・国交省ガイドラインにもとづく】",
  description:
    "賃貸マンション・アパートのエアコンが故障した場合に、修理費を大家と入居者のどちらが負担するかを、民法606条・国土交通省の原状回復ガイドラインの原文にもとづいてご説明します。無断で業者を手配すると自己負担となるおそれがある行為、大家が対応しない場合の手順、残置物エアコンの注意点を掲載しています。",
  alternates: { canonical: "/guide/rental-aircon-repair/" },
};

const UPDATED = "2026年8月10日";

const toc = [
  { id: "summary", label: "原則は大家の負担" },
  { id: "law", label: "根拠となる法律（民法606条ほか）" },
  { id: "cases", label: "負担が分かれる4つのケース" },
  { id: "ng", label: "避けるべき行為" },
  { id: "steps", label: "大家が対応しない場合の手順" },
  { id: "zanchi", label: "「残置物」エアコンの注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ・出典" },
];

const faqs = [
  {
    q: "賃貸の備え付けエアコンが故障した場合、修理費は誰が支払いますか？",
    a: "設備として備え付けられたエアコンが通常の使用で故障した場合、修理費は原則として大家（賃貸人）の負担です。民法606条1項は「賃貸人は、賃貸物の使用及び収益に必要な修繕をする義務を負う」と定めています。ただし、入居者の責めに帰すべき事由（掃除を怠った、物をぶつけて壊したなど）による故障は、この限りではありません。まずは管理会社・大家へご連絡ください。",
  },
  {
    q: "大家に連絡せず、自分で修理業者を手配してもよいですか？",
    a: "おすすめできません。民法607条の2により、入居者が自ら修繕できるのは「修繕が必要と通知したのに大家が相当の期間内に修繕しないとき」または「急迫の事情があるとき」に限られます。この要件を満たさずに修理すると、費用を大家に請求できず、自己負担となるおそれがあります。必ず先に管理会社・大家へ連絡し、やりとりを記録に残してください。",
  },
  {
    q: "大家が何日も対応しない場合は、どうすればよいですか？",
    a: "①修繕が必要であることを通知した記録（メール・アプリのやりとり等）を残す、②相当の期間（一般に真夏の生活必需設備なら数日程度が目安とされますが法定の日数はありません）を待つ、③それでも対応がない場合は、民法607条の2にもとづきご自身で修繕を手配し、民法608条1項により、支出した必要費を直ちに大家へ償還請求できます。トラブルを防ぐため、見積もりを事前に大家へ共有しておくことをおすすめします。",
  },
  {
    q: "前の入居者が残したエアコン（残置物）も、大家が修理しますか？",
    a: "契約書で「残置物（設備ではない）」と扱われている場合、大家に修繕義務はないとするのが一般的な契約実務です（この点を直接定めた公的資料は、当サイトでは確認しておりません）。契約書・重要事項説明書で、当該エアコンが「設備」か「残置物」かを必ずご確認ください。残置物の場合、修理・交換は入居者の負担となるのが通例です。",
  },
  {
    q: "エアコンのクリーニング代は入居者の負担ですか？",
    a: "国土交通省の原状回復ガイドラインは、エアコンの内部洗浄について「喫煙等による臭い等が付着していない限り、通常の生活において必ず行うとまでは言い切れず、賃借人の管理の範囲を超えているので、賃貸人負担とすることが妥当」としています。一方、日常のフィルター掃除などの手入れを怠って汚損が生じた場合は、善管注意義務違反として入居者の負担と判断されることがあります。",
  },
];

export default function RentalAirconRepairPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/rental-aircon-repair/" },
          { name: "賃貸のエアコン修理費の負担区分", href: "/guide/rental-aircon-repair/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">賃貸ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            賃貸のエアコンが故障した場合の修理費の負担
            <br className="hidden md:block" />
            大家と入居者の負担区分
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-b.jpg"
              alt="賃貸住宅のエアコン修理費の負担を確認するイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            賃貸マンション・アパートのエアコンが故障した際に、まず確認したいのが
            <strong className="font-semibold text-slate-900">修理費を入居者と大家のどちらが負担するか</strong>
            という点です。本記事では、民法と国土交通省「原状回復をめぐるトラブルとガイドライン」の
            <strong className="font-semibold text-slate-900">原文にもとづいて</strong>
            負担区分をご説明し、費用を不必要に自己負担しないための手順をご案内します（法令・資料は{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-800 mb-1">最も重要な注意事項</p>
            <p className="text-sm leading-7 text-slate-700">
              備え付けエアコンが故障した場合、<strong>大家・管理会社へ連絡する前に、ご自身で修理業者を手配することはお控えください</strong>。
              法律上の要件を満たさない自己判断の修理は、費用を請求できず、自己負担となるおそれがあります（詳しくは本文でご説明します）。
            </p>
          </div>
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
          {/* 原則 */}
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">備え付けエアコンの修理費は原則として大家の負担です</h2>
            <p className="leading-8 text-slate-700">
              物件の設備として備え付けられたエアコンが通常の使用で故障した場合、修理費は
              <strong className="font-semibold">原則として大家（賃貸人）の負担</strong>です。
              民法606条1項が、賃貸人に「使用及び収益に必要な修繕をする義務」を課しているためです。
              ただし、<strong className="font-semibold">入居者に原因がある故障</strong>と、
              <strong className="font-semibold">「残置物」扱いのエアコン</strong>は例外です。
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left whitespace-nowrap">ケース</th>
                    <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left whitespace-nowrap">負担</th>
                    <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left">根拠</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">備え付け（設備）＋経年劣化・自然故障</td>
                    <td className="border border-slate-300 px-4 py-2 text-sky-700 font-bold whitespace-nowrap">大家</td>
                    <td className="border border-slate-300 px-4 py-2">民法606条1項本文・国交省ガイドライン（経年変化・通常損耗は賃貸人負担）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">入居者の故意・過失・手入れの怠りが原因</td>
                    <td className="border border-slate-300 px-4 py-2 text-rose-600 font-bold whitespace-nowrap">入居者</td>
                    <td className="border border-slate-300 px-4 py-2">民法606条1項ただし書・善管注意義務違反</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">前入居者が残した「残置物」エアコン</td>
                    <td className="border border-slate-300 px-4 py-2 text-rose-600 font-bold whitespace-nowrap">入居者（通例）</td>
                    <td className="border border-slate-300 px-4 py-2">契約実務（契約書の設備／残置物の区分による）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">自分で購入・設置したエアコン</td>
                    <td className="border border-slate-300 px-4 py-2 text-rose-600 font-bold whitespace-nowrap">入居者</td>
                    <td className="border border-slate-300 px-4 py-2">自己所有物のため</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 法律 */}
          <section id="law" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">根拠となる法律（条文の原文）</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-bold text-slate-900 mb-2">民法606条1項（賃貸人による修繕等）</p>
                <blockquote className="border-l-4 border-sky-200 bg-sky-50/50 pl-4 py-2 pr-3 text-sm leading-7 text-slate-700">
                  賃貸人は、賃貸物の使用及び収益に必要な修繕をする義務を負う。ただし、賃借人の責めに帰すべき事由によってその修繕が必要となったときは、この限りでない。
                </blockquote>
                <p className="mt-2 text-sm leading-7 text-slate-600">→ 設備であるエアコンの修理は大家の義務であり、入居者に原因がある故障は除くと定めた条文です。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-bold text-slate-900 mb-2">民法607条の2（賃借人による修繕）</p>
                <blockquote className="border-l-4 border-sky-200 bg-sky-50/50 pl-4 py-2 pr-3 text-sm leading-7 text-slate-700">
                  賃借物の修繕が必要である場合において、次に掲げるときは、賃借人は、その修繕をすることができる。
                  一　賃借人が賃貸人に修繕が必要である旨を通知し、又は賃貸人がその旨を知ったにもかかわらず、賃貸人が相当の期間内に必要な修繕をしないとき。
                  二　急迫の事情があるとき。
                </blockquote>
                <p className="mt-2 text-sm leading-7 text-slate-600">→ 入居者が自ら修理できるのは、「通知したにもかかわらず大家が対応しない」場合か「急迫の事情がある」場合に限られます。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-bold text-slate-900 mb-2">民法608条1項（賃借人による費用の償還請求）</p>
                <blockquote className="border-l-4 border-sky-200 bg-sky-50/50 pl-4 py-2 pr-3 text-sm leading-7 text-slate-700">
                  賃借人は、賃借物について賃貸人の負担に属する必要費を支出したときは、賃貸人に対し、直ちにその償還を請求することができる。
                </blockquote>
                <p className="mt-2 text-sm leading-7 text-slate-600">→ 所定の手順を踏んで自費で修理した場合は、その費用を大家に「直ちに」請求できます。</p>
              </div>
              <p className="text-sm leading-7 text-slate-500">
                条文出典：e-Gov法令検索「民法」（明治二十九年法律第八十九号）
                <a href="https://elaws.e-gov.go.jp/document?lawid=129AC0000000089" target="_blank" rel="noopener" className="text-sky-600 underline underline-offset-2 ml-1">原文を見る</a>
                （{UPDATED}確認）
              </p>
            </div>
          </section>

          {/* ケース */}
          <section id="cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">負担が分かれる4つのケース</h2>
            <div className="space-y-6 leading-8 text-slate-700">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">① 経年劣化・自然故障 → 大家の負担</h3>
                <p>
                  国土交通省の原状回復ガイドラインは、損耗を「経年変化」「通常損耗」「賃借人の故意・過失等による損耗」に区分し、
                  経年変化・通常損耗は<strong className="font-semibold">賃貸人が負担すべき</strong>としています。
                  同ガイドラインの耐用年数の考え方では、エアコンなど冷暖房機器は<strong className="font-semibold">耐用年数6年</strong>に分類されており、
                  年数が経過した設備の自然故障は、入居者の責任ではありません。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">② 入居者の過失（手入れの怠り・破損） → 入居者の負担</h3>
                <p>
                  ガイドラインは「清掃・手入れを怠った結果汚損が生じた場合は、賃借人の善管注意義務違反に該当すると判断されることが多い」としています。
                  フィルター掃除を長期間怠って故障した場合や、物をぶつけて壊した場合は、民法606条1項ただし書の「賃借人の責めに帰すべき事由」にあたり、入居者の負担となります。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">③ 残置物エアコン → 入居者の負担が通例</h3>
                <p>
                  前の入居者が残したエアコンを「残置物」として契約している場合、大家に修繕義務はないとするのが一般的な契約実務です。
                  詳しくは<a href="#zanchi" className="text-sky-600 underline underline-offset-2">残置物の注意点</a>でご説明します。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">④ ご自身で設置したエアコン → 入居者の負担</h3>
                <p>
                  ご自身で購入・設置したエアコンは自己所有物のため、修理の費用負担と手配もご自身で行います。この場合は
                  <Link href="/ranking/" className="text-sky-600 underline underline-offset-2 font-semibold">修理業者の比較</Link>や
                  <Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2 font-semibold">料金相場</Link>を参考に、依頼先をお選びください。
                </p>
              </div>
            </div>
          </section>

          {/* NG行動 */}
          <section id="ng" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">避けるべき行為</h2>
            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/60 p-6">
              <ul className="space-y-3 text-slate-700 text-[0.95rem] leading-7">
                <li className="flex gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-1 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                  <span><strong>大家・管理会社に連絡する前に修理業者を手配する</strong>：民法607条の2の要件（通知と相当の期間の経過、または急迫の事情）を満たさない修理は、費用を請求できないおそれがあります。</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-1 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                  <span><strong>口頭での連絡のみで記録を残さない</strong>：通知したことを後から証明できません。メール・管理アプリ・LINEなど、記録が残る手段をご利用ください。</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-1 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                  <span><strong>契約書を確認せずに交渉する</strong>：エアコンが「設備」か「残置物」かによって負担区分が異なります。特約の有無も含め、まず契約書をご確認ください。</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-1 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
                  <span><strong>放置して症状を悪化させる</strong>：水漏れを放置して壁や床を傷めると、その部分について入居者の責任を問われるおそれがあります。</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 手順 */}
          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">大家が対応しない場合の手順</h2>
            <ol className="space-y-4">
              {[
                ["契約書でエアコンの扱いを確認する", "「設備」であれば大家に修繕義務があります。「残置物」であればご自身で手配します。"],
                ["管理会社・大家に記録が残る形で連絡する", "症状・発生日・部屋番号を伝え、修繕を依頼した記録（メールなど）を残します。これが民法607条の2第1号の「通知」にあたります。"],
                ["相当の期間を待つ", "法定の日数はありませんが、夏季の冷房など生活に不可欠な設備は、比較的短い期間で判断されると考えられています。再度の連絡も記録に残してください。"],
                ["対応がない場合はご自身で修繕を手配する", "民法607条の2にもとづき、修理業者へ依頼します。見積もりを事前に大家へ共有しておくことで、トラブルを防ぎやすくなります。"],
                ["費用を大家に償還請求する", "民法608条1項により、支出した必要費は直ちに請求できます。領収書・見積書・やりとりの記録を保管してください。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white font-bold">{i + 1}</span>
                  <div>
                    <p className="font-bold text-slate-900">{t}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">ご自身で修理を手配する場合</p>
              <p className="text-sky-100 text-sm mb-5">見積もり無料で、書面で内容を確認できる業者を比較しています。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                修理業者ランキングを見る
              </Link>
            </div>
          </section>

          {/* 残置物 */}
          <section id="zanchi" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">「残置物」エアコンの注意点</h2>
            <p className="leading-8 text-slate-700">
              前の入居者が退去時に残したエアコンを、大家が「残置物」として貸し出している場合があります。
              契約書で残置物とされている場合、<strong className="font-semibold">故障しても大家に修繕義務はなく、修理・交換は入居者の負担となるのが通例</strong>です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              入居前・入居中にかかわらず、<strong className="font-semibold">契約書・重要事項説明書の設備欄</strong>で
              エアコンが「設備」か「残置物」かをご確認ください。記載が曖昧な場合は、管理会社に書面で確認しておくことで、後のトラブルを防ぎやすくなります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              ※残置物の修繕義務について直接定めた法令・公的資料は、当サイトでは確認しておりません（{UPDATED}時点）。上記は賃貸借契約の一般的な実務にもとづく説明です。個別のケースは契約内容によって異なるため、契約書の確認と、必要に応じて自治体の無料法律相談などをご利用ください。
            </p>
          </section>

          {/* FAQ */}
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

          {/* 要点・出典 */}
          <section id="last" className="scroll-mt-24 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ・出典</h2>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700 list-disc pl-5">
              <li>備え付け（設備）エアコンの自然故障は、<strong>原則として大家の負担</strong>です（民法606条1項）。</li>
              <li>ご自身で業者を手配する前に、<strong>必ず記録が残る形で管理会社・大家へご連絡ください</strong>（民法607条の2）。</li>
              <li>所定の手順を踏めば、自費で修理した費用を<strong>償還請求できます</strong>（民法608条1項）。</li>
              <li>「残置物」エアコンとご自身で設置したエアコンは、入居者の負担となるのが通例です。</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm leading-7 text-slate-600">
              <p className="font-bold text-slate-800 mb-2">出典（いずれも{UPDATED}確認）</p>
              <ul className="space-y-1">
                <li>・<a href="https://elaws.e-gov.go.jp/document?lawid=129AC0000000089" target="_blank" rel="noopener" className="text-sky-600 underline underline-offset-2">e-Gov法令検索「民法」</a>（606条・607条の2・608条）</li>
                <li>・<a href="https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000020.html" target="_blank" rel="noopener" className="text-sky-600 underline underline-offset-2">国土交通省「原状回復をめぐるトラブルとガイドライン」</a>（再改訂版）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場" },
                { href: "/ranking/", label: "エアコン修理業者ランキング" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
                { href: "/symptom/water-leak/", label: "エアコンの水漏れの原因と対処" },
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
