import { Link } from "react-router-dom";
import {
  FileText,
  Plus,
  Sparkles,
  FolderOpen,
} from "lucide-react";

function Dashboard() {

  return (

    <div className="page-container">

      <section className="dashboard-welcome">

        <span>WELCOME TO LEGALEASE</span>

        <h1>Your Legal Workspace</h1>

        <p>
          Create, preview and manage your legal document drafts.
        </p>

      </section>


      <div className="dashboard-grid">

        <Link to="/generator" className="dashboard-card">

          <div className="dashboard-icon">
            <Plus />
          </div>

          <h3>Create Document</h3>

          <p>
            Start a new legal document.
          </p>

        </Link>


        <Link to="/documents" className="dashboard-card">

          <div className="dashboard-icon">
            <FolderOpen />
          </div>

          <h3>My Documents</h3>

          <p>
            View your saved document drafts.
          </p>

        </Link>


        <Link to="/assistant" className="dashboard-card">

          <div className="dashboard-icon">
            <Sparkles />
          </div>

          <h3>AI Assistant</h3>

          <p>
            Get plain-English explanations.
          </p>

        </Link>


        <div className="dashboard-card">

          <div className="dashboard-icon">
            <FileText />
          </div>

          <h3>Templates</h3>

          <p>
            Explore supported document types.
          </p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;
