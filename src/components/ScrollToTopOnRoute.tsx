import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // If there is a hash, let the browser handle it or manually scroll if needed
            // Most browsers handle this automatically on initial load/navigation, 
            // but sometimes manual scroll is needed for single-page app behavior.
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTopOnRoute;
