import { useCallback, useState } from "react";
import QUESTIONS from "../../qns.js";
import Question from "./Question.jsx";

const Quiz = () => {
    // const [activeIndex,setActiveIndex] = useState(0)

    const [userAnswer, setUserAnswer] = useState([]);

    const [answerState, setAnswerState] = useState("");

    const qnsIndex =
        answerState === "" ? userAnswer.length : userAnswer.length - 1;

    const handleAnswer = useCallback((ans) => {
        setUserAnswer((prevAnswer) => [...prevAnswer, ans]);

        setAnswerState("selected");

        setTimeout(() => {
            if (ans === QUESTIONS[qnsIndex].option[0]) {
                setAnswerState("correct");
            } else {
                setAnswerState("wrong");
            }

            setTimeout(() => {
                setAnswerState("");
            }, 1000);
        }, 1000);
    }, []);

    console.log(answerState);

    const quizComplete = qnsIndex === QUESTIONS.length;

    if (quizComplete) {
        return (
            <>
                <h1>Quiz Completed</h1>
            </>
        );
    }

    console.log("user answer", userAnswer);

    const handleSkip = useCallback(() => handleAnswer(null), [handleAnswer]);

    return (
        <>
            <Question
                key={qnsIndex}
                onSkip={handleSkip}
                qns={[QUESTIONS[qnsIndex].qns]}
                selected={userAnswer[userAnswer.length - 1]}
                answerState={answerState}
                handleAnswer={handleAnswer}
                answer={[...QUESTIONS[qnsIndex].option]}
            />
        </>
    );
};

export default Quiz;