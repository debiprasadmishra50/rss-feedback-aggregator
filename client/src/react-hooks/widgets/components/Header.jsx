import React from "react";

import Link from "./Link";

/* 
    a tag causes the page to reload all the contents. Hence we are building custom Link component
*/

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/list" className="item">
                Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
        </div>
    );
};

export default Header;
