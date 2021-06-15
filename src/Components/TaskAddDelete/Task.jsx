import React from 'react';
import './Task.css';
import { Icon } from '@fluentui/react/lib/Icon';
// import { Text, ITextProps } from '@fluentui/react/lib/Text';
// import { SafeAreaView, StyleSheet, View, Text } from 'react-native';


class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: "",
            list: [],
            checked: 0,
            isDone: false,
        }
    }

    addItem(todoValue) {
        if (todoValue !== " ") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false,
                checked: false
            }
            const list = [...this.state.list]
            list.push(newItem);
            this.setState({
                list,
                newItem: ""
            })
        }
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({ list: updatedlist })
    }

    updateInput(input) {
        this.setState({ newItem: input })
    }

    // crossLine = event => {
    //   // const element = event.target;
    //   // element.classList.toggle("crossed-line");
    //   <Text style={{ textDecorationLine: 'line-through' }}>
    //     Strike Through the Text
    // </Text>
    // };


    handleOnClick = () => {
        const isDone = this.state.isDone;
        //const style = { textDecoration: 'none' };

        if (isDone === 1) {
            console.log('isDone');
            //style = { textDecoration: 'line-through'
        }
    }

    todoCompleted(i) {
        const list = [...this.state.list]

        if (!list[i].checked) {
            list[i].checked = true;
            list[i].textDecor = 'line'
            this.setState({
                list
            });
        }
        else {
            list[i].checked = false;
            list[i].textDecor = null
            this.setState({
                list
            });
        }
    }

    render() {
        return (
            <div classname="container">
                <br />

                <input
                    className="input-text"
                    type="text"
                    placeholder="Write a to do"
                    required
                    value={this.state.newItem}
                    onChange={e => this.updateInput(e.target.value)}
                />
                <button
                    className="add-btn"
                    img={<Icon iconName="Add" />}
                    onClick={() => this.addItem(this.state.newItem)}
                    disable={!this.state.newItem.length}
                >Add task</button>

                <div className="list">
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.id}>


                                    <input
                                        type="checkbox"
                                        name="isDone"
                                        onClick={item.isDone = true}
                                    // onClick={this.handleOnClick}
                                    // checked={item.isDone}  
                                    // onClick={this.crossLine} key={item.id}
                                    // style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
                                    // onChange={() => { }}
                                    // id=""
                                    />
                                    {item.value}

                                    <button
                                        classname="btn"
                                        onClick={() => this.deleteItem(item.id)}
                                    >Delete</button>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        )

    }
}

export default Task;