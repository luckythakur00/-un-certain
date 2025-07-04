// import image1 from '../assets/founder1.jpeg'
// import image2 from '../assets/founder2.jpeg'
// import image3 from '../assets/founder3.jpeg'

// const testimonialsData = [
//     {
//         quote: "Before reaching out to (un)certain, I felt lost and overwhelmed by the vast number of career paths and universities. But just four months of counselling changed everything. Malika gave me a structured plan under which I attended summer school, built AI projects and did community service which really touched my heart. This personalized support brought me much-needed clarity and confidence. Today, I feel far more prepared and optimistic about my future. I'm genuinely grateful for the journey they've helped me begin.",
//         name: '-Meet Singh',
//         relation: 'Class 12, Mayo College, Ajmer',
//         imageUrl: image1
//     },
//     {
//         quote: "(un)certain provided the structure and accountability my daughter needed. The focus on real-world projects, not just test scores, has prepared her for college in a way traditional counseling never could. We're so grateful.",
//         name: 'Rajesh Singh',
//         relation: 'Parent of Priya, 11th Grade',
//         imageUrl: image2
//     },
//     {
//         quote: "As a parent, seeing your child struggle with pressure is hard. The mentors here created a judgement-free space that allowed my son to open up about his anxieties and set achievable goals. The progress has been phenomenal.",
//         name: 'Sunita Sharma',
//         relation: 'Parent of Aarav, 10th Grade',
//         imageUrl: image3
//     },
// ];

// function Testimonial() {
//     return (
//         <div className="bg-white py-16">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8">

//                 <div className="max-w-2xl mx-auto text-center">
//                     <h2 className="text-4xl md:text-5xl font-semibold leading-8 text-black/80">Testimonials</h2>
//                     <p className="text-lg my-6 font-bold tracking-tight text-black/70 sm:text-4xl">What Our Community is Saying</p>
//                 </div>

//                 <div className="mt-16 grid max-w-2xl mx-auto grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
//                     {
//                         testimonialsData.map((testimonial, index) => (
//                             <div key={index} className="flex flex-col rounded-2xl bg-[#8B0000] text-white p-8 cursor-pointer">
//                                 <div className="flex-grow">
//                                     <blockquote className="leading-relaxed italic ">
//                                         <p>"{testimonial.quote}"</p>
//                                     </blockquote>
//                                 </div>

//                                 <footer className="mt-5">
//                                     <div className="flex items-center gap-x-4">
//                                         <img src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} className="h-12 w-12 rounded-full object-cover" />
//                                         <div>
//                                             <div className="font-semibold ">{testimonial.name}</div>
//                                             <div className="text-sm text-white/90">{testimonial.relation}</div>
//                                         </div>
//                                     </div>
//                                 </footer>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonial;





// import { useState, useEffect, useCallback } from 'react';
// import image1 from '../assets/founder1.jpeg';
// import image2 from '../assets/founder2.jpeg';
// import image3 from '../assets/founder3.jpeg';
// import image4 from '../assets/founder2.jpeg';
// import image5 from '../assets/founder3.jpeg';

