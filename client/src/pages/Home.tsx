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
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const features = [
    { icon: Smartphone, title: "名刺管理", description: "スマホで撮影、即座にデータ化" },
    { icon: Users, title: "勤怠", description: "出退勤をワンタップで記録" },
    { icon: Calendar, title: "シフト", description: "シフト作成・共有を自動化" },
    { icon: ClipboardList, title: "アンケート", description: "現場の声を即座に収集" },
    { icon: FileCheck, title: "申請承認", description: "承認フローをデジタル化" },
    { icon: MessageSquare, title: "社内連絡", description: "情報共有を一元管理" },
  ];

  const challenges = [
    {
      icon: Zap,
      title: "ツール乱立による混乱",
      description: "複数アプリを使い分ける状況は、もう終わりです。Work Capsuleならすべてがひとつに。",
    },
    {
      icon: Target,
      title: "現場が使わない問題",
      description: "スマホだけで使えるため、現場導入率が圧倒的に高い。誰でも迷わず使えます。",
    },
    {
      icon: TrendingUp,
      title: "紙とExcel依存",
      description: "申請、集計、共有──すべて自動化。時間もコストも削減できます。",
    },
  ];

  const beforeAfter = {
    before: [
      "アプリが多すぎる",
      "Excelの手入力",
      "勤務簿が提出されない",
      "情報共有が属人化",
      "紙が消えない",
    ],
    after: [
      "ひとつの画面で全業務が完結",
      "自動化された集計",
      "スマホから即提出",
      "誰でも同じ操作で使える",
      "紙ゼロ、ミスゼロへ",
    ],
  };

  const caseStudies = [
    {
      industry: "飲食業",
      company: "A社レストランチェーン",
      result: "シフト作成時間を80%削減",
      comment: "スタッフ全員がスマホで確認できるようになり、連絡ミスがゼロになりました。",
    },
    {
      industry: "小売業",
      company: "B社アパレル店舗",
      result: "勤怠管理の工数を70%削減",
      comment: "紙のタイムカードから解放され、集計作業が劇的に楽になりました。",
    },
    {
      industry: "製造業",
      company: "C社工場",
      result: "申請承認のスピードが3倍に",
      comment: "現場からの報告がリアルタイムで上がるようになり、意思決定が早くなりました。",
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "¥0",
      description: "小規模チーム向け",
      features: ["5ユーザーまで", "基本機能", "メールサポート"],
    },
    {
      name: "Standard",
      price: "¥500",
      description: "成長企業向け",
      features: ["50ユーザーまで", "全機能利用可", "優先サポート"],
      popular: true,
    },
    {
      name: "Business",
      price: "お問い合わせ",
      description: "大規模組織向け",
      features: ["無制限ユーザー", "カスタマイズ対応", "専任サポート"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  働くを軽くする。<br />
                  すべてが、あなたの<br />
                  手の中に。
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Work Capsule は、日々の業務をひとつにまとめる<br />
                  スマホ完結型の業務プラットフォームです。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                    無料で相談してみる
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    資料をダウンロード
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="relative z-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-2xl"
                >
                  <source src="/workcapsule-hero.mp4" type="video/mp4" />
                  お使いのブラウザは動画タグをサポートしていません。
                </video>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Work Capsuleとは</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Work Capsule は、中小企業のバラバラな業務を"ひとつのカプセル"に統合する
                スマホ完結型の業務DXサービスです。
              </p>
              <p>
                名刺管理、勤怠、シフト、アンケート、申請承認など
                現場で毎日起きる面倒な業務が、すべてスマホひとつで完結します。
              </p>
              <p>
                「ツールが多すぎて誰も使わない問題」をゼロにし、
                現場が迷わず使える"人にやさしいDX"を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">解決する課題</h2>
            <p className="text-lg text-muted-foreground">
              Work Capsuleが解決する、中小企業の3つの課題
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <challenge.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Digest Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">メイン機能</h2>
            <p className="text-lg text-muted-foreground">
              日々の業務をスマホひとつで完結
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" size="lg">
                機能一覧を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before → After</h2>
            <p className="text-lg text-muted-foreground">
              Work Capsule導入前と導入後の変化
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <Card className="bg-muted/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h3 className="text-2xl font-bold">Before</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.before.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-accent/5 border-2 border-accent">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold">After</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.after.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">導入事例</h2>
            <p className="text-lg text-muted-foreground">
              様々な業界で成果を上げています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-semibold">{study.company}</h3>
                  <div className="text-2xl font-bold text-accent">{study.result}</div>
                  <p className="text-muted-foreground italic">"{study.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/case-study">
              <Button variant="outline" size="lg">
                導入事例をもっと見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">料金プラン</h2>
            <p className="text-lg text-muted-foreground">
              あなたのチームに最適なプランを選択
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-2 border-accent shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      人気
                    </span>
                  </div>
                )}
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    {plan.price.includes("¥") && <span className="text-sm font-normal text-muted-foreground">/月</span>}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      詳細を見る
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              まずは無料で相談してみませんか?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              15分のオンライン相談で、あなたの会社に最適な導入プランをご提案します。<br />
              資料ダウンロードも可能です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  無料相談を予約
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  資料をダウンロード
                  <Database className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
