import { useState, useEffect } from 'react';

const Counter = ({ targetNumber = 1000, duration = 2000 }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = targetNumber / 2;
		const increment = targetNumber / (duration / 16.67);

		const animateCounter = () => {
			start += increment;
			if (start < targetNumber) {
				setCount(Math.ceil(start));
				requestAnimationFrame(animateCounter);
			} else {
				setCount(targetNumber);
			}
		};
		animateCounter();
	}, [targetNumber, duration]);

	return (
		<div
			className='text-2xl font-bold mb-2'>
			{count.toLocaleString()}
		</div>
	);
};

export default Counter;
