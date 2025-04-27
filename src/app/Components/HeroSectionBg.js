"use client"
import { animate, useMotionTemplate, useMotionValue,motion } from "motion/react"
import { useEffect, useState } from "react"
import HeroSectionContent from "./HeroSectionContent"

const colors=[
    'rgba(172, 19, 59, 0.52)',
    'rgba(30, 171, 19, 0.52)',
    'rgba(19, 166, 171, 0.52)',
    'rgba(109, 19, 171, 0.52)'
]
export default function RadialGradientSection(){
    const currentColor=useMotionValue(colors[1])
    const backgrounRadial=useMotionTemplate`radial-gradient(100% 130% at 50% 0%, #080707 50% ,${currentColor})`
     useEffect(()=>{
        animate(currentColor,colors,{
            ease:'easeInOut',
            duration:20,
            repeat:Infinity,
            repeatType:'mirror'
        })
     },[])
  
    return(
        <div className=" w-full h-full relative ">
         <motion.section
        style={{
            backgroundImage:backgrounRadial
        }}
         className=" w-full h-full py-20  ">

<HeroSectionContent currentColor={currentColor}/>
{/* <div className=" w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center gap-[2vh] ">
  <div className=" px-4 py-2 rounded-full bg-zinc-700/70 border border-zinc-800 text-zinc-400 text-[0.9rem] ">Complex</div>
  <div className=" mt-3 w-[80%] text-[6rem] leading-[6rem] text-center font-semibold md:w-[60%] ">
    Design the way you think
  </div>
  <div className=" text-[1.4rem] text-zinc-400 mt-6 w-[40%] text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
  <motion.div className={`px-6 py-2 rounded-md mt-4 cursor-pointer  `} style={{
    backgroundColor:currentColor
  }}>Get Started</motion.div>
</div> */}
        </motion.section>
        </div>
       
    )
}