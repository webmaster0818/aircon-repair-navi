import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エアコンクリーニングを安く頼む方法｜8社の公式料金を総額で比較（複数台割引・追加料金・駐車料金）【2026年11月確認】",
  description:
    "エアコンクリーニングを安く頼む方法を、クリーニング事業者8社の公式料金（壁掛けタイプ・税込・2026年11月20日確認）で比較しました。お掃除機能の有無による料金差、複数台割引、キャンペーン、防カビコート・室外機の追加料金、出張費・駐車料金まで含めた総額の比べ方と、2台依頼時の当サイト試算を掲載しています。",
  alternates: { canonical: "/guide/cheap-cleaning/" },
};

const UPDATED = "2026年11月20日";

const faqs = [
  {
    q: "エアコンクリーニングを安く頼むには、どうすればよいですか？",
    a: "当サイトが2026年11月20日に8社の公式料金を確認したところ、料金を下げる方法として有効だったのは、①2台以上をまとめて依頼する（複数台割引）、②お掃除機能の有無を正しく伝えて見積もる、③防カビコート・室外機・駐車料金を含めた総額で比べる、④キャンペーン・初回割引・閑散期を利用する、の4点です。たとえばおそうじ本舗は、お掃除機能なしの壁掛けタイプが1台14,300円、2台以上の注文で1台12,100円（いずれも税込）です。",
  },
  {
    q: "壁掛けタイプのエアコンクリーニングはいくらくらいですか？",
    a: "8社の公式ページに2026年11月20日時点で表示されていた1台目の料金（税込）は、お掃除機能なしが9,800〜15,400円、お掃除機能付きが18,000〜26,400円でした（初回限定価格を除く）。期間限定の特別価格を含むため、ご依頼の際は各社の公式サイトで最新の料金をご確認ください。",
  },
  {
    q: "お掃除機能付きエアコンはなぜ高いのですか？",
    a: "お掃除機能付きエアコンは内部にお掃除ユニットがあり、分解に時間がかかるためです。おそうじ本舗はサービス時間をお掃除機能なしで約2時間／台、お掃除機能付きで3〜4時間／台としています。8社の公式料金では、お掃除機能付きはお掃除機能なしより1台あたり5,500〜11,000円高く設定されていました（2026年11月20日確認・税込）。",
  },
  {
    q: "表示価格以外にかかる費用はありますか？",
    a: "各社の公式ページでは、防カビ・抗菌コートや室外機洗浄などのオプション料金、駐車スペースがない場合の駐車料金が案内されています。たとえば清風は駐車料金を2,000円を上限に実費、ベアーズはコインパーキング利用時に1,018円〜2,037円の負担としています。一方、カジタクは駐車場料金を「どの地域でも無料」、おそうじ革命は出張費・駐車場代などの追加料金なしと案内しています（2026年11月20日確認）。",
  },
  {
    q: "安い時期はありますか？",
    a: "おそうじ本舗は、繁忙期を5月中旬〜9月上旬頃と11月中旬〜12月下旬、閑散期を3月後半〜4月頃と9月後半〜11月前半とし、閑散期は「お得なキャンペーンなどの割引サービスも多い」と案内しています。また、アールクリーニングは1月以降の作業の予約で10％OFFとなる新春早割キャンペーン（先着100名様）を2026年11月16日から告知しています（2026年11月20日確認）。",
  },
];

type Row = {
  name: string;
  slug?: string;
  normal: string;
  normalMulti: string;
  robot: string;
  robotMulti: string;
  coat: string;
  outdoor: string;
  visit: string;
  campaign: string;
};

