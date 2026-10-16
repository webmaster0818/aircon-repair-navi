import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの電源が入らない・動かない場合の確認手順｜公式のリセット方法【2026年】",
  description:
    "エアコンの電源が入らない・運転しない場合の確認手順を、ダイキン公式FAQにもとづいてご説明します。公式のリセット方法（電源プラグまたはブレーカーを1分OFF）、すぐに風が出ないのが仕様である場合、運転ランプ点滅時のエラー確認、修理を依頼する前の確認事項を掲載しています。",
  alternates: { canonical: "/guide/power-not-on/" },
};

const UPDATED = "2026年9月8日";

const faqs = [
  {
    q: "エアコンがまったく動かない場合、最初に何を確認すればよいですか？",
    a: "まず公式のリセットをお試しください。ダイキン公式FAQの手順は、①運転を停止する、②電源プラグを抜くかエアコン専用ブレーカーをOFFにして1分ほど待つ、③元に戻す、④再運転する、の4段階です（2026年9月8日確認）。一時的な制御の不具合であれば、この操作で回復する場合があります。あわせて、分電盤のエアコン専用ブレーカーが落ちていないかもご確認ください（公式FAQでは、分電盤は台所や洗面所付近にあることが多いと案内されています）。",
  },
  {
    q: "運転ボタンを押しても風が出ない場合は故障ですか？",
    a: "すぐに風が出ないのは仕様による場合があります。ダイキン公式FAQでは、①冷房・除湿では内部にこもった臭いの放出を抑える機能により運転開始直後は風が出ない、②暖房では冷風防止のため室内機を暖めてから風を出す、③停止直後の再運転は保護制御によりすぐには動かない、と案内されています。3〜10分ほど待って風が出れば正常です（2026年9月8日確認）。また、部屋が設定温度に達していると風が止まる（サーモオフ）ため、設定温度を大きく変えて風が出るかを確認することも公式の手順に含まれています。",
  },
  {
    q: "運転ランプが点滅している場合はどうすればよいですか？",
    a: "エアコンが不具合を知らせている状態です。ダイキン公式FAQでは、まず前述のリセットを行い、ランプが点灯に戻って正常に風が出れば一時的な症状として問題はなく、改善しない場合や再び点滅する場合は不具合の可能性があるためエラーコードを確認する、という流れが案内されています（2026年9月8日確認）。エラーコードの意味は、エラーコード一覧のガイドでご確認いただけます。",
  },
  {
    q: "リモコンが原因かどうかは、どのように判断できますか？",
    a: "エアコン本体の［運転/停止］ボタンで動くかを確認します。本体のボタンで動く場合はエアコン本体は正常で、リモコン側（電池切れ・故障）に原因がある可能性が高いと考えられます。詳しくは、リモコンが効かない場合のガイドで応急運転の方法からご説明しています。",
  },
  {
    q: "リセットしても動かない場合、修理費用はどのくらいかかりますか？",
    a: "電源系の不具合は基板・配線などの原因特定が必要であり、ご自身で分解して確認することはできません。費用は部位によって大きく異なるため、修理費用のガイド（メーカー公式の目安と業者の実額）をご覧ください。使用年数が10年前後の場合は、寿命・買い替え判断のガイドもあわせてご確認いただくことをおすすめします。賃貸の備え付けエアコンの場合は原則として貸主の負担となるため、業者を手配する前に管理会社・大家へご連絡ください。",
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
            電源が入らない・動かない場合の確認手順
            <br className="hidden md:block" />
            公式のリセット方法から修理判断まで
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-09-08">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            「リモコンを押しても反応がない」「風が出ない」といった場合は、修理を依頼する前に
            <strong className="font-semibold text-slate-900">メーカーが公式FAQで案内している確認手順</strong>をお試しください。
            「すぐに運転しない」症状の一部は、故障ではなく仕様によるものです。本記事ではダイキン公式FAQにもとづき、リセット、仕様の確認、エラーの確認、修理の判断の順にご説明します（{UPDATED}確認）。
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
            <p className="font-bold text-amber-800 mb-1">最初に行う公式のリセット（ダイキン公式FAQより）</p>
            <p className="text-sm leading-7 text-slate-700">
              ①運転を停止する → ②<strong>電源プラグを抜く（またはエアコン専用ブレーカーをOFFにする）して1分待つ</strong> → ③元に戻す → ④再運転する。
              一時的な症状であれば、この操作で回復する場合があります。
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="steps" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">公式FAQにもとづく確認手順</h2>
            <ol className="list-decimal pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li><strong>リセット</strong>：上記の公式手順（電源プラグまたはブレーカーを1分OFF）を行います。回復して正常に動けば、一時的な症状です。</li>
              <li><strong>ブレーカーの確認</strong>：分電盤のエアコン専用ブレーカーが落ちていないかを確認します。公式FAQでは、分電盤は台所・洗面所付近にあることが多いと案内されています。メインブレーカーを切ると住宅全体の電源が落ちるため、ご注意ください。</li>
              <li><strong>「すぐに動かない」場合の仕様の確認</strong>：冷房・除湿では臭いの放出を抑える機能、暖房では冷風防止の予熱、停止直後は保護制御により、運転開始から3〜10分ほど風が出ないことがあります。しばらく待って風が出れば正常です。</li>
              <li><strong>設定温度の変更</strong>：部屋が設定温度に達していると風が止まります（サーモオフ）。冷房では設定温度を下げ、暖房では上げて、風が出れば正常です。</li>
              <li><strong>リモコンと本体の切り分け</strong>：本体の［運転/停止］ボタンで動く場合は、リモコン側に原因があります（<Link href="/guide/remote-not-working/" className="text-sky-700 underline">応急運転ガイド</Link>をご参照ください）。</li>
              <li><strong>運転ランプの点滅の確認</strong>：点滅は不具合の知らせです。<Link href="/guide/error-code-daikin/" className="text-sky-700 underline">エラーコード一覧</Link>で意味を確認し、改善しない場合は点検・修理をご依頼ください。</li>
            </ol>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※出典: ダイキン公式FAQ「運転ランプが点滅する」「すぐに運転しない」「エアコンが運転中に止まる」（{UPDATED}確認）。手順の詳細はメーカー・機種により異なります。
            </p>
          </section>

          <section id="repair" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">改善しない場合の修理の検討</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              リセット・ブレーカー・仕様の確認で改善しない場合は、基板・配線・受電系の不具合が考えられ、ご自身で原因を特定することはできません。
              修理費用の水準は<Link href="/cost/repair-price/" className="text-sky-700 underline">修理の実額ガイド</Link>と<Link href="/guide/repair-cost/" className="text-sky-700 underline">修理費用の相場ガイド</Link>でご確認いただけます。
              使用年数が10年前後の場合は<Link href="/guide/lifespan/" className="text-sky-700 underline">寿命・買い替え判断</Link>もあわせてご覧ください。
              電源は入るものの暖房だけが効かない場合は<Link href="/guide/heating-not-working/" className="text-sky-700 underline">暖房が効かない原因ガイド</Link>をご覧ください。
              賃貸の備え付けエアコンは原則として貸主の負担となるため、まず管理会社へご連絡ください（<Link href="/guide/rental-aircon-repair/" className="text-sky-700 underline">賃貸の負担区分ガイド</Link>）。
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
                { href: "/guide/remote-not-working/", label: "リモコンが効かない場合の応急運転" },
                { href: "/guide/outdoor-unit-not-working/", label: "室外機が動かない場合の見分け方" },
                { href: "/guide/error-code-daikin/", label: "ダイキンのエラーコード一覧" },
                { href: "/guide/repair-cost/", label: "エアコン修理費用の相場" },
                { href: "/guide/rental-aircon-repair/", label: "賃貸エアコンの修理費用の負担区分" },
                { href: "/guide/lifespan/", label: "エアコンの寿命と買い替えの目安" },
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
