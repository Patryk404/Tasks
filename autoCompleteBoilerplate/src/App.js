import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";



const App = (props) => {
  const [state, setState] = useState({
    input: "",
    autoCompletion: true,
  });
  useEffect(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    props.setUsers(response.data);
  }, []);

  const replaceAt = (text, index, replacement) => {
    if (index >= text.length) {
      return text.valueOf();
    }
    return text.substring(0, index) + replacement + text.substring(index + 1);
  };

  const onChangeInput = (event) => {
    const { value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        input: value,
        autoCompletion: true,
      };
    });
  };

  const completeInput = (value) => {
    setState((prevState) => {
      return {
        ...prevState,
        input: value,
        autoCompletion: false,
      };
    });
  };

  const suggestUsername = () => {
    const users = [];
    if (state.input.length) {
      props.users.map((user) => {
        const upper_case = [];
        for (let i = 0; i < user.username.length; i++) {
          if (user.username[i].match(/[A-Z]/) != null) {
            upper_case.push(i);
          }
        }

        const username = user.username.toLowerCase();
        const temp_input = state.input.toLowerCase();

        let match = true;
        for (let i = 0; i < state.input.length; i++) {
          if (username[i] != temp_input[i]) {
            match = false;
          }
        }

        if (match) {
          users.push({ username: user.username, upper_case: upper_case });
        }
      });
    }

    return (
      <div>
        {users.map((user) => {
          let bold = state.input.toLowerCase();
          user.upper_case.map((index) => {
            if (state.input.length > index) {
              bold = replaceAt(bold, index, user.username[index]);
            }
          });

          // console.log(username.username);
          return (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => completeInput(user.username)}
              key={user.username}
            >
              <strong>{bold}</strong>
              {user.username.split(bold)[1]}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <input
        onChange={onChangeInput}
        value={state.input}
        placeholder="Type Username"
      />
      <div>{state.autoCompletion ? suggestUsername() : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(actions.setUsers(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
