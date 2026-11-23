import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの発火・火災の原因と予防｜NITEの事故345件の内訳と、焦げ臭い・煙が出たときの対処【2026年11月確認】",
  description:
    "エアコンの発火事故の原因と予防策を、NITE・消費者庁・メーカー公式の資料で整理しました。2021〜2025年度の事故345件のうち火災は322件。延長コード・配線の途中接続・室外機周りの可燃物など、原因別の件数と異常時の対処を掲載しています。",
  alternates: { canonical: "/guide/fire-risk/" },
};

const UPDATED = "2026年11月23日";

const faqs = [
  {
    q: "エアコンから発火することはありますか？",
    a: "あります。NITE（製品評価技術基盤機構）の2026年5月28日の公表では、2021〜2025年度の5年間に通知されたエアコンの事故345件のうち、322件が火災事故でした。ただし、原因の調査が完了した252件のうち152件（約6割）は、外部からの延焼や配線の途中接続など、製品に起因しない事故とされています。",
  },
  {
    q: "エアコンが焦げ臭い・煙が出た場合はどうすればよいですか？",
    a: "メーカー各社の取扱説明書は、すぐに運転を停止し、電源プラグを抜くかエアコン専用のブレーカーを切ったうえで、販売店またはメーカーの相談窓口に連絡するよう案内しています。炎が出ている場合は、ためらわずに119番通報してください。また、異常がある状態で運転を再開しないでください。",
  },
  {
    q: "エアコンに延長コードを使ってもよいですか？",
    a: "使わないでください。NITEは、エアコンは大電流が流れる場合があるため、延長コードやテーブルタップを使うと異常発熱し、発煙・発火するおそれがあるとしています。ダイキン・パナソニック・シャープ・日立なども、取扱説明書や公式サイトでエアコン専用のコンセントを使い、延長コードやタコ足配線をしないよう求めています。",
  },
  {
    q: "市販の洗浄スプレーで内部を掃除すると発火するおそれがありますか？",
    a: "NITEは、洗浄剤が電気部品に付着するとトラッキング現象が起き、発煙・発火するおそれがあるとしています。2019〜2023年度のエアコン事故では、洗浄剤の付着が原因とされたものが10件ありました。三菱電機・シャープ・日立なども、ご自身での内部洗浄や市販の洗浄スプレーの使用を控えるよう案内しています。",
  },
  {
    q: "使っているエアコンがリコール対象か調べる方法はありますか？",
    a: "消費者庁リコール情報サイト、経済産業省のリコール情報、NITEの事故情報検索（SAFE-Lite）で、製品名やメーカー名から調べられます。室内機の銘板に記載された型番を手元に用意して検索してください。",
  },
];

const causeRows = [
  { cause: "外部からの延焼など（室外機の周りの可燃物・収れんなど）", n: "117件" },
  { cause: "ポンプダウン作業中にコンプレッサーへ空気が混入して破裂", n: "9件" },
  { cause: "室内機と室外機をつなぐ内外連絡線の途中接続部から発火", n: "7件" },
  { cause: "電源コードの継ぎ足し（ねじり）接続部から発火", n: "6件" },
  { cause: "小動物が室外機に入り込み、基板から発火", n: "2件" },
  { cause: "洗浄剤の付着で室内機の電気部品から発火", n: "1件" },
];