const rows: Row[] = [
  {
    name: "おそうじ本舗",
    normal: "14,300円",
    normalMulti: "2台以上で1台12,100円",
    robot: "24,200円",
    robotMulti: "2台以上で1台22,000円",
    coat: "防カビチタンコーティング 3,300円",
    outdoor: "5,500円",
    visit: "ページ内に記載なし",
    campaign: "確認日時点で掲載なし",
  },
  {
    name: "ダスキン",
    slug: "duskin-servicemaster",
    normal: "15,400円",
    normalMulti: "2台セット25,300円・3台目から1台12,650円（同一世帯に限る）",
    robot: "26,400円",
    robotMulti: "2台セット47,300円・3台目から1台23,650円",
    coat: "抗菌コート 2,750円",
    outdoor: "6,600円",
    visit: "駐車できない場合は駐車料金の負担あり。土日祝・夜間は追加費用の場合あり",
    campaign: "1回20,000円（税込）以上を対象のキャッシュレス決済で1,500ポイント（2026年11月30日まで）",
  },
  {
    name: "カジタク（スタンダード）",
    slug: "kajitaku",
    normal: "11,880円（通常価格14,300円）",
    normalMulti: "2台以上で1台11,550円",
    robot: "18,980円（通常価格25,080円）",
    robotMulti: "2台以上で1台18,900円",
    coat: "防カビ抗菌コート 無料（全プラン）",
    outdoor: "6,600円",
    visit: "駐車場料金0円（どの地域でも無料と記載）",
    campaign: "キャンペーン価格を表示中。新規会員登録1,100円OFFクーポン等の案内あり",
  },
  {
    name: "ベアーズ",
    slug: "happy-bears",
    normal: "14,190円",
    normalMulti: "ページ内に記載なし",
    robot: "21,780円",
    robotMulti: "ページ内に記載なし",
    coat: "汚れ防止コーティング 2,200円／防カビコーティング 5,500円",
    outdoor: "5,500円",
    visit: "コインパーキング利用時は駐車料金の一部（1,018円〜2,037円）を負担",
    campaign: "確認日時点で掲載なし",
  },
  {
    name: "おそうじ革命",
    slug: "osouji-kakumei",
    normal: "9,980円",
    normalMulti: "2台目以降1台7,980円〜（最大2,000円引き）",
    robot: "18,700円",
    robotMulti: "2台目以降1台16,700円〜",
    coat: "防カビ抗菌コート 2,750円",
    outdoor: "3,300円（床置きの室外機のみ）",
    visit: "出張費・駐車場代などの追加料金なしと記載。全国一律価格",
    campaign: "確認日時点で掲載なし",
  },
  {
    name: "清風",
    slug: "seifu-ac",
    normal: "13,200円",
    normalMulti: "家庭用は記載なし（業務用のみ2〜3台割引あり）",
    robot: "18,700円",
    robotMulti: "記載なし",
    coat: "防カビ・抗菌コート 2,200円",
    outdoor: "5,500円",
    visit: "駐車場の用意が難しい場合、2,000円を上限に実費",
    campaign: "期間限定キャンペーンは実施せず、2021年からキャンペーン価格を通常価格として提供と記載",
  },
  {
    name: "アールクリーニング",
    slug: "r-cleaning",
    normal: "10,780円（特別価格・通常価格19,350円）",
    normalMulti: "2台目以降1台9,680円（特別価格）",
    robot: "18,700円（特別価格・通常価格24,750円）",
    robotMulti: "ページ内に記載なし",
    coat: "防カビ・抗菌イオンコーティングを作業工程に含むと記載",
    outdoor: "4,500円（11月限定・通常価格8,800円）",
    visit: "対象エリア内は無料。エリア外は出張料金3,000円〜。駐車スペースがない場合はパーキング料金を負担",
    campaign: "受付期限つきの特別価格を表示中。1月以降の作業予約で10％OFFの新春早割（先着100名様・他の割引と併用不可）",
  },
  {
    name: "おそうじLabo",
    slug: "osoji-labo",
    normal: "9,800円（初回限定8,800円）",
    normalMulti: "2台目以降1台7,800円",
    robot: "18,000円（初回限定17,000円）",
    robotMulti: "2台目以降1台16,000円",
    coat: "抗菌・防カビコート 2,200円（キャンペーン適用で0円・終了時期未定）",
    outdoor: "3,300円",
    visit: "対応エリア内は出張費無料・駐車料金は事業者負担と記載",
    campaign: "初回限定で総額から1,000円OFF",
  },
];

