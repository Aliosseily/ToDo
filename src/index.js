import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const styles = {
  fontFamily: "sans-serif"
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      item: []
    };
  }

  Userinput(input) {
    this.setState({ username: input });
  }
  AddList(input) {
    if (input !== "") {
      var listArray = this.state.item;
      listArray.push(input);
      this.setState({ item: listArray, username: "" });
    }
  }
  deleteList() {
    var delArray = this.state.item;
    delArray.shift();
    this.setState({ item: delArray });
  }
  render() {
    return (
      <div style={styles} className="something">
        {" "}
        <h3 className="title">MY TO DO LIST</h3>
        <input
          type="text"
          placeholder="Type..."
          onChange={e => this.Userinput(e.target.value)}
          value={this.state.username}
        />
        <button id="add" onClick={() => this.AddList(this.state.username)}>
          Add
        </button>
        <ol>
          {this.state.item.map(val => (
            <li>
              <div id="output">
                <input id="check" type="checkbox" />
                {val}

                <button
                  id="btn"
                  onClick={() => this.deleteList(this.state.username)}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
render(<ToDo />, document.getElementById("root"));
