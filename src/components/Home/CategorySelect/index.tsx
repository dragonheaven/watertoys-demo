import React, { useState } from 'react';

import clsx from 'clsx';

import Image from '../../Image';

const CategorySelect = () => {
  const [category, setCategory] = useState('Water Toy');

  const categories = [
    {
      icon: 'jet_ski.png',
      name: 'Water Toy',
    },
    {
      icon: 'bookmarked.png',
      name: 'Class',
    },
    {
      icon: 'ticket.png',
      name: 'Experience',
    },
  ];

  return (
    <div className="flex space-x-4">
      {
        categories.map((item, index) => (
          <div
            key={index}
            className={clsx('rounded-md bg-white w-22 h-21 flex flex-col justify-center items-center', item.name !== category ? 'opacity-50' : '')}
            onClick={() => setCategory(item.name)}
          >
            <div className="flex justify-center items-center h-9">
              <Image src={`/images/icons/${item.icon}`} />
            </div>
            <div className="text-sm">{item.name}</div>
          </div>
        ))
      }
    </div>
  );
};

export default CategorySelect;
