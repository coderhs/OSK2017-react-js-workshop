import React, {Component} from 'react'

class Task extends Component {
    render () {
        return (
            <li>{ this.props.title }</li>
        )
    }
}

export default Task;