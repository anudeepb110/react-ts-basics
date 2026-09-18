import { CourseGoal } from './CourseGoal'
import { type CourseGoals as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import type { ReactNode } from 'react';
type CourseGoalsProps = {
    goals: CGoal[];
    onDeleteGoal: (id:number) => void;
};
export const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsProps) => {
    if (goals!.length ==0){
        return <InfoBox mode='hint'>You have no goals yet. start adding some!</InfoBox>
    };
    let WarningBox: ReactNode ;
    if (goals!.length >=4){
        WarningBox = (<InfoBox mode='warning' severity='low'>
            You're collecting a lot of goals. Don't put too much on plate</InfoBox>);
    }
    return <>
    {WarningBox}
    <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}><p>{goal.description}</p></CourseGoal>
            </li>
        ))}
    </ul></>
};