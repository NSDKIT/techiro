import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "ホーム", href: "/" },
    { label: "サービス", href: "/service" },
    { label: "機能", href: "/features" },
    { label: "料金", href: "/pricing" },
    { label: "導入事例", href: "/case-study" },
    { label: "会社情報", href: "/company" },
    { label: "ブログ", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
              <span className="text-xl font-bold text-foreground">{APP_TITLE}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-accent cursor-pointer ${
                    location === item.href ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                資料請求
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                無料相談
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block text-sm font-medium transition-colors hover:text-accent cursor-pointer ${
                      location === item.href ? "text-accent" : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    資料請求
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setMobileMenuOpen(false)}>
                    無料相談
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
