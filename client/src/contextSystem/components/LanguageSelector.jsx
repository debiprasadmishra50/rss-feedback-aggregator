import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        // console.log(this.context);
        return (
            <div>
                Select a Language: &nbsp;
                <i
                    className="flag us"
                    // onClick={this.props.onLanguageChange.bind(this, "english")}
                    // onClick={() => this.props.onLanguageChange("english")}
                    onClick={this.context.onLanguageChange.bind(
                        this,
                        "english"
                    )}
                />
                <i
                    className="flag nl"
                    // onClick={this.props.onLanguageChange.bind(this, "dutch")}
                    // onClick={() => this.props.onLanguageChange("dutch")}
                    onClick={this.context.onLanguageChange.bind(this, "dutch")}
                />
            </div>
        );
    }
}

export default LanguageSelector;
