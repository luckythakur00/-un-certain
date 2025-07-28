import { Helmet } from 'react-helmet';
import Image2 from '../assets/Image7.jpeg';
import ImageBG from '../assets/Image8.jpeg';

const comparisonData = [
    { feature: 'Custom match with an expert for real-life academic and career advice', buddySystem: 'Yes', traditional: 'Yes' },
    { feature: 'Parent Collaboration', buddySystem: 'Yes', traditional: 'No' },
    { feature: 'Passion projects + skills for real-world readiness + Personal branding', buddySystem: 'Yes', traditional: 'No' },
    { feature: 'Judgement free space to discuss personal issues', buddySystem: 'Yes', traditional: 'No' },
    { feature: 'Focus on both academic goals and personal growth', buddySystem: 'Yes', traditional: 'No' },
    { feature: 'Short term and long-term goal planning', buddySystem: 'Yes', traditional: 'No' },
    { feature: 'Relatable Buddies', buddySystem: 'Yes', traditional: 'No' },
    { feature: '1:1 Sessions', buddySystem: 'Yes', traditional: 'Yes' },
];

function MeetUncertain() {

    const pageTitle = "(un)certain – India’s First Student Mentorship Community (Ages 11–18)";
    const pageDescription = "(un)certain is a mentorship-first community that guides students aged 11–18 through academics, extracurriculars, and portfolio-building. Weekly 1:1 sessions, real exposure, and support that actually works.";
    const canonicalUrl = "https://uncertain.in";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ImageBG} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="(un)certain" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ImageBG} />
            </Helmet>

            <div className='h-full' >
                <div className='min-h-[80vh]' >
                    <div id='meetuncertain' className='h-16 md:h-24 w-full bg-[#8B0000]'></div>
                    <div className="h-full w-full bg-cover bg-center md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
                        <div className='h-20 w-full lg:w-[50%] flex justify-center items-center ' >
                            <h1 className='bg-white text-3xl md:text-4xl lg:text-5xl font-semibold'>Meet <span className='text-[#DA2828]' >(un)</span>certain</h1>
                        </div>
                        <div className='min-h-[70vh] w-full lg:w-[50%] p-8 sm:p-12 md:p-14 lg:p-16 text-base md:text-lg space-y-8 bg-[#8B0000] text-white'>
                            <h1>We are <span className='bg-black italic p-0.5'>not</span> another career counseling company.</h1>
                            <h2>We are a mentorship-first community for students aged 11–18. Every student is paired with a dedicated Buddy — a relatable mentor who helps from building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices.</h2>
                            <h2>We keep parents involved too — through progress updates, 1:1 check-ins, and workshops — because real guidance only works when students and parents grow together.</h2>
                            <h2 className='text-white text-lg font-semibold'>One student. One mentor. Real conversations. Real progress.</h2>
                        </div>
                    </div>
                    <div id='meetuncertain' className='h-16 md:h-24 w-full hidden lg:block bg-[#8B0000]'></div>
                </div>

                <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center p-4 sm:p-8" style={{ backgroundImage: `url(${Image2})` }}>
                    <div className="w-full max-w-6xl bg-white text-black p-6 sm:p-10 rounded-lg shadow-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black/80 text-center mb-8">How are we different from traditional counselling?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#8B0000] text-white">
                                        <th className="p-4 text-lg font-semibold">What you get</th>
                                        <th className="p-4 text-lg font-semibold text-center">(un)certain</th>
                                        <th className="p-4 text-lg font-semibold text-center">Traditional Counselling</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        comparisonData.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                                <td className="p-4">{item.feature}</td>
                                                <td className="p-4 text-center font-semibold">{item.buddySystem}</td>
                                                <td className="p-4 text-center font-semibold">{item.traditional}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetUncertain;