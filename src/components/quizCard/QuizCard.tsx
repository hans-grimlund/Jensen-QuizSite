import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    description: string;
    category: number;
    title: string;
}

export default ({ description, category, title }: Props) => {
    const [difficulty, setDifficulty] = useState("");
    const navi = useNavigate();

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (difficulty) navi(`/quiz/${category}/${difficulty}`);
    }

    return (
        <form onSubmit={(e) => submit(e)} className="col-12 col-sm-6 col-md-4 col-lg-3 m-0 mb-4 d-flex">
            <button className="btn bg-dark rounded-3 p-0 d-flex flex-column justify-content-between col-12">
                <div className="col-12 p-2">
                    <span className="lead">{title}</span>
                </div>
                <div className="col-12 border-top border-bottom p-2">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="col-12 p-2">
                    <select onChange={(e) => setDifficulty(e.target.value)} className="form-select form-select-sm" name="difficulty" id="difficulty" defaultValue={0}>
                        <option value={0} disabled>Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </button>
        </form>
    )
}