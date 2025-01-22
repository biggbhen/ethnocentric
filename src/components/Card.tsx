import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative h-72 w-full flex items-center bg-[#1A1A1A] justify-center text-center text-white p-4 overflow-hidden rounded-lg shadow-lg">
      {/* Image positioned at the bottom-right corner */}
      <div className="absolute bottom-0 right-0">
        <Image
          src={imageSrc}
          alt={title}
          width={150} 
          height={150} 
          className="object-contain" 
          priority
        />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
