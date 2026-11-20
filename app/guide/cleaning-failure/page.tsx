import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングの失敗を防ぐには｜国民生活センターの相談事例と業者5社の補償規定【2026年11月確認】",
  description:
    "エアコンクリーニングの失敗（故障・汚れ残り・家財の損傷・追加契約）を防ぐ方法を、国民生活センターの相談事例・NITEの事故情報と、おそうじ本舗・パナソニック・エディオン・くらしのマーケット・ダスキンの公式の補償規定で整理しました。失敗の種類ごとに、どの規定で対応してもらえるかを比較しています。",
  alternates: { canonical: "/guide/cleaning-failure/" },
};

const UPDATED = "2026年11月21日";

const faqs = [
  {
    q: "エアコンクリーニングで多い失敗は何ですか？",
    a: "国民生活センターは2025年2月28日に「ハウスクリーニングのトラブルにご注意」を公表し、エアコンの掃除で部品を破損され、弁償すると言われたまま業者と連絡が取れなくなった事例や、換気扇の掃除の際に別の箇所のクリーニングを勧められ約60万円の契約をしてしまった事例を紹介しています。",
  },
  {
    q: "クリーニングの後に故障した場合、補償してもらえますか？",
    a: "作業が原因であれば、多くの業者に補償の規定があります。ただし連絡の期限が業者ごとに異なります。当サイトの確認では、パナソニックは作業後7日以内、おそうじ本舗は作業後30日間、エディオンは作業後3か月以内でした（2026年11月21日確認）。不具合に気付いたら、すぐに依頼先へ連絡してください。",
  },
  {
    q: "汚れが落ちていない場合はやり直してもらえますか？",
    a: "業者によります。エディオンは洗い残しがあれば作業後1か月以内に無償で再クリーニング、ダスキンは品質が充分でなかった場合にやり直す「満足の保証」を掲げています。一方、くらしのマーケットの損害賠償補償は「作業が原因で生じた損害」が対象で、きれいにならなかった場合は補償の対象外としています（2026年11月21日確認）。",
  },
  {
    q: "古いエアコンをクリーニングに出しても大丈夫ですか？",
    a: "製造から年数がたった機種は、作業を断られたり、故障しても補償の対象外とされたりする場合があります。おそうじ本舗は製造から9年以上の機種について、清掃が原因の故障でも本体交換等の補償の対象にならないとしています。詳しくは「エアコンを10年掃除していない場合」のページをご覧ください。",
  },
  {
    q: "トラブルになった場合の相談先はどこですか？",
    a: "まず依頼先に連絡し、作業日・症状・やり取りを記録してください。解決しない場合は、消費者ホットライン「188」で最寄りの消費生活センター等に相談できます。国民生活センターは、一定の要件に該当する場合はクーリング・オフ等が適用できる場合があるとしています。",
  },
];

type Row = {
  name: string;
  dirt: string;
  broken: string;
  other: string;
};

const rows: Row[] = [
  {
    name: "おそうじ本舗",
    dirt: "公式FAQでは「大半の汚れは除去できますが…完全に除去できない場合があります」",
    broken: "責任保険に加入。補償期間は作業後30日間",
    other: "製造から9年以上の機種は、清掃が原因の故障でも本体交換等の補償の対象外",
  },
  {
    name: "パナソニック",
    dirt: "合意した作業が実施されていない・作業の不備が明らかな場合に再清掃。カビ・汚れを完全に取り除くことは保証しない",
    broken: "作業後7日以内に、作業が原因と推測される不具合が出た場合に連絡。点検の結果、部品の劣化・消耗・ガス漏れ等、作業が直接の原因でないと分かった場合は責任を負わない",
    other: "損害賠償は対象製品の価値に相当する額が上限",
  },
  {
    name: "エディオン",
    dirt: "洗い残しがあれば作業後1か月以内に無償で再クリーニング",
    broken: "作業に起因する故障は作業後3か月以内なら無償修理",
    other: "サービス完了後の機器保証はなし",
  },
  {
    name: "くらしのマーケット",
    dirt: "「きれいにならなかった」は補償の対象外",
    broken: "作業が原因で生じた損害を補償（年間の補償限度額は予約全体で最高1億円）",
    other: "適用例として、作業中に店舗の不注意で内装や家具が濡れた場合を掲載。2025年1月1日以降の事故が対象",
  },
  {
    name: "ダスキン",
    dirt: "品質が充分でなかった場合はやり直す（満足の保証）",
    broken: "作業が原因の故障の補償規定は公式ページで確認できず",
    other: "事前に料金を明確に伝えることを「満足の保証」で宣言",
  },
];

