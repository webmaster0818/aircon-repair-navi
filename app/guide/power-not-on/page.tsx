import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの電源が入らない・動かない時の確認手順｜公式のリセット方法【2026年】",
  description:
    "エアコンの電源が入らない・運転しない時の確認手順をダイキン公式FAQベースで解説。公式のリセット方法(電源プラグ/ブレーカーを1分OFF)、すぐに風が出ないのは仕様というケース、運転ランプ点滅=エラーの確認、修理に進む前のチェックリストを整理します。",
  alternates: { canonical: "/guide/power-not-on/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "エアコンが全く動きません。最初に何を確認すればいいですか？",
    a: "まず公式のリセットを試してください。ダイキン公式FAQの手順は、①運転を停止→②電源プラグを抜くかエアコン専用ブレーカーをOFFにして1分ほど待つ→③戻す→④再運転、です(2026年9月8日確認)。一時的な制御の不具合ならこれで回復することがあります。あわせて分電盤のエアコン専用ブレーカーが落ちていないかも確認してください(ブレーカーは台所や洗面所付近の分電盤内にあることが多い、というのが公式の案内です)。",
  },
  {
    q: "運転ボタンを押しても風が出ません。故障ですか？",
    a: "すぐに風が出ないのは仕様のことがあります。ダイキン公式FAQによると、①冷房・除湿では内部にこもった臭いの放出を抑える機能で運転開始直後は風が出ない、②暖房では冷風防止のため室内機を暖めてから風を出す、③停止直後の再運転は保護のためすぐ動かない、と案内されており、3〜10分ほど待って風が出れば正常です(2026年9月8日確認)。また部屋が設定温度に達していると風が止まる(サーモオフ)ため、設定温度を大きく変えて風が出るかの確認も公式の手順です。",
  },
  {
    q: "運転ランプが点滅しています。どうすればいいですか？",
    a: "エアコンが不具合を知らせている状態です。ダイキン公式FAQでは、まず前述のリセットを試し、ランプが点灯に戻って正常に風が出れば一時的な症状として問題なし、改善しない・再び点滅する場合は不具合の可能性としてエラーコードの確認へ進む、という流れが案内されています(2026年9月8日確認)。エラーコードの意味はエラーコード一覧ガイドで確認できます。",
  },
  {
    q: "リモコンが原因かどうかは、どう切り分けますか？",
    a: "エアコン本体の[運転/停止]ボタンで動くかを確認します。本体ボタンで動くならエアコン本体は正常で、リモコン側(電池・故障)の問題の可能性が高いです。詳しくはリモコンが効かない時のガイドで応急運転の方法から解説しています。",
  },
  {
    q: "リセットしても動きません。修理費用はどのくらいかかりますか？",
    a: "電源系の不具合は基板・配線など原因の特定が必要で、自分での分解確認はできません。費用水準は部位により大きく異なるため、修理費用ガイド(メーカー公式目安+業者実額)をご覧ください。使用10年前後であれば、寿命・買い替え判断のガイドとの突き合わせもおすすめします。賃貸の備え付けエアコンなら、業者手配の前にまず管理会社・大家へ連絡してください(原則貸主負担)。",
  },
];

export default function PowerNotOnPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/power-not-on/" },
          { name: "電源が入らない", href: "/guide/power-not-on/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">症状別ガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            電源が入らない・動かない時の確認手順
            <br className="hidden md:block" />
            ——公式のリセット方法から
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-08">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「リモコンを押しても反応がない」「風が出ない」——修理を呼ぶ前に、
            <strong className="font-semibold text-slate-900">メーカーが公式FAQで案内している確認手順</strong>を一通り試す価値があります。
            実際、「すぐに運転しない」症状の一部は故障ではなく仕様です。この記事ではダイキン公式FAQをベースに、リセット→仕様の確認→エラー確認→修理判断の順で整理します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">まず公式のリセット（ダイキン公式FAQより）</p>
            <p className="text-sm leading-7 text-slate-700">
              ①運転停止 → ②<strong>電源プラグを抜く(またはエアコン専用ブレーカーOFF)で1分待つ</strong> → ③戻す → ④再運転。
              一時的な症状ならこれで回復することがあります。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">確認手順（公式FAQベース）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>リセット</strong>——上記の公式手順(プラグ/ブレーカーを1分OFF)。回復してそのまま正常に動けば一時的な症状です</li>
              <li><strong>ブレーカーの確認</strong>——分電盤のエアコン専用ブレーカーが落ちていないか。分電盤は台所・洗面所付近にあることが多い(公式FAQの案内)。メインブレーカーを切ると全電源が落ちるので注意</li>
              <li><strong>「すぐ動かない」は仕様の可能性</strong>——冷房・除湿は臭い放出を抑える機能、暖房は冷風防止の予熱、停止直後は保護制御で、運転開始から3〜10分風が出ないことがあります。待って風が出れば正常です</li>
              <li><strong>設定温度を大きく変えてみる</strong>——部屋が設定温度に達していると風が止まります(サーモオフ)。冷房なら設定を下げ、暖房なら上げて風が出れば正常</li>
              <li><strong>リモコンか本体かの切り分け</strong>——本体の[運転/停止]ボタンで動くならリモコン側の問題(<Link href="/guide/remote-not-working/" className="text-sky-700 underline">応急運転ガイド</Link>参照)</li>
              <li><strong>運転ランプの点滅を確認</strong>——点滅は不具合の知らせ。<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧</Link>で意味を確認し、改善しなければ点検・修理へ</li>
            </ol>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「運転ランプが点滅する」「すぐに運転しない」「エアコンが運転中に止まる」（{UPDATED}確認）。手順の詳細はメーカー・機種により異なります。
            </p>
          </section>

          <section id="repair" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">それでも動かない場合——修理へ進む前に</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              リセット・ブレーカー・仕様確認で改善しない場合は、基板・配線・受電系の不具合が考えられ、自分での特定はできません。
              修理費用の水準は<Link href="/cost/repair-price/" className="text-sky-700 underline">修理の実額ガイド</Link>と<Link href="/guide/repair-cost/" className="text-sky-700 underline">修理費用の相場ガイド</Link>で確認できます。
              使用年数が10年前後なら<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命・買い替え判断</Link>も併読を。
              賃貸の備え付けエアコンは原則貸主負担のため、まず管理会社へ(<Link href="/guide/rental-aircon-repair/" className="text-sky-700 underline">賃貸の負担区分ガイド</Link>)。
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

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/remote-not-working/", label: "リモコンが効かない時の応急運転" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない時の見分け方" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の相場" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸エアコンの修理は誰の負担？" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
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
