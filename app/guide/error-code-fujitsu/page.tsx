import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "富士通（ゼネラル）エアコンのエラーコード・ランプ点滅の意味｜点滅回数の一覧と生産年度の調べ方、修理窓口【2026年11月確認】",
  description:
    "富士通ゼネラル（2026年1月から株式会社ゼネラル）のエアコン「ノクリア」で運転ランプとタイマーランプが点滅した場合の意味を、公式の「自己診断早見表」（2011年度以降の生産品）に沿って一覧にしました。形名から生産年度を調べる方法、故障ではない点滅、メーカー保証の期間、修理の受付窓口も掲載しています。",
  alternates: { canonical: "/guide/error-code-fujitsu/" },
};

const UPDATED = "2026年11月24日";
const CHECKED = "2026年11月24日確認";

const blink = [
  { op: "消灯", timer: "2〜5回", err: "室内－室外間の通信異常", cause: "室外基板・室内基板の故障、接続配線の接続不具合" },
  { op: "消灯", timer: "6〜8回", err: "室内電気部品異常", cause: "室内電気部品・室内基板の故障" },
  { op: "2回", timer: "2〜3回", err: "室内センサー異常", cause: "室内センサー・室内基板の故障" },
  { op: "2回", timer: "6回", err: "室内電気部品異常", cause: "室内電気部品・室内基板の故障" },
  { op: "3回", timer: "2〜4回", err: "室外センサー異常", cause: "室外センサー・室外基板の故障" },
  { op: "4回", timer: "2〜8回", err: "室内電気部品異常", cause: "室内電気部品・室内基板の故障" },
  { op: "5回", timer: "2〜7回", err: "室外電気部品異常", cause: "室外電気部品・室外基板の故障" },
  { op: "5回", timer: "6回", err: "室外ファンモータ異常", cause: "室外ファンモータ・室外基板の故障" },
  { op: "6回", timer: "2〜3回", err: "室内ファンモータ異常", cause: "室内ファンモータ・室内基板の故障" },
  { op: "6回", timer: "4〜5回", err: "サイドファン異常", cause: "サイドファンモータ・室内基板の故障" },
  { op: "7回", timer: "2〜4回", err: "ガス／熱交換器関係異常", cause: "ガス不足、冷凍サイクル部品・室外電気部品の故障" },
  { op: "8回", timer: "2〜6回", err: "室外電気部品異常", cause: "室外電気部品・室外基板の故障" },
];

const years = [
  { y: "2026年度", a: "T", n: "6" },
  { y: "2025年度", a: "S", n: "5" },
  { y: "2024年度", a: "R", n: "4" },
  { y: "2023年度", a: "N", n: "3" },
  { y: "2022年度", a: "M", n: "2" },
  { y: "2021年度", a: "L", n: "1" },
  { y: "2020年度", a: "K", n: "0" },
  { y: "2019年度", a: "J", n: "9" },
  { y: "2018年度", a: "H", n: "8" },
  { y: "2017年度", a: "G", n: "7" },
  { y: "2016年度", a: "F", n: "6" },
  { y: "2015年度", a: "E", n: "5" },
  { y: "2014年度", a: "D", n: "4" },
  { y: "2013年度", a: "C", n: "3" },
  { y: "2012年度", a: "B", n: "2" },
  { y: "2011年度", a: "A", n: "1" },
];

