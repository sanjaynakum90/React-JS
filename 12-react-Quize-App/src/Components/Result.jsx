import React from "react";
import QUESTIONS from "../../qns.js";

const Result = ({ userAnswer }) => {
    const correct = userAnswer.filter(
        (ans, index) => ans === QUESTIONS[index].option[0]
    );

    const skipped = userAnswer.filter((ans) => ans === null);

    const correctShare = Math.round((correct.length / userAnswer.length) * 100);

    const skippedShare = Math.round((skipped.length / userAnswer.length) * 100);

    const wrongAnswerShare = Math.round(100 - correctShare - skippedShare);

    return (
        <>
            <h1>Quiz Completed</h1>

            <div className="result-summary">
                <p>
                    <span>{skippedShare}%</span>
                    <span>skipped</span>
                </p>

                <p>
                    <span>{correctShare}%</span>
                    <span>correct</span>
                </p>

                <p>
                    <span>{wrongAnswerShare}%</span>
                    <span>wrong</span>
                </p>
            </div>

            <ul>
                {userAnswer.map((ans, index) => {
                    return (
                        <>
                            <li>{index + 1}</li>
                            <li>{QUESTIONS[index].qns}</li>
                            <li>{ans ?? "skipped"}</li>
                        </>
                    );
                })}
            </ul>
        </>
    );
};

export default Result;