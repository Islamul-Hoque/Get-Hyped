"use client";
import { gsap } from "gsap";

const cards = [
    {
        id: 1,
        type: "text",
        title: "10M+",
        subtitle: "Organische views",
        description: "Groei door slimme content",
        bgColor: "bg-[#0085ff]",
        initialRotate: -8,
    },
    {
        id: 2,
        type: "video",
        videoUrl: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
        initialRotate: 4,
    },
    {
        id: 3,
        type: "text",
        title: "30+",
        subtitle: "Merken geholpen",
        description: "Van start-up tot multinational",
        bgColor: "bg-[#2ec48a]",
        initialRotate: -4,
    },
    {
        id: 4,
        type: "video",
        videoUrl: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
        initialRotate: 6,
    },
];

const Hero = () => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const randomRotation = (Math.random() - 0.5) * 24;

        gsap.to(e.currentTarget, {
            rotate: randomRotation,
            scale: 1.1,
            y: -15,
            zIndex: 10,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {

        const randomExitRotation = (Math.random() - 0.5) * 16;

        gsap.to(e.currentTarget, {
            rotate: randomExitRotation,
            scale: 1,
            y: 0,
            zIndex: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <section className="bg-[#FAF4EC] min-h-screen py-30 px-6 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-20 text-left leading-none">
                <div className="text-[3.5rem] md:text-[4.8rem]  font-bold  ">
                    <span className="selection:bg-black selection:text-white inline-block">Get Hyped. Get</span> <br />
                    <span className="selection:bg-black selection:text-white inline-block">Noticed. Get Results.</span>
                </div>
                <p className="mt-8 text-xl font-bold max-w-sm leading-relaxed">
                    <span className="selection:bg-black selection:text-white">
                        Klaar met gokken op content <br /> die niets oplevert?
                    </span>
                </p>
            </div>

            {/* Cards Grid Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
                {cards.map((card) => (
                    <div key={card.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ transform: `rotate(${card.initialRotate}deg)` }}
                        className={`relative aspect-[3/4.2] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer ${card.type === "text" ? card.bgColor : "bg-black"
                            }`}
                    >
                        {card.type === "text" ? (
                            <div className="p-10 h-full flex flex-col justify-between text-white select-none">
                                <h2 className="text-6xl font-black italic tracking-tighter">
                                    <span className="selection:bg-black selection:text-white">{card.title}</span>
                                </h2>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold border-b border-black/10 pb-2">
                                        <span className="selection:bg-black selection:text-white">{card.subtitle}</span>
                                    </h3>
                                    <p className="text-sm font-semibold">
                                        <span className="selection:bg-black selection:text-white">{card.description}</span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <video src={card.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
                        )}
                    </div>
                ))}
            </div>

            {/* Text */}
            <div className="max-w-7xl mx-auto mt-32 md:pl-20">
                <div className="w-full md:w-[75%]">
                    <p className="text-3xl md:text-5xl font-bold ">
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