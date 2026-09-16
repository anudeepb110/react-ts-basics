import { CourseGoal } from "./components/CourseGoal.tsx";
import { Header } from "./components/Header.tsx";
import GoalsImage from "./assets/goals.jpg"
import { useState } from "react";
import { CourseGoalList } from "./components/CourseGoalList.tsx";
export type CourseGoals = {
  title: string;
  description: string;
  id: number;
}
export default function App() {

  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = () => {

    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        title: "Learn react with ts",
        id: Math.random(),
        description: "Learn it in depth"
      }
      return [...prevGoals, newGoal]
    })

  };

  return <main>
    <Header image={{ src: GoalsImage, alt: "List of Goals" }}><h1>Course Goals</h1></Header>
    <button onClick={handleAddGoal}>Add Goal</button>

    {/* <CourseGoal title="Learn from React">
      <p>learn from ground up</p>
    </CourseGoal> */}
    <CourseGoalList goals={goals}></CourseGoalList>
  </main>;
}
