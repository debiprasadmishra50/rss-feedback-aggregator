import React from "react";

import LanguageSelector from "./components/LanguageSelector";
import UserCreate from "./components/UserCreate";
import { LanguageStore } from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

class App extends React.Component {
    // state = {
    //     language: "english",
    // };

    // onLanguageChange(language) {
    //     this.setState({ language });
    // }

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* <LanguageSelector
                        onLanguageChange={this.onLanguageChange.bind(this)}
                    /> */}

                    {/* <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="primary">
                        <UserCreate />
                        </ColorContext.Provider>
                </LanguageContext.Provider> */}

                    <ColorContext.Provider value="primary">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
