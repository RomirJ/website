
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      items: [
        {
          id: "what-is-hikaflow",
          question: "What is Hikaflow?",
          answer: "Hikaflow is an AI-powered assistant built for fast-moving software teams that need to ship quickly without compromising on quality, documentation, or team efficiency. It provides automated pull request reviews, impact analysis, intelligent documentation, and comprehensive codebase insights."
        },
        {
          id: "get-started",
          question: "How do I get started with Hikaflow?",
          answer: "Simply connect your GitHub or Bitbucket repository to Hikaflow, and it will automatically start reviewing pull requests and analyzing your codebase. No configuration overhead or process changes required—just connect and go."
        },
        {
          id: "free-trial",
          question: "Is there a free trial available?",
          answer: "Yes, you can try Hikaflow for free at hikaflow.com. You can also schedule a personalized walkthrough at https://calendly.com/romirjain/30min to see how it works with your specific codebase."
        }
      ]
    },
    {
      category: "Integration & Setup",
      items: [
        {
          id: "platforms",
          question: "Which platforms does Hikaflow integrate with?",
          answer: "Hikaflow seamlessly integrates with GitHub and Bitbucket. It automatically scans pull requests and leaves intelligent comments directly on these platforms. It also aggregates data from CI/CD tools, and testing frameworks into unified dashboards."
        },
        {
          id: "workflow-changes",
          question: "Do I need to change my existing workflow?",
          answer: "No. Hikaflow works automatically with your existing GitHub and Bitbucket pull request workflow. There's no forced process changes or configuration overhead required."
        },
        {
          id: "without-prs",
          question: "Can I use Hikaflow without pull requests?",
          answer: "Yes. Hikaflow offers a repository upload and scan mode where you can drag-and-drop any repository for a full security, quality, and documentation audit—no pull requests required."
        }
      ]
    },
    {
      category: "AI Assistant & Code Analysis",
      items: [
        {
          id: "ai-difference",
          question: "How is Hikaflow's AI different from general AI tools like ChatGPT?",
          answer: "Unlike general-purpose AI tools that have context limitations, Hikaflow's AI assistant is tightly integrated with your entire codebase. It understands your full project context and can answer specific questions about your architecture, implementation details, and business logic."
        },
        {
          id: "analysis-modes",
          question: "What are the different AI analysis modes?",
          answer: "Hikaflow offers five intelligent modes:\n\n• Standard Analysis: Implementation details, logic, and code flows\n• Senior Developer Review: Best-practice insights and performance guidance\n• Code Review Mode: Code quality, security risks, and maintainability audits\n• Architecture Analysis: System design, dependencies, and scalability exploration\n• Release Analysis: Change history understanding and release risk assessment"
        },
        {
          id: "team-productivity",
          question: "How quickly can new team members become productive?",
          answer: "New hires can become productive within minutes rather than months. The AI assistant can answer any project-related queries instantly, helping new employees understand the codebase and ship their first PR quickly."
        }
      ]
    },
    {
      category: "Code Quality & Security",
      items: [
        {
          id: "issue-detection",
          question: "What types of issues does Hikaflow detect?",
          answer: "Hikaflow identifies:\n\n• Code quality issues, bugs, and anti-patterns\n• Security vulnerabilities and exposed secrets\n• Code duplication and complexity warnings\n• Compliance violations (SOC 2, HIPAA, GDPR)\n• Performance bottlenecks and maintainability concerns"
        },
        {
          id: "customization",
          question: "Can I customize which issues Hikaflow flags?",
          answer: "Yes. You can configure exactly which types of code and security issues Hikaflow should flag by adjusting settings directly on the platform. This allows you to focus on what matters most to your team and business requirements."
        },
        {
          id: "security-compliance",
          question: "How does Hikaflow handle security compliance?",
          answer: "Hikaflow can be configured to enforce internal policies or industry-specific compliance standards. It performs real-time static analysis to identify security risks and ensures every PR conforms to your security and compliance rules before being merged."
        }
      ]
    },
    {
      category: "Impact Analysis & Testing",
      items: [
        {
          id: "impact-analysis",
          question: "What is Impact Analysis?",
          answer: "After every merge, Hikaflow performs deep impact analysis to identify which parts of your application are most likely to break. It generates precise test cases for targeted validation, reducing manual QA cycles by up to 80%."
        },
        {
          id: "regression-testing",
          question: "How does the regression testing work?",
          answer: "Hikaflow analyzes each merged PR, identifies affected user flows, and auto-generates focused test cases to prevent production breakages. This allows teams to finalize releases in minutes instead of days."
        },
        {
          id: "bug-diagnosis",
          question: "Can Hikaflow help with bug diagnosis?",
          answer: "Yes. Hikaflow includes a real-time bug diagnosis engine that traces production issues to root causes, linking runtime errors to the exact commits that introduced them and offering AI-generated code fixes."
        }
      ]
    },
    {
      category: "Team Management & Analytics",
      items: [
        {
          id: "engineering-insights",
          question: "What insights does Hikaflow provide for engineering leaders?",
          answer: "Hikaflow offers:\n\n• Visual workflow mapping that exposes bottlenecks and delays\n• Real-time insights into review latency, code churn, and after-hours activity\n• Engineering health and burnout signals monitoring\n• Executive reports with code quality trends and team velocity metrics\n• Cross-tool dashboards that aggregate activity from multiple platforms"
        },
        {
          id: "team-transparency",
          question: "How does Hikaflow help with team transparency?",
          answer: "For teams working with outsourced developers or freelancers, Hikaflow acts as a code transparency tool. You can log into the dashboard anytime to review the status and health of code being written. All that's required is for developers to connect their working repository to Hikaflow."
        },
        {
          id: "automated-reporting",
          question: "Does Hikaflow provide automated reporting?",
          answer: "Yes. Hikaflow generates automated daily standups and weekly digests to keep stakeholders aligned without meetings. Executive reports are automatically generated and delivered at your chosen cadence."
        }
      ]
    },
    {
      category: "Documentation & Onboarding",
      items: [
        {
          id: "documentation-handling",
          question: "How does Hikaflow handle documentation?",
          answer: "Hikaflow automatically generates contextual documentation for:\n\n• Complex logic, APIs, and business-critical flows\n• Architectural diagrams and third-party integrations\n• Changelogs and onboarding materials\n• Repository-wide documentation breakdowns organized by module, file, and function"
        },
        {
          id: "up-to-date-docs",
          question: "Is the documentation always up-to-date?",
          answer: "Yes. Hikaflow maintains living documentation that's always current with your codebase, so your team never wastes time rediscovering how things work."
        }
      ]
    },
    {
      category: "Pricing & Support",
      items: [
        {
          id: "enterprise-plan",
          question: "Do you guys offer an enterprise plan?",
          answer: "For specific enterprise information, please schedule a consultation at https://calendly.com/romirjain/30min to discuss pricing based on your team's needs."
        },
        {
          id: "get-demo",
          question: "How can I get a demo?",
          answer: "You can schedule a personalized walkthrough tailored to your team's needs at https://calendly.com/romirjain/30min. You can also check out demo videos on Hikaflow's LinkedIn page at https://www.linkedin.com/company/hikaflow."
        },
        {
          id: "support",
          question: "What if I have technical questions or need support?",
          answer: "You can reach out through the Hikaflow website at hikaflow.com or schedule a meeting directly with the team to discuss technical requirements and get personalized support for your implementation. You can also email team@hikaflow.com"
        }
      ]
    },
    {
      category: "Advanced Features",
      items: [
        {
          id: "legacy-codebases",
          question: "Can Hikaflow work with legacy codebases?",
          answer: "Absolutely. Hikaflow's repository upload and scan mode is perfect for auditing legacy systems, forked projects, or evaluating code from freelance contributors. It provides comprehensive analysis without requiring pull requests."
        },
        {
          id: "prevent-deployment-issues",
          question: "How does Hikaflow prevent deployment issues?",
          answer: "Hikaflow helps you release without fear by providing data-backed impact analysis, predictive test case generation, and comprehensive change assessment. This allows teams to identify potential issues before they reach production."
        },
        {
          id: "role-based-access",
          question: "Does Hikaflow support role-based access?",
          answer: "Yes. Organizations can define user roles such as Admin, Manager, and Developer to control access and responsibilities. Role-specific dashboards and permissions enable better collaboration across teams of varying sizes."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-400 border-b border-slate-700 pb-3">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => {
                  const isOpen = openItems.includes(item.id);
                  
                  return (
                    <div key={item.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-300"
                      >
                        <h4 className="text-white font-medium pr-4">
                          {item.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-emerald-400 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-emerald-400 transition-transform duration-300" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-4 pb-4 border-t border-slate-700/50 pt-4">
                          <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-500 hover:border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Get personalized answers and see how Hikaflow works with your specific codebase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                onClick={() => window.open('https://app.hikaflow.com/', '_blank')}
              >
                Try Hikaflow Free
              </button>
              <button 
                className="border border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://calendly.com/romirjain/30min', '_blank')}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/company/hikaflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
          >
            Follow us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
