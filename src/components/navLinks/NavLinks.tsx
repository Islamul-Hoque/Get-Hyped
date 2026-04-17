import { Link } from 'lucide-react';
import React from 'react';

const navLinks = [
    { name: "Expertises", href: "/expertises" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const NavLinks = () => {
    return (
        <div className="hidden md:flex gap-4 px-1.5 py-1  ">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="relative group px-4 py-1.5 overflow-hidden rounded-[0.7rem] block">
                    <span className="absolute inset-0 bg-white rounded-[0.7rem] overflow-hidden grid">
                        <span className="absolute inset-0 w-[120%] h-full bg-[#ff4d4d] origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-10%] translate-y-[100%] rotate-[-12deg] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 1 }} />
                        <span className="absolute inset-0 w-[120%] h-full bg-black origin-right block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[100%] rotate-[-12deg] delay-[50ms] group-hover:translate-y-0 group-hover:rotate-0" style={{ zIndex: 2 }} />
                    </span>
                    <span className="relative z-10 font-medium text-sm grid overflow-hidden">
                        <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-120%] group-hover:rotate-[-5deg] opacity-100 group-hover:opacity-0" style={{ gridArea: "1 / 1", transformOrigin: "0 0" }}>{link.name}</span>
                        <span className="block transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[120%] rotate-[5deg] group-hover:translate-y-0 group-hover:rotate-0 text-white opacity-0 group-hover:opacity-100" style={{ gridArea: "1 / 1", transformOrigin: "0 0" }}>{link.name}</span>
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;