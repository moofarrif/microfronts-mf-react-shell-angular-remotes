import React, { useEffect, useRef } from "react";
import { mount } from "app3/App3Index";
import { app3RoutingPrefix, shellBrowserHistory } from "../routing/constants";
import { useNavigate } from "react-router-dom";

const app3Basename = `/${app3RoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to navigation events dispatched inside app3 mfe.
    const app3NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${app3Basename}${pathname}`;
      if (newPathname === shellBrowserHistory.location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[app3] navigated", app3NavigationEventHandler);

    // Listen to navigation events in shell app to notifify app3 mfe.
    const unlistenHistoryChanges = shellBrowserHistory.listen(
      ({ location }) => {
        if (location.pathname.startsWith(app3Basename)) {
          window.dispatchEvent(
            new CustomEvent("[shell] navigated", {
              detail: location.pathname.replace(app3Basename, ""),
            })
          );
        }
      }
    );

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: shellBrowserHistory.location.pathname.replace(
        app3Basename,
        ""
      ),
    });

    return () => {
      window.removeEventListener(
        "[app3] navigated",
        app3NavigationEventHandler
      );
      unlistenHistoryChanges();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="banner-app">
      <app-root></app-root>
    </div>
  );
};
