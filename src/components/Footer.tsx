
import { Link } from "react-router-dom";
import FAQSection from "@/components/FAQSection";

const Footer = () => {
  return (
    <>
      <div id="faq">
        <FAQSection />
      </div>
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <hr className="border-slate-700 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <a
              href="https://www.linkedin.com/company/hikaflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center"
            >
              Follow us on LinkedIn
            </a>
            <p className="text-slate-400 text-sm">
              Copyright © 2025. All rights reserved by Hikaflow.
            </p>
          </div>
          
          <div className="pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
};

export default Footer;
