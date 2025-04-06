
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Bandage, Syringe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-primary">Free Virtual Skin Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Virtual Skin Patch Testing Made <span className="text-primary">Simple</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Identify potential skin issues and allergies from the comfort of your home. 
              Get personalized recommendations without the dermatologist visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="gap-2">
                <Bandage className="h-4 w-4" />
                Start Free Test
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full bg-gray-${i * 100} border-2 border-background`} />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">1,000+</span> users tested this month
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block h-[500px] p-6">
            <div className="absolute top-12 left-8 p-6 rounded-2xl bg-white shadow-lg border w-72">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Accurate Results</p>
                  <p className="text-sm text-muted-foreground">98% match with clinical tests</p>
                </div>
              </div>
            </div>
            <div className="absolute top-48 right-0 p-6 rounded-2xl bg-white shadow-lg border w-72">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Bandage className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Quick & Easy</p>
                  <p className="text-sm text-muted-foreground">Results in under 5 minutes</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-24 left-24 p-6 rounded-2xl bg-white shadow-lg border w-72">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Syringe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Avoid Irritants</p>
                  <p className="text-sm text-muted-foreground">Identify your triggers safely</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-secondary/50 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Bandage className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
