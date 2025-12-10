import React, { useRef } from 'react'

const Answer = ({ answer, selected, answerState, onSelect }) => {



    const shuffledOption = useRef();


    if (!shuffledOption.current) {
        shuffledOption.current = [...answer];

        shuffledOption.current.sort(() => Math.random() - 0.5);
    }


    return (
        <ul>
            {shuffledOption.current.map((ans) => {
                let cssClasses = "";

                const isSelected = selected === ans;

                if (answerState === "selected" && isSelected) {
                    cssClasses = "selected";
                }


                if (answerState === "correct" && isSelected) {
                    cssClasses = "correct"
                }

                if (answerState === "wrong" && isSelected) {
                    cssClasses = "wrong"
                }

                return (
                    <li key={ans}>
                        <button onClick={() => onSelect(ans)} className={cssClasses} disabled={selected !== ""}>
                            {ans}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}

export default Answer