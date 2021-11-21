import React, { useState } from "react";

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSubmit({ name, link });
        setName("");
        setLink("");
    };

    return (
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
            <h3>Add a RSS Link: </h3>
            <form onSubmit={onFormSubmit} className="ui form">
                {/* <div className="three fields"> */}
                <div className="field">
                    <label htmlFor="name">Enter Name: </label>
                    <input
                        type="text"
                        id="name"
                        required
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="field">
                    <label htmlFor="name">Enter Link: </label>
                    <input
                        type="text"
                        id="link"
                        required
                        placeholder="Enter link"
                        onChange={(e) => setLink(e.target.value)}
                        value={link}
                    />
                </div>
                <div className="field">
                    <button className="ui button primary">Submit</button>
                </div>
                {/* </div> */}
            </form>
        </div>
    );
};

export default Form;
