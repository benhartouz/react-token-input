import React, { Fragment } from "react"

class Token extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { item: { value } } = this.props
        return (
            <Fragment>
                <li class="addedTag">{value}<span className="tagRemove">x</span></li>
            </Fragment>
        )
    }

}

export default Token