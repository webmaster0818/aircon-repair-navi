import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "三菱エアコン(霧ヶ峰)のランプ点滅・エラー表示の意味【家庭用】公式FAQにもとづく対処",
  description:
    "三菱電機の家庭用ルームエアコン（霧ヶ峰）のランプ点滅・エラー表示について、三菱電機公式FAQにもとづいてご説明します。全ランプ点滅（風向フラップの取付不良）、数字点滅（本体異常の可能性）、U1表示、クリーンモニター点滅、お手入れランプが消えない場合のリセット操作など、表示ごとの対処と修理依頼の判断基準を掲載しています。",
  alternates: { canonical: "/guide/error-code-mitsubishi/" },
};

const UPDATED = "2026年9月17日";

const patterns = [
  {
    code: "すべてのランプが点滅(運転できない)",
    mean: "上下風向フラップの取付不良を示す表示です(故障ではありません)",
    action: "フラップのストッパーを確実に取付け直してください(取付け方は機種の取扱説明書をご参照ください)",
    faq: "FAQ No.2646",
  },
  {
    code: "「FL」表示+全ランプ点滅",
    mean: "上記と同じです(体感温度モニター搭載機種での表示)",
    action: "上下風向フラップを正しく取付け直してください",
    faq: "FAQ No.2645",
  },
  {
    code: "室内機表示部に数字(1、3、5など)が点滅",
    mean: "室内機または室外機に異常が起きている可能性があります",
    action: "①室外機の吹出口・吸込口まわりの物を撤去する ②電源プラグを抜いて約1分後に差し直し、再運転する → 解消しない場合は点検・修理を依頼してください(点滅している数字をお伝えください)",
    faq: "FAQ No.2619",
  },
  {
    code: "運転ランプが点滅して運転できない",
    mean: "フラップ・室外機まわり・一時的な保護制御の可能性があります。解消しない場合は訪問修理が必要な故障です",
    action: "①フラップの取付を確認する ②室外機まわりの物を撤去する ③電源プラグを1分抜いてから再運転する → 3つの手順で解消しない場合は点検・修理を依頼してください",
    faq: "FAQ No.727",
  },
  {
    code: "クリーンモニターランプが点滅",
    mean: "フィルターおそうじメカ搭載機で、フィルター・ダストボックスが正しくセットされていない状態です",
    action: "フィルター・ダストボックスを外し、正しく取付け直してください",
    faq: "FAQ No.2707",
  },
  {
    code: "お手入れ・お掃除/フィルターランプが消えない",
    mean: "掃除・交換後のリセット操作が行われていない状態です(故障ではありません)",
    action: "室内機の「おそうじリセット」またはリモコンの「フィルターリセット」を、音が鳴るまで押してください",
    faq: "FAQ No.714",
  },
  {
    code: "リモコンに「U1」表示(運転しない)",
    mean: "電源「入」の後に「スタート」が押されないまま一定時間が経過したことを示す表示です",
    action: "電源を入れ直して設定し直し、「スタート」を押してください",
    faq: "FAQ No.591",
  },
];

const faqs = [
  {
    q: "霧ヶ峰には、ダイキンのようなエラーコード一覧はありますか？",
    a: "三菱電機の家庭用ルームエアコンは、「ランプの点滅パターン」と一部の表示（数字点滅・FL・U1など）で不具合を知らせる方式であり、消費者向けのエラーコード一覧は公開されていません。数字コードを検索できる「点検コード検索(WIN2K)」はありますが、公式に「販売店様向けのサービスです。個人のお客様は分解・修理などはせずに、必ずお買上げの販売店、または三菱電機 修理窓口へご相談ください」と明記されています(2026年9月17日確認)。本記事は、消費者向け公式FAQの公表内容のみにもとづいて作成しています。",
  },
  {
    q: "すべてのランプが点滅して動かない場合は故障ですか？",
    a: "多くの場合、故障ではありません。三菱電機公式FAQでは「上下風向フラップが正しく取り付けられていないと、すべてのランプが点滅して、運転できません。故障ではありませんので、すべての上下風向フラップのストッパーを確実に取付けてください」と案内されています（FAQ No.2646・2026年9月17日確認）。お手入れでフラップを外した後に表示されやすい症状です。体感温度モニター搭載機では「FL」表示を伴います(FAQ No.2645)。",
  },
  {
    q: "室内機に数字が点滅している場合はどうすればよいですか？",
    a: "三菱電機公式FAQ（No.2619）では「室内機または室外機に異常が起きていることが考えられます」としたうえで、①室外機の吹出口・吸込口周囲をふさぐ物を取り除く、②電源プラグを抜いて約1分待ち、差し直して再運転する、の2点が案内されています。それでも点滅が解消しない場合は本体の不具合の可能性があるため、電源プラグを抜いて、販売店または三菱電機修理窓口へ点検・修理をご依頼ください。その際は「点滅している数字を伝える」よう公式に案内されています（2026年9月17日確認）。",
  },
  {
    q: "点滅が解消しない場合の修理費用はどのくらいですか？",
    a: "修理内容により異なりますが、当サイトが調査したメーカー修理の目安では、三菱電機は訪問診断後にキャンセルした場合でも5,390円（当サイト調査値・確認日は費用ガイドをご参照ください）がかかります。症状別の概算は、メーカー修理費用の比較ページと修理費用相場のガイドに掲載しています。製造から10年前後の機種は部品保有期間の影響もあるため、寿命と買い替え判断のガイドもあわせてご参照ください。",
  },
  {
    q: "他メーカーのエラーコードも確認できますか？",
    a: "ダイキンは家庭用の公式エラーコード検索を公開しており、当サイトでは主要16コードの早見表を掲載しています（ダイキンのエラーコード一覧ガイド）。パナソニックは、当サイトから公式FAQの内容を確認できないため、公式サポートページを直接ご確認ください。切り分けの一般的な手順は、症状別ページ（エラーコードが出る）でご説明しています。",
  },
];

export default function ErrorCodeMitsubishiPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/error-code-mitsubishi/" },
          { name: "三菱(霧ヶ峰)のランプ点滅・エラー表示", href: "/guide/error-code-mitsubishi/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            三菱エアコン(霧ヶ峰)のランプ点滅・エラー表示
            <br className="hidden md:block" />
            表示ごとの意味と対処【家庭用】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-17">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            三菱電機の家庭用ルームエアコン(霧ヶ峰)は、不具合や操作待ちを<strong className="font-semibold text-slate-900">ランプの点滅パターンと一部の表示(数字・FL・U1など)</strong>で知らせます。
            ダイキンのような消費者向けエラーコード一覧は公開されていないため、本記事では<strong className="font-semibold text-slate-900">三菱電機の消費者向け公式FAQ（{UPDATED}確認）</strong>にもとづき、
            表示ごとの意味、ご自身でできる対処、修理を依頼する判断の基準をご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-800 mb-1">「点検コード検索」は販売店向けサービスです</p>
            <p className="text-sm leading-7 text-slate-700">
              数字の点検コードを検索できる三菱電機の「WIN2K 点検コード検索」は、公式に「販売店様向けのサービスです。<strong>個人のお客様は分解・修理などはせずに</strong>、必ずお買上げの販売店、または三菱電機 修理窓口へご相談ください」と明記されています({UPDATED}確認)。
              公式の案内では、数字が点滅した場合は意味を調べてご自身で修理しようとせず、下の表の安全な確認のみを行ったうえで点検を依頼するよう求めています。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ランプ点滅・表示パターンの早見表(公式FAQにもとづく)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">表示・点滅パターン</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">意味(公式FAQの説明)</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ご自身でできる対処</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">出典</th>
                  </tr>
                </thead>
                <tbody>
                  {patterns.map((c) => (
                    <tr key={c.code}>
                      <td className="border border-slate-300 px-3 py-2 font-bold text-sky-700 leading-6">{c.code}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6">{c.mean}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 text-slate-600">{c.action}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 whitespace-nowrap text-slate-500">{c.faq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: 三菱電機 よくあるご質問FAQ(faq01.mitsubishielectric.co.jp・各No.は表内・{UPDATED}確認)。機種により表示・ボタンの有無が異なるため、最終的にはお使いの機種の取扱説明書をご確認ください。
              公式の案内にしたがい、分解を伴う確認・修理は行わず、販売店・三菱電機修理窓口へご依頼ください。
            </p>
          </section>

          <section id="often" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">表示されることが多い2つのパターンの対処手順</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">全ランプ点滅(FL表示)：お手入れ後に多い表示</h3>
                <p className="text-sm leading-7 text-slate-700">
                  掃除のために上下風向フラップを外した後、フラップが正しく取り付けられていないと、全ランプが点滅して運転できなくなります。公式FAQでは「故障ではありません」と明記されており、
                  <strong>ストッパーを確実に取り付け直すことで復帰</strong>します（取付け方は機種により異なるため、取扱説明書をご参照ください）。修理を依頼する前に、まずこの点をご確認ください。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">数字点滅・運転ランプ点滅：3つの手順による切り分け</h3>
                <p className="text-sm leading-7 text-slate-700">
                  ①フラップの取付を確認します → ②室外機の吹出口・吸込口まわりの物を撤去します → ③電源プラグを抜いて約1分後に差し直し、再運転します。
                  この3つの手順で解消しない場合は、公式FAQによると「制御機器や部品の訪問修理が必要な故障」です。点滅している数字を控えたうえで、
                  <Link href="/guide/where-to-repair/" className="text-sky-600 underline underline-offset-2">修理の依頼先のガイド</Link>を参考に依頼先をお選びください。
                </p>
              </div>
            </div>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理を依頼する前の費用の確認</h2>
            <p className="text-sm leading-7 text-slate-700">
              三菱電機は訪問診断後にキャンセルした場合でも5,390円（当サイト調査値）がかかるため、依頼前に費用の目安を確認しておくことをおすすめします。
              <Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>・
              <Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2">修理費用の相場</Link>・
              <Link href="/cost/price-index/" className="text-sky-600 underline underline-offset-2">27社の料金インデックス</Link>をご覧ください。
              製造から10年前後の機種は<Link href="/guide/lifespan/" className="text-sky-600 underline underline-offset-2">寿命と買い替えの判断</Link>もあわせてご覧ください。
            </p>
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
                <li>・三菱電機 よくあるご質問FAQ No.591/714/727/2619/2645/2646/2707/5874(faq01.mitsubishielectric.co.jp・{UPDATED}確認)</li>
                <li>・三菱電機WIN2K「点検コード検索」ご利用ガイド(販売店向けサービスの旨・{UPDATED}確認)</li>
                <li>・修理費用の目安額は、当サイトの各費用ガイドの調査値です（確認日は各ページに明記しています）</li>
                <li>・本記事は、表示の意味の理解と依頼の判断にお役立ていただくためのものです。分解・修理は、必ず販売店・メーカー・専門業者へご依頼ください</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/heating-not-working/", label: "暖房中に止まる・ランプ点滅(霜取り運転)の見分け方" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧【家庭用】" },
                { href: "/symptom/error-code/", label: "エラーコードが出る(症状別の切り分け)" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/guide/where-to-repair/", label: "エアコン修理の依頼先の選び方" },
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
