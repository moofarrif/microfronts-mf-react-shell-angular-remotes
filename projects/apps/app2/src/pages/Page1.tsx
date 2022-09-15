import React from "react";
import { Link } from "react-router-dom";

export function Page1() {
  return (
    <React.Fragment>
      <div>
        <h2>
          Nav App 2 <i className="fab fa-react"></i>
        </h2>
        <p>Page 1 from App2</p>
      </div>
      <Link to="/page-2">Page 2</Link>
    </React.Fragment>
  );
}
