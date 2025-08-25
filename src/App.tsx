import React, { useState } from 'react';
import Task from './task';

type TaskType = {
  task: {
    id: number,
    text: string,
    completed: boolean
  };
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

function App() {

  const [input, setInput] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: TaskType = {
      id: Date.now(),
      text: input,
      completed: false,
    }

    setTasks((prevTask) => [...prevTask, newTask]);
    setInput("");
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <div className='bg-blue-950 p-4 min-h-screen flex justify-center items-center'>
        <div className='max-w-[500px] w-[80%] bg-slate-400 p-4 rounded-md shadow-md'>
          <h1 className='text-center text-white text-4xl'>To-Do List</h1>
          <div className='flex gap-2 justify-center my-10'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Add your tasks...'
              className='flex-[3] border-2 outline-none border-gray-900 text-white placeholder-gray-100 p-2 rounded-md focus:border-white' />
            <button onClick={addTask} className='flex-[1] bg-green-400 border-1 outline-1 border-gray-900 placeholder-gray-800 rounded-md hover:bg-green-500'>
              Gawa ng bagong Task
            </button>
          </div>
          <div>
            <h1 className='text-xl text-center text-white'>Pending Tasks</h1>
            {tasks?.length > 0 ? (
              <>
                {tasks.map((task) => {
                  return (
                    <Task
                      task={task}
                      key={task.id}
                      deleteTask={deleteTask} />
                  );
                })}
              </>
            ) : (
              <h1 className='text-center text-white text-xl my-4'>
                All Tasks Completed!
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
