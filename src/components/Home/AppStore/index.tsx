import React from 'react';

import Image from '../../Image';

const AppStore = () => (
  <div className="bg-gray-50">
    <div className="max-w-screen-xl mx-auto pt-12 pb-12 px-4">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center md:space-x-6 mb-8 text-gray-400">
        <div className="text-xl md:text-4xl italic">Coming soon to the AppStores</div>
        <div className="flex space-x-4">
          <Image src="/images/app_store.png" className="w-36" />
          <Image src="/images/google_play.png" className="w-36" />
        </div>
      </div>
      <div className="text-left md:text-center text-gray-400 text-lg mb-3">
        Get notified when the mobile app is available for download
      </div>
      <div className="flex justify-center border border-gray-300 md:border-0 rounded-lg">
        <div className="relative bg-white rounded-bl-lg rounded-tl-lg overflow-hidden">
          <input placeholder="Your email address" className="md:text-lg focus:outline-none text-gray-400 py-2 pl-12 md:pl-18 h-14" />
          <div className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2">
            <Image src="/images/icons/email.png" className="w-6 md:w-8" />
          </div>
        </div>
        <button className="bg-primary text-white whitespace-nowrap md:text-lg px-7 rounded-br-lg rounded-tr-lg">Get notified</button>
      </div>
    </div>
  </div>
);

export default AppStore;
