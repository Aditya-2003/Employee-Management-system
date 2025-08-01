import React from 'react'

const Tasklist = () => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center gap-5 justify-start flex-nowrap'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className="text-sm bg-red-500 px-3 py-1 rounded">High</h3>
                <h4 className='text-sm'>31 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus possimus, et sit aliquam doloremque!
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className="text-sm bg-red-500 px-3 py-1 rounded">High</h3>
                <h4 className='text-sm'>31 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus possimus, et sit aliquam doloremque!
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className="text-sm bg-red-500 px-3 py-1 rounded">High</h3>
                <h4 className='text-sm'>31 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus possimus, et sit aliquam doloremque!
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className="text-sm bg-red-500 px-3 py-1 rounded">High</h3>
                <h4 className='text-sm'>31 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus possimus, et sit aliquam doloremque!
            </p>
        </div>

    </div>
  )
}

export default Tasklist;