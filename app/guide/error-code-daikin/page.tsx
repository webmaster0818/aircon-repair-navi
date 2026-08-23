import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ダイキンエアコンのエラーコード一覧【家庭用】U4・E7・A3など主要コードの意味と対処",
  description:
    "ダイキン家庭用ルームエアコンのエラーコードを公式データベース(エラーコード検索)にもとづき解説。U4(室内外通信)・E7(ファンモータ)・A3(ドレン)・A5(凍結防止)・U0(冷媒不足)など主要16コードの意味・想定要因と、自分で安全に確認できる範囲、修理費用の目安をまとめました。",
  alternates: { canonical: "/guide/error-code-daikin/" },
};

const UPDATED = "2026年8月23日";

const codes = [
  { code: "U4", mean: "室内機と室外機間の通信不具合による停止", cause: "室内/室外プリント基板・室外ファンモータ・内外連絡線の接続部・ノイズ等の外的要因", self: "電源プラグ(ブレーカー)を入れ直して再発するか確認" },
  { code: "E7", mean: "ファンモータの不具合による停止", cause: "ファンモータ・プリント基板・ファンへの異物のからまり", self: "室外機ファンに枯れ葉・ビニール等がからんでいないか外から目視" },
  { code: "A3", mean: "ドレン水位の上昇(フロートスイッチ作動)による停止", cause: "ドレンパン内の汚れ・ドレンポンプ・ドレン排水管の詰まり等", self: "ドレンホース先端の詰まり・つぶれを確認(水漏れガイド参照)" },
  { code: "A5", mean: "熱交換器の凍結防止・高圧過上昇防止による停止", cause: "室内機: フィルタ目詰まり・熱交換器の汚れ等/室外機: 熱交換器の汚れ・ファンモータ等", self: "エアフィルタを清掃し、室外機まわりの吹き出しを塞ぐ物を撤去" },
  { code: "A1", mean: "室内機プリント基板のマイコンが正常動作していない", cause: "プリント基板・コネクタ接続部・接続端子盤の不具合", self: "電源入れ直しで再発するなら点検依頼" },
  { code: "A6", mean: "(室内機)ファンモータの不具合による停止", cause: "ファンモータ配線・コネクタ接続部・ファンモータ・プリント基板", self: "自分での分解確認は不可。点検依頼を" },
  { code: "AH", mean: "空気清浄ユニット等の付加機能の不具合(冷暖房運転は可能)", cause: "ストリーマ/マイナスイオン発生器のホコリ・水分付着・ユニット不具合等", self: "ユニット部の清掃(取説記載の範囲)後に再確認" },
  { code: "C9", mean: "吸込空気サーミスタ(温度センサー)の不具合", cause: "サーミスタ・コネクタ接続部・プリント基板の不具合", self: "電源入れ直しで再発するなら点検依頼" },
  { code: "E5", mean: "圧縮機の吐出管温度の上がり過ぎによる停止", cause: "冷媒系統の不具合(冷媒不足・詰まり)・サーミスタ・電子膨張弁等", self: "冷媒系統は自分で確認不可。点検依頼を" },
  { code: "E6", mean: "圧縮機の過電流による停止", cause: "圧縮機・電子膨張弁・室外機基板等(冷房時は室外機まわりの環境も)", self: "室外機の吹き出し口を塞ぐ物がないか確認" },
  { code: "F3", mean: "圧縮機の吐出管温度の上昇し過ぎによる停止", cause: "冷媒系統の不具合(冷媒不足・詰まり)・吐出管サーミスタ等", self: "冷媒系統は自分で確認不可。点検依頼を" },
  { code: "H0", mean: "機内配線接続部の不具合による停止", cause: "ハーネス断線・接続部・プリント基板の不具合", self: "点検依頼を" },
  { code: "H6", mean: "圧縮機の運転を検出するセンサの不具合", cause: "圧縮機・プリント基板・閉鎖弁閉による不具合", self: "点検依頼を" },
  { code: "L5", mean: "インバータ圧縮機の過電流による停止", cause: "圧縮機・プリント基板・パワーユニット等", self: "点検依頼を" },
  { code: "U0", mean: "冷媒循環量の不足による停止", cause: "冷媒不足・詰まり・電子膨張弁・圧縮機等", self: "ガス漏れの可能性。ガス補充/修理の費用ガイド参照" },
  { code: "U2", mean: "インバーター回路の不足電圧・過電圧による停止", cause: "電源電圧の異常(±10%外)・欠相・瞬時停電・パワーユニット等", self: "他の家電と同時使用時の電圧低下・停電後でないか確認" },
];