// const testimonialsData = [
//     {
//         quote: "Before reaching out to (un)certain, I felt lost and overwhelmed. But just four months of counselling changed everything. This personalized support brought me much-needed clarity and confidence. Today, I feel far more prepared and optimistic about my future.",
//         name: '-Meet Singh',
//         relation: 'Class 12, Mayo College, Ajmer',
//         imageUrl: image1
//     },
//     {
//         quote: "(un)certain provided the structure and accountability my daughter needed. The focus on real-world projects, not just test scores, has prepared her for college in a way traditional counseling never could. We're so grateful.",
//         name: 'Rajesh Singh',
//         relation: 'Parent of Priya, 11th Grade',
//         imageUrl: image2
//     },
//     {
//         quote: "As a parent, seeing your child struggle with pressure is hard. The mentors here created a judgement-free space that allowed my son to open up about his anxieties and set achievable goals. The progress has been phenomenal.",
//         name: 'Sunita Sharma',
//         relation: 'Parent of Aarav, 10th Grade',
//         imageUrl: image3
//     },
//     {
//         quote: "The personalized attention and focus on both academic and personal growth is what sets (un)certain apart. They helped my child build a passion project from scratch, which was a huge talking point in her college applications.",
//         name: 'Vikram Desai',
//         relation: 'Parent of Meera, Class 12',
//         imageUrl: image4
//     },
//     {
//         quote: "The Buddy System was a game-changer. My son finally had someone to talk to who wasn't a parent or teacher, but a mentor who actually understood him. His confidence and grades have both seen a remarkable improvement.",
//         name: 'Anjali Mehta',
//         relation: 'Parent of Rohan, 12th Grade',
//         imageUrl: image5
//     }
// ];

// function Testimonial() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = useCallback(() => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
//         );
//     }, []);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
//         );
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             handleNext();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [handleNext]);

//     return (
//         <div className="bg-white py-16 sm:py-24">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8">

//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
//                     <p className="mt-4 text-lg leading-8 text-gray-600">What Our Community is Saying</p>
//                 </div>

//                 <div className="mt-16 relative">
//                     <div className="overflow-hidden w-full">
//                         <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                             {
//                                 testimonialsData.map((testimonial, index) => (
//                                     <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
//                                         <div className="flex flex-col rounded-2xl bg-[#8B0000] text-white p-8 shadow-xl min-h-[420px] md:min-h-[350px]">
//                                             <div className="flex-grow">
//                                                 <blockquote className="text-lg leading-relaxed italic">
//                                                     <p>"{testimonial.quote}"</p>
//                                                 </blockquote>
//                                             </div>
//                                             <footer className="mt-6">
//                                                 <div className="flex items-center gap-x-4">
//                                                     <img src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} className="h-14 w-14 rounded-full object-cover border-2 border-white/50" />
//                                                     <div>
//                                                         <div className="font-semibold">{testimonial.name}</div>
//                                                         <div className="text-sm text-white/90">{testimonial.relation}</div>
//                                                     </div>
//                                                 </div>
//                                             </footer>
//                                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>

//                     <button onClick={handlePrev} className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md z-10" aria-label="Previous testimonial">←</button><button
//                         onClick={handleNext}
//                         className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md z-10"
//                         aria-label="Next testimonial"
//                     >
//                         → {/* Right Arrow */}
//                     </button>

//                     {/* Pagination Dots */}
//                     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
//                         {testimonialsData.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
//                                     }`}
//                                 aria-label={`Go to slide ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonial;










// import { useState, useEffect, useRef } from 'react';
// import image1 from '../assets/founder1.jpeg';
// import image2 from '../assets/founder2.jpeg';
// import image3 from '../assets/founder3.jpeg';
// import image4 from '../assets/founder2.jpeg';
// import image5 from '../assets/founder3.jpeg';

// const testimonialsData = [
//     {
//         quote: "Before reaching out to (un)certain, I felt lost and overwhelmed. But just four months of counselling changed everything. This personalized support brought me much-needed clarity and confidence. Today, I feel far more prepared and optimistic about my future.",
//         name: '-Meet Singh',
//         relation: 'Class 12, Mayo College, Ajmer',
//         imageUrl: image1
//     },
//     {
//         quote: "(un)certain provided the structure and accountability my daughter needed. The focus on real-world projects, not just test scores, has prepared her for college in a way traditional counseling never could. We're so grateful.",
//         name: 'Rajesh Singh',
//         relation: 'Parent of Priya, 11th Grade',
//         imageUrl: image2
//     },
//     {
//         quote: "As a parent, seeing your child struggle with pressure is hard. The mentors here created a judgement-free space that allowed my son to open up about his anxieties and set achievable goals. The progress has been phenomenal.",
//         name: 'Sunita Sharma',
//         relation: 'Parent of Aarav, 10th Grade',
//         imageUrl: image3
//     },
//     {
//         quote: "The personalized attention and focus on both academic and personal growth is what sets (un)certain apart. They helped my child build a passion project from scratch, which was a huge talking point in her college applications.",
//         name: 'Vikram Desai',
//         relation: 'Parent of Meera, Class 12',
//         imageUrl: image4
//     },
//     {
//         quote: "The Buddy System was a game-changer. My son finally had someone to talk to who wasn't a parent or teacher, but a mentor who actually understood him. His confidence and grades have both seen a remarkable improvement.",
//         name: 'Anjali Mehta',
//         relation: 'Parent of Rohan, 12th Grade',
//         imageUrl: image5
//     }
// ];

