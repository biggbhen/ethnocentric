import React from 'react';
import Counter from './shared/Counter';

interface CardProps {
  number: number;
  des: string;
  color: string;
  percent?:boolean;
}

const CardNoImage: React.FC<CardProps> = ({ number, des, color,percent }) => {
  return (
		<div
			className={`text-3xl font-bold w-full flex items-center justify-start text-[${color}]`}>
			<div>
				<div>
					<Counter targetNumber={number} percentage={percent} duration={2000} />
					<p className='text-lg'>{des}</p>
				</div>
			</div>
		</div>
	);
};

export default CardNoImage;
