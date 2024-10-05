import React, { useState } from 'react';

function App() {
    // To-Do list state
    const [tasks, setTasks] = useState([
        { text: "Type Here", completed: false },
        { text: "Type Here", completed: false },
        { text: "Type Here", completed: false }
    ]);

    // Toggle task completion
    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <div className="title">To-Do List</div>
            {tasks.map((task, index) => (
                <div className="taskList" key={index}>
                    <div className="taskListLeft">
                        <input className="checkbox"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(index)}
                        />
                        <input className="typeBox" placeholder={task.text} />
                    </div>
                    <div className="taskListRight">
                        <div className="drag-handle">
                            <div /><div /><div />
                        </div>
                        <div className="x-symbol" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;