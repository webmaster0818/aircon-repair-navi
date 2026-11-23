import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンを通販で買う場合の取り付け工事｜エディオン・Amazon・XPRICE・日立公式ストアの工事の申込み方・標準工事・追加料金の払い方【2026年11月確認】",
  description:
    "エアコンを通販で購入する場合の取り付け工事を、通販各社の公式ページで比較しました。標準工事費（エディオン18,700円〜など）、配管4mなど標準工事の範囲、追加工事を当日現金で払う点、工事日の決め方、工事のみ依頼できる店舗を掲載しています。",
  alternates: { canonical: "/guide/online-purchase-installation/" },
};

const UPDATED = "2026年11月23日";

const faqs = [
  {
    q: "通販でエアコンを買った場合、取り付け工事はどうすればよいですか？",
    a: "多くの通販サイトでは、エアコンの注文と同時に標準取付工事を申し込めます。工事は提携先の工事会社が行い、注文後に工事会社などから電話があって工事日を決める流れが一般的です。Amazonの設置工事サービスはエアコンと同時に注文した場合に限るとしているため、工事が必要な場合は購入時に一緒に申し込むことをおすすめします。",
  },
  {
    q: "通販の標準工事費はいくらですか？",
    a: "当サイトで確認した範囲では、エディオンネットショップが2.8kWまで18,700円・3.6〜4.0kW 19,800円・5.6kW以上24,200円（税込）、XPRICEが2.2〜2.8kW 17,880円・3.6〜4.9kW 18,800円などです（2026年11月23日確認）。標準工事の範囲を超える作業は追加料金になります。",
  },
  {
    q: "追加工事の費用はどのように支払いますか？",
    a: "エディオンネットショップ・Amazon（工事費込み商品）・XPRICE・日立の公式ストアは、いずれも現地で必要になったオプション工事の費用を、工事当日に工事業者へ現金で支払う方式としています。配管の延長や専用コンセントの工事などが必要になる場合があるため、現金を用意しておくか、事前の下見・見積もりを利用すると安心です。",
  },
  {
    q: "他の店で買ったエアコンの取り付けだけを頼めますか？",
    a: "店舗によって異なります。PREMOA楽天市場店は、他店で購入した新品のルームエアコンの設置工事を「工事のみ」で受け付けており、新設は4.9kW以下で20,800円としています（2026年11月23日確認）。一方、Amazonの設置工事サービスはエアコンと同時の注文に限られます。購入前に、工事だけの依頼に対応しているかをご確認ください。",
  },
  {
    q: "エアコンを自分で取り付けてもよいですか？",
    a: "おすすめできません。日立は、お客様ご自身によるエアコンの据え付け・移設・取り外し・分解は水漏れや感電、火災の原因になるおそれがあるとしており、NITEも、一般の消費者が自分で作業すると破裂や発火などの事故に至るおそれがあるとしています。コンセントの増設などの電気工事は、電気工事士の免状が必要です（電気工事士法第3条）。",
  },
];

const shopRows = [
  {
    shop: "エディオンネットショップ",
    fee: "2.8kWまで 18,700円／3.6・4.0kW 19,800円／5.6kW以上 24,200円（税込・商品代金と別）",
    std: "配管4mまで、地上またはベランダ置き、真空引き、穴あけ1か所（木造・モルタル・ALC）、ドレンホース5mまで",
    extra: "注文時に追加する工事と、当日現地で現金払いの工事に分かれる。設置業者による事前見積もりも可能",
  },
  {
    shop: "Amazon（Amazon.co.jp販売の工事費込み商品）",
    fee: "商品価格に含む（クレジットカード決済のみ）",
    std: "公式ページでは画像で掲載されており、本文では確認できず",
    extra: "注文後2日以内に指定工事会社から電話、注文日から1か月以内に工事日を決定。オプション工事は現地で現金払い。原則キャンセル不可",
  },
  {
    shop: "Amazon（エアコン設置工事サービス）",
    fee: "工事完了後にAmazonが請求",
    std: "—",
    extra: "エアコンと同時に注文した場合に限る。サイト上で工事日時を指定。旧品の取り外し・リサイクルはオプション",
  },
  {
    shop: "XPRICE",
    fee: "2.2〜2.8kW 17,880円／3.6〜4.9kW 18,800円／5.0〜7.1kW 23,000円",
    std: "冷媒銅管・ドレンホース・連絡電線各4m、ベランダか地面置き、真空引き、通水試験、試運転",
    extra: "オプション工事は当日現地で設置業者に現金払い。事前下見3,300円。工事保証3年",
  },
  {
    shop: "日立の家電品オンラインストア",
    fee: "—",
    std: "室外機は同一フロア置き、配管4m（露出配管）。穴あけ・コンセント交換は標準工事に含まない",
    extra: "工事会社へ発注し、配送係からの電話で詳細を相談。追加工事は当日現金払い。下見3,300円（税込）",
  },
];

