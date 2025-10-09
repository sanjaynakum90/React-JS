import React from 'react'

const Onclick = () => {
    const handleclick = () => {
        alert("button clicked")
    }
    return (
        <>

            <button onClick={handleclick}>Click</button>
        </>
    )
}

export default Onclick