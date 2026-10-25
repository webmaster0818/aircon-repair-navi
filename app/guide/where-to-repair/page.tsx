import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコン修理はどこに頼む？メーカー・量販店・修理業者の使い分けフローチャート【2026年】",
  description:
    "エアコンが故障した際に、メーカー・購入した量販店・修理業者のいずれに依頼すべきかを、3段階のフローチャートでご説明します。保証期間（本体1年・冷媒回路5年）、量販店の長期保証、部品保有期間10年について、メーカー公式の情報にもとづいて掲載しています。主要6社の修理受付窓口の一覧も掲載しています。",
  alternates: { canonical: "/guide/where-to-repair/" },
};

const UPDATED = "2026年10月25日";

const toc = [
  { id: "summary", label: "依頼先を決める3つの質問" },
  { id: "flow", label: "依頼先フローチャート" },
  { id: "maker", label: "①メーカーへの依頼が適している場合" },
  { id: "shop", label: "②購入店（量販店）への依頼が適している場合" },
  { id: "vendor", label: "③修理業者への依頼が適している場合" },
  { id: "contacts", label: "主要メーカー修理窓口一覧" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ・出典" },
];

const makers = [
  {
    name: "ダイキン",
    phone: "0120-88-1081（ダイキンコンタクトセンター）",
    web: "Web修理申込あり",
    note: "受付は24時間365日",
    url: "https://www.daikin.co.jp/contact/consumer",
  },
  {
    name: "パナソニック",
    phone: "0120-878-554（フリーダイヤルに接続できない場合: 03-6633-6700・有料）",
    web: "Web出張修理申込あり",
    note: "9:00〜18:00・年中無休",
    url: "https://panasonic.jp/aircon/support.html",
  },
  {
    name: "三菱電機",
    phone: "お客さま相談センター 0120-139-365",
    web: "WEBフォーム受付あり（三菱電機システムサービス）",
    note: "相談センターは平日9:00〜19:00",
    url: "https://www.mitsubishielectric.co.jp/ldg/repair/",
  },
  {
    name: "日立",
    phone: "0120-3121-68（携帯: 0570-0031-68）",
    web: "Web修理申込あり",
    note: "月〜土9:00〜18:00・日祝9:00〜17:00（時間外は自動音声）",
    url: "https://kadenfan.hitachi.co.jp/support/inquiry/repair/consultation.html",
  },
  {
    name: "シャープ",
    phone: "0120-02-4649（携帯: 0570-550-447）",
    web: "Web修理申込は24時間受付",
    note: "月〜土9:00〜18:00・日祝9:00〜17:00",
    url: "https://jp.sharp/support/rp_4649.html",
  },
  {
    name: "東芝",
    phone: "0120-1048-76（有料回線: 0570-0570-33）",
    web: "Web受付あり（ルームエアコン対象）",
    note: "月〜土9:00〜18:00・日祝9:00〜17:00",
    url: "https://www.toshiba-lifestyle.com/jp/support/contact-onsite/",
  },
];

const faqs = [
  {
    q: "エアコンが故障した場合、まずどこに連絡すればよいですか？",
    a: "連絡先の順番は、①賃貸の備え付けエアコンであれば管理会社・大家、②購入から1年以内（冷媒回路の故障は5年以内が目安）であればメーカー、③量販店の長期保証に加入していれば購入店、④いずれにも当てはまらない場合や急ぎの場合は修理業者、です。保証が適用されれば無料または低い費用で修理できる可能性があるため、有償の修理業者への依頼は保証を確認した後にご検討ください。",
  },
  {
    q: "メーカー保証は何年ですか？",
    a: "ダイキン・パナソニックの公式情報では、エアコン本体の保証は購入から1年、冷媒系統（圧縮機・熱交換器など冷媒が循環する部分）は5年です。冷えない故障はガス漏れなど冷媒系統が原因である場合があり、購入から5年以内であれば無償修理の対象となる可能性があります。他のメーカーも保証書に同様の区分を設けていることが多いため、まず保証書をご確認ください。",
  },
  {
    q: "量販店の長期保証とはどういうものですか？",
    a: "たとえばヤマダデンキの無料長期保証は、税込33,000円以上のエアコンの購入時に加入でき、4年間・6年間・11年間から期間を選択する仕組みです（3年目までは技術工料・部品代・出張料を保証し、4年目以降は技術工料のみを保証するなどの条件があります）。加入は購入時に限られるため、故障後に加入することはできません。保証書やレシート、購入店の会員ページで加入状況をご確認ください。",
  },
  {
    q: "製造から10年以上が経過したエアコンでも修理できますか？",
    a: "ダイキン・パナソニックは補修用性能部品の保有期間を製造打切り後10年と公式に案内しています。この期間を過ぎると、部品の在庫がなく修理自体ができない場合があります。使用10年を超えるエアコンは、修理費と買い替え費用を比較してご判断ください。判断基準は、当サイトの「修理と買い替えの判断基準」のページでご説明しています。",
  },
  {
    q: "当日中に修理したい場合はどうすればよいですか？",
    a: "メーカーや量販店の修理は受付から訪問まで日数がかかることがあり、特に7〜8月の繁忙期は訪問までに日数がかかる場合があります。即日対応を掲げる修理業者に朝の早い時間帯に連絡し、症状と総額の見積もりを確認したうえで依頼する方法が有効です。当サイトの即日対応ランキングでは、24時間受付の業者を比較できます。",
  },
];

export default function WhereToRepairPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/where-to-repair/" },
          { name: "エアコン修理はどこに頼む？", href: "/guide/where-to-repair/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">依頼先ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコン修理はどこに頼む？
            <br className="hidden md:block" />
            メーカー・量販店・修理業者の選び方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-25">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-c.jpg"
              alt="エアコン修理の依頼先を選ぶイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが故障した際は、<strong className="font-semibold text-slate-900">メーカー・購入した量販店・修理業者のいずれに依頼するかによって、費用と日数が大きく異なります</strong>。
            確認の順番を誤ると、保証により無料で修理できた故障を有償で修理してしまう場合があります。
            本記事では、適切な依頼先の決め方を3段階のフローチャートでご説明します（保証・窓口の情報は各社公式サイトで{UPDATED}に確認）。
          </p>
        </div>

        <nav aria-label="目次" className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-bold text-slate-700 mb-3 tracking-wide">目次</p>
            <ol className="space-y-2 text-[0.95rem] text-slate-700">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-sky-600 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${t.id}`} className="hover:text-sky-700 hover:underline underline-offset-4">{t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          {/* 要点 */}
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">3つの質問による依頼先の決め方</h2>
            <p className="leading-8 text-slate-700">
              依頼先は、<strong className="font-semibold">「賃貸か」「保証が残っているか」「急ぎか」</strong>の3点で決まります。
              賃貸の備え付けエアコンの場合は、まず管理会社へご連絡ください（<Link href="/guide/rental-aircon-repair/" className="text-sky-600 underline underline-offset-2 font-semibold">費用負担の解説</Link>）。
              持ち家・自己所有の場合は、保証、購入店、修理業者の順に確認することをおすすめします。
            </p>
          </section>

          {/* フローチャート */}
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼先フローチャート</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Q1. 賃貸の備え付けエアコンですか？",
                  yes: "→ まず管理会社・大家へ連絡（原則として大家の負担）",
                  yesHref: "/guide/rental-aircon-repair/",
                  no: "NOなら次の質問へ",
                },
                {
                  q: "Q2. 購入から1年以内ですか？（冷えない故障は5年以内も対象となる可能性あり）",
                  yes: "→ メーカー保証により無償修理となる可能性あり。メーカー窓口へ連絡",
                  yesHref: "#maker",
                  no: "NOなら次の質問へ",
                },
                {
                  q: "Q3. 量販店の長期保証（期間は販売店・プランにより異なります）に加入していますか？",
                  yes: "→ 購入した量販店の保証窓口へ連絡",
                  yesHref: "#shop",
                  no: "NOなら修理業者へ依頼（即日対応も可能）",
                },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-bold text-slate-900">{s.q}</p>
                  <div className="mt-2 flex flex-col gap-1 text-sm leading-7">
                    <a href={s.yesHref} className="text-sky-700 font-semibold hover:underline">
                      YES {s.yes}
                    </a>
                    <span className="text-slate-500">NO {s.no.replace("NOなら", "→ ")}</span>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-5 text-sm leading-7">
                <p className="font-bold text-orange-700 mb-1">例外：当日中に修理したい場合</p>
                <p>
                  保証が残っている場合でも、メーカー・量販店の訪問は繁忙期に日数がかかることがあります。猛暑で待つことが難しい場合は、
                  <Link href="/ranking/fast" className="text-sky-700 underline underline-offset-2 font-semibold">即日対応の修理業者</Link>
                  への相談をご検討ください（有償での対応となる点にご留意ください）。
                </p>
              </div>
            </div>
          </section>

          {/* メーカー */}
          <section id="maker" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">①メーカーへの依頼が適している場合</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                <strong className="font-semibold">購入から1年以内は本体のメーカー保証期間</strong>であるため、まずメーカーへご連絡ください。さらに重要なのが、
                <strong className="font-semibold">冷媒系統（冷媒回路）の5年保証</strong>です。
                ダイキンは「ルームエアコン本体: 1年間／冷媒系統: 5年間」（冷媒系統＝現地配管を除く圧縮機、熱交換器および室内・室外ユニットの内配管）、
                パナソニックも本体1年・冷媒循環回路部品5年と公式に案内しています。
              </p>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 text-sm leading-7">
                <p className="font-bold text-sky-800 mb-1">「冷えない」故障は5年保証の対象となる可能性があります</p>
                <p>
                  ガス漏れ・コンプレッサー不良など「冷えない」故障は冷媒系統が原因である場合があり、
                  <strong>購入から5年以内であれば無償修理となる可能性</strong>があります。有償の業者へ依頼する前に、保証書と購入日をご確認ください。
                </p>
              </div>
              <p>
                また、メーカーには<strong className="font-semibold">補修用性能部品の保有期間</strong>があり、ダイキン・パナソニックとも
                エアコンは<strong className="font-semibold">製造打切り後10年</strong>と公式に案内しています。
                製造から10年を超えた機種は部品の在庫がなく修理できない場合があるため、
                <Link href="/cost/replace-vs-repair/" className="text-sky-600 underline underline-offset-2 font-semibold">買い替えとの比較</Link>もご検討ください。
              </p>
            </div>
          </section>

          {/* 量販店 */}
          <section id="shop" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">②購入店（量販店）への依頼が適している場合</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                量販店の長期保証に加入している場合は、メーカー保証が終了していても、購入店経由で費用を抑えて修理できる可能性があります。
                たとえば<strong className="font-semibold">ヤマダデンキの無料長期保証</strong>は、税込33,000円以上のエアコンが対象で、
                <strong className="font-semibold">4年間・6年間・11年間から選択</strong>する仕組みです（公式の保証規定では、3年目までは技術工料・部品代・出張料が保証され、4年目以降は技術工料のみが保証されるなどの条件があります。加入は商品の購入と同時に限られます）。
              </p>
              <p>
                ケーズデンキ・ビックカメラ・ヨドバシカメラ・エディオンなど他の量販店にも長期保証制度がありますが、
                年数・条件は各社異なります（各社公式サイトでご確認ください）。
                まず<strong className="font-semibold">購入店を確認し、レシート・保証書・会員アプリで加入状況をご確認ください</strong>。
              </p>
              <p className="text-sm leading-7 text-slate-500">
                関連レビュー: <Link href="/company/yamada-repair/" className="text-sky-600 underline underline-offset-2">ヤマダデンキの出張修理</Link> / <Link href="/company/ksdenki-repair/" className="text-sky-600 underline underline-offset-2">ケーズデンキの修理</Link>
              </p>
            </div>
          </section>

          {/* 修理業者 */}
          <section id="vendor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">③修理業者への依頼が適している場合</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>次のいずれかに当てはまる場合は、修理業者への依頼が適しています。</p>
              <ul className="space-y-2 text-[0.95rem] leading-7 list-disc pl-5">
                <li><strong>保証期間がすべて終了している場合</strong>（購入から1年超・長期保証なし）</li>
                <li><strong>当日・翌日中の修理を希望する場合</strong>（メーカーの訪問待ちが長い繁忙期）</li>
                <li><strong>メーカーに部品がなく修理を受け付けてもらえなかった場合</strong>（製造打切り後10年超。買い替えもあわせて比較）</li>
                <li><strong>ご自身で設置した中古品・譲り受けた製品</strong>で、購入店に依頼できない場合</li>
              </ul>
              <p>
                修理業者は料金体系・対応スピードがさまざまです。国民生活センターが2026年6月に注意喚起したとおり、
                ネット広告の「安い」「即日」という表示のみで選ばず、<strong className="font-semibold">作業前に総額の見積もりを書面で確認</strong>してください。
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">修理業者の比較</p>
              <p className="text-sky-100 text-sm mb-5">料金・口コミ・対応スピードを、確認日を記載して比較しています。</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                  総合ランキングを見る
                </Link>
                <Link href="/ranking/fast" className="inline-block rounded-full border-2 border-white px-7 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  即日対応の業者を見る
                </Link>
              </div>
            </div>
          </section>

          {/* メーカー窓口 */}
          <section id="contacts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">主要メーカー修理窓口一覧（{UPDATED}確認）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メーカー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">電話窓口</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">Web受付</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">受付時間</th>
                  </tr>
                </thead>
                <tbody>
                  {makers.map((m) => (
                    <tr key={m.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">
                        <a href={m.url} target="_blank" rel="noopener" className="text-sky-600 hover:underline">{m.name}</a>
                      </td>
                      <td className="border border-slate-300 px-3 py-2">{m.phone}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">{m.web}</td>
                      <td className="border border-slate-300 px-3 py-2">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※各社公式サイトの{UPDATED}時点の掲載情報です。ダイキンの電話番号は2026年10月17日に公式の問い合わせページ（daikincc.com）で確認しました。三菱電機は修理専用番号の掲載が確認できなかったため、お客さま相談センターの番号を記載しています。電話番号のかけ間違いにご注意ください。
            </p>
          </section>

          {/* FAQ */}
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

          {/* 要点・出典 */}
          <section id="last" className="scroll-mt-24 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ・出典</h2>
            <ul className="space-y-2 text-[0.95rem] leading-7 text-slate-700 list-disc pl-5">
              <li>依頼先の順番は、<strong>賃貸→管理会社／保証期間内→メーカー／長期保証→購入店／それ以外・急ぎ→修理業者</strong>です。</li>
              <li>本体の保証が1年でも、<strong>冷媒系統は5年保証</strong>です（ダイキン・パナソニック公式）。「冷えない」故障の場合は保証の適用をご確認ください。</li>
              <li>部品の保有期間は<strong>製造打切り後10年</strong>です。10年を超える機種は、買い替えと比較してご検討ください。</li>
              <li>修理業者へは、<strong>総額の見積もりを書面</strong>で確認してからご依頼ください。</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm leading-7 text-slate-600">
              <p className="font-bold text-slate-800 mb-2">主な出典（いずれも{UPDATED}確認）</p>
              <ul className="space-y-1">
                <li>・ダイキン公式FAQ（保証期間・冷媒系統の定義・部品保有期間）</li>
                <li>・パナソニック公式FAQ／修理サポート（保証期間・部品保有期間・修理窓口）</li>
                <li>・三菱電機／日立／シャープ／東芝 各修理受付ページ</li>
                <li>・ヤマダデンキ「無料長期保証」規定ページ</li>
                <li>・国民生活センター「エアコン修理のトラブルに注意！」（2026年6月3日公表）</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/rental-aircon-repair/", label: "賃貸のエアコン修理費の負担区分" },
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/guide/busy-season/", label: "エアコン修理の繁忙期カレンダー" },
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