const th = "border border-slate-300 bg-slate-100 px-3 py-2";
const td = "border border-slate-300 px-3 py-2 leading-6 align-top text-xs";

export default function OnlinePurchaseInstallationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "費用・比較", href: "/cost/repair-price/" },
          { name: "通販で買う場合の取り付け工事", href: "/guide/online-purchase-installation/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">取り付けガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンを通販で買う場合の取り付け工事
            <br className="hidden md:block" />
            申込み方・標準工事の範囲・追加料金の払い方
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-23">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンを通販で買う場合は、<strong className="font-semibold text-slate-900">購入と同時に標準取付工事を申し込む</strong>のが基本です。
            標準工事費は<strong className="font-semibold text-slate-900">2.8kWクラスで2万円弱</strong>が当サイトで確認した範囲で、配管4mを超える延長などの<strong className="font-semibold text-slate-900">追加工事は当日に現金で支払う</strong>方式が多くなっています。
            本記事では、当サイトが{UPDATED}に通販各社の公式ページを確認した結果をご紹介します。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">要点（{UPDATED}確認）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>標準工事費：<strong>エディオン 18,700円〜（税込）／XPRICE 17,880円〜</strong></li>
              <li>標準工事の配管は<strong>4mまで</strong>が各社共通。超える分は追加料金</li>
              <li>追加工事は<strong>当日、工事業者に現金払い</strong>（エディオン・Amazon・XPRICE・日立）</li>
              <li>Amazonの設置工事サービスは<strong>エアコンと同時の注文に限る</strong></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">通販4社の取り付け工事の比較</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              公式ページで工事の条件を確認できた通販サイトを、同じ項目でまとめました（Amazonは2種類の方式があるため2行に分けています）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[760px]">
                <thead>
                  <tr className="text-sm">
                    <th className={`${th} whitespace-nowrap`}>通販サイト</th>
                    <th className={th}>標準工事費</th>
                    <th className={th}>標準工事の範囲</th>
                    <th className={th}>申込み・追加工事の払い方</th>
                  </tr>
                </thead>
                <tbody>
                  {shopRows.map((r) => (
                    <tr key={r.shop}>
                      <td className={`${td} font-semibold text-sm`}>{r.shop}</td>
                      <td className={td}>{r.fee}</td>
                      <td className={td}>{r.std}</td>
                      <td className={td}>{r.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。「—」は公式ページで記載を確認できなかった項目です。XPRICEの料金は公式ページの表記どおりで、詳細な条件は各社のページでご確認ください。ヨドバシ.com・ビックカメラ.com・ジョーシンWeb・ケーズデンキのオンラインのページは、当サイトからは表示できなかったため掲載していません。アイリスプラザは2026年10月28日からECサイトを停止しています（11月5日更新のお知らせ）。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              店頭の家電量販店の標準工事費・追加工事費は<Link href="/cost/installation/" className="text-sky-700 underline">エアコン取り付け費用の目安（量販店4社）</Link>に掲載しています。通販と店頭で工事費の表記が異なる場合があり、エディオンも店頭向けのページで「ネットショップは別表記」としています。
            </p>
          </section>

          <section id="extra" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">追加工事になりやすい作業と料金の例</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">エディオンネットショップが公表している追加工事の例（税込）は次のとおりです。</p>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li>配管の延長（5.6kW以下）：<strong>1mごとに4,070円</strong></li>
              <li>古いエアコンの取り外し（庭・ベランダ）：<strong>6,600円</strong></li>
              <li>専用コンセントの工事：<strong>16,500〜30,250円</strong>（配線10mまで）</li>
              <li>2006年8月31日以前に着工した建物での穴あけ：特定建築材穴あけ対策費<strong>16,500円〜</strong></li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              古いエアコンの処分には、家電リサイクル料金と収集運搬料金がかかります。エディオンネットショップは収集運搬料金1,100円＋リサイクル料金990〜2,000円としています。
              追加料金が心配な場合は、エディオンの事前見積もりやXPRICE・日立の下見（3,300円）を利用し、設置場所の条件を工事前に確認しておくと安心です。
            </p>
          </section>

          <section id="cautions" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">通販で買う前に確認したいこと</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm leading-7 text-slate-700">
              <li><strong>工事は購入と同時に申し込めるか</strong>：Amazonの設置工事サービスは、エアコンと同時に注文した場合に限るとしています</li>
              <li><strong>工事日の決め方と期限</strong>：Amazonの工事費込み商品は、注文後2日以内に工事会社から電話があり、注文日から1か月以内に工事が終わらないと注文がキャンセルされます。連絡がつかない場合もキャンセル扱いになるとしています</li>
              <li><strong>キャンセルの条件</strong>：Amazonの工事費込み商品は原則キャンセル不可で、クーリングオフも適用されないとしています。XPRICEは、取り付けできなかった場合のキャンセル料・返品手数料を免除する「エアコン工事安心パック」（1,000円）を用意しています</li>
              <li><strong>工事の時期</strong>：Amazonは2026年11月23日時点で、原材料の供給不足により希望の工事日程を変更する場合があると告知しています</li>
              <li><strong>工事保証</strong>：XPRICEは3年、PREMOA楽天市場店の工事のみのサービスは1年の保証を設けています</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              楽天市場の店舗は、工事の条件が店舗ごとに異なります。PREMOA楽天市場店のように、他店で購入した新品のエアコンの「工事のみ」を受け付ける店舗もあります（新設は4.9kW以下で20,800円、入替は28,500円）。
              取り付け工事のトラブル事例と依頼前の確認点は<Link href="/guide/installation-trouble/" className="text-sky-700 underline">エアコン取り付け業者がひどい場合の対処</Link>に掲載しています。
            </p>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身での取り付けは避ける</h2>
            <p className="text-sm leading-7 text-slate-700">
              日立は、エアコンの設置・移設・取り外し工事を自社では受け付けておらず、販売店や設置業者に相談するよう案内したうえで、「お客様ご自身によるエアコンの据え付けや移設、取り外し、分解は行わないでください。水漏れや感電、火災の原因になる恐れがあります」としています。
              NITEも、エアコンの工事には専門の知識や資格が必要な作業があり、一般の消費者が自分で作業すると破裂や発火などの事故に至るおそれがあるとしています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              電気工事士法第3条は、電気工事士の免状を受けている者でなければ、一般用電気工作物等に係る電気工事の作業（省令で定める軽微な作業を除く）に従事してはならないと定めています。コンセントの増設などが必要な場合は、資格を持つ作業者がいる業者にご依頼ください。
              取り付け後の不具合や、取り外し・移設を含む工事の相談先は<Link href="/ranking/" className="text-sky-700 underline">修理業者の比較</Link>をご覧ください。
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
              <li>エディオン ネットショップのエアコン工事 https://faq.edion.com/kb/article/delivery018/</li>
              <li>エディオン エアコンの取り付け工事（店頭）https://www.edion.com/ito/contents/special/lp/airconlp/installation.html</li>
              <li>Amazon 工事費込みエアコン https://www.amazon.co.jp/b?ie=UTF8&amp;node=10293983051</li>
              <li>Amazon エアコン設置工事サービス https://www.amazon.co.jp/b?ie=UTF8&amp;node=24819422051</li>
              <li>XPRICE エアコン設置工事 https://www.xprice.co.jp/c.php?id=338</li>
              <li>PREMOA楽天市場店 エアコン設置工事サービス https://www.rakuten.ne.jp/gold/premoa/contents/installation/aircon_service_ekm.html</li>
              <li>アイリスプラザ お知らせ https://www.irisplaza.co.jp/</li>
              <li>日立の家電品オンラインストア 標準工事について（2025年8月1日）https://store.kadenfan.hitachi.co.jp/pdf/hyouzyunkouji.pdf</li>
              <li>日立 エアコンの設置・移設工事について https://kadenfan.hitachi.co.jp/support/ra/q_a/post.html</li>
              <li>NITE エアコンの事故に関する資料 https://www.nite.go.jp/data/000138566.pdf</li>
              <li>電気工事士法（昭和三十五年法律第百三十九号）第3条 https://laws.e-gov.go.jp/law/335AC0000000139</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/installation/", label: "エアコン取り付け費用の目安（量販店4社）" },
                { href: "/guide/installation-trouble/", label: "取り付け工事のトラブルの対処" },
                { href: "/cost/replace-vs-repair/", label: "修理と買い替えの判断基準" },
                { href: "/guide/lifespan/", label: "エアコンの寿命は何年？" },
                { href: "/guide/warranty/", label: "エアコンの保証期間" },
                { href: "/guide/gas-overcharge/", label: "冷媒ガスの入れすぎ（過充填）" },
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
