// import { Helmet } from 'react-helmet';
// import Image2 from '../assets/Image7.jpeg';
// import ImageBG from '../assets/Image8.jpeg';

// const comparisonData = [
//     { feature: 'Custom match with an expert for real-life academic and career advice', buddySystem: 'Yes', traditional: 'Yes' },
//     { feature: 'Parent Collaboration', buddySystem: 'Yes', traditional: 'No' },
//     { feature: 'Passion projects + skills for real-world readiness + Personal branding', buddySystem: 'Yes', traditional: 'No' },
//     { feature: 'Judgement free space to discuss personal issues', buddySystem: 'Yes', traditional: 'No' },
//     { feature: 'Focus on both academic goals and personal growth', buddySystem: 'Yes', traditional: 'No' },
//     { feature: 'Short term and long-term goal planning', buddySystem: 'Yes', traditional: 'No' },
//     { feature: 'Relatable Buddies', buddySystem: 'Yes', traditional: 'No' },
//     { feature: '1:1 Sessions', buddySystem: 'Yes', traditional: 'Yes' },
// ];

// function MeetUncertain() {

//     const pageTitle = "(un)certain: Mentorship Beyond Traditional Career Counselling";
//     const pageDescription = "Mentorship for students aged 11–18. Helping them grow academically, emotionally, and personally — with real guidance, one conversation at a time.";
//     const canonicalUrl = "https://uncertain.in";

//     return (
//         <> 
//             <Helmet>
//                 <title>{pageTitle}</title>
//                 <meta name="description" content={pageDescription} />
//                 <link rel="canonical" href={canonicalUrl} />

//                 <meta property="og:title" content={pageTitle} />
//                 <meta property="og:description" content={pageDescription} />
//                 <meta property="og:url" content={canonicalUrl} />
//                 <meta property="og:image" content={ImageBG} />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:site_name" content="(un)certain" />

//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:title" content={pageTitle} />
//                 <meta name="twitter:description" content={pageDescription} />
//                 <meta name="twitter:image" content={ImageBG} />
//             </Helmet>

//             <div className='h-full' >
//                 <div id='meetuncertain' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center" style={{ backgroundImage: `url(${ImageBG})` }}>
//                     <div className='lg:pl-16' >
//                         <h1 className='bg-white text-3xl md:text-5xl pb-1'>Meet <span className='text-[#DA2828]' >(un)</span>certain</h1>
//                     </div>
//                     <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16  text-white text-base md:text-lg space-y-8'>
//                         <h1>We are <span className='bg-black italic'>not</span> another career counseling company.</h1>
//                         <h2>
//                             <span className='text-[#DA2828] font-semibold bg-white p-1 pr-0' >(un)</span><span className='bg-white text-black font-semibold p-1 pl-0'>certain</span> is a mentorship-first community for students aged 11–18. Our mentors don’t just tell students what to do — they help them actually do it. From building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices — we’re there at every step, not just the big milestones.
//                         </h2>
//                         <h2>Because let’s be honest: students today aren’t just choosing subjects or colleges. They’re navigating pressure, distractions, and endless noise about what success should look like. That’s where we come in.</h2>
//                         <h2>We keep parents involved too — through progress updates, 1:1 check-ins, and workshops — because real guidance only works when students and parents grow together.</h2>
//                     </div>
//                 </div>

//                 <div id='ourapproach' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
//                     <div className='lg:pl-16' >
//                         <h1 className='bg-white text-3xl md:text-5xl pb-1'>Our Approach</h1>
//                     </div>
//                     <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16 text-base md:text-lg space-y-8'>
//                         <h1>At <span className='text-[#DA2828] font-semibold'>(un)</span><span className='font-semibold text-black'>certain</span>, we know students do not just need advice — they need someone who gets it. Someone who listens, keeps them accountable, and actually shows up.</h1>
//                         <h2>That is why we implemented the <span>Buddy System.</span></h2>
//                         <p>Each student is paired with a dedicated buddy — a relatable mentor who understands their world, speaks their language, and helps them navigate academics, tough decisions, emotional stress, and everything in between.</p>
//                         <p>It is simple:</p>
//                         <h1 className='font-bold text-black'>One student. One mentor. Real conversations. Real progress.</h1>
//                     </div>
//                 </div>

