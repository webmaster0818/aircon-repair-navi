import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ダスキンとおそうじ本舗のエアコンクリーニング比較｜料金・作業時間・オプション・補償を公式で確認【2026年11月】",
  description:
    "ダスキンとおそうじ本舗の壁掛けエアコンクリーニングを、両社の公式ページで比較しました。1台の料金はおそうじ本舗が1,100〜2,200円安い一方、作業時間の目安はダスキンが短く、2台＋防カビ系コートの総額は両社とも30,800円で同じでした。完全分解洗浄・古い機種の扱い・補償の違いも掲載しています。",
  alternates: { canonical: "/guide/duskin-vs-osoujihonpo/" },
};

const UPDATED = "2026年11月21日";

const faqs = [
  {
    q: "ダスキンとおそうじ本舗はどちらが安いですか？",
    a: "公式の標準料金（税込）では、1台ならおそうじ本舗が安く、お掃除機能なしで14,300円（ダスキン15,400円）、お掃除機能付きで24,200円（ダスキン26,400円）です。2台では、お掃除機能なしがおそうじ本舗24,200円・ダスキン25,300円です。ただし、防カビ系のコートを2台に付けると、両社とも総額30,800円で同じになります（当サイトの計算・2026年11月21日確認）。",
  },
  {
    q: "作業時間はどちらが短いですか？",
    a: "公式の目安では、ダスキンがお掃除機能なし1〜1.5時間・お掃除機能付き1.5〜3時間、おそうじ本舗がお掃除機能なし約2時間・お掃除機能付き3〜4時間です。機種や設置状況により異なります。",
  },
  {
    q: "完全分解洗浄はどちらで頼めますか？",
    a: "おそうじ本舗はオプションで完全分解洗浄（1台8,800円、税込）を用意しています。東芝・ダイキン製は対応店舗が限られ、その場合は12,100円です。ダスキンはカバーとフィルターを外して熱交換器やファンを高圧洗浄する方式で、完全分解洗浄のメニューは公式ページにありません（2026年11月21日確認）。",
  },
  {
    q: "古いエアコンはどちらで受け付けてもらえますか？",
    a: "おそうじ本舗は製造から9年以上の機種を断る場合や保証できない場合があると明記しています。ダスキンは年数を示さず、製造後長期間経過している機種や正常に動作しないものは断る場合があるとしています。製造年を伝えて事前にご確認ください。",
  },
  {
    q: "作業後に問題があった場合の対応は違いますか？",
    a: "おそうじ本舗は責任保険に加入し、補償期間を作業後30日間としています。ダスキンは「満足の保証」として、サービスの品質が充分でなかった場合はやり直すと宣言しています。ダスキンの作業が原因の故障に関する補償の規定は、公式ページでは確認できませんでした（2026年11月21日確認）。",
  },
];

type Row = { item: string; duskin: string; osoji: string };

const rows: Row[] = [
  { item: "お掃除機能なし 1台", duskin: "15,400円", osoji: "14,300円" },
  { item: "お掃除機能なし 2台", duskin: "25,300円（2台セット）", osoji: "24,200円（2台以上は1台12,100円）" },
  { item: "お掃除機能なし 3台目以降", duskin: "1台ごと12,650円", osoji: "1台12,100円" },
  { item: "お掃除機能付き 1台", duskin: "26,400円", osoji: "24,200円" },
  { item: "お掃除機能付き 2台", duskin: "47,300円（2台セット）", osoji: "44,000円（2台以上は1台22,000円）" },
  { item: "作業時間（1台）", duskin: "機能なし1〜1.5時間／付き1.5〜3時間", osoji: "機能なし約2時間／付き3〜4時間" },
  { item: "洗浄の方法", duskin: "カバーとフィルターを外し、熱交換器やファンを高圧洗浄。部品は浴室で洗浄後、抗菌・防カビ処理", osoji: "本体カバー・フィルターなどを外して洗浄し、アルミフィン・送風ファンなどを専用機材で洗浄。防カビ剤で仕上げ" },
  { item: "防カビ系のコート", duskin: "抗菌コート 1台2,750円（約1年間持続と記載）", osoji: "防カビチタンコーティング 1台3,300円（効果期間は使用状況で異なると記載）" },
  { item: "室外機", duskin: "6,600円", osoji: "1台5,500円" },
  { item: "完全分解洗浄", duskin: "メニューなし", osoji: "オプション1台8,800円（東芝・ダイキン製は対応店舗が限られ12,100円）" },
  { item: "古い機種", duskin: "製造後長期間経過した機種は断る場合あり（年数の記載なし）", osoji: "製造から9年以上は断る場合・保証できない場合あり" },
  { item: "作業後の対応", duskin: "品質が充分でなかった場合はやり直す（満足の保証）", osoji: "責任保険に加入。補償期間は作業後30日間" },
  { item: "対応体制", duskin: "全国1,208店舗（2025年2月末時点）。フランチャイズチェーン加盟店のスタッフが訪問", osoji: "加盟店が対応。店舗により対応できない場合ありと記載" },
];

export default function DuskinVsOsoujihonpoPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/duskin-vs-osoujihonpo/" },
          { name: "ダスキンとおそうじ本舗の比較", href: "/guide/duskin-vs-osoujihonpo/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">クリーニングガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            ダスキンとおそうじ本舗の
            <br className="hidden md:block" />
            エアコンクリーニング比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-21">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            両社の公式ページを{UPDATED}に確認したところ、壁掛けエアコン1台の標準料金は<strong className="font-semibold text-slate-900">おそうじ本舗が1,100〜2,200円安く</strong>、作業時間の目安は<strong className="font-semibold text-slate-900">ダスキンが短い</strong>という違いがありました。
            完全分解洗浄を希望される場合はおそうじ本舗、作業時間を短くしたい場合や品質のやり直し保証を重視される場合はダスキンが候補になります。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">当サイトの計算：お掃除機能なし2台＋防カビ系コートの総額（税込）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>ダスキン：2台セット25,300円＋抗菌コート2,750円×2台＝<strong>30,800円</strong></li>
              <li>おそうじ本舗：12,100円×2台＋防カビチタンコーティング3,300円×2台＝<strong>30,800円</strong></li>
            </ul>
            <p className="mt-2 text-xs leading-6 text-slate-500">コートを付けない場合はおそうじ本舗が1,100円安くなります。キャンペーン・土日祝の追加料金は含めていません。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金・作業内容・条件の比較表</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              壁掛けタイプ（ダスキンは幅120cm未満）の標準料金（税込）を、各社の公式ページの記載どおりに掲載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[640px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">項目</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">ダスキン</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">おそうじ本舗</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.item}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.item}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.duskin}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.osoji}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}に両社の公式ページで確認。料金は改定されることがあります。ダスキンは土日・祝日・夜間の作業に追加費用が発生する場合があるとしています。ご依頼前に公式サイトで最新の料金をご確認ください。
            </p>
          </section>

          <section id="choose" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">目的別の選び方</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">重視する点</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">候補</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">根拠（公式の記載）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 px-3 py-2">1台の料金を抑えたい</td><td className="border border-slate-300 px-3 py-2">おそうじ本舗</td><td className="border border-slate-300 px-3 py-2 leading-6">機能なし14,300円・付き24,200円（ダスキンより1,100〜2,200円安い）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2">作業時間を短くしたい</td><td className="border border-slate-300 px-3 py-2">ダスキン</td><td className="border border-slate-300 px-3 py-2 leading-6">機能なし1〜1.5時間（おそうじ本舗は約2時間）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2">ドレンパン・送風ファンまで外して洗いたい</td><td className="border border-slate-300 px-3 py-2">おそうじ本舗</td><td className="border border-slate-300 px-3 py-2 leading-6">完全分解洗浄のオプションあり（メーカー・店舗により対応不可の場合あり）</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2">仕上がりのやり直しを重視したい</td><td className="border border-slate-300 px-3 py-2">ダスキン</td><td className="border border-slate-300 px-3 py-2 leading-6">品質が充分でなかった場合はやり直す「満足の保証」</td></tr>
                  <tr><td className="border border-slate-300 px-3 py-2">室外機もまとめて頼みたい</td><td className="border border-slate-300 px-3 py-2">おそうじ本舗</td><td className="border border-slate-300 px-3 py-2 leading-6">室外機5,500円（ダスキン6,600円）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              完全分解洗浄と通常の分解洗浄の違いは<Link href="/guide/disassembly-cleaning/" className="text-sky-700 underline">完全分解洗浄とは</Link>に、両社以外を含む料金の比較は<Link href="/guide/cheap-cleaning/" className="text-sky-700 underline">エアコンクリーニングを安く頼む方法</Link>と<Link href="/cost/cleaning-fee/" className="text-sky-700 underline">エアコンクリーニングの料金相場</Link>に掲載しています。
              ダスキンについては<Link href="/company/duskin-servicemaster/" className="text-sky-700 underline">ダスキン サービスマスターの紹介ページ</Link>もご覧ください。
            </p>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">どちらに頼む場合も確認しておきたい点</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>製造年</strong>：おそうじ本舗は製造から9年以上、ダスキンは長期間経過した機種を断る場合があります（<Link href="/guide/ten-years-no-cleaning/" className="text-sky-700 underline">古いエアコンのクリーニング</Link>）。</li>
              <li><strong>機種</strong>：本体の両側にファンがある機種などは、ダスキンではお掃除機能付きの料金になります。おそうじ本舗は床置き・ウィンドウタイプに対応していません。</li>
              <li><strong>担当店舗</strong>：どちらも地域の店舗が訪問します。日程・追加料金の有無は担当店舗に確認してください。</li>
              <li><strong>作業後の不具合</strong>：運転して異常がないかを当日中に確かめ、問題があれば早めに連絡してください（<Link href="/guide/cleaning-failure/" className="text-sky-700 underline">クリーニングの失敗を防ぐ方法</Link>）。</li>
            </ul>
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
              <li>ダスキン「エアコンクリーニング（壁掛けタイプ）」https://www.duskin.jp/servicemaster/spot/sm000010/</li>
              <li>ダスキン サービスマスター「満足の保証」https://www.duskin.jp/manzoku/servicemaster/</li>
              <li>おそうじ本舗「壁掛けタイプエアコンクリーニング」https://www.osoujihonpo.com/house-cleaning/aircon/wall/</li>
              <li>おそうじ本舗 よくあるご質問 https://www.osoujihonpo.com/house-cleaning/faq/42/ ・ https://www.osoujihonpo.com/house-cleaning/faq/53/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/company/duskin-servicemaster/", label: "ダスキン サービスマスターの紹介" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/guide/cheap-cleaning/", label: "エアコンクリーニングを安く頼む方法" },
                { href: "/guide/cleaning-failure/", label: "エアコンクリーニングの失敗を防ぐ方法" },
                { href: "/guide/ten-years-no-cleaning/", label: "エアコンを10年掃除していない場合" },
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
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
