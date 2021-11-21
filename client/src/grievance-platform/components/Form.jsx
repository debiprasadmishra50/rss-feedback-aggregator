import React, { useState } from "react";

import Label from "./Label";
import Button from "./Button";
// import Input from "./Input";

const Form = ({ addGrievance }) => {
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const resetForm = () => {
        setEmail("");
        setTitle("");
        setDesc("");
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (email && title && desc) {
            addGrievance(email, title, desc);
            resetForm();
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit.bind(this)} className="ui form">
                <div className="field">
                    <Label id="email" text="Enter your email: " />
                    {/* <Input id="email" type="email" placeholder="your@email.com" /> */}
                    <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <Label id="title" text="Enter Title: " />
                    <input
                        id="title"
                        type="text"
                        placeholder="Title of grievance"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="desc">Description: </label>
                    <textarea
                        id="desc"
                        cols="30"
                        rows="10"
                        required
                        spellCheck="true"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <Button />
            </form>
        </div>
    );
};

export default Form;
