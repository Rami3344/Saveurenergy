"use client"
import "./card.css"
import { useState } from "react"
export default function card ({name,desc,imgsrc}){
    const [hover,setHover]  = useState(false)
    return(
        <div className="card w-80 mx-7"             
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <img src={imgsrc} />
            <h2 className="title absolute ">{name}</h2>
            <p className={`desc absolute text-white ${hover ? "block" : "hidden"}`}>{desc}</p>
        </div>
    )
}