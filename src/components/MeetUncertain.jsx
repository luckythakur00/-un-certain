import Image from '../assets/Image3.jpeg';
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
    return (
        <div className='h-full'>
            <div id='meetuncertain' className="min-h-screen w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center bg-center text-white p-4 lg:p-0" style={{ backgroundImage: `url(${ImageBG})` }}>
                <h1 className='pb-2 bg-white text-black text-4xl md:text-6xl mb-8 lg:mb-0'>Meet <span className='text-[#DA2828] font-semibold'>(un)</span><span className='font-semibold' >certain</span></h1>
                <div className='w-full lg:w-[50%] text-xl md:text-2xl space-y-8' >
                    <h1>We are <span className='bg-black italic'>not</span> another career counseling company.</h1>
                    <h2>We are a mentorship-focused community that helps students figure things out—academically, emotionally, and personally.</h2>
                    <h2>Because let’s be honest - Students today aren’t just choosing subjects or colleges. <br />They are dealing with pressure, uncertainty, and a world full of noise. That’s where we come in.</h2>
                    <p className=''>At (un)certain, students are: <br />
                        Mentored, not managed <br />
                        Guided, not told <br />
                        Heard, not handed answers
                    </p>
                </div>
            </div>

            <div id='ourapproach' className="min-h-screen w-full px-4 md:px-16 py-16 lg:py-0 flex flex-col lg:flex-row justify-center lg:justify-around items-center bg-gray-50 text-black/80">
                <div className='w-full lg:w-[40%] text-center lg:text-left mb-8 lg:mb-0'>
                    <h1 className='text-black/90 text-4xl md:text-6xl'>Our Approach</h1>
                </div>
                <div className='w-full lg:w-[50%] text-lg md:text-xl space-y-8' >
                    <h1>At <span className='text-[#8B0000] font-semibold'>(un)</span><span className='font-semibold' >certain</span>, we know students do not just need advice — they need someone who gets it. Someone who listens, keeps them accountable, and actually shows up.</h1>
                    <h2>That is why we implemented the <span>Buddy System.</span></h2>
                    <p>Each student is paired with a dedicated buddy — a relatable mentor who understands their world, speaks their language, and helps them navigate academics, tough decisions, emotional stress, and everything in between.</p>
                    <p>It is simple:</p>
                    <h1 className='font-bold text-black'>One student. One mentor. Real conversations. Real progress.</h1>
                </div>
            </div>

            <div className="min-h-screen w-full flex justify-center items-center bg-cover bg-center p-4 sm:p-8" style={{ backgroundImage: `url(${Image2})` }}>
                <div className="w-full max-w-6xl bg-white text-black p-6 sm:p-10 rounded-lg shadow-2xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black/80 text-center mb-8">How are we different from traditional counselling?</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left border-collapse">
                            <thead>
                                <tr className="bg-[#8B0000] text-white">
                                    <th className="p-4 text-lg font-semibold">What you get</th>
                                    <th className="p-4 text-lg font-semibold text-center">Buddy System</th>
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
    );
}

export default MeetUncertain;