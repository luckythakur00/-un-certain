import bgImg from '../assets/Image6.jpeg'
import founder1 from '../assets/Image9.jpeg'
import founder2 from '../assets/Image5.jpeg'
import founder3 from '../assets/Image4.jpeg'
import founderBgImg from '../assets/Image8.jpeg'

const founderDetails = [
    { name: "Dr. Malika Kukreja", description: "Malika is a passionate researcher and educator with a deep commitment to improving education and social outcomes. A graduate of Miranda House and Kirori Mal College, she earned her PhD from Panjab University while also working as an Academic Advisor and Trainer. Over the years, Malika has experience in teaching school students, collaborated in international education projects, and advised countless students — including family and friends who still turn to her for trusted advice. At (un)certain, Malika plays a key role in shaping academic strategy and personalized learning pathways. Her practical, compassionate approach ensures that each student is not just academically guided but also nurtured with care and clarity.", Image: founder1 },
    { name: "Sagrika Kukreja", description: "Sagrika is a psychology graduate from the University of Delhi and holds a Master’s degree from King’s College London. With a strong foundation in behavioral analysis and emotional development, she brings a deep understanding of how mental well-being shapes student success. Her approach combines global insights with a deep understanding of the Indian education system. At (un)certain, Sagrika ensures that every student feels seen, heard, and supported — not just as learners, but as young individuals navigating big transitions. She ensures that students aren’t just academically supported but are also emotionally understood, helping them thrive inside and outside the classroom.", Image: founder2 },
    { name: "Rhythm Kukreja", description: "Rhythm is a graduate of New York University, Abu Dhabi, where he studied on a full scholarship and worked on global academic and community development projects. He had the opportunity to learn across NYU’s global campuses — from New York to London and Prague. This diverse academic journey exposed him to multiple education systems, cultures, and ways of thinking, giving him a deep appreciation for global perspectives and the power of meaningful connections. A former student of The Scindia School, Gwalior, his background combines academic rigor with real-world impact — from adventure expeditions to grassroots volunteering. At (un)certain, Rhythm focuses on helping students turn advice into action. He believes that when young minds receive timely guidance and the right tools, they can unlock their full potential — not just for themselves, but for society.", Image: founder3 },
]

function OurFounder() {
    return (
        <div id='ourfounders'>
            <div className="min-h-screen w-full bg-cover text-white" style={{ backgroundImage: `url(${bgImg})` }}>
                <h1 className='text-5xl text-center py-20 text-black/80'>Our Founders</h1>
                <div className='w-full flex flex-wrap justify-center items-stretch gap-8 p-4'>
                    {
                        founderDetails.map((val, index) => (
                            <div key={index} className='flex flex-col w-full max-w-sm rounded-lg shadow-lg overflow-hidden'>
                                <div>
                                    <img src={val.Image} alt={val.name} className='h-96 w-full object-cover' />
                                </div>
                                <div className="flex-1 flex flex-col p-6 text-white" style={{ backgroundImage: `url(${founderBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h1>Co-founder and Mentor</h1>
                                    <h2 className='text-2xl font-bold py-2'>{val.name}</h2>
                                    <p className='mt-4 font-normal text-base'>{val.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='h-24 bg-red-700 pt-10' ></div>
        </div>

    )
}

export default OurFounder