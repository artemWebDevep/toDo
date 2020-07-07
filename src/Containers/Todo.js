import React, { Component } from 'react';
import TodoInput from "../components/todo-input/TodoInput";
import TodoList from "../components/todo-list/TodoList";
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
        const { taskText } = this.state;
        const {task, removeTask} = this.props;
        const isTasksExist = task && task.length > 0;

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.addTask}  onChange={this.handleInputChange} value={taskText}/>
                {isTasksExist && <TodoList tasksList={task} removeTask={removeTask}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        task: state.task,
    }
}


export default connect(state => (mapStateToProps), {addTask,removeTask})(ToDo)