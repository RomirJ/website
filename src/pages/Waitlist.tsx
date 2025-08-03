import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, Users, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    email: "",
    importance: "",
    linkedin: "",
    twitter: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call to Google Sheets
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll be in touch soon with exclusive early access.",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-emerald-400" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                You're on the list!
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Thank you for joining our waitlist. We're excited to revolutionize your engineering workflow. 
                You'll be among the first to experience our AI-powered automation platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                  <Mail className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Updates</h3>
                  <p className="text-slate-300 text-sm">Regular progress updates and feature previews</p>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                  <Users className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Early Access</h3>
                  <p className="text-slate-300 text-sm">Priority access to beta features and testing</p>
                </div>
                
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                  <Star className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Special Pricing</h3>
                  <p className="text-slate-300 text-sm">Exclusive launch discounts for early supporters</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Join the Revolution
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join Our Exclusive
                <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Waitlist
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Be among the first to experience AI-powered engineering automation. 
                Help us build the future of confident releases.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-white font-medium mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <Label htmlFor="importance" className="text-white font-medium mb-2 block">
                    How important is automating your engineering processes? *
                  </Label>
                  <Select value={formData.importance} onValueChange={(value) => handleInputChange("importance", value)} required>
                    <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select importance level (1-10)" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="text-white hover:bg-slate-700">
                          {num} {num <= 3 ? "- Low" : num <= 6 ? "- Medium" : num <= 8 ? "- High" : "- Critical"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedin" className="text-slate-300 font-medium mb-2 block">
                      LinkedIn Profile (Optional)
                    </Label>
                    <Input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="twitter" className="text-slate-300 font-medium mb-2 block">
                      X/Twitter Handle (Optional)
                    </Label>
                    <Input
                      id="twitter"
                      type="text"
                      placeholder="@yourhandle"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-300 font-medium mb-2 block">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 h-12 text-base font-semibold transition-all duration-300 shadow-xl shadow-emerald-500/25"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-slate-400 text-sm text-center mt-6">
                We respect your privacy. Your information will only be used to contact you about early access.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Waitlist;