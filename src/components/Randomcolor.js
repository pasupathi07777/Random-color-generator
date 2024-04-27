import { useEffect, useState } from "react"

export default function Randomcolor(){

    let [typeofcolor , settypeofcolor]=useState("hex")
    let [color , setcolor]=useState("hex")

    useEffect(()=>{
        setcolor(typeofcolor==="hex"?'#000':"rgb(0,0,0)")

    } ,[typeofcolor])
  

    function utility(length){
        return Math.floor(Math.random()*length)

    }

    function handlecreatehexcolor(){
        let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexcolor="#"
        for(let i=0;i<6;i++){
            hexcolor += hex[utility(hex.length)]
            setcolor(hexcolor)
          

            

        }
        console.log(hexcolor)
        


    }
    function handlecreatergbcolor(){
        let r=utility(256)
        let g=utility(256)
        let b=utility(256)
        let color=`rgb(${r},${g},${b})`
        console.log(color)
        setcolor(color)

    }

    return (
        <div className="container w-[100vw] h-[100vh] bg-black flex flex-col justify-center items-center gap-10 p-2" style={{background:color}}>
            <h1 className="te text-white text-6xl sm:text-8xl font-bold capitalize select-none">{`${typeofcolor} color`}</h1>
            <div className="color-code font-bold text-4xl  sm:text-6xl text-white">
                {color}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 select-none">
            <button onClick={()=>settypeofcolor("hex")} className="bg bg-white px-2 rounded font-bold text-2xl sm:text-2xl">Create HEX Color</button>
            <button onClick={()=>settypeofcolor("rgb")} className="bg bg-white px-2 rounded font-bold text-2xl sm:text-2xl">Create RGB Color</button>
            <button onClick={typeofcolor==="hex"?handlecreatehexcolor:handlecreatergbcolor} className="bg bg-white px-2 rounded font-bold text-2xl sm:text-2xl">Generete Random Color</button>
            </div>
        </div>

    )
}