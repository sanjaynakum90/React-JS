import React, { useCallback, useState } from 'react'
import QUESTIONS from "../../qns.js"
import QuizTimer from './QuizTimer.jsx'

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([])


    const qnsIndex = userAnswer.length


    const handleAnswer = useCallback((ans) => {
        setUserAnswer((prevAnswer) => [...prevAnswer, ans])

    }, [])


    const quizComplete = qnsIndex === QUESTIONS.length




    if (quizComplete) {
        return <h1>Quiz Completed</h1>
    }

    const shuffledOption = [...QUESTIONS[qnsIndex].option]

    shuffledOption.sort(() => Math.random() - 0.5)

    console.log("user answer", userAnswer)

    const handleSkip = useCallback(() => handleAnswer(null), [handleAnswer])



    return (

        <>
            <QuizTimer key={qnsIndex} timer={15000} onTimeOut={handleSkip} />
            <h1>{QUESTIONS[qnsIndex].qns}</h1>

            <ul>
                {shuffledOption.map((ans) => (
                    <li key={ans} >

                        <button onClick={() => handleAnswer(ans)} >{ans}</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Quiz