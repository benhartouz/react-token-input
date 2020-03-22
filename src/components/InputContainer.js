import React from "react"
import Input from './Input'
import Token from './Token'
import SearchContainer from "./SearchContainer"

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
        const tokensData = tokens.map((item) => { return <Token item={item} handleRemoveToken={this.handleRemoveToken} key={`key_${item.id}`} /> })
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

    /**
     * handle remove token
     */
    handleRemoveToken = (id) => {
        const tokens = [...this.state.tokens]
        const tokensFiltred = tokens.filter((item) => {
            return item.id !== id
        })
        this.setState({
            tokens: tokensFiltred
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
                <SearchContainer />
            </div>
        )
    }
}

export default InputContainer
