import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "三菱エアコン(霧ヶ峰)のランプ点滅・エラー表示の意味【家庭用】公式FAQで対処を整理",
  description:
    "三菱電機の家庭用ルームエアコン(霧ヶ峰)のランプ点滅・エラー表示を、三菱電機公式FAQにもとづき解説。全ランプ点滅=風向フラップの取付不良、数字点滅=本体異常の可能性、U1表示、クリーンモニター点滅、お手入れランプが消えない場合のリセット操作まで、パターン別の対処と修理依頼の判断ラインをまとめました。",
  alternates: { canonical: "/guide/error-code-mitsubishi/" },
};

const UPDATED = "2026年9月17日";

const patterns = [
  {
    code: "すべてのランプが点滅(運転できない)",
    mean: "上下風向フラップの取付不良のサイン(故障ではない)",
    action: "フラップのストッパーを確実に取付け直す(取付け方は機種の取扱説明書参照)",
    faq: "FAQ No.2646",
  },
  {
    code: "「FL」表示+全ランプ点滅",
    mean: "同上(体感温度モニター搭載機種での表示)",
    action: "上下風向フラップを正しく取付け直す",
    faq: "FAQ No.2645",
  },
  {
    code: "室内機表示部に数字(1、3、5など)が点滅",
    mean: "室内機または室外機に異常が起きている可能性",
    action: "①室外機の吹出口・吸込口まわりの物を撤去 ②電源プラグを抜いて約1分後に差し直し再運転 → 解消しなければ点検・修理依頼(点滅している数字を伝える)",
    faq: "FAQ No.2619",
  },
  {
    code: "運転ランプが点滅して運転できない",
    mean: "フラップ・室外機まわり・一時的な保護の可能性 → 解消しなければ訪問修理が必要な故障",
    action: "①フラップの取付確認 ②室外機まわりの物を撤去 ③プラグ1分OFF→再運転 → 3つで解消しなければ点検・修理依頼",
    faq: "FAQ No.727",
  },
  {
    code: "クリーンモニターランプが点滅",
    mean: "フィルターおそうじメカ搭載機で、フィルター・ダストボックスのセット不良",
    action: "フィルター・ダストボックスを外して正しく取付け直す",
    faq: "FAQ No.2707",
  },
  {
    code: "お手入れ・お掃除/フィルターランプが消えない",
    mean: "掃除・交換後のリセット操作待ち(故障ではない)",
    action: "室内機の「おそうじリセット」またはリモコンの「フィルターリセット」を音が鳴るまで押す",
    faq: "FAQ No.714",
  },
  {
    code: "リモコンに「U1」表示(運転しない)",
    mean: "電源「入」後に「スタート」が押されないまま一定時間経過した表示",
    action: "電源を入れ直して設定し直し、「スタート」を押す",
    faq: "FAQ No.591",
  },
];

