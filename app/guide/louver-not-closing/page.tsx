import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンのルーバー（風向板）が閉まらない原因｜故障ではない場合・リセット方法・修理料金の目安【メーカー公式】",
  description:
    "停止してもエアコンのルーバー（風向板・フラップ）が閉まらない原因と対処を、日立・パナソニック・三菱電機の公式FAQとダイキンの取扱説明書で確認しました。内部クリーン運転中など故障ではない場合の見分け方、リセット手順、日立が公表するルーバー修理料金の目安（16,000円〜）を掲載しています。",
  alternates: { canonical: "/guide/louver-not-closing/" },
};

const UPDATED = "2026年11月19日";

const faqs = [
  {
    q: "エアコンを止めてもルーバーが閉まらないのは故障ですか？",
    a: "故障ではない場合が多くあります。冷房や除湿の後に内部を乾燥させる運転（内部クリーン・内部乾燥）を行っている間は、ルーバーが開いたままになります。日立は「ランプが点灯している場合は、内部乾燥や凍結洗浄を行っているため、エアコンを停止しても上下風向板が閉じません」と案内しています（2026年11月19日確認）。運転終了後に自動で閉まります。",
  },
  {
    q: "ルーバーが閉まらないときのリセット方法を教えてください。",
    a: "ランプが消えているのに閉まらない場合は、電源の入れ直しをお試しください。日立は、電源プラグを抜いて5分ほどおいてから差し直し、運転してから停止してルーバーが閉じるかを確認する手順を案内しています。パナソニックは、リモコンの「本体リセット」ボタンを先の細いもので押す方法と、電源プラグを抜く・専用ブレーカーを落として電源を入れ直す方法を案内しています（2026年11月19日確認）。",
  },
  {
    q: "ルーバーを手で閉じてもよいですか？",
    a: "お控えください。ダイキンの取扱説明書には「フラップや風向板、ルーバーを無理に手で操作すると、正しく動かなくなることがあります」と記載されています。パナソニックは「ルーバーは手では完全に閉じることができません」としています（2026年11月19日確認）。ただし、リモコンに左右風向ボタンがない機種の左右風向板は、手で動かす仕様です（日立・パナソニック）。",
  },
  {
    q: "ルーバーの修理にはいくらかかりますか？",
    a: "日立の修理料金の目安一覧では、「上下風向板／上下ルーバーが動かない」場合、ルーバーの交換が16,000円〜21,000円前後、ステップモータの交換が33,000円〜38,000円前後（いずれも通常設置・技術料・部品代・出張料の合計）とされています（2026年11月19日確認）。パナソニックの修理診断ナビでは、機種CS-X255Cの「上下ルーバーが動かない」の目安が26,000円〜29,000円（税込）です。機種・設置状況により異なります。",
  },
  {
    q: "ルーバーが折れた・外れた場合は自分で交換できますか？",
    a: "パナソニックは「ルーバーが破損したときは、お客様で交換することができないため、点検・修理が必要です」と案内しています。日立も、お客様ご自身による部品交換はできないとしています（2026年11月19日確認）。販売店またはメーカーの修理窓口へご相談ください。",
  },
];

const notFault = [
  {
    case: "内部クリーン・内部乾燥の運転中",
    detail: "冷房・除湿の停止後に内部を乾燥させる運転中は、ルーバーが少し開いたままになり、終了後に自動で閉まります。パナソニックの例では冷房・除湿を30分以上運転して停止したときに作動し、取扱説明書（CS-X221C等）では約40分〜85分間、ダイキン（Eシリーズ取扱説明書）では約140分後に自動で終了します",
    how: "運転ランプ・クリーンランプなどが点灯しているかを確認し、終了までお待ちください",
    src: "日立・パナソニック・三菱電機 公式FAQ、ダイキン取扱説明書",
  },
  {
    case: "フィルター自動おそうじの運転中",
    detail: "三菱電機のフィルターおそうじメカ搭載機種は、運転積算時間が24時間を経過すると、運転停止後にフィルターの掃除を自動で行います",
    how: "掃除が終わるまでお待ちください",
    src: "三菱電機 公式FAQ No.1904",
  },
  {
    case: "見守り・連続換気などの設定中",
    detail: "三菱電機は高温/低温みまもりの設定中、運転停止中でも上下風向フラップが水平になり、定期的に送風すると案内しています。ダイキン（RX/Rシリーズ）は連続換気の設定中、停止していてもフラップが開くと記載しています",
    how: "リモコンで該当する設定を取り消します",
    src: "三菱電機 公式FAQ No.10363、ダイキン取扱説明書",
  },
  {
    case: "停止時にいったん大きく開く",
    detail: "パナソニックの取扱説明書では、確実に閉じるため、停止時にいったん大きく開いてから閉じると説明されています",
    how: "しばらく待つと閉まります",
    src: "パナソニック取扱説明書 CS-X221C等",
  },
];

