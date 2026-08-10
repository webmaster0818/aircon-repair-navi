import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理は何日かかる？依頼先別の日数目安と今日直したいときの動き方【2026年】",
  description:
    "エアコン修理の訪問までの日数を依頼先別（メーカー・量販店・即日対応業者）に整理。シャープ公式の「最短翌日」記載など公式一次情報と繁忙期の傾向をもとに、真夏に少しでも早く直すための具体的な動き方を解説します。",
  alternates: { canonical: "/guide/repair-days/" },
};

const UPDATED = "2026年8月10日";

const faqs = [
  {
    q: "エアコン修理は依頼から何日で来てもらえますか？",
    a: "時期と依頼先で大きく変わります。落ち着いた時期（春・秋）は数日以内が一般的ですが、7〜8月の繁忙期は1週間以上待つ場合もあります。公式に日数を明記しているのは少なく、確認できた範囲ではシャープが「訪問日はサービス拠点の空き状況により最短翌日から指定可能」と案内しています（2026年8月10日確認）。正確な日程は受付時に必ず確認しましょう。",
  },
  {
    q: "メーカー修理は遅いと聞きますが本当ですか？",
    a: "「遅い」と一概には言えませんが、メーカーの出張修理は受付→訪問日調整→訪問→（部品取り寄せの場合）再訪問という流れのため、部品交換を伴うと2回の訪問が必要になり日数が延びやすい構造です。ダイキン・パナソニックとも訪問までの日数目安は公式に掲載していないため（2026年8月10日確認）、受付時に「最短でいつ来られるか」「部品があるか」を聞くのが確実です。",
  },
  {
    q: "今日中に直したいときはどうすればいいですか？",
    a: "即日対応をうたう修理業者に朝いちばんで連絡するのが最も現実的です。受付が24時間の業者なら早朝でも枠を押さえられる可能性があります。その際、①症状を具体的に伝える、②出張費・見積もりの有無を確認する、③総額を書面で確認する、の3点を守ると高額請求トラブルを避けられます。当サイトの即日対応ランキングで受付時間と料金を比較できます。",
  },
  {
    q: "修理を待つ間、部屋の暑さはどうしのげばいいですか？",
    a: "扇風機・サーキュレーターの併用、遮光カーテンで日射を防ぐ、日中は図書館や商業施設など冷房のある場所へ避難する、保冷剤や冷感タオルを使う、といった応急対処があります。特に高齢者・乳幼児・ペットのいる家庭は熱中症リスクが高いため、無理せず涼しい場所への一時避難を優先してください。",
  },
  {
    q: "何月に頼むのが一番早く来てもらえますか？",
    a: "需要が少ない春（3〜5月）と秋（10〜11月）は予約が取りやすい時期です。冷房シーズン前の5〜6月に試運転して不調を見つけておけば、混み合う前に余裕をもって修理できます。詳しくは繁忙期カレンダーで月別の混雑傾向を解説しています。",
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
            依頼先別の日数目安と今日直したいときの動き方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-10">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            真夏にエアコンが壊れたとき、料金より切実なのが<strong className="font-semibold text-slate-900">「何日で直るのか」</strong>です。
            この記事では、依頼先別の日数の目安と、待ち日数を1日でも縮める動き方を整理しました。
            公式に日数を明記しているメーカーはほとんどないため、<strong className="font-semibold text-slate-900">公式記載が確認できたものと、傾向として言えることを区別して</strong>書いています（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-800 mb-1">いま（8月）は年間で最も待つ時期です</p>
            <p className="text-sm leading-7 text-slate-700">
              8月は需要のピークで、訪問まで1週間以上かかる場合もあります。急ぐ場合は、この記事の「今日直したいときの動き方」を先にご覧ください。
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
                      ダイキン・パナソニックとも訪問日数の公式目安は掲載なし（{UPDATED}確認）。シャープは「最短翌日から指定可能（拠点の空き状況による）」と公式記載。部品取り寄せがあると再訪問で日数が延びる
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">量販店（購入店）経由</td>
                    <td className="border border-slate-300 px-3 py-2">数日〜（店舗経由の調整分がかかる）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      ヤマダデンキは申込→メール→電話で訪問日連絡の流れ（日数の公式目安は掲載なし）。保証適用なら費用面のメリット大
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">即日対応の修理業者</td>
                    <td className="border border-slate-300 px-3 py-2">最短当日〜翌日</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">
                      24時間受付・「30分以内に駆けつけ」等をうたう業者あり（混雑・地域により変動）。有償前提のため総額の書面見積もり確認が必須
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">なぜ夏は待たされるのか（構造の話）</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                夏の待ち日数が延びるのは、<strong className="font-semibold">猛暑日の直後に依頼が集中する</strong>のに対し、
                訪問できる技術者の数は急に増やせないためです。さらにメーカー修理は
                <strong className="font-semibold">「診断→部品取り寄せ→再訪問」で2回の訪問が必要になるケース</strong>があり、
                部品在庫がないと1回で終わりません。
              </p>
              <p>
                月別の混雑傾向は<Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2 font-semibold">繁忙期カレンダー</Link>で詳しく解説していますが、
                結論だけ言えば<strong className="font-semibold">7〜8月がピーク、5〜6月までに点検しておくのが理想</strong>です。
              </p>
            </div>
          </section>

          <section id="today" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">今日直したいときの動き方（3ステップ）</h2>
            <ol className="space-y-4">
              {[
                ["朝いちばんに複数の窓口へ連絡", "受付開始直後が最も枠を取りやすい時間帯です。24時間受付の業者なら早朝でも連絡できます。1社に絞らず複数へ同時相談すると、先に動ける業者が見つかりやすくなります。"],
                ["症状・機種・設置状況を具体的に伝える", "「冷えない」「水が漏れる」「エラーコード表示」など症状と、メーカー名・おおよその年式・室外機の設置場所（ベランダ／高所）を伝えると、対応可否と概算の回答が早くなります。"],
                ["総額の見積もりを書面で確認してから依頼", "国民生活センターは2026年6月、ネット広告の「安い」「即日」をうたう業者との修理トラブル（相談件数は5年で2倍超）に注意喚起を出しています。急いでいても、作業前に総額を書面・メールで受け取ることだけは省かないでください。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white font-bold">{i + 1}</span>
                  <div>
                    <p className="font-bold text-slate-900">{t}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">今日・明日中に直したい人へ</p>
              <p className="text-sky-100 text-sm mb-5">24時間受付・即日対応をうたう業者を比較しています。</p>
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
                <li>・ダイキン／パナソニックの出張修理ページに訪問日数の目安記載なし（{UPDATED}確認）</li>
                <li>・国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）</li>
                <li>・繁忙期の傾向は<Link href="/guide/busy-season/" className="text-sky-600 underline underline-offset-2">繁忙期カレンダー</Link>の各社公式告知にもとづく</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking/fast", label: "即日対応の業者ランキング" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼む？使い分けガイド" },
                { href: "/cost/maker-repair-fee/", label: "メーカー6社の出張費・診断料 横断比較" },
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
