import { useParams } from "react-router-dom"
import { getQuiz } from "../../services/QuizService";
import { FormEvent, useEffect, useState } from "react";
import { QuizQuestion } from "../../classes/QuizClass";
import Loading from "../../components/loading/Loading";
import { decode } from 'html-entities'
import NotFound from "../../components/error/notfound/NotFound";

export default () => {
    const { category } = useParams();
    const { difficulty } = useParams();
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [questionElements, setQuestionElements] = useState<JSX.Element[]>([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState<{ questionId: number, answer: string}[]>([])
    const [rightAnswers, setRightAnswers] = useState(0);

    const fetchQuestions = async () => {
        try {
            if (!difficulty || !category) return;

            const questions = await getQuiz(difficulty, Number(category));
            if (questions) setQuestions(questions);    
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, [])

    const submit = (e: FormEvent) => {
        e.preventDefault();
        
        if (answers.length != questions.length) return;

        const createQuestionElements = () => {
            return questions.map((question) => {
                if (answers.some(a => a.questionId == question.id && a.answer == question.correct_answer))
                    setRightAnswers(prevNumber => prevNumber +1);

                return (
                    <div key={question.id} className="d-flex flex-column mb-2 border-bottom p-3">
                        <span className="lead mb-2">{question.id}. {decode(question.question)}</span>
                        <div key={1} className="form-check">
                            <input className="form-check-input" type="radio" readOnly checked={answers.some(a => a.questionId == question.id && a.answer == question.correct_answer)} />
                            <label className="form-check-label text-success" htmlFor="{s'anwer' + index2 + 2}">{decode(question.correct_answer)}</label>
                        </div>
                        {question.incorrect_answers.map((answer, answerIndex) => { 
                            const textColor = (answers.filter(a => a.questionId == question.id && a.answer == answer).length == 1) ? ' text-danger' : null;
                            return (
                                <div key={answerIndex} className="form-check">
                                    <input className="form-check-input" type="radio" readOnly checked={answers.some(a => a.questionId == question.id && a.answer == answer)} />
                                    <label className={'form-check-label' + textColor}>{decode(answer)}</label>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }

        setQuestionElements(createQuestionElements());
    }

    const handleAnswer = (questionId: number, selectedAnswer: string) => {
        setAnswers(prevAnswers => [...prevAnswers.filter(answer => answer.questionId !== questionId)]);
        setAnswers(prevAnswers => [...prevAnswers, { questionId: questionId, answer: selectedAnswer}]);
    }

    useEffect(() => {
        const createQuestionElements = () => {
            return questions.map((question, index) => {
                let randomAnswers = [...question.incorrect_answers, question.correct_answer];
                randomAnswers = randomAnswers.sort(() => Math.random() - 0.5);

                return (
                    <div key={question.id} className="d-flex flex-column mb-2 border-bottom p-3">
                        <span className="lead mb-2">{question.id}. {decode(question.question)}</span>
                        {randomAnswers.map((answer, answerIndex) => (
                            <div key={answerIndex} className="form-check">
                                <input onChange={() => handleAnswer(question.id, answer)} className="form-check-input" type="radio" name={'answer' + index} id={'anwer' + answerIndex + 1} />
                                <label className="form-check-label" htmlFor="{s'anwer' + index2 + 2}">{decode(answer)}</label>
                            </div>
                        ))}
                    </div>
                )
            });
        }
        
        setQuestionElements(createQuestionElements());

    }, [questions])

    const rightAnswersElement = (
        <span className="mb-3">You got {rightAnswers} questions right</span>
    )

    if (loading) return <Loading />

    if (questions.length < 1) return <NotFound />
    
    return (
        <div className="col-12 d-flex justify-content-center mt-4">
            <form onSubmit={(e) => submit(e)} className="col-11 col-md-8 col-lg-6 mb-4 d-flex flex-column bg-dark rounded-3">
                {questionElements}
                <div className="col-12 p-3 d-flex flex-column align-items-center">
                    {rightAnswers != 0 ? rightAnswersElement : null}
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
