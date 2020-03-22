import React from "react"
import Input from './Input'
import Token from './Token'

class InputContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tokens: props.data
        }
    }

    /**
     *  Generate tokens
     */
    generateTokens = () => {
        const { tokens } = this.state
        const tokensData = tokens.map((item) => { return <Token item={item} /> })
        return tokensData
    }

    /**
     * getInputValue
     */
    getInputValue = (value) => {
        const tokens = [...this.state.tokens]
        tokens.push({ id: 1, value: value })
        this.setState({
            tokens
        })
    }

    render() {
        const tokens = this.generateTokens()
        return (
            <div id="container">
                <ul className="tags">
                    {tokens}
                    <Input getInputValue={this.getInputValue} />
                </ul>
            </div>
        )
    }
}

export default InputContainer
