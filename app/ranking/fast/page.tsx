import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";
import AffiliateOfficialButton from "@/app/components/AffiliateOfficialButton";
import { FelmatOfficialButton } from "@/app/components/FelmatBanner";
import { getAffiliate } from "@/lib/affiliates";
import { getFelmat } from "@/lib/felmat";

export const metadata: Metadata = {
  title: "エアコン修理を当日・即日で頼める業者｜到着目安と受付時間を公式で比較【2026年11月】",
  description: "エアコン修理を当日・即日で依頼したい方向けに、到着の目安（最短5分〜60分前後の公称値）と電話の受付時間を各社の公式サイトで確認して比較しました（2026年11月27日確認）。当日中に頼むための手順と、当日に直らないケースもまとめています。",
  alternates: { canonical: "/ranking/fast/" },
};

// Sort by fastest response
const fastCompanies = [...companies]
  .sort((a, b) => {
    // 「最短N分」は分数、即日・当日は同日扱い、翌日はその次
    const getSpeed = (t: string) => {
      const m = t.match(/最短(\d+)分/);
      if (m) return parseInt(m[1]);
      if (t.includes("即日") || t.includes("当日")) return 600;
      if (t.includes("翌日")) return 1440;
      return 99999;
    };
    return getSpeed(a.responseTime) - getSpeed(b.responseTime);
  })
  .slice(0, 5);

