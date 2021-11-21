import React from "react";

class SearchBar extends React.Component {
    state = {
        term: "",
    };

    // for un-controlled elements
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onFormSubmit(e) {
        e.preventDefault();

        // console.log(this.state.term);

        // child to parent communicating, onSubmit is a function that is passed as props from App.jsx
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                {/* To solve the undefined error in two ways: 1. bind the function, 2. use arrow function*/}
                {/* prettier-ignore */}
                <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
                {/* <form className="ui form" onSubmit={e => this.onFormSubmit(e)}> */}
                    <div className="field">
                        <label htmlFor="data">Image Search: </label>

                        {/* Un-Controlled Element */}
                        {/* <input
                            type="text"
                            id="data"
                            placeholder="Enter text"
                            onChange={this.onInputChange}
                        /> */}

                        {/* Another Syntax to handle event */}
                        {/* <input
                            type="text"
                            id="data"
                            placeholder="Enter text"
                            onChange={(event) =>
                                console.log(event.target.value)
                            }
                        /> */}

                        {/* Controlled Element */}
                        <input
                            type="text"
                            id="data"
                            placeholder="Enter text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
