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

//     return (
//         <div className='h-full' >
//             <div id='meetuncertain' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center" style={{ backgroundImage: `url(${ImageBG})` }}>
//                 <div className='lg:pl-16' >
//                     <h1 className='bg-white text-3xl md:text-5xl pb-1'>Meet <span className='text-[#DA2828]' >(un)</span>certain</h1>
//                 </div>
//                 <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16  text-white text-base md:text-lg space-y-8'>
//                     <h1>We are <span className='bg-black italic'>not</span> another career counseling company.</h1>
//                     <h2>
//                         <span className='text-[#DA2828] font-semibold bg-white p-1 pr-0' >(un)</span><span className='bg-white text-black font-semibold p-1 pl-0'>certain</span> is a mentorship-first community for students aged 11–18. Our mentors don’t just tell students what to do — they help them actually do it. From building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices — we’re there at every step, not just the big milestones.
//                     </h2>
//                     <h2>Because let’s be honest: students today aren’t just choosing subjects or colleges. They’re navigating pressure, distractions, and endless noise about what success should look like. That’s where we come in.</h2>
//                     <h2>We keep parents involved too — through progress updates, 1:1 check-ins, and workshops — because real guidance only works when students and parents grow together.</h2>
//                 </div>
//             </div>

//             <div id='ourapproach' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
//                 <div className='lg:pl-16' >
//                     <h1 className='bg-white text-3xl md:text-5xl pb-1'>Our Approach</h1>
//                 </div>
//                 <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16 text-base md:text-lg space-y-8'>
//                     <h1>At <span className='text-[#DA2828] font-semibold'>(un)</span><span className='font-semibold text-black'>certain</span>, we know students do not just need advice — they need someone who gets it. Someone who listens, keeps them accountable, and actually shows up.</h1>
//                     <h2>That is why we implemented the <span>Buddy System.</span></h2>
//                     <p>Each student is paired with a dedicated buddy — a relatable mentor who understands their world, speaks their language, and helps them navigate academics, tough decisions, emotional stress, and everything in between.</p>
//                     <p>It is simple:</p>
//                     <h1 className='font-bold text-black'>One student. One mentor. Real conversations. Real progress.</h1>
//                 </div>
//             </div>

//             <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center p-4 sm:p-8" style={{ backgroundImage: `url(${Image2})` }}>
//                 <div className="w-full max-w-6xl bg-white text-black p-6 sm:p-10 rounded-lg shadow-2xl">
//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black/80 text-center mb-8">How are we different from traditional counselling?</h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full min-w-[700px] text-left border-collapse">
//                             <thead>
//                                 <tr className="bg-[#8B0000] text-white">
//                                     <th className="p-4 text-lg font-semibold">What you get</th>
//                                     <th className="p-4 text-lg font-semibold text-center">(un)certain</th>
//                                     <th className="p-4 text-lg font-semibold text-center">Traditional Counselling</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     comparisonData.map((item, index) => (
//                                         <tr key={index} className="border-b border-gray-200 last:border-b-0">
//                                             <td className="p-4">{item.feature}</td>
//                                             <td className="p-4 text-center font-semibold">{item.buddySystem}</td>
//                                             <td className="p-4 text-center font-semibold">{item.traditional}</td>
//                                         </tr>
//                                     ))
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
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

    // Step 2: Define your SEO metadata
    const pageTitle = "(un)certain: Mentorship Beyond Traditional Career Counselling";
    const pageDescription = "Meet (un)certain, a mentorship-first community for students. We use a buddy system for real-world readiness, personal growth, and academic success. See how we compare to traditional counselling.";
    const canonicalUrl = "https://uncertain.in/meet-uncertain"; // IMPORTANT: Use your actual domain and page path

    return (
        // The root element is now a Fragment <> to accommodate Helmet
        <> 
            {/* --- SEO Head Management --- */}
            {/* Step 3: Add the Helmet component with all the necessary tags */}
            <Helmet>
                {/* --- Primary SEO Tags --- */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* --- Open Graph / Facebook / LinkedIn Tags (for social sharing) --- */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ImageBG} /> {/* Use a full, absolute URL to your image for best results */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="(un)certain" />

                {/* --- Twitter Card Tags (for Twitter sharing) --- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ImageBG} /> {/* Use a full, absolute URL */}
            </Helmet>

            {/* --- Your Original UI (Unchanged) --- */}
            <div className='h-full' >
                <div id='meetuncertain' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center" style={{ backgroundImage: `url(${ImageBG})` }}>
                    <div className='lg:pl-16' >
                        <h1 className='bg-white text-3xl md:text-5xl pb-1'>Meet <span className='text-[#DA2828]' >(un)</span>certain</h1>
                    </div>
                    <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16  text-white text-base md:text-lg space-y-8'>
                        <h1>We are <span className='bg-black italic'>not</span> another career counseling company.</h1>
                        <h2>
                            <span className='text-[#DA2828] font-semibold bg-white p-1 pr-0' >(un)</span><span className='bg-white text-black font-semibold p-1 pl-0'>certain</span> is a mentorship-first community for students aged 11–18. Our mentors don’t just tell students what to do — they help them actually do it. From building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices — we’re there at every step, not just the big milestones.
                        </h2>
                        <h2>Because let’s be honest: students today aren’t just choosing subjects or colleges. They’re navigating pressure, distractions, and endless noise about what success should look like. That’s where we come in.</h2>
                        <h2>We keep parents involved too — through progress updates, 1:1 check-ins, and workshops — because real guidance only works when students and parents grow together.</h2>
                    </div>
                </div>
                
                <div id='ourapproach' className="w-full bg-cover bg-center pt-8 md:pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
                    <div className='lg:pl-16' >
                        <h1 className='bg-white text-3xl md:text-5xl pb-1'>Our Approach</h1>
                    </div>
                    <div className='w-full lg:w-[60%] p-8 sm:p-12 md:p-14 lg:p-16 text-base md:text-lg space-y-8'>
                        <h1>At <span className='text-[#DA2828] font-semibold'>(un)</span><span className='font-semibold text-black'>certain</span>, we know students do not just need advice — they need someone who gets it. Someone who listens, keeps them accountable, and actually shows up.</h1>
                        <h2>That is why we implemented the <span>Buddy System.</span></h2>
                        <p>Each student is paired with a dedicated buddy — a relatable mentor who understands their world, speaks their language, and helps them navigate academics, tough decisions, emotional stress, and everything in between.</p>
                        <p>It is simple:</p>
                        <h1 className='font-bold text-black'>One student. One mentor. Real conversations. Real progress.</h1>
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




// // import { Helmet } from 'react-helmet-async';
// import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// // Import your images
// import Image2 from '../assets/Image7.jpeg';
// import ImageBG from '../assets/Image8.jpeg';
// import { Helmet } from 'react-helmet';

// // Data can be kept here or moved to a separate file
// const comparisonData = [
//     { feature: 'Custom match with an expert for real-life academic and career advice', buddySystem: true, traditional: true },
//     { feature: 'Parent Collaboration & Progress Tracking', buddySystem: true, traditional: false },
//     { feature: 'Passion projects, skill-building for real-world readiness & personal branding', buddySystem: true, traditional: false },
//     { feature: 'Judgement-free space to discuss personal challenges', buddySystem: true, traditional: false },
//     { feature: 'Holistic focus on both academic goals and personal growth', buddySystem: true, traditional: false },
//     { feature: 'Structured short-term and long-term goal planning', buddySystem: true, traditional: false },
//     { feature: 'Relatable Mentors (Buddies) who understand the student\'s world', buddySystem: true, traditional: false },
//     { feature: 'Flexible 1:1 Sessions', buddySystem: true, traditional: true },
// ];

// // Reusable Icon components for the comparison table
// const CheckIcon = () => <FaCheckCircle className="mx-auto text-green-500" size={24} />;
// const CrossIcon = () => <FaTimesCircle className="mx-auto text-red-400" size={24} />;

// function MeetUncertain() {
//     // Define your SEO metadata
//     const pageTitle = "(un)certain: Modern Mentorship for Students | Beyond Career Counselling";
//     const pageDescription = "Meet (un)certain, a mentorship-first community for students aged 11-18. We go beyond traditional counselling with a buddy system that supports academic, personal, and real-world growth.";
//     const canonicalUrl = "https://uncertain.in/meet-uncertain"; // Use your final domain structure

//     return (
//         <>
//             {/* --- 1. SEO Head Management --- */}
//             <Helmet>
//                 <title>{pageTitle}</title>
//                 <meta name="description" content={pageDescription} />
//                 <link rel="canonical" href={canonicalUrl} />
//                 {/* Open Graph tags for social media sharing */}
//                 <meta property="og:title" content={pageTitle} />
//                 <meta property="og:description" content={pageDescription} />
//                 <meta property="og:image" content={ImageBG} /> {/* Use a relevant image URL */}
//                 <meta property="og:url" content={canonicalUrl} />
//                 <meta property="og:type" content="website" />
//             </Helmet>

//             {/* --- 2. Main Page Content --- */}
//             <div className="bg-white text-gray-800">
//                 {/* --- Section: Meet (un)certain --- */}
//                 <section id="meet-uncertain" className="relative flex items-center min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${ImageBG})` }}>
//                     <div className="absolute inset-0 bg-black/50"></div>
//                     <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
//                         <div className="md:col-start-2">
//                             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
//                                 <span className="p-2 bg-white text-black">Meet</span>
//                                 <span className="p-2 bg-white text-[#DA2828]">(un)</span><span className="p-2 bg-white text-black">certain</span>
//                             </h1>
//                             <div className="mt-8 space-y-5 text-lg leading-relaxed bg-black/40 p-6 rounded-lg backdrop-blur-sm">
//                                 <p><strong className="font-bold italic">We are not</strong> another career counseling company.</p>
//                                 <p>
//                                     <span className="font-bold text-[#f87171]">(un)certain</span> is a mentorship-first community for students aged 11–18. Our mentors don’t just tell students what to do — they help them actually do it.
//                                 </p>
//                                 <p>From building daily routines and staying consistent with schoolwork to exploring hobbies, working on real projects, and making better choices — we’re there at every step, not just the big milestones.</p>
//                                 <p>We keep parents involved through progress updates, 1:1 check-ins, and workshops, because real growth happens when students and parents are on the same page.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* --- Section: Our Approach --- */}
//                 <section id="our-approach" className="py-16 md:py-24 bg-gray-50">
//                     <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Approach: The Buddy System</h2>
//                             <p className="mt-4 text-lg text-gray-600">At <strong className="text-gray-800">(un)certain</strong>, we know students don't just need advice — they need someone who gets it. Someone who listens, keeps them accountable, and actually shows up.</p>
//                         </div>
//                         <div className="space-y-4 text-gray-700">
//                            <p>Each student is paired with a dedicated buddy — a relatable mentor who understands their world and helps them navigate academics, tough decisions, and everything in between.</p>
//                            <p className="p-6 text-xl font-bold text-center text-white bg-gray-800 rounded-lg shadow-lg">One Student. One Mentor. <br/> Real Conversations. Real Progress.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* --- Section: Comparison Table --- */}
//                 <section className="relative py-16 md:py-24 bg-gray-100">
//                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${Image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//                     <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="max-w-4xl mx-auto text-center">
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We're Different</h2>
//                             <p className="mt-4 text-lg text-gray-600">A quick look at how the (un)certain buddy system compares to traditional counselling.</p>
//                         </div>
//                         <div className="mt-12 overflow-x-auto">
//                             <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-2xl">
//                                 <table className="w-full min-w-[700px] text-left">
//                                     <thead>
//                                         <tr className="bg-[#DA2828] text-white">
//                                             <th className="p-4 md:p-5 text-lg font-semibold w-2/4">Feature</th>
//                                             <th className="p-4 md:p-5 text-lg font-semibold text-center">(un)certain</th>
//                                             <th className="p-4 md:p-5 text-lg font-semibold text-center">Traditional Counselling</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {comparisonData.map((item, index) => (
//                                             <tr key={index} className="border-b border-gray-200 last:border-b-0 even:bg-gray-50">
//                                                 <td className="p-4 md:p-5 font-medium text-gray-700">{item.feature}</td>
//                                                 <td className="p-4 md:p-5">{item.buddySystem ? <CheckIcon /> : <CrossIcon />}</td>
//                                                 <td className="p-4 md:p-5">{item.traditional ? <CheckIcon /> : <CrossIcon />}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// }

// export default MeetUncertain;