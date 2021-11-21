import React from "react";

import Form from "./components/Form";
import GrievanceList from "./components/GrievanceList";

class App extends React.Component {
    state = {
        grievances: [],
    };

    addGrievance(email, title, desc) {
        this.setState(
            {
                grievances: [...this.state.grievances, { email, title, desc }],
            }
            // () => {
            //     console.log("adding to grievances: ");
            //     console.log(...this.state.grievances);
            // }
        );
    }

    render() {
        return (
            <div
                className="ui segment container"
                style={{ marginTop: "10px", marginBottom: "10px" }}
            >
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <Form addGrievance={this.addGrievance.bind(this)} />
                    </div>

                    <div className="column">
                        <GrievanceList grievances={this.state.grievances} />
                    </div>
                </div>
                <div className="ui vertical divider"></div>
            </div>
        );
    }
}

export default App;
