"use client";

import React from 'react';
import Logo2 from '../logo/Logo2';
import FooterBadge from "./footerBadge/FooterBadge";
import Link from 'next/link';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import RightContent from './RightContent';

const BottomFooter = () => {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);

    return (
        // <div className="relative w-full">
        //     {/* Background SVG  */}
        //     <div className="absolute px-4 inset-0 w-full h-full pointer-events-none -z-10">
        //         <svg viewBox="0 0 1860 386" fill="none" xmlns="http://www.w3.org/2000/svg"
        //             className="w-full h-full  block object-cover" preserveAspectRatio="none" >
        //             <path fill="#EAE4D8" d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184" />
        //         </svg>
        //     </div>

        //     {/* Footer Badge */}
        //     <motion.div className="absolute hidden md:block top-0 right-[11%] -translate-y-1/2 z-30" initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} style={{ rotate }}  >
        //         <FooterBadge />
        //     </motion.div>

        //     {/* Main Content */}
        //     <div className="relative pt-18 z-10 ">
        //         <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-8 px-6">
        //             {/* Left Content */}
        //             <div className="w-full md:w-[16rem] flex justify-center md:justify-start items-center md:items-end pt-8 md:pt-0">
        //                 <Logo2 />
        //             </div>

        //             {/* Right Content */}
        //             <RightContent />
        //         </div>
        //     </div>
        // </div>
    );
};


export default BottomFooter;






// main footer

// <div className="bg -[#FAF4EC]">

//             {/* Background SVG Wrapper */}
//             <div className="relative bg-[#FAF4EC] overflow-hidden">
//                 <div className="absolute inset-0 w-full h-full pointer-events-none">
//                     <svg viewBox="0 0 1860 386" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none" >
//                         <path fill="#EAE4D8" d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184" />
//                     </svg>
//                 </div>
//             </div>

//             {/* Footer Badge */}
//             <div className="absolute top-0 right-[15%] -translate-y-1/2 z-30">
//                 <FooterBadge />
//             </div>


//             <div className="relative z-10 ">
//                 <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-8 px-6 ">
//                     {/* Left  */}
//                     <div className="w-full md:w-[12rem] flex justify-center md:justify-start items-center md:items-end pt-8 md:pt-0">
//                         <Logo />
//                     </div>


//                     {/* right */}
//                     <div className=' md:pr-20'>
//                         <div className='flex md:gap-10  flex-col md:flex-row md:items-end justify-center md:justify-between'>
//                             {/* route + social */}
//                             <div className=''>
//                                 <div className="flex justify-center md:hidden gap-10 px-1.5 py-6">
//                                     <motion.button
//                                         className="relative bg-[#FA5424] text-white group flex items-center justify-center px-1.5 py-1.5 rounded-[0.7rem]"
//                                         initial="initial"
//                                         whileHover="hover"
//                                         variants={{ hover: { rotate: -4, transition: { type: "spring", stiffness: 300, damping: 12 } } }}
//                                     >
//                                         <div className="flex items-center gap-2 pl-3 pr-1">
//                                             <span className="font-bold whitespace-nowrap text-sm">Get Hyped! Neem contact op</span>
//                                             <motion.div className="bg-white p-1.5 rounded-lg flex items-center justify-center" variants={{ initial: { scale: 1, rotate: 0 }, hover: { scale: 1, rotate: -8 } }}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 20 24" fill="none" className="text-[#FA5424]">
//                                                     <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor" />
//                                                 </svg>
//                                             </motion.div>
//                                         </div>
//                                     </motion.button>
//                                 </div>
//                                 <div className=" ">

//                                     <div className="flex flex-wrap justify-center md:justify-start gap-3">
//                                         {navLinks.map((link) => (
//                                             <Link key={link.name} href={link.href} className="relative group px-3.5 py-1.5 overflow-hidden rounded-[0.67rem] bg-white  block">
//                                                 <span className="absolute inset-0 grid">
//                                                     <span className="absolute inset-0 w-[120%] h-full bg-[#ff4d4d] origin-right block transition-all duration-300 ease-in-out translate-x-[-10%] translate-y-[100%] rotate-[-12deg] group-hover:translate-y-0 group-hover:rotate-0" />
//                                                     <span className="absolute inset-0 w-[120%] h-full bg-black origin-right block transition-all duration-300 ease-in-out translate-y-[100%] rotate-[-12deg] delay-75 group-hover:translate-y-0 group-hover:rotate-0" />
//                                                 </span>
//                                                 <span className="relative z-10 font-semibold text-[0.7rem] grid overflow-hidden">
//                                                     <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:-rotate-3" style={{ gridArea: "1 / 1" }}>{link.name}</span>
//                                                     <span className="block transition-all duration-300 ease-in-out translate-y-full rotate-3 group-hover:translate-y-0 group-hover:rotate-0 text-white" style={{ gridArea: "1 / 1" }}>{link.name}</span>
//                                                 </span>
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col md:flex-row md:items-start items-center gap-4">
//                                     <div className="flex items-center gap-4 my-6">
//                                         <span className="font-bold hidden md:block text-[1rem] selectionText">Follow us</span>
//                                         <div className="flex gap-1">
//                                             {socials.map((social, i) => (
//                                                 <Link key={i} href={social.href} target="_blank" className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-black hover:scale-115 transition-transform ">
//                                                     {social.icon}
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* 2nd */}
//                             <div>
//                                 <div className="flex flex-col gap-2 md:text-left text-center mb-2 md:mb-6">
//                                     <div>
//                                         <span className="font-bold hidden selectionText md:block text-[0.9rem] ">Contact</span>
//                                         <p className="text-[0.78rem] font-medium selectionText mb-1 md:mb-0">info@gethyped.nl</p>
//                                         <p className="text-[0.78rem] font-medium selectionText ">+31 6 1533 7496</p>
//                                     </div>
//                                     <div>
//                                         <span className=" hidden md:block selectionText text-[0.9rem] font-bold  ">Adres</span>
//                                         <p className="text-[0.78rem] font-medium  selectionText mb-1 md:mb-0">Beltrumsestraat 6,</p>
//                                         <p className="text-[0.78rem] font-medium selectionText ">7141 AL Groenlo</p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         {/* 3th */}
//                         <div className="flex  flex-col-reverse md:flex-row justify-between items-center  text-[0.7rem] text-gray-500  mb-4">
//                             <span className='selectionText'>© 2025 Get Hyped</span>
//                             <Link className='hover:text-[#ff4d4d]  my-1 md:my-0  selectionText' href="https://www.dylanbrouwer.design">Design by Dylan</Link>
//                             <span className='hover:text-[#ff4d4d]    selectionText'>Privacyvoorwaarden</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>