//                 <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center p-4 sm:p-8" style={{ backgroundImage: `url(${Image2})` }}>
//                     <div className="w-full max-w-6xl bg-white text-black p-6 sm:p-10 rounded-lg shadow-2xl">
//                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black/80 text-center mb-8">How are we different from traditional counselling?</h2>
//                         <div className="overflow-x-auto">
//                             <table className="w-full min-w-[700px] text-left border-collapse">
//                                 <thead>
//                                     <tr className="bg-[#8B0000] text-white">
//                                         <th className="p-4 text-lg font-semibold">What you get</th>
//                                         <th className="p-4 text-lg font-semibold text-center">(un)certain</th>
//                                         <th className="p-4 text-lg font-semibold text-center">Traditional Counselling</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         comparisonData.map((item, index) => (
//                                             <tr key={index} className="border-b border-gray-200 last:border-b-0">
//                                                 <td className="p-4">{item.feature}</td>
//                                                 <td className="p-4 text-center font-semibold">{item.buddySystem}</td>
//                                                 <td className="p-4 text-center font-semibold">{item.traditional}</td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MeetUncertain;




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

    const pageTitle = "(un)certain: Mentorship Beyond Traditional Career Counselling";
    const pageDescription = "Mentorship for students aged 11–18. Helping them grow academically, emotionally, and personally — with real guidance, one conversation at a time.";
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
                {/* <div id='meetuncertain' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center" style={{ backgroundImage: `url(${ImageBG})` }}> */}
                <div id='meetuncertain' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center" style={{ backgroundImage: `url(${ImageBG})` }}>
                    <div className='lg:pl-20' >
                        <h1 className='text-3xl md:text-5xl pb-1 text-white'>Origin</h1>
                    </div>
                    <div className='w-full lg:w-[65%] p-8 sm:p-12 md:p-14 lg:p-16  text-white text-base md:text-lg space-y-5'>
                        <h1>Three siblings. One small town. A lifetime of lessons.</h1>
                        <h1>We grew up in Chamba — a quiet, remote corner of Himachal Pradesh — where opportunity wasn’t easy to come by. Our parents, despite having limited formal education, understood its power. They made bold choices, sent us to boarding schools, and guided us through big decisions — often learning as we did.</h1>
                        <h1>Malika went first — carving her path through sheer determination, academic excellence, and grit. She became the first doctorate in our family — but often wonders how different things might’ve been with the right guidance at the right time.</h1>
                        <h1>Sagrika followed — and had the benefit of learning from Malika’s experience. Her path was more holistic — alongside academic growth, she explored sports, student leadership, global forums, and found her calling in psychology. She later earned her Master’s from King’s College, London.</h1>
                        <h1>Then came Rhythm — the youngest, and the best supported. Not because he had it easy, but because he had something powerful: mentors. That made all the difference — helping him build a global portfolio of academic work, public and private internships, community service projects, and ultimately secure a full scholarship to NYU Abu Dhabi with experiences across New York, London, and Prague.</h1>
                        <h2>And that’s when it clicked.</h2>
                        <h1>Most students don’t fall behind because they lack talent — they fall behind because they don’t have the right support at the right time.</h1>
                        <h1>And most parents? They care deeply, but often struggle to strike the right balance between stepping in and stepping back.</h1>
                        <h1>Through our journeys — in education, psychology, policy, and real-world experience — we’ve seen the same truth across every story:</h1>
                        <h1>Mentorship isn’t optional. It’s transformational.</h1>
                    </div>
                </div>

                <div id='ourapproach' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
                    <div className='lg:pl-20' >
                        <h1 className='bg-white text-3xl md:text-5xl pb-1'>Our Approach</h1>
                    </div>
                    <div className='w-full lg:w-[65%] p-8 sm:p-12 md:p-14 lg:p-16 text-base md:text-lg space-y-6'>
                        <h1>We are <span className='bg-black text-white p-0.5 italic' >not</span> another career counseling company.</h1>
                        <h1><span className='text-[#DA2828] font-semibold' >(un)</span><span className='font-semibold'>certain</span> is a mentorship-first community for students aged 11–18. Our mentors don’t just tell students what to do — they help them actually do it. From building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices — we’re there at every step, not just the big milestones.</h1>
                        <h1>Because let’s be honest: students today aren’t just choosing subjects or colleges. They’re navigating pressure, distractions, and endless noise about what success should look like. That’s where we come in. </h1>
                        <h1>Every student is paired with a dedicated Buddy — a relatable mentor who understands their world, speaks their language, and helps them navigate academics, tough decisions, emotional stress, and everything in between. </h1>
                        <h1>We keep parents involved too — through progress updates, 1:1 check-ins, and workshops — because real guidance only works when students and parents grow together. </h1>
                        <h1 className='text-black font-semibold' >One student. One mentor. Real conversations. Real progress.</h1>
                    </div>
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