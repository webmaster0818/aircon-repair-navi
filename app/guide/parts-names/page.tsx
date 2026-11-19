import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの部品の名称と役割｜室内機・室外機・冷媒回路の各部と、メーカー3社の呼び方の違い【取扱説明書で確認】",
  description:
    "エアコンの部品の名称と役割を、三菱電機・パナソニック・日立の取扱説明書で確認しました。室内機・室外機の部品名、圧縮機・熱交換器などの冷媒回路の部品、メーカーにより「フラップ」「ルーバー」「風向板」と呼び方が異なる点、補修用性能部品の保有期間（製造打ち切り後10年）を掲載しています。",
  alternates: { canonical: "/guide/parts-names/" },
};

const UPDATED = "2026年11月19日";

const faqs = [
  {
    q: "エアコンの風向きを変える板の名前は何ですか？",
    a: "メーカーにより呼び方が異なります。取扱説明書では、三菱電機が「上下風向フラップ」、パナソニックが「上下風向ルーバー」、日立が「上下風向板」と記載しています（2026年11月19日確認）。修理を依頼する際は、お使いのメーカーの取扱説明書の名称で伝えると話が通じやすくなります。",
  },
  {
    q: "エアコンで最も重要な部品は何ですか？",
    a: "室外機の中にある圧縮機（コンプレッサー）です。ダイキンは圧縮機を「エアコンの心臓」と説明し、「エアコンの消費電力の約80%は、この圧縮機を動かすために使われています」としています（2026年11月19日確認）。圧縮機の故障は修理費が高額になりやすい部位です。",
  },
  {
    q: "リモコンがなくても本体で運転できるボタンはどこにありますか？",
    a: "三菱電機・日立では「応急運転スイッチ」、パナソニックでは「自動運転 切／入ボタン」という名称で、室内機に設けられています。日立の取扱説明書（RAS-V22B等）では、フロントパネルを開けた内側に記載があります。操作方法は機種ごとに異なるため、取扱説明書をご確認ください。",
  },
  {
    q: "エアコンの部品はいつまで修理用に保管されていますか？",
    a: "パナソニック・三菱電機・日立の取扱説明書や公式ページでは、エアコンの補修用性能部品の保有期間を「製造打ち切り後10年」としています（2026年11月19日確認）。期間は購入日ではなく、その機種の製造を打ち切った時点から数えます。期間を過ぎると部品がなく修理できない場合があります。",
  },
  {
    q: "室外機から水が出ていますが、どの部品から出ていますか？",
    a: "日立の取扱説明書には「室外機から水が出る、湯気が立つのは故障ではありません」と記載されています。暖房時の霜取り運転などで生じた水は、室外機の底面の排水口から出ます。室内機の除湿水は、室内機の排水トレー（ドレンパン）からドレンホースを通って屋外へ排水されます。",
  },
];

const nameDiff = [
  { part: "上下の風向きを変える板", mit: "上下風向フラップ", pana: "上下風向ルーバー", hit: "上下風向板" },
  { part: "左右の風向きを変える板", mit: "左右風向フラップ", pana: "左右風向ルーバー（吹出口奥）", hit: "左右風向板" },
  { part: "前面のカバー", mit: "丸洗いパネル", pana: "前面パネル", hit: "フロントパネル" },
  { part: "本体での運転ボタン", mit: "応急運転スイッチ", pana: "自動運転 切／入ボタン", hit: "応急運転スイッチ" },
  { part: "リモコンの信号を受ける部分", mit: "リモコン受信部", pana: "受信部", hit: "受信部" },
  { part: "室内機と室外機をつなぐ管", mit: "配管", pana: "配管パイプ", hit: "冷媒配管パイプ" },
  { part: "除湿水を流すホース", mit: "ドレンホース", pana: "ドレンホース", hit: "室内機排水ホース" },
];

const cycle = [
  { name: "圧縮機（コンプレッサー）", where: "室外機", role: "冷媒を吸い込んで圧力をかけ、送り出します。ダイキンは「エアコンの心臓」とし、消費電力の約80%がこの圧縮機を動かすために使われると説明しています" },
  { name: "熱交換器", where: "室内機・室外機の両方", role: "空気から熱を集めたり、空気中に熱を逃がしたりします（ダイキン）。室内機の熱交換器はアルミフィンとも呼ばれ、日立の取扱説明書では室外機の部品名としても「アルミフィン」が記載されています" },
  { name: "膨張弁（減圧機）", where: "室外機", role: "冷媒の減圧を行います（パナソニック）。日立は「減圧機」と表記しています" },
  { name: "四方弁（四方切換弁）", where: "室外機", role: "冷房と暖房、除霜と暖房の切り換えに使う弁です（部品メーカー鷺宮製作所のカタログ）。暖房運転では冷媒が冷房と逆の向きに流れます（パナソニック）" },
  { name: "冷媒配管", where: "室内機と室外機の間", role: "室内機と室外機は2本の配管でつながっており、中を冷媒が循環しています（パナソニック）" },
  { name: "送風ファン", where: "室内機・室外機", role: "室内機はクロスフローファン、室外機はプロペラファンです（シャープ）。室外機ではファンで熱を外へ放出します（日立）" },
  { name: "排水トレー（ドレンパン）", where: "室内機", role: "冷房・除湿で発生した結露を受け止め、ドレンホースを通して屋外へ排水します（日立）" },
];

