import React from "react";
import { Heart, AlertCircle, UserX, Plane, Shield, GraduationCap, Home, Globe, TrendingUp, PiggyBank, Wallet, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Customized policies with the lowest quotes available",
      features: ["Term, whole & universal life", "Tax-free payouts", "Flexible terms", "Critical illness riders"],
      eligibility: "Canadians, 18-65+",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: AlertCircle,
      title: "Critical Illness Insurance",
      description: "Lump-sum payout for serious diagnoses",
      features: ["Up to $1M coverage", "30-day survival period", "Return-of-premium option", "Multiple conditions"],
      eligibility: "Canadians, 18-60",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: UserX,
      title: "Disability Insurance",
      description: "Income replacement if unable to work",
      features: ["60-70% income coverage", "Own-occupation definition", "Coverage to age 65", "No medical tests for basic plans"],
      eligibility: "Working Canadians, 18-60",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Super Visa Insurance",
      description: "Mandatory coverage for Super Visa applicants",
      features: ["$100,000+ medical coverage", "1-year duration", "Hospitalization & ambulance", "100% refund if visa denied"],
      eligibility: "Super Visa applicants",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Visitor Insurance",
      description: "Protection for tourists visiting Canada",
      features: ["Emergency medical coverage", "Trip interruption", "1-364 days coverage", "Online comparison tool"],
      eligibility: "Non-residents to Canada",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Comprehensive coverage for Canadians abroad",
      features: ["Up to $5M medical", "Trip cancellation", "Lost baggage", "24/7 assistance"],
      eligibility: "Canadian travelers",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: Home,
      title: "Mortgage Insurance",
      description: "Protects your mortgage balance",
      features: ["Decreasing coverage", "10-30 year terms", "Tax-free to lender", "Portable coverage"],
      eligibility: "Canadian homeowners",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Students Insurance",
      description: "Coverage for international & domestic students",
      features: ["$100,000+ medical", "Tuition protection", "Mental health coverage", "Group rates"],
      eligibility: "Full-time students, 15-30",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "RESP",
      description: "Registered Education Savings Plan",
      features: ["20% CESG match ($500/year)", "Tax-deferred growth", "Family plans available", "Maximizes grants"],
      eligibility: "Canadians, beneficiary under 21",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: PiggyBank,
      title: "RRSP",
      description: "Registered Retirement Savings Plan",
      features: ["Tax-deductible contributions", "Tax-free growth", "18% income limit", "Spousal income splitting"],
      eligibility: "Canadians with earned income",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Wallet,
      title: "TFSA",
      description: "Tax-Free Savings Account",
      features: ["~$7,000 limit (2025)", "Tax-free withdrawals", "No age limit", "Penalty-free access"],
      eligibility: "Canadians 18+",
      color: "from-emerald-600 to-green-600"
    },
    {
      icon: DollarSign,
      title: "FHSA",
      description: "First Home Savings Account",
      features: ["$8,000/year contribution", "$40,000 lifetime max", "Tax-deductible", "15-year hold period"],
      eligibility: "18-71, first-time buyers",
      color: "from-rose-600 to-pink-600"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/1faacd25e_images.png" 
              alt="Punjab Insurance Logo" 
              className="h-12 w-auto"
            />
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Services
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Insurance Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From life insurance to investment plans, we offer 12+ specialized products tailored to meet your unique needs and protect what matters most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.eligibility}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600 mt-2">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-slate-700 mb-3">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-700 to-blue-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Coverage?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm here to guide you through your options and find the perfect insurance solution for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:6478583536">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                Call: 647 858 3536
              </Button>
            </a>
            <a href="mailto:palwinderbath@yahoo.ca">
              <Button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
