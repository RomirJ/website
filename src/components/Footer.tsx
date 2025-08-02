
import { Link } from "react-router-dom";
import FAQSection from "@/components/FAQSection";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 py-8">
      <div className="container mx-auto px-4">
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
        
        <div className="pt-8 text-center">
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
      </footer>
    </>
  );
};

export default Footer;
