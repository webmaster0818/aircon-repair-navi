import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "パナソニックエアコン(エオリア)のエラーコード一覧｜H11・H19・F91など診断コードの意味と確認方法、修理料金【公式・2026年11月確認】",
  description:
    "パナソニックのエアコン「エオリア」の診断コード（H11・H19・H52・F91・F99など）の意味を公式FAQにもとづいて一覧にしました。お知らせボタン・診断ボタンでの確認方法（年式別）、故障ではないランプの点滅、公式の出張料4,950円と修理窓口も掲載しています。",
  alternates: { canonical: "/guide/error-code-panasonic/" },
};

const UPDATED = "2026年11月22日";
const CHECKED = "2026年11月22日確認";

const codes = [
  { code: "H00", mean: "異常が検知されていない状態" },
  { code: "H11", mean: "エアコン本体と室外機の通信の不具合" },
  { code: "H14", mean: "エアコン本体（室内機）のセンサー異常（台所など高温の空気を吸い込む場所への設置にも言及）" },
  { code: "H16", mean: "運転しているのに少量しか電流が流れていない" },
  { code: "H19", mean: "エアコン本体から風を送るファンが回転できなくなっている" },
  { code: "H28", mean: "室外機のセンサー異常" },
  { code: "H50", mean: "排気（換気）ファンモーターの異常" },
  { code: "H51", mean: "フィルターそうじノズル、またはブラシそうじブレードの動作異常" },
  { code: "H52", mean: "フィルターおそうじ機能の不具合" },
  { code: "H56", mean: "ルーバーが正常に動作できない" },
  { code: "H59", mean: "赤外線センサーの異常" },
  { code: "H86", mean: "ホコリセンサーの異常" },
  { code: "H96", mean: "購入設置時の試運転の際にのみ表示される" },
  { code: "H97", mean: "室外機のファンの異常" },
  { code: "F11", mean: "冷房・暖房切換の異常" },
  { code: "F91", mean: "冷凍サイクルの異常（制御系・冷媒回路系の故障である可能性が高い）" },
  { code: "F93", mean: "圧縮機の回転異常" },
  { code: "F99", mean: "異常電流の検知" },
];

