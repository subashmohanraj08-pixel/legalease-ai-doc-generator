import { Link } from "react-router-dom";
import { documentTypes } from "../data/documentTypes";
import { ArrowRight, Sparkles } from "lucide-react";

function Generator() {
  return (
    <div className="page-container">

      <section className="page-header">

        <div className="hero-badge">
          <Sparkles size={16} />
          Document Generator
        </div>

        <h1>What do you want to create?</h1>

        <p>
          Select a document type and answer a few guided questions.
        </p>

      </section>


      <section className="document-grid">

        {documentTypes.map((document) => {

          const Icon = document.icon;

          return (
            <Link
              to={`/questionnaire/${document.id}`}
              className="document-card"
              key={document.id}
            >

              <div className={`document-icon ${document.color}`}>
                <Icon size={25} />
              </div>

              <h3>{document.title}</h3>

              <p>{document.description}</p>

              <span className="card-action">
                Start
                <ArrowRight size={16} />
              </span>

            </Link>
          );

        })}

      </section>

    </div>
  );
}

export default Generator;