const faqs = [
  {
    q: "ダイキンエアコンのエラーコードはどうやって確認しますか？",
    a: "機種によって、リモコンの表示部にコードが表示されるタイプと、リモコン操作で故障診断(コード確認)を行うタイプがあります。確認手順は機種ごとに異なるため、お使いの機種の取扱説明書をご確認ください。確認したコードは、ダイキン公式の「エラーコード検索」(daikincc.com/errorcode/)に入力すると、公式の内容説明と想定要因を調べられます。本記事の早見表はこの公式データベースの家庭用ルームエアコン公表内容にもとづいています。",
  },
  {
    q: "U4エラーは自分で直せますか？",
    a: "U4は室内機と室外機の間の通信不具合です(ダイキン公式データ・2026年8月23日確認)。想定要因は室内外のプリント基板・室外ファンモータ・内外連絡線の接続部の不具合やノイズ等の外的要因で、いずれも利用者が安全に直せる箇所ではありません。電源(ブレーカー)の入れ直しで一度リセットし、再発する場合は点検・修理を依頼してください。",
  },
  {
    q: "エラーが出たとき、まず電源を入れ直してもいいですか？",
    a: "通常の運転停止エラーは電源入れ直しで復帰を試せますが、重要な例外があります。ダイキン公式は「ブレーカーや漏電遮断機が作動する場合は、すぐにブレーカーの再投入はせず、機器の絶縁点検を行い、問題がないことを確認してください。絶縁点検をせずにブレーカーを再投入されると、機器が損傷する恐れがあります」と注意しています(2026年8月23日確認)。ブレーカーが落ちる症状を伴う場合は再投入せず点検依頼が先です。",
  },
  {
    q: "エラーコードが出た場合の修理費用はいくらくらいですか？",
    a: "内容により大きく変わります。当サイト実査のダイキン公式目安では、点検のみでも8,500〜19,000円程度、水漏れ系(A3関連)は壁掛け17,000〜64,000円程度、冷媒系統(U0関連)の修理は70,000〜105,000円程度が公式に示されています(確認日は各ガイド参照)。詳しくはメーカー修理費用の比較ページをご覧ください。",
  },
  {
    q: "他のメーカーのエラーコードも調べられますか？",
    a: "各社が公式のエラーコード検索・FAQを用意しています(パナソニック・三菱・日立・シャープ等)。当サイトでは症状別ページ(エラーコードが出る)で一般的な切り分け手順を解説しています。メーカーごとの窓口はどこに修理を頼むかのガイドにまとめています。",
  },
];

