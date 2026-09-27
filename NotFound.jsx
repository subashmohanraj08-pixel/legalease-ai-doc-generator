import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div className="empty-page">

      <h1>404</h1>

      <h2>Page not found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>

    </div>

  );

}

export default NotFound;
