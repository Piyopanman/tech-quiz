import React, { useState } from "react";

const Choice = (props) =>{
    const {choice, isCorrect, answered, updateAnswer, id} = props;
    const [checked, setChecked] = useState(false);

    const changeAnswer = () =>{
        if(!answered){
            updateAnswer(id, !checked);
            setChecked(!checked);
        }
    };

    const realAnswer = (
        <span className={isCorrect ? "correct-answer" : "wrong-answer"} />
    );

    return (
        <div className = "col s12 m6">
            <div
                className = {'card gray lighten-2 $ {!answered && "pointer"}'}
                onClick = {()=> changeAnswer()}
            >
                <div className="card-action">
                    
                </div>

            </div>
        </div>
    );
};