export default function LouverNotClosingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/louver-not-closing/" },
          { name: "ルーバーが閉まらない", href: "/guide/louver-not-closing/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンのルーバー（風向板）が閉まらない原因
            <br className="hidden md:block" />
            故障ではない場合の見分け方とリセット方法
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンを停止してもルーバー（上下風向板・フラップ）が閉まらない場合、まず<strong className="font-semibold text-slate-900">本体のランプが点灯しているか</strong>をご確認ください。
            ランプが点灯していれば、内部クリーンなど停止後の自動運転中であり、故障ではありません。
            ランプが消えているのに閉まらない場合は、<strong className="font-semibold text-slate-900">電源を入れ直すリセット</strong>で直ることがあります。
            本記事では、日立・パナソニック・三菱電機の公式FAQとダイキンの取扱説明書の記載（{UPDATED}確認）にもとづいてご説明します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">確認の順番</p>
            <ol className="text-sm leading-7 text-slate-700 list-decimal pl-5 space-y-1">
              <li>ランプが点灯している → 内部クリーン等の運転中です。終了までお待ちください</li>
              <li>ランプが消えている → 電源プラグを抜く（またはブレーカーを切る）リセットをお試しください</li>
              <li>リセットしても閉まらない・異音がする・ルーバーが破損している → 販売店またはメーカーへ点検をご依頼ください</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="not-fault" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">故障ではない場合（停止後の自動運転・設定）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">状況</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">公式の説明</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">対処</th>
                  </tr>
                </thead>
                <tbody>
                  {notFault.map((r) => (
                    <tr key={r.case}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold align-top">{r.case}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.detail}<span className="block text-xs text-slate-400 mt-1">出典: {r.src}</span></td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。運転時間や機能名はメーカー・機種により異なります。内部クリーン機能については<Link href="/guide/smell/" className="underline">臭いの対処ガイド</Link>でもご説明しています。
            </p>
          </section>

          <section id="reset" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ランプが消えているのに閉まらない場合のリセット手順</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              運転中にルーバーを手で動かした場合や、運転中に停電した場合は、ルーバーの位置がずれて完全に閉じなくなることがあります（ダイキン取扱説明書・パナソニック公式FAQ）。雷や無線による誤作動の可能性もダイキンの取扱説明書に記載されています。次の手順でリセットします。
            </p>
            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">日立が案内している手順</h3>
            <ol className="list-decimal pl-6 space-y-1 text-sm leading-7 text-slate-700">
              <li>エアコンの電源プラグを抜きます。</li>
              <li>5分ほどおいてから、電源プラグを差し直します。</li>
              <li>再び電源を入れ、上下風向板が開くかを確認します。</li>
              <li>運転を終了し、上下風向板が閉じるかを確認します。</li>
            </ol>
            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">パナソニックが案内している方法</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm leading-7 text-slate-700">
              <li>リモコンの「本体リセット」ボタンを先の細いもので押し、本体電源をリセットします。</li>
              <li>または、電源プラグをコンセントから抜く（エアコン専用ブレーカーを落とす）方法で電源を入れ直し、運転を再開します。</li>
              <li>タイマーランプが点滅し「H56」が表示されている場合も、一時的な誤動作の可能性があるとされています。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              電源の入れ直し方は<Link href="/guide/power-not-on/" className="text-sky-700 underline">電源が入らない場合の確認手順</Link>でも詳しくご説明しています。
            </p>
          </section>

          <section id="hand" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ルーバーを手で動かさないでください</h2>
            <p className="text-sm leading-7 text-slate-700">
              ダイキンの取扱説明書には「風向調節は必ずリモコンで行ってください。フラップや風向板、ルーバーを無理に手で操作すると、正しく動かなくなることがあります」と記載されています。
              三菱電機の取扱説明書も、運転中に風向フラップを手で動かすと故障の原因になると注意しています。
              例外として、リモコンに左右風向ボタンがない機種の左右風向板（左右風向ルーバー）は、手で向きを変える仕様です（日立・パナソニック公式FAQ）。
            </p>
          </section>

          <section id="other" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運転中にルーバーが動かない・角度が変わる場合</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>結露防止の自動制御</strong>：部屋の湿度が高い状態で冷房を続けると、結露や露の落下を防ぐため、自動で角度を変えたりスイングを止めたりすることがあります（日立公式FAQ・ダイキン取扱説明書）。</li>
              <li><strong>暖房の予熱・霜取り中</strong>：日立は暖房の予熱・霜取り中や設定温度到達時にスイングが停止すると案内しています。</li>
              <li><strong>風向が自動の設定</strong>：パナソニックは、風向を自動に設定している場合はスイングしなくなることがあるとし、リモコンで「スイング」に設定して確認するよう案内しています。</li>
              <li><strong>正常な動作音</strong>：ダイキンの取扱説明書では、運転開始時・停止時の「コトコト」「ギュッ」「ギギッ」という音は、フラップ・ルーバーの位置を補正する音とされています。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              上記に当てはまらず異音が続く場合は、<Link href="/guide/noise/" className="text-sky-700 underline">エアコンの異音の原因</Link>もあわせてご確認ください。
            </p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理が必要な場合の料金の目安</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              リセットしても改善しない場合、パナソニックは「ルーバーやその周辺の部品が破損している、または、本体の不具合の可能性があります」としています。メーカーが公表している料金の目安は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">修理内容</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">通常設置</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">高所設置等</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap" rowSpan={2}>日立</td>
                    <td className="border border-slate-300 px-3 py-2">ルーバー</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">16,000円〜21,000円前後</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">33,000円〜38,000円前後</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">ステップモータ</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">33,000円〜38,000円前後</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">41,000円〜56,000円前後</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">パナソニック</td>
                    <td className="border border-slate-300 px-3 py-2">上下ルーバーが動かない（機種CS-X255Cの例）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap" colSpan={2}>26,000円〜29,000円（税込）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: 日立「ルームエアコン 修理料金の目安一覧」（技術料・部品代・出張料の合計。出張料は3,850円（税込）、修理キャンセル時は診断料と出張料の合計5,830円（税込））、パナソニック「修理診断ナビ」（技術料金・部品代・出張料を含む。保証期間終了後の目安）。{UPDATED}確認。点検の結果により目安を超える場合があります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              購入から1年以内であれば、メーカー保証の対象になる可能性があります（<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>）。
              他メーカーの出張費・診断料は<Link href="/cost/maker-repair-fee/" className="text-sky-700 underline">メーカー6社の出張費・診断料の比較</Link>に、依頼先の選び方は<Link href="/guide/where-to-repair/" className="text-sky-700 underline">エアコン修理はどこに頼むか</Link>に掲載しています。
            </p>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="rounded-xl border border-slate-200 bg-white">
                  <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-slate-800">{f.q}</summary>
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="sources" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-3">出典（{UPDATED}確認）</h2>
            <ul className="list-disc pl-6 space-y-1 text-xs leading-6 text-slate-500 break-all">
              <li>日立「運転を停止しても、フラップ(ルーバー、上下風向板)が閉じません。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-76.html</li>
              <li>日立「運転中に風向板（フラップ、ルーバー）が動きません。」https://kadenfan.hitachi.co.jp/support/ra/q_a/post-93.html</li>
              <li>日立「ルームエアコン 修理料金の目安一覧」https://kadenfan.hitachi.co.jp/support/repair/raj.html</li>
              <li>パナソニック 公式FAQ「エアコン停止後にルーバーが閉まらないときは」https://jpn.faq.panasonic.com/app/answers/detail/a_id/62086</li>
              <li>パナソニック 公式FAQ「エアコンのルーバーが動かない（スイングしない）ときは」https://jpn.faq.panasonic.com/app/answers/detail/a_id/9699</li>
              <li>パナソニック 公式FAQ「破損したエアコンのルーバーは交換できるか」https://jpn.faq.panasonic.com/app/answers/detail/a_id/77681</li>
              <li>パナソニック 取扱説明書 CS-X221C/X251C/X281C https://panasonic.jp/manualdl/p-db/cs/cs_281cx_01.pdf</li>
              <li>パナソニック 修理診断ナビ（CS-X255C）https://jpn.faq.panasonic.com/app/answers/monshin/kata/CS-X255C</li>
              <li>三菱電機 よくあるご質問 No.1904「運転を止めたが、運転が止まらない。」https://faq01.mitsubishielectric.co.jp/faq/show/1904?site_domain=default</li>
              <li>三菱電機 よくあるご質問 No.10363「エアコンの運転停止・内部クリーン運転終了後も上下風向フラップが閉じない」https://faq01.mitsubishielectric.co.jp/faq/show/10363?site_domain=default</li>
              <li>ダイキン ルームエアコン取扱説明書 RXシリーズ／Rシリーズ（3P780650-5）、Eシリーズ（3P787847-3）（ダイキン DT-NET 掲載）</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/parts-names/", label: "エアコンの部品の名称と役割" },
                { href: "/guide/noise/", label: "エアコンの異音の原因" },
                { href: "/guide/power-not-on/", label: "電源が入らない場合の確認手順" },
                { href: "/guide/remote-not-working/", label: "リモコンが効かない場合の対処" },
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/cost/repair-price/", label: "エアコン修理の料金相場" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-700 transition-colors">
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
