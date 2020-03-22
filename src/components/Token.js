import React, { Fragment } from "react"

/**
 * Token component
 * @param {*} props 
 */
const Token = (props) => {
    const { item: { value, id }, handleRemoveToken } = props
    return (
        <Fragment>
            <li className="addedTag">{value}<span className="tagRemove" onClick={() => { handleRemoveToken(id) }}>x</span></li>
        </Fragment >
    )
}

export default Token