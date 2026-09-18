import { CourseGoal } from "./components/CourseGoal.tsx";
import { Header } from "./components/Header.tsx";
import GoalsImage from "./assets/goals.jpg"
import { useState } from "react";
import { CourseGoalList } from "./components/CourseGoalList.tsx";
import { NewGoal } from "./components/NewGoal.tsx";
export type CourseGoals = {
  title: string;
  description: string;
  id: number;
}
export default function App() {

  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = (goal:string, summary:string) => {

    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        title: goal,
        id: Math.random(),
        description: summary
      }
      return [...prevGoals, newGoal]
    })

  };

  const handleDeleteGoal = (id: number) =>{
    setGoals((prevGoals) => {return prevGoals.filter((goal) => goal.id!=id)})
  };

  return <main>
    <Header image={{ src: GoalsImage, alt: "List of Goals" }}><h1>Course Goals</h1></Header>
    {/* <button onClick={handleAddGoal}>Add Goal</button> */}
    <NewGoal onAddGoals={handleAddGoal}></NewGoal>

    {/* <CourseGoal title="Learn from React">
      <p>learn from ground up</p>
    </CourseGoal> */}
    <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}></CourseGoalList>
  </main>;
}
