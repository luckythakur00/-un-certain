function FindYourFit() {
    return (
        <div id="findyourfit">
            <div className='h-60 bg-red-800 flex justify-center items-center'>
                <h1 className='text-6xl text-white'>Find your fit</h1>
            </div>
            <div>
                <div className="relative flex flex-col items-center pb-32">
                    <div className='min-h-[50vh] w-[90vw] lg:w-[70vw] mt-24 m-auto px-10 py-6 border-2 border-red-800'>
                        <h1 className='mb-8'>A valuable customised option for those looking for short-term and long-term planning and goals fulfillment. This model is designed to offer commitment and build long-term relationships with the buddies which makes both the students and the parents comfortable. Each session is age-appropriate, culturally sensitive, and always confidential — so students feel supported, and parents feel assured.</h1>
                        <h2 className='mb-4'>Inclusions: </h2>
                        <ol className='list-decimal pl-4 text-black/80 space-y-2'>
                            <li> <span className='text-red-700 font-semibold'>Six personalized 1:1 sessions</span> with buddies for an hour each (in-person or virtual as per preference) with the validity of the plan being 4 months</li>
                            <li>Support for <span className='text-red-700 font-semibold'>academic strategy</span> (stream and subject selection, tutoring resource guidance, school exams preparation planning, entrance exam strategy, etc.)</li>
                            <li>Deep dive into <span className='text-red-700 font-semibold'>project/portfolio building</span> (guidance with academic projects and personal branding projects)</li>
                            <li>Guidance for <span className='text-red-700 font-semibold'>global opportunities</span> (competitions, MUNs, internships, summer/winter schools, etc.)</li>
                            <li>A <span className='text-red-700 font-semibold'>safe space</span> helping students navigate the tough, often unspoken topics that shape their lives (Peer pressure & friendships, time management & productivity struggles, safe digital behavior & cyberbullying, Body image & self-esteem, etc.)</li>
                            <li><span className='text-red-700 font-semibold'>Two personalized sessions with parents</span> to ensure that a proper communication channel is enhanced with their children and the buddies</li>
                            <li><span className='text-red-700 font-semibold'>Progress report</span> for parents </li>
                            <li>WhatsApp and email support (assured response within 24 hours on a working day)</li>
                        </ol>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-800"></div>
                        <button className='mt-2 bg-red-800 text-white rounded-full px-12 py-4 flex flex-col items-center'>
                            <span className="text-xl lg:text-3xl font-semibold">Subscription Plan</span>
                            <span className="text-lg lg:text-2xl font-bold mt-1">₹18,000*</span>
                        </button>
                    </div>
                </div>

                <h1 className="text-center my-14 text-5xl font-semibold text-red-800" >OR</h1>

                <div className="relative flex flex-col items-center pb-32">
                    <div className='min-h-[20vh] w-[90vw] lg:w-[70vw] m-auto px-10 py-6 border-2 border-red-800'>
                        <h1 className='mb-8'>Flexibility for those who want support, one step at a time. This model is apt for new parents and students looking to seek quick advice from a buddy. However, our experience shows that that regular meetings with buddies lead to more productive results and more meaningful relationships.</h1>
                        <h2 className='mb-4'>Inclusions: </h2>
                        <ol className='list-decimal pl-4 text-black/80 space-y-2'>
                            <li> <span className='text-red-700 font-semibold'>Single 1:1 session</span> with a buddy</li>
                            <li>Support for <span className='text-red-700 font-semibold'>Recap notes + action plan</span> within 48 hours</li>
                            <li>Suitable for drop-in academic decisions, peer pressure talk, or quick check-ins</li>
                        </ol>
                    </div>
                    <div className="absolute -bottom-6 md:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-800"></div>
                        <button className='mt-2 text-red-700 px-12 py-4 flex flex-col items-center'>
                            <span className="text-2xl font-semibold">Pay as you go</span>
                            <span className="text-4xl font-semibold mt-1">₹2500*</span>
                        </button>
                    </div>
                </div>

                <h1 className="text-sm text-center pb-2 mt-10">* The pricing is exclusive of GST which is chargeable at 18%</h1>
                <div className="h-24 bg-red-700" ></div>
            </div>
        </div>
    )
}

export default FindYourFit;