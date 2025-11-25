import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
              Get In Touch
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Let's Discuss Your Insurance Needs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to protect what matters most? Reach out today for a free consultation and personalized insurance recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-lg text-slate-600 mb-8">
                I'm here to answer your questions and help you find the perfect insurance solution. 
                Feel free to reach out through any of the methods below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <a 
                        href="tel:6478583536" 
                        className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        647 858 3536
                      </a>
                      <p className="text-sm text-slate-600 mt-1">Available for calls and texts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <a 
                        href="mailto:palwinderbath@yahoo.ca" 
                        className="text-lg text-blue-600 hover:text-blue-700 transition-colors break-all"
                      >
                        palwinderbath@yahoo.ca
                      </a>
                      <p className="text-sm text-slate-600 mt-1">I'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Service Area</h3>
                      <p className="text-slate-700">
                        Serving clients across Ontario and Canada
                      </p>
                      <p className="text-sm text-slate-600 mt-1">Virtual consultations available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:6478583536" className="flex-1">
                <Button className="w-full h-14 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-xl shadow-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:palwinderbath@yahoo.ca" className="flex-1">
                <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white text-lg rounded-xl shadow-lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>

          {/* Professional Photo and Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-8 text-white">
                <div className="flex items-center gap-6 mb-6">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/d1d31dc7a_WhatsAppImage2025-11-09at135418_05b89161.jpg" 
                    alt="Palwinder Bath"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Palwinder Bath</h3>
                    <p className="text-blue-100">Insurance Advisor</p>
                    <p className="text-blue-200 text-sm">Punjab Insurance</p>
                  </div>
                </div>
                <p className="text-blue-50 leading-relaxed">
                  With extensive experience in the insurance industry and a deep understanding of 
                  diverse community needs, I'm committed to providing you with 
                  the best coverage at competitive rates.
                </p>
              </div>
              
              <CardContent className="p-8">
                <h4 className="font-semibold text-slate-900 mb-4">Why Choose Punjab Insurance?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700">Personalized service tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700">Competitive rates and lowest quotes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700">Expertise in diverse community needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700">Fast processing and excellent support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700">Multiple language support available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="mb-6 text-red-50">
                  Request a free quote today and discover how easy it is to protect your family's future.
                </p>
                <Link to={createPageUrl("GetQuotes")}>
                  <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg rounded-xl shadow-lg">
                    <Send className="mr-2 w-5 h-5" />
                    Get Your Free Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
