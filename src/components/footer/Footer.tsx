"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FooterBadge from "./footerBadge/FooterBadge";
import Logo2 from '../logo/Logo2';
import RightContent from './RightContent';
import CTAButton from "./CTAButton";

interface FloatingImage {
    id: number;
    src: string;
    x: number;
    y: number;
    rotation: number;
    targetX: number;
    targetY: number;
}

const images: string[] = [
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
    "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
];

const HeroPart: React.FC = () => {

    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [-120, -20]);


    const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
    const lastMousePos = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const dx = clientX - lastMousePos.current.x;
        const dy = clientY - lastMousePos.current.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 300) {
            const id = Date.now();
            const xOffset = 180;
            const yOffset = 60;

            const newImg: FloatingImage = {
                id,
                src: images[Math.floor(Math.random() * images.length)],
                x: clientX,
                y: clientY,
                rotation: Math.random() * 30 - 15,
                targetX: clientX + (dx > 0 ? xOffset : -xOffset),
                targetY: clientY + (dy > 0 ? yOffset : -yOffset),
            };

            setFloatingImages((prev) => [...prev.slice(-6), newImg]);
            lastMousePos.current = { x: clientX, y: clientY };

            setTimeout(() => {
                setFloatingImages((prev) => prev.filter((img) => img.id !== id));
            }, 1500);
        }
    };

    return (
        <div className="relative flex flex-col  w-full bg-[#FAF4EC] overflow-hidden">
            <div>
                <div onMouseMove={handleMouseMove} className="relative  w-full flex flex-col items-center justify-center select-none border-b-2 border-black overflow-hidden" >
                    {/* Part-1: Hero Section */}
                    <div className="hidden md:flex flex-col  pt-30 mt-20  items-center z-10">
                        <h1 className="text-[4.5rem] mb-8 font-bold text-[#1A1A1A] leading-tight pointer-events-none">   Let’s Get Hyped!  </h1>
                        <CTAButton />
                        {/* Images Animation */}
                        <AnimatePresence>
                            {floatingImages.map((img) => (
                                <motion.div key={img.id}
                                    initial={{ opacity: 0, scale: 0.2, left: img.x, top: img.y, rotate: img.rotation - 10, x: "-50%", y: "-50%" }}
                                    animate={{ opacity: 1, scale: 1, left: img.targetX, top: img.targetY, rotate: img.rotation, transition: { left: { type: "spring", stiffness: 35, damping: 12 }, top: { type: "spring", stiffness: 35, damping: 12 }, opacity: { duration: 0.6 } } }}
                                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.4, delay: 0.5 } }}
                                    style={{ position: "absolute", pointerEvents: "none", zIndex: 50 }}
                                >
                                    <div className="relative w-64 h-32">
                                        <Image src={img.src} alt="Brand Logo" fill className="object-contain drop-shadow-2xl" sizes="256px" priority />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Part-2: Absolute svg Footer Section */}
                    <div className="relative  w-full">
                        {/* Large screen Background SVG  */}
                        <div className="absolute px-4  inset-0 w-full h-full pointer-events-none z-10">
                            <svg viewBox="0 0 1860 386" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full hidden md:block object-cover" preserveAspectRatio="none" >
                                <path fill="#EAE4D8" d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184" />
                            </svg>

                            {/* Small Screen svg */}
                            <svg viewBox="0 0 1860 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full md:hidden block" preserveAspectRatio="none" >
                                <path fill="#EAE4D8"  d=" M 0 100  A 30 30 0 0 1 30 70  L 1830 20   A 30 30 0 0 1 1860 50  V 500  H 0  Z  " />
                            </svg>
                        </div>

                        {/* Footer Badge */}
                        <motion.div className="absolute hidden md:block top-0 right-[11%] -translate-y-1/2 z-30" initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} style={{ rotate }}  >
                            <FooterBadge />
                        </motion.div>

                        {/* Main Content */}
                        <div className="relative md:pt-18 z-10 ">
                            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-8 px-6">
                                {/* Left Content */}
                                <div className="w-full md:w-[16rem] flex justify-center md:justify-start items-center md:items-end pt-8 md:pt-0">
                                    <Logo2 />
                                </div>

                                {/* Right Content */}
                                <RightContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPart;