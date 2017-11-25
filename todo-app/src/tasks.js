import React, {Component} from 'react'

class Task extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.id
        }
    }

    render () {
        return (
            <li onClick={ ()=> this.props.mark(this.props.id) }>
                { !this.props.completed? this.props.title : <strike> {this.props.title} </strike>}
            </li>
        )
    }
}

export default Task;