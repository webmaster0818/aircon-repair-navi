import type { Metadata } from "next";
import { StickyCta, MiniCta } from "@/app/components/AffCta";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import AffiliateBanner from "@/app/components/AffiliateBanner";

export const metadata: Metadata = {
  title:
    "アールクリーニングの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  description:
    "エアコンクリーニング「アールクリーニング」の口コミ・評判をまとめました。みん評・Googleマップ・くらしのマーケット等の実際の利用者の声、料金の目安、対応エリアや受付時間、メリット・利用前の注意点まで中立的に解説します。",
  alternates: { canonical: "/company/r-cleaning" },
};

const UPDATED = "2026年8月2日";

const toc = [
  { id: "summary", label: "アールクリーニングとは" },
  { id: "review-summary", label: "口コミ総評" },
  { id: "company", label: "運営会社・基本情報" },
  { id: "good", label: "口コミ・評判の傾向" },
  { id: "bad", label: "気になる点・利用前の注意点" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "price", label: "料金の目安" },
  { id: "flow", label: "依頼から作業完了までの流れ" },
  { id: "flow-detail", label: "申し込み〜作業完了までの流れ【詳細版】" },
  { id: "menu-price", label: "機種・メニュー別の料金の見方" },
  { id: "payment", label: "支払い方法・キャンセル規定" },
  { id: "checklist", label: "見積もりで確認すべきチェックポイント" },
  { id: "confusion", label: "同名・類似業者との混同に注意" },
  { id: "faq", label: "よくある質問" },
  { id: "last", label: "まとめ" },
];

