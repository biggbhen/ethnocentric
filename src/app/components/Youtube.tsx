import React from 'react';
import Image from 'next/image';
import Divider from '../../assets/divider.svg';

interface YoutubeProps {
	url: string;
}

const Youtube: React.FC<YoutubeProps> = ({ url }) => {
	// Function to extract the video ID from the YouTube URL
	const getVideoId = (youtubeUrl: string): string | null => {
		try {
			const urlObj = new URL(youtubeUrl);

			
			if (
				urlObj.hostname === 'www.youtube.com' ||
				urlObj.hostname === 'youtube.com'
			) {
				return urlObj.searchParams.get('v');
			}

			// Handle shortened URLs (e.g., https://youtu.be/...)
			if (urlObj.hostname === 'youtu.be') {
				return urlObj.pathname.substring(1); 
			}

			return null; 
		} catch (error) {
			return null; 
		}
	};

	const videoId = getVideoId(url);

	if (!videoId) {
		return <p className='text-red-500'>Invalid YouTube URL</p>; // Graceful fallback with Tailwind styling
	}

	const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
    <>
		<div className='relative pb-[56.25%] h-0 overflow-hidden'>
			<iframe
				src={youtubeEmbedUrl}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title='YouTube Video'
				className='absolute top-0 left-0 w-full h-full'></iframe>
		</div>
    
    </>
	);
};

export default Youtube;