// function Testimonial() {
//     // State to keep track of the current active slide index
//     const [currentIndex, setCurrentIndex] = useState(1);
//     // State to manage the transition effect for the seamless loop
//     const [isTransitioning, setIsTransitioning] = useState(true);
//     // Ref for the interval to manage autoplay
//     const intervalRef = useRef(null);

//     // Create the augmented list of slides for the seamless loop effect
//     // [last_clone, slide1, slide2, slide3, slide4, slide5, first_clone]
//     const slides = [testimonialsData[testimonialsData.length - 1], ...testimonialsData, testimonialsData[0]];

//     // Function to go to the next slide
//     const handleNext = () => {
//         if (!isTransitioning) return;
//         setCurrentIndex(prevIndex => prevIndex + 1);
//     };

//     // Function to go to the previous slide
//     const handlePrev = () => {
//         if (!isTransitioning) return;
//         setCurrentIndex(prevIndex => prevIndex - 1);
//     };

//     // This effect handles the "magic" of the seamless loop
//     useEffect(() => {
//         if (currentIndex === 0) { // If we're on the cloned last slide (at the beginning)
//             const timer = setTimeout(() => {
//                 setIsTransitioning(false); // Disable transition
//                 setCurrentIndex(slides.length - 2); // Jump to the real last slide
//             }, 500); // This duration must match the CSS transition duration
//             return () => clearTimeout(timer);
//         }

//         if (currentIndex === slides.length - 1) { // If we're on the cloned first slide (at the end)
//             const timer = setTimeout(() => {
//                 setIsTransitioning(false); // Disable transition
//                 setCurrentIndex(1); // Jump to the real first slide
//             }, 500);
//             return () => clearTimeout(timer);
//         }
//     }, [currentIndex, slides.length]);
    
//     // This effect re-enables the transition after the "jump"
//     useEffect(() => {
//         if (!isTransitioning) {
//             // A minimal timeout is needed to allow the state to update before re-enabling transition
//             const timer = setTimeout(() => setIsTransitioning(true), 50);
//             return () => clearTimeout(timer);
//         }
//     }, [isTransitioning]);

//     // This effect manages the autoplay
//     useEffect(() => {
//         const startAutoplay = () => {
//             intervalRef.current = setInterval(() => {
//                 handleNext();
//             }, 5000);
//         };
//         const stopAutoplay = () => {
//             if (intervalRef.current) {
//                 clearInterval(intervalRef.current);
//             }
//         };

//         startAutoplay();
        
//         return () => stopAutoplay(); // Cleanup on component unmount
//     }, []);


//     return (
//         <div className="bg-white py-16 sm:py-24">
//             <div className="max-w-4xl mx-auto px-6 lg:px-8">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
//                     <p className="mt-4 text-lg leading-8 text-gray-600">What Our Community is Saying</p>
//                 </div>
                
