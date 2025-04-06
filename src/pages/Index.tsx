
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestForm from "@/components/TestForm";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";
import { Bandage, Heart, Image, Pill, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* How It Works Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">How Virtual Skin Patch Testing Works</h2>
              <p className="text-muted-foreground">
                Our free virtual patch test helps identify potential skin irritants and conditions 
                without the discomfort of traditional patch testing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Complete the Assessment</h3>
                <p className="text-muted-foreground">
                  Answer questions about your skin concerns, symptoms, and history to help us understand your situation.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Get Your Analysis</h3>
                <p className="text-muted-foreground">
                  Our algorithm analyzes your responses to identify potential skin conditions and irritants.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Receive Recommendations</h3>
                <p className="text-muted-foreground">
                  We'll email you personalized recommendations and next steps for managing your skin concerns.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button size="lg">Take the Free Test Now</Button>
            </div>
          </div>
        </section>
        
        {/* Start Test Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your Free Skin Test</h2>
              <p className="text-muted-foreground">
                Complete this short questionnaire to receive your personalized skin analysis and recommendations.
              </p>
            </div>
            
            <TestForm />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Virtual Skin Testing?</h2>
              <p className="text-muted-foreground">
                Our virtual approach offers several advantages over traditional patch testing methods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard 
                title="No Physical Discomfort"
                description="Avoid the irritation and discomfort that can come with traditional adhesive patch tests applied to your skin."
                icon={<Heart className="h-6 w-6 text-primary" />}
              />
              
              <InfoCard 
                title="Convenience"
                description="Complete the assessment from anywhere, anytime, without multiple doctor visits or waiting periods."
                icon={<Bandage className="h-6 w-6 text-primary" />}
              />
              
              <InfoCard 
                title="Quick Results"
                description="Get your personalized analysis quickly instead of waiting days for traditional patch test results."
                icon={<Pill className="h-6 w-6 text-primary" />}
              />
              
              <InfoCard 
                title="Educational Resources"
                description="Receive information about your potential skin conditions and how to manage them effectively."
                icon={<Image className="h-6 w-6 text-primary" />}
              />
              
              <InfoCard 
                title="Product Recommendations"
                description="Get suggestions for skin-safe products that are unlikely to cause reactions based on your profile."
                icon={<Syringe className="h-6 w-6 text-primary" />}
              />
              
              <InfoCard 
                title="Completely Free"
                description="Access our virtual skin patch testing at no cost, helping you make informed decisions about your skin health."
                icon={<Heart className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>
        </section>
        
        {/* Medical Disclaimer Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-background border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Medical Disclaimer</h3>
              <p className="text-muted-foreground text-sm">
                This virtual skin patch test is designed for educational purposes only and is not a substitute 
                for professional medical advice, diagnosis, or treatment. Always seek the advice of your 
                physician or other qualified health provider with any questions you may have regarding a 
                medical condition. Never disregard professional medical advice or delay in seeking it because 
                of something you have read on this website.
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                If you think you may have a medical emergency, call your doctor or emergency services immediately. 
                SkinPatchPal does not recommend or endorse any specific tests, physicians, products, procedures, 
                opinions, or other information that may be mentioned on this site.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
