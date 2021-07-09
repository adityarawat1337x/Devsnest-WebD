import React, { Component } from 'react'
export class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <button onClick={() => this.setState(prev => ({ count:prev.count + 1 })) }>{this.state.count}</button>
        )
    }
}

export default Button
