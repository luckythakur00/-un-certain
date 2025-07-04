import { useState, useEffect, useRef } from 'react';
import image1 from '../assets/founder1.jpeg';
import image2 from '../assets/founder2.jpeg';
import image3 from '../assets/founder3.jpeg';
import image4 from '../assets/founder2.jpeg';
import image5 from '../assets/founder3.jpeg';

const testimonialsData = [
    {
        quote: "Before reaching out to (un)certain, I felt lost and overwhelmed by the vast number of career paths and universities. But just four months of counselling changed everything. Malika gave me a structured plan under which I attended summer school, built AI projects and did community service which really touched my heart. This personalized support brought me much-needed clarity and confidence. Today, I feel far more prepared and optimistic about my future. I'm genuinely grateful for the journey they've helped me begin.",
        name: '-Meet Singh',
        relation: 'Class 12, Mayo College, Ajmer',
        imageUrl: image1
    },
    {
        quote: "(un)certain provided the structure and accountability my daughter needed. The focus on real-world projects, not just test scores, has prepared her for college in a way traditional counseling never could. We're so grateful.",
        name: 'Rajesh Singh',
        relation: 'Parent of Priya, 11th Grade',
        imageUrl: image2
    },
    {
        quote: "As a parent, seeing your child struggle with pressure is hard. The mentors here created a judgement-free space that allowed my son to open up about his anxieties and set achievable goals. The progress has been phenomenal.",
        name: 'Sunita Sharma',
        relation: 'Parent of Aarav, 10th Grade',
        imageUrl: image3
    },
    {
        quote: "The personalized attention and focus on both academic and personal growth is what sets (un)certain apart. They helped my child build a passion project from scratch, which was a huge talking point in her college applications.",
        name: 'Vikram Desai',
        relation: 'Parent of Meera, Class 12',
        imageUrl: image4
    },
    {
        quote: "The Buddy System was a game-changer. My son finally had someone to talk to who wasn't a parent or teacher, but a mentor who actually understood him. His confidence and grades have both seen a remarkable improvement.",
        name: 'Anjali Mehta',
        relation: 'Parent of Rohan, 12th Grade',
        imageUrl: image5
    }
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    const slides = [testimonialsData[testimonialsData.length - 1], ...testimonialsData, testimonialsData[0]];

    const handleNext = () => {
        if (!isTransitioning || isAnimating) return;
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(true);
    };

    const handlePrev = () => {
        if (!isTransitioning || isAnimating) return;
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(true);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(slides.length - 2);
            }, 500);
            return () => clearTimeout(timer);
        }

        if (currentIndex === slides.length - 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, slides.length]);

    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        const startAutoplay = () => {
            intervalRef.current = setInterval(() => {
                handleNext();
            }, 5000);
        };
        const stopAutoplay = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        startAutoplay();

        return () => stopAutoplay();
    }, []);

    return (
        <div id='testimonials' className="py-14 pb-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Testimonials</h2>
                </div>

                <div className="mt-12 relative">
                    <div className="overflow-hidden w-full rounded-2xl shadow-lg">
                        <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', willChange: 'transform' }}>
                            {
                                slides.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4 bg-[#8B0000]">
                                        <div className="flex flex-col rounded-2xl text-white p-6 md:p-8 min-h-[300px] md:min-h-[280px]">
                                            <div className="flex-grow">
                                                <blockquote className="text-base md:text-lg leading-relaxed italic">
                                                    <p>"{testimonial.quote}"</p>
                                                </blockquote>
                                            </div>
                                            <footer className="mt-6">
                                                <div className="flex items-center gap-x-4">
                                                    <img src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} className="h-12 w-12 rounded-full object-cover border-2 border-white/50" />
                                                    <div>
                                                        <div className="font-semibold">{testimonial.name}</div>
                                                        <div className="text-sm text-white/90">{testimonial.relation}</div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <button onClick={handlePrev} disabled={isAnimating} className={`absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl transition-opacity ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} aria-label="Previous testimonial">←</button>
                    <button onClick={handleNext} disabled={isAnimating} className={`absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl transition-opacity ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} aria-label="Next testimonial">→</button>

                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                        {
                            testimonialsData.map((_, index) => {
                                const isActive = (currentIndex === index + 1) ||
                                    (currentIndex === 0 && index === testimonialsData.length - 1) ||
                                    (currentIndex === slides.length - 1 && index === 0);
                                return (
                                    <button key={index} onClick={() => {
                                        if (isAnimating) return;
                                        setCurrentIndex(index + 1);
                                        setIsAnimating(true);
                                    }} className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <div className='h-24 bg-[#8B0000] mt-20' ></div> */}
        </div>
    );
}

export default Testimonial;