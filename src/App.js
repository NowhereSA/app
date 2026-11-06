import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Center from "./components/Center";
import { TaskFilter } from "./components/TaskFilter";

function App() {
  return (
    <Center>
      <div className="app">
        <Header />
        <AddTask />
        <TaskFilter />
        <TaskList />
      </div>
    </Center>
  );
}

export default App;