const faqs = [
  {
    q: "アールクリーニングはエアコン修理もしてくれますか？",
    a: "アールクリーニングはエアコンクリーニング(分解洗浄)を中心としたハウスクリーニングのサービスです。故障の修理ではなく、内部のカビ・ホコリ・汚れを洗い流して、ニオイや効きの改善を目指すサービスである点に注意してください。故障の場合は修理業者やメーカーへの相談が必要です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "東京都(23区および多摩地域)、埼玉県、神奈川県、千葉県を中心に対応しています。公式サイトではエリア外でも出張料金(3,000円〜)で対応可能と案内されています。地域によって対応可否が変わるため、申し込み時に確認しておきましょう。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "公式サイトでは、壁掛けタイプが感謝価格9,800円(税込10,780円)、埋め込み型が感謝価格18,000円(税込19,800円)などと案内されています。台数・機種・オプションで総額が変わり、感謝価格(割引)は時期によって変動するため、申し込み時に最新の料金を確認してください。",
  },
  {
    q: "受付時間は？",
    a: "公式サイトでは受付時間を毎日9:00〜18:00としています。電話番号は0120-007-601と案内されています。",
  },
  {
    q: "防カビ・抗菌コートは追加料金がかかりますか？",
    a: "公式サイトでは防カビ・抗菌コートを無料サービスとして案内しています。内容や条件は時期によって変わる場合があるため、申し込み時に確認しておくと安心です。",
  },
  {
    q: "キャンセルや日程変更はいつまで無料ですか？",
    a: "公式サイトでは、予約日前日の14:59までの連絡であればキャンセル料はかからないと案内されています。前日15:00以降のキャンセル・日程変更は料金の100%が発生すると明記されているため、予定が変わりそうな場合は早めに連絡しましょう(2026年8月2日公式確認)。",
  },
  {
    q: "お掃除機能付きエアコンの料金はいくらですか？",
    a: "公式サイトのエアコンクリーニングページでは、お掃除機能付きエアコンはキャンペーン価格16,000円(税込17,600円)と案内されています(2026年8月2日確認)。キャンペーン価格は時期により変わるため、申し込み時に最新の金額を確認してください。",
  },
  {
    q: "作業時間はどのくらいかかりますか？",
    a: "公式サイトでは、壁掛けタイプのエアコンクリーニングの作業時間は約1.5時間と案内されています(2026年8月2日確認)。台数や汚れの状況、オプションの有無によって前後する場合があります。",
  },
  {
    q: "室外機やドレンホースの掃除も頼めますか？",
    a: "オプションとして、室外機清掃(2026年8月2日確認時点でキャンペーン価格4,500円・通常8,800円)、ドレンホース洗浄(2,500円/箇所)、防虫キャップ取付(1,650円/箇所)が公式サイトに案内されています。価格・条件は時期により変わるため申し込み時に確認してください。",
  },
  {
    q: "製造から10年以上経ったエアコンでも依頼できますか？",
    a: "公式サイトでは、10年以上経過している設備については保障できない場合があると案内されています。洗浄起因の故障への保証は製造10年未満のエアコンが対象とされているため、古い機種を依頼する場合は事前に保証の扱いを確認しておくと安心です(2026年8月2日確認)。",
  },
  {
    q: "作業後に不具合が見つかったらどうすればいいですか？",
    a: "公式サイトでは、作業後の不具合の報告は2週間以内に申し付けるよう案内されています(2026年8月2日確認)。作業完了時に動作を一緒に確認し、気になる点があれば早めに連絡窓口へ伝えましょう。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "アールクリーニングの口コミ・評判は？料金・対応エリアを徹底調査【2026年最新】",
  datePublished: "2026-06-28",
  dateModified: "2026-08-02",
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
          { name: "アールクリーニングの口コミ・評判", href: "/company/r-cleaning" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">
            エアコンクリーニング業者レビュー
          </p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            アールクリーニングの口コミ・評判は？
            <br className="hidden md:block" />
            料金・対応エリアを徹底調査【2026年最新】
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-08-02">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image
              src="/images/hero-c.png"
              alt="エアコン内部を分解洗浄するクリーニング作業のイメージ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-8">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンのニオイや効きが気になるとき、コストを抑えてしっかり洗浄したい——そんなときに候補に挙がるのが
            <strong className="font-semibold text-slate-900">アールクリーニング</strong>
            です。この記事では、首都圏を中心に対応するアールクリーニングについて、みん評・Googleマップ・くらしのマーケットなどで公開されている利用者の声、料金の目安、対応エリアや受付時間、メリット・気になる点を、良い点・注意点の両面から中立的にまとめました。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            ※アールクリーニングは故障の「修理」ではなく、内部を分解洗浄する「エアコンクリーニング」のサービスです。本記事では、みん評・Googleマップ・くらしのマーケット等で公開されている口コミについて、本文の転載・創作は行わず、確認できた傾向の要約のみを掲載しています。料金や対応内容は時期・地域により変わるため、最新の情報は申し込み時にご確認ください(調査時点：2026年6月)。
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

        <div className="max-w-3xl mx-auto px-5 mt-8">
          <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-3">＼ 公式サイトはこちら ／</p>
            <div className="flex justify-center mb-4"><a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+601S1" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www22.a8.net/svt/bgt?aid=260628928542&wid=013&eno=01&mid=s00000022947001008000&mc=1" /></a></div>
            <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q" target="_blank" rel="sponsored nofollow noopener" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">アールクリーニング公式サイトを見る →</a>
            <p className="mt-3 text-xs text-slate-400">※本リンクはプロモーション（PR）です。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">アールクリーニングとは</h2>
            <p className="leading-8 text-slate-700">
              アールクリーニングは、東京都を中心に埼玉・神奈川・千葉の首都圏に対応するエアコンクリーニング・ハウスクリーニングのサービスです。壁掛けタイプから埋め込み型まで対応し、独自の洗剤と高圧洗浄で内部の汚れを落とす点を強みに掲げています。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              公式サイトでは作業実績50万件、顧客満足度4.7(2025年9月時点)を掲げ、防カビ・抗菌コートを無料サービスとして案内しています。比較的リーズナブルな価格設定で、コストを抑えてエアコンを洗浄したい人に候補となるサービスです。
            </p>
            <AffiliateBanner
              slug="r-cleaning"
              heading="公式サイトで詳細・料金を確認する"
              note="首都圏エリアなら、まずは料金と空き状況を確認してみましょう。"
            />
          </section>

          <section id="review-summary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ総評</h2>
            <p className="leading-8 text-slate-700">
              アールクリーニングは、くらしのマーケットの店舗ページで総合4.73/5.0・口コミ662件(2026年8月1日時点)という高評価を得ており、丁寧な作業や問い合わせ対応の早さ、繁忙期の対応を称賛する声が中心です。明朗会計や事前説明、ビフォーアフター写真の提示など、作業プロセスの丁寧さを評価する内容も多く確認できます。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              一方、みん評の口コミは11件(2026年8月1日時点)と少数ながら評価が1〜5点に二極化しており、水漏れで部屋が濡れたという報告や、洗浄範囲・トラブル後の対応への不満といった厳しい声も確認できます。担当者による品質のムラを指摘する声もあるため、高評価が多数とはいえ当たり外れの可能性は念頭に置き、作業範囲と万一の際の補償を申し込み時に確認しておくと安心です。
            </p>
          </section>

          <section id="company" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">運営会社・基本情報</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["サービス名", "アールクリーニング"],
                    ["サービス内容", "エアコンクリーニング／ハウスクリーニング 等"],
                    ["対応エリア", "東京都・埼玉県・神奈川県・千葉県(エリア外は出張料金3,000円〜で対応の案内あり)"],
                    ["受付時間", "毎日 9:00〜18:00"],
                    ["施工内容", "独自洗剤＋高圧洗浄による分解洗浄／防カビ・抗菌コート無料(公称)"],
                    ["支払い方法", "各種クレジットカード／電子マネー"],
                    ["電話番号", "0120-007-601(公式記載)"],
                    ["公式サイト", "r-cleaning.com"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/3 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">出典：公式サイトの掲載情報。受付時間や料金は変更される場合があります。運営会社名は公式サイトに明記が確認できませんでした。</p>
          </section>

          <section id="good" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">口コミ・評判の傾向</h2>
            <p className="leading-8 text-slate-700 mb-6">
              当サイトの方針として、口コミ本文の転載・創作は行わず、確認できた<strong className="font-semibold">傾向の要約</strong>のみをお伝えしています。アールクリーニングについては、みん評・Googleマップ・くらしのマーケットなどの口コミプラットフォームで多数の利用者の声が公開されており、2026年6月時点でGoogleマップ評価4.7(1,600件超)、くらしのマーケット評価4.7台などの評価が確認できます。
            </p>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h3 className="font-bold text-sky-800 mb-3">見られる評価の傾向</h3>
              <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                <li>価格に対して清掃のクオリティが高く、コストパフォーマンスに満足したという評価</li>
                <li>予約前の質問への返答が早く、当日の作業の流れや日頃のお手入れ方法の説明も丁寧だったという評価</li>
                <li>独自洗剤と高圧洗浄で内部の汚れがよく落ち、エアコンの効きが改善したと感じたという評価</li>
                <li>防カビ・抗菌コートが無料で付く点にお得感があり、スタッフの対応の感じが良かったという評価</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-400">※調査日：2026年7月19日。評価は時期・担当スタッフ・地域により異なります。上記は口コミ原文の転載ではなく、公開されている評価から確認できた傾向の要約です。</p>
            <p className="mt-2 text-xs text-slate-400">参照元: <a href="https://curama.jp/600123749/review/" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">くらしのマーケット(総合4.73/5.0・口コミ662件)</a> ／ <a href="https://selectra.jp/home/review/r-cleaning" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">セレクトラのレビュー記事</a>(いずれも2026年8月1日確認)</p>
          </section>

          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <Image src="/images/hero-b.png" alt="室外機を洗浄するクリーニング作業のイメージ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <section id="bad" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">気になる点・利用前の注意点</h2>
            <p className="leading-8 text-slate-700 mb-4">
              高評価が多い一方で、口コミの多い人気サービスという性質上、
              <strong className="font-semibold">スタッフによって対応や仕上がりの感じ方に差が出る場合がある</strong>
              点は理解しておきたいところです。安心して任せるために、申し込み時には次の点を確認しておくとよいでしょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>担当スタッフによって作業の丁寧さや仕上がりの感じ方に差が出る場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>故障の「修理」ではなくクリーニングのサービスのため、目的に合うか確認しておく</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>繁忙期(夏前など)は予約が取りにくく、希望日に作業できない場合がある</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>感謝価格(割引)やオプションは条件・期間が変わるため、申し込み時に総額を確認する</li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              なお、みん評では水漏れ事故や洗浄範囲への不満、トラブル後の対応に関する厳しい声も確認できます(件数は11件と少数で評価は二極化)。万一に備え、補償の有無と連絡窓口を作業前に確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">参照元: <a href="https://minhyo.jp/r-cleaning" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">みん評(アールクリーニングの口コミ・11件)</a> ／ <a href="https://selectra.jp/home/review/r-cleaning" rel="nofollow noopener" target="_blank" className="underline hover:text-sky-700">セレクトラのレビュー記事</a>(いずれも2026年8月1日確認)</p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q" label="アールクリーニング公式サイトを見る" lead="口コミの傾向を踏まえて検討したい方へ。詳細は公式サイトで確認できます" />

          <section id="merit" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
                <h3 className="font-bold text-sky-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>感謝価格による比較的リーズナブルな料金設定</li>
                  <li>防カビ・抗菌コートが無料(公称)でお得感がある</li>
                  <li>作業実績50万件・口コミ件数が多く、評価を確認しやすい</li>
                  <li>各種クレジットカード・電子マネーに対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-700 mb-3">デメリット・注意点</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアが首都圏中心(エリア外は出張料金)</li>
                  <li>故障修理ではなくクリーニングのサービス</li>
                  <li>スタッフにより仕上がりの感じ方に差が出る場合がある</li>
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
                  <li>首都圏でコストを抑えてエアコンを洗浄したい人</li>
                  <li>口コミ件数の多いサービスで評価を見て選びたい人</li>
                  <li>ニオイや効きの悪さを内部洗浄で改善したい人</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-3">向いていない人</h3>
                <ul className="space-y-2 text-slate-700 text-[0.95rem] leading-7">
                  <li>対応エリアから大きく離れている人</li>
                  <li>清掃ではなく、故障の修理を頼みたい人</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">料金の目安</h2>
            <p className="leading-8 text-slate-700">
              アールクリーニングの公式サイトでは、エアコンクリーニングの料金目安が次のように案内されています(税込・調査時点)。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["壁掛けタイプ", "感謝価格 9,800円(税込10,780円)"],
                    ["埋め込み型", "感謝価格 18,000円(税込19,800円)"],
                    ["室外機・追加オプション", "別途(申し込み時に確認)"],
                    ["防カビ・抗菌コート", "無料サービス(公称)"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              感謝価格(割引)やキャンペーンは時期によって変わります。台数や機種、オプションによって総額が変わるため、申し込み時に最新の料金と総額を確認しておくと安心です。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は公式サイト掲載の目安です。最新の金額は申し込み時にご確認ください。</p>
          </section>

          <MiniCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q" label="アールクリーニング公式サイトを見る" lead="料金の詳細・正確な見積もりは公式サイトの無料相談で確認できます" />

          <section id="flow" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">依頼から作業完了までの流れ</h2>
            <ol className="space-y-4">
              {[
                ["電話・Webで相談", "機種や台数、汚れの状況を伝えます。受付は毎日9:00〜18:00です。"],
                ["日程の調整", "都合の良い日時を調整します。質問への返答が早いと好評です。"],
                ["訪問・養生", "スタッフが訪問し、周囲をしっかり養生します。"],
                ["分解洗浄", "独自洗剤と高圧洗浄で、内部のカビ・ホコリを洗浄します。"],
                ["動作確認・支払い", "仕上がりと動作を確認し、支払いをして完了です。"],
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

          <section id="flow-detail" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">申し込み〜作業完了までの流れ【詳細版】</h2>
            <p className="leading-8 text-slate-700 mb-6">
              2026年8月2日に公式サイトの「ご依頼の流れ」ページとエアコンクリーニング詳細ページで確認できた情報をもとに、申し込みから作業完了までの流れをさらに詳しく整理しました。
            </p>
            <ol className="space-y-4">
              {[
                ["電話・Webで見積もり依頼", "掃除箇所・希望日程・住所などのほか、エアコンのお掃除機能の有無と駐車場の有無を確認されます。お掃除機能付きは料金が変わるため、機種名や室内機の型番を控えておくとスムーズです。見積金額が折り合わない場合はキャンセルでき、出張・見積もり費用はかからないと案内されています。"],
                ["前日までの準備", "作業箇所周辺の荷物は事前に移動しておくよう案内されています。キャンセル・日程変更は前日14:59までなら無料です(15:00以降は100%のキャンセル料)。"],
                ["訪問・作業前の確認", "スタッフが訪問し、作業前に清掃箇所を確認します。公式サイトでは「基本的に追加料金は発生しません」と案内されています。"],
                ["分解洗浄(壁掛けで約1.5時間)", "公式サイトでは、分解→養生→洗剤噴射→部品洗浄→内部洗浄→内部乾燥→組立という工程が案内されており、壁掛けタイプの作業時間は約1.5時間とされています。"],
                ["動作確認・支払い", "仕上がりと動作を確認し、現金・各種クレジットカード・電子マネー/QR決済(一部を除く)で支払って完了です。"],
                ["アフター対応", "作業後の不具合の報告は2週間以内に申し付けるよう案内されています。気になる点があれば早めに連絡しましょう。"],
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
            <p className="mt-4 text-xs text-slate-400">※2026年8月2日公式確認。流れ・条件は変更される場合があります。最新の内容は申し込み時にご確認ください。</p>
          </section>

          <section id="menu-price" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">機種・メニュー別の料金の見方</h2>
            <p className="leading-8 text-slate-700">
              アールクリーニングの料金は「通常価格」と「キャンペーン価格」の二段構えで表示されており、申し込み時期のキャンペーン価格が実際の目安になります。2026年8月2日に公式サイトのエアコンクリーニング詳細ページで確認できた料金は次のとおりです。
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["壁掛けタイプ(通常機) 1台目", "キャンペーン価格 9,800円(税込10,780円)／通常価格19,350円"],
                    ["壁掛けタイプ(通常機) 2台目以降", "キャンペーン価格 8,800円(税込9,680円)"],
                    ["お掃除機能付き", "キャンペーン価格 16,000円(税込17,600円)"],
                    ["埋め込み型エアコン", "キャンペーン価格 18,000円(税込19,800円)／通常価格29,980円"],
                    ["室外機清掃(オプション)", "キャンペーン価格 4,500円(通常8,800円・確認時点)"],
                    ["ドレンホース洗浄(オプション)", "2,500円/箇所"],
                    ["防虫キャップ取付(オプション)", "1,650円/箇所"],
                    ["防カビ・抗菌コート", "無料サービス(公称)"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              料金表を見るうえでのポイントは3点です。第一に、<strong className="font-semibold">2台目以降は1台目より安くなる複数台割引</strong>があるため、複数台まとめて依頼すると1台あたりの単価を下げられます。第二に、お掃除機能付きは通常機より高くなるため、<strong className="font-semibold">機種のお掃除機能の有無を正しく申告する</strong>ことが見積もりと請求のズレを防ぐ鍵になります。第三に、キャンペーン価格には期限が表示されており(確認時点では8月10日までの表示)、時期によって金額・割引率が変わります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              対応範囲については、取り外しができない部品がある場合や機器が故障している場合は部分的な作業のみになると案内されています。また、洗浄起因の故障への保証は製造10年未満のエアコンが対象とされ、10年以上経過した設備は保証できない場合があると記載されています。
            </p>
            <p className="mt-3 text-xs text-slate-400">※料金は2026年8月2日に公式サイトで確認した掲載内容です。キャンペーンの内容・期限は時期により変わります。</p>
          </section>

          <section id="payment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">支払い方法・キャンセル規定</h2>
            <p className="leading-8 text-slate-700">
              支払いは作業完了後で、公式サイトでは<strong className="font-semibold">現金・各種クレジットカード・電子マネー/QR決済</strong>(一部を除く)に対応すると案内されています(2026年8月2日確認)。使いたい決済手段が決まっている場合は、申し込み時に利用可否を確認しておくと確実です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">キャンセル・日程変更の規定は次のとおり明記されています。</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-[0.95rem]">
                <tbody>
                  {[
                    ["予約日前日の14:59まで", "キャンセル料なし"],
                    ["予約日前日の15:00以降", "料金の100%(日程変更も同様)"],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <th className="text-left align-top font-semibold text-slate-600 w-1/2 px-4 py-3 border-b border-slate-100">{k}</th>
                      <td className="text-slate-700 px-4 py-3 border-b border-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              前日15:00を境に全額のキャンセル料が発生する規定のため、天候や体調で予定が崩れそうなときは、<strong className="font-semibold">前日の昼までに連絡する</strong>のが安全です。なお、見積もり段階で金額が折り合わない場合のキャンセルは可能で、出張・見積もり費用はかからないと案内されています。
            </p>
            <p className="mt-3 text-xs text-slate-400">※2026年8月2日公式確認。規定は変更される場合があります。</p>
          </section>

          <section id="checklist" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">見積もりで確認すべきチェックポイント</h2>
            <p className="leading-8 text-slate-700 mb-4">
              アールクリーニングはキャンペーン価格中心の料金体系のため、見積もり時に条件を固めておくほど当日のズレを防げます。申し込み前に次の点を確認しておきましょう。
            </p>
            <ul className="space-y-3 text-slate-700 leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">税込総額</strong>：台数(2台目以降の割引適用)・お掃除機能の有無・室外機やドレンホースなどオプションを含めた合計金額</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">キャンペーンの適用条件</strong>：申し込み時点の価格と期限(時期により変動)</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">機種の申告</strong>：お掃除機能付きかどうか(型番で確認)。申告漏れは当日の金額変更につながりやすい</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">古い機種の保証</strong>：製造10年以上の機種は保証できない場合があるため、依頼可否と条件を事前に確認</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">エリア・駐車場</strong>：対応エリア外の場合の出張料金(3,000円〜)、駐車場の有無</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">キャンセル期限</strong>：前日14:59まで無料・15:00以降100%という規定の再確認</span></li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span><span><strong className="font-semibold">アフター窓口</strong>：不具合報告の期限は2週間以内。連絡先を控えておく</span></li>
            </ul>
            <p className="mt-5 leading-8 text-slate-700">
              補償体制については、公式サイトの「安心のための取り組み」ページに、<strong className="font-semibold">最大1億円の損害賠償保険に加入している</strong>ことと、作業後2週間の保証(気づかなかった不具合の報告に対応)が明記されています(2026年8月2日確認)。あわせて、使い捨てスリッパの持参、女性のみの世帯などへの女性スタッフの指名対応、予約前日のSMS確認、静音性の高い高圧洗浄機の使用、自社研修施設でのスタッフ教育といった取り組みも案内されています。一方、経年劣化(10年以上)による破損や落ちない変色、取り外せない部品などは保証の対象外になる場合があると注記されているため、古い機種は依頼前の確認が重要です。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              なお、運営会社については、2026年8月2日の確認時点で公式サイトの運営会社ページに株式会社Fire Works(東京都杉並区上高井戸)と記載されていることが確認できました(それ以前の調査時点では会社名の明記が確認できませんでした)。営業時間は9:00〜18:00・年中無休と案内されています。
            </p>
          </section>

          <section id="confusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">同名・類似業者との混同に注意</h2>
            <p className="leading-8 text-slate-700">
              「アールクリーニング」という名称は、自宅から衣類を預ける<strong className="font-semibold">宅配衣類クリーニングのサービス</strong>を指して使われている例も確認できます。本記事で紹介しているのは、東京都を拠点に首都圏でエアコンクリーニング・ハウスクリーニングを行うアールクリーニング(公式サイト: r-cleaning.com)で、衣類の宅配クリーニングとは業態が異なります。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              口コミや評判を調べる際は、次の点を確認すると別業態の同名サービスと取り違えるのを防げます。
            </p>
            <ul className="mt-3 space-y-2 text-slate-700 text-[0.95rem] leading-7">
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>「エアコンクリーニング」「ハウスクリーニング」の文脈での評価かどうか(衣類の仕上がりの話であれば別サービスの可能性)</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>公式サイトのドメインが「r-cleaning.com」か</li>
              <li className="flex gap-3"><span className="text-sky-600 font-bold shrink-0">・</span>対応エリアが東京・埼玉・神奈川・千葉の首都圏か</li>
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
              アールクリーニングは、首都圏を中心に独自洗剤＋高圧洗浄でエアコンクリーニングを行うサービスです。利用者の声では、価格を上回る清掃のクオリティと丁寧な対応、防カビ・抗菌コート無料を評価する内容が見られます。一方で、担当スタッフによる差や、故障の修理ではなくクリーニングである点は理解しておきましょう。
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              料金は機種・台数・オプションで変わります。感謝価格やキャンペーンは時期で変動するため、申し込み時に総額を確認し、納得してから依頼するのがおすすめです。
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 p-7 text-center text-white">
              <p className="text-lg font-bold mb-2">エアコンのニオイ・汚れが気になる方へ</p>
              <p className="text-sky-100 text-sm mb-5">首都圏エリアなら、まずは料金と空き状況を確認してみましょう。</p>
              <div className="flex justify-center mb-5">
                <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+601S1" rel="sponsored nofollow" target="_blank"><img width={300} height={250} alt="" src="https://www22.a8.net/svt/bgt?aid=260628928542&wid=013&eno=01&mid=s00000022947001008000&mc=1" /></a>
              </div>
              <a href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q" target="_blank" rel="sponsored nofollow" className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg ring-2 ring-orange-300 hover:bg-orange-600 hover:shadow-xl transition-all">
                アールクリーニング公式サイトを見る
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
      <StickyCta href="https://px.a8.net/svt/ejp?a8mat=4B66KG+8YP7WY+4X26+61C2Q" label="アールクリーニング公式サイトを見る" />
</article>
    </>
  );
}
