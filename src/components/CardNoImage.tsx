import React from 'react';
import Counter from './shared/Counter';

interface CardProps {
  number: number;
  des: string;
  color: string;
}

const CardNoImage: React.FC<CardProps> = ({ number, des, color }) => {
  return (
		<div
			className={`text-3xl font-bold w-full flex items-center justify-start text-[${color}]`}>
			<div>
				<div>
					<Counter targetNumber={number} duration={2000} />
					<p className='text-lg'>{des}</p>
				</div>
			</div>
		</div>
	);
};

export default CardNoImage;
