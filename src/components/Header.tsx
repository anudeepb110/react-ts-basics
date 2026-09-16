import type { ReactNode } from "react"

interface HeaderProps{
    image : {
        src:string,
        alt:string
    },
    children: ReactNode
}
export const Header = ({image,children} : HeaderProps) =>{
    return <div>
        {/* <img src={image.src} alt={image.alt}   /> */}
        <img {...image}></img>
        {children}
    </div>
}