const checkRows = [
  { item: "電源", point: "エアコン専用のコンセントに直接差す。延長コード・テーブルタップ・タコ足配線は使わない", src: "NITE・ダイキン・パナソニック・シャープ・日立" },
  { item: "配線", point: "電源コードや内外連絡線を途中でつながない。工事は専門の業者に依頼する", src: "NITE・ダイキン" },
  { item: "室外機の周り", point: "燃えやすい物を置かない。水の入ったペットボトルなど、日光を集める物も置かない", src: "NITE" },
  { item: "内部の掃除", point: "ご自身での内部洗浄・市販の洗浄スプレー・可燃性スプレーの吹きかけを控える", src: "NITE・ダイキン・三菱電機・シャープ・日立" },
  { item: "シーズン前の試運転", point: "最低温度の冷房で10分、続けて30分運転し、焦げ臭いにおいなどの異常がないか確認する", src: "NITE" },
  { item: "リコール", point: "型番で対象かどうかを確認する", src: "NITE・消費者庁" },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-7 align-top";

export default function FireRiskPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状から探す", href: "/symptom/" },
          { name: "エアコンの発火・火災の原因と予防", href: "/guide/fire-risk/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの発火・火災の原因と予防
            <br className="hidden md:block" />
            公的機関の事故データと異常時の対処
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンの事故の多くは火災です。NITEの集計では、<strong className="font-semibold text-slate-900">2021〜2025年度のエアコンの事故345件のうち322件が火災</strong>でした。
            一方で、原因が判明したものの約6割は<strong className="font-semibold text-slate-900">室外機の周りの可燃物からの延焼や、延長コード・配線の途中接続など、使い方や工事に関わる事故</strong>です。
            本記事では、当サイトが{UPDATED}にNITE・消費者庁・メーカー各社の公式資料を確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
            <p className="font-bold text-rose-900 mb-2">焦げ臭い・煙が出たとき（メーカー各社の取扱説明書より）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li><strong>すぐに運転を停止</strong>する</li>
              <li><strong>電源プラグを抜く</strong>か、<strong>エアコン専用のブレーカーを切る</strong></li>
              <li><strong>販売店またはメーカーの相談窓口に連絡</strong>する（運転は再開しない）</li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-600">※炎が出ている場合は、ためらわずに119番通報してください。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="data" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">NITEが公表しているエアコン事故の件数</h2>
            <p className="text-sm leading-7 text-slate-700">
              NITE（製品評価技術基盤機構）は2026年5月28日、2021〜2025年度の5年間に通知されたエアコンの事故が345件（室外機199件・室内機146件）あり、そのうち322件が火災事故だったと公表しました。年度別の火災事故は64件・72件・59件・71件・56件で、毎年50件を超えています。
              被害は死亡5件（7人）、重傷3件、軽傷22件（30人）です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 mb-4">
              原因の調査が完了した252件のうち、152件（約6割）は「製品に起因しない事故」とされています。その内訳は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr>
                    <th className={th}>製品に起因しない事故の原因</th>
                    <th className={`${th} whitespace-nowrap`}>件数</th>
                  </tr>
                </thead>
                <tbody>
                  {causeRows.map((r) => (
                    <tr key={r.cause}>
                      <td className={td}>{r.cause}</td>
                      <td className={`${td} whitespace-nowrap font-semibold`}>{r.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※NITE「ひと手間で！事故も熱中症も未然防止！」（2026年5月28日公表）の表2より。2021〜2025年度の合計152件の内訳です。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              NITEが2024年5月30日に公表した資料では、2019〜2023年度のエアコン事故340件のうち、製造から10年以上たった製品の事故が190件でした。同資料の「製品に起因しない事故」には、洗浄剤の付着10件、可燃性ガスを含むスプレーの噴射2件も含まれています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              東京消防庁の「火災の実態」（令和8年版）では、2025年中に東京消防庁管内で発生した電気設備機器による火災2,184件のうち、「冷暖房機」は26件でした（エアコン以外の冷暖房機も含む区分です）。
            </p>
          </section>

          <section id="cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">公表されている事故の例</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>電源コードの継ぎ足し</strong>（2024年2月・東京都）：電源コードをねじって継ぎ足した接続部が接触不良を起こして出火し、2名が軽傷を負いました（NITE）</li>
              <li><strong>室外機の上のペットボトル</strong>（2022年12月・宮城県）：室外機の上に置いた水入りのペットボトルが日光を集め（収れん）、室外機カバーのシートに着火した可能性があるとされています（NITE）</li>
              <li><strong>洗浄剤の付着</strong>（2021年8月・秋田県）：洗浄剤がファンモーターのコネクターに付着して発火しました（NITE）</li>
              <li><strong>長期使用の室外機</strong>：消費者庁は2026年3月31日、35年以上使われた室外機が焼損した重大製品事故を公表しています（原因は調査中）</li>
            </ul>
          </section>

          <section id="prevent" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">発火を防ぐための確認項目</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">NITEとメーカー各社の公式資料で挙げられている予防策を、当サイトで項目ごとにまとめました。</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>項目</th>
                    <th className={th}>確認すること</th>
                    <th className={th}>記載している機関・メーカー</th>
                  </tr>
                </thead>
                <tbody>
                  {checkRows.map((r) => (
                    <tr key={r.item}>
                      <td className={`${td} font-semibold whitespace-nowrap`}>{r.item}</td>
                      <td className={td}>{r.point}</td>
                      <td className={`${td} text-xs leading-6`}>{r.src}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              NITEは延長コードについて「エアコンは大電流が流れる場合があるため、延長コードやテーブルタップなどを用いると異常発熱し、発煙・発火するおそれ」があるとしています。また、洗浄剤が電気部品に付着すると、付着物を伝って電気が流れて発熱するトラッキング現象が起きるおそれがあるとしています。
              内部の掃除は、メーカーが案内するフィルター掃除などの範囲にとどめ、それ以上は専門の業者に依頼してください。ご自身でできる範囲は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>に掲載しています。
            </p>
          </section>

          <section id="signs" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">点検を依頼したほうがよい異常のサイン</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">消費者庁は、長期使用製品の異常のサインとして次のものを挙げています。</p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>電源コードやプラグが異常に熱い、プラグが変色している</li>
              <li>ブレーカーが頻繁に落ちる</li>
              <li>焦げくさいにおいがする</li>
              <li>室内機から水が漏れる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              このような場合は、電源スイッチを切り、コンセントから電源プラグを抜いて、販売店またはメーカーに相談するよう案内されています。メーカーの保証期間内であれば無料で修理できる場合があります（<Link href="/guide/warranty/" className="text-sky-700 underline">エアコンの保証期間</Link>）。
              焦げ臭さ以外のにおいの原因は<Link href="/guide/smell/" className="text-sky-700 underline">エアコンから変な臭いがする原因</Link>をご覧ください。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              配線の途中接続や延長コードの使用が見つかった場合は、専用回路・専用コンセントの工事が必要になることがあります。経済産業省は、家庭用エアコンの設置・修理の作業によっては電気工事士の資格が必要としています。工事を伴う修理は、エアコン工事に対応する業者にご依頼ください（<Link href="/ranking/" className="text-sky-700 underline">修理業者の比較</Link>）。
            </p>
          </section>

          <section id="recall" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">リコール対象かを調べる方法</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>消費者庁リコール情報サイト</strong>：キーワードで検索でき、メールでの通知にも登録できます</li>
              <li><strong>経済産業省 リコール情報</strong>：2007年5月14日以降のリコールが製品別に掲載されています</li>
              <li><strong>NITE SAFE-Lite</strong>：製品名から事故情報とリコール情報を検索できます</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              検索には室内機の銘板に記載された型番を使います。製造からの年数が長い場合は、<Link href="/guide/lifespan/" className="text-sky-700 underline">エアコンの寿命</Link>と<Link href="/cost/replace-vs-repair/" className="text-sky-700 underline">修理と買い替えの判断基準</Link>もあわせてご確認ください。
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
              <li>NITE「ひと手間で！事故も熱中症も未然防止！」（2026年5月28日）https://www.nite.go.jp/jiko/chuikanki/press/2026fy/prs260528.html ／ https://www.nite.go.jp/data/000161571.pdf</li>
              <li>NITE「古いエアコン・扇風機の事故に注意」（2024年5月30日）https://www.nite.go.jp/data/000154234.pdf</li>
              <li>東京消防庁「令和8年版 火災の実態」第3章 https://www.tfd.metro.tokyo.lg.jp/content/000114678.pdf</li>
              <li>消費者庁 重大製品事故の公表（2026年3月31日）https://www.caa.go.jp/notice/assets/consumer_safety_cms202_260331_01.pdf</li>
              <li>パナソニック 取扱説明書（CS-SX229A ほか）https://panasonic.jp/p-db/contents/manualdl/1428051979611.pdf</li>
              <li>ダイキン 取扱説明書（ATC22ASE5 ほか・図番 3P788233-4）</li>
              <li>三菱電機 ご自身での内部洗浄についての注意 https://www.mitsubishielectric.co.jp/home/kirigamine/special/pdf/caution_self_cleaning_202201.pdf</li>
              <li>シャープ エアコンを安全にお使いいただくために https://jp.sharp/support/safety/air-con.html</li>
              <li>日立 エアコンのよくあるご質問 https://kadenfan.hitachi.co.jp/support/ra/q_a/post-25.html</li>
              <li>消費者庁リコール情報サイト https://www.recall.caa.go.jp/</li>
              <li>経済産業省 リコール情報 https://www.meti.go.jp/product_safety/recall/index.html</li>
              <li>NITE SAFE-Lite https://www.nite.go.jp/jiko/jikojohou/safe-lite.html</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/smell/", label: "エアコンから変な臭いがする原因" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
                { href: "/guide/fire-insurance/", label: "エアコンの故障と火災保険" },
                { href: "/guide/installation-trouble/", label: "取り付け工事のトラブルの対処" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
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
