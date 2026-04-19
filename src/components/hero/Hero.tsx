"use client";
import React from "react";
import { gsap } from "gsap";

const cards = [
    { id: 1, type: "text", title: "10M+", subtitle: "Organische views", description: "Groei door slimme content", bgColor: "bg-[#0085ff]", initialRotate: -8 },
    { id: 2, type: "video", videoUrl: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4", initialRotate: 4 },
    { id: 3, type: "text", title: "30+", subtitle: "Merken geholpen", description: "Van start-up tot multinational", bgColor: "bg-[#2ec48a]", initialRotate: -4 },
    { id: 4, type: "video", videoUrl: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4", initialRotate: 6 },
];

const Hero = () => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const randomRotation = (Math.random() - 0.5) * 20;
        gsap.to(e.currentTarget, {
            rotate: randomRotation,
            scale: 1.15,
            y: -15,
            zIndex: 50,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const randomExitRotation = (Math.random() - 0.5) * 12;
        gsap.to(e.currentTarget, {
            rotate: randomExitRotation,
            scale: 1,
            y: 0,
            x: 10,
            zIndex: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <section className="bg-[#FAF4EC] min-h-screen pt-30 px-6 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-14 text-left">
                <h1 className="text-[3.5rem] md:text-[4.8rem] font-bold leading-[1.1] mb-8">
                    <span className="selection:bg-black selection:text-white">Get Hyped. Get</span> <br />
                    <span className="selection:bg-black selection:text-white">Noticed. Get Results.</span>
                </h1>
                <p className="text-xl font-bold max-w-sm leading-relaxed">
                    <span className="selection:bg-black selection:text-white">
                        Klaar met gokken op content die niets oplevert?
                    </span>
                </p>
            </div>

            {/* Cards Grid Container  */}
            <div className="max-w-7xl   mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
                {cards.slice(0, 4).map((card, index) => (
                    <div key={card.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ transform: `rotate(${card.initialRotate}deg)` }}
                        className={`relative aspect-[3/4.2]  rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden 
                        ${card.type === "text" ? card.bgColor : "bg-black"}
                        ${index >= 2 ? "hidden lg:block" : "block"} 
                    `}
                    >
                        {card.type === "text" ? (
                            <div className="p-4 sm:p-10 h-full flex flex-col justify-between text-black relative z-10">
                                <h2 className="text-3xl sm:text-6xl font-black italic tracking-tighter">
                                    <span className="selection:bg-black selection:text-white leading-tight inline-block">
                                        {card.title}
                                    </span>
                                </h2>
                                <div className="space-y-1 sm:space-y-3">
                                    <h3 className="text-xs sm:text-xl font-bold border-b border-black pb-1 sm:pb-2">
                                        <span className="selection:bg-black selection:text-white leading-normal inline-block">
                                            {card.subtitle}
                                        </span>
                                    </h3>
                                    <p className="text-[10px] sm:text-sm font-semibold opacity-90">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" >
                                <source src={card.videoUrl} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Text */}
            <div className="max-w-7xl mx-auto mt-20 md:mt-32 md:pl-20">
                <div className="w-full md:w-[75%]">
                    <p className="text-3xl md:text-5xl font-bold leading-[1.3]">
                        <span className="selection:bg-black selection:text-white">
                            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;