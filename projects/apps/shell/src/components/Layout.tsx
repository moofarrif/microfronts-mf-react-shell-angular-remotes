import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  app1RoutingPrefix,
  app2RoutingPrefix,
  app3RoutingPrefix,
} from "../routing/constants";

export function Layout() {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link
          to={`/${app1RoutingPrefix}/page-1`}
          style={{ marginRight: "0.5rem" }}
        >
          App1 Page1
        </Link>

        <Link to={`/${app1RoutingPrefix}/page-2`}>App1 Page2</Link>
        <Link
          to={`/${app2RoutingPrefix}/page-1`}
          style={{ marginLeft: "3rem", marginRight: "0.5rem" }}
        >
          App2 Page1
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-2`}>App2 Page2</Link>

        <Link to={`/${app3RoutingPrefix}`} style={{ marginLeft: "4rem" }}>
          App3 Main
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
