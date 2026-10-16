import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理は何日かかる？依頼先別の日数の目安と当日中に修理したい場合の対応【2026年】",
  description:
    "エアコン修理の訪問までの日数を、依頼先別（メーカー・量販店・即日対応業者）にご説明します。シャープ公式の「最短翌日」の記載などの公式情報と繁忙期の傾向にもとづき、夏季にできるだけ早く修理するための具体的な手順を掲載しています。",
  alternates: { canonical: "/guide/repair-days/" },
};

const UPDATED = "2026年8月10日";

const faqs = [
  {
    q: "エアコン修理は依頼から何日で来てもらえますか？",
    a: "時期と依頼先によって大きく異なります。依頼が少ない時期（春・秋）は数日以内が一般的ですが、7〜8月の繁忙期は1週間以上かかる場合もあります。日数を公式に明記している例は少なく、当サイトで確認できた範囲では、シャープが「訪問日はサービス拠点の空き状況により最短翌日から指定可能」と案内しています（2026年8月10日確認）。正確な日程は、受付時に必ずご確認ください。",
  },
  {
    q: "メーカー修理は日数がかかりますか？",
    a: "一概に日数がかかるとはいえませんが、メーカーの出張修理は受付、訪問日の調整、訪問、（部品取り寄せの場合）再訪問という流れのため、部品交換を伴う場合は2回の訪問が必要となり、日数が延びやすくなります。ダイキン・パナソニックはいずれも訪問までの日数の目安を公式に掲載していないため（2026年8月10日確認）、受付時に「最短の訪問日」と「部品の在庫の有無」をご確認ください。",
  },
  {
    q: "当日中に修理したい場合はどうすればよいですか？",
    a: "即日対応を掲げる修理業者に、朝の早い時間帯に連絡する方法が有効です。24時間受付の業者であれば、早朝でも予約枠を確保できる可能性があります。その際は、①症状を具体的に伝える、②出張費・見積もりの有無を確認する、③総額を書面で確認する、の3点を守ることで、高額請求のトラブルを避けやすくなります。当サイトの即日対応ランキングでは、受付時間と料金を比較できます。",
  },
  {
    q: "修理を待つ間の暑さ対策を教えてください。",
    a: "扇風機・サーキュレーターの使用、遮光カーテンによる日射の遮断、日中に図書館や商業施設など冷房のある場所で過ごす、保冷剤や冷感タオルを使用する、といった応急的な対策があります。特に高齢者・乳幼児・ペットのいるご家庭は熱中症のリスクが高いため、涼しい場所への一時的な移動を優先してください。",
  },
  {
    q: "訪問の予約を取りやすいのは何月ですか？",
    a: "需要が少ない春（3〜5月）と秋（10〜11月）は、予約を取りやすい時期です。冷房シーズン前の5〜6月に試運転を行い、不調を早めに把握しておくことで、混雑する前に余裕をもって修理を依頼できます。月別の混雑傾向は、繁忙期カレンダーで詳しくご説明しています。",
  },
];

