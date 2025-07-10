import { Helmet } from "react-helmet";

function FindYourFit() {

    const pageTitle = "Find Your Fit: Pricing & Plans | uncertain.in Mentorship";
    const pageDescription = "Explore (un)certain's flexible mentorship plans. Choose our comprehensive Subscription Plan for long-term growth or the 'Pay As You Go' option for specific guidance. Find the perfect fit today.";
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
                <meta property="og:type" content="website" />
            </Helmet>

            <div id="findyourfit">
                <div className='h-16 md:h-24 bg-[#8B0000] flex justify-center items-center'>
                    <h1 className='text-2xl md:text-4xl font-semibold text-white'>Find your fit</h1>
                </div>
                <div>
                    <div className="relative flex flex-col items-center pb-32">
                        <div className='min-h-[50vh] w-[90vw] lg:w-[70vw] mt-10 m-auto px-10 py-6 border-2 border-red-800'>
                            <h1 className='mb-8'>A valuable customised option for those looking for short-term and long-term planning and goals fulfillment. This model is designed to offer commitment and build long-term relationships with the buddies which makes both the students and the parents comfortable. Each session is age-appropriate, culturally sensitive, and always confidential — so students feel supported, and parents feel assured.</h1>
                            <h2 className='mb-4'>Inclusions: </h2>
                            <ol className='list-decimal pl-4 text-black/80 space-y-2'>
                                <li> <span className='text-[#8B0000] font-semibold'>Six personalized 1:1 sessions</span> with buddies for an hour each (in-person or virtual as per preference) with the validity of the plan being 4 months</li>
                                <li>Support for <span className='text-[#8B0000] font-semibold'>academic strategy</span> (stream and subject selection, tutoring resource guidance, school exams preparation planning, entrance exam strategy, etc.)</li>
                                <li>Deep dive into <span className='text-[#8B0000] font-semibold'>project/portfolio building</span> (guidance with academic projects and personal branding projects)</li>
                                <li>Guidance for <span className='text-[#8B0000] font-semibold'>global opportunities</span> (competitions, MUNs, internships, summer/winter schools, etc.)</li>
                                <li>A <span className='text-[#8B0000] font-semibold'>safe space</span> helping students navigate the tough, often unspoken topics that shape their lives (Peer pressure & friendships, time management & productivity struggles, safe digital behavior & cyberbullying, Body image & self-esteem, etc.)</li>
                                <li><span className='text-[#8B0000] font-semibold'>Two personalized sessions with parents</span> to ensure that a proper communication channel is enhanced with their children and the buddies</li>
                                <li><span className='text-[#8B0000] font-semibold'>Progress report</span> for parents </li>
                                <li>WhatsApp and email support (assured response within 24 hours on a working day)</li>
                            </ol>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-800"></div>
                            <a href="#contact" className='w-72 lg:w-80 mt-2 bg-[#8B0000] text-white hover:bg-[#730000] hover:scale-105 transition-all duration-300 cursor-pointer rounded-full px-12 py-4 flex flex-col items-center'>
                                <span className="text-lg lg:text-2xl font-semibold">Subscription Plan</span>
                                <span className="text-lg lg:text-xl font-bold mt-1">₹18,000*</span>
                            </a>
                        </div>
                    </div>

                    <h1 className="text-center my-14 text-4xl font-semibold" >OR</h1>

                    <div className="relative flex flex-col items-center pb-32">
                        <div className='min-h-[20vh] w-[90vw] lg:w-[70vw] m-auto px-10 py-6 border-2 border-red-800'>
                            <h1 className='mb-8'>Flexibility for those who want support, one step at a time. This model is apt for new parents and students looking to seek quick advice from a buddy. However, our experience shows that that regular meetings with buddies lead to more productive results and more meaningful relationships.</h1>
                            <h2 className='mb-4'>Inclusions: </h2>
                            <ol className='list-decimal pl-4 text-black/80 space-y-2'>
                                <li> <span className='text-[#8B0000] font-semibold'>Single 1:1 session</span> with a buddy</li>
                                <li>Support for <span className='text-[#8B0000] font-semibold'>Recap notes + action plan</span> within 48 hours</li>
                                <li>Suitable for drop-in academic decisions, peer pressure talk, or quick check-ins</li>
                            </ol>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-800"></div>
                            <a href="#contact" className='w-72 lg:w-80 mt-2 bg-[#8B0000] text-white hover:bg-[#730000] hover:scale-105 transition-all duration-300 cursor-pointer rounded-full px-12 py-4 flex flex-col items-center'>
                                <span className="text-lg lg:text-2xl font-semibold">Pay as you go</span>
                                <span className="text-lg lg:text-xl font-bold mt-1">₹2,500*</span>
                            </a>
                        </div>
                    </div>

                    <h1 className="text-sm text-center pb-2 px-6 mt-10">* The pricing is exclusive of GST which is chargeable at 18%</h1>
                </div>
            </div >
        </>
    )
}

export default FindYourFit;