import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングの料金相場【2026年】大手2社の公式価格と修理との見分け方",
  description:
    "エアコンクリーニングの料金をおそうじ本舗・ダスキンの公式掲載価格で比較（壁掛けお掃除機能なし14,300円〜/お掃除機能付き24,200円〜・税込）。クリーニングで改善が見込める症状と修理が必要な症状の見分け方、天井埋め込みタイプやオプションの料金まで、すべて公式一次情報で整理します。",
  alternates: { canonical: "/cost/cleaning-fee/" },
};

const UPDATED = "2026年8月21日";

const faqs = [
  {
    q: "エアコンクリーニングの料金はいくらですか？",
    a: "大手2社の公式掲載価格（税込・2026年8月21日確認）では、壁掛けタイプ・お掃除機能なしで、おそうじ本舗14,300円（2台以上は1台12,100円）、ダスキン15,400円（2台セット25,300円）です。フィルター自動お掃除機能付きは分解に手間がかかるため、おそうじ本舗24,200円・ダスキン26,400円と1万円前後高くなります。",
  },
  {
    q: "お掃除機能付きはなぜ高いのですか？",
    a: "フィルター自動お掃除ユニットの分解・組み立てに時間がかかるためです。ダスキンは本体両側にファンがついているタイプや特殊構造タイプもお掃除機能付き料金になると公式に注記しています。自宅のエアコンがお掃除機能付きかは、リモコンの「フィルター掃除」ボタンや本体前面のユニットの有無で確認できます。",
  },
  {
    q: "クリーニングで水漏れや臭いは直りますか？",
    a: "原因が汚れなら改善が見込めます。カビ・ホコリ由来の臭い、フィルターや熱交換器の目詰まりによる風量低下・冷えの悪化、汚れの詰まりが関係する水漏れの一部はクリーニングの守備範囲です。一方、冷媒ガス漏れ・エラーコードの表示・電源が入らないなどは機器の故障であり、クリーニングでは直りません。修理業者やメーカーへの依頼が必要です。",
  },
  {
    q: "クリーニングと修理、どちらを頼むべきか分かりません。",
    a: "症状で切り分けます。「臭い・風量低下・見える範囲のカビ」はまずクリーニング、「冷えない（フィルター清掃でも改善しない）・エラー表示・動かない・異音」は修理が先です。判断に迷う場合は、症状別ページの公式FAQベースの確認手順を試すと原因の当たりがつけられます。",
  },
  {
    q: "賃貸のエアコンのクリーニング代は誰が払いますか？",
    a: "日常的な清掃（フィルター掃除など）は借主の善管注意義務の範囲とされる一方、故障の修理は原則貸主負担です（民法606条）。業者による分解洗浄を借主判断で行う場合は、備え付け設備のため事前に管理会社・大家の許可を取るのが安全です。故障が疑われる場合の手順は賃貸エアコン修理ガイドをご覧ください。",
  },
];

