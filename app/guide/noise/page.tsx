import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの異音「ガガガ」など 症状別の原因と対処【2026年】",
  description:
    "エアコンから聞こえる「ガガガ」「カラカラ」「ポコポコ」「キーン」などの異音について、考えられる原因、ご自身でできる確認・対処、業者へ依頼すべき症状を、音の種類別にご説明します。安全上の注意点とよくある質問もあわせて掲載しています。",
  alternates: { canonical: "/guide/noise" },
};

const UPDATED = "2026年10月25日";

const toc = [
  { id: "summary", label: "エアコンの異音が示す状態" },
  { id: "types", label: "音の種類別の原因と対処" },
  { id: "self", label: "ご自身でできる確認・対処" },
  { id: "callpro", label: "業者へ依頼すべき症状" },
  { id: "safety", label: "安全上の注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const noises = [
  {
    sound: "ガガガ / ガタガタ",
    cause: "ファンへの異物の接触、ファンの軸ずれやモーターの劣化、室外機の固定のゆるみなどが考えられます。何かが接触している音であることが多くあります。",
    diy: "運転を止め、フィルターや吹き出し口に異物・ホコリの塊がないかを確認します。室外機が傾いていないか、周囲の物が当たっていないかもあわせて確認します。",
    when: "異物が見当たらないのに鳴り続ける場合や、振動が大きい場合は、内部部品の不具合の可能性があるため、業者へご依頼ください。",
  },
  {
    sound: "カラカラ / カタカタ",
    cause: "ファンに付着したゴミや、内部の小さな部品・ネジのゆるみ、ルーバー（風向き板）の干渉などが原因である場合があります。",
    diy: "フィルター清掃と吹き出し口の確認を行います。ルーバーが何かに引っかかっていないかもご確認ください。",
    when: "清掃しても改善しない場合や、金属がこすれるような音が続く場合は、点検をご依頼ください。",
  },
  {
    sound: "ポコポコ / ボコボコ",
    cause: "気密性の高い部屋で、ドレンホースから外気が逆流して発生することが多い音です。故障ではない場合もありますが、排水の不具合が原因となっている場合もあります。",
    diy: "換気扇を止める、窓を少し開けて気圧差を緩和するといった方法で収まる場合があります。ドレンホースの先端に逆流防止の部材を取り付ける方法もあります。",
    when: "水漏れを伴う場合や、排水が正常に行われていない様子がある場合は、ドレン関連の点検をご依頼ください。",
  },
  {
    sound: "キーン / ピーといった高い音",
    cause: "電子部品やインバーターに由来する高周波音の場合もあれば、内部部品の異常が原因の場合もあります。運転開始直後のみ鳴る場合は、正常な範囲であることもあります。",
    diy: "一度電源を切り、数分後に再運転して再現するかを確認します。常に鳴る場合や音が大きくなる場合は、その状況を記録してください。",
    when: "音が大きくなる、焦げ臭いなど他の異常を伴う場合は、すぐに運転を止めて業者へご相談ください。",
  },
];

const faqs = [
  {
    q: "エアコンの「ガガガ」という音は故障によるものですか？",
    a: "必ずしも故障とは限りません。フィルターや吹き出し口にホコリの塊や異物が当たっているだけの場合もあり、清掃で改善することがあります。一方で、ファンの軸ずれやモーターの劣化など内部部品の不具合が原因のこともあります。清掃しても改善しない場合や、振動が大きい場合は、専門業者に点検をご依頼ください。",
  },
  {
    q: "異音がする状態で使い続けても問題ありませんか？",
    a: "焦げ臭いにおい、煙、火花、急な異音の悪化、運転停止などを伴う場合は、すぐに運転を止めて使用をお控えください。それ以外でも、異音が続く場合は内部で部品が干渉・劣化している可能性があるため、早めに点検を受けることをおすすめします。",
  },
  {
    q: "自分で分解して直してもよいですか？",
    a: "おすすめしません。エアコンは電気・冷媒を扱う機器であり、無理な分解は感電・けが・故障の悪化や保証対象外となる原因になります。ご自身で行う作業はフィルター清掃や吹き出し口の目視確認など、取扱説明書の範囲にとどめ、内部の修理は専門業者へご依頼ください。",
  },
  {
    q: "ポコポコという音は放っておいても問題ありませんか？",
    a: "気密性の高い部屋でドレンホースから外気が逆流して発生する場合は、故障ではないことが多くあります。換気の調整や逆流防止部材で軽減できる場合があります。ただし、水漏れを伴う場合は排水の不具合が考えられるため、点検をご依頼ください。",
  },
  {
    q: "修理費用はどのくらいかかりますか？",
    a: "原因や交換部品によって幅があります。ダイキン公式FAQの目安では、ファンの修理は室外機21,000〜55,000円程度、室内機53,000〜75,000円程度です（税込・出張料等を含む・保証期間終了後・2026年10月25日確認）。点検・原因の調査だけであれば、ミツモア公式の相場で6,000〜9,900円です（2026年10月24日確認）。実際の金額は機種・症状・業者によって異なるため、見積もりでご確認ください。費用の詳細は費用ガイドもご覧ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンの異音「ガガガ」など 症状別の原因と対処【2026年】",
  datePublished: "2026-06-29",
  dateModified: "2026-10-25",
  author: { "@type": "Organization", name: "エアコン修理ナビ編集部" },
  publisher: { "@type": "Organization", name: "エアコン修理ナビ" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/noise" },
          { name: "エアコンの異音の原因と対処", href: "/guide/noise" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            症状別ガイド
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの異音「ガガガ」など
            <br className="hidden md:block" />
            症状別の原因と対処【2026年】
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
              alt="エアコンの異音を確認するイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンから
            <strong className="font-semibold text-slate-900">「ガガガ」「カラカラ」「ポコポコ」「キーン」</strong>
            といった異音は、種類によって考えられる原因が異なり、清掃で解消する軽度のものから、内部部品の不具合まで幅があります。本記事では、音の種類別の原因、ご自身でできる確認・対処、業者へ依頼すべき症状をご説明します。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事は一般的な知見にもとづく目安です。症状の原因は機種や状況によって異なります。焦げ臭い・煙などの異常を伴う場合はすぐに運転を止め、専門業者へご相談ください（調査時点：2026年6月）。
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
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコンの異音が示す状態</h2>
            <p className="leading-8 text-slate-700">
              エアコンの異音は、ホコリや異物の付着といった軽度の原因による場合もあれば、ファンやモーターなど内部部品の劣化・不具合を示している場合もあります。まず音の種類と、鳴る時間帯や状況（運転開始時のみか、常時か）を把握することが、原因を絞り込む手がかりになります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              清掃や設定の見直しで収まる音もありますが、改善しない場合や他の異常を伴う場合は、専門業者へ点検を依頼することをおすすめします。
            </p>
          </section>

          <section id="types" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">音の種類別の原因と対処</h2>
            <div className="space-y-5">
              {noises.map((n) => (
                <div key={n.sound} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">「{n.sound}」という音</h3>
                  <dl className="space-y-3 text-[0.95rem] leading-7">
                    <div>
                      <dt className="font-semibold text-sky-700">考えられる原因</dt>
                      <dd className="text-slate-700">{n.cause}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-700">ご自身でできる確認</dt>
                      <dd className="text-slate-700">{n.diy}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-700">業者へ依頼すべき症状</dt>
                      <dd className="text-slate-700">{n.when}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="self" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身でできる確認・対処</h2>
            <p className="leading-8 text-slate-700 mb-4">
              業者へ依頼する前に、取扱説明書の範囲で確認を行っておくと、原因の切り分けや相談が円滑になります。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>運転を止め、電源を切ってからフィルターを外して清掃します。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>吹き出し口やルーバーに異物・ホコリの塊がないか、目視で確認します。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>室外機が傾いていないか、周囲に物が当たっていないかを確認します。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>音が鳴る時間帯と音の種類を記録します（業者への説明に役立ちます）。</li>
            </ul>
          </section>

          <section id="callpro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者へ依頼すべき症状</h2>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <ul className="space-y-2 text-[0.95rem] text-slate-700 leading-7">
                <li className="flex items-start gap-2"><span>・</span><span>清掃・確認をしても異音が改善しない場合</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>金属がこすれる音や大きな振動を伴う場合</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>異音とあわせて水漏れ・冷えない・効かないなどの症状がある場合</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>焦げ臭い・煙・火花など、すぐに対応すべき異常がある場合</span></li>
              </ul>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              これらに当てはまる場合は、使用を続けず、専門業者に点検・修理をご依頼ください。
              <Link href="/symptom/noise" className="text-sky-600 underline underline-offset-2">異音の症状ページ</Link>
              もあわせてご確認いただくと、対応する業者を探しやすくなります。
            </p>
          </section>

          <section id="safety" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">安全上の注意</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>内部を無理に分解しないでください（感電・けが・故障悪化・保証外の原因になります）。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>清掃や確認の際は、必ず電源を切ってから行ってください。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>焦げ臭い・煙が出るなどの場合は、すぐに運転を止めて使用をお控えください。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>高所での作業は行わず、専門業者にご依頼ください。</li>
            </ul>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">よくある質問</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-start gap-3 font-semibold text-slate-800 list-none">
                    <span className="text-sky-600">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-slate-600 leading-7 text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="last" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">まとめ</h2>
            <p className="leading-8 text-slate-700">
              エアコンの異音は、音の種類によって原因がさまざまです。「ガガガ」「カラカラ」はファンや異物、「ポコポコ」はドレンの逆流、「キーン」は電子部品由来などが考えられます。まずはフィルター清掃や目視確認といった安全な範囲で対処し、改善しない場合や他の異常を伴う場合は、専門業者に点検をご依頼ください。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">異音が続く場合の専門業者への相談</p>
              <p className="text-sky-100 text-sm mb-5">無料見積もりで原因と費用の目安を確認できます。</p>
              <Link href="/ranking" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                修理業者ランキングを見る
              </Link>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場" },
                { href: "/symptom/noise", label: "エアコンの異音の症状ページ" },
                { href: "/company/aircon-trouble-center", label: "エアコントラブルセンターの口コミ・評判" },
                { href: "/company/denki-koujiya", label: "電気の工事屋さんの口コミ・評判" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-slate-50 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
