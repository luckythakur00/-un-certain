import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';
import { Helmet } from 'react-helmet';

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
        // { title: 'Meet (un)certain', href: '#meetuncertain' },
        { title: 'Origin', href: '#meetuncertain' },
        { title: 'Our Approach', href: '#ourapproach' },
        { title: 'How We Help?', href: '#howwehelp' },
        { title: 'Find Your Fit', href: '#findyourfit' },
        { title: 'Our Founders', href: '#ourfounders' },
        { title: 'Contact', href: '#contact' },
    ];

    // return (
    //     <header className={`w-full fixed top-0 left-0 z-50 transition-all bg-white duration-300 ${scrolled ? 'shadow-md py-2' : 'py-2 md:py-4'}`}>
    //         <nav className=" flex justify-between px-6 sm:px-10 lg:px-14 items-center">
    //             <a href="#home">
    //                 <img src={logo} alt="Uncertain Logo" className="h-8 sm:h-9 md:h-12 w-40 md:w-auto transition-all duration-300" />
    //             </a>
    //             <div className="hidden lg:flex items-center space-x-8">
    //                 {
    //                     navLinks.map((link) => (
    //                         <a key={link.title} href={link.href} className="font-medium text-gray-600 hover:text-[#8B0000] relative transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 hover:after:w-full">{link.title}</a>
    //                     ))
    //                 }
    //             </div>

    //             <div className="lg:hidden">
    //                 <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none p-2" aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen ? <FaTimes size={24} /> : <FaBars className={`size-6 md:size-7`} />}</button>
    //             </div>
    //         </nav>

    //         <div className={`lg:hidden block absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
    //             <div className="px-6 pt-4 pb-6 flex flex-col space-y-2">
    //                 {
    //                     navLinks.map((link) => (
    //                         <a key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-center text-lg text-gray-700 hover:text-red-700 hover:bg-gray-50 block py-3 rounded-md font-medium transition-colors">{link.title}</a>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     </header>
    // );
    return (
        <>
            <Helmet>
                <title>Uncertain.in – Official Site</title>
                <meta
                    name="description"
                    content="Uncertain.in provides mentorship to help students understand their strengths and options."
                />
            </Helmet>

            <header className={`w-full fixed top-0 left-0 z-50 transition-all bg-white duration-300 ${scrolled ? 'shadow-md py-2' : 'py-2 md:py-4'}`}>
                <nav className=" flex justify-between px-6 sm:px-10 lg:px-14 items-center">
                    <a href="#home">
                        <img src={logo} alt="Uncertain Logo" className="h-8 sm:h-9 md:h-12 w-40 md:w-auto transition-all duration-300" />
                    </a>
                    <div className="hidden lg:flex items-center space-x-8">
                        {
                            navLinks.map((link) => (
                                <a key={link.title} href={link.href} className="font-medium text-gray-600 hover:text-[#8B0000] relative transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#8B0000] after:transition-all after:duration-300 hover:after:w-full">{link.title}</a>
                            ))
                        }
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none p-2" aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen ? <FaTimes size={24} /> : <FaBars className={`size-6 md:size-7`} />}</button>
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
        </>
    )
};

export default Header;