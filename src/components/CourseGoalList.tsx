import { CourseGoal } from './CourseGoal'
import { type CourseGoals as CGoal } from '../App.tsx';
type CourseGoalsProps = {
    goals: CGoal[];
    onDeleteGoal: (id:number) => void;
};
export const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsProps) => {
    return <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}><p>{goal.description}</p></CourseGoal>
            </li>
        ))}
    </ul>
};