export default function ErrorCodeDaikinPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/error-code-daikin/" },
          { name: "ダイキンのエラーコード一覧", href: "/guide/error-code-daikin/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ダイキンエアコンのエラーコード一覧【家庭用】
            <br className="hidden md:block" />
            主要コードの意味と自分でできる確認
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            ダイキンのルームエアコンは、不具合時にリモコン表示や運転ランプの点滅で<strong className="font-semibold text-slate-900">エラーコード</strong>を知らせます。
            ネット上の解説は業務用エアコン向けの情報が混ざりがちですが、この記事は<strong className="font-semibold text-slate-900">ダイキン公式のエラーコード検索(家庭用ルームエアコン・2000年モデル以降対応)の公表データ</strong>にもとづき、
            主要16コードの意味・想定要因・自分で安全に確認できる範囲を整理しました({UPDATED}確認)。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-800 mb-1">ブレーカーが落ちる場合の公式注意</p>
            <p className="text-sm leading-7 text-slate-700">
              ダイキン公式は「ブレーカーや漏電遮断機が作動する場合は、すぐにブレーカーの再投入はせず、機器の絶縁点検を行い、問題がないことを確認してください」と明記しています。
              <strong>ブレーカーが落ちる症状を伴うときは、電源の入れ直しを試さず点検依頼が先</strong>です。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">主要エラーコード早見表(公式データベース準拠)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">コード</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">意味(公式の内容説明)</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式が挙げる想定要因</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">自分で安全にできる確認</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((c) => (
                    <tr key={c.code}>
                      <td className="border border-slate-300 px-3 py-2 font-bold text-sky-700 whitespace-nowrap">{c.code}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6">{c.mean}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 text-slate-600">{c.cause}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6">{c.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式「エラーコード検索」(daikincc.com/errorcode/・{UPDATED}確認)。対応機種は2000年モデル以降のルームエアコン(マルチタイプを除く)で、機種により内容が若干異なる場合があると公式に注記されています。
              分解を伴う確認・修理は公式が注意喚起しているため、当サイトでも一切推奨しません。
            </p>
          </section>

          <section id="often" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">特に多い3コードの対処フロー</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">U4(室内外の通信不具合)</h3>
                <p className="text-sm leading-7 text-slate-700">
                  ①ブレーカーが落ちていないなら電源を入れ直して復帰を確認 → ②再発するなら基板・連絡線系の不具合の可能性が高く、利用者側で直せる箇所はありません。点検・修理依頼へ。
                  雷の後に出た場合はノイズ等の外的要因のことがあります(公式の想定要因に記載)。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">A3(ドレン水位上昇)</h3>
                <p className="text-sm leading-7 text-slate-700">
                  排水経路の詰まりが関係している場合があります。<Link href="/guide/water-leak/" className="text-sky-600 underline underline-offset-2">水漏れガイド</Link>の手順で屋外ドレンホースの先端詰まりを確認し、
                  解消しなければドレンポンプ等の点検依頼へ。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">U0(冷媒循環量不足)</h3>
                <p className="text-sm leading-7 text-slate-700">
                  冷媒(ガス)不足・詰まりが公式の筆頭要因です。ガスは自然には減らないため、<strong>不足しているならどこかで漏れている可能性</strong>があります。
                  補充だけで済むケースと冷媒系統修理(当サイト実査のダイキン公式目安70,000〜105,000円程度)になるケースの違いは<Link href="/cost/gas-refill/" className="text-sky-600 underline underline-offset-2">ガス補充の費用ガイド</Link>で解説しています。
                </p>
              </div>
            </div>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エラーコード別・修理費用の目安への導線</h2>
            <p className="text-sm leading-7 text-slate-700">
              点検のみでもダイキン公式目安で8,500〜19,000円程度(当サイト実査)がかかるため、依頼前に費用感を掴んでおくと安心です。
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
                <li>・ダイキン公式「エラーコード検索」(daikincc.com/errorcode/)の家庭用ルームエアコン公表データ({UPDATED}確認)</li>
                <li>・修理費用の目安額は当サイトの各費用ガイドの実査値(確認日は各ページに明記)</li>
                <li>・本記事はエラーコードの意味の理解と依頼判断の参考のためのものです。分解・修理はダイキン公式が注意喚起しているとおり、必ず専門業者・メーカーに依頼してください</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る(症状別の切り分け)" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼む？" },
                { href: "/ranking", label: "エアコン修理業者ランキング" },
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
