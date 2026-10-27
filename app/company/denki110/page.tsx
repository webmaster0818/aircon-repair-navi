import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import SiteShot from "@/app/components/SiteShot";

export const metadata: Metadata = {
  title:
    "DENKI110（電気工事）の評判・料金・トラブル時の規約を公式で調査｜「電気工事110番」との違い【2026年10月】",
  description:
    "DENKI110の料金（電気トラブル全般6,600円〜）・キャンセル料・受付時間・対応エリアと、トラブル時に確認したい利用規約を公式で調査しました。シェアリングテクノロジーの「電気工事110番」とは運営会社が異なる点もご説明します（2026年10月20日確認）。",
  alternates: { canonical: "/company/denki110" },
};

const UPDATED = "2026年10月27日";

const toc = [
  { id: "summary", label: "DENKI110とは（電気工事110番との違い）" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "評判・口コミについて" },
  { id: "bad", label: "トラブルを避けるために規約で確認したい点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている方・向いていない方" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から修理完了までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "DENKI110は「電気工事110番」や生活110番と同じサービスですか？",
    a: "いいえ。DENKI110は株式会社イエノナカカンパニーが運営するサービスです。「電気工事110番」は、生活110番を運営するシェアリングテクノロジー株式会社（東証上場・証券コード3989）のサービスで、運営会社が異なります（2026年10月20日・各社の公式サイトで確認）。",
  },
  {
    q: "受付時間は何時から何時までですか？",
    a: "公式サイトでは、電話は年中無休で9:00〜22:00、メールは24時間受付と案内されています。到着までの時間は、公式FAQで「最短で60分前後」とされていますが、スタッフの距離や他の作業状況によって変わります（2026年10月20日・公式確認）。",
  },
  {
    q: "キャンセル料はかかりますか？",
    a: "公式FAQでは、キャンセルは可能で、キャンセル料は基本的にかからないとされています。ただし、遠方への出張や、22時以降の到着・作業となる深夜の出張では、事前の合意のうえでキャンセル料がかかる場合があると記載されています（2026年10月20日・公式確認）。",
  },
  {
    q: "作業の契約相手はどこになりますか？",
    a: "運営会社の利用規約（2024年4月1日施行）第6条では、利用者は提携業者と直接交渉・契約を行い、提携業者のサービスは提携業者の責任で提供されるとされています。依頼の取り消しも、利用者が提携業者へ直接連絡すると定められています。公式の会社概要では、施工者は「自社およびその提携業者」と記載されています。",
  },
  {
    q: "相談や見積もりは無料ですか？",
    a: "公式サイトでは電話相談は無料とされ、電話で概算の見積もりを伝えたうえで、現地確認後の見積もりに納得できない場合はキャンセルできると案内されています。見積料の金額は明記されていないため、訪問時に作業範囲と総額を書面で確認してから依頼することをおすすめします。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "エアコン修理に限った料金は公式サイトに掲載されていません。公式FAQでは、電気がつかないといった電気トラブル全般について「作業費込みで6,600円～」とされています（2026年10月15日・公式確認）。症状や作業内容によって金額は変わるため、最終的な費用は現地の見積もりにて、事前に総額をご確認ください。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "公式サイトの対応エリアには北海道から沖縄県まで47都道府県が掲載されています。公式FAQでは「主要都市部は全域対応」とされているため、それ以外の地域では対応の可否や到着までの時間を問い合わせ時にご確認ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "DENKI110の評判・料金・トラブル時の規約を公式で調査｜「電気工事110番」との違い",
  datePublished: "2026-06-10",
  dateModified: "2026-10-27",
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
          { name: "DENKI110の評判・料金", href: "/company/denki110" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコン修理業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            DENKI110の評判・料金を公式で調査
            <br className="hidden md:block" />
            「電気工事110番」との違い【2026年10月】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-10-27">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <SiteShot slug="denki110" name="DENKI110" />
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンが急に効かなくなった場合や、配線・電源まわりのトラブルが生じた場合には、出張対応の修理サービスへの相談が選択肢となります。
            本記事では、株式会社イエノナカカンパニーが運営する電気のトラブル対応サービス
            <strong className="font-semibold text-slate-900">DENKI110</strong>
            について、料金の目安、キャンセル料、対応エリアと受付時間、トラブルを避けるために利用規約で確認しておきたい点を、公式サイトの記載にもとづいてまとめています。
          </p>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[0.95rem] leading-7 text-slate-700">
            <strong className="font-semibold">「電気工事110番」とは別のサービスです。</strong>
            「電気工事110番」は、生活110番を運営するシェアリングテクノロジー株式会社のサービス名です。DENKI110の公式サイト（denki110.net）は「DENKI110」と名乗っており、運営会社も異なります。当サイトでは以前、DENKI110を「電気工事110番」と表記していましたが、2026年10月20日に各社の公式サイトで確認し、表記を改めました。
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[0.95rem] leading-7 text-slate-700">
            <p className="font-semibold text-slate-900 mb-2">「電気工事110番」（シェアリングテクノロジー）の評判を調べている方へ：公式の主な記載</p>
            <ul className="space-y-1">
              <li>・運営：シェアリングテクノロジー株式会社（東証上場・証券コード3989）。24時間365日受付</li>
              <li>・エアコン関連の料金：エアコンクリーニング7,700円〜、エアコン取付工事8,800円〜（いずれも税込）。<strong>エアコン修理工事・ガスチャージ工事は「別途ご相談」で、金額の掲載はありません</strong></li>
              <li>・見積もり後のキャンセルは可能で、見積もり確定後の追加料金は発生しないとされています。ただし、対応エリア・加盟店・現場状況により、事前確認のうえ調査・見積もりに費用がかかる場合があります</li>
              <li>・作業は加盟店が行い、加盟店によっては作業前に料金の支払いを求める場合があると明記されています。請負賠償保険に加入しているとされています</li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">出典：シェアリングテクノロジー「電気工事110番」公式（sharing-tech.co.jp/denki/ ・ /denki/price/、2026年10月27日確認）。口コミ・満足度の数値は、公式の画像表示のみで本文に記載がないため掲載していません。</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※料金や対応内容は時期・地域・症状により変わるため、最新の情報は問い合わせ時にご確認ください（調査日：2026年10月20日）。
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
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">DENKI110とは（電気工事110番との違い）</h2>
            <p className="leading-8 text-slate-700">
              DENKI110は、株式会社イエノナカカンパニーが運営する、電気のトラブルに対応する出張サービスです。同社の会社概要では、株主として東証プライム上場のセンコーグループホールディングス株式会社が掲載されています。照明・エアコン・電源まわりなど、家庭で起きやすい電気関連のトラブルに対応しています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              名称が似ているため混同されることがありますが、
              <strong className="font-semibold">DENKI110と「電気工事110番」は運営会社が異なる別のサービス</strong>
              です。「電気工事110番」はシェアリングテクノロジー株式会社（生活110番の運営会社）がエアコン工事・コンセント工事・漏電改修などの依頼先として案内しているサービスで、本ページの内容はあてはまりません。DENKI110は年中無休で受付（電話は9:00〜22:00、メールは24時間）しており、電話相談は無料とされています。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "DENKI110"],
                    ["運営会社", "株式会社イエノナカカンパニー（東京都台東区上野7-6-5・株主：センコーグループホールディングス）"],
                    ["「電気工事110番」との関係", "別の会社（シェアリングテクノロジー）が運営する別サービス"],
                    ["施工", "自社およびその提携業者（公式の会社概要）"],
                    ["対応エリア", "47都道府県を掲載（公式FAQでは主要都市部は全域対応）"],
                    ["受付時間", "年中無休／電話 9:00〜22:00・メール 24時間"],
                    ["到着の目安", "最短60分前後（公式FAQ・状況により変動）"],
                    ["相談・見積もり", "電話相談無料・電話で概算見積もり（見積料の明記なし）"],
                    ["キャンセル料", "原則なし（遠方・22時以降の深夜出張は事前合意のうえかかる場合あり）"],
                    ["料金の目安", "エアコン修理の料金は公式に掲載なし。電気トラブル全般は作業費込み6,600円〜（公式FAQ・2026年10月15日確認）"],
                    ["公式サイト", "https://denki110.net/"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：DENKI110公式サイト（トップ・会社概要・FAQ）、株式会社イエノナカカンパニー会社概要・利用規約（2026年10月20日確認）。受付時間や対応エリアは変更される場合があります。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">評判・口コミについて</h2>
            <p className="leading-8 text-slate-700">
              当サイトでは、口コミ本文の転載・創作を行わず、出典を確認できた評価だけを掲載する方針としています。2026年10月20日時点で、DENKI110の口コミを確認できる掲載先を特定できなかったため、口コミの傾向は掲載していません。以前掲載していた評価の傾向も、出典を確認し直せなかったため削除しました。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              「電気工事110番 評判」などで検索した場合、シェアリングテクノロジーの「電気工事110番」に関する情報が表示されることがあります。口コミを参考にする際は、どちらのサービスについての記載かをご確認ください。なお、公式サイトに掲載されている「累計46.3万件」は、運営会社のサイト全体の実績と注記されており、DENKI110単体の件数ではありません。
            </p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.jpg" alt="室外機を点検する修理作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">トラブルを避けるために規約で確認したい点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              DENKI110は、運営会社と提携業者が作業を行う形のサービスです。運営会社の利用規約（2024年4月1日施行）には、次の定めがあります。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>利用者は、提携業者と直接交渉・契約を行い、提携業者のサービスは提携業者の責任で提供されます（第6条）。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>利用者と提携業者との間で生じた問題に、運営会社は関与しないとされています（第6条第4項）。</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>依頼を取り消す場合は、利用者が提携業者へ直接連絡します（第6条第5項）。</li>
            </ul>
            <p className="mt-5 leading-8 text-slate-700">
              このため、依頼時には次の点を確認しておくことをおすすめします。
            </p>
            <ul className="mt-3 space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>当日に作業する業者の名称と連絡先</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>作業範囲と総額の見積もり（書面）。公式の6,600円〜は電気トラブル全般の目安で、エアコン修理の料金は掲載されていません</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>遠方・深夜（22時以降）の出張になる場合のキャンセル料の有無</li>
            </ul>
          </section>

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>運営会社の株主に、東証プライム上場のセンコーグループホールディングスが掲載されています。</li>
                  <li>年中無休で受け付けており、急なトラブルでも相談できます。</li>
                  <li>電話相談は無料で、キャンセル料も原則かからないとされています。</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>作業の契約相手は提携業者で、問題が生じた場合に運営会社は関与しないと規約に定められています。</li>
                  <li>エアコン修理の料金は公式に掲載がないため、見積もりをご確認ください。</li>
                  <li>「電気工事110番」と名称が似ているため、混同にご注意ください（別運営です）。</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">向いている方・向いていない方</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いている方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>夜22時まで電話で相談したい方</li>
                  <li>急な電気・エアコンのトラブルですぐに相談したい方</li>
                  <li>無料相談から始めたい方</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない方</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>事前に業者と料金を十分に比較して選びたい方</li>
                  <li>メーカー保証期間内で、メーカー修理を優先したい方</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              電気工事やエアコン関連作業の費用は、症状や必要な作業によって幅があります。電気工事110番の公式サイトにはエアコン修理に限った料金は掲載されておらず、公式FAQでは電気トラブル全般について
              <strong className="font-semibold">作業費込みで6,600円〜</strong>
              とされています（2026年10月20日・公式確認）。公式FAQでは、例示の料金は業者や現場の状況によって変わると注記されています。作業内容によっては、この目安より総額がかかる場合があるため、訪問時に総額をご確認ください。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              修理と買い替えで迷う場合もあるため、訪問時には作業範囲と総額の見積もりを書面で確認したうえで依頼することをおすすめします。可能であれば、複数の業者から見積もりを取って比較してください。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公称の目安です。正確な金額は現地の見積もりでご確認ください。</p>
          </section>

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から修理完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webでの相談", "症状や設置状況を伝えます。電話は年中無休 9:00〜22:00、メールは24時間受付とされています。"],
                ["訪問日時の調整", "都合の良い日時を調整し、提携業者が訪問します。"],
                ["現地確認・見積もり", "状態を確認し、作業内容と費用が提示されます。"],
                ["作業の実施", "見積もり内容に同意した後、作業を実施します。"],
                ["動作確認・支払い", "正常に動作することを確認し、支払いを行って完了です。"],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-brand)] text-white font-bold text-sm">{i + 1}</span>
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
              DENKI110は、株式会社イエノナカカンパニーが運営する電気トラブルの出張サービスで、年中無休の受付とキャンセル料が原則かからない点が特徴です。名称は似ていますが、シェアリングテクノロジーの「電気工事110番」とは別のサービスです。作業の契約相手は提携業者となるため、依頼時には作業する業者と総額の見積もりを書面で確認したうえで依頼することをおすすめします。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              エアコン修理の費用は症状によって異なります。お急ぎでない場合は複数の業者から見積もりを取り、料金と対応を比較してお選びください。
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--color-brand)] p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">急なエアコン・電気のトラブルでお困りの方へ</p>
              <p className="text-sky-100 text-sm mb-5">電話相談（無料）で、症状と概算の費用をご確認いただけます。</p>
              <a href="https://denki110.net/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-800 hover:bg-sky-50 transition-colors">
                DENKI110 公式サイトを見る
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
