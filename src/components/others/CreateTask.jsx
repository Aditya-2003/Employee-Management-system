import React from 'react'

const CreateTask = () => {
  return (
      <div className="">
        <form className="flex flex-wrap w-full justify-between items-start bg-[#242424] p-8 rounded-md mt-5 ">
          <div className="w-1/2">
            <div className="mb-5">
              <h3 className="font-semibold text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm outline-none bg-[#242424] w-4/5 p-2 border border-gray-400 rounded-md placeholder:text-gray-400"
                type="text"
                name="task"
                id="task"
                placeholder="Make a UI Design"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm outline-none bg-[#242424] w-4/5 p-2 border border-gray-400 rounded-md "
                type="date"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-gray-300 mb-0.5">Assign To</h3>
              <input
                className="text-sm outline-none bg-[#242424] w-4/5 p-2 border border-gray-400 rounded-md placeholder:text-gray-400"
                type="text"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm outline-none bg-transparent w-4/5 p-2 border border-gray-400 rounded-md placeholder:text-gray-400"
                type="text"
                placeholder="Design, Development, etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-between h-[318px]">
           <div className="h-full">
            <h3 className="font-semibold text-gray-300 mb-0.5 ">Description</h3>
            <textarea className="text-sm h-4/5 outline-none bg-[#242424] w-full py-2 px-4 border border-gray-400 rounded placeholder:text-gray-400 "></textarea>
            </div>
             <button className="w-full text-sm hover:bg-emerald-600 py-3 px-5 rounded-lg font-semibold bg-emerald-500 mt-4">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask