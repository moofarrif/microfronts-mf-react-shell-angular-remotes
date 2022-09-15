import React from "react";
import { Link } from "react-router-dom";

export function Page2() {
  return (
    <React.Fragment>
      <div>
        <h2>
          Nav App 2 <i className="fab fa-react"></i>
        </h2>
        <p>Page 2 from App2</p>
      </div>
      <Link to="/page-1">Page 1</Link>
    </React.Fragment>
  );
}
