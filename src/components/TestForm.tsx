
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const TestForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    skinType: '',
    symptomsDescription: '',
    reactions: '',
    previousConditions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
      // Show success message or redirect
      alert('Thank you for completing the test! We\'ll analyze your results and email you recommendations.');
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Free Virtual Skin Patch Test</CardTitle>
        <CardDescription>
          Complete this form to receive a personalized skin assessment
        </CardDescription>
        <div className="w-full bg-secondary/50 h-2 mt-6 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-1">
          <span>Basic Info</span>
          <span>Skin Details</span>
          <span>Symptoms</span>
        </div>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Your age"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange('gender', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What is your skin type?</Label>
                <RadioGroup
                  value={formData.skinType}
                  onValueChange={(value) => handleSelectChange('skinType', value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="normal" id="normal" />
                    <Label htmlFor="normal" className="cursor-pointer">Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="dry" id="dry" />
                    <Label htmlFor="dry" className="cursor-pointer">Dry</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="oily" id="oily" />
                    <Label htmlFor="oily" className="cursor-pointer">Oily</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="combination" id="combination" />
                    <Label htmlFor="combination" className="cursor-pointer">Combination</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="sensitive" id="sensitive" />
                    <Label htmlFor="sensitive" className="cursor-pointer">Sensitive</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="previousConditions">Have you been diagnosed with any skin conditions before?</Label>
                <Textarea
                  id="previousConditions"
                  name="previousConditions"
                  placeholder="E.g., eczema, psoriasis, acne, rosacea, etc."
                  value={formData.previousConditions}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="symptomsDescription">Describe your current skin issue or symptoms</Label>
                <Textarea
                  id="symptomsDescription"
                  name="symptomsDescription"
                  placeholder="Describe the location, appearance, and any discomfort"
                  required
                  className="min-h-[100px]"
                  value={formData.symptomsDescription}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reactions">Have you noticed any specific triggers or reactions?</Label>
                <Textarea
                  id="reactions"
                  name="reactions"
                  placeholder="E.g., reactions to food, skincare products, environmental factors"
                  className="min-h-[100px]"
                  value={formData.reactions}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={goBack}>
              Back
            </Button>
          ) : (
            <span></span>
          )}
          <Button type="submit">
            {step < 3 ? 'Continue' : 'Submit'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default TestForm;
