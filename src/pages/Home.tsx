import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, Award, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Your Trusted Insurance Partner
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Secure Your Future with
                <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Punjab Insurance
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Expert insurance solutions tailored for Canadian families. From life insurance to travel coverage, 
                we provide comprehensive protection with personalized service.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("GetQuotes")}>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")}>
                  <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Comprehensive Coverage</h3>
                      <p className="text-sm text-slate-600">12+ Insurance Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Expert Guidance</h3>
                      <p className="text-sm text-slate-600">Personalized Service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Family Focused</h3>
                      <p className="text-sm text-slate-600">South Asian Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/d1d31dc7a_WhatsAppImage2025-11-09at135418_05b89161.jpg" 
                alt="Palwinder Bath - Insurance Advisor"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/1faacd25e_images.png" 
                  alt="Punjab Insurance Logo" 
                  className="h-12 w-auto"
                />
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                  About Punjab Insurance
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900">
                Your Partner in Financial Security
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                As an independent advisor working with Punjab Insurance, I bring years of expertise 
                in providing tailored insurance solutions to Canadian families. My approach combines 
                industry knowledge with a deep understanding of the unique needs of South Asian communities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Customized Solutions</h4>
                    <p className="text-slate-600">Every policy is tailored to your specific needs and budget</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Lowest Quotes</h4>
                    <p className="text-slate-600">Competitive rates across all insurance products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Fast & Easy Process</h4>
                    <p className="text-slate-600">Quick online quotes and streamlined applications</p>
                  </div>
                </div>
              </div>

              <Link to={createPageUrl("Contact")}>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-red-300">12+</div>
              <div className="text-blue-200">Insurance Products</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl font-bold text-red-300">100%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl font-bold text-red-300">Fast</div>
              <div className="text-blue-200">Quote Processing</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl font-bold text-red-300">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free, no-obligation quote today and discover how affordable protection can be.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl("GetQuotes")}>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl border-2 border-white shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
