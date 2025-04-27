import { motion, useMotionTemplate } from "motion/react"
import { TextGenerateEffect } from "./TextGenratingEffect"
import { FaRegFolderOpen } from "react-icons/fa6";
import { PiContactlessPaymentFill } from "react-icons/pi";
import Link from "next/link";

export default function HeroSectionContent({
    currentColor
}){
    // Create a motion template for the text color
    const textColor = useMotionTemplate`${currentColor}`

    return(
        <div className="absolute left-0 top-0 z-10 w-full h-full flex flex-col items-center justify-center gap-7">
            {/* Desktop/Tablet version */}
            <div className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.6rem] w-[90%] font-semibold leading-[2.5rem] sm:leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.5rem] xl:leading-[7rem] text-center text-zinc-100 hidden sm:flex flex-col gap-1">
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                    >
                        Launch Your Career in
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            ease: "easeOut"
                        }}
                    >
                        <motion.span 
                            className={`bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-700`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.2,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            Tech
                        </motion.span> with 
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        Real-World 
                        <motion.span 
                            className={`bg-clip-text ml-6 text-transparent bg-gradient-to-br from-emerald-300 to-emerald-700`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.4,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            Skills
                        </motion.span>
                    </motion.h1>
                </div>
            </div>
            
            {/* Mobile version - Added the same animations here */}
            <div className="text-[2.2rem] w-[90%] font-bold leading-[2.5rem] text-center text-zinc-100 sm:hidden flex flex-col gap-1">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                    >
                        Launch Your Career 
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            ease: "easeOut"
                        }}
                        
                    >
                        in 
                        <motion.span 
                            className={`bg-clip-text ml-2 text-transparent bg-gradient-to-br from-rose-300 to-rose-700`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.2,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            Tech
                        </motion.span> with 
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{y:100, opacity: 0}} 
                        animate={{y:0, opacity: 1}} 
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        Real-World  
                        <motion.span 
                            className={`bg-clip-text ml-2  text-transparent bg-gradient-to-br from-emerald-300 to-emerald-700`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 1.4,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            Skills
                        </motion.span>
                    </motion.h1>
                </div>
            </div>

            {/* Enhanced TextGenerateEffect with proper animation timing */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="w-full flex justify-center"
            >
                <TextGenerateEffect words={'Join hands-on training programs in Data Science, Analytics, and SAP — plus expert coaching to land your dream job.'}/>
            </motion.div>

            {/* Improved button animations */}
            <div className="py-3 md:px-[10%]  overflow-hidden">
                <motion.div 
                    initial={{y: 50, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{
                        ease: "easeOut",
                        duration: 0.7,
                        delay: 2.0
                    }} 
                    className="flex items-center gap-3 md:gap-6"
                >
                    <Link href="#courses"><motion.button 
                        whileHover={{ 
                            backgroundColor: "transparent",
                            color: "#10b981", // emerald-500
                            borderColor: "#10b981"
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative group px-4 md:px-6 py-3 md:text-[1rem] text-[0.8rem] font-[500] rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-100 cursor-pointer duration-300 group flex items-center gap-2"
                    >
                        <FaRegFolderOpen className="text-[1.3rem]"/><div className="  overflow-hidden  relative flex flex-col">
                             
                             <span className="  h-full group-hover:-translate-y-full duration-200 ">Explore Courses</span><span className=" h-full absolute -bottom-full group-hover:bottom-0 duration-300 left-0 ">Explore Courses</span>
                             </div>
                    </motion.button></Link>
                    
                    <Link href="/connect-with-us"><motion.button 
                        whileHover={{ 
                            backgroundColor: "transparent",
                            color: "#10b981", // emerald-500
                            borderColor: "#10b981"
                        }}
                        transition={{ duration: 0.2 }}
                        className="px-4 md:px-6 py-3 md:text-[1rem] group text-[0.8rem] font-[500] rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-100 cursor-pointer duration-300 flex items-center gap-2"
                    >
                        <PiContactlessPaymentFill className="text-[1.5rem]"/>
                        <div className=" hidden overflow-hidden relative md:flex flex-col"><span className="  h-full group-hover:-translate-y-full duration-200 ">Book a Free Career Consultation</span><span className=" h-full absolute -bottom-full group-hover:bottom-0 duration-300 left-0 ">Book a Free Career Consultation</span></div>
                        <span className="md:hidden">Free Career Consultation</span>
                    </motion.button></Link>
                </motion.div>
            </div>
        </div>
    )
}