
import React from 'react';
import { Link } from 'react-router-dom';

const ShopByAgeCard = ({ image, title, subtitle, description, link }) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      <div className="w-full lg:w-1/2 flex justify-center items-stretch">
        <div className="w-full">
          <img
            src={image}
            alt={`Baby wearing outfit for ${title} `}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full text-center">
          <h2 className="font-bold text-pink-400 mb-2 uppercase tracking-wider text-sm">
            {subtitle}
          </h2>
          <p className="text-4xl text-pink-500 mb-6 font-light">{title} Months</p>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          <Link
            to={link}
            className="inline-block border border-pink-500 text-black font-medium py-3 px-8 rounded-none hover:bg-pink-600 transition-colors uppercase tracking-wider text-sm"
          >
            Shop ({title} )
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByAgeCard;
