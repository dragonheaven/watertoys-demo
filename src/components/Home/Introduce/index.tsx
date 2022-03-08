import React from 'react';

import Image from '../../Image';

const IntroduceSection = () => (
  <div className="bg-introduce md:h-177 bg-cover border-t border-gray-800 flex items-center">
    <div className="max-w-screen-xl mx-auto pt-8 md:pt-0 px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 md:gap-8 xl:gap-16">
        <div className="col-span-2 xl:col-span-1 flex flex-col justify-center items-center pb-8 md:pb-18 px-2">
          <h1 className="text-5xl md:text-6xl xl:text-7xl italic font-bold text-white mb-4">Book anywhere</h1>
          <div className="text-2xl font-thin md:text-4xl italic text-white max-w-150 text-center mb-8">
            We scan the market for you, and find all available watersport activities worldwide.
          </div>
          <button className="px-9 py-3 bg-black-200 rounded text-white italic text-3xl md:text-4xl w-full md:w-auto">Search now</button>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <Image src="/images/feature.png" className="xl:pl-20" />
        </div>
      </div>
    </div>
  </div>
);

export default IntroduceSection;
