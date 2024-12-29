export function Image({srcImg,name}){
    return<>
    <img className="object-cover w-full h-28" src={srcImg} alt={name} />
    </>
}