//                 <div className="mt-16 relative">
//                     <div className="overflow-hidden w-full">
//                         <div 
//                             className="flex"
//                             style={{ 
//                                 transform: `translateX(-${currentIndex * 100}%)`,
//                                 transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
//                             }}
//                         >
//                             {slides.map((testimonial, index) => (
//                                 <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
//                                     <div className="flex flex-col rounded-2xl bg-[#8B0000] text-white p-6 shadow-xl min-h-[400px] md:min-h-[340px]">
//                                         <div className="flex-grow">
//                                             <blockquote className="text-base md:text-lg leading-relaxed italic">
//                                                 <p>"{testimonial.quote}"</p>
//                                             </blockquote>
//                                         </div>
//                                         <footer className="mt-6">
//                                             <div className="flex items-center gap-x-4">
//                                                 <img src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} className="h-14 w-14 rounded-full object-cover border-2 border-white/50" />
//                                                 <div>
//                                                     <div className="font-semibold">{testimonial.name}</div>
//                                                     <div className="text-sm text-white/90">{testimonial.relation}</div>
//                                                 </div>
//                                             </div>
//                                         </footer>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Navigation Buttons - Now perfectly circular */}
//                     <button 
//                         onClick={handlePrev} 
//                         className="absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl"
//                         aria-label="Previous testimonial"
//                     >
//                         ←
//                     </button>
//                     <button 
//                         onClick={handleNext} 
//                         className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl"
//                         aria-label="Next testimonial"
//                     >
//                         →
//                     </button>

//                     {/* Pagination Dots - Logic adjusted for cloned slides */}
//                     <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
//                         {testimonialsData.map((_, index) => {
//                             const isActive = (currentIndex === index + 1) ||
//                                 (currentIndex === 0 && index === testimonialsData.length - 1) ||
//                                 (currentIndex === slides.length - 1 && index === 0);
//                             return (
//                                 <button 
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index + 1)}
//                                     className={`w-2.5 h-2.5 rounded-full transition-colors ${
//                                         isActive ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
//                                     }`}
//                                     aria-label={`Go to slide ${index + 1}`}
//                                 />
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonial;








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
    const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks
    const intervalRef = useRef(null);

    const slides = [testimonialsData[testimonialsData.length - 1], ...testimonialsData, testimonialsData[0]];

    // Next with guard for animation
    const handleNext = () => {
        if (!isTransitioning || isAnimating) return;
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(true);
    };

    // Prev with guard for animation
    const handlePrev = () => {
        if (!isTransitioning || isAnimating) return;
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(true);
    };

    // Handle seamless loop jumps
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

    // Re-enable transition and animation lock after jump or slide
    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    // Unlock animation after each transition completes
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 500); // match CSS duration
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Autoplay logic
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
        <div className="bg-white py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Testimonials</h2>
                    <p className="text-lg mt-4 leading-8 text-gray-600">What Our Community is Saying</p>
                </div>
                
                <div className="mt-12 relative">
                    <div className="overflow-hidden w-full rounded-2xl shadow-lg">
                        <div 
                            className="flex"
                            style={{ 
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                                willChange: 'transform'
                            }}
                        >
                            {slides.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="flex flex-col rounded-2xl bg-[#8B0000] text-white p-6 md:p-8 min-h-[300px] md:min-h-[280px]">
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
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={handlePrev} 
                        disabled={isAnimating}
                        className={`absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl transition-opacity ${
                            isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                        }`}
                        aria-label="Previous testimonial"
                    >
                        ←
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={isAnimating}
                        className={`absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl transition-opacity ${
                            isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                        }`}
                        aria-label="Next testimonial"
                    >
                        →
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                        {testimonialsData.map((_, index) => {
                            const isActive = (currentIndex === index + 1) ||
                                (currentIndex === 0 && index === testimonialsData.length - 1) ||
                                (currentIndex === slides.length - 1 && index === 0);
                            return (
                                <button 
                                    key={index}
                                    onClick={() => {
                                        if (isAnimating) return;
                                        setCurrentIndex(index + 1);
                                        setIsAnimating(true);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        isActive ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
