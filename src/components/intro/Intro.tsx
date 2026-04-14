'use client'
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section className="bg-[#FAF4EC] py-20  px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-10 md:gap-16 relative">
                <div className="w-full md:w-[210px] shrink-0">
                    <div className="relative aspect-[3/4] rounded-[1rem] overflow-hidden">
                        <Image src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" alt="Anniek Bril" fill className="object-cover" priority />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-start px-25 ">
                    <div className="w-[65%] mb-6">
                        <p className="text-[1.2rem] md:text-[1.5rem] font-medium leading-[1.1] tracking-tight text-gray-900 selection:bg-black selection:text-white">
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en what niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                        </p>
                    </div>


                    <div className="w-full flex justify-between items-end">

                        {/* 'Leer ons kennen' btn */}
                        <motion.button className="relative group flex items-center gap-3 pl-5 pr-1 py-1 border border-black rounded-[0.7rem] font-bold text-base cursor-pointer bg-transparent overflow-hidden" initial="initial" whileHover="hover"
                            variants={{
                                hover: {
                                    rotate: -4,
                                    transition: { type: "spring", stiffness: 300, damping: 12 }
                                }
                            }}
                        >
                            <motion.span className="text-black" variants={{ hover: { rotate: -1, transition: { duration: 0.3 } } }}  >
                                Leer ons kennen
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

                        <div className="hidden md:flex">
                            <motion.div initial="initial" whileHover="hover"
                                variants={{
                                    initial: { rotate: 0 },
                                    hover: {
                                        rotate: -6,
                                        transition: { type: "spring", stiffness: 300, damping: 12 }
                                    }
                                }}
                                className="border border-black p-3 rounded-[0.75rem] hover:rounded-[0.65rem] cursor-pointer group overflow-hidden relative"
                            >
                                <div className="relative w-5 h-5">
                                    <motion.div variants={{ initial: { y: 0, opacity: 1 }, hover: { y: 30, opacity: 0 } }}
                                        transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center" >
                                        <div className="bg-white rounded-full">
                                            <ArrowDown size={18} className="text-[#FF4D00]" />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={{ initial: { y: -30, opacity: 0 }, hover: { y: 0, opacity: 1 } }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center" >
                                        <div className="bg-white rounded-full ">
                                            <ArrowDown size={18} className="text-[#FF4D00]" />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Intro;