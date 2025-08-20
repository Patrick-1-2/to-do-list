

function App() {
  return(
    <>
    <div className='bg-blue-950 p-4 min-h-screen flex justify-center items-center'>
      <div className='max-w-[500px] w-[80%] bg-slate-400 p-4 rounded-md shadow-md'>
        <h1 className='text-center text-white text-4xl'>To-Do List</h1>
        <div className='flex gap-2 justify-center my-10'>
          <input
          type='text' 
          placeholder='Add your tasks...'
          className='flex-[3] border-2 outline-none border-gray-900 text-white placeholder-gray-100 p-2 rounded-md focus:border-white'/>
          <button className='flex-[1] bg-green-400 border-1 outline-1 border-gray-900 placeholder-gray-800 rounded-md hover:bg-green-500'>
            Add Task
          </button>
        </div>
        <div>
        <h1 className='text-xl text-center text-white'>Pending Tasks</h1>
          <div className='bg-blue-800 p-2 rounded-md flex justify-between items-center my-4 text-white'>
            <p>Finish to do list</p>
            <div className='flex items-center gap-2 cursor-pointer'>
              <button className='outline-2 px-2 bg-green-500 hover:bg-green-600'>
                √
              </button>
              <button className='outline-2 px-2 bg-red-500 hover:bg-red-600'>
                X
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
