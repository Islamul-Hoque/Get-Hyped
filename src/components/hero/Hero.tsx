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
           ss
        </section>
    );
};

export default Hero;