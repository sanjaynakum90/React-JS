import React from 'react'

import "./External.css"

const External = () => {
    return (
        <>
            <form className='form'>
                <input className="input" type="text" placeholder='user name' />
                <input className="input" type="email" placeholder='enter your email' />
                <input className="input" type="text" placeholder='enter password' />
                <button>login</button>
            </form>
        </>
    )
}

export default External