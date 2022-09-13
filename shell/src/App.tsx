import React, { Suspense } from "react";
import LeftSidebarModule from "./components/LeftSidebar";
import "./index.css";
import { Router } from "./routing/Router";

export const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router />
    <div>
      <hr />
      <div className="content">
        <LeftSidebarModule />
      </div>
    </div>
  </Suspense>
);
