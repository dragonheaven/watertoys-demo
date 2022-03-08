import React from 'react';

import Image from '../../Image';

const SportsSection = () => {
  const sportsData = [
    {
      image: 'jet_ski.png',
      title: 'Jet Ski',
    },
    {
      image: 'wakeboard.png',
      title: 'Wakeboard',
    },
    {
      image: 'banana.png',
      title: 'Banana',
    },
    {
      image: 'paddle_board.png',
      title: 'Paddle-board',
    },
  ];

  return (
    <div className="bg-gray-50 pb-12">
      <div className="max-w-screen-xl mx-auto pt-12 px-4 md:px-8 xl:px-12">
        <div className="relative">
          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6 overflow-hidden gap-6 mb-10">
            {
              sportsData.map((item, index) => (
                <div key={index} className="w-1/3 xl:w-1/4 min-w-75 xl:min-w-80 rounded-lg overflow-hidden shadow-sm">
                  <Image src={`/images/sports/${item.image}`} className="w-full" />
                  <div className="px-3 py-2.5 bg-white">
                    <span className="text-xl italic">{item.title}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="hidden md:flex absolute w-12 h-12 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white justify-center items-center shadow cursor-pointer">
            <Image src="/images/icons/chevron-left.png" />
          </div>
          <div className="hidden md:flex absolute w-12 h-12 right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 justify-center items-center shadow cursor-pointer">
            <Image src="/images/icons/chevron-right.png" />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-black-200 px-12 py-2 text-3xl md:text-4xl text-white italic rounded">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default SportsSection;
