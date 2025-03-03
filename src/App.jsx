import Header from "./components/Header"
import Tabs from "./components/Tabs"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const todos = [
    { input: "Hello, add your First todo!", complete: true },
    { input: "Hello, add your First todo!", complete: flase },
    { input: "Hello, add your First todo!", complete: flase },
    { input: "Hello, add your First todo!", complete: true }
  ];
 

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput todos={todos} />
    </>
  );
}

export default App