const diffRows = [
  { name: "おそうじ本舗", normal: "14,300円", robot: "24,200円", diff: "9,900円" },
  { name: "ダスキン", normal: "15,400円", robot: "26,400円", diff: "11,000円" },
  { name: "カジタク（スタンダード）", normal: "11,880円", robot: "18,980円", diff: "7,100円" },
  { name: "ベアーズ", normal: "14,190円", robot: "21,780円", diff: "7,590円" },
  { name: "おそうじ革命", normal: "9,980円", robot: "18,700円", diff: "8,720円" },
  { name: "清風", normal: "13,200円", robot: "18,700円", diff: "5,500円" },
  { name: "アールクリーニング", normal: "10,780円", robot: "18,700円", diff: "7,920円" },
  { name: "おそうじLabo", normal: "9,800円", robot: "18,000円", diff: "8,200円" },
];

const simRows = [
  { name: "おそうじ本舗", base: "24,200円", coat: "30,800円", note: "12,100円×2台＋防カビチタンコーティング3,300円×2台" },
  { name: "ダスキン", base: "25,300円", coat: "30,800円", note: "2台セット25,300円＋抗菌コート2,750円×2台" },
  { name: "カジタク（スタンダード）", base: "23,100円", coat: "23,100円", note: "11,550円×2台。防カビ抗菌コートは無料" },
  { name: "ベアーズ", base: "28,380円", coat: "39,380円", note: "14,190円×2台＋防カビコーティング5,500円×2台" },
  { name: "おそうじ革命", base: "17,960円〜", coat: "23,460円〜", note: "9,980円＋7,980円〜（最大割引時）＋防カビ抗菌コート2,750円×2台" },
  { name: "清風", base: "26,400円", coat: "30,800円", note: "13,200円×2台＋防カビ・抗菌コート2,200円×2台" },
  { name: "アールクリーニング", base: "20,460円", coat: "20,460円", note: "特別価格10,780円＋9,680円。コーティングは作業工程に含む" },
  { name: "おそうじLabo", base: "17,600円", coat: "17,600円", note: "2台セット17,600円。コートはキャンペーンで0円。初回はさらに1,000円OFF" },
];

const linkCls = "text-sky-700 underline";

