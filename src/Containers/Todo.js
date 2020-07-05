import React, { Component } from 'react';
import TodoInput from "../components/todo-input/TodoInput";
import TodoList from "../components/todo-list/TodoList";
import Footer from "../components/footer/Footer";
import {connect} from "react-redux";
import {addTask} from '../actions/actionCreator'
import {removeTask} from "../actions/actionCreator";


class ToDo extends Component {

    state = {
        activeFilter: 'all',
        taskText: '',
    }

    addTask = ({key}) => {
        const {taskText} = this.state;
        if(taskText.length > 3 && key === 'Enter') {
            const {addTask} = this.props;
            addTask((new Date()).getTime(), taskText, false)

            this.setState({
                taskText: ''
            })
        }
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            taskText: value,
        })
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const {task, removeTask} = this.props;
        const isTasksExist = task && task.length > 0;

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.addTask}  onChange={this.handleInputChange} value={taskText}/>
                {isTasksExist && <TodoList tasksList={task} removeTask={removeTask}/>}
                {isTasksExist && <Footer amount={task.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

export default connect(state => ({
    task: state.task
}), {addTask,removeTask})(ToDo)