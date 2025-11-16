import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Company() {
  const philosophy = [
    {
      title: "Pulgrit（パルグリット）",
      description: "「Pulse（脈動）」と「Grit（やり抜く力）」を組み合わせた造語。常に変化し続ける社会の中で、困難に立ち向かい、やり抜く力を持つ企業でありたいという想いを込めています。",
    },
    {
      title: "テクイロ",
      description: "「テクノロジー」と「彩り」を組み合わせた言葉。技術で人々の生活に彩りを添え、働く人々の日常をより豊かにすることを目指しています。",
    },
  ];

  const values = [
    {
      title: "現場ファースト",
      description: "机上の理論ではなく、現場の声に耳を傾け、本当に必要とされるものを作ります。",
    },
    {
      title: "シンプルであること",
      description: "複雑さは価値ではありません。誰もが使える、シンプルで美しいデザインを追求します。",
    },
    {
      title: "継続的な改善",
      description: "完成はゴールではなく、スタート。常にユーザーの声を聞き、改善し続けます。",
    },
  ];

  const story = [
    {
      year: "2020年",
      title: "創業",
      description: "中小企業のDX支援を目的に、Pulgrit / テクイロを設立。",
    },
    {
      year: "2021年",
      title: "Work Capsule開発開始",
      description: "現場の声を徹底的にヒアリングし、本当に使われるツールの開発をスタート。",
    },
    {
      year: "2022年",
      title: "正式リリース",
      description: "Work Capsuleを正式リリース。初年度で100社以上が導入。",
    },
    {
      year: "2023年",
      title: "機能拡充",
      description: "ユーザーの要望に応え、申請承認機能やデータ出力機能を追加。",
    },
    {
      year: "2024年",
      title: "導入企業500社突破",
      description: "様々な業界で導入が進み、累計導入企業数が500社を突破。",
    },
  ];

  const team = [
    {
      name: "山田 太郎",
      role: "代表取締役",
      description: "大手IT企業でエンジニアとして10年勤務後、中小企業のDX支援を志して起業。",
    },
    {
      name: "佐藤 花子",
      role: "CTO",
      description: "スタートアップでプロダクト開発を主導。シンプルで使いやすいUIデザインが得意。",
    },
    {
      name: "鈴木 一郎",
      role: "営業責任者",
      description: "中小企業向けSaaS営業で10年の経験。顧客の課題を深く理解し、最適な提案を行う。",
    },
    {
      name: "田中 美咲",
      role: "カスタマーサクセス",
      description: "導入企業の成功を第一に考え、手厚いサポートで顧客満足度向上に貢献。",
    },
  ];

  const companyInfo = {
    name: "株式会社 Pulgrit / テクイロ",
    established: "2020年4月",
    capital: "1,000万円",
    ceo: "山田 太郎",
    employees: "15名",
    address: "〒150-0001 東京都渋谷区神宮前1-1-1",
    phone: "03-1234-5678",
    email: "info@workcapsule.jp",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              会社情報
            </h1>
            <p className="text-xl text-muted-foreground">
              働く人々の日常に、彩りを。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card" id="philosophy">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">企業理念</h2>
            </div>
            <div className="space-y-8">
              {philosophy.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">代表メッセージ</h2>
            </div>
            <Card>
              <CardContent className="pt-8 space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-48 h-48 mx-auto bg-muted rounded-full flex items-center justify-center text-6xl">
                      👤
                    </div>
                    <div className="text-center mt-4">
                      <div className="font-bold text-lg">山田 太郎</div>
                      <div className="text-sm text-muted-foreground">代表取締役</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4 text-muted-foreground">
                    <p>
                      私たちは、「DXツールを導入したけど、現場が使ってくれない」という声を、何度も聞いてきました。
                      高機能なシステムを導入しても、現場の人々が使いこなせなければ、意味がありません。
                    </p>
                    <p>
                      Work Capsuleは、「現場が本当に使えるツール」を目指して開発されました。
                      スマホひとつで、誰でも、どこでも、迷わず使える。そんなシンプルさを追求しています。
                    </p>
                    <p>
                      私たちのミッションは、働く人々の日常をより豊かにすること。
                      面倒な業務から解放され、本来の仕事に集中できる環境を、すべての企業に届けたいと考えています。
                    </p>
                    <p className="font-semibold">
                      これからも、現場の声に耳を傾け、本当に必要とされるものを作り続けます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">私たちの価値観</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-2xl font-bold text-accent">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ストーリー</h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {story.map((item, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-5 top-2 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
                    <Card>
                      <CardContent className="pt-6 space-y-2">
                        <div className="text-sm font-semibold text-accent">{item.year}</div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">メンバー紹介</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-3xl">
                        👤
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm text-accent">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">会社概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-4 px-4 font-semibold w-1/3">会社名</td>
                      <td className="py-4 px-4">{companyInfo.name}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">設立</td>
                      <td className="py-4 px-4">{companyInfo.established}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">資本金</td>
                      <td className="py-4 px-4">{companyInfo.capital}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">代表取締役</td>
                      <td className="py-4 px-4">{companyInfo.ceo}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">従業員数</td>
                      <td className="py-4 px-4">{companyInfo.employees}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">所在地</td>
                      <td className="py-4 px-4 flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{companyInfo.address}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">電話</td>
                      <td className="py-4 px-4 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>{companyInfo.phone}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">メール</td>
                      <td className="py-4 px-4 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-accent" />
                        <span>{companyInfo.email}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Work Capsuleについてのご質問、導入のご相談など、<br />
              どんなことでもお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
