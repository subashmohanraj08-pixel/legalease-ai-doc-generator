import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Sparkles,
  ShieldCheck,
  Download,
  CheckCircle,
} from "lucide-react";

function Home() {
  return (
    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={16} />
            AI-powered legal document drafting
          </div>

          <h1>
            Create Legal Documents
            <span> Simply & Smarter.</span>
          </h1>

          <p>
            Subazz LegalEase helps you create structured legal document
            drafts through simple guided questions and plain-English
            explanations.
          </p>

          <div className="hero-buttons">

            <Link to="/generator" className="btn btn-primary">
              Create Document
              <ArrowRight size={18} />
            </Link>

            <Link to="/assistant" className="btn btn-secondary">
              Try AI Assistant
            </Link>

          </div>

          <div className="hero-trust">

            <div>
              <CheckCircle size={16} />
              Guided forms
            </div>

            <div>
              <CheckCircle size={16} />
              PDF / DOCX export
            </div>

            <div>
              <CheckCircle size={16} />
              Plain-English help
            </div>

          </div>

        </div>

        <div className="hero-card">

          <div className="document-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="document-preview">

              <div className="document-title-line"></div>

              <div className="document-line large"></div>
              <div className="document-line"></div>
              <div className="document-line"></div>

              <div className="document-section"></div>

              <div className="document-line"></div>
              <div className="document-line"></div>
              <div className="document-line short"></div>

              <div className="document-section"></div>

              <div className="signature-area">
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="section">

        <div className="section-heading">

          <span>WHY LEGALEASE</span>

          <h2>
            Legal drafting made easier
          </h2>

          <p>
            From answering questions to exporting your document,
            LegalEase keeps the process simple.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <FileText />
            </div>

            <h3>Guided Documents</h3>

            <p>
              Answer simple questions instead of starting with
              a blank legal document.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Sparkles />
            </div>

            <h3>AI Assistant</h3>

            <p>
              Ask questions and get complex legal terminology
              explained in simpler language.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Download />
            </div>

            <h3>Export Documents</h3>

            <p>
              Preview your document and export it as PDF or DOCX
              when the backend is connected.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <ShieldCheck />
            </div>

            <h3>Privacy Focused</h3>

            <p>
              The application is designed with document privacy
              and secure access in mind.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div>

          <h2>
            Ready to create your first document?
          </h2>

          <p>
            Choose a document type and follow the guided steps.
          </p>

        </div>

        <Link to="/generator" className="btn btn-primary">
          Get Started
          <ArrowRight size={18} />
        </Link>

      </section>

    </div>
  );
}

export default Home;
