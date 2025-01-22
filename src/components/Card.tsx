import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
 
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative h-72 w-full flex items-center justify-center text-center text-white p-4 overflow-hidden rounded-lg shadow-lg">
  
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
  
      <div className="absolute inset-0 bg-black/40"></div>
     
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
       
      </div>
    </div>
  );
};

export default Card;
