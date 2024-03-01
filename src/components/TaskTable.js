import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table
      className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map(task => (
            <TaskRow task={task} toggleTask={toggleTask} key={task.name} />
          ))
        }
      </tbody>
    </table>
  )
}