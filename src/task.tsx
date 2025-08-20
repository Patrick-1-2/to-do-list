import React from 'react'

type TaskType= {
  task: {
  id:number,
  text:string,
  complete:boolean
  };
deleteTask: (id: number) => void;
};

export default function Task({task, deleteTask}: TaskType) {
  return (
    <div className='bg-blue-800 p-2 rounded-md flex justify-between items-center my-4 text-white'>
      <p className='text-white'>
        {task.text}
      </p>
      <div className='flex items-center gap-2 cursor-pointer'>
        <button
          className='outline-2 px-2 bg-red-500 hover:bg-red-600'
          onClick={() => deleteTask(task.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}