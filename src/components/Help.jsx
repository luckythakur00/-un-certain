import { FaUserTie } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

const HelpCard = ({ icon, title, items, className }) => (
    <div className={`w-full p-8 md:p-10 lg:p-12 ${className}`}>
        <div className="mb-5" >{icon}</div>
        <h3 className='text-lg md:text-2xl text-black/90 mb-6 font-semibold'>{title}</h3>
        <ul className='text-base list-disc pl-5 space-y-3 text-black/70'>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

function Help() {
    const section1 = {
        left: {
            icon: <HiOutlineAcademicCap size={40} />,
            title: 'Academic Support Without Pressure',
            items: ['Help choosing the right subjects and learning methods', 'Study strategies, exam planning & time management', 'Guidance for non-traditional paths like research, humanities, and creative fields']
        },
        right: {
            icon: <MdOutlineWorkspacePremium size={40} />,
            title: 'Passion & Portfolio Development',
            items: ['Build meaningful passion projects outside the classroom', 'Develop a strong online/offline personal brand', 'Mentorship from professionals to guide competitive edge-building (Olympiads, summits, etc.)']
        }
    };

    const section2 = [
        { icon: <FaHandHoldingHeart size={40} />, title: 'The Safe Space', items: ['Build emotional resilience through guided conversations', 'Speak openly about bullying, stress, relationships, and self-esteem', 'Receive support from trained mentors and psychologists (if need be)'] },
        { icon: <FaGlobeAmericas size={40} />, title: 'Extracurricular Exploration', items: ['Discover the right extracurriculars – sports, MUNs, arts, etc.', 'Get matched with achievers in your area of interest', 'Strategic support for competitions and international exposure'] },
        { icon: <FaUserTie size={40} />, title: 'Real-World Readiness', items: ['Learn leadership, communication, and public speaking', 'Master decision-making, adaptability & social confidence', 'Build networking skills for future success'] },
        { icon: <RiTeamLine size={40} />, title: 'The Changemakers Club', items: ['Participate in real-world projects that develop leadership and empathy', 'Learn social responsibility through hands-on service', 'Turn ideas into action and become confident young changemakers'] }
    ];

    return (
        <div id='howwehelp'>
            <div className='flex flex-col lg:flex-row border-b-2 border-b-black/10'>
                <HelpCard {...section1.left} className="lg:w-1/3 border-b-2 lg:border-b-0 lg:border-r-2 border-black/10" />
                <div className='w-full lg:w-1/3 flex justify-center items-center py-16 lg:py-0 order-first lg:order-none'>
                    <h1 className='text-4xl md:text-5xl font-bold text-center text-black/80'>How we help?</h1>
                </div>
                <HelpCard {...section1.right} className="lg:w-1/3 border-t-2 lg:border-t-0 lg:border-l-2 border-black/10" />
            </div>

            <div className='flex flex-col lg:flex-row'>
                {
                    section2.map((card, index) => (
                        <HelpCard key={index} {...card} className="lg:w-1/4 border-b-2 lg:border-b-0 lg:border-r-2 border-black/10 last:border-b-0 lg:last:border-r-0" />
                    ))
                }
            </div>
        </div>
    );
}

export default Help;