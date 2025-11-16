import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Lightbulb, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

export default function Service() {
  const benefits = [
    {
      icon: Clock,
      title: "導入1日で使い始められる",
      description: "複雑な設定は不要。アカウント作成後、すぐに現場で使い始められます。マニュアル不要のシンプルなUIで、誰でも迷わず操作できます。",
    },
    {
      icon: Users,
      title: "現場の使用率が圧倒的に高い",
      description: "スマホだけで完結するため、PCが苦手な現場スタッフでも抵抗なく使えます。「使われないツール」問題を根本から解決します。",
    },
    {
      icon: TrendingUp,
      title: "業務効率が劇的に向上",
      description: "紙やExcelの手作業から解放され、集計・共有が自動化。管理者の工数を大幅に削減し、本来の業務に集中できます。",
    },
  ];

  const competitors = [
    { feature: "スマホ完結", workCapsule: true, others: false },
    { feature: "導入の簡単さ", workCapsule: true, others: false },
    { feature: "現場の使用率", workCapsule: true, others: false },
    { feature: "複数機能統合", workCapsule: true, others: false },
    { feature: "低価格", workCapsule: true, others: false },
    { feature: "日本語サポート", workCapsule: true, others: true },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              働くを、ひとつに。
            </h1>
            <p className="text-xl text-muted-foreground">
              Work Capsuleは、中小企業のバラバラな業務を統合し、<br />
              現場が本当に使える"人にやさしいDX"を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">コンセプト</h2>
              <p className="text-lg text-muted-foreground">
                働くをひとつに
              </p>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                中小企業の現場では、勤怠管理、シフト作成、申請承認、情報共有など、
                日々さまざまな業務が発生します。しかし、それぞれに異なるツールやアプリを使い分けることで、
                かえって混乱が生まれ、「結局誰も使わない」という問題が起きています。
              </p>
              <p>
                Work Capsuleは、これらすべての業務を"ひとつのカプセル"に統合。
                スマホひとつで、誰でも、どこでも、迷わず使える環境を提供します。
              </p>
              <p>
                私たちが目指すのは、単なるデジタル化ではありません。
                現場の人々が本当に使いたくなる、"人にやさしいDX"です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Capsule誕生の背景</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                私たちは、中小企業の経営者や現場スタッフから、こんな声を何度も聞いてきました。
              </p>
              <div className="bg-muted/50 p-6 rounded-lg italic border-l-4 border-accent">
                <p className="mb-3">「DXツールを導入したけど、現場が使ってくれない」</p>
                <p className="mb-3">「アプリが多すぎて、どれを使えばいいか分からない」</p>
                <p>「結局、紙とExcelに戻ってしまった」</p>
              </div>
              <p>
                これらの問題の根本原因は、「ツールが現場に寄り添っていない」ことでした。
                PCが前提、複雑な操作、バラバラなシステム──これでは、忙しい現場スタッフが使いこなせるはずがありません。
              </p>
              <p>
                そこで私たちは、「スマホひとつで、すべてが完結する」というコンセプトのもと、
                Work Capsuleを開発しました。現場の声を徹底的に聞き、本当に必要な機能だけを、
                最もシンプルな形で提供することにこだわりました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capsule Structure Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Capsule構造とは</h2>
              <p className="text-lg text-muted-foreground">
                すべての業務を、ひとつのカプセルに
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">統合された業務環境</h3>
                    <p className="text-muted-foreground">
                      名刺管理、勤怠、シフト、アンケート、申請承認、社内連絡──
                      すべてがひとつのアプリに統合されています。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">シンプルなUI</h3>
                    <p className="text-muted-foreground">
                      マニュアル不要。直感的に操作できるUIで、
                      誰でも迷わず使い始められます。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">セキュアなデータ管理</h3>
                    <p className="text-muted-foreground">
                      企業データは暗号化され、安全に保管。
                      権限管理も柔軟に設定できます。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">リアルタイム同期</h3>
                    <p className="text-muted-foreground">
                      データはクラウドで即座に同期。
                      どこからでも最新情報にアクセスできます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/smartphone-mockup.jpg"
                alt="Work Capsule UI"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">導入メリット</h2>
            <p className="text-lg text-muted-foreground">
              Work Capsuleがもたらす3つの価値
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">競合との違い</h2>
              <p className="text-lg text-muted-foreground">
                Work Capsuleが選ばれる理由
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-semibold">機能・特徴</th>
                    <th className="text-center py-4 px-4 font-semibold">Work Capsule</th>
                    <th className="text-center py-4 px-4 font-semibold">他社ツール</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((item, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-4 px-4">{item.feature}</td>
                      <td className="text-center py-4 px-4">
                        {item.workCapsule ? (
                          <CheckCircle2 className="h-6 w-6 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {item.others ? (
                          <CheckCircle2 className="h-6 w-6 text-muted-foreground mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work Capsuleを試してみませんか?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              無料プランで今すぐ始められます。<br />
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  無料相談を予約
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  機能一覧を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
