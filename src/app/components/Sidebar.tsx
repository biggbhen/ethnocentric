import React from 'react';
import Image from 'next/image';
import Side1 from '../../assets/side1.png'
import Side2 from '../../assets/side2.png';

const Sidebar: React.FC = () => {
	return (
		<>
		
			<div className='h-screen w-screen md:w-80 md:mt-7 mt-3 bg-[white] text-dark-gray  flex flex-col'>
			<div className=''>
				<input
					type='text'
					name=''
					placeholder='Search'
					className='w-full mb-2 bg-[white] border border-[#E0E0E0] p-3'
					id=''
				/>
			</div>

				{/* Menu */}
				<nav className='flex-grow'>
					<ul className='flex flex-col  space-y-2'>
						<li className='border bg-[#FAFAFA] border-[#E0E0E0] w-full flex items-stretch'>
							<div className='bg-[#FFA929] w-1'></div>
							<a href='#' className='flex items-center p-6 rounded-md w-full'>
								<span className='material-icons-outlined font-normal'>
									CATEGORIES
								</span>
							</a>
						</li>

						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<a href='#' className='flex items-center p-4 rounded-md'>
								<span className='material-icons-outlined font-normal '>
									All Posts
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<a href='#' className='flex items-center p-4 rounded-md'>
								<span className='material-icons-outlined font-normal '>
									Training & Skills Development
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<a href='#' className='flex items-center p-4 rounded-md'>
								<span className='material-icons-outlined font-normal '>
									MSME Growth & Success Stories
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<a href='#' className='flex items-center p-4 rounded-md'>
								<span className='material-icons-outlined font-normal '>
									Women in Fashion
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<a href='#' className='flex items-center p-4 rounded-md'>
								<span className='material-icons-outlined font-normal '>
									Advocacy & Policy Updates
								</span>
							</a>
						</li>
					</ul>

					<ul className='flex flex-col mt-4 space-y-2'>
						<li className='border bg-[#FAFAFA] border-[#E0E0E0] w-full flex items-stretch'>
							<div className='bg-[#FFA929] w-1'></div> 
							<a href='#' className='flex items-center p-6 rounded-md w-full'>
								<span className='material-icons-outlined font-normal'>
									LATEST POSTS
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<div className='flex justify-between p-2 items-center'>
								<div>
									<Image src={Side1} alt='' />
								</div>
								<div>
									<div className='font-normal'>
										Designing the Future: Highl...
									</div>
									<div className='text-xs'>28 November, 2024</div>
								</div>
							</div>
						</li>
						<li className='border bg-[#FAFAFA]  border-[#E0E0E0] w-full'>
							<div className='flex justify-between p-2 items-center'>
								<div>
									<Image src={Side2} alt='' />
								</div>
								<div>
									<div className='font-normal'>
										Garment Making in Focus: H...
									</div>
									<div className='text-xs'>28 November, 2024</div>
								</div>
							</div>
						</li>
					</ul>

					<ul className='flex flex-col mt-4 space-y-2'>
						<li className='border bg-[#FAFAFA] border-[#E0E0E0] w-full flex items-stretch'>
							<div className='bg-[#FFA929] w-1'></div> {/* Red vertical bar */}
							<a href='#' className='flex items-center p-6 rounded-md w-full'>
								<span className='material-icons-outlined font-normal'>
									TAGS
								</span>
							</a>
						</li>
						<li className='border bg-[#FAFAFA] text-xs p-2  border-[#E0E0E0] w-full'>
							<div className='flex justify-between p-2 items-center '>
								<div className='text-center'>
									<div className='font-normal w-fit bg-white p-2'>Fashion</div>
									<div className='font-normal w-fit bg-white mt-1 p-2'>
										Women
									</div>
									<div className='font-normal w-fit bg-white mt-1 p-2'>
										Training
									</div>
								</div>
								<div className='text-center'>
									<div className='font-normal w-fit bg-white mt-1 p-2'>
										Garment Making
									</div>
									<div className='font-normal w-fit bg-white mt-1 p-2'>
										MasterCard Foundation
									</div>
									<div className='font-normal w-fit  bg-white mt-1 p-2'>
										Mentorship
									</div>
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
