import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "東芝エアコン(大清快)のエラーコード・ランプ点滅の意味｜公式が公表している表示と故障ではない点滅、修理料金【2026年11月確認】",
  description:
    "東芝のエアコン「大清快」のランプ点滅・エラー表示のうち、公式FAQ・取扱説明書で意味が公表されているものと、故障ではない点滅をまとめました。東芝は対応表を公開していないため、相談時のメモの取り方、公式の修理料金の目安、受付窓口もご案内しています。",
  alternates: { canonical: "/guide/error-code-toshiba/" },
};

const UPDATED = "2026年11月22日";
const CHECKED = "2026年11月22日確認";

const known = [
  { lamp: "運転ランプのみが11回連続して点滅", mean: "前面パネルが閉まりきっていない可能性があります。閉じ直して数時間後に再び点滅する場合は相談が案内されています。", src: "東芝公式FAQ" },
  { lamp: "クリーニングランプが速く点滅（10秒に5回程度）、または他のランプと同時に点滅", mean: "エアフィルターの取付不良が考えられます。再装着して試運転をしても点滅する場合は相談が案内されています。", src: "東芝公式FAQ" },
  { lamp: "室外ユニットが運転せず、タイマーランプが点滅しながら運転ランプが2回点滅を繰り返す", mean: "電源電圧が200Vになっている可能性があります（据え付け時の確認事項）。", src: "据付説明書（RAS-U281XT ほか）" },
  { lamp: "室外ユニットが運転せず、運転ランプのみ2回点滅を繰り返す", mean: "Fケーブルの接続不良が考えられます（据え付け時の確認事項）。", src: "据付説明書（RAS-U281XT ほか）" },
];

const notFault = [
  { lamp: "クリーニングランプがゆっくり点滅（10秒間に10回程度）", mean: "ダストボックスのお手入れ時期のお知らせで、故障ではありません。お手入れ後にエアフィルターの試運転を行うと消灯します（掃除機で吸うだけでは消えません）。" },
  { lamp: "運転停止後もクリーニングランプが点灯している", mean: "自動クリーニング中で、完了すると消灯します。" },
  { lamp: "運転ランプ点灯・タイマーランプがゆっくり点滅", mean: "高温みはり制御中の表示です（取扱説明書）。" },
  { lamp: "クリーニングランプが3回点滅", mean: "「送風乾燥」に設定されたことのお知らせです（取扱説明書）。" },
  { lamp: "無線LANランプの点滅（1秒に1回程度／2回程度）", mean: "簡単接続／手動接続の接続待ちの状態です。使用中に点滅する場合は、ネットワーク接続に問題が発生していることのお知らせです。" },
  { lamp: "天井付近で緑のランプが数秒おきに光る", mean: "UVユニットが通電していることのお知らせで、異常・故障ではありません。" },
];

const fees = [
  { part: "室内基板", fee: "33,000〜36,000円" },
  { part: "室外基板", fee: "32,000〜55,000円" },
  { part: "室内ファンモーター", fee: "24,000〜34,000円" },
  { part: "室外ファンモーター", fee: "26,000〜31,000円" },
  { part: "圧縮機", fee: "75,000〜126,000円" },
  { part: "ドレン詰まり", fee: "11,000〜16,000円" },
  { part: "リモコン", fee: "10,000〜15,000円" },
];

