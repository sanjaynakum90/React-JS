import {useState} from 'react'
import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";
import QUESTIONS from "../../qns.js";

const Question = ({ onSkip, handleAnswer, index }) => {

    const [answer, setAnswerState] = useState({
        selected: "",
        isCorrect: null
    });

    const handleAnswerState = (ans) => {

        setAnswerState({
            selected: ans,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswerState({
                selected: ans,
                isCorrect: QUESTIONS[index].option[0] === ans
            })
            setTimeout(() => {
                handleAnswer(ans)
            }, 2000);
        }, 1000);
    }

    let timer = 15000

    if (answer.selected !== "") {
        timer = 1000
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }


    let answerState = ""

    if (answer.selected && answer.isCorrect !== null) {
        answerState = answer.isCorrect === true ? "correct" : "wrong"
    } else if (answer.isCorrect) {
        answerState = "selected"
    }

    return (
        <>
            <QuizTimer timer={15000} key={timer} onTimeOut={answer.selected === "" ? onSkip : null} />

            <h1>{QUESTIONS[index].qns}</h1>

            <Answer
                answer={QUESTIONS[index].option}
                selected={answer.selected}
                answerState={answerState}
                onSelect={handleAnswerState}

            />

        </>
    )
}

export default Question