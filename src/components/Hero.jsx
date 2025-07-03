import Image from '../assets/Image2.jpeg';

function Hero() {
  return (
    <div className='w-full'>
      <div id='home' className='w-full flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 lg:space-y-10 bg-white text-[#8B0000] order-2 lg:order-1'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>What if every student had a mentor growing up? </h1>
          <p className='text-base md:text-lg text-[#8B0000]'>They’d know their strengths, understand their options, and make decisions with confidence—not out of comparison, pressure, or fear of missing out.</p>
          <a href='#contact' className='w-fit px-8 py-3 rounded-full text-base font-semibold bg-[#8B0000] text-white hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all duration-300'>Start with a free consultation</a>
        </div>
        <div className='w-full lg:w-1/2 h-[50vh] lg:h-screen order-1 lg:order-2'>
          <img src={Image} alt="Students collaborating" className='h-full w-full object-cover' />
        </div>
      </div>

      {/* <div className='min-h-[50vh] md:min-h-[70vh] w-full flex items-center justify-center p-4 sm:p-8'>
        <h1 className='text-center max-w-4xl text-4xl md:text-6xl lg:text-7xl leading-tight lg:leading-snug'>We started <br /> <span className='text-[#DA2828] font-semibold'>(un)</span><span className='font-semibold text-[#2A2E31]'>certain</span> <br /> because we've <br /> been there</h1>
      </div> */}
    </div>
  );
}

export default Hero;