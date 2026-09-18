import type { FC, PropsWithChildren, ReactNode } from "react"

// interface CourseGoalProps {title:string, children:ReactNode}
type CourseGoalProps = PropsWithChildren<{ 
    id:number,
    title: string, onDelete:(id:number) => void }>

export const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick = {() => onDelete(id) }>Delete</button>
    </article>
}
// export default function CourseGoal({title, children}:CourseGoalProps){
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>
// }