export default function RepairDaysPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/repair-days/" },
          { name: "エアコン修理は何日かかる？", href: "/guide/repair-days/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">日数ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理は何日かかる？
            <br className="hidden md:block" />
            依頼先別の日数の目安と当日中に修理したい場合の対応
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            夏季にエアコンが故障した場合、料金とあわせて重要になるのが<strong className="font-semibold text-slate-900">修理までにかかる日数</strong>です。
            本記事では、依頼先別の日数の目安と、待ち日数をできるだけ短くするための手順をご説明します。
            日数を公式に明記しているメーカーはほとんどないため、<strong className="font-semibold text-slate-900">公式の記載を確認できた情報と、一般的な傾向を区別して</strong>掲載しています（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-800 mb-1">10月は予約を取りやすい時期です</p>
            <p className="text-sm leading-7 text-slate-700">
              秋（10〜11月）は需要が少なく、真夏に比べて訪問の日程を取りやすい時期です。月別の混雑傾向は<Link href="/guide/busy-season/" className="text-sky-700 underline underline-offset-4 font-semibold">繁忙期カレンダー</Link>でご確認いただけます。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼先別の日数目安</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">依頼先</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">訪問までの目安</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">根拠・注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">メーカー出張修理</td>
                    <td className="border border-slate-300 px-3 py-2">数日〜（繁忙期は1週間以上の場合も）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ダイキン・パナソニックはいずれも訪問日数の公式の目安を掲載していません（{UPDATED}確認）。シャープは「最短翌日から指定可能（拠点の空き状況による）」と公式に記載しています。部品の取り寄せがある場合は、再訪問により日数が延びます
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">量販店（購入店）経由</td>
                    <td className="border border-slate-300 px-3 py-2">数日〜（店舗経由での調整期間を要します）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ヤマダデンキは、申込後にメール、電話の順で訪問日が連絡される流れです（日数の公式の目安は掲載されていません）。保証が適用される場合は、費用面での利点が大きくなります
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">即日対応の修理業者</td>
                    <td className="border border-slate-300 px-3 py-2">最短当日〜翌日</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      24時間受付・「30分以内に駆けつけ」などを掲げる業者があります（混雑・地域により変動）。有償での対応となるため、総額の見積もりを書面で確認する必要があります
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※日数はその年の天候・地域・症状で大きく変動します。表の「目安」は公式記載と一般的傾向にもとづくもので、保証されるものではありません。
            </p>
          </section>

          <section id="why" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">夏季に待ち日数が延びる理由</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                夏の待ち日数が延びるのは、<strong className="font-semibold">猛暑日の直後に依頼が集中する</strong>のに対し、
                訪問できる技術者の数は急に増やせないためです。さらにメーカー修理は
                <strong className="font-semibold">「診断→部品取り寄せ→再訪問」で2回の訪問が必要になるケース</strong>があり、
                部品の在庫がない場合は1回の訪問では完了しません。
              </p>
              <p>
                月別の混雑傾向は<Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2 font-semibold">繁忙期カレンダー</Link>で詳しくご説明していますが、
                <strong className="font-semibold">7〜8月が混雑のピークであり、5〜6月までに点検しておくことをおすすめします</strong>。
              </p>
            </div>
          </section>

          <section id="today" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">当日中に修理したい場合の3つの手順</h2>
            <ol className="space-y-4">
              {[
                ["朝の早い時間帯に複数の窓口へ連絡する", "受付開始直後は、最も予約枠を確保しやすい時間帯です。24時間受付の業者であれば、早朝でも連絡できます。1社に限定せず複数の業者へ同時に相談することで、早く対応できる業者が見つかりやすくなります。"],
                ["症状・機種・設置状況を具体的に伝える", "「冷えない」「水が漏れる」「エラーコード表示」などの症状と、メーカー名・おおよその年式・室外機の設置場所（ベランダ／高所）を伝えることで、対応の可否と概算費用の回答が早くなります。"],
                ["総額の見積もりを書面で確認してから依頼する", "国民生活センターは2026年6月、ネット広告で「安い」「即日」を掲げる業者との修理トラブル（相談件数は5年で2倍超）について注意喚起を公表しています。急ぎの場合でも、作業前に総額を書面・メールで受け取るようにしてください。"],
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
              <p className="text-lg font-bold mb-2">当日・翌日中の修理をご希望の方へ</p>
              <p className="text-sky-100 text-sm mb-5">24時間受付・即日対応を掲げる業者を比較しています。</p>
              <Link href="/ranking/fast" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                即日対応の業者ランキングを見る
              </Link>
            </div>
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
                <li>・シャープ「修理のご相談」（訪問日は最短翌日から指定可能の記載・{UPDATED}確認）</li>
                <li>・パナソニック公式FAQ（宅配修理は到着後5日程度で返送・{UPDATED}確認）</li>
                <li>・ダイキン／パナソニックの出張修理ページ（訪問日数の目安の記載なし・{UPDATED}確認）</li>
                <li>・国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）</li>
                <li>・繁忙期の傾向：<Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2">繁忙期カレンダー</Link>に掲載した各社の公式告知</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking/fast", label: "即日対応の業者ランキング" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料の比較" },
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
