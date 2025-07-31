import React from 'react'

const Tasklist = () => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center gap-5 justify-start flex-nowrap'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className="bg-red-500">High</h3>
                <h4>31 July 2025</h4>
            </div>
        </div>

    </div>
  )
}

export default Tasklist;