import React, { useRef } from 'react'

const UnControlled = () => {
    const taskRef = useRef("")
    const handleFormsubmit = (e) => {
        e.preventDefault()
        console.log(taskRef.current.value);

    }
    return (
        <>
            <form onSubmit={handleFormsubmit}>
                <input type="text" placeholder='task' ref={taskRef} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default UnControlled