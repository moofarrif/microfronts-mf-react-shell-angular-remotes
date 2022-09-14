import React, { useEffect, useRef } from "react";
import { mount } from "app3/App3Index";

const AngularModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="banner-app">
      <app-root></app-root>
    </div>
  );
};

export default AngularModule;
