import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from "./Containers/Todo";
import Title from "./components/title/Title";

function App() {
  return (
    <Fragment>
      <Title title="Todo App"/>
      <ToDo/>

    </Fragment>
  );
}

export default App;
