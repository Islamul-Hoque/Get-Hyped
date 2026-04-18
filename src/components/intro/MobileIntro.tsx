'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileIntro = () => {
    return (
        <section className="bg-[#FAF4EC] md:hidden pt-10 px-6 overflow-hidden">
            <div className="max-w-7xl  flex flex-col items-start gap-10 relative">

                {/* video */}
                <div className='px-6'>
                    <motion.div
                        className="w-[20rem] aspect-[3/4] rounded-[1.1rem] overflow-hidden relative z-10 bg-black/5 origin-top-left "
                        initial={{ rotate: 2 }}
                        whileHover={{ rotate: 2, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col items-start w-full">
                    <div className="w-full md:w-[85%] mb-8">
                        <p className="text-[1.3rem] md:text-[1.8rem] font-medium leading-[1.2] tracking-tight text-gray-900 selection:bg-black selection:text-white">
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en what niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                        </p>
                    </div>

                    <div className="w-full flex justify-between items-end">
                        {/* 'Leer ons kennen' btn */}
                        <motion.button
                            className="relative group flex items-center gap-3 pl-5 pr-1.5 py-1.5 border border-black rounded-[0.9rem] font-bold text-base cursor-pointer bg-transparent overflow-hidden"
                            initial="initial"
                            whileHover="hover"
                            variants={{
                                hover: {
                                    rotate: -4,
                                    transition: { type: "spring", stiffness: 300, damping: 12 }
                                }
                            }}
                        >
                            <motion.span className="text-black" variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}>
                                Leer ons kennen
                            </motion.span>
                            <motion.div
                                className="bg-black text-white rounded-[0.7rem] p-2 flex items-center justify-center"
                                variants={{
                                    initial: { scale: 1, rotate: 0 },
                                    hover: { scale: 1, rotate: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }
                                }}
                            >
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MobileIntro;