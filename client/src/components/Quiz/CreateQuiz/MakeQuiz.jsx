import React from 'react';
import Question from '../QuizTemplates/QuestionTemplate/QuestionTemplate';
import Answer from '../QuizTemplates/AnswerTemplate/AnswerTemplate';

const MakeQuiz = ({
    quizzes = [
        {
            question: 'Lorem ipsum dolor sit amet 1',
            answers: [
                'lorem ipsum dolor sit amet 1',
                'lorem ipsum dolor sit amet 1',
                'lorem ipsum dolor sit amet 1',
                'lorem ipsum dolor sit amet 1'
            ]
        },
        {
            question: 'Lorem ipsum dolor sit amet 2',
            answers: [
                'lorem ipsum dolor sit amet 2',
                'lorem ipsum dolor sit amet 2',
                'lorem ipsum dolor sit amet 2',
                'lorem ipsum dolor sit amet 2'
            ]
        }
    ]
}) => {
    const quizTemplate = quizzes.map(({ question, answers }) => (
        <>
            <Question question={question} />
            {answers.map(answer => (
                <Answer answer={answer} />
            ))}
        </>
    ));
    return <>{quizTemplate}</>;
};

export default MakeQuiz;
