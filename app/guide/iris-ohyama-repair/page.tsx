import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "アイリスオーヤマのエアコン修理｜申し込み方法・訪問点検の費用・エラーコード一覧【2026年11月確認】",
  description:
    "アイリスオーヤマのエアコンの修理は、公式サイトの「修理料金診断」で型番と症状を選んで概算見積りを確認し、そのまま申し込めます。保証期間内でも有償と判断された場合の訪問点検費（5,500円または16,500円）、キャンセル時の費用、公式のエラーコード（E2・F0・H6・P5など）の意味をまとめました。",
  alternates: { canonical: "/guide/iris-ohyama-repair/" },
};

const UPDATED = "2026年11月24日";
const CHECKED = "2026年11月24日確認";

type Code = { code: string; mean: string; visit?: boolean };

const codes: Code[] = [
  { code: "E2", mean: "凍結保護が働いたときのお知らせ。フィルターのお手入れが案内されています。" },
  { code: "E5", mean: "過電流保護が働いたときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "E6", mean: "室内機と室外機の通信不具合。電源プラグを抜き、15分後に差し直して確認します。" },
  { code: "E8", mean: "高温保護が働いたときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "EU", mean: "加熱防止制限が働いたときのお知らせ。フィルターのお手入れが案内されています。" },
  { code: "F0", mean: "ガス漏れ、またはフィルターの汚れによる能力低下のお知らせ。お手入れで改善しない場合はガス（冷媒）漏れが考えられ、取り付けたばかりの場合は施工会社・設置会社への連絡が案内されています。" },
  { code: "F1〜F9", mean: "エアコンに過度の負荷がかからないように制御しているときのお知らせ。フィルターのお手入れが案内されています。" },
  { code: "FH", mean: "凍結防止制限が働いたときのお知らせ。フィルターのお手入れが案内されています。" },
  { code: "Fo", mean: "強制運転中のお知らせ。約25分で表示は消え、室内機本体の「運転/停止」ボタンで停止できます。" },
  { code: "H3", mean: "圧縮機の過負荷保護が働いたときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "H5", mean: "過電流保護が働いたときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "H6", mean: "室内ファンモーターの異常を検知したときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "H7", mean: "圧縮機の回転異常を検知したときのお知らせ。室外機の前の障害物の確認とフィルターのお手入れが案内されています。" },
  { code: "L3", mean: "室外機ファンモーターの異常。障害物や、冬場の雪の入り込みによる凍結の可能性があり、障害物の除去・融雪後の確認が案内されています。" },
  { code: "P5", mean: "室外機の圧縮機の過電流保護が働いたときのお知らせ。訪問修理・点検が必要とされています。", visit: true },
  { code: "PH", mean: "室外機の高電圧異常。使用電圧の確認（100V仕様の製品に誤って200Vを印加していないかなど）が案内されています。" },
  { code: "PL", mean: "室外機の低電圧異常。エアコン専用コンセントへの配線が案内されています。" },
  { code: "PU", mean: "コンデンサー充電異常。訪問修理・点検が必要とされています。", visit: true },
  { code: "U1", mean: "圧縮機の電流検出回路異常。電源プラグを抜き、15分後に差し直して確認します。" },
  { code: "U7", mean: "四方弁・膨張弁の異常。電源プラグを抜き、15分後に差し直して確認します。" },
  { code: "電源ランプ・タイマーランプの点灯・点滅", mean: "内部の通信やセンサーの不具合、保護装置が働いたときのお知らせ。フィルターのお手入れが案内されています。" },
  { code: "FC", mean: "エアフィルター・ダストボックスの設置不具合、フィルター駆動部の異常。ダストボックスを外してフィルターのお手入れをし、取り付け直して確認します。" },
  { code: "JF", mean: "Wi-Fiとアプリの通信異常。訪問修理・点検が必要とされています。", visit: true },
];

const visitCount = codes.filter((c) => c.visit).length;

const faqs = [
  {
    q: "アイリスオーヤマのエアコンの修理はどこから申し込めますか？",
    a: "アイリスオーヤマ公式サイトの「家電製品修理料金診断」で「エアコン」を選び、型番と症状などを入力すると、修理の概算見積りを確認でき、そのまま申し込めます。メールのお問い合わせフォームからも相談できます。テレビ・洗濯機・冷蔵庫・エアコンなどの大型家電は、電話またはメールで受け付けると案内されています（2026年11月24日確認）。",
  },
  {
    q: "保証期間内なら修理は無料ですか？",
    a: "アイリスオーヤマの「家電製品修理に関する注意事項」では、保証期間内であっても、設置不備・施工不備、加工・改造・修理されたもの、破損、天災、メンテナンス不足、製品に異常がない場合は有償になるとされています。保証期間内でも有償修理と判断された場合は、訪問点検のみでも5,500円または訪問出張点検費16,500円の費用が発生します。",
  },
  {
    q: "フィルターの掃除をしていないと有償になりますか？",
    a: "アイリスオーヤマのエアコンのよくあるお問い合わせでは、修理訪問時に改善策の未実施（お手入れ不足）が原因と判断した場合、無償保証期間内であっても過失故障扱い（有償修理）となることがあるとされています。エラー表示が出た場合や、暖かい風・冷たい風が出ない場合は、まずフィルターを取り外して全体を掃除するよう案内されています。",
  },
  {
    q: "延長保証に入っている場合はどこに連絡しますか？",
    a: "購入店や保証会社の延長保証を利用する場合は、必ず契約元（購入店など）に連絡するよう、アイリスオーヤマの修理の注意事項に記載されています。修理料金診断の入力画面では、延長保証の選択肢として「アイリスオーヤマ家電延長保証プラン」「アイリスプラザでご購入」「その他の延長保証」などが用意されています。",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6";

export default function IrisOhyamaRepairPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "症状別ガイド", href: "/symptom/" },
          { name: "アイリスオーヤマのエアコン修理", href: "/guide/iris-ohyama-repair/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            アイリスオーヤマのエアコン修理
            <br className="hidden md:block" />
            申し込み方法・訪問点検の費用・エラーコード一覧
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-24">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            アイリスオーヤマのエアコンの修理は、公式サイトの<strong className="font-semibold text-slate-900">「家電製品修理料金診断」で型番と症状を選んで概算見積りを確認し、そのまま申し込む</strong>方法が用意されています。
            正式な修理料金は訪問して現場を確認したうえで確定し、<strong className="font-semibold text-slate-900">保証期間内でも有償と判断された場合は訪問点検のみで5,500円または16,500円</strong>がかかります。
            本記事では、申し込みの流れと費用の決まり方、公式が公表しているエラーコードの意味をまとめています（{CHECKED}）。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">結論：修理を申し込む前に確認すること（公式の案内）</p>
            <ol className="list-decimal pl-5 text-sm leading-7 text-slate-700 space-y-1">
              <li>フィルターを取り外して全体を掃除し、室外機の前に物がないか、リモコンの電池、ブレーカーを確認します（お手入れ不足が原因の場合は保証期間内でも有償になることがあります）。</li>
              <li>エラーコードが出ている場合は、下の一覧でご自身で試せる対処を確認します。</li>
              <li>改善しない場合は、修理料金診断で型番・症状を入力して概算見積りを確認し、申し込みます。延長保証を使う場合は購入店などの契約元に連絡します。</li>
            </ol>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">修理の申し込み方法</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">Webの修理料金診断（概算見積り → 申し込み）</h3>
                <p className="text-sm leading-7 text-slate-700">
                  公式サイトの「家電製品修理料金診断」で「エアコン」を選ぶと、製品カテゴリの選択 → 製品・故障状況の確認 → お見積り結果・修理のお申し込み → 申し込み内容の確認 → 完了、の5段階で進みます。
                  入力画面では、型番・製造番号・症状・お試しになった改善策・購入店舗・購入時期・設置者・室内機と室外機の設置場所のほか、購入証明書や保証書、故障箇所の写真を求められます。
                  症状の詳細欄には、エラーコード（F0、E8など）を書く欄があらかじめ用意されています。
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  当サイトで2026年11月24日に入力画面の型番の選択肢を数えたところ、<strong>137機種</strong>が登録されていました（DKRA-2201H、IRR-2217C、IHF-2206G など）。お使いの型番が選択肢にない場合は、メールのお問い合わせフォームから相談します。
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-2">メール・AIチャット</h3>
                <p className="text-sm leading-7 text-slate-700">
                  大型家電（テレビ・洗濯機・冷蔵庫・エアコン）は電話またはメールで受け付けると案内されており、公式サイトのお問い合わせフォームから相談できます。
                  また、24時間365日のAIによる自動回答サービスが導入されています。土曜・日曜・祝日、夏季・年末年始などの休業中の受け付け分は、翌営業日以降の対応となる場合があります。
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">※出典：アイリスオーヤマ公式「家電製品修理料金診断」（irisohyama.co.jp/support/repair-fee-sim/）、「エアコン」修理の概算お見積り・お申し込み（同 repair-fee-sim-large/aircon/）、「ご相談窓口」（同 support/contact/）。{CHECKED}。当サイトで確認した範囲では、修理料金診断のページにエアコン専用の電話番号は掲載されていませんでした。</p>
          </section>

          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">訪問修理の費用の決まり方</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[480px]">
                <thead>
                  <tr>
                    <th className={th}>場面</th>
                    <th className={th}>公式の案内</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>受付後</td><td className={td}>受付順に担当者から連絡があり、訪問日の調整と概算費用の案内があります。</td></tr>
                  <tr><td className={td}>正式な修理料金</td><td className={td}>お客様宅へ訪問後、現場を確認したうえで確定します。</td></tr>
                  <tr><td className={td}>保証期間内で有償修理と判断された場合</td><td className={td}>訪問点検のみでも5,500円、または訪問出張点検費16,500円がかかります。</td></tr>
                  <tr><td className={td}>訪問後にキャンセルした場合</td><td className={td}>点検費と諸費用を負担します。</td></tr>
                  <tr><td className={td}>設置場所・環境による作業</td><td className={td}>高所作業代などは別途見積もりです。</td></tr>
                  <tr><td className={td}>離島・遠隔地</td><td className={td}>有償修理の場合、交通費の実費を負担します。</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：アイリスオーヤマ公式「家電製品修理に関する注意事項について」訪問修理（irisohyama.co.jp/support/repair-fee-sim/repair-precaution）。{CHECKED}。
              設置不備・施工不備の可能性がある場合は有償となる可能性が高いため、事前に設置業者へ問い合わせるよう案内されています。修理対応・製品交換によってメーカー保証期間は更新されません。
              アイリスオーヤマと株式会社アイリステックサービスは、2026年7月1日受付分から訪問修理料金の一部を改定しています（「修理料金改定のご案内」2026年6月22日付）。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              点検のみで費用がかかる点は他メーカーも同様です。各社の出張料・診断料は<Link href="/cost/maker-repair-fee/" className="text-sky-600 underline underline-offset-2">メーカー修理費用の比較</Link>に、修理費用の全体の目安は<Link href="/cost/repair-price/" className="text-sky-600 underline underline-offset-2">エアコン修理費用の相場</Link>にまとめています。
              取り付けから間もない不具合で施工が原因と考えられる場合は、<Link href="/guide/installation-trouble/" className="text-sky-600 underline underline-offset-2">取り付け工事のトラブルへの対処</Link>もご覧ください。
            </p>
          </section>

          <section id="codes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エラーコードの意味と公式の対処</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              アイリスオーヤマが公表しているエアコンのエラー表示は{codes.length}項目です。このうち公式に「訪問修理、点検が必要」とされているのは<strong>{visitCount}項目（P5・PU・JF）</strong>で、ほかはフィルターのお手入れ、室外機まわりの確認、電源プラグの差し直しなど、ご自身で試せる対処が案内されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr>
                    <th className={`${th} whitespace-nowrap`}>表示</th>
                    <th className={th}>公式の案内</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((c) => (
                    <tr key={c.code} className={c.visit ? "bg-rose-50/60" : undefined}>
                      <td className={`${td} font-bold text-sky-700`}>{c.code}</td>
                      <td className={td}>
                        {c.mean}
                        {c.visit && <span className="ml-1 font-semibold text-rose-700">（要訪問修理）</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典：アイリスオーヤマ公式「エアコンに関するよくあるお問い合わせ」エアコンエラーコード一覧（irisohyama.co.jp/support/faq/categori.php?ID=34）。{CHECKED}。
              「フィルターのお手入れ」は、運転を停止して電源プラグを抜き、フィルターを手入れしてしっかり乾かしてから取り付け、電源プラグを差して改善するかを確認する手順です。
            </p>
          </section>

          <section id="other" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メーカー以外に依頼する場合</h2>
            <p className="text-sm leading-7 text-slate-700">
              メーカーの訪問修理は、正式な料金が訪問後に確定する仕組みです。保証期間が過ぎていて早く直したい場合や、複数の見積もりを比べたい場合は、出張見積もりの条件を公開している修理業者に相談する方法もあります。
              当サイトでは、各社の公式サイトで確認した料金・対応エリアをもとに<Link href="/ranking/" className="text-sky-600 underline underline-offset-2">エアコン修理業者ランキング</Link>を掲載しています。依頼先の選び方は<Link href="/guide/where-to-repair/" className="text-sky-600 underline underline-offset-2">エアコン修理はどこに頼むか</Link>をご覧ください。
              ただし、アイリスオーヤマの修理の注意事項では「加工・改造・修理されたもの」は保証対象外とされていますので、メーカー保証期間内であれば、まずアイリスオーヤマにご相談ください。
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
                <li>・アイリスオーヤマ公式「家電製品修理料金診断」「エアコン」修理の概算お見積り・お申し込み</li>
                <li>・アイリスオーヤマ公式「家電製品修理に関する注意事項について」「修理料金改定のご案内」</li>
                <li>・アイリスオーヤマ公式「エアコンに関するよくあるお問い合わせ」「ご相談窓口」</li>
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
                { href: "/cost/maker-repair-fee/", label: "メーカー修理費用の比較" },
                { href: "/guide/warranty/", label: "エアコンの保証の確認方法" },
                { href: "/guide/error-code-fujitsu/", label: "富士通（ゼネラル）のランプ点滅の意味" },
                { href: "/guide/where-to-repair/", label: "エアコン修理はどこに頼むか" },
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
