import { FileText, Plus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Documents() {

  const documents = JSON.parse(
    localStorage.getItem("legalEaseDocuments") || "[]"
  );

  return (

    <div className="page-container">

      <div className="page-header documents-header">

        <div>
          <span>YOUR WORKSPACE</span>

          <h1>My Documents</h1>

          <p>
            Access and manage your generated documents.
          </p>
        </div>


        <Link to="/generator" className="btn btn-primary">
          <Plus size={18} />
          New Document
        </Link>

      </div>


      {documents.length === 0 ? (

        <div className="empty-documents">

          <div className="empty-icon">
            <FileText size={32} />
          </div>

          <h2>No documents yet</h2>

          <p>
            Your generated documents will appear here.
          </p>

          <Link to="/generator" className="btn btn-primary">
            Create your first document
          </Link>

        </div>

      ) : (

        <div className="document-grid">

          {documents.map((document, index) => (

            <div className="saved-document" key={index}>

              <FileText size={25} />

              <h3>{document.title}</h3>

              <span>
                <Clock size={14} />
                {document.date}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Documents;
