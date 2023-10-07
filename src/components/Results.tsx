import { Question } from "./types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({ questions, answers}: Props)=> {
    return (
        <div className="p-1">
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="fon-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    );
}