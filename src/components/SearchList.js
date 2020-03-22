import React from "react"
import SearchItem from "./SearchItem"
class SearchList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </ul>
        )
    }
}

export default SearchList