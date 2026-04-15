'use client'
import React, { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScoringCardProps {
    text: string;
    btnText: string;
    borderColor: string;
    btnBg: string;
    videoSrc: string;
}

const scoringCards: ScoringCardProps[] = [
    {
        text: "Van nul naar vol, binnen 3 weken",
        btnText: "Bullit",
        borderColor: "#FA5424",
        btnBg: "#FC997B",
        videoSrc: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
    },
    {
        text: "Zacht in smaak, sterk in beeld",
        btnText: "Roasta",
        borderColor: "#0D8DFF",
        btnBg: "#28AAFF",
        videoSrc: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
    },
    {
        text: "Content die écht smaakt (en raakt)",
        btnText: "Loco",
        borderColor: "#33C791",
        btnBg: "#73E2B6",
        videoSrc: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
    }
]

export default function ContentScoring() {
    return (
        <section className="bg-[#FAF4EC] py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:w-1/2">
                    <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter leading-none mb-6">  Content <br /> dat scoort. </h2>
                    <p className="text-xl md:text-2xl font-semibold leading-snug text-black/80">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
                    </p>
                    {/* <button className="mt-8 group flex items-center gap-3 bg-transparent border border-black px-7 py-2.5 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
                        Bekijk al ons werk
                        <span className="bg-black text-white group-hover:bg-white group-hover:text-black rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-300">
                            <svg width="12" height="12" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button> */}


                      <motion.button className="relative mt-8 group flex items-center gap-3 pl-5 pr-1 py-1 border border-black rounded-[0.7rem] font-bold text-base cursor-pointer bg-transparent overflow-hidden" initial="initial" whileHover="hover"
                            variants={{
                                hover: {
                                    rotate: -4,
                                    transition: { type: "spring", stiffness: 300, damping: 12 }
                                }
                            }}
                        >
                            <motion.span className="text-black" variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}  >
                                Bekijk al ons werk
                            </motion.span>
                            <motion.div className="bg-black text-white rounded-[0.65rem] p-2 flex items-center justify-center"
                                variants={{
                                    initial: { scale: 1, rotate: 0 },
                                    hover: { scale: 1, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }
                                }}
                            >
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </motion.div>
                        </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
                    {scoringCards.map((card, index) => (
                        <ScoringCard key={index} {...card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ScoringCard({ text, btnText, borderColor, btnBg, videoSrc, index }: ScoringCardProps & { index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
                videoRef.current?.pause();
                if (videoRef.current) videoRef.current.currentTime = 0;
            }}
            style={{
                borderColor: borderColor,
                marginTop: index === 1 ? '40px' : index === 2 ? '0px' : '80px',
                perspective: '1500px',
            }}

            className="group relative w-full aspect-3/4 rounded-[1.52rem] border-[7px] bg-white cursor-pointer transition-all duration-700 ease-out hover:transform-[rotateZ(-4deg)_rotateX(-5deg)_rotateY(-5deg)_scale(1.01)] hover:shadow-2xl overflow-hidden"
        >

            <video ref={videoRef} muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <source src={videoSrc} type="video/mp4" />
            </video>

            <div className="absolute p-4 inset-x-0 bottom-0 flex flex-col items-end pointer-events-none">

                <div className="relative w-full -mb-0.5 overflow-hidden" style={{ color: borderColor }}>
                    <svg viewBox="0 0 429 90" fill="none" className="w-full block" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0px 1px 0px currentColor)' }} >
                        <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 170L1.03513e-06 170C-1.56688e-05 167.148 0.000175319 164.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="currentColor" />
                    </svg>

                    <div className="absolute top-6 right-2 bg-white text-black w-10 h-10 rounded-full shadow-lg overflow-hidden"
                        style={{
                            transform: "translate3d(0%, -30%, 0px)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <div className="relative w-full h-full transition-transform duration-500 group-hover:-translate-y-full group-hover:translate-x-full">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ArrowUpRight size={20} strokeWidth={2} />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-all duration-500">
                                <ArrowUpRight size={20} strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: borderColor }} className="w-full px-3 pb-3 pt-0 flex flex-col gap-4 rounded-b-[0.7rem]">
                    <h3 className="text-white text-xl md:text-2xl font-semibold ">{text}</h3>
                    <div className="flex">
                        <span style={{ backgroundColor: btnBg }} className="px-5 py-2 rounded-xl text-white "> {btnText} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}