export default function CleaningFeePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用", href: "/cost/cleaning-fee/" },
          { name: "エアコンクリーニングの料金相場", href: "/cost/cleaning-fee/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">費用ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングの料金相場
            <br className="hidden md:block" />
            大手2社の公式価格と「修理との見分け方」
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-21">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            臭い・風量低下・カビ汚れなど「故障未満」の不調は、分解洗浄（エアコンクリーニング）で改善が見込めるケースがあります。
            この記事では<strong className="font-semibold text-slate-900">全国展開する大手2社（おそうじ本舗・ダスキン）の公式掲載価格</strong>をそのまま並べ、
            <strong className="font-semibold text-slate-900">クリーニングで直る症状と修理が必要な症状の見分け方</strong>まで整理しました（{UPDATED}確認・いずれも税込）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-800 mb-1">相場の早見（壁掛けタイプ・税込）</p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1">
              <li>・<strong>お掃除機能なし: 14,300〜15,400円</strong>（2台以上の同時依頼で1台あたり約2,000〜3,000円安くなる）</li>
              <li>・<strong>フィルター自動お掃除機能付き: 24,200〜26,400円</strong>（分解に手間がかかるため約1万円高）</li>
              <li>・<strong>天井埋め込みタイプ: 27,500〜34,100円〜</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">大手2社の公式料金表（{UPDATED}確認・税込）</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">メニュー</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">おそうじ本舗</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">ダスキン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">壁掛け・お掃除機能なし（1台）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">14,300円</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap font-semibold text-slate-900">15,400円</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">壁掛け・お掃除機能なし（複数台）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">2台以上で1台 12,100円</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">2台セット25,300円・3台目以降 1台12,650円</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">壁掛け・お掃除機能付き（1台）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">24,200円</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">26,400円</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">天井埋め込みタイプ</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">27,500円（お掃除機能付きは+8,800円）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">34,100円〜（1・2方向タイプ）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">室外機（オプション）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">+5,500円</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap">+6,600円</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">防カビ・抗菌（オプション）</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">防カビチタンコーティング +3,300円</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">抗菌コート +2,750円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※おそうじ本舗はエアコンクリーニング料金一覧、ダスキンは壁掛けタイプ（幅120cm未満）の公式ページ掲載価格（いずれも{UPDATED}確認）。
              ダスキンは幅120cm以上のお掃除機能なしが18,700円、複数台料金は同一世帯限定・土日祝や夜間は追加費用の場合ありと公式注記。
              おそうじ本舗は完全分解洗浄+8,800円などのオプションあり。最新価格・キャンペーンは各社公式サイトでご確認ください。
            </p>
          </section>

          <section id="which" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">クリーニングで直る症状・修理が必要な症状</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              当サイトは修理の情報サイトですが、<strong>「汚れが原因なら、修理を呼んでも直らない」</strong>のも事実です。
              依頼先を間違えると出張費や点検費が無駄になるため、症状で切り分けましょう。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">症状</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">まず頼むべき先</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">理由</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">カビ臭・酸っぱい臭い</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap text-emerald-700 font-semibold">クリーニング</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">内部のカビ・ホコリが主因のことが多い。<Link href="/symptom/bad-smell/" className="text-sky-600 underline underline-offset-2">臭いの症状ページ</Link>で切り分け手順を解説</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">風量低下・効きが鈍い</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap text-emerald-700 font-semibold">まずフィルター清掃→クリーニング</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">フィルターや熱交換器の目詰まりが原因のケース。清掃しても改善しなければ<Link href="/symptom/not-cooling/" className="text-sky-600 underline underline-offset-2">冷えない症状の切り分け</Link>へ</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">水漏れ</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap text-amber-700 font-semibold">切り分けが必要</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">ドレン詰まり・汚れ由来なら清掃系、排水経路の不具合なら修理。<Link href="/guide/water-leak/" className="text-sky-600 underline underline-offset-2">水漏れの確認手順</Link>参照</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">冷えない（ガス漏れ疑い）</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap text-rose-700 font-semibold">修理</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">冷媒ガスはクリーニングでは直らない。<Link href="/cost/gas-refill/" className="text-sky-600 underline underline-offset-2">ガス補充の費用相場</Link>参照</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">エラーコード・動かない・異音</td>
                    <td className="border border-slate-300 px-3 py-2 whitespace-nowrap text-rose-700 font-semibold">修理</td>
                    <td className="border border-slate-300 px-3 py-2 leading-7">機器故障の可能性が高い。<Link href="/symptom/error-code/" className="text-sky-600 underline underline-offset-2">エラーコード</Link>・<Link href="/symptom/not-starting/" className="text-sky-600 underline underline-offset-2">動かない</Link>・<Link href="/symptom/noise/" className="text-sky-600 underline underline-offset-2">異音</Link>の各ページ参照</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理費用との比較で考える</h2>
            <p className="text-sm leading-7 text-slate-700">
              クリーニング（約1.4万〜2.6万円）に対し、修理は症状によって数千円〜6万円超まで幅があります
              （例: ダイキン公式の水漏れ修理目安は壁掛け17,000〜64,000円）。
              「汚れか故障か」を先に見極めることが、結果的にいちばんの節約になります。
              修理側の実額は<Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2">修理費用の相場</Link>・
              <Link href="/cost/price-index/" className="text-sky-600 underline underline-offset-2">27社の料金インデックス</Link>にまとめています。
              また、製造から10年を超えている機種は<Link href="/guide/lifespan/" className="text-sky-600 underline underline-offset-2">寿命と買い替えの判断</Link>もあわせてご検討ください。
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
                <li>・おそうじ本舗公式「エアコンクリーニング料金一覧」（{UPDATED}確認・税込）</li>
                <li>・ダスキン公式「エアコンクリーニング（壁掛けタイプ）」価格・料金一覧（{UPDATED}確認・税込・幅120cm未満）</li>
                <li>・ダイキン公式FAQの修理目安金額（水漏れ・壁掛け17,000〜64,000円）は当サイト2026年8月19日確認値</li>
                <li>・料金は改定される場合があります。申し込み前に必ず各社公式サイトで最新価格をご確認ください。当ページは特定業者のあっせんではありません</li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/repair-price/", label: "エアコン修理費用の相場" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
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
