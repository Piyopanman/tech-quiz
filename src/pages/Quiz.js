//import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";

const url = "https://quizapi.io/api/v1/questions";

// config for axios
const config = {
    params:{
        limit: 1,
    },
    headers:{
        "X-Api-Key": process.env.REACT_APP_QUIZAPI_KEY,
    },
};

const Quiz = ()=>{
    const [quizzes, setquizzes] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isCorrect, setCorrect] = useState(null);
    const [answered, setAnswered] = useState(false);
        
    useEffect(() => {
        fetchQuiz();
        return;
    },[]);

    const fetchQuiz = () => {
      setAnswered(false);
      setLoading(true);
      setSelectedAnswers([]);
      axios
        .get(url, config) 
        .then((res) => {
        // console.log(res) 
        if (res.data) {
            setquizzes(res.data[0]); }
        })
        .catch((e) => {
            alert("エラーだよ。コンソールを見てね");
            console.error(e); 
         })
        .finally(() => { 
            setLoading(false);
    }); 
};

    return(
        <div>
            <h2>クイズです</h2>
            <Link to="/">topに戻る</Link>
        </div>
    );
};  

export default Quiz;