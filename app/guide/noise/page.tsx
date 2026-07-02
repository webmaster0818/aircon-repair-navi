import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンの異音「ガガガ」など 症状別の原因と対処【2026年】",
  description:
    "エアコンから聞こえる「ガガガ」「カラカラ」「ポコポコ」「キーン」などの異音について、考えられる原因と自分でできる確認・対処、業者に頼むべきサインを症状別に解説。安全上の注意点とよくある質問もまとめた2026年版ガイドです。",
  alternates: { canonical: "/guide/noise" },
};

const UPDATED = "2026年6月29日";

const toc = [
  { id: "summary", label: "エアコンの異音は何のサイン？" },
  { id: "types", label: "音の種類別の原因と対処" },
  { id: "self", label: "自分でできる確認・対処" },
  { id: "callpro", label: "業者に頼むべきサイン" },
  { id: "safety", label: "安全上の注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const noises = [
  {
    sound: "ガガガ / ガタガタ",
    cause: "ファンに異物が当たっている、ファンの軸ずれやモーターの劣化、室外機の固定のゆるみなどが考えられます。何かが接触している音のことが多いです。",
    diy: "運転を止め、フィルターや吹き出し口に異物・ホコリの塊がないか確認します。室外機が傾いていたり、周りに物が当たっていないかもチェックします。",
    when: "異物が見当たらないのに鳴り続ける、振動が大きい場合は内部部品の不具合の可能性があるため業者へ。",
  },
  {
    sound: "カラカラ / カタカタ",
    cause: "ファンに付着したゴミや、内部の小さな部品・ネジのゆるみ、ルーバー（風向き板）の干渉などが原因のことがあります。",
    diy: "フィルター清掃と吹き出し口の確認を行います。ルーバーが何かに引っかかっていないかも見てみましょう。",
    when: "清掃しても改善しない、金属がこすれるような音が続く場合は点検を依頼しましょう。",
  },
  {
    sound: "ポコポコ / ボコボコ",
    cause: "気密性の高い部屋で、ドレンホースから外気が逆流して起こることが多い音です。故障ではないケースもありますが、排水の不具合が隠れていることもあります。",
    diy: "換気扇を止める、窓を少し開けて気圧差を緩和すると収まることがあります。ドレンホースの先端に逆流防止の部材を付ける方法もあります。",
    when: "水漏れを伴う、排水がうまくいっていない様子がある場合はドレン系の点検を依頼しましょう。",
  },
  {
    sound: "キーン / ピーといった高い音",
    cause: "電子部品やインバーター由来の高周波音のこともあれば、内部部品の異常が背景にあることもあります。運転開始直後だけ鳴る場合は正常な範囲のこともあります。",
    diy: "一度電源を切って数分後に再運転し、再現するか確認します。常時鳴る・大きくなる場合はメモしておきましょう。",
    when: "音が大きくなる・焦げ臭いなど他の異常を伴う場合は、すぐに運転を止めて業者へ相談してください。",
  },
];

const faqs = [
  {
    q: "エアコンの「ガガガ」という音は故障ですか？",
    a: "必ずしも故障とは限りません。フィルターや吹き出し口にホコリの塊や異物が当たっているだけのこともあり、清掃で改善する場合があります。一方で、ファンの軸ずれやモーターの劣化など内部部品の不具合が原因のこともあります。清掃しても改善しない、振動が大きい場合は専門業者に点検を依頼してください。",
  },
  {
    q: "異音がしても使い続けて大丈夫ですか？",
    a: "焦げ臭いにおい、煙、火花、急な異音の悪化、運転停止などを伴う場合は、すぐに運転を止めて使用を控えてください。それ以外でも、異音が続く場合は内部で部品が干渉・劣化している可能性があるため、早めに点検を受けることをおすすめします。",
  },
  {
    q: "自分で分解して直してもよいですか？",
    a: "おすすめしません。エアコンは電気・冷媒を扱う機器で、無理な分解は感電・けが・故障の悪化や保証外の原因になります。自分で行うのはフィルター清掃や吹き出し口の目視確認など、取扱説明書の範囲にとどめ、内部の修理は専門業者に依頼してください。",
  },
  {
    q: "ポコポコという音は放っておいても問題ありませんか？",
    a: "気密性の高い部屋でドレンホースから外気が逆流して起こる場合は、故障ではないことが多いです。換気の調整や逆流防止部材で軽減できることがあります。ただし水漏れを伴う場合は排水の不具合が考えられるため、点検を依頼しましょう。",
  },
  {
    q: "修理費用はどのくらいかかりますか？",
    a: "原因や交換部品によって幅があります。ファン系の修理は8,000〜40,000円程度、内部部品の交換が必要な場合はさらに高くなることもあります。これらは一般的な目安で、実際の金額は機種・症状・業者によって異なるため、見積もりで確認してください。費用の詳細は費用ガイドもご覧ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアコンの異音「ガガガ」など 症状別の原因と対処【2026年】",
  datePublished: "2026-06-29",
  dateModified: "2026-06-29",
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
            症状ガイド
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンの異音「ガガガ」など
            <br className="hidden md:block" />
            症状別の原因と対処【2026年】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-29">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-c.png"
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
            といった異音が聞こえると、故障では？と不安になります。異音の種類によって考えられる原因は異なり、清掃で直る軽いものから、内部部品の不具合まで幅があります。この記事では、音の種類別の原因と、自分でできる確認・対処、業者に頼むべきサインを整理しました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事は一般的な知見にもとづく目安です。症状の原因は機種や状況によって異なります。焦げ臭い・煙などの異常を伴う場合はすぐに運転を止め、専門業者に相談してください（調査時点：2026年6月）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアコンの異音は何のサイン？</h2>
            <p className="leading-8 text-slate-700">
              エアコンの異音は、ホコリや異物の付着といった軽い原因のこともあれば、ファンやモーターなど内部部品の劣化・不具合のサインのこともあります。まずは音の種類と、いつ・どんなときに鳴るか（運転開始時だけか、常時か）を把握することが、原因を絞り込む手がかりになります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              清掃や設定の見直しで収まる音もありますが、改善しない場合や他の異常を伴う場合は、無理をせず専門業者に点検を依頼するのが安全です。
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
                      <dt className="font-semibold text-sky-700">自分でできる確認</dt>
                      <dd className="text-slate-700">{n.diy}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-700">業者に頼むサイン</dt>
                      <dd className="text-slate-700">{n.when}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="self" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">自分でできる確認・対処</h2>
            <p className="leading-8 text-slate-700 mb-4">
              業者を呼ぶ前に、取扱説明書の範囲でできる確認をしておくと、原因の切り分けや相談がスムーズになります。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>運転を止め、電源を切ってからフィルターを外して清掃する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>吹き出し口やルーバーに異物・ホコリの塊がないか目視で確認する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>室外機が傾いていないか、周囲に物が当たっていないか確認する</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>いつ・どんな音が鳴るかをメモしておく（業者への説明に役立つ）</li>
            </ul>
          </section>

          <section id="callpro" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">業者に頼むべきサイン</h2>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <ul className="space-y-2 text-[0.95rem] text-slate-700 leading-7">
                <li className="flex items-start gap-2"><span>・</span><span>清掃・確認をしても異音が改善しない</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>金属がこすれる音や大きな振動を伴う</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>異音とあわせて水漏れ・冷えない・効かないなどの症状がある</span></li>
                <li className="flex items-start gap-2"><span>・</span><span>焦げ臭い・煙・火花など、すぐに対応すべき異常がある</span></li>
              </ul>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              これらに当てはまる場合は、無理に使い続けず、専門業者に点検・修理を依頼しましょう。
              <Link href="/symptom/noise" className="text-sky-600 underline underline-offset-2">異音の症状ページ</Link>
              もあわせて確認すると、対応する業者を探しやすくなります。
            </p>
          </section>

          <section id="safety" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">安全上の注意</h2>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>内部を無理に分解しない（感電・けが・故障悪化・保証外の原因になります）</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>清掃や確認の際は必ず電源を切ってから行う</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>焦げ臭い・煙が出るなどの場合はすぐに運転を止め、使用を控える</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>高所での作業は無理をせず、専門業者に任せる</li>
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
              エアコンの異音は、音の種類によって原因がさまざまです。「ガガガ」「カラカラ」はファンや異物、「ポコポコ」はドレンの逆流、「キーン」は電子部品由来などが考えられます。まずはフィルター清掃や目視確認といった安全な範囲で対処し、改善しない場合や他の異常を伴う場合は、無理をせず専門業者に点検を依頼してください。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">異音が続くときは専門業者に相談を</p>
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
                { href: "/cost/repair-price/", label: "エアコン修理の費用・料金相場【2026年】" },
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
