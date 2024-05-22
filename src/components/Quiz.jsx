
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://virtulearn-backend.onrender.com';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetchQuizzes();
        
        // Disable copy, cut, and paste for the entire document
        const handleCopyPaste = (e) => e.preventDefault();
        document.addEventListener('copy', handleCopyPaste);
        document.addEventListener('cut', handleCopyPaste);
        document.addEventListener('paste', handleCopyPaste);

        return () => {
            document.removeEventListener('copy', handleCopyPaste);
            document.removeEventListener('cut', handleCopyPaste);
            document.removeEventListener('paste', handleCopyPaste);
        };
    }, []);

    const fetchQuizzes = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/quizzes`);
            const data = response.data;
            const parsedData = data.map(quiz => ({
                ...quiz,
                options: JSON.parse(quiz.options)
            }));
            setQuizzes(parsedData);
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        }
    };

    const handleAnswerChange = (quizId, optionId) => {
        setAnswers(prev => ({ ...prev, [quizId]: optionId }));
    };

    const submitQuiz = () => {
        let correctAnswers = 0;
        quizzes.forEach(quiz => {
            if (JSON.parse(quiz.correct_answer).id === answers[quiz.id]) {
                correctAnswers++;
            }
        });
        setResult((correctAnswers / quizzes.length) * 100);
    };

    return (
        <div className="quiz-section bg-gray-100 p-4 rounded-md shadow-md h-screen overflow-y-auto">
            <h2 className="text-2xl font-medium mb-4">Quizzes</h2>
            {quizzes && quizzes.map(quiz => (
                <div key={quiz.id} className="quiz border border-gray-300 p-4 rounded-md mb-4">
                    <h3 className="text-lg font-medium mb-2">{quiz.question}</h3>
                    {Array.isArray(quiz.options) && quiz.options.length > 0 ? (
                        quiz.options.map(option => (
                            <div key={option.id} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name={`quiz-${quiz.id}`}
                                    value={option.id}
                                    checked={answers[quiz.id] === option.id}
                                    onChange={() => handleAnswerChange(quiz.id, option.id)}
                                    className="mr-2 accent-blue-500"
                                    onCopy={(e) => e.preventDefault()}
                                    onCut={(e) => e.preventDefault()}
                                    onPaste={(e) => e.preventDefault()}
                                />
                                <label className="text-sm">{option.text}</label>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500 mb-2">No options available for this question.</p>
                    )}
                </div>
            ))}
            <button type="button" onClick={submitQuiz} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">
                Submit Quiz
            </button>
            {result !== null && (
                <h3 className="text-xl font-medium mt-4">Your score: {result}%</h3>
            )}
        </div>
    );
};

export default Quizzes;