const faqs = [
  {
    q: "パナソニックエアコンのタイマーランプが点滅しています。",
    a: "パナソニック公式FAQでは、タイマーランプの点滅はエアコン本体または室外機の異常のお知らせとされています。タイマーランプが点滅した場合、リモコンまたは本体に、アルファベットと2桁の数字からなる診断コードが表示されます（1995年頃以降の機種）。本記事の「診断コードの確認方法」の手順でコードを確認し、修理窓口または販売店にお伝えください。",
  },
  {
    q: "H11が表示されました。自分で直せますか？",
    a: "H11は、パナソニック公式FAQで「エアコン本体と室外機の通信に不具合がある場合に表示される診断コード」とされています。室内機と室外機をつなぐ配線や基板が関係するため、ご自身で修理できる箇所ではありません。電源を入れ直しても再び表示される場合は、点検をご依頼ください。",
  },
  {
    q: "暖房中に運転ランプが点滅して温風が止まりました。故障でしょうか？",
    a: "パナソニック公式FAQでは、運転ランプの点滅は運転準備中や霜取り運転中のお知らせで、最長で12分程度かかることがありますが故障ではないとされています。1時間に複数回入ることもあると記載されています（2026年11月22日確認）。",
  },
  {
    q: "パナソニックに修理を依頼すると、出張料はいくらですか？",
    a: "パナソニック公式FAQでは、出張料（技術員の派遣料金）は4,950円（税込）で、技術員の訪問後にキャンセルした場合も出張料がかかるとされています。営業時間外・休日（日曜・祝日）を指定する場合は指定料金2,200円（税込）が加わります。修理料金の目安は、公式の「修理診断ナビ」で品番を入力すると表示されます（2026年11月22日確認）。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function ErrorCodePanasonicPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "パナソニックエアコンのエラーコード一覧", href: "/guide/error-code-panasonic/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            パナソニックエアコン（エオリア）のエラーコード一覧
            <br className="hidden md:block" />
            診断コードの意味と確認方法
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-22">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            パナソニックのルームエアコンは、異常を検知すると<strong className="font-semibold text-slate-900">タイマーランプが点滅</strong>し、リモコンまたは本体に<strong className="font-semibold text-slate-900">アルファベットと2桁の数字の診断コード</strong>（H11・F91など）が表示されます（1995年頃以降の機種）。
            本記事では、パナソニック公式FAQに掲載されている18の診断コードの意味と、機種の年式別の確認方法、修理を依頼する場合の費用をまとめています（{CHECKED}）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：タイマーランプが点滅した場合の手順</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>下の「診断コードの確認方法」で、リモコンまたは本体の診断コードを確認します。</li>
              <li>一覧表でコードの意味を確認します。H00は異常なし、H96は設置時の試運転でのみ表示されるコードです。</li>
              <li>それ以外のコードの場合は、コードと品番を控えて、パナソニックの修理窓口または販売店にご相談ください。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="how" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">診断コードの確認方法（リモコンの種類・年式別）</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">リモコンに「お知らせ」ボタンがある機種</h3>
                <p className="text-sm leading-7 text-slate-700">エアコン本体に向けて「お知らせ」ボタンを押すと、「ピピピピ…」と鳴り、リモコンの液晶表示部に診断コードが表示されます。何回押しても表示されない場合は、すべての電池を新しいものに交換してください。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">「お知らせ」ボタンがない2023年以前の機種</h3>
                <p className="text-sm leading-7 text-slate-700">前面パネルを開くと、本体内部の右側に診断コード表示部があり、英数字3桁が1文字ずつ順に表示されます。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">「お知らせ」ボタンがない2024年以降の機種</h3>
                <p className="text-sm leading-7 text-slate-700">
                  リモコンの診断ボタンを先の細いもので押すと、液晶表示部に「--」が表示されます。「温度/しつど」または「温度」ボタンをゆっくり繰り返し押すと診断コードが順番に表示され、該当するコードのときに本体のランプがすべて点灯して「ピピピピ…」と鳴ります。
                  「取消」または「停止」ボタンを押すか、30秒間操作しないと元に戻ります。
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：パナソニック公式FAQ「エアコンの診断コード（エラーコード）の確認方法と内容」（jpn.faq.panasonic.com/app/answers/detail/a_id/9669/）。{CHECKED}。</p>
          </section>

          <section id="table" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">診断コード一覧（パナソニック公式FAQに掲載の18コード）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>コード</th>
                    <th className={th}>公式FAQの説明</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((c) => (
                    <tr key={c.code}>
                      <td className={`${td} font-bold text-sky-700 whitespace-nowrap`}>{c.code}</td>
                      <td className={td}>{c.mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：パナソニック公式FAQ（a_id/9669）。{CHECKED}。表は公式FAQの説明を要約したものです。
              公式FAQに掲載のないコード（H15・H23・H27・F95・F97など）は、パナソニックの技術者向け「自己診断コード早見表（携帯版）」に記載があります。ただし同ページには「最新機種の情報については掲載されていない場合がございます」と注記されており、H50の説明が上の公式FAQと異なるなど記載が一致しない部分があるため、当サイトでは一覧に含めていません。
            </p>
          </section>

          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではないランプの点滅・点灯</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={th}>表示</th>
                    <th className={th}>公式の説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>運転ランプの点滅</td><td className={td}>運転準備中や霜取り運転中のお知らせです。最長で12分程度かかることがありますが、故障ではありません。1時間に複数回入ることもあります。</td></tr>
                  <tr><td className={td}>おそうじランプの点灯</td><td className={td}>フィルターおそうじ運転・内部クリーン運転中です。</td></tr>
                  <tr><td className={td}>おそうじランプの点滅</td><td className={td}>ダストボックスのお手入れ時期のお知らせです。</td></tr>
                  <tr><td className={td}>無線LANランプの点滅</td><td className={td}>無線LANルーターとの接続が途切れている状態です。</td></tr>
                  <tr><td className={`${td} font-semibold text-rose-700`}>タイマーランプの点滅</td><td className={`${td} text-rose-700`}>エアコン本体または室外機の異常のお知らせです（診断コードをご確認ください）。</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：パナソニック公式FAQ「エアコン本体のランプの点灯・点滅の意味」（jpn.faq.panasonic.com/app/answers/detail/a_id/26922/）。{CHECKED}。ナノイー・AI・エコナビなどのランプは点滅しないと記載されています。</p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">パナソニックに修理を依頼した場合の費用</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>修理料金は、技術料・部品代・出張料の合計です。</li>
              <li>出張料（技術員の派遣料金）は<strong>4,950円（税込）</strong>です。技術員の訪問後にキャンセルした場合も出張料がかかります。</li>
              <li>営業時間外・休日（日曜・祝日）の指定は、指定料金<strong>2,200円（税込）</strong>が加わります。</li>
              <li>修理料金の目安は、公式の「修理診断ナビ」（jpn.faq.panasonic.com/app/answers/monshin/）で品番を入力すると表示されます（技術料・部品代・出張料を含む目安）。</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：パナソニック公式FAQ（a_id/63915）。{CHECKED}。一部のエリアでは、フェリーなどの特殊料金や遠方料金が加算される場合があります。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              F91（冷凍サイクルの異常）やF93（圧縮機の回転異常）は、冷媒回路や圧縮機に関わるため修理費が高額になる場合があります。製造から10年前後の機種は<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>もあわせてご覧ください。
              メーカー各社の料金は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>に、メーカー以外の修理業者は<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>に掲載しています。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">パナソニックの修理受付窓口</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>電話（修理ご相談窓口）：0120-878-554（フリーダイヤルに接続できない場合は03-6633-6700・有料）</li>
              <li>受付時間：9:00〜18:00（年中無休）</li>
              <li>Web申込：panasonic.jp/support/repair/on-site.html（夜間23時〜7時は訪問日指定機能を利用できません）</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：パナソニック公式「エアコン サポート」（panasonic.jp/aircon/support.html）、「出張修理のお申し込み」。{CHECKED}。公式では、修理の申し込みはお買い上げの販売店への相談も案内されています。</p>
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
                <li>・パナソニック公式FAQ（jpn.faq.panasonic.com）a_id/9669・26922・63915</li>
                <li>・パナソニック公式「エアコン サポート」（panasonic.jp/aircon/support.html）</li>
                <li>・パナソニック「自己診断コード早見表（携帯版）」（is.jp.panasonic.com・一覧外のコードの参照先として）</li>
                <li>・確認日：いずれも2026年11月22日</li>
              </ul>
              <p className="mt-2">表示の内容・確認方法は機種によって異なる場合があります。正確な内容はお使いの機種の取扱説明書でご確認ください。本記事は依頼の判断にお役立ていただくためのもので、分解・修理はメーカーまたは専門業者へご依頼ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る（症状別の切り分け）" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/error-code-hitachi/", label: "日立(白くまくん)のランプ点滅の意味" },
                { href: "/guide/error-code-mitsubishi/", label: "三菱(霧ヶ峰)のランプ点滅・エラー表示" },
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
