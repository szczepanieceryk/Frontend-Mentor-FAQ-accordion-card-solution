import React, { useState } from 'react'

const FaqComponent = ({ question, answer }) => {

    const [isActive, setIsActive] = useState(false)

    const toggleActitveClass = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="questions-and-answers">
            <span onClick={toggleActitveClass} className={isActive ? "question active" : "question"}>
                {question}
            </span>
            <svg onClick={toggleActitveClass} className={isActive ? "arrow-down-icon active" : "arrow-down-icon"} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
            <span className={isActive ? "answer active" : "answer"}>
                {answer}
            </span>
            <hr className='divider' />
        </div>
    );
}

export default FaqComponent;