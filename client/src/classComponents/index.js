import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./classComponents/components/SeasonDisplay";
import Spinner from "./classComponents/components/Spinner";
import Clock from "./classComponents/components/Clock";

/* 
const App = () => {
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;

            console.log(lat, lng);
        },
        (err) => console.log(err.message),
        {
            timeout: 5000,
            enableHighAccuracy: true,
        }
    );

    return (
        <div>
            Latitude: {lat}, Longitude: {lon}
            <SeasonDisplay />
        </div>
    );
};
 */

class App extends React.Component {
    // constructor(props) {
    //     super(props); // to call the React.Compoent's properties and methods

    //     this.state = {
    //         lat: null,
    //         lng: null,
    //         errMsg: "",
    //     };

    //     // this.getPosition();
    // }

    // Equivalent to creating constructor and initializing state inside
    state = {
        lat: null,
        lng: null,
        errMsg: "",
    };

    getPosition() {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;

                // Update state by this
                this.setState({ lat: lat, lng: lng });

                // Never do this
                // this.state.lat = lat;
                // this.state.lng = lng;

                // console.log(lat, lng);
            },
            (err) => {
                this.setState({ errMsg: err.message });
                // console.log(err.message);
            },
            {
                timeout: 5000,
                enableHighAccuracy: true,
            }
        );
    }

    // Good place to do data loading
    componentDidMount() {
        console.log("My component was rendered on screen");
        this.getPosition();
    }

    // Good place to do more data loading when state/props change
    componentDidUpdate() {
        console.log("My component was just updated: re-rendered");
    }

    // Good palce to do cleanup
    componentWillUnmount() {
        console.log("My component just got umounted");
    }

    // This is a helper method to render the body
    renderContent() {
        // Conditional Rendering
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg}</div>;
        }

        if (!this.state.errMsg && this.state.lat) {
            return (
                <div>
                    <span>
                        Latitude: {this.state.lat}, Longitude: {this.state.lng}
                    </span>
                    <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
                </div>
            );
        }

        return (
            <Spinner message="Locating . . . Please accept the location request." />
            // <Spinner />
        );

        /* 
        return (
            <div>
                Latitude: {this.state.lat}, Longitude: {this.state.lng}
                <br />
                Error: {this.state.errMsg}
                <SeasonDisplay />
            </div>
        ); */
    }

    // declaration of render() is mandatory
    render() {
        return (
            <div>
                <Clock />
                <div className="border red">{this.renderContent()}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
