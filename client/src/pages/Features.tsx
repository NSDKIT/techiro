import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Users, 
  Calendar, 
  ClipboardList, 
  FileCheck, 
  MessageSquare,
  Database,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  const features = [
    {
      id: "business-card",
      icon: Smartphone,
      title: "名刺管理",
      description: "スマホで撮影するだけで、名刺情報を自動でデータ化。顧客情報を一元管理し、営業活動を効率化します。",
      benefits: [
        "スマホカメラで撮影、即座にデータ化",
        "OCR技術で高精度な文字認識",
        "顧客情報の検索・編集が簡単",
        "名刺データのCSV出力に対応",
      ],
      flow: [
        "スマホで名刺を撮影",
        "自動でテキストデータに変換",
        "必要に応じて編集・補正",
        "顧客リストに自動登録",
      ],
    },
    {
      id: "attendance",
      icon: Users,
      title: "勤怠",
      description: "出退勤をスマホでワンタップ記録。リアルタイムで勤務状況を把握し、集計作業を自動化します。",
      benefits: [
        "ワンタップで出退勤を記録",
        "GPS位置情報で不正打刻を防止",
        "リアルタイムで勤務状況を確認",
        "月次集計を自動生成",
      ],
      flow: [
        "出勤時にアプリを開く",
        "「出勤」ボタンをタップ",
        "退勤時に「退勤」ボタンをタップ",
        "勤務時間が自動で記録・集計",
      ],
    },
    {
      id: "shift",
      icon: Calendar,
      title: "シフト",
      description: "シフト作成から共有まで、すべてアプリ内で完結。スタッフの希望を集約し、最適なシフトを簡単に作成できます。",
      benefits: [
        "スタッフの希望シフトを一括収集",
        "ドラッグ&ドロップで簡単作成",
        "作成したシフトを即座に共有",
        "変更通知を自動送信",
      ],
      flow: [
        "スタッフが希望シフトを提出",
        "管理者がシフトを作成",
        "シフトを確定・公開",
        "スタッフに自動通知",
      ],
    },
    {
      id: "survey",
      icon: ClipboardList,
      title: "アンケート",
      description: "現場の声を即座に収集。カスタマイズ可能なアンケートフォームで、スタッフの意見や顧客満足度を把握できます。",
      benefits: [
        "自由にカスタマイズ可能なフォーム",
        "スマホから簡単に回答",
        "回答結果をリアルタイムで集計",
        "グラフで視覚的に分析",
      ],
      flow: [
        "管理者がアンケートを作成",
        "対象者に配信",
        "スマホから回答を送信",
        "結果を自動集計・分析",
      ],
    },
    {
      id: "approval",
      icon: FileCheck,
      title: "申請・承認",
      description: "休暇申請や経費精算など、あらゆる申請業務をデジタル化。承認フローを可視化し、処理スピードを向上させます。",
      benefits: [
        "スマホから申請書を作成・提出",
        "承認者に自動通知",
        "承認状況をリアルタイムで確認",
        "承認履歴を自動保存",
      ],
      flow: [
        "申請者がフォームを入力",
        "承認者に通知が届く",
        "承認者が承認・差し戻し",
        "申請者に結果を通知",
      ],
    },
    {
      id: "communication",
      icon: MessageSquare,
      title: "社内連絡・共有",
      description: "チーム内の情報共有をスムーズに。お知らせ、ファイル共有、チャット機能で、コミュニケーションを活性化します。",
      benefits: [
        "お知らせを一斉配信",
        "ファイルの共有・管理",
        "既読確認で伝達状況を把握",
        "重要な情報をピン留め",
      ],
      flow: [
        "管理者がお知らせを作成",
        "対象メンバーに配信",
        "メンバーが通知を受信",
        "既読状況を確認",
      ],
    },
    {
      id: "data-export",
      icon: Database,
      title: "データ出力",
      description: "蓄積されたデータをCSV形式で出力。外部システムとの連携や、詳細な分析に活用できます。",
      benefits: [
        "各種データをCSV形式で出力",
        "期間指定での抽出が可能",
        "給与計算ソフトとの連携",
        "カスタムレポートの作成",
      ],
      flow: [
        "出力したいデータを選択",
        "期間や条件を指定",
        "CSVファイルを生成",
        "ダウンロード・活用",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              機能一覧
            </h1>
            <p className="text-xl text-muted-foreground">
              日々の業務をスマホひとつで完結させる、7つの機能
            </p>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                            <feature.icon className="h-7 w-7 text-accent" />
                          </div>
                          <h2 className="text-3xl font-bold">{feature.title}</h2>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-8">
                          {feature.description}
                        </p>

                        {/* Benefits */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4">特徴</h3>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Flow */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">操作フロー</h3>
                          <div className="space-y-3">
                            {feature.flow.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <span className="text-muted-foreground pt-0.5">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className={`bg-muted flex items-center justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="w-full max-w-sm">
                          <img
                            src="/smartphone-ui.jpg"
                            alt={`${feature.title}のUI`}
                            className="w-full h-auto rounded-2xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              すべての機能を無料で試せます
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Freeプランなら、5ユーザーまで無料で全機能をお試しいただけます。<br />
              クレジットカード登録も不要です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  無料で始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  料金プランを見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
