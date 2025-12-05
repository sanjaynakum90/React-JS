import React, { useEffect, useState } from 'react'

const QuizTimer = ({ timer, onTimeOut }) => {

    const [remainTime, setRemainTime] = useState(timer)

    useEffect(() => {

        const time = setTimeout(onTimeOut, timer)
        return () => {
            clearTimeout(time)
        }
    }, [onTimeOut, timer])

    useEffect(()=>{
         const interval = setInterval(() => {
      setRemainTime((prevTime) => prevTime - 100);
    }, 100);


    return () =>{
        clearInterval(interval)
    }
    })
    return (
        <progress max={timer} value={remainTime}/>
    )
}

export default QuizTimer