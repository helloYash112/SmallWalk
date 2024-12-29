export function Button({onEvent,name,...props}){
    return<>
     <button className="bg-violet-400 hover:bg-violet-700 w-full h-10 text-orange-300 font-serif text-2xl " onClick={onEvent}{...props}>{name}</button>
    </>
}