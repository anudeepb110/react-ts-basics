import type { FC, PropsWithChildren, ReactNode } from "react"

// interface CourseGoalProps {title:string, children:ReactNode}
type CourseGoalProps = PropsWithChildren<{ title: string }>

export const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
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