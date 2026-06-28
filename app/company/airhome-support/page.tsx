import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアホームの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコン修理サービス「エアホーム」の口コミ・評判をまとめました。サービスの仕組み、料金の考え方、対応エリアや依頼の流れ、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/airhome-support" },
};

const UPDATED = "2026年6月28日";

const toc = [
  { id: "summary", label: "エアホームとは" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "良い評判・選ばれるポイント" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の考え方" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "エアホームはどんなトラブルに対応していますか？",
    a: "公式サイトでは「冷えない」「水漏れ」「異音」「電源が入らない」「その他」といった、家庭で起きやすいエアコンのトラブルに対応していると案内されています。症状が当てはまるか不安な場合も、まずは電話で相談してみるとよいでしょう。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトでは全国対応を示す案内が掲載されています。運営拠点は神奈川県横浜市に置かれているため、地域によって訪問までの時間や対応の可否が変わる場合があります。お住まいの地域が対応範囲か、問い合わせ時に確認しておくと安心です。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "公式サイトには修理料金の具体的な記載がありません。エアコン修理の費用は症状や作業内容(点検・ガス補充・部品交換など)によって変わるため、訪問時に作業範囲と総額の見積もりを書面で確認してから依頼するのがおすすめです。",
  },
  {
    q: "見積もりだけでもお願いできますか？",
    a: "症状の確認や見積もりの相談は、まず電話(公式記載：050-1793-2218)で問い合わせる形になります。出張料・見積もり料の扱いについては明記がないため、相談時に確認しておきましょう。",
  },
  {
    q: "依頼してからどのくらいで来てくれますか？",
    a: "公式サイトに具体的な対応スピードの記載はありません。地域や繁忙期(真夏・真冬)の状況によって訪問までの時間は変動するため、急ぎの場合は問い合わせ時に最短の訪問可能日を確認しておくと安心です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアホームの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
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
          { name: "業者一覧", href: "/ranking" },
          { name: "エアホームの口コミ・評判", href: "/company/airhome-support" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアホームの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-06-28">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-a.png"
              alt="室内機のエアコン修理を行う作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが急に冷えなくなったり、水漏れや異音、電源が入らないといったトラブルが起きると、すぐに見てくれる修理サービスは心強い存在です。
            この記事では、エアコン修理サービス
            <strong className="font-semibold text-slate-900">エアホーム</strong>
            について、サービスの仕組みや公式に掲載されている情報、料金の考え方、依頼の流れ、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※本記事は、公式サイトに掲載されている情報をもとに作成しています。エアホームについては第三者の口コミが公開情報として限られているため、サービスの内容と一般的な確認ポイントを中心に解説します。料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください(調査時点：2026年6月)。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">エアホームとは</h2>
            <p className="leading-8 text-slate-700">
              エアホームは、家庭用エアコンの修理に対応する出張修理サービスです。公式サイトでは、「冷えない」「水漏れ」「異音」「電源が入らない」「その他」といった、エアコンで起きやすい代表的なトラブルに対応すると案内されています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              運営拠点は神奈川県横浜市にあり、公式サイトでは全国対応を示す案内が掲載されています。症状を電話で相談し、訪問のうえ修理してもらう、シンプルな依頼の流れが想定されるサービスです。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "エアホーム"],
                    ["所在地", "神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402"],
                    ["対応内容", "冷えない／水漏れ／異音／電源が入らない／その他のエアコン修理"],
                    ["対応エリア", "全国対応の案内あり(地域により訪問可否・時間が変動)"],
                    ["受付時間", "公式サイトに明記なし(電話で確認)"],
                    ["対応スピード", "公式サイトに明記なし"],
                    ["料金", "公式サイトに明記なし(要見積もり)"],
                    ["電話番号", "050-1793-2218(公式記載)"],
                    ["公式サイト", "airhomesupport.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトの掲載情報。受付時間や料金は公式に明記がなく、内容は変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">良い評判・選ばれるポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              エアホームについては、第三者サイト(口コミ投稿サイトなど)で公開されている利用者の声が限られています。そのため本記事では、口コミの数を断定するのではなく、サービスの仕組みから見える
              <strong className="font-semibold">利用しやすいポイント</strong>
              を整理しました。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>「冷えない・水漏れ・異音・電源が入らない」など、症状から相談しやすい窓口になっている</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>電話一本で症状を伝えられ、エアコン修理に絞って相談できる</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>公式サイトで全国対応を案内しており、地域を問わず問い合わせのきっかけにしやすい</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">※エアホームは第三者の口コミが公開情報として限られています。本欄は公式サイトの掲載情報をもとにした整理です。</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              エアホームに限らず、エアコンの出張修理を依頼するときは、契約前にいくつか確認しておくと安心です。エアホームの場合は、公式サイトに料金や受付時間の明記がない点をふまえ、次のポイントを押さえておきましょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>料金が公式サイトに明記されていないため、出張料・見積もり料・修理費用を事前に確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(真夏・真冬)は予約が取りにくく、訪問まで時間がかかる場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業前に、作業範囲と総額の見積もりを書面で確認してから依頼するのが安心</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>お住まいの地域が対応範囲か、訪問までの目安時間を問い合わせ時に確認しておく</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>エアコン修理に絞ったサービスで、症状から相談しやすい</li>
                  <li>代表的なトラブル(冷えない・水漏れ・異音など)に対応</li>
                  <li>公式サイトで全国対応を案内しており、問い合わせのハードルが低い</li>
                  <li>電話一本で症状を伝えられる</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>公式サイトに料金や受付時間の明記がなく、事前確認が前提</li>
                  <li>第三者の口コミが公開情報として限られている</li>
                  <li>地域や繁忙期によって訪問までの時間が変動する</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">向いている人・向いていない人</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>冷えない・水漏れなど、症状から気軽に相談先を探したい人</li>
                  <li>まず電話で症状を伝えて、対応可否や見積もりを聞いてみたい人</li>
                  <li>エアコン修理に絞って相談したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>申し込み前にWeb上で料金を細かく比較してから選びたい人</li>
                  <li>口コミ件数の多さを重視して業者を選びたい人</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の考え方</h2>
            <p className="leading-8 text-slate-700">
              エアホームの公式サイトには、修理料金の具体的な記載がありません。エアコン修理の費用は、症状や必要な作業(点検・ガス補充・部品交換など)によって大きく変わるため、
              <strong className="font-semibold">正確な金額は現地の見積もりで確認する</strong>
              のが基本です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              問い合わせの際は、出張料・見積もり料が発生するか、キャンセル料の扱いはどうかもあわせて確認しておくと安心です。修理か買い替えかで迷うケースもあるため、可能であれば複数の業者から見積もりを取り、料金と対応を比較すると失敗を防げます。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイトに明記がありません。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話で相談", "症状(冷えない・水漏れ・異音など)や設置状況を伝えます。公式記載の電話番号は050-1793-2218です。"],
                ["訪問日時の調整", "都合の良い日時を調整します。地域により訪問までの時間が変わります。"],
                ["現地確認・見積もり", "エアコンの状態を確認し、作業内容と費用を提示してもらいます。"],
                ["修理作業", "見積もりに納得後、修理を実施します。"],
                ["動作確認・支払い", "正常に動くか確認し、支払いをして完了です。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{t}</p>
                    <p className="text-slate-600 text-[0.95rem] leading-7">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
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
              エアホームは、冷えない・水漏れ・異音・電源が入らないといった代表的なエアコントラブルに対応する修理サービスです。エアコン修理に絞って症状から相談できる点が分かりやすい一方、公式サイトには料金や受付時間の明記がなく、第三者の口コミも公開情報としては限られています。依頼時には対応可否・訪問時間・見積もりを書面で確認し、納得してから進めるのが安心です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理は症状によって費用が変わります。急ぎでないときは複数の業者から見積もりを取り、料金と対応を比較して選ぶと失敗を防げます。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコントラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">まずは症状を伝えて、対応可否と費用の目安を確認してみましょう。</p>
              <a href="https://airhomesupport.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                エアホーム公式サイトを見る
              </a>
            </div>
          </section>

          <section className="pb-16">
            <h2 className="text-lg font-bold text-slate-900 mb-4">関連ページ</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/ranking", label: "エアコン修理業者ランキング" },
                { href: "/ranking/fast", label: "対応が早い修理業者" },
                { href: "/cost/repair-price", label: "エアコン修理の料金相場" },
                { href: "/cost/replace-vs-repair", label: "修理と買い替えどちらが得か" },
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
