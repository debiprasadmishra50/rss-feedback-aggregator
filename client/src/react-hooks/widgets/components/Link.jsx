import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) return;

        e.preventDefault();
        window.history.pushState({}, "", href); // change the url in url-bar

        const navEvent = new PopStateEvent("popstate"); // create an event
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
