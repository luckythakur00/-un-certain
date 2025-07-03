const AcademicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mb-8 text-black/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0l7.741 4.337m-7.741-4.337l7.741 4.337m0 0l7.741-4.337m-7.741 4.337V3.493" />
    </svg>
);

const PassionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mb-8 text-black/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13l.648 1.938a3.375 3.375 0 002.456 2.456L21.75 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

const HelpCard = ({ icon, title, items, className }) => (
    <div className={`w-full p-8 md:p-10 lg:p-12 ${className}`}>
        {icon}
        <h3 className='text-lg md:text-2xl text-black/90 mb-6 font-semibold'>{title}</h3>
        <ul className='text-base list-disc pl-5 space-y-3 text-black/70'>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

function Help() {
    const section1 = {
        left: {
            icon: <AcademicIcon />,
            title: 'Academic Support Without Pressure',
            items: ['Help choosing the right subjects and learning methods', 'Study strategies, exam planning & time management', 'Guidance for non-traditional paths like research, humanities, and creative fields']
        },
        right: {
            icon: <PassionIcon />,
            title: 'Passion & Portfolio Development',
            items: ['Build meaningful passion projects outside the classroom', 'Develop a strong online/offline personal brand', 'Mentorship from professionals to guide competitive edge-building (Olympiads, summits, etc.)']
        }
    };

    const section2 = [
        { icon: <AcademicIcon />, title: 'The Safe Space', items: ['Build emotional resilience through guided conversations', 'Speak openly about bullying, anxiety, relationships, and self-esteem', 'Receive support from trained mentors and psychologists'] },
        { icon: <PassionIcon />, title: 'Extracurricular Exploration', items: ['Discover the right extracurriculars – sports, MUNs, arts, etc.', 'Get matched with achievers in your area of interest', 'Strategic support for competitions and international exposure'] },
        { icon: <AcademicIcon />, title: 'Real-World Readiness', items: ['Learn leadership, communication, and public speaking', 'Master decision-making, adaptability & social confidence', 'Build networking skills for future success'] },
        { icon: <PassionIcon />, title: 'The Changemakers Club', items: ['Participate in real-world projects that develop leadership and empathy', 'Learn social responsibility through hands-on service', 'Turn ideas into action and become confident young changemakers'] }
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