import React from "react"
import SearchList from "./SearchList"

class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="searchContainer">
                <SearchList />
            </div>
        )
    }
}

export default SearchContainer