const faqs = [
  {
    q: "富士通のエアコンのサポートはどこで調べればよいですか？",
    a: "株式会社富士通ゼネラルは2026年1月1日に社名を「株式会社ゼネラル」に変更しており、エアコン「ノクリア」のサポート情報はゼネラルの公式サイト（generalww.com）に掲載されています。旧サイト（fujitsu-general.com）のサポートページにアクセスすると、ゼネラルの公式サイトに転送されます（2026年11月24日確認）。",
  },
  {
    q: "運転ランプとタイマーランプが交互に点滅しています。故障ですか？",
    a: "ゼネラル公式の自己診断早見表では、運転ランプとタイマーランプの連続した交互点滅は「停電復帰」の表示とされています。停電や電源プラグの抜き差しで一度電源が切れたときに表示されるもので、故障ではありません。同時点滅の場合は「試運転表示」です。",
  },
  {
    q: "点滅の回数はどのように数えればよいですか？",
    a: "公式の早見表では、運転ランプとタイマーランプの点滅回数をランプごとに数えるよう案内されています。2005年度生産以降の一部を除いた機種では、ランプの点滅は13秒で1サイクルです。回数を数えたら、運転を停止して電源プラグを抜き、形名と点滅の状態を販売店またはコールセンターに伝えます。",
  },
  {
    q: "メーカー保証は何年ですか？",
    a: "ゼネラル公式の「よくあるご質問」では、エアコンのメーカー保証期間は、冷媒回路（圧縮機・冷却器・本体付属配管など）がお買い上げ日から5年間、本体（消耗品を除く）がお買い上げ日から1年間とされています。補修用性能部品の保有期間は製造打ち切り後10年間です（2026年11月24日確認）。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function ErrorCodeFujitsuPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "富士通（ゼネラル）エアコンのランプ点滅の意味", href: "/guide/error-code-fujitsu/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            富士通（ゼネラル）エアコンのエラーコード・ランプ点滅の意味
            <br className="hidden md:block" />
            点滅回数の一覧と修理の受付窓口
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-24">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            富士通ゼネラルのエアコン「ノクリア」は、異常を検知すると<strong className="font-semibold text-slate-900">運転ランプとタイマーランプの点滅回数</strong>でお知らせします。
            富士通ゼネラルは<strong className="font-semibold text-slate-900">2026年1月1日に社名を「株式会社ゼネラル」に変更</strong>しており、点滅の意味は同社公式サイトの「自己診断早見表」で確認できます。
            本記事では、早見表のうち2011年度以降に生産された機種の内容と、形名から生産年度を調べる方法、修理を依頼する場合の窓口をまとめています（{CHECKED}）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：ランプが点滅した場合の手順（公式の案内）</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>運転ランプとタイマーランプが、それぞれ何回点滅しているかを数えます（13秒で1サイクル）。</li>
              <li>形名（室内機の銘板または保証書に記載）から生産年度を調べ、下の早見表で内容を確認します。</li>
              <li>点検・修理が必要な表示であれば、運転を停止して電源プラグを抜き、販売店またはゼネラルコールセンターに形名と点滅の状態を伝えます。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="year" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">形名から生産年度を調べる方法</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              ゼネラルの早見表は生産年度によって内容が異なります。形名（機種名）の<strong>数字2桁の次にある文字（アルファベットまたは数字）</strong>が生産年度を表します。数字が3桁以上続く場合は、数字の最後の桁が生産年度です。
              アルファベットと数字は10年前後で同じ文字が再び使われるため（例：Tは2026年度と2008年度）、購入時期とあわせてご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[420px]">
                <thead>
                  <tr>
                    <th className={th}>生産年度</th>
                    <th className={th}>アルファベット</th>
                    <th className={th}>数字</th>
                  </tr>
                </thead>
                <tbody>
                  {years.map((r) => (
                    <tr key={r.y}>
                      <td className={td}>{r.y}</td>
                      <td className={`${td} font-bold text-sky-700`}>{r.a}</td>
                      <td className={`${td} font-bold text-sky-700`}>{r.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：ゼネラル公式「自己診断早見表」生産年度確認表（generalww.com/jp/support/faq/as/0084/diagnosis.html）。{CHECKED}。2010年度以前（1990〜2010年度）の生産年度と、その年度の早見表も同ページに掲載されています。</p>
          </section>

          <section id="blink" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">点滅回数とエラー内容の一覧（2011年度以降の生産品）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>運転ランプ</th>
                    <th className={`${th} whitespace-nowrap`}>タイマーランプ</th>
                    <th className={th}>エラー内容</th>
                    <th className={th}>公式が示す主な原因</th>
                  </tr>
                </thead>
                <tbody>
                  {blink.map((r) => (
                    <tr key={`${r.op}-${r.timer}`}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{r.op}</td>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{r.timer}</td>
                      <td className={td}>{r.err}</td>
                      <td className={td}>{r.cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：ゼネラル公式「自己診断早見表」2011年度以降の生産品（同上）。{CHECKED}。表の「回」は点滅回数です。クリーンランプ・お知らせランプ・おそうじ／内部クリーンランプは、いずれの表示も「消灯」とされています。運転ランプ5回点滅の行は、公式の表でタイマーランプ「2〜7回」と「6回」の両方が記載されているため、そのまま掲載しています。判別がつかない場合は、公式の「エアコン故障診断」（形名と点滅状態を入力するチャット）もご利用いただけます。
              公式の表では、12の表示のうち「ガス／熱交換器関係異常」以外の11表示の主な原因に「基板の故障」が含まれています。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              この一覧はエラー内容を<strong>推測するための目安</strong>として公式が掲載しているもので、実際の故障箇所は点検で確定します。「ガス不足」が原因に挙がる7回点滅の表示は、ガスの補充だけでなく漏れの箇所の修理が必要になる場合があります。冷媒ガスについては<Link href="/cost/gas-refill/" className="text-sky-600 underline underline-offset-2">ガス補充の費用</Link>をご覧ください。
            </p>
          </section>

          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではないランプの点滅</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={th}>ランプの状態</th>
                    <th className={th}>公式の表示内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>運転ランプとタイマーランプが交互に連続点滅</td><td className={td}>停電復帰（停電やプラグの抜き差しで一度電源が切れたとき）</td></tr>
                  <tr><td className={td}>運転ランプとタイマーランプが同時に連続点滅</td><td className={td}>試運転表示（リモコンの「運転/停止」で一度停止し、再度運転します）</td></tr>
                  <tr><td className={td}>運転ランプがおそい点滅（7秒点灯・2秒消灯）</td><td className={td}>暖房中の霜取り運転、または内部クリーン運転</td></tr>
                  <tr><td className={td}>おそうじ／内部クリーンランプなどがおそい点滅</td><td className={td}>ダストボックスのお手入れ時期（自動おそうじ機能付きの機種）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：ゼネラル公式「自己診断早見表」「室内機のランプが点滅する」（generalww.com/jp/support/faq/as/0084/）。{CHECKED}。ダストボックスのランプが1秒点灯・1秒消灯で点滅している場合は、ダストボックスの取り付けを確認し、改善しなければ点検が必要とされています。2004年度以前の生産品は、霜取り中に運転ランプが通常の点滅をする場合があります。</p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー保証と修理の料金</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[420px]">
                <thead>
                  <tr>
                    <th className={th}>対象</th>
                    <th className={th}>期間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>冷媒回路（圧縮機・冷却器・本体付属配管など）</td><td className={`${td} whitespace-nowrap`}>お買い上げ日から5年間</td></tr>
                  <tr><td className={td}>本体（消耗品を除く）</td><td className={`${td} whitespace-nowrap`}>お買い上げ日から1年間</td></tr>
                  <tr><td className={td}>補修用性能部品の保有期間</td><td className={`${td} whitespace-nowrap`}>製造打ち切り後10年間</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：ゼネラル公式「エアコンの保証期間を知りたい」（generalww.com/jp/support/faq/as/0071/）。{CHECKED}。保証書に購入店名と購入年月日の記載がないものは無効とされています。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              当サイトでは、ゼネラル公式サイトの修理受付・よくあるご質問のページで、エアコンの修理料金の目安の掲載を確認できませんでした（{CHECKED}）。料金は、形名と点滅の状態を伝えたうえでご確認ください。
              販売店独自の延長保証（長期保証）を利用する場合は、メーカーではなく購入した販売店へ依頼するよう公式に案内されています。
              他メーカーが公開している出張料・診断料は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>に、メーカー以外の修理業者は<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>に掲載しています。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ゼネラルの修理受付窓口</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>ゼネラルコールセンター（修理のご依頼・お問い合わせ）：フリーダイヤル 0120-089-888（携帯電話からも利用可）</li>
              <li>フリーダイヤルに接続できない場合（IP電話など）：044-861-7700（有料）</li>
              <li>受付時間：平日 9:00〜19:00、土・日・祝日・年末年始など同社休業日 9:00〜18:00（年中無休）</li>
              <li>Webの修理受付フォーム（個人のお客様向け）：generalww.com/jp/contact/service.html から</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：ゼネラル公式「お問い合わせ 修理・工事・アフターサポート」（generalww.com/jp/contact/service.html）。{CHECKED}。フリーダイヤルは発信者番号の通知（はじめに186をダイヤル）が求められています。同社のエアコンサポートのページでは、コールセンターの電話がつながりにくい状況が続いているとして、混み合う場合はメールフォームの利用が勧められています。</p>
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
                <li>・ゼネラル公式「自己診断早見表」「室内機のランプが点滅する」</li>
                <li>・ゼネラル公式「エアコンの保証期間を知りたい」「補修用性能部品の保有期間を知りたい」</li>
                <li>・ゼネラル公式「お問い合わせ 修理・工事・アフターサポート」、企業情報（社名変更の告知）</li>
                <li>・確認日：いずれも2026年11月24日</li>
              </ul>
              <p className="mt-2">表示の内容は機種によって異なる場合があります。正確な内容はお使いの機種の取扱説明書でご確認ください。本記事は依頼の判断にお役立ていただくためのもので、分解・修理はメーカーまたは専門業者へご依頼ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る（症状別の切り分け）" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/error-code-panasonic/", label: "パナソニックのエラーコード一覧" },
                { href: "/guide/error-code-sharp/", label: "シャープのエラー番号の確認方法と意味" },
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/ranking/", label: "エアコン修理業者ランキング" },
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
