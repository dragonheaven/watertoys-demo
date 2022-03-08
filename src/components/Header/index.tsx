import React from 'react';

import Image from '../Image';

const Header = () => (
  <div className="flex flex-col md:block">
    <div className="order-2 md:order-1 bg-black-900 md:bg-sky-100">
      <div className="max-w-screen-xl mx-auto relative md:h-20 flex justify-center items-center px-4 md:px-12">
        <div className="flex items-center flex-wrap">
          <div className="text-white md:text-main md:text-lg pt-2 md:pt-0 mr-4 max-w-72 md:max-w-100 lg:max-w-full">
            Use the code "WELCOME20" to get a
            {' '}
            <span className="font-bold underline">20% discount</span>
            {' '}
            on your first booking
          </div>
          <button className="my-3 w-full md:w-auto bg-primary text-white py-1.5 md:py-2 px-5 rounded">Try now</button>
        </div>
        <Image src="/images/icons/close.png" className="hidden md:block ml-8 xl:absolute right-13 top-6" />
        <Image src="/images/icons/close_white.png" className="block md:hidden absolute right-4 top-6" />
      </div>
    </div>
    <div className="order-1 md:order-2 px-4 md:px-9 py-3 md:py-4-05 flex items-center justify-between space-x-8 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-1 lg:pl-20 xl:pl-40 items-center">
        <Image src="/images/logo.png" className="h-8 md:h-12" />
      </div>
      <div className="cursor-pointer">
        <Image src="/images/icons/menu.png" className="md:hidden" />
      </div>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        <button className="flex items-center space-x-2 bg-green_linear px-4 py-0.5 rounded h-13-05 text-white">
          <Image src="/images/icons/phone.png" />
          <span>Whats App Now</span>
        </button>
        <button className="px-9 py-0.5 bg-black-200 h-13-05 rounded text-white">Search now</button>
      </div>
    </div>
  </div>
);

export default Header;
