import React from "react";

class SearchBar extends React.Component {
    state = {
        term: "",
    };

    onFormSubmit(e) {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                {/* prettier-ignore */}
                <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="field">
                        <label htmlFor="data">Video Search: </label>
                        {/* controlled input */}
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