export default function FastRankingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "業者ランキング", href: "/ranking" },
          { name: "即日対応ランキング", href: "/ranking/fast" },
        ]}
      />

      <section className="bg-[var(--color-brand)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">PR</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4"> 即日対応の修理業者ランキング</h1>
          <p className="text-orange-100 text-lg">急なエアコントラブルに早く対応できる上位5社です</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Emergency Tips */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-10">
          <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <span></span> 急な修理の前に確認すること
          </h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">1.</span> 最初にブレーカーとコンセントを確認します（これらが原因の場合も多くあります）</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">2.</span> リモコンの電池を確認します</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">3.</span> エラーコードが表示されている場合は記録します</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">4.</span> 焦げ臭い場合は使用を中止し、ブレーカーを切ります</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">5.</span> 機種名（型番）を確認しておくと、手配が円滑になります</li>
          </ol>
        </div>

        {/* 結論と公式の到着目安（2026-11-27 追加） */}
        <section className="bg-white rounded-2xl p-6 border border-gray-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3">結論：当日の訪問は「受付時間内に電話して、空きがあれば」可能です</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            当サイトが下表の5社の公式サイトを確認したところ、到着の目安は「最短5分」から「60分前後」まで公称されています。ただし、いずれの公式サイトにも「スケジュールや距離により時間が変動する」「夜間・繁忙期は対応できない場合がある」といった注記があり、当日の訪問を保証する記載ではありません。部品の取り寄せが必要な故障は、当日に訪問できても修理の完了が後日になることがあります（目安は<Link href="/guide/repair-days" className="text-sky-600 underline">修理にかかる日数</Link>をご覧ください）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-gray-200 p-2">業者</th>
                  <th className="border border-gray-200 p-2">公式に記載の到着目安</th>
                  <th className="border border-gray-200 p-2">電話の受付時間（公式）</th>
                  <th className="border border-gray-200 p-2">公式の注記</th>
                  <th className="border border-gray-200 p-2">確認日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2"><Link href="/company/take-service" className="text-sky-600 underline">テイクサービス</Link></td>
                  <td className="border border-gray-200 p-2">最短5分（FAQ「どの位で到着しますか？」の回答）</td>
                  <td className="border border-gray-200 p-2">受付時間の記載なし（夜間は「ご相談いただければ希望に合わせて伺う」）</td>
                  <td className="border border-gray-200 p-2">夜間・繁忙期は他の業者を紹介する場合あり</td>
                  <td className="border border-gray-200 p-2">2026年11月27日</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2"><Link href="/company/airhome-support" className="text-sky-600 underline">エアホーム</Link></td>
                  <td className="border border-gray-200 p-2">最短10分で現場急行・場合によって即日対応も可能</td>
                  <td className="border border-gray-200 p-2">24時間365日受付</td>
                  <td className="border border-gray-200 p-2">一部地域は案内まで時間がかかる場合あり（対応は8都府県）</td>
                  <td className="border border-gray-200 p-2">2026年10月15日（公式の画像内の表記。11月27日は文字情報として取得できず未再確認）</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2"><Link href="/company/denki-koujiya" className="text-sky-600 underline">電気の工事屋さん</Link></td>
                  <td className="border border-gray-200 p-2">都合が合えば最短30分</td>
                  <td className="border border-gray-200 p-2">10:00〜19:00・年中無休</td>
                  <td className="border border-gray-200 p-2">工事などは翌日となる場合あり</td>
                  <td className="border border-gray-200 p-2">2026年11月27日</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2"><Link href="/company/aircon-trouble-center" className="text-sky-600 underline">エアコントラブルセンター</Link></td>
                  <td className="border border-gray-200 p-2">電話の後30分以内に対応・1時間以内に現場へ向かう</td>
                  <td className="border border-gray-200 p-2">受付時間の記載なし</td>
                  <td className="border border-gray-200 p-2">加盟スタッフのスケジュールや遠方の場合は時間が変動</td>
                  <td className="border border-gray-200 p-2">2026年11月27日</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2"><Link href="/company/denki110" className="text-sky-600 underline">DENKI110</Link></td>
                  <td className="border border-gray-200 p-2">電話は即日対応・到着時間は電話で案内（FAQでは最短60分前後）</td>
                  <td className="border border-gray-200 p-2">9:00〜22:00・年中無休（メールは24時間）</td>
                  <td className="border border-gray-200 p-2">現場対応はスケジュールにより別日の場合あり・交通状況で到着が前後</td>
                  <td className="border border-gray-200 p-2">2026年11月27日（FAQの60分前後は2026年10月15日確認）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">出典：各社公式サイト（aircon.assist-life-service.com／airhomesupport.com／denki-koji.work／aircon-troubleone.com／denki110.net）。到着目安はいずれも各社の公称値で、当サイトが実測したものではありません。</p>
        </section>

        {/* Ranking */}
        <div className="space-y-6">
          {fastCompanies.map((c, index) => (
            <div key={c.slug} className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-3 bg-orange-50">
                <span className="text-xl font-black text-orange-600">#{index + 1}</span>
                <h2 className="text-lg font-bold text-slate-900">{c.name}</h2>
                <span className="ml-auto font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
                   {c.responseTime}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{c.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.features.map((f) => (
                    <span key={f} className="text-xs border border-[var(--color-line-strong)] text-[var(--color-brand)] px-2 py-1 rounded">{f}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-sky-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">費用の目安</p>
                    <p className="font-bold text-sky-700 text-sm">{c.avgCost}</p>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">対応エリア</p>
                    <p className="font-bold text-green-700 text-sm">{c.coverage}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/company/${c.slug}`}
                    className="ac-btn ac-btn-outline flex-1 text-sm py-2.5"
                  >
                    詳細を見る
                  </Link>
                  {getAffiliate(c.slug) ? (
                    <AffiliateOfficialButton
                      slug={c.slug}
                      label="公式サイトで相談する（PR）"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : getFelmat(c.slug) ? (
                    <FelmatOfficialButton
                      slug={c.slug}
                      label="公式サイトで相談する（PR）"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    />
                  ) : (
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="ac-btn ac-btn-cta flex-1 text-sm py-2.5"
                    >
                      公式サイトで相談する（PR）
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[var(--color-brand)] rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">エアコンの修理をお急ぎの方へ</h2>
          <p className="text-orange-100 text-sm mb-6">24時間365日受付の業者に相談できます。最短で即日の修理に対応する業者もあります。</p>
          <Link
            href="/ranking"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors"
          >
            全26社のランキングを見る
          </Link>
        </div>
        {/* 今日直すための実用ガイド（2026-07-04追加） */}
        <section className="mt-12 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">当日中に修理を依頼するための4つの手順</h2>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
              <li><strong>朝一番（受付開始直後）に電話する</strong>：即日の訪問枠は先着順で埋まるためです。24時間受付の業者であれば、深夜〜早朝の予約も有効です。</li>
              <li><strong>症状・機種情報を先にまとめる</strong>：室内機のメーカー名と型番（前面パネル下部などのシール）、症状（冷えない/水漏れ/異音/エラーコード）、設置年をメモしてから電話すると、手配が円滑に進みます。</li>
              <li><strong>複数社に同時に問い合わせる</strong>：繁忙期は、1社目で「明日以降」と案内される場合があります。24時間受付の複数の業者に問い合わせ、早く訪問できる業者に依頼することをおすすめします。</li>
              <li><strong>集合住宅の場合は管理会社にも連絡します</strong>：賃貸物件では、修理費の負担者（貸主負担の場合があります）を事前に確認すると、トラブルを防げます。</li>
            </ol>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h2 className="text-xl font-bold text-orange-900 mb-3">業者の到着までの応急対処（安全を最優先してください）</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・電源プラグを抜き差しして再起動します（リセットで解消する一時的な不具合もあります）</li>
              <li>・フィルターの目詰まりを確認・清掃し、室外機の周りの物を移動します（吸排気の確保のためです）</li>
              <li>・冷房が効かない間は、カーテンで直射日光を遮る、扇風機を併用する、水分を補給するなど、熱中症対策を最優先してください</li>
              <li>・<strong>焦げ臭い・煙・火花がある場合は使用を中止</strong>し、プラグを抜いて業者に連絡してください（火災のおそれがあるためです）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">※分解を伴う作業や冷媒ガスの処置には専用の工具と技術が要ります。無理をせず、業者にご依頼ください。症状別の詳しい対処は<Link href="/symptom" className="text-sky-600 underline font-bold">症状から探す</Link>をご覧ください。</p>
          </div>
        </section>

      </div>
    </>
  );
}
