import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef();
  const [tasks, setTasks] = useState([]);

  const handleInput = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskValue = inputRef.current.value; // Get the input value
    if (taskValue) {
      setTasks((prevTasks) => [...prevTasks, taskValue]); // Add the new task to the list
      inputRef.current.value = ''; // Clear the input field
    }
  };

  const deleteAll = () => {
    setTasks([]);
  }

  //if a task is clicked to remove it
  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index)); 
  };

  return (
    <div className="App">
      <div className="center">
        <form id="app-form" onSubmit={handleInput}>
          <h2>TASK BIN</h2>
          <h4>throw your tasks by doing it</h4>
          <div className="sideDirection">
            <input
              ref={inputRef}
              id="taskInput"
              name="taskInput"
              type="text"
              placeholder="put all those garbage here"
            />
            <button id="throwBtn" type="submit">Throw away</button>
            <button id="deleteAllBtn" type="button" onClick={deleteAll}>Grind Tasks</button>
          </div>
        </form>

        <div className="taskInpBox">
          <ul id="taskBinList">
            {tasks.map((task, index) => (
              <li key={index} className="taskLi" onClick={() => removeTask(index)}>{task}</li>
            ))}
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;