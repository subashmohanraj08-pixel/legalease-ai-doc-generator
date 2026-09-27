import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  FileText,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

function Preview() {

  const [draft, setDraft] = useState(null);

  useEffect(() => {

    const savedDraft = localStorage.getItem("legalEaseDraft");

    if (savedDraft) {
      setDraft(JSON.parse(savedDraft));
    }

  }, []);


  if (!draft) {

    return (

      <div className="empty-page">

        <FileText size={40} />

        <h2>No document found</h2>

        <p>Create a document first.</p>

        <Link to="/generator" className="btn btn-primary">
          Create Document
        </Link>

      </div>

    );

  }


  return (

    <div className="preview-page">

      <div className="preview-toolbar">

        <Link to="/generator" className="btn btn-secondary">
          <ArrowLeft size={17} />
          Back
        </Link>


        <div className="preview-actions">

          <button className="btn btn-secondary">
            <Download size={17} />
            PDF
          </button>

          <button className="btn btn-primary">
            <Download size={17} />
            DOCX
          </button>

        </div>

      </div>


      <div className="preview-layout">

        <div className="document-paper">

          <div className="paper-header">

            <FileText size={28} />

            <h1>
              {draft.type.replace("-", " ").toUpperCase()}
            </h1>

          </div>


          <div className="paper-content">

            <p>
              This document is a generated draft based on the
              information provided by the user.
            </p>


            {Object.entries(draft.answers).map(
              ([key, value]) => (

                <div className="document-field" key={key}>

                  <h4>
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </h4>

                  <p>{value}</p>

                </div>

              )
            )}


            <div className="legal-placeholder">

              <strong>Important:</strong>

              <p>
                This generated document is a draft for
                informational purposes. It should be reviewed
                by a qualified legal professional where appropriate.
              </p>

            </div>

          </div>

        </div>


        <aside className="preview-sidebar">

          <div className="sidebar-card">

            <Sparkles size={22} />

            <h3>Need help understanding this?</h3>

            <p>
              Ask the AI Assistant to explain legal terminology
              in plain English.
            </p>

            <Link to="/assistant" className="btn btn-primary full-width">
              Ask AI Assistant
            </Link>

          </div>

        </aside>

      </div>

    </div>

  );
}

export default Preview;
