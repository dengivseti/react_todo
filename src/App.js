import React, {Component} from 'react';
import TodoList from './containers/TodoList.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <TodoList />
      </React.Fragment>
    );
  }
}

export default App