const faqs = [
  {
    q: "東芝エアコンのエラーコードの一覧はありますか？",
    a: "2026年11月22日時点で、東芝公式FAQ・取扱説明書には、点滅回数やエラーコードと故障内容を対応させた一覧表は掲載されていません（当サイト確認）。公式FAQでは「運転ランプの点滅回数とタイマーランプが点灯・消灯・点滅の回数をメモするなどして、お買い上げの販売店、または東芝生活家電ご相談センターにご相談ください」と案内されています。インターネット上の一覧表は公式の資料ではない場合があるためご注意ください。",
  },
  {
    q: "リモコンにエラーコードが表示されました。どうすればよいですか？",
    a: "東芝の取扱説明書（RAS-U221/251/281XT）では、エラーコードが表示されたときは運転を停止して販売店に相談するよう案内されています。表示されたコードと、本体のランプの点滅回数をメモしたうえでご相談ください。IoLIFEアプリに接続している場合は、エラーの発生とエラー番号がアプリで通知されます。",
  },
  {
    q: "クリーニングランプが点滅しています。故障でしょうか？",
    a: "点滅の速さで意味が異なります。ゆっくりした点滅（10秒間に10回程度）はダストボックスのお手入れ時期のお知らせで故障ではありません。速い点滅（10秒に5回程度）や他のランプと同時の点滅は、エアフィルターの取付不良が考えられます。いずれも東芝公式FAQに記載されています（2026年11月22日確認）。",
  },
  {
    q: "東芝に修理を依頼すると、見積もりだけでも費用はかかりますか？",
    a: "東芝公式の修理料金のページでは、見積診断後に修理を行わなかった場合は出張費の負担が必要とされています。出張費の金額は、2026年11月22日時点で公式の料金ページに記載が見当たらないため、依頼時に窓口でご確認ください。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function ErrorCodeToshibaPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "東芝エアコンのエラー表示（ランプ点滅）の意味", href: "/guide/error-code-toshiba/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            東芝エアコン（大清快）のエラーコード・ランプ点滅の意味
            <br className="hidden md:block" />
            公式が公表している表示と修理料金
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-22">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            東芝のルームエアコン「大清快」は、運転ランプ・タイマーランプ・クリーニングランプの点滅や、リモコンのエラーコードで不具合をお知らせします。
            ただし、<strong className="font-semibold text-slate-900">東芝は点滅回数・エラーコードと故障内容の対応表を公式には公開していません</strong>（当サイトが公式FAQ・取扱説明書を確認した結果・{CHECKED}）。
            本記事では、東芝公式の資料で意味が公表されている表示と、故障ではない点滅、修理を依頼する際の料金の目安をまとめています。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：点滅・エラー表示を確認した場合の手順（公式の案内）</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>下の「故障ではない点滅」に当てはまらないかを確認します。</li>
              <li>運転ランプの点滅回数と、タイマーランプの状態（点灯・消灯・点滅の回数）をメモします。リモコンにコードが出ている場合はコードも控えます。</li>
              <li>運転を停止し、販売店または東芝の修理窓口に、メモした内容を伝えて相談します。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="known" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">東芝公式が意味を公表しているランプ表示</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={th}>表示</th>
                    <th className={th}>公式の説明</th>
                    <th className={`${th} whitespace-nowrap`}>出典</th>
                  </tr>
                </thead>
                <tbody>
                  {known.map((r) => (
                    <tr key={r.lamp}>
                      <td className={`${td} font-semibold text-slate-900`}>{r.lamp}</td>
                      <td className={td}>{r.mean}</td>
                      <td className={`${td} text-slate-600`}>{r.src}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：東芝ライフスタイル公式FAQ（faq-toshiba-lifestyle.dga.jp・ランプ点滅に関する回答 id=2411・2580）、東芝ルームエアコン据付説明書（RAS-U281XT ほか・東芝公式の取扱説明書ダウンロード）。{CHECKED}。
              ここに掲載した4件は、取り付け・部品の装着状態に関するものです。部品の故障を示す点滅パターンの対応表は、公式には掲載されていません。
            </p>
          </section>

          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない点滅・点灯</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className={th}>表示</th>
                    <th className={th}>公式の説明</th>
                  </tr>
                </thead>
                <tbody>
                  {notFault.map((r) => (
                    <tr key={r.lamp}>
                      <td className={`${td} font-semibold text-slate-900`}>{r.lamp}</td>
                      <td className={td}>{r.mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：東芝ライフスタイル公式FAQ（id=2580・708・2411・2497）、東芝ルームエアコン取扱説明書（RAS-U281XT ほか）。{CHECKED}。
              暖房中に温風が止まる霜取り運転（除霜）は、公式FAQで「一回あたり最長約15分程度」の正常な動作とされています（id=718）。
            </p>
          </section>

          <section id="memo" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">相談の前にメモしておくこと</h2>
            <p className="text-sm leading-7 text-slate-700">
              東芝公式FAQでは、点滅回数のメモを取ったうえでの相談が案内されています。当サイトでは、窓口で伝える内容として次の項目を控えておくことをおすすめします。
            </p>
            <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>運転ランプの点滅回数（点滅と消灯の1サイクルで何回か）</li>
              <li>タイマーランプが点灯・消灯・点滅のどれか（点滅なら回数）</li>
              <li>リモコンまたはIoLIFEアプリに表示されたエラーコード</li>
              <li>本体の型番（室内機の側面などのラベルに記載）と購入時期</li>
              <li>点滅が始まった時の状況（冷房・暖房のどちらか、運転開始直後か、停電・落雷の後か）</li>
            </ul>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">東芝に修理を依頼した場合の料金の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              東芝公式の修理料金の目安は、技術料・部品代・出張料などで構成された税込の金額です（2025年4月1日現在の料金）。見積診断後に修理を行わなかった場合は出張費の負担が必要です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[480px]">
                <thead>
                  <tr>
                    <th className={th}>修理内容</th>
                    <th className={th}>公式の目安（税込）</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f) => (
                    <tr key={f.part}>
                      <td className={td}>{f.part}</td>
                      <td className={`${td} whitespace-nowrap`}>{f.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：東芝ライフスタイル公式「修理料金の目安 ルームエアコン」（toshiba-lifestyle.com/jp/support/ryokin/room_airconditioner/）。{CHECKED}。東芝コンシューママーケティングへ直接依頼した場合の目安です。作業人員が2名以上になる場合は人数分の出張料が加算されます。出張料・点検料の金額は公式ページに記載がないため、依頼時にご確認ください。販売店経由の料金は販売店にご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              圧縮機の交換は最大で10万円を超えるため、製造から10年前後の機種では<Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2">修理と買い替えの比較</Link>もあわせてご覧ください。
              他メーカーとの料金の違いは<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>に、メーカー以外の修理業者は<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>に掲載しています。
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">東芝の修理受付窓口</h2>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 list-disc pl-5">
              <li>Web受付：toshiba-lifestyle.com/jp/support/uketsuke/</li>
              <li>電話：0120-1048-76（フリーダイヤル）／0570-0570-33（有料）</li>
              <li>受付時間：9:00〜18:00（月〜土）、9:00〜17:00（日・祝日）</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：東芝ライフスタイル公式「お問い合わせ・修理のご依頼」（toshiba-lifestyle.com/jp/support/contact-onsite/）。{CHECKED}。業務用エアコンと型名が「HAS」で始まるハウジングエアコンは、日本キヤリア株式会社の窓口が担当です。</p>
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
                <li>・東芝ライフスタイル公式FAQ（faq-toshiba-lifestyle.dga.jp）id=2411・2580・708・2497・718・2028</li>
                <li>・東芝ルームエアコン取扱説明書・据付説明書（RAS-U221/251/281XT）</li>
                <li>・東芝ライフスタイル公式「修理料金の目安 ルームエアコン」「お問い合わせ・修理のご依頼」</li>
                <li>・確認日：いずれも2026年11月22日</li>
              </ul>
              <p className="mt-2">表示の内容は機種によって異なる場合があります。正確な内容はお使いの機種の取扱説明書でご確認ください。本記事は依頼の判断にお役立ていただくためのもので、分解・修理はメーカーまたは専門業者へご依頼ください。</p>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/symptom/error-code/", label: "エラーコードが出る（症状別の切り分け）" },
                { href: "/guide/error-code-hitachi/", label: "日立(白くまくん)のランプ点滅の意味" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
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