export default function CheapCleaningPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ガイド", href: "/guide/cleaning-frequency/" },
          { name: "エアコンクリーニングを安く頼む方法", href: "/guide/cheap-cleaning/" },
        ]}
      />

      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-5 pt-10 pb-6">
          <p className="text-sm font-semibold tracking-widest text-sky-700 mb-3">お手入れガイド</p>
          <h1 className="text-[1.7rem] leading-snug md:text-[2.1rem] md:leading-tight font-bold text-slate-900">
            エアコンクリーニングを安く頼む方法
            <br className="hidden md:block" />
            8社の公式料金を総額で比較
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>エアコン修理ナビ編集部</span>
            <span className="text-slate-300">|</span>
            <time dateTime="2026-11-20">最終更新：{UPDATED}</time>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-5 pt-4">
          <p className="text-[1.05rem] leading-8 text-slate-700">
            エアコンクリーニングを安く頼むには、<strong className="font-semibold text-slate-900">2台以上をまとめて依頼する</strong>、<strong className="font-semibold text-slate-900">お掃除機能の有無を正しく伝える</strong>、<strong className="font-semibold text-slate-900">オプションと駐車料金を含めた総額で比べる</strong>の3点が効果的です。
            当サイトでは{UPDATED}に、クリーニング事業者8社の公式ページで壁掛けタイプの料金（税込）を確認し、同じ項目でそろえて比較しました。
            1台目の表示価格だけでなく、複数台割引や追加料金まで含めると、同じ2台の依頼でも総額に差が出ることが分かります。
          </p>
          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-5">
            <p className="font-bold text-sky-900 mb-2">壁掛けタイプの料金の目安（{UPDATED}確認・税込）</p>
            <ul className="text-sm leading-7 text-slate-700 list-disc pl-5 space-y-1">
              <li>お掃除機能なし1台：<strong>9,800〜15,400円</strong>（初回限定価格を除く）</li>
              <li>お掃除機能付き1台：<strong>18,000〜26,400円</strong>（お掃除機能なしより5,500〜11,000円高い）</li>
              <li>2台以上の依頼：8社中6社が複数台の割引料金を掲載</li>
              <li>防カビ・抗菌コート：0〜5,500円／台、室外機洗浄：3,300〜8,800円／台（通常価格）</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 space-y-14">
          <section id="compare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">8社の壁掛けタイプの公式料金（{UPDATED}確認・税込）</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              各社の公式サイトのエアコンクリーニング（壁掛けタイプ）のページに表示されていた料金を、同じ項目でそろえました。料金はすべて税込です。掲載順は料金の順位ではありません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[960px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能なし（1台）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能なし（複数台）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能付き（1台）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能付き（複数台）</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">防カビ・抗菌コート</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">室外機</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">出張費・駐車料金</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">割引・キャンペーン</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">
                        {r.slug ? (
                          <Link href={`/company/${r.slug}/`} className={linkCls}>{r.name}</Link>
                        ) : (
                          r.name
                        )}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.normal}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.normalMulti}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top">{r.robot}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.robotMulti}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.coat}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.outdoor}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.visit}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs">{r.campaign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認。ダスキンは幅120cm未満の料金です。ベアーズの料金は公式ページの料金欄に表示される金額です。アールクリーニングの特別価格は、確認日時点で「11月20日までの受付」と表示されていた期間限定の価格です。カジタクは通常価格に打ち消し線を付けたキャンペーン価格を表示していました。
              おそうじLabo（大阪府・兵庫県の一部）、アールクリーニング（東京都・埼玉県・神奈川県・千葉県）、清風（関東・関西・東海）は対応エリアが限られています。料金・キャンペーンは変更される場合があるため、ご依頼前に各社の公式サイトにて最新情報をご確認ください。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              おそうじ本舗とダスキンについては、天井埋め込みタイプやオプションを含む料金表を<Link href="/cost/cleaning-fee/" className={linkCls}>エアコンクリーニング料金の比較</Link>に掲載しています。
            </p>
          </section>

          <section id="how" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">安く頼むための4つの方法</h2>

            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">1. 2台以上をまとめて依頼する</h3>
            <p className="text-sm leading-7 text-slate-700">
              8社のうち6社が、家庭用の壁掛けタイプで複数台の割引料金を掲載していました。お掃除機能なしの場合、1台あたりの値引き額はダスキンが2台セットで計5,500円（同社は「2台ご注文で5,500円おトク！」と記載）、おそうじ本舗が1台2,200円、おそうじLaboとおそうじ革命が2台目以降1台最大2,000円です。
              寝室とリビングなど、時期をそろえて同時に依頼すると総額を抑えやすくなります。なお、ダスキンは複数台料金を同一世帯でのサービスに限るとしています。
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">2. お掃除機能の有無を確認してから見積もる</h3>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              お掃除機能付きエアコンは、分解に時間がかかるため料金が高く設定されています。各社の1台目の料金差は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能なし</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">お掃除機能付き</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">差額</th>
                  </tr>
                </thead>
                <tbody>
                  {diffRows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.normal}</td>
                      <td className="border border-slate-300 px-3 py-2">{r.robot}</td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold">{r.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}確認・税込。当サイトが各社の公式料金から算出しました。カジタク・アールクリーニングはキャンペーン価格・特別価格、おそうじLaboは通常価格で計算しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              見分け方として、おそうじLabo・カジタク・ベアーズは、リモコンに「フィルターおそうじ」「手動掃除」などのボタンがあるかどうかを案内しています。おそうじLaboとカジタクは、本体の奥行きが30cm以上の場合もお掃除機能付きの可能性が高いとしています。
              また、おそうじ本舗は富士通のノクリアXシリーズとシャープのAirestシリーズを、お掃除機能の有無に関わらずお掃除機能付きと同じ価格で案内しています。申込み前に型番を確認しておくと、当日の料金変更を避けられます。
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">3. オプション・出張費・駐車料金を含めた総額で比べる</h3>
            <p className="text-sm leading-7 text-slate-700">
              1台目の価格が近くても、防カビ・抗菌コートの扱いは各社で異なります。カジタクは全プランで無料、アールクリーニングは作業工程に含むと記載し、おそうじLaboもキャンペーンで0円としている一方、ほかの事業者では2,200〜5,500円の有料オプションです。
              駐車料金も、清風は2,000円を上限に実費、ベアーズは1,018円〜2,037円の一部負担としているのに対し、カジタク・おそうじ革命・おそうじLaboは追加の負担なしと案内しています。
              集合住宅などで駐車スペースがない場合は、この差も総額に含めて比較することをおすすめします。
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">4. キャンペーン・初回割引・閑散期を利用する</h3>
            <p className="text-sm leading-7 text-slate-700">
              確認日時点では、カジタクのキャンペーン価格、アールクリーニングの特別価格、おそうじLaboの初回限定価格（総額から1,000円OFF）が掲載されていました。アールクリーニングは、1月以降の作業の予約で10％OFFとなる新春早割キャンペーン2027（先着100名様）も告知しています。
              時期については、おそうじ本舗が閑散期（3月後半〜4月頃、9月後半〜11月前半）を「お得なキャンペーンなどの割引サービスも多い」時期として案内しています。依頼時期の考え方は<Link href="/guide/cleaning-frequency/" className={linkCls}>エアコンクリーニングの頻度</Link>もあわせてご覧ください。
              なお、清風は期間限定キャンペーンを実施せず、2021年からキャンペーン価格を通常価格として提供していると記載しています。
            </p>
          </section>

          <section id="simulation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">当サイトの試算：お掃除機能なし2台を依頼した場合の総額</h2>
            <p className="text-sm leading-7 text-slate-700 mb-4">
              上の公式料金をもとに、壁掛けタイプ（お掃除機能なし）2台を同時に依頼した場合の総額を当サイトで計算しました。室外機洗浄・駐車料金・初回割引は含めていません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">事業者</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">クリーニングのみ</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2 whitespace-nowrap">防カビ系コート込み</th>
                    <th className="border border-slate-300 bg-slate-100 px-3 py-2">計算の内訳</th>
                  </tr>
                </thead>
                <tbody>
                  {simRows.map((r) => (
                    <tr key={r.name}>
                      <td className="border border-slate-300 px-3 py-2 font-semibold whitespace-nowrap align-top">{r.name}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top">{r.base}</td>
                      <td className="border border-slate-300 px-3 py-2 whitespace-nowrap align-top font-semibold">{r.coat}</td>
                      <td className="border border-slate-300 px-3 py-2 leading-6 align-top text-xs text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              ※{UPDATED}時点の公式料金（税込）による当サイトの試算です。キャンペーン価格・特別価格は終了する場合があります。ベアーズは「防カビコーティング」（5,500円）で計算しています。各社のコーティングは名称・施工範囲が異なります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              クリーニングのみの総額は17,600〜28,380円でしたが、コーティングを加えると30,800円で並ぶ事業者が3社ありました。コーティングを希望する場合は、無料または作業に含む事業者を選ぶと総額を抑えられます。
              ただし、洗浄の範囲は各社のプランによって異なります。たとえばカジタクには9,700円の「エアコンクリーニングライト」もありますが、本体の分解洗浄は行わず、熱交換器・シロッコファンなど本体内部は対象外とされています。料金を比べる際は、内部の高圧洗浄が含まれるプランどうしで比べることが大切です。
              洗浄範囲の違いは<Link href="/guide/disassembly-cleaning/" className={linkCls}>完全分解洗浄と通常洗浄の違い</Link>で詳しくご説明しています。
            </p>
          </section>

          <section id="market" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">マッチングサイトで個人事業者に依頼する場合</h2>
            <p className="text-sm leading-7 text-slate-700">
              <Link href="/company/kurashi-market/" className={linkCls}>くらしのマーケット</Link>のエアコンクリーニングのページでは、出店している事業者の料金をもとにした相場として、壁掛けタイプ1台¥8,000〜¥10,000、2台¥14,000〜¥20,000、3台¥21,000〜¥29,000、室外機洗浄¥2,500〜¥4,000、消臭抗菌コート¥1,000〜¥2,000が表示されていました（{UPDATED}確認。税込・税抜の表記はありません）。
              料金は出店事業者ごとに異なるため、お掃除機能付きの料金や出張費の有無は、各事業者のページでご確認ください。
            </p>
          </section>

          <section id="diy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-sky-600 pl-4 mb-5">ご自身でできる範囲で費用を抑える</h2>
            <p className="text-sm leading-7 text-slate-700">
              エアフィルターの掃除はご自身で行うことができ、メーカー各社は約2週間に1回を目安として案内しています（<Link href="/guide/cleaning-frequency/" className={linkCls}>メーカー別の目安</Link>）。日頃のお手入れで汚れの蓄積を抑えておくと、業者に依頼する間隔を検討しやすくなります。
              一方、熱交換器や送風ファンなど内部の洗浄は、メーカー各社がご自身で行わず専門業者へ依頼するよう案内しています。手順と注意点は<Link href="/guide/diy-cleaning/" className={linkCls}>エアコン掃除を自分でできる範囲</Link>に掲載しています。
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
              <li>おそうじ本舗「壁掛けタイプエアコンクリーニング」https://www.osoujihonpo.com/house-cleaning/aircon/wall/</li>
              <li>おそうじ本舗「エアコンクリーニングの頻度は年１回！」https://www.osoujihonpo.com/guide/aircon/220216-01/</li>
              <li>ダスキン「エアコンクリーニング（壁掛けタイプ）」https://www.duskin.jp/servicemaster/spot/sm000010/</li>
              <li>カジタク「エアコンクリーニング」https://www.kajitaku.com/house-cleaning/airconditioner/</li>
              <li>カジタク「特定商取引法に基づく表記」https://www.kajitaku.com/guide/law</li>
              <li>ベアーズ「エアコンクリーニング・お掃除」https://www.happy-bears.com/houseclean/aircon/</li>
              <li>おそうじ革命「エアコンクリーニング」https://www.osoujikakumei.jp/aircon-cleaning/</li>
              <li>エアコンクリーニング清風「料金一覧」https://seifu-ac.jp/menu/pricelist.html</li>
              <li>エアコンクリーニング清風「キャンペーン」https://seifu-ac.jp/campaign/</li>
              <li>アールクリーニング「エアコン（壁掛けタイプ）」https://r-cleaning.com/air-conditioner/</li>
              <li>アールクリーニング「今年も開催！新春早割キャンペーン2027！」https://r-cleaning.com/news/detail.php?slug=new-year-campaign-2027</li>
              <li>おそうじLabo 公式サイト https://osojilabo.com/</li>
              <li>くらしのマーケット「エアコンクリーニング」https://curama.jp/aircon/</li>
            </ul>
          </section>

          <section className="pb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/cost/cleaning-fee/", label: "エアコンクリーニング料金の比較" },
                { href: "/guide/cleaning-frequency/", label: "エアコンクリーニングの頻度" },
                { href: "/guide/disassembly-cleaning/", label: "完全分解洗浄と通常洗浄の違い" },
                { href: "/guide/diy-cleaning/", label: "エアコン掃除を自分でできる範囲" },
                { href: "/ranking/", label: "エアコン修理・クリーニング業者の比較" },
                { href: "/guide/smell/", label: "エアコンの臭いの原因と対処" },
                { href: "/guide/auto-clean-function/", label: "お掃除機能付きエアコンは必要か" },
                { href: "/guide/cleaning-effect/", label: "エアコンクリーニングの効果と依頼の判断" },
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
