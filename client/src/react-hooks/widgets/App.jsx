import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content: "React is a JS Framework.",
    },
    {
        title: "Why use React",
        content: "React is a popular library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The color red",
        value: "red",
    },
    {
        label: "The color green",
        value: "green",
    },
    {
        label: "A Shade of blue",
        value: "blue",
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <div>
                    <Dropdown
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p style={{ color: selected.value }}>
                        The Text is {selected.value}.
                    </p>
                </div>
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>

            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <div>
                <br />
                <button onClick={setShowDropdown.bind(this, !showDropdown)}>
                    Toggle Dropdown
                </button>
                <br /> <br />
                {showDropdown ? (
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                ) : null}
                <br />
                <br />
                <br />
                <br />
                <br />
                <p style={{ color: selected.value }}>
                    The Text is {selected.value}
                </p>
            </div> */}

            {/* <Translate /> */}
        </div>
    );
};

export default App;
