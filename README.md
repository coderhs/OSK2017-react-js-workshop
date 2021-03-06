# React JS Workshop by Jishnu


Date: 25th November, 2017
Event: Open Source Kerala 2017


## Create a ToDo app using Vanila JS

Check `index.html`

## Create a ToDo app using react js.


1. `npm install -g create-react-app`
2. `create-react-app todo-app`
3. `npm start`

You will be able to see the default react app at `localhost:3000`.


Note:

### ES6 arrow operator (=>)

```js
var square = (num) => { 
    return num * num
    };
```
or if its just a single line

```js
var square = (num) => num * num;
```

### Import and Export

```js
// file 1
export default function square (num) {
    return num * num
}

//file 2

import square from 'file1.js'
```

export multiple items

```js
// file 1
export function square (num) {
    return num * num
}

export function root (num) {
    return num * num
}

//file 2

import {square} from 'file1.js' // to import one method

import {square, root} from 'file1.js' // to import multiple method
```

### let

```js
{
    let a = 1;
}
```

### const

```
    const a = 1;
```

### JSX

* Basically like html but it supports variables
* Makes Life easier
* Not requried but helps a lot
* Prevents injection attacks


Tip: Move items that you think has its own instances to its own file.

Check file `todo-aopp/hearder.js`


### Imports from libraries & packages

```js
import React, { Component } from 'react';
```

Imports local file.

```js
import Header from './header';
```



`this.setState` is asynchronous

```js
    if (e.keyCode == 13) {
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }
```


### To access a method in the parent from the child.

If you require the state of a parent to be changed when an event happens in the child. Then
we need to pass in the method reference form the parent to the child as a prop.

```js
    // parent file

    addTask(task) {
        let current = this.state.TODOLIST;
        current.push({
        id: Date.now(),
        title: task,
        completed: false
        });
        this.setState({TODOLIST: current})
    }

    render() {
        return (
        <div className="App">
            <Header />
            <Input addTask = { this.addTask.bind(this) }/>
        </div>
        );
    }

    // child file

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.setState({
                value: e.target.value
            })
            // we are passing the new value to the add Task props
            // which is calling the method in the parent.
            this.props.addTask(e.target.value);
        }
    }

    render () {
        return (
            <input placeholder = "Create new task!"
            onKeyDown = {this.onKeyDown.bind(this)} />
        )
    }

```
