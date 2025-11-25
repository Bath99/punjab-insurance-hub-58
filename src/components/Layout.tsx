import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: createPageUrl("Services") },
    { name: "Get Quotes", href: createPageUrl("GetQuotes") },
    { name: "Contact", href: createPageUrl("Contact") },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/1faacd25e_images.png"
                alt="Punjab Insurance Logo"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-slate-900">Punjab Insurance</div>
                <div className="text-xs text-slate-600">Your Trusted Insurance Partner</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-slate-700 hover:text-blue-700"
                  } pb-1`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:6478583536">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-semibold px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a href="tel:6478583536" className="px-4">
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 647 858 3536
                  </Button>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/1faacd25e_images.png"
                  alt="Punjab Insurance Logo"
                  className="h-10 w-auto"
                />
                <div className="text-lg font-bold">Punjab Insurance</div>
              </div>
              <p className="text-slate-400 text-sm">
                Expert insurance solutions tailored for Canadian families. 
                Providing comprehensive protection with personalized service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a
                    href="tel:6478583536"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    647 858 3536
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href="mailto:palwinderbath@yahoo.ca"
                    className="text-slate-400 hover:text-white transition-colors text-sm break-all"
                  >
                    palwinderbath@yahoo.ca
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Punjab Insurance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
