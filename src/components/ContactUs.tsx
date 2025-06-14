
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle, Linkedin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setIsNewsletterSubmitted(true);
    setTimeout(() => setIsNewsletterSubmitted(false), 3000);
    setNewsletterEmail("");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 hover:scale-105 transition-transform duration-500">
              Contact Us
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <a href="mailto:team@hikaflow.com" className="text-white text-lg font-semibold hover:text-emerald-400 transition-colors">
                    team@hikaflow.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <a href="tel:+16714318312" className="text-white text-lg font-semibold hover:text-emerald-400 transition-colors">
                    +1 671 431 8312
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-8 hover:border-emerald-500/30 transition-all duration-300 animate-fade-in" style={{animationDelay: '200ms'}}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Hikaflow
              </h3>
              <p className="text-slate-300 mb-6">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>
              
              {isNewsletterSubmitted ? (
                <div className="flex items-center text-emerald-400 animate-bounce-in">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Leave Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-bounce-in">
                  <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-300">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold h-12 transition-all duration-300 hover:scale-105 group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/hikaflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
                <span className="hidden sm:inline">Follow us on LinkedIn</span>
              </a>
            </div>
            
            <p className="text-slate-400 text-sm">
              Copyright © 2025. All rights reserved by Hikaflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