export default function CleaningFailurePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/cleaning-failure/" },
          { name: "エアコンクリーニングの失敗を防ぐ", href: "/guide/cleaning-failure/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">クリーニングガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングの失敗を防ぐには
            <br className="hidden md:block" />
            相談事例と業者5社の補償規定
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-21">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンクリーニングの失敗は、主に<strong className="font-semibold text-slate-900">作業後の故障・汚れ残り・家財の損傷・その場での追加契約</strong>の4つです。
            国民生活センターは、契約前に<strong className="font-semibold text-slate-900">複数社から見積もりを取ること</strong>と、<strong className="font-semibold text-slate-900">故障や損傷があったときの補償内容を確認すること</strong>を呼びかけています。
            当サイトでは主要5社の公式の補償規定を{UPDATED}に確認し、失敗の種類ごとに比較しました。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">依頼前に確認していただきたい4点</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>料金に含まれる作業と、追加料金がかかる条件（複数社の見積もりで比べる）</li>
              <li>作業が原因で故障した場合の補償と、<strong>連絡の期限</strong></li>
              <li>汚れが残っていた場合に再清掃してもらえるか</li>
              <li>製造年による受付条件（古い機種は補償の対象外となる場合あり）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="cases" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">国民生活センターに寄せられた相談事例</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              国民生活センターは2025年2月28日に「ハウスクリーニングのトラブルにご注意」を公表し、次の相談事例を紹介しています（要約）。
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm leading-7 text-slate-700">
              <li>
                <strong>作業中の部品破損と、その後の連絡不通</strong>（2024年8月受付）：エアコンの掃除中にスタッフが部品を破損させたことを認め、修理すると言ったものの、1か月たっても連絡がなく、電話もつながらなくなった。エアコンは26度以下にならない状態が続いている。
              </li>
              <li>
                <strong>別の箇所のクリーニングを勧められての高額契約</strong>（2024年11月受付）：電話で勧誘された換気扇のクリーニング（5,000円）の際、風呂場・洗面所・トイレのクリーニングも勧められ、相場が分からないまま約60万円の契約をしてしまった。
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              同センターのアドバイスは、①複数社から見積もりを取り、料金や説明に納得できなければきっぱり断る、②クリーニングが原因の故障や、壁・床・家具の損傷に備えて補償内容や保険の加入を契約前に確認する（エアコンはクリーニング方法も確認し、必要に応じてメーカーに問い合わせる）、③不安な場合は早めに消費生活センター等に相談する、の3点です。
              点検を口実にした訪問勧誘への注意は<Link href="/guide/repair-scam/" className="text-sky-700 underline">エアコン修理の詐欺・高額請求の対策</Link>にも掲載しています。
            </p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">失敗の種類別：主要5社の公式の規定</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              「汚れ残り」「作業が原因の故障」で対応が分かれるため、列を分けて掲載しています。各社の公式ページ・利用規約・FAQの記載に基づきます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">汚れ残り</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">作業が原因の故障</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">その他の条件</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.dirt}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.broken}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}に各社の公式ページで確認。規定は変更されることがあります。ご依頼前に最新の内容をご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              表のとおり、故障の連絡期限は<strong>7日・30日・3か月</strong>と業者ごとに異なります。
              クリーニング後はすぐに冷房・暖房を運転し、冷え方・音・水漏れに異常がないかを確かめておくと、期限内に連絡できます。
              また、マッチングサイトの補償は作業による「損害」が対象で、仕上がりへの不満は対象外とされています。仕上がりの再清掃を重視する場合は、再清掃の規定がある業者を選ぶと安心です。
            </p>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">自分で内部を洗浄して失敗する例</h2>
            <p className="text-sm leading-7 text-slate-700">
              NITE（製品評価技術基盤機構）は、誤った内部洗浄方法による火災事故が2019年度までの5年間に20件発生したと公表しています。
              内部の配線端子に洗浄液が付着し、トラッキング現象で出火した事故例があり、NITEは電気部品に洗浄液がかからないよう注意すること、内部の洗浄は正しい知識を持った業者に依頼することを呼びかけています。
              ご自身でできる範囲は<Link href="/guide/diy-cleaning/" className="text-sky-700 underline">エアコン掃除を自分でできる範囲</Link>をご覧ください。
            </p>
          </section>

          <section id="after" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">失敗に気付いたときの進め方</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>エアコンの運転を止め、症状（冷えない・異音・水漏れ・破損箇所）を写真や動画で記録する</li>
              <li>作業日と契約内容（見積書・領収書・予約画面）を手元にそろえる</li>
              <li>上の表の連絡期限内に、依頼先へ電話などで連絡する</li>
              <li>連絡が取れない・話し合いがまとまらない場合は、消費者ホットライン「188」で消費生活センター等に相談する</li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              クリーニングとは関係なく故障している可能性もあります。症状ごとの確認は<Link href="/symptom/" className="text-sky-700 underline">症状から探す</Link>をご覧ください。
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

          <section id="sources" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 mb-3">出典（{UPDATED}確認）</h2>
            <ul className="list-disc pl-6 space-y-1 text-xs leading-6 text-slate-500 break-all">
              <li>国民生活センター「ハウスクリーニングのトラブルにご注意」（2025年2月28日）https://www.kokusen.go.jp/news/data/n-20250228_1.html</li>
              <li>NITE「エアコンの内部洗浄による事故に注意」（2020年6月25日）https://www.nite.go.jp/jiko/chuikanki/press/2020fy/prs200625.html</li>
              <li>おそうじ本舗 よくあるご質問 https://www.osoujihonpo.com/house-cleaning/faq/42/ ・ https://www.osoujihonpo.com/house-cleaning/faq/53/</li>
              <li>パナソニック「エアコンクリーニングサービス ご利用規約」https://panasonic.jp/membership/cleaning/aircon/policy.html</li>
              <li>エディオン「家電のプロのクリーニングサービス」https://www.edion.co.jp/service/satisfied/cleaning</li>
              <li>くらしのマーケット「損害賠償補償」https://curama.jp/guarantee/</li>
              <li>ダスキン サービスマスター「満足の保証」https://www.duskin.jp/manzoku/servicemaster/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/ten-years-no-cleaning/", label: "エアコンを10年掃除していない場合" },
                { href: "/guide/cleaning-effect/", label: "エアコンクリーニングの効果と依頼の判断" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/guide/cheap-cleaning/", label: "エアコンクリーニングを安く頼む方法" },
                { href: "/guide/duskin-vs-osoujihonpo/", label: "ダスキンとおそうじ本舗の比較" },
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
