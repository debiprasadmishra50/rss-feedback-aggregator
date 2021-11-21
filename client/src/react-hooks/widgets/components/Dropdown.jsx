import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // will run only once when component is first time rendered
    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) return;

            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });

        // remove the listener when the component is deleted from body
        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={onSelectedChange.bind(this, option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        // prettier-ignore
        <div>
            <div className="ui form" ref={ref}>
                <div className="field">
                    <label className="label">{label}</label>
                    <div
                        onClick={setOpen.bind(this, !open)}
                        className={`ui selection dropdown ${open ? "visible active" : ""}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? "visible transition" : ""}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Dropdown;
