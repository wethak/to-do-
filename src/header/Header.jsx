import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  state = {
    item: [],
    task: ""
  };

  handlechange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleclick = () => {
    this.state.task === ""
      ? alert("enter task")
      : this.setState({
          item: [
            ...this.state.item,
            { desc: this.state.task, isComplete: false }
          ],
          task: ""
        });
  };
  handlebtn = e => {
    console.log(this.state.item);
    let newItem = this.state.item;
    newItem[e.target.id].isComplete = true;
    // console.log(e.target.id);
    // console.log(newItem[e.target.id]);
    this.setState({
      item: newItem
    });
  };
  handlereset = e => {
    this.setState({
      item: this.state.item.filter((el, i) => i != e.target.id)
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <span className="head-elements">
            <h1>To-Do-App!</h1>
            <h5>Add New To-Do</h5>

            <input
              id="task-area"
              type="text"
              name="todo"
              value={this.state.task}
              placeholder="Enter new task"
              onChange={this.handlechange}
            />
            <input
              id="add-btn"
              type="button"
              value="Add"
              onClick={this.handleclick}
            />
          </span>
        </div>
        <div>
          <h2>Let's get some work</h2>
        </div>
        <ul>
          {this.state.item.map((el, i) => (
            <div className="list" key={i}>
              <button id={i} onClick={e => this.handlebtn(e)}>
                {el.isComplete ? "undo" : "complete"}
              </button>
              <button id={i} onClick={e => this.handlereset(e)}>
                delete
              </button>
              <h3 className={el.isComplete ? "undo" : ""}>{el.desc}</h3>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
