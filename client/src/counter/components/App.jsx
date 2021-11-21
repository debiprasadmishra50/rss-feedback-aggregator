import React from "react";

import Button from "./Button";

class App extends React.Component {
    state = {
        value: 0,
    };

    addOne() {
        this.setState({ value: this.state.value + 1 });
    }

    minusOne() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                Counter: {this.state.value}
                <div>
                    <Button text="Add 1" onClick={this.addOne.bind(this)} />
                    <span> </span>
                    <Button
                        text="Subtract 1"
                        onClick={this.minusOne.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
