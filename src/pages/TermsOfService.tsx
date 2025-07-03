
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg">Last updated: June 28, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-slate max-w-none">
          <div className="text-slate-200 leading-relaxed space-y-6">
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Hikaflow's website or services, you agree to these Terms of Service ("Terms"). If you do not agree, do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we do, we will post the changes here and update the "Last Updated" date. Continued use of the service means you accept the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use of Services</h2>
            <p>
              You agree to use the services only for lawful purposes and in accordance with these Terms. You must not misuse or attempt to access our systems without authorization. "Services" include our website, integrations (e.g., GitHub, Bitbucket), Slack bots, browser extensions, APIs, and any related features or platforms operated by Hikaflow. You must not use the Services to upload unlawful, harmful, or copyrighted code without authorization, or to reverse engineer or stress-test our systems.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account. Notify us immediately of any unauthorized use.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content and software provided through the services is owned by or licensed to Hikaflow and protected by intellectual property laws. You may not reproduce, modify, or distribute any part of the services without written permission.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Feedback</h2>
            <p>
              By submitting feedback or suggestions, you grant us the right to use it without restriction or compensation.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Third-Party Links</h2>
            <p>
              Our services may include links to third-party websites. We are not responsible for their content or practices.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at our sole discretion, with or without notice.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p>
              Services are provided "as is" without warranties of any kind. We do not guarantee that the services will be error-free or uninterrupted.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Hikaflow is not liable for any indirect, incidental, or consequential damages arising from your use of the services.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Hikaflow and its affiliates from any claims arising from your use of the services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA. You consent to jurisdiction and venue in its courts.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Hikaflow. If any part is found unenforceable, the remaining sections will remain in effect.
            </p>

            <div className="bg-slate-800/50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">14. Contact Us</h3>
              <p className="text-slate-300">
                For questions about these Terms, contact us at: <a href="mailto:team@hikaflow.com" className="text-emerald-400 hover:text-emerald-300">team@hikaflow.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
