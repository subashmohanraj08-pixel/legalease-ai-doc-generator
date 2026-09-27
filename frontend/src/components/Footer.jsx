import { Scale, Mail, ShieldCheck } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <Scale size={20} />
          </div>

          <div>
            <h3>Subazz LegalEase</h3>
            <p>
              Simplifying legal document drafting with guided tools and AI.
            </p>
          </div>
        </div>

        <div className="footer-links">

          <div>
            <h4>Product</h4>
            <a href="/generator">Generate Document</a>
            <a href="/documents">My Documents</a>
            <a href="/assistant">AI Assistant</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="mailto:support@subazz.com">
              <Mail size={14} /> Contact
            </a>
            <a href="/login">Account</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Subazz LegalEase</span>

        <span className="footer-safe">
          <ShieldCheck size={15} />
          Your documents stay private
        </span>
      </div>

    </footer>
  );
}

export default Footer;
