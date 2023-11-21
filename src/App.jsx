/// src/App.js
import React, {useState} from "react";
import Container from './Components/Container';
import FormTodo from "./Components/FormTodo";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTask] = useState([]);

  const addTask=(task) =>{
    setTask([...task, task]);
  };

  const deleteTask=(index) =>{
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
      <div>
        <Container>
        <h1>To-Do List</h1>
        <FormTodo onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        </Container>
      </div>


  );
}

export default App;
