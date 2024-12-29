import { disc } from "./disc"
import { Item } from "./Item"
export function ItemContainer(){

    return<div className="mt-15  mb-15 grid grid-cols-4 gap-4 ">
      {
        disc.map((obj,idx)=>{
            return <ol key={idx}>
                < li>
                  <Item img={obj.img} word={obj.name} description={obj.desc}></Item>
                </li>
            </ol>
        })
      }
    </div>
}