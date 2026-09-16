import {CourseGoal} from "./components/CourseGoal.tsx";
import { Header } from "./components/Header.tsx";
import GoalsImage from "./assets/goals.jpg"
import { useState } from "react";
export default function App() {
  type CourseGoals = {
    title : string;
    description: string;
    id:number;
  }
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = ( ) => {

    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
      title:"Learn react with ts",
      id: Math.random(),
      description: "Learn it in depth"
    } 
    return [...prevGoals, newGoal]
    })   

  };

  return <main>
    <Header image={{src:GoalsImage, alt:"List of Goals"}}><h1>Course Goals</h1></Header>
    <button onClick={handleAddGoal}>Add Goal</button>
    <div>
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}><p>{goal.description}</p></CourseGoal>
        </li>
      ))}
    </ul>
    </div>
    {/* <CourseGoal title="Learn from React">
      <p>learn from ground up</p>
    </CourseGoal> */}
  </main>;
}
