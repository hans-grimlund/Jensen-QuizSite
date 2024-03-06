import { QuizQuestion } from "../classes/QuizClass";

export const getQuiz = async (difficulty: string, category: number) => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        })

        if (response.ok) {
            const questions = await response.json()

            let index = 0;
            const quizQuestions: QuizQuestion[] = questions.results.map((result: any,) => {
                const quizQuestion = new QuizQuestion();
                quizQuestion.id = index += 1;
                quizQuestion.question = result.question;
                quizQuestion.correct_answer = result.correct_answer;
                quizQuestion.incorrect_answers = result.incorrect_answers;
                return quizQuestion;
            });

            return quizQuestions;
        }
    } catch (error) {
        console.log(error);
    }
}