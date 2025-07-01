import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Meet (un)certain', href: '#meetuncertain' },
        { title: 'Our Approach', href: '#ourapproach' },
        { title: 'How We Help?', href: '#howwehelp' },
        { title: 'Find Your Fit', href: '#findyourfit' },
        { title: 'Our Founders', href: '#ourfounders' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all bg-white duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
            <nav className="container mx-auto  flex justify-between px-8 items-center">
                <a href="#home">
                    <img src={logo} alt="Uncertain Logo" className="h-12 w-auto transition-all duration-300" />
                </a>
                <div className="hidden lg:flex items-center space-x-8">
                    {
                        navLinks.map((link) => (
                            <a key={link.title} href={link.href} className="font-medium text-gray-600 hover:text-red-700 relative transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full">{link.title}</a>
                        ))
                    }
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none p-2" aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</button>
                </div>
            </nav>

            <div className={`lg:hidden block absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="px-6 pt-4 pb-6 flex flex-col space-y-2">
                    {
                        navLinks.map((link) => (
                            <a key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-center text-lg text-gray-700 hover:text-red-700 hover:bg-gray-50 block py-3 rounded-md font-medium transition-colors">{link.title}</a>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;