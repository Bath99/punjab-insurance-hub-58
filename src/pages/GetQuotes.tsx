import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Heart, Plane, GraduationCap, AlertCircle, UserX } from "lucide-react";

export default function GetQuotes() {
  const [selectedForm, setSelectedForm] = useState("");

  const quoteTypes = [
    { id: "supervisa", label: "Super Visa Insurance", icon: Shield, color: "from-purple-500 to-indigo-500" },
    { id: "termlife", label: "Life Insurance", icon: Heart, color: "from-red-500 to-pink-500" },
    { id: "resp", label: "RESP (Education Savings)", icon: GraduationCap, color: "from-blue-600 to-indigo-600" },
    { id: "critical", label: "Critical Illness Insurance", icon: AlertCircle, color: "from-orange-500 to-red-500" },
    { id: "disability", label: "Disability Insurance", icon: UserX, color: "from-blue-500 to-cyan-500" },
    { id: "travel", label: "Travel Insurance", icon: Plane, color: "from-sky-500 to-blue-500" },
  ];


  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6910e8cc058c29cc95eea357/1faacd25e_images.png" 
              alt="Punjab Insurance Logo" 
              className="h-12 w-auto"
            />
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Get Your Quote
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Request a Free Insurance Quote
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Select the type of insurance you're interested in and fill out the form. I'll get back to you with personalized quotes within 24 hours.
          </p>
        </div>

        {/* Quote Type Selection */}
        {!selectedForm && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {quoteTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedForm(type.id)}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left border-2 border-transparent hover:border-blue-200"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.label}</h3>
                  <p className="text-slate-600 text-sm">Click to request a quote →</p>
                </button>
              );
            })}
          </div>
        )}

        {/* Forms */}
        {selectedForm && (
          <div className="space-y-6">
            <Button
              variant="outline"
              onClick={() => setSelectedForm("")}
              className="mb-4"
            >
              ← Back to Quote Types
            </Button>

            {selectedForm === "supervisa" && <SuperVisaForm />}
            {selectedForm === "termlife" && <TermLifeForm />}
            {selectedForm === "resp" && <RESPForm />}
            {selectedForm === "critical" && <CriticalIllnessForm />}
            {selectedForm === "disability" && <DisabilityForm />}
            {selectedForm === "travel" && <TravelForm />}
          </div>
        )}
      </div>
    </div>
  );
}

function SuperVisaForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Shield className="w-7 h-7" />
          Super Visa Insurance Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="supervisa-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="supervisa-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="Super Visa Insurance" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" name="age" type="number" min="18" max="100" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="coverage">Coverage Amount *</Label>
              <Select name="coverage" required>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select coverage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100000">$100,000 (Recommended)</SelectItem>
                  <SelectItem value="150000">$150,000</SelectItem>
                  <SelectItem value="200000">$200,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tripStart">Trip Start Date</Label>
              <Input id="tripStart" name="tripStart" type="date" className="h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalConditions">Pre-existing Medical Conditions (Be honest)</Label>
            <Textarea id="medicalConditions" name="medicalConditions" rows={4} />
          </div>

          <Button type="submit" className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function TermLifeForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Heart className="w-7 h-7" />
          Life Insurance Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="life-insurance-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="life-insurance-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="Life Insurance" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" name="age" type="number" min="18" max="80" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="coverage">Coverage Amount *</Label>
              <Input id="coverage" name="coverage" type="number" placeholder="$ Amount" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Term Length *</Label>
              <Select name="term" required>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 Years</SelectItem>
                  <SelectItem value="20">20 Years</SelectItem>
                  <SelectItem value="30">30 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="smoker">Are you a smoker? *</Label>
            <Select name="smoker" required>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function RESPForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <GraduationCap className="w-7 h-7" />
          RESP Savings Plan Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="resp-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="resp-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="RESP" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Full Name *</Label>
              <Input id="childName" name="childName" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="childAge">Child's Age *</Label>
              <Input id="childAge" name="childAge" type="number" min="0" max="17" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="annualContribution">Annual Contribution Amount *</Label>
              <Input id="annualContribution" name="annualContribution" type="number" placeholder="$ Amount" required className="h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="familyIncome">Family Income (for Grant Eligibility)</Label>
            <Input id="familyIncome" name="familyIncome" type="number" placeholder="$ Amount" className="h-12" />
          </div>

          <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function CriticalIllnessForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <AlertCircle className="w-7 h-7" />
          Critical Illness Insurance Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="critical-illness-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="critical-illness-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="Critical Illness Insurance" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" name="age" type="number" min="18" max="60" required className="h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverage">Lump-Sum Coverage Amount *</Label>
            <Select name="coverage" required>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select coverage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25000">$25,000</SelectItem>
                <SelectItem value="50000">$50,000</SelectItem>
                <SelectItem value="100000">$100,000</SelectItem>
                <SelectItem value="1000000">$1,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalHistory">Any Pre-existing Medical Conditions?</Label>
            <Textarea id="medicalHistory" name="medicalHistory" rows={4} />
          </div>

          <Button type="submit" className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function DisabilityForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <UserX className="w-7 h-7" />
          Disability Insurance Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="disability-insurance-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="disability-insurance-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="Disability Insurance" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" name="age" type="number" min="18" max="60" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="annualIncome">Annual Income *</Label>
              <Input id="annualIncome" name="annualIncome" type="number" placeholder="$ Amount" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation *</Label>
              <Input id="occupation" name="occupation" required className="h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coveragePercent">Coverage % of Income (Recommended: 60-70%)</Label>
            <Select name="coveragePercent">
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select coverage %" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="60">60%</SelectItem>
                <SelectItem value="70">70%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function TravelForm() {
  return (
    <Card className="shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-br from-sky-500 to-blue-500 text-white rounded-t-xl">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Plane className="w-7 h-7" />
          Travel Insurance Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form 
          name="travel-insurance-quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="travel-insurance-quote" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="quote-type" value="Travel Insurance" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="h-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tripType">Trip Type *</Label>
              <Select name="tripType" required>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select trip type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Trip</SelectItem>
                  <SelectItem value="annual">Annual Multi-Trip</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination">Destination Country *</Label>
            <Input id="destination" name="destination" required className="h-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tripStart">Trip Start Date *</Label>
              <Input id="tripStart" name="tripStart" type="date" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tripEnd">Trip End Date *</Label>
              <Input id="tripEnd" name="tripEnd" type="date" required className="h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers *</Label>
            <Input id="travelers" name="travelers" type="number" min="1" required className="h-12" />
          </div>

          <Button type="submit" className="w-full h-12 bg-sky-600 hover:bg-sky-700 text-lg">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
