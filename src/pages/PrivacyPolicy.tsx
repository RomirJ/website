
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-6 text-emerald-400 hover:text-emerald-300 hover:bg-slate-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-slate max-w-none">
          <div className="text-slate-200 leading-relaxed space-y-6">
            <p>
              Discoursefy Inc. ("Discoursefy", "we", "our" or "us") explains in this Privacy Policy ("Policy") how and why we access, collect, use, store, share and otherwise process your personal information when you use our websites, products and services (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Scope of this Policy</h2>
            <p>This Policy applies when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>visit https://hikaflow.com or any website that links to it;</li>
              <li>sign up for or use the Hikaflow developer‑productivity platform (including our browser extensions, Slack bot and APIs);</li>
              <li>connect third‑party repositories (for example, GitHub) or other tools to Hikaflow;</li>
              <li>attend our sales, support or marketing events; or</li>
              <li>otherwise interact with us.</li>
            </ul>
            <p>
              If you do not agree with this Policy, please do not use the Services. For questions or concerns, email team@hikaflow.com or write to us at the postal address in section 13.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Summary of Key Points</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What we collect.</strong> We collect the information you voluntarily provide (e.g., names, email addresses, passwords, repository metadata) and limited usage data automatically. See section 1.</li>
              <li><strong>Third‑party sources.</strong> We also receive information from integrated tools such as GitHub, Stripe, error‑tracking/analytics providers and our AI cloud vendors. See section 1.2.</li>
              <li><strong>Sensitive data.</strong> We do not intentionally process sensitive personal information as defined by U.S. state laws or Art. 9 GDPR. If we inadvertently receive such data, we delete or protect it immediately.</li>
              <li><strong>Why we process.</strong> We process your data to provide and secure the Services, comply with law, improve our products and, with consent, send marketing. See section 3.</li>
              <li><strong>Legal bases (EU/UK).</strong> Our main legal bases are Contract, Legitimate Interests, Consent and Legal Obligation. See section 3.2.</li>
              <li><strong>Sharing.</strong> We share data only with service providers and in the situations listed in section 4. We do not sell or share data for cross‑context behavioural advertising.</li>
              <li><strong>AI products.</strong> Some features use AI/ML models operated by Alibaba Cloud AI, DeepSeek and Google Cloud AI. Inputs/outputs are processed under strict contractual safeguards; model training on your content is opt‑out by default. See section 5.</li>
              <li><strong>Retention.</strong> We delete or anonymise personal data 90 days after an account becomes inactive; encrypted backups are kept for up to 12 months. See section 6.</li>
              <li><strong>Security.</strong> We follow ISO 27001 and SOC 2 Type II controls and commit to 72‑hour breach notification. See section 7.</li>
              <li><strong>Your rights.</strong> Depending on where you live you may access, correct, delete or export your data, or object to certain processing. See section 9–11.</li>
            </ul>

            <div className="bg-slate-800/50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-slate-300">
                <p>Discoursefy Inc.</p>
                <p>614 School House Rd. Suite 4‑308</p>
                <p>New Castle, DE 19720</p>
                <p>United States</p>
                <p>Email: team@hikaflow.com</p>
                <p>Phone: +1 671 431 8312</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