export default function PartsNamesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/parts-names/" },
          { name: "エアコンの部品の名称と役割", href: "/guide/parts-names/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">基礎知識ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの部品の名称と役割
            <br className="hidden md:block" />
            室内機・室外機・冷媒回路とメーカー別の呼び方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-19">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンは、<strong className="font-semibold text-slate-900">室内機・室外機・2つをつなぐ冷媒配管</strong>で構成されています。
            同じ部品でも、メーカーにより名称が異なります（例：風向きを変える板は三菱電機が「フラップ」、パナソニックが「ルーバー」、日立が「風向板」）。
            当サイトでは、三菱電機・パナソニック・日立の取扱説明書の「各部のなまえ」と、メーカーの解説ページを{UPDATED}に確認し、部品名と役割を整理しました。
            修理の相談や見積もりの際に、症状の場所を正確に伝えるための参考としてご利用ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="indoor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">室内機の主な部品</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">部品</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">役割・取扱説明書の記載</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">吸込口・吹出口</td><td className="border border-slate-300 px-3 py-2 leading-7">部屋の空気を吸い込み、温度を調整した空気を吹き出す部分です</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">前面パネル</td><td className="border border-slate-300 px-3 py-2 leading-7">室内機の前面のカバーです。パナソニックの機種では「運転中は前に開きます」と記載されています</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">エアフィルター</td><td className="border border-slate-300 px-3 py-2 leading-7">「ちりや綿ぼこりをキャッチします」（パナソニック）。ご自身でお手入れする部品です</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">上下・左右の風向板</td><td className="border border-slate-300 px-3 py-2 leading-7">風向きを変える板です。メーカーにより「フラップ」「ルーバー」「風向板」と呼びます</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">受信部・表示部</td><td className="border border-slate-300 px-3 py-2 leading-7">リモコンの信号を受け、運転ランプなどを表示します。三菱電機は運転ランプを「運転中や入タイマーが設定されているときに点灯します」と説明しています</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">応急運転スイッチ</td><td className="border border-slate-300 px-3 py-2 leading-7">リモコンが故障したり電池が消耗したりした際に、本体で運転するためのスイッチです（三菱電機）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">お掃除ユニット・ダストボックス</td><td className="border border-slate-300 px-3 py-2 leading-7">フィルター自動お掃除機能のある機種の部品です。日立の機種では「フィルター掃除ユニット」「ホコリキャッチャー」「ダストボックス」と記載されています</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">センサー類</td><td className="border border-slate-300 px-3 py-2 leading-7">三菱電機の「ムーブアイ」、パナソニックの「冷媒センサー（本体内部）冷媒漏れを検知します」など、機種により搭載されるセンサーが異なります</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: 三菱電機 取扱説明書 MSZ-HWシリーズ・MSZ-ZXVシリーズ、パナソニック 取扱説明書 CS-289CY2等、日立 取扱説明書 RAS-V22B等（{UPDATED}確認）。部品の有無・名称は機種により異なります。
            </p>
          </section>

          <section id="outdoor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">室外機の主な部品</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">3社の取扱説明書の「各部のなまえ」に共通して記載されている室外機の部品は、次のとおりです。</p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>吸込口（裏面・側面）・吹出口</strong>：外気を吸い込み、熱を放出した空気を吹き出します。</li>
              <li><strong>配管</strong>：室内機と冷媒をやり取りする管です。日立の取扱説明書では、配管の接続部に「接続バルブ」が記載されています。</li>
              <li><strong>排水口（底面・下面）</strong>：室外機で生じた水を排水します。日立は「室外機から水が出る、湯気が立つのは故障ではありません」と記載しています。</li>
              <li><strong>アース端子（アースネジ）</strong>：漏電時の感電を防ぐためのアース線をつなぐ部分です。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              室外機の内部には、後述する圧縮機・熱交換器・プロペラファンなどが収められています。室外機が動かない場合の確認方法は<Link href="/guide/outdoor-unit-not-working/" className="text-sky-700 underline">室外機が動かない・回らない原因</Link>に掲載しています。
            </p>
          </section>

          <section id="names" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー3社の部品名の違い</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              同じ部品でも、取扱説明書での呼び方はメーカーごとに異なります。3社の取扱説明書の「各部のなまえ」を並べて比較しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">部品</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">三菱電機</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">パナソニック</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">日立</th>
                  </tr>
                </thead>
                <tbody>
                  {nameDiff.map((r) => (
                    <tr key={r.part}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold">{r.part}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.mit}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.pana}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.hit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※三菱電機 MSZ-HWシリーズ、パナソニック CS-289CY2等、日立 RAS-V22B等の取扱説明書による（{UPDATED}確認）。三菱電機のMSZ-ZXVシリーズでは受信部を「送受信部」と記載しています。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              風向板が閉まらない・動かない場合の対処は<Link href="/guide/louver-not-closing/" className="text-sky-700 underline">ルーバー（風向板）が閉まらない原因</Link>、本体ボタンでの運転方法は<Link href="/guide/remote-not-working/" className="text-sky-700 underline">リモコンが効かない場合の対処</Link>に掲載しています。
            </p>
          </section>

          <section id="cycle" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">冷暖房を行う冷媒回路の部品</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              エアコンは、配管の中を循環する冷媒で熱を運び、冷房と暖房を行います。冷媒回路を構成する主な部品は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">部品</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">場所</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">役割</th>
                  </tr>
                </thead>
                <tbody>
                  {cycle.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top">{r.where}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-7 align-top">{r.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン「エアコンのしくみと電気代の関係」、パナソニック UP LIFE「エアコンの仕組みを解説！」、日立「エアコンのしくみを知りたいです。」、シャープ「ネイチャーテクノロジー エアコン」、鷺宮製作所「STF形 冷媒用四方切換弁」カタログ（{UPDATED}確認）。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              冷媒回路の部品は、メーカー保証で通常より長く保証される場合があります（三菱電機・パナソニックの取扱説明書では本体1年、冷媒回路5年）。詳しくは<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>をご覧ください。
              冷媒が不足した場合の費用は<Link href="/cost/gas-refill/" className="text-sky-700 underline">ガス補充の費用</Link>に掲載しています。
            </p>
          </section>

          <section id="parts-period" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">補修用性能部品の保有期間</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              修理に使う部品（補修用性能部品）の保有期間は、確認できたメーカーではいずれも<strong>製造打ち切り後10年</strong>です（{UPDATED}確認）。
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm leading-7 text-slate-700">
              <li>パナソニック：「保有期間の始期はその製品の製造を打ち切ったときです」、エアコン10年（公式ページ・取扱説明書）</li>
              <li>三菱電機：「補修用性能部品を製造打切り後10年保有しています」（取扱説明書）</li>
              <li>日立：「エアコンの補修用性能部品の保有期間は、製造打ち切り後10年です」（取扱説明書）</li>
              <li>東芝ライフスタイル：エアコン10年（公式ページ）</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              製造から10年を超えた機種は、部品がなく修理できない場合があります。修理か買い替えかの判断は<Link href="/guide/lifespan/" className="text-sky-700 underline">エアコンの寿命</Link>と<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>をご参照ください。
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
              <li>三菱電機 取扱説明書 MSZ-HW221〜HW561S https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/k_ibim/MSZ-HWxx1-H01.pdf</li>
              <li>三菱電機 取扱説明書 MSZ-ZXVシリーズ https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/k_ibim/MSZ-ZXVxx1-H02.pdf</li>
              <li>パナソニック 取扱説明書 CS-289CY2等 https://panasonic.jp/p-db/contents/manualdl/1428383994538.pdf</li>
              <li>日立 取扱説明書 RAS-V22B等 https://kadenfan.hitachi.co.jp/support/ra/item/docs/ras_v22b_b.pdf</li>
              <li>ダイキン「エアコンのしくみと電気代の関係」https://www.daikin.co.jp/air/life/mechanism</li>
              <li>パナソニック UP LIFE「エアコンの仕組みを解説！」https://panasonic.jp/life/air/170110.html</li>
              <li>日立「エアコンのしくみを知りたいです。」https://kadenfan.hitachi.co.jp/support/ra/q_a/a19.html</li>
              <li>シャープ「ネイチャーテクノロジー エアコン」https://jp.sharp/nature/tech/aircon/</li>
              <li>鷺宮製作所「STF形 冷媒用四方切換弁」https://www.saginomiya.co.jp/auto/solenoid/t1olt00000000fmb-att/solv_jp_stfh.pdf</li>
              <li>パナソニック「補修用性能部品の保有期間」https://panasonic.jp/support/repair/warranty.html</li>
              <li>東芝ライフスタイル「補修用性能部品の保有期間」https://www.toshiba-lifestyle.com/jp/support/partslimit/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/louver-not-closing/", label: "ルーバー（風向板）が閉まらない原因" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない原因" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
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
