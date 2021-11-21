import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="ui three item menu pointing">
            <Link
                to="/"
                className={`${selected === 1 ? "active" : ""} item`}
                onClick={() => setSelected(1)}
            >
                Top Stories
            </Link>
            <Link
                to="/latest"
                className={`${selected === 2 ? "active" : ""} item`}
                onClick={() => setSelected(2)}
            >
                Latest Stories
            </Link>
            <Link
                to="/best"
                className={`${selected === 3 ? "active" : ""} item`}
                onClick={() => setSelected(3)}
            >
                Best Stories
            </Link>
        </div>
    );
};

export default Header;
