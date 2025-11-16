import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users,
  CheckCircle2,
  Quote
} from "lucide-react";
import { Link } from "wouter";

export default function CaseStudy() {
  const industries = [
    { id: "restaurant", name: "飲食業", icon: "🍽️" },
    { id: "retail", name: "小売業", icon: "🛍️" },
    { id: "manufacturing", name: "製造業", icon: "🏭" },
    { id: "office", name: "オフィス", icon: "🏢" },
    { id: "care", name: "介護", icon: "🏥" },
  ];

  const cases = [
    {
      industry: "飲食業",
      industryIcon: "🍽️",
      company: "A社レストランチェーン",
      employees: "150名",
      location: "東京都・神奈川県",
      challenge: "複数店舗のシフト管理が煩雑で、連絡ミスが頻発。紙のシフト表では変更の共有に時間がかかり、スタッフからの不満も多かった。",
      solution: "Work Capsuleのシフト機能を導入。スタッフがスマホから希望シフトを提出し、管理者が一元管理。変更があれば即座に全員に通知される仕組みを構築。",
      results: [
        { metric: "シフト作成時間", value: "80%削減", icon: Clock },
        { metric: "連絡ミス", value: "ゼロ化", icon: CheckCircle2 },
        { metric: "スタッフ満足度", value: "35%向上", icon: TrendingUp },
      ],
      testimonial: {
        quote: "以前は毎週シフト作成に3時間かかっていましたが、今では30分で完了します。スタッフ全員がスマホで確認できるようになり、連絡ミスがゼロになりました。",
        author: "店舗マネージャー 田中様",
      },
    },
    {
      industry: "小売業",
      industryIcon: "🛍️",
      company: "B社アパレル店舗",
      employees: "80名",
      location: "大阪府",
      challenge: "紙のタイムカードで勤怠管理をしており、月末の集計作業に膨大な時間がかかっていた。打刻漏れも多く、給与計算にミスが発生することも。",
      solution: "Work Capsuleの勤怠機能を導入。スマホでワンタップ打刻を実現し、GPS機能で不正打刻を防止。勤務データは自動集計され、給与計算ソフトと連携。",
      results: [
        { metric: "集計作業時間", value: "70%削減", icon: Clock },
        { metric: "打刻漏れ", value: "95%減少", icon: CheckCircle2 },
        { metric: "給与計算ミス", value: "ゼロ化", icon: TrendingUp },
      ],
      testimonial: {
        quote: "紙のタイムカードから解放され、集計作業が劇的に楽になりました。スタッフも出退勤をスマホで記録できるので、打刻漏れがほとんどなくなりました。",
        author: "人事担当 佐藤様",
      },
    },
    {
      industry: "製造業",
      industryIcon: "🏭",
      company: "C社工場",
      employees: "200名",
      location: "愛知県",
      challenge: "現場からの報告が紙ベースで、管理者への情報伝達に時間がかかっていた。緊急の申請も承認まで数日かかり、業務効率が低下。",
      solution: "Work Capsuleの申請承認機能を導入。現場スタッフがスマホから申請を送信し、管理者がリアルタイムで承認。承認フローを可視化し、処理状況を追跡可能に。",
      results: [
        { metric: "承認スピード", value: "3倍向上", icon: TrendingUp },
        { metric: "紙の使用量", value: "90%削減", icon: CheckCircle2 },
        { metric: "意思決定速度", value: "2倍向上", icon: Clock },
      ],
      testimonial: {
        quote: "現場からの報告がリアルタイムで上がるようになり、意思決定が早くなりました。紙の申請書を探す手間もなくなり、業務効率が大幅に向上しました。",
        author: "工場長 鈴木様",
      },
    },
    {
      industry: "オフィス",
      industryIcon: "🏢",
      company: "D社IT企業",
      employees: "50名",
      location: "東京都",
      challenge: "リモートワークが増え、社内コミュニケーションが希薄に。複数のツールを使い分けることで、情報が分散し、重要な連絡を見逃すことも。",
      solution: "Work Capsuleの社内連絡機能を導入。お知らせ、ファイル共有、既読確認を一元化。重要な情報はピン留めし、全員が確実に確認できる環境を構築。",
      results: [
        { metric: "情報伝達速度", value: "50%向上", icon: TrendingUp },
        { metric: "ツール数", value: "5→1に削減", icon: CheckCircle2 },
        { metric: "連絡漏れ", value: "80%減少", icon: Clock },
      ],
      testimonial: {
        quote: "複数のツールを使い分ける煩わしさから解放されました。既読確認機能で、誰が情報を確認したか一目で分かるので、安心して連絡できます。",
        author: "総務部長 山田様",
      },
    },
    {
      industry: "介護",
      industryIcon: "🏥",
      company: "E社介護施設",
      employees: "120名",
      location: "福岡県",
      challenge: "スタッフの入れ替わりが多く、業務の引き継ぎが困難。複雑なシステムは現場スタッフに受け入れられず、結局紙に戻ってしまう状況。",
      solution: "Work CapsuleのシンプルなUIが決め手となり、全機能を導入。名刺管理、勤怠、シフト、申請承認をすべてスマホで完結。マニュアル不要で誰でも使える環境を実現。",
      results: [
        { metric: "新人教育時間", value: "60%削減", icon: Clock },
        { metric: "業務引き継ぎ", value: "スムーズ化", icon: CheckCircle2 },
        { metric: "システム利用率", value: "95%達成", icon: Users },
      ],
      testimonial: {
        quote: "以前導入したシステムは複雑で誰も使いませんでしたが、Work Capsuleはスマホだけで完結するので、現場スタッフ全員が抵抗なく使っています。",
        author: "施設長 高橋様",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              導入事例
            </h1>
            <p className="text-xl text-muted-foreground">
              様々な業界で、Work Capsuleが成果を上げています
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-card sticky top-16 z-40 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="px-4 py-2 bg-background border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-colors flex items-center gap-2"
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-medium">{industry.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-20">
            {cases.map((caseStudy, index) => (
              <div key={index} id={caseStudy.industry} className="scroll-mt-32">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 border-b border-border">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">{caseStudy.industryIcon}</div>
                          <div>
                            <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-2">
                              {caseStudy.industry}
                            </div>
                            <h2 className="text-2xl font-bold mb-1">{caseStudy.company}</h2>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>従業員数: {caseStudy.employees}</span>
                              <span>所在地: {caseStudy.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                      {/* Before */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center text-sm font-bold">
                            Before
                          </div>
                          導入前の課題
                        </h3>
                        <p className="text-muted-foreground pl-10">{caseStudy.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm font-bold">
                            After
                          </div>
                          Work Capsuleでの解決策
                        </h3>
                        <p className="text-muted-foreground pl-10">{caseStudy.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">数値的成果</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {caseStudy.results.map((result, idx) => (
                            <Card key={idx} className="bg-accent/5 border-accent/20">
                              <CardContent className="pt-6 text-center space-y-3">
                                <result.icon className="h-8 w-8 text-accent mx-auto" />
                                <div>
                                  <div className="text-sm text-muted-foreground mb-1">{result.metric}</div>
                                  <div className="text-2xl font-bold text-accent">{result.value}</div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-accent">
                        <Quote className="h-8 w-8 text-accent mb-4" />
                        <p className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</p>
                        <p className="text-sm text-muted-foreground">— {caseStudy.testimonial.author}</p>
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
              あなたの会社でも、同じ成果を
            </h2>
            <p className="text-lg text-primary-foreground/80">
              無料相談で、あなたの課題に最適なソリューションをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  無料相談を予約
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
