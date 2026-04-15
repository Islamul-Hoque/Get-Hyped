'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CardProps {
    id: string;
    title: string;
    subTitle: string;
    desc: string;
    video: string;
    href: string;
    bg: string;
    color: string;
    badgeBg: string;
    borderColor: string;
    btnBg: string;
    btnText: string;
    i: number;
}

const cards: Omit<CardProps, 'i'>[] = [
    {
        id: '01', title: 'Social strategy', subTitle: 'Slimme strategie. Sterke start.',
        desc: 'We duiken diep in jouw merk, doelgroup en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
        video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
        href: '/expertises/social-strategie',
        bg: '#FFFFFF', color: 'black', badgeBg: '#EAE4D8', borderColor: '#FA5424', btnBg: '#FA5424', btnText: 'white'
    },
    {
        id: '02', title: 'Content creation', subTitle: 'Content die opvalt en raakt.',
        desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
        video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
        href: '/expertises/content-creatie',
        bg: '#FCB8FA', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
    {
        id: '03', title: 'Activation', subTitle: 'Zichtbaar waar en wanneer het telt.',
        desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
        video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
        href: '/expertises/activatie',
        bg: '#33C791', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
    {
        id: '04', title: 'Data', subTitle: 'Inzichten die impact maken.',
        desc: 'We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.',
        video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
        href: '/expertises/data',
        bg: '#0D8DFF', color: 'white', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black'
    },
]

export default function ExpertiseStack() {
    return (
        <section className="bg-[#FAF4EC] py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-y-20">
                {cards.map((card, i) => (<Card key={card.id} {...card} i={i} />))}
            </div>
        </section>
    )
}

function Card({ id, title, subTitle, desc, video, href, bg, color, badgeBg, borderColor, btnBg, btnText, i }: CardProps) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -2 : 2])


    return (
        <div ref={container} className="flex items-center justify-center sticky top-10">
            <motion.div style={{ scale, rotate, backgroundColor: bg, color: color }} 
            className="relative w-full rounded-[2.5rem] p-8 md:p-12  flex flex-col gap-6 shadow-xl border border-black/5  overflow-hidden"
            >
                {/* Top Row */}
                <div className="flex justify-between items-start w-full ">
                    <Link href={href}>
                        <span style={{ backgroundColor: badgeBg }} className="px-4 py-1.5 rounded-[0.7rem] font-medium text-black cursor-pointer "> Expertise </span>
                    </Link>
                    <span className="text-[5.5rem] font-bold opacity-10 leading-[0.5] select-none mr-4 text-current"> {id} </span>
                </div>

                {/* Bottom Part */}
                <div className="flex justify-between items- end flex-1 selection:bg-[#000000] selection:text-white">

                    <div className="flex flex-col justify-between py-2">
                        <Link href={href}>
                            <h2 className="text-3xl md:text-[5.2rem] -mt-8 font-semibold tracking-tighter leading-[0.9] cursor-pointer select-none hover:opacity-90 transition-opacity"> {title} </h2>
                        </Link>

                        <div className="flex flex-col gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">{subTitle}</h3>
                                <p className="md:w-[50%] text-[1.2rem] leading-[1.2] font-semibold  "> {desc} </p>
                            </div>

                            {/* Button Link */}
                            <Link href={href}>
                                <motion.button style={{ backgroundColor: btnBg, color: btnText }} className="w-fit relative group flex items-center gap-3 pl-6 pr-1.5 py-1.5 border border-black/10 rounded-2xl font-semibold text-base cursor-pointer overflow-hidden shadow-sm" whileHover="hover"
                                    variants={{
                                        hover: { rotate: -4, transition: { type: "spring", stiffness: 300, damping: 12 } }
                                    }}
                                >
                                    <span className="z-10">Meer over {title.toLowerCase()}</span>
                                    <motion.div className="bg-black text-white rounded-xl p-2 flex items-center justify-center z-10" variants={{ hover: { rotate: -10, scale: 1.1 } }}   >
                                        <ArrowRight size={18} strokeWidth={3} />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Video Link */}
                    <Link href={href} className="block">
                        <motion.div
                            style={{ borderColor: borderColor }}
                            className="w-full md:max-w-[20rem] md:aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] relative z-10 bg-black/5 origin-top-left cursor-pointer"
                            initial={{ rotate: 4 }}
                            whileHover={{ rotate: 4, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                <source src={video} type="video/mp4" />
                            </video>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}


