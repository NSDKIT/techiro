import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Free",
      price: "¥0",
      period: "永久無料",
      description: "小規模チーム向け",
      features: [
        "5ユーザーまで",
        "基本機能すべて利用可",
        "データ保存容量 1GB",
        "メールサポート",
        "モバイルアプリ利用可",
      ],
      limitations: [
        "データ出力機能は制限あり",
        "カスタマイズ不可",
      ],
      cta: "無料で始める",
      popular: false,
    },
    {
      name: "Standard",
      price: "¥500",
      period: "/月・ユーザー",
      description: "成長企業向け",
      features: [
        "50ユーザーまで",
        "全機能利用可",
        "データ保存容量 50GB",
        "優先メールサポート",
        "データ出力無制限",
        "カスタムレポート作成",
        "API連携",
      ],
      limitations: [],
      cta: "14日間無料トライアル",
      popular: true,
    },
    {
      name: "Business",
      price: "お問い合わせ",
      period: "",
      description: "大規模組織向け",
      features: [
        "無制限ユーザー",
        "全機能利用可",
        "データ保存容量 無制限",
        "専任サポート担当",
        "カスタマイズ対応",
        "オンプレミス対応可",
        "SLA保証",
        "導入支援サービス",
      ],
      limitations: [],
      cta: "お問い合わせ",
      popular: false,
    },
  ];

  const options = [
    {
      name: "追加ストレージ",
      price: "¥100/月",
      description: "10GB単位で追加可能",
    },
    {
      name: "導入支援サービス",
      price: "¥50,000〜",
      description: "専任スタッフによる導入サポート",
    },
    {
      name: "カスタム開発",
      price: "お問い合わせ",
      description: "独自機能の開発・カスタマイズ",
    },
    {
      name: "研修プログラム",
      price: "¥30,000〜",
      description: "スタッフ向けトレーニング",
    },
  ];

  const faqs = [
    {
      question: "無料プランから有料プランへの移行は簡単ですか?",
      answer: "はい、管理画面から数クリックでアップグレードできます。データはすべて引き継がれるため、再設定の必要はありません。",
    },
    {
      question: "支払い方法は何がありますか?",
      answer: "クレジットカード(Visa、Mastercard、JCB、American Express)、銀行振込に対応しています。年間契約の場合は請求書払いも可能です。",
    },
    {
      question: "途中でプランを変更できますか?",
      answer: "はい、いつでもプラン変更が可能です。アップグレードは即座に反映され、ダウングレードは次回更新時に適用されます。",
    },
    {
      question: "解約はいつでもできますか?",
      answer: "はい、いつでも解約可能です。解約手数料は一切かかりません。解約後もデータは30日間保持されます。",
    },
    {
      question: "ユーザー数の上限を超えた場合はどうなりますか?",
      answer: "上限を超える前に通知が届きます。プランをアップグレードするか、不要なユーザーを削除することで対応できます。",
    },
    {
      question: "データのセキュリティは大丈夫ですか?",
      answer: "すべてのデータは暗号化され、ISO27001認証を取得したデータセンターで管理されています。定期的なバックアップも実施しています。",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "無料アカウント作成",
      description: "メールアドレスだけで、すぐに始められます。",
    },
    {
      step: 2,
      title: "チーム設定",
      description: "メンバーを招待し、権限を設定します。",
    },
    {
      step: 3,
      title: "機能のカスタマイズ",
      description: "必要な機能を選択し、設定を行います。",
    },
    {
      step: 4,
      title: "運用開始",
      description: "すぐに現場で使い始められます。",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              料金プラン
            </h1>
            <p className="text-xl text-muted-foreground">
              あなたのチームに最適なプランを選択してください。<br />
              すべてのプランで14日間の無料トライアルをご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-2 border-accent shadow-2xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      最も人気
                    </span>
                  </div>
                )}
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">
                      {plan.price}
                    </div>
                    {plan.period && (
                      <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                    )}
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.length > 0 && (
                      <>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="h-5 w-5 flex-shrink-0 mt-0.5"></div>
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">オプション</h2>
              <p className="text-lg text-muted-foreground">
                さらに充実したサポートをご希望の方へ
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{option.name}</h3>
                      <span className="text-accent font-bold">{option.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">導入までの流れ</h2>
              <p className="text-lg text-muted-foreground">
                最短1日で運用開始できます
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">よくある質問</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                      <ArrowRight 
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-8 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              まずは無料で試してみませんか?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              クレジットカード登録不要。5分で始められます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  無料で始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
