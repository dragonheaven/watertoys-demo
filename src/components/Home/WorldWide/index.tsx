import React from 'react';

import Image from '../../Image';
import CategorySelect from '../CategorySelect';

const WorldWide = () => (
  <div className="bg-primary">
    <div className="max-w-screen-xl mx-auto pt-12 pb-14 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 xl:gap-16">
        <div className="lg:col-span-2 flex justify-end md:pr-0 lg:pr-12">
          <div className="flex flex-col lg:justify-center items-center md:items-end">
            <h1 className="text-center md:text-left text-5xl whitespace-nowrap lg:text-6xl xl:text-7xl italic text-white mb-4">Available worldwide</h1>
            <div className="text-center md:text-left text-xl lg:text-3xl xl:text-4xl italic font-thin text-white max-w-140 xl:max-w-160 text-center lg:text-right mb-8">
              You can be at a beach or on a boat - wherever you are in the world,
              with us you can book any watersport activity worldwide
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:max-w-82">
          <CategorySelect />

          <div className="rounded-md bg-white overflow-hidden ring-4 ring-blue-700 mt-12 min-w-82">
            <div className="flex justify-between items-center px-4 py-4-05 border-b border-gray-400">
              <div className="flex space-x-4 items-center">
                <Image src="/images/icons/search.png" />
                <div className="text-lg">Around current location</div>
              </div>
              <Image src="/images/icons/mic.png" />
            </div>
            <div className="flex space-x-4 items-center px-4 py-4-05 border-b border-gray-400">
              <Image src="/images/icons/heart.png" />
              <div className="text-lg">Sea bob, Wakeboard, ...</div>
            </div>
            <div className="flex space-x-4 items-center px-4 py-4-05 border-b border-gray-400">
              <Image src="/images/icons/calendar.png" />
              <div className="text-lg">1hr - Today, afternoon</div>
            </div>
            <div className="bg-sky-300 px-4 py-5 text-white text-center text-lg">
              Explore
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorldWide;
