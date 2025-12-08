import React from 'react'
import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";

const Question = ({ onSkip, qns, selected, answerState, handleAnswer, answer }) => {
    return (
        <>
            <QuizTimer timer={15000} onTimeOut={onSkip} />

            <h1>{qns}</h1>

            <Answer
                answer={answer}
                selected={selected}
                answerState={answerState}
                onSelect={handleAnswer}

            />

        </>
    )
}

export default Question