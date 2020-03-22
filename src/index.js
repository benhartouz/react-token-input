import React from "react"
import InputContainer from "./components/InputContainer"
import fixtures from './fixture'
export default class TokenInput extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>React Token Input</h1>
                <InputContainer data={fixtures} />
            </div>
        )
    }
}