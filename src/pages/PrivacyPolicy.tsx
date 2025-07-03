
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="pt-12 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
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
            <p>A full table of contents is below.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>What information do we collect?</li>
              <li>How do we collect information?</li>
              <li>How and why do we process your information?</li>
              <li>When and with whom do we share your information?</li>
              <li>AI‑based products</li>
              <li>How long do we keep your information?</li>
              <li>How do we keep your information safe?</li>
              <li>Children's privacy</li>
              <li>Your privacy rights</li>
              <li>Do‑Not‑Track & cookies</li>
              <li>U.S. state‑specific disclosures</li>
              <li>International data transfers</li>
              <li>Contact information</li>
              <li>How to exercise your rights / appeals</li>
            </ol>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. What Information Do We Collect?</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Information you provide directly</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="border border-slate-600 p-3 text-left">Category</th>
                    <th className="border border-slate-600 p-3 text-left">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-600 p-3">Identifiers</td>
                    <td className="border border-slate-600 p-3">Name, username, email address, postal address, phone number</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Account credentials</td>
                    <td className="border border-slate-600 p-3">Passwords, authentication tokens</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Payment details</td>
                    <td className="border border-slate-600 p-3">Card last four digits, billing address (processed by Stripe, Inc. – https://stripe.com/privacy)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Support & survey data</td>
                    <td className="border border-slate-600 p-3">Content of messages, feature requests, feedback</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Code & repository metadata</td>
                    <td className="border border-slate-600 p-3">Commits, pull‑request titles/descriptions, file diffs, commit authorship and timestamps</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">You are responsible for ensuring that any personal data you include in code commits is lawfully provided.</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Information from third‑party sources</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="border border-slate-600 p-3 text-left">Source</th>
                    <th className="border border-slate-600 p-3 text-left">Data received</th>
                    <th className="border border-slate-600 p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-600 p-3">GitHub Inc.</td>
                    <td className="border border-slate-600 p-3">Repository names, branch/diff metadata, commit authorship</td>
                    <td className="border border-slate-600 p-3">PR analysis, onboarding insights</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Stripe Inc.</td>
                    <td className="border border-slate-600 p-3">Customer ID, subscription status, payment events</td>
                    <td className="border border-slate-600 p-3">Billing & fraud prevention</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Google Analytics & PostHog</td>
                    <td className="border border-slate-600 p-3">Pseudonymous usage data, page views</td>
                    <td className="border border-slate-600 p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Error‑tracking (Sentry)</td>
                    <td className="border border-slate-600 p-3">Stack traces, runtime errors</td>
                    <td className="border border-slate-600 p-3">Service maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.3 Automatic data collection</h3>
            <p>We log IP address, browser/user‑agent, referral URL, and basic usage events for security and diagnostics. Cookies and similar technologies are explained in section 10.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How Do We Collect Information?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Directly from you via forms, chat, CLI and API interactions;</li>
              <li>Automatically via cookies, SDKs and server logs;</li>
              <li>Via authorised integrations and webhooks (e.g., GitHub Apps); and</li>
              <li>From service providers noted above.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How and Why Do We Process Your Information?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="border border-slate-600 p-3 text-left">Purpose</th>
                    <th className="border border-slate-600 p-3 text-left">Legal basis (EU/UK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-600 p-3">Account registration, authentication & single sign‑on</td>
                    <td className="border border-slate-600 p-3">Contract Art. 6(1)(b)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Providing PR analysis, AI suggestions & dashboards</td>
                    <td className="border border-slate-600 p-3">Legitimate Interests Art. 6(1)(f) (to operate an efficient dev‑productivity platform)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Payment processing & invoices</td>
                    <td className="border border-slate-600 p-3">Contract; Legal Obligation (tax)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Service emails & in‑app notifications</td>
                    <td className="border border-slate-600 p-3">Legitimate Interests; Consent for marketing</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Security, fraud detection, incident response</td>
                    <td className="border border-slate-600 p-3">Legitimate Interests; Legal Obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Compliance with subpoenas or court orders</td>
                    <td className="border border-slate-600 p-3">Legal Obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-600 p-3">Protecting vital interests</td>
                    <td className="border border-slate-600 p-3">Vital Interests Art. 6(1)(d)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Where we rely on Consent you may withdraw it at any time (section 9).</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. When and With Whom Do We Share Your Information?</h2>
            <p>We share personal data only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers under written contracts (hosting, analytics, payment, AI cloud, email delivery, customer support).</li>
              <li>Professional advisers (lawyers, auditors, insurers) bound by confidentiality.</li>
              <li>Public authorities when required by law.</li>
              <li>Successors in corporate transactions, provided the recipient honours this Policy.</li>
            </ul>
            <p>We have not sold or shared personal information for cross‑context behavioural advertising during the last 12 months, and we have no current plans to do so.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. AI‑Based Products</h2>
            <p>Some Hikaflow features are powered by third‑party or proprietary artificial‑intelligence and machine‑learning ("AI") models. The roster of AI service providers may change over time as we evaluate new vendors or switch infrastructure. For an up‑to‑date list of our AI service providers, please contact us at team@hikaflow.com.</p>
            <p>Whenever we engage an external AI provider we enter into a written data‑processing agreement that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>prohibits the provider from using your prompts or outputs to train its foundation models unless you have expressly opted‑in;</li>
              <li>requires appropriate technical and organisational security measures;</li>
              <li>imposes confidentiality obligations; and</li>
              <li>restricts any onward sub‑processing without our prior authorisation.</li>
            </ul>
            <p>You remain in control: you can disable AI features or change your model‑training preferences at any time in Account → Settings → AI.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. How Long Do We Keep Your Information?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Active data:</strong> retained for the life of your account.</li>
              <li><strong>Idle accounts:</strong> if no log‑in, API call or billing event occurs for 90 consecutive days, the account is marked inactive; after an additional 3 months we delete or anonymise personal data.</li>
              <li><strong>Back‑ups:</strong> encrypted backups are retained for up to 12 months and then automatically purged.</li>
            </ul>
            <p>We may keep minimal records longer where required by tax, accounting or legal hold obligations.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. How Do We Keep Your Information Safe?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>SOC 2 Type II–aligned controls and ISO 27001 practices;</li>
              <li>TLS 1.2+ encryption in transit and AES‑256 at rest;</li>
              <li>Least‑privilege access, regular penetration testing, continuous monitoring;</li>
              <li>72‑hour breach notification (GDPR Art. 33) / prompt notice under applicable U.S. state laws.</li>
            </ul>
            <p>No system is 100 % secure; use the Services in a secure environment and rotate repository tokens regularly.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Children's Privacy</h2>
            <p>The Services are not directed to children under 13 (COPPA) or under 18 where that age is the legal majority. We do not knowingly collect personal information from such individuals and will delete it if discovered.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Your Privacy Rights</h2>
            <p>Depending on your location you may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>request access, correction, deletion or portability of your data;</li>
              <li>object to or restrict certain processing;</li>
              <li>withdraw consent;</li>
              <li>opt out of targeted advertising, "sales" or profiling with legal effects.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">How to exercise your rights</h3>
            <p>Submit a request via the form on our website, email team@hikaflow.com, or call toll‑free (US) +1 671 431 8312. We will verify your identity and respond within 30 days (45 days for U.S. state laws) and provide an appeals process; see section 14.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Do‑Not‑Track & Cookies</h2>
            <p>We use first‑party and third‑party cookies/SaaS SDKs for authentication, analytics and error monitoring. You can manage cookies through your browser settings. We currently do not respond to DNT signals because no industry standard exists.</p>
            <p>We currently do not publish a separate cookie‑policy page; cookie use is discussed in section 10.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. U.S. State‑Specific Disclosures</h2>
            <p>This Policy incorporates disclosures required by California (CPRA), Colorado (CPA), Connecticut (CTDPA), Delaware (DPDPA), Florida (FDPA), Indiana (IDPSCA), Iowa (ICPA), Kentucky (KCDPA), Maine (MCDPA), Maryland (MCDPA‑2025), Minnesota (MDPPA), Montana (MCDPA), Nebraska (NCDPA), New Hampshire (NHDPA), New Jersey (NJCDPA), Ohio (OCPA effective 2025‑07‑01), Oregon (OCAP), Rhode Island (RICDPA), Tennessee (TCPA), Texas (TDPSA), Utah (UCPA) and Virginia (VCDPA). We do not offer "financial incentives" for data (Cal. Civ. Code section 1798.125).</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. International Data Transfers</h2>
            <p>Where we transfer personal data outside the EEA, UK or Switzerland, we rely on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>European Commission Standard Contractual Clauses (SCCs) (EU 2021/914);</li>
              <li>UK International Data‑Transfer Addendum;</li>
              <li>adequacy decisions; or</li>
              <li>other approved safeguards.</li>
            </ul>
            <p>Contact us for a copy of relevant transfer mechanisms.</p>

            <div className="bg-slate-800/50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">13. Contact Information</h3>
              <div className="space-y-2 text-slate-300">
                <p>Discoursefy Inc.</p>
                <p>614 School House Rd. Suite 4‑308</p>
                <p>New Castle, DE 19720</p>
                <p>United States</p>
                <p>Email: team@hikaflow.com</p>
                <p>Phone: +1 671 431 8312</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">14. How to Exercise Your Rights / Appeals</h2>
            <p>Submit a Data Subject Access Request (DSAR) via the webform linked above, email, or phone. We will:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>acknowledge your request within 10 days;</li>
              <li>respond within 30 days (or 45 days where law allows an extension);</li>
              <li>explain any refusal and provide an appeals link. Appeals are handled within 45 days. If you remain dissatisfied you may lodge a complaint with your supervisory authority or state Attorney General.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
