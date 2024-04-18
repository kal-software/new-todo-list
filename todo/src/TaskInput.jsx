import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTask,
  updateTaskName,
  updateDate,
  deleteTask,
  moveUp,
  moveDown,
  completeTask,
} from "./actions";

function TodoList({
  todoList,
  taskName,
  date,
  addTask,
  updateTaskName,
  updateDate,
  deleteTask,
  moveUp,
  moveDown,
  completeTask,
}) {
  function handleAddTask() {
    const newTodo = {
      name: taskName.trim(),
      date: date.trim(),
      completed: false,
    };

    addTask(newTodo);

    setTaskName("");
    setDate("");
  }

  return (
    <div className="container">
      <h3 className="todo-list">Simple TodoList</h3>

      <div className="inputs">
        <input
          type="text"
          placeholder="Add Task"
          onChange={updateTaskName}
          value={taskName}
        />
        <input type="date" onChange={updateDate} value={date} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {todoList.length > 0 && (
        <div className="lists">
          {todoList.map((todo, index) => (
            <div className="list" key={index}>
              <div
                className="listcontainer"
                style={{ backgroundColor: todo.completed ? "green" : "transparent" }}
              >
                <label className="label1">{todo.name}</label>
                <label className="label2">{todo.date}</label>
                <button className="button-up" onClick={() => moveUp(index)}>
                  Up
                </button>
                <button className="button-down" onClick={() => moveDown(index)}>
                  Down
                </button>
                <button className="button-completed" onClick={() => completeTask(index)}>
                  Complete
                </button>
                <button className="button-delete" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    taskName: state.taskName,
    date: state.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    updateTaskName: (event) => dispatch(updateTaskName(event.target.value)),
    updateDate: (event) => dispatch(updateDate(event.target.value)),
    deleteTask: (index) => dispatch(deleteTask(index)),
    moveUp: (index) => dispatch(moveUp(index)),
    moveDown: (index) => dispatch(moveDown(index)),
    completeTask: (index) => dispatch(completeTask(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);