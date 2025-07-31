import React from 'react'
import Header from '../others/Header'
import TasklistNumber from '../others/TasklistNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TasklistNumber />
        <Tasklist />

    </div>
  )
}

export default EmployeeDashboard