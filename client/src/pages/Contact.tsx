import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "メール",
      value: "info@workcapsule.jp",
      description: "24時間受付。3営業日以内に返信いたします。",
    },
    {
      icon: Phone,
      title: "電話",
      value: "03-1234-5678",
      description: "平日 10:00-18:00",
    },
    {
      icon: MessageSquare,
      title: "チャット",
      description: "右下のチャットアイコンからお気軽にご相談ください。",
      action: "チャットを開く",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              お問い合わせ
            </h1>
            <p className="text-xl text-muted-foreground">
              Work Capsuleについてのご質問、導入のご相談など、<br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ方法</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                      <method.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    {method.value && (
                      <p className="text-lg font-medium text-accent">{method.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    {method.action && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toast.info("チャット機能は準備中です")}
                      >
                        {method.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせフォーム</h2>
              <p className="text-muted-foreground">
                下記フォームに必要事項をご記入の上、送信してください。
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">会社名</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="株式会社サンプル"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="例: 導入について相談したい"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      送信する
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Consultation */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="pt-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">無料相談予約</h2>
                <p className="text-lg text-muted-foreground">
                  15分のオンライン相談で、あなたの会社に最適な導入プランをご提案します。<br />
                  お気軽にご予約ください。
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <span>✓ 導入費用の見積もり</span>
                    <span>✓ 機能のデモ</span>
                    <span>✓ カスタマイズ相談</span>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => toast.info("予約システムは準備中です。お問い合わせフォームよりご連絡ください。")}
                  >
                    無料相談を予約する
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">オフィス情報</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">本社</h3>
                    <p className="text-muted-foreground">
                      〒150-0001<br />
                      東京都渋谷区神宮前1-1-1<br />
                      Work Capsuleビル 5F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">電話</h3>
                    <p className="text-muted-foreground">
                      03-1234-5678<br />
                      受付時間: 平日 10:00-18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">メール</h3>
                    <p className="text-muted-foreground">
                      info@workcapsule.jp<br />
                      24時間受付
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
