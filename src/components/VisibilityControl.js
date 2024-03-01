import React from 'react'

export const VisibilityControl = ({
    showCompleted,
    onVisibilityChange,
    clearCompletedTasks
}) => {

    const handleClean = () => {
        if (window.confirm("Are you sure you want to delete it?")) {
            clearCompletedTasks()
        }
    }

    return (
        <div className='d-flex justify-content-between bg-secondary 
        text-white text-center p-2 border-secondary'>
            <div className='form-check form-switch'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    checked={showCompleted}
                    onChange={() => onVisibilityChange(!showCompleted)} />
                <label>Show Tasks Done</label>
            </div>
            <button className='btn btn-danger btn-sm'
                onClick={handleClean}>Clear</button>
        </div>
    )
}