const faqs = [
  {
    q: "霧ヶ峰にはダイキンのようなエラーコード一覧はないのですか？",
    a: "三菱電機の家庭用ルームエアコンは、消費者向けには「ランプの点滅パターン」と一部の表示(数字点滅・FL・U1等)で不具合を知らせる方式で、消費者向けのエラーコード一覧は公開されていません。数字コードを検索できる「点検コード検索(WIN2K)」はありますが、公式に「販売店様向けのサービスです。個人のお客様は分解・修理などはせずに、必ずお買上げの販売店、または三菱電機 修理窓口へご相談ください」と明記されています(2026年9月17日確認)。本記事は消費者向け公式FAQの公表内容のみで整理しています。",
  },
  {
    q: "すべてのランプが点滅して動きません。故障ですか？",
    a: "多くの場合は故障ではありません。三菱電機公式FAQは「上下風向フラップが正しく取り付けられていないと、すべてのランプが点滅して、運転できません。故障ではありませんので、すべての上下風向フラップのストッパーを確実に取付けてください」と案内しています(FAQ No.2646・2026年9月17日確認)。お手入れでフラップを外した後に起きやすい表示です。体感温度モニター搭載機では「FL」表示を伴います(FAQ No.2645)。",
  },
  {
    q: "室内機に数字が点滅しています。どうすればいいですか？",
    a: "三菱電機公式FAQ(No.2619)は「室内機または室外機に異常が起きていることが考えられます」として、①室外機の吹出口・吸込口周囲をふさぐ物を取り除く ②電源プラグを抜いて約1分待ち、差し直して再運転——の2点を案内しています。それでも点滅が解消しない場合は本体不具合の可能性があるため、電源プラグを抜いて販売店か三菱電機修理窓口へ点検・修理を依頼してください。その際「点滅している数字を伝える」よう公式が案内しています(2026年9月17日確認)。",
  },
  {
    q: "点滅が直らない場合の修理費用はいくらくらいですか？",
    a: "内容により変わりますが、当サイト実査のメーカー修理の目安では、三菱電機は訪問診断後のキャンセルでも5,390円(当サイト実査値・確認日は費用ガイド参照)がかかります。症状別の概算はメーカー修理費用の比較ページと修理費用相場ガイドにまとめています。製造から10年前後の機種は部品保有期間の関係もあるため、寿命と買い替え判断のガイドも参考にしてください。",
  },
  {
    q: "他メーカーのエラーコードも調べられますか？",
    a: "ダイキンは家庭用の公式エラーコード検索が公開されており、当サイトで主要16コードの早見表を公開しています(ダイキンのエラーコード一覧ガイド)。パナソニックは公式FAQへの機械アクセスが制限されており当サイトでは一次実査ができないため、公式サポートページを直接ご確認ください。切り分けの一般手順は症状別ページ(エラーコードが出る)で解説しています。",
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
            パターン別の意味と対処【家庭用】
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
            ダイキンのような消費者向けエラーコード一覧は公開されていないため、この記事は<strong className="font-semibold text-slate-900">三菱電機の消費者向け公式FAQ({UPDATED}実査)</strong>にもとづき、
            パターン別の意味・自分でできる対処・修理依頼の判断ラインを整理しました。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-800 mb-1">「点検コード検索」は販売店向けサービスです</p>
            <p className="text-sm leading-7 text-slate-700">
              数字の点検コードを検索できる三菱電機の「WIN2K 点検コード検索」は、公式に「販売店様向けのサービスです。<strong>個人のお客様は分解・修理などはせずに</strong>、必ずお買上げの販売店、または三菱電機 修理窓口へご相談ください」と明記されています({UPDATED}確認)。
              数字が点滅したら、無理に意味を調べて自分で直そうとせず、下の表の安全な確認だけ行って点検依頼に進むのが公式の案内です。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ランプ点滅・表示パターン早見表(公式FAQ準拠)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">表示・点滅パターン</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">意味(公式FAQの説明)</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">自分でできる対処</th>
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
              分解を伴う確認・修理は公式が案内しているとおり行わず、販売店・三菱電機修理窓口へ依頼してください。
            </p>
          </section>

          <section id="often" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">特に多い2パターンの対処フロー</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">全ランプ点滅(FL表示)——お手入れ後の定番</h3>
                <p className="text-sm leading-7 text-slate-700">
                  掃除のために上下風向フラップを外した後、正しくはまっていないと全ランプ点滅で運転できなくなります。公式FAQは「故障ではありません」と明言しており、
                  <strong>ストッパーを確実にはめ直すだけで復帰</strong>します(取付け方は機種で異なるため取扱説明書を参照)。修理を呼ぶ前にまずここを確認してください。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">数字点滅・運転ランプ点滅——3手順で切り分け</h3>
                <p className="text-sm leading-7 text-slate-700">
                  ①フラップの取付確認 → ②室外機の吹出口・吸込口まわりの物を撤去 → ③電源プラグを抜いて約1分後に差し直して再運転。
                  この3つで解消しなければ、公式FAQいわく「制御機器や部品の訪問修理が必要な故障」です。点滅している数字を控えて
                  <Link href="/guide/where-to-repair/" className="text-sky-600 underline underline-offset-2">どこに修理を頼むかのガイド</Link>から依頼先を選んでください。
                </p>
              </div>
            </div>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理依頼前に費用感を掴む</h2>
            <p className="text-sm leading-7 text-slate-700">
              三菱電機は訪問診断後にキャンセルしても5,390円(当サイト実査値)がかかるため、依頼前に費用感を掴んでおくと安心です。
              <Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>・
              <Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2">修理費用の相場</Link>・
              <Link href="/cost/price-index/" className="text-sky-600 underline underline-offset-2">27社の料金インデックス</Link>をご覧ください。
              製造から10年前後の機種は<Link href="/guide/lifespan/" className="text-sky-600 underline underline-offset-2">寿命と買い替えの判断</Link>も合わせてどうぞ。
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
                <li>・修理費用の目安額は当サイトの各費用ガイドの実査値(確認日は各ページに明記)</li>
                <li>・本記事は表示の理解と依頼判断の参考のためのものです。分解・修理は必ず販売店・メーカー・専門業者に依頼してください</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧【家庭用】" },
                { href: "/symptom/error-code/", label: "エラーコードが出る(症状別の切り分け)" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼む？" },
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
