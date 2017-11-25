import React, {Component} from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.setState({
                value: e.target.value
            })
            this.props.addTask(e.target.value);
        }
    }

    render () {
        return (
            <input placeholder = "Create new task!"
            onKeyDown = {this.onKeyDown.bind(this)} />
        )
    }
}

export default Input;