import React, { useEffect, useRef } from "react";
import { mount } from "auth/authIndex";
import { authRoutingPrefix, shellBrowserHistory } from "../routing/constants";
import { useNavigate } from "react-router-dom";

const authBasename = `/${authRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to navigation events dispatched inside auth mfe.
    const authNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${authBasename}${pathname}`;
      if (newPathname === shellBrowserHistory.location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[auth] navigated", authNavigationEventHandler);

    // Listen to navigation events in shell app to notifify auth mfe.
    const unlistenHistoryChanges = shellBrowserHistory.listen(
      ({ location }) => {
        if (location.pathname.startsWith(authBasename)) {
          window.dispatchEvent(
            new CustomEvent("[shell] navigated", {
              detail: location.pathname.replace(authBasename, ""),
            })
          );
        }
      }
    );

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: shellBrowserHistory.location.pathname.replace(
        authBasename,
        ""
      ),
    });

    return () => {
      window.removeEventListener(
        "[auth] navigated",
        authNavigationEventHandler
      );
      unlistenHistoryChanges();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <auth-root></auth-root>
    </div>
  );
};
