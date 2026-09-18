import { useRef, type SyntheticEvent } from "react";
type NewGoalProps = {
    onAddGoals : (goal:string, summary:string) => void;
};

export const NewGoal = ({onAddGoals}:NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoals = goal.current!.value
        const enteredSummary = summary.current!.value
        onAddGoals(enteredGoals, enteredSummary)
        event.currentTarget.reset()
    };
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" name="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" ref={summary} />
            </p>
            <p><button>Add Goal</button></p>
        </form>
    )
};