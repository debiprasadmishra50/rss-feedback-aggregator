// Import React and reactDOM librares
import React from "react";
import ReactDOM from "react-dom";

const getBtnText = () => "Click On Me!";

// Create React Component
const App = function () {
    // return (
    //     <div>
    //         <h1>Hi there!</h1>
    //     </div>
    // );

    // const btnText = "Click Me!";
    // const btnText = "123121";
    // const btnText = ["Hi", "There"];
    // const btnText = [10, 20];
    const btnText = { text: "Click Me!" };

    const labelText = "Enter Name: ";

    return (
        <div>
            {/* USING CLASSES */}
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            {/* INLINE STYLING */}
            <button
                type="submit"
                style={{ backgroundColor: "blue", color: "white" }}
            >
                {/* {btnText} */}
                {/* {getBtnText()} */}
                {btnText.text}
            </button>
        </div>
    );
};

// Render the component
ReactDOM.render(<App />, document.querySelector("#root"));

/* 
    {variable_name}: This is known as interpolation.
*/
