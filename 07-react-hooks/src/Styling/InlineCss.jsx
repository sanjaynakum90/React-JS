import React from 'react'

const InlineCss = () => {
    return (
        <>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                height: '300px',
                width: '300px',
                padding: '20px',
                background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
                borderRadius: '20px',
                margin: 'auto',
                gap: '20px'
            }}>
                <input type="text" placeholder='user name' style={{
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    textAlign: "center",
                }} />
                <input type="email" placeholder='email' style={{
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    textAlign: "center",
                }} />
                <input type="text" placeholder='password' style={{
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    textAlign: "center",
                }} />
                <button style={{
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    textAlign: "center",
                }}>Login</button>
            </form>
        </>
    )
}

export default InlineCss