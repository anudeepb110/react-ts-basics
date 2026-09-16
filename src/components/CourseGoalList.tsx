import { CourseGoal } from './CourseGoal'
import { type CourseGoals as CGoal } from '../App.tsx';
type CourseGoalsProps = {
    goals: CGoal[]
};
export const CourseGoalList = ({ goals }: CourseGoalsProps) => {
    return <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
                <CourseGoal title={goal.title}><p>{goal.description}</p></CourseGoal>
            </li>
        ))}
    </ul>
};