import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            {/* prettier-ignore */}
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="data">Video Search: </label>
                    {/* controlled input */}
                    <input
                        type="text"
                        id="data"
                        placeholder="Enter text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
