import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const categories = [
    { id: "all", name: "すべて", count: 12 },
    { id: "dx", name: "中小企業DX", count: 4 },
    { id: "tips", name: "活用Tips", count: 3 },
    { id: "case", name: "失敗事例と教訓", count: 3 },
    { id: "update", name: "製品アップデート", count: 2 },
  ];

  const posts = [
    {
      id: 1,
      title: "中小企業がDXで失敗する3つの理由と対策",
      category: "中小企業DX",
      date: "2024年11月10日",
      excerpt: "DX推進で失敗する企業には共通点があります。現場が使わない、コストがかかりすぎる、効果が見えない──これらの問題を解決する方法とは?",
      image: "/smartphone-mockup.jpg",
      tags: ["DX", "中小企業", "失敗事例"],
    },
    {
      id: 2,
      title: "Work Capsuleで勤怠管理を効率化する5つのステップ",
      category: "活用Tips",
      date: "2024年11月5日",
      excerpt: "勤怠管理の効率化は、Work Capsuleの基本機能の一つ。導入から運用までの具体的なステップを解説します。",
      image: "/smartphone-ui.jpg",
      tags: ["勤怠管理", "活用方法", "Tips"],
    },
    {
      id: 3,
      title: "シフト作成時間を80%削減した飲食店の事例",
      category: "失敗事例と教訓",
      date: "2024年10月28日",
      excerpt: "複数店舗を運営する飲食チェーンが、Work Capsuleのシフト機能でどのように業務を改善したのか、詳しくご紹介します。",
      image: "/capsule-hero.jpg",
      tags: ["事例", "飲食業", "シフト管理"],
    },
    {
      id: 4,
      title: "【製品アップデート】申請承認フローのカスタマイズ機能を追加",
      category: "製品アップデート",
      date: "2024年10月20日",
      excerpt: "より柔軟な承認フローを実現するため、カスタマイズ機能を追加しました。複数段階の承認や条件分岐にも対応します。",
      image: "/smartphone-mockup.jpg",
      tags: ["アップデート", "新機能", "申請承認"],
    },
    {
      id: 5,
      title: "紙の業務をゼロにする──デジタル化の第一歩",
      category: "中小企業DX",
      date: "2024年10月15日",
      excerpt: "紙の業務をデジタル化することで、どれだけのコスト削減と効率化が実現できるのか? 具体的な数値とともに解説します。",
      image: "/smartphone-ui.jpg",
      tags: ["DX", "ペーパーレス", "効率化"],
    },
    {
      id: 6,
      title: "Work Capsuleのデータ出力機能を使いこなす",
      category: "活用Tips",
      date: "2024年10月8日",
      excerpt: "蓄積されたデータを最大限活用するために、データ出力機能の使い方を詳しく解説します。給与計算ソフトとの連携方法も紹介。",
      image: "/capsule-hero.jpg",
      tags: ["データ出力", "連携", "Tips"],
    },
    {
      id: 7,
      title: "DXツール導入で陥りがちな「使われない問題」の解決法",
      category: "失敗事例と教訓",
      date: "2024年10月1日",
      excerpt: "高機能なツールを導入しても、現場が使わなければ意味がありません。使われるツールにするための3つのポイントとは?",
      image: "/smartphone-mockup.jpg",
      tags: ["DX", "失敗事例", "現場活用"],
    },
    {
      id: 8,
      title: "【製品アップデート】モバイルアプリのUI改善を実施",
      category: "製品アップデート",
      date: "2024年9月25日",
      excerpt: "ユーザーの皆様からのフィードバックをもとに、モバイルアプリのUIを大幅に改善しました。より直感的で使いやすくなっています。",
      image: "/smartphone-ui.jpg",
      tags: ["アップデート", "UI改善", "モバイル"],
    },
    {
      id: 9,
      title: "中小企業のためのDX入門──何から始めるべきか",
      category: "中小企業DX",
      date: "2024年9月18日",
      excerpt: "DXを始めたいけど、何から手をつければいいか分からない──そんな中小企業の経営者に向けて、最初の一歩を解説します。",
      image: "/capsule-hero.jpg",
      tags: ["DX", "入門", "中小企業"],
    },
    {
      id: 10,
      title: "シフト管理で起こりがちなトラブルと対策",
      category: "活用Tips",
      date: "2024年9月10日",
      excerpt: "シフト管理でよくあるトラブル──連絡ミス、変更の遅れ、スタッフの不満──を、Work Capsuleでどう解決できるのか解説します。",
      image: "/smartphone-mockup.jpg",
      tags: ["シフト管理", "トラブル対策", "Tips"],
    },
    {
      id: 11,
      title: "介護施設がWork Capsuleで業務効率を2倍にした方法",
      category: "失敗事例と教訓",
      date: "2024年9月3日",
      excerpt: "スタッフの入れ替わりが多い介護施設で、どのようにWork Capsuleを活用し、業務効率を大幅に向上させたのか、詳しくご紹介します。",
      image: "/smartphone-ui.jpg",
      tags: ["事例", "介護", "業務効率化"],
    },
    {
      id: 12,
      title: "DX推進で経営者が知っておくべき3つのポイント",
      category: "中小企業DX",
      date: "2024年8月28日",
      excerpt: "DX推進を成功させるために、経営者が押さえておくべきポイントとは? 現場を巻き込み、成果を出すための考え方を解説します。",
      image: "/capsule-hero.jpg",
      tags: ["DX", "経営", "成功のポイント"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              ブログ
            </h1>
            <p className="text-xl text-muted-foreground">
              中小企業DXに関する情報や、Work Capsuleの活用方法をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-card sticky top-16 z-40 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 bg-background border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-colors"
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2 hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full"
                      onClick={() => alert("記事詳細ページは準備中です")}
                    >
                      続きを読む
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <Button variant="outline" disabled>
              前へ
            </Button>
            <Button variant="outline" className="bg-accent text-accent-foreground">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">
              次へ
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              最新記事をメールで受け取る
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Work Capsuleの最新情報や活用Tipsを、週1回メールでお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレス"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button variant="secondary">
                登録する
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
