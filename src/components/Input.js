import React from "react"

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleOnKeyDown = (e) => {
        const { getInputValue } = this.props
        const { value } = this.state
        if (e.key === 'Enter') {
            this.setState({ value: "" }, () => {
                getInputValue(value)
            })
        }
    }

    render() {
        return (
            <li className="tagAdd taglist">
                <input
                    type="text"
                    id="search-field"
                    onKeyDown={this.handleOnKeyDown}
                    onChange={(e) => {
                        this.setState({ value: e.target.value })
                    }}
                    value={this.state.value}
                    autoFocus
                />
            </li>
        )
    }
}

export default Input