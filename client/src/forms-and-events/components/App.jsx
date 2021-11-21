import React from "react";

import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images: [],
    };

    async onSearchSubmit(term) {
        // console.log(term);
        // call the unsplash api to get images: refer unsplash.js
        const res = await unsplash.get("/search/photos/", {
            params: { query: term },
        });

        const { results } = res.data;

        this.setState({ images: results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                {/* child to parent communicating */}
                <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />

                <span>Found: {this.state.images.length} results.</span>

                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

/* 
    UnSplash API: 
        email: vopipa7098@otozuz.com
        username: vopipa7098_otozuz_com
        password: vopipa7098

        AccessKey: sYzgkJ_Rozyeuii_dQaSIoOLTbaqHXVR3z-AogoQ40k
        SecretKey: khr7Jj4r7Z6TETt6NLuE_VqlVMsgo-r3XJQEpIk_YQM
*/
