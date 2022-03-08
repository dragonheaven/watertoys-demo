import React from 'react';

import Image from '../Image';

const Footer = () => (
  <div className="bg-black-900 pt-8">
    <div className="max-w-screen-xl mx-auto px-4 md:px-12">
      <Image src="/images/logo_footer.png" className="md:hidden relative z-10 h-12 mb-4" />
      <div className="grid grid-cols-12 gap-4 md:gap-8 border-b border-gray-400 pb-6">
        <div className="order-3 md:order-1 col-span-12 xl:col-span-5">
          <Image src="/images/logo_footer.png" className="hidden md:block relative z-10 mb-4" />
          <div className="text-white mb-4 text-lg max-w-104">
            For more stories, product announcements, events,
            and walkthroughs, subscribe our newsletter:
          </div>
          <div className="flex">
            <div className="relative bg-white rounded-bl-lg rounded-tl-lg overflow-hidden">
              <input placeholder="Your email address" className="focus:outline-none md:text-lg text-gray-400 py-2 pl-12 md:pl-18 h-14" />
              <div className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2">
                <Image src="/images/icons/email.png" className="w-6 md:w-8" />
              </div>
            </div>
            <button className="bg-primary text-white md:text-lg px-7 rounded-br-lg rounded-tr-lg">Subscribe</button>
          </div>
        </div>

        <div className="order-2 text-white col-span-6 md:col-span-3 xl:col-span-2">
          <div className="md:text-lg font-bold mb-3">Forli Adventurers</div>
          <div className="md:text-lg mb-3">Book an activity</div>
          <div className="md:text-lg mb-3">Rent equipment</div>
          <div className="md:text-lg mb-3">Buy a watertoy</div>
          <div className="md:text-lg mb-3">Download the app</div>
        </div>
        <div className="order-2 text-white col-span-6 md:col-span-3 xl:col-span-2">
          <div className="md:text-lg font-bold mb-3">For Business</div>
          <div className="md:text-lg mb-3">Booking Manager</div>
          <div className="md:text-lg mb-3">Reach more clients</div>
          <div className="md:text-lg mb-3">Booking Manger</div>
          <div className="md:text-lg mb-3">Manage inventory</div>
          <div className="md:text-lg mb-3">Buy watertoys</div>
        </div>
        <div className="order-2 text-white grid grid-cols-2 md:grid-cols-1 gap-4 col-span-12 md:col-span-3 xl:col-span-2">
          <div>
            <div className="md:text-lg font-bold mb-3">For Distributors</div>
            <div className="md:text-lg mb-3">Become a partner</div>
            <div className="md:text-lg mb-0">Cross-sell watertoys</div>
          </div>
          <div>
            <div className="md:text-lg font-bold mb-3">For Developers</div>
            <div className="md:text-lg mb-3">Watertoy booking API</div>
          </div>
        </div>
        <div className="order-2 text-white">
          <div className="md:text-lg font-bold mb-3">About</div>
          <div className="md:text-lg mb-3">Locations</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between pt-4 pb-5 text-white text-sm md:text-base ">
        <div className="">
          @2021 Advanced Boat Booking and more, LTD
          {' '}
          <span className="italic">All rights reserved.</span>
          {' '}
          <span className="underline italic">Privacy.</span>
          {' '}
          <span className="underline italic">Terms.</span>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Image src="/images/icons/flag.png" />
            <div className="text-white">English</div>
            <Image src="/images/icons/alt-dropdown.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
