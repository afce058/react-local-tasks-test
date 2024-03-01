import React from 'react'
import { useState } from 'react';

export const TaskCreator = ({ addNewTask }) => {

    const [newTaskName, setNewTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTask(newTaskName)
        setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-9'>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Enter a new task'
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)} />
            </div>
            <div className='col-3'>
                <button className='btn btn-primary btn-sm'>Save task</button>
            </div>
        </form>
    )
}