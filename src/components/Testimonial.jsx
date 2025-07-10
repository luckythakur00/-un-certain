import { useState, useEffect, useRef, useCallback } from 'react';

const testimonialsData = [
    {
        quote: "Before reaching out to (un)certain, I felt lost and overwhelmed by the vast number of career paths and universities. But just four months of counselling changed everything. Malika gave me a structured plan under which I attended summer school, built AI projects and did community service which really touched my heart. This personalized support brought me much-needed clarity and confidence. Today, I feel far more prepared and optimistic about my future. I'm genuinely grateful for the journey they've helped me begin.",
        name: 'Meet Singh',
        relation: 'Class 12, Mayo College, Ajmer',
        imageUrl: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
    },
    {
        quote: "We honestly can’t thank Malika, Rhythm & Sagrika enough for the support they’ve given our child. It’s not easy figuring out what’s needed these days to build a strong college profile, but they’ve made the whole process feel so much clearer. From helping him plan his activities to guiding him on what really matters in school they’ve been there through it all, and with so much patience and genuine care.  They have treated our child like family. We feel really lucky to have them around at this stage in his life. We feel truly fortunate to have them walk this journey with us. Thank you for making a difference in our child’s future.",
        name: 'Mr. Kapil Arora, Father of Adam Arora',
        relation: 'Class 10, Pathways School, Gurugram',
        imageUrl: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
    },
    {
        quote: "Transitioning from CBSE to IB was overwhelming at first, but my mentors helped me adjust smoothly. They encouraged me to take part in MUNs, debates, and even get involved in community service — which led to my ‘Wheels of Change’ project. Our sessions weren’t just about academics — we talked about everything from golf and drumming to personal stuff I didn’t feel comfortable sharing elsewhere. The regular check-ins, and the space to speak openly with both me and my parents, made all the difference.",
        name: 'Adam Arora',
        relation: 'Class 10, Pathways School, Gurugram',
        imageUrl: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
    },
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    const slides = [testimonialsData[testimonialsData.length - 1], ...testimonialsData, testimonialsData[0]];

    const handleNext = useCallback(() => {
        if (!isTransitioning || isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
    }, [isTransitioning, isAnimating]);

    const handlePrev = useCallback(() => {
        if (!isTransitioning || isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev - 1);
    }, [isTransitioning, isAnimating]);

    const stopAutoplay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    const startAutoplay = useCallback(() => {
        stopAutoplay();
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    }, [handleNext, stopAutoplay]);

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
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    return (
        <div id='testimonials' className=" pb-32">
            <div className="h-16 md:h-24 bg-[#8B0000] flex justify-center items-center text-white" >
                <h1 className='text-2xl md:text-4xl text-center font-semibold'>Testimonials</h1>
            </div>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Testimonials</h2>
                </div> */}

                <div className="mt-12 relative" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
                    <div className="overflow-hidden w-full rounded-2xl shadow-lg">
                        <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', willChange: 'transform' }}>
                            {
                                slides.map((testimonial, index) => (
                                    <div key={index} className="min-h-[100px] w-full flex-shrink-0 px-4 bg-[#8B0000]">
                                        <div className="min-h-[300px] md:min-h-[280px] flex flex-col rounded-2xl text-white p-4 md:p-8">
                                            <div className="flex-grow">
                                                <blockquote className="text-sm md:text-base lg:text-lg leading-relaxed italic">
                                                    <p>"{testimonial.quote}"</p>
                                                </blockquote>
                                            </div>
                                            <footer className="mt-6">
                                                <div className="flex items-center gap-x-4">
                                                    <img src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-white/50" />
                                                    <div>
                                                        <div className="text-sm md:text-base font-semibold">{testimonial.name}</div>
                                                        <div className="text-xs md:text-sm text-white/90">{testimonial.relation}</div>
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
                                    }} className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${isActive ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;