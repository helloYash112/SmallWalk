import { Image } from "./Image"
import { Description } from "./Description";
import { useState } from "react"
import { Button } from "./Button";
export function Item({img,word,description}){

    const [isValid,setValid]=useState(false);
    function isBoolean(){
        setValid(val=>!val);
    }

    return<div className="  bg-violet-300 flex-1 w-80 border-4 border-spacing-2 border-r-orange-300" >
        <Image srcImg={img} name={word}/>
        
        <label className="text-justify text-2xl" >{word}</label>
        {(isValid && <Description word={word} desc={description} />)}
       <Button name={"Description"} onEvent={isBoolean}/>
</div>} 