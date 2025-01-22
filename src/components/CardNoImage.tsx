import React from 'react';

interface CardProps {
  title: string;
  des: string;
  color: string;
}

const CardNoImage: React.FC<CardProps> = ({ title, des, color }) => {
  return (
    <div className={`text-3xl font-bold h-fit md:h-52 w-full flex items-center justify-start text-[${color}] p-4 overflow-hidden`}>
      <div
        className="z-10 text-left w-full  flex md:justify-center "
       
      >
        <div>
           <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{des}</p>
        </div>
       
      </div>
    </div>
  );
};

export default CardNoImage;
