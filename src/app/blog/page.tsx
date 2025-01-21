'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Divider from '../../assets/divider.svg';
import heroImage from '../../assets/heroImage.svg';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
import BlogPage2 from '@/assets/blogpage2.png';
import BlogPage6 from '@/assets/blogpage6.png';
import BlogPage5 from '@/assets/blogpage5.png';
import BlogPage4 from '@/assets/blogpage4.png';
import BlogPage3 from '@/assets/blogpage3.png';
import Button from '@/components/ui/Button';
import ImageBackground from '@/components/ImageBackground';
import Sidebar from '@/components/Sidebar';
import BlogCard from '@/components/BlogCard';

interface Blog {
	id: number;
	title: string;
	description: string;
	linkText: string;
	mainImageSrc: StaticImageData;
}

const Index = () => {
	const router = useRouter();

  const blogData: Blog[] = [
    {
      id: 0,
      title:
        'Behind the Scenes: A Day in the Life of a Fashion Designer.',
      description:
        `The recent Partner Convening hosted by Mastercard Foundation was a moment of tremendous insight. This year's theme, "Collective Action for Accelerated Impact," underscored the power of joint efforts in amplifying youth programming.

Here are our key takeaways:

-Diversity, Equity, and Inclusion (DEI): Focused programming for young women and Persons with Disabilities (PWDs).

-Economic Impact: Young women in Nigeria are projected to contribute $56 billion to the economy, yet only 19% are in dignified work through the Foundation's programs.

-Inclusive Programming: Aiming for at least 5% inclusion of PWDs in all initiatives.

-MERL Framework: Emphasizing data-driven decisions and ethical data management

-Cross-Sector Collaboration: Strengthening partnerships for greater youth development impact.


This convening reinforced our dedication to amplifying young African voices, empowering youths, and driving meaningful change. Together, we are committed to a more inclusive and prosperous Africa.`,
      linkText: "  Read more",
      mainImageSrc: BlogPage2,
    },
    {
      id: 1,
      title:
        `𝗘𝘁𝗵𝗻𝗼𝗰𝗲𝗻𝘁𝗿𝗶𝗾𝘂𝗲'𝘀 𝗩𝗶𝘀𝗶𝗼𝗻 𝗳𝗼𝗿 𝗮 𝗦𝗸𝗶𝗹𝗹𝗲𝗱 𝗡𝗶𝗴𝗲𝗿𝗶𝗮𝗻 𝗪𝗼𝗿𝗸𝗳𝗼𝗿𝗰𝗲`,
      description:
        `In Nigeria's thriving but often overlooked informal sector, skills are passed down through years of hands-on experience, making artisans’ essential contributors to local production. Yet, a gap persists in standardization, recognition, and access to larger markets. At Ethnocentrique, we are committed to bridging that gap, especially for skilled local creatives who drive Nigeria’s economic growth.
 
Through the Fashion Future Program (FFP), a skills and economic development initiative, being implemented in the fashion clusters of Aba, Ethnocentrique is upskilling experienced young fashion entrepreneurs – called Mastercraft Persons (MCPs) - under the National Skills Qualification Framework (NSQF). This framework, developed by the National Board for Technical Education (NBTE), introduces artisans to a structured, and standard learning approach that enhances their skills, elevates their credibility, and the quality of training they deliver.

With our second cohort underway, 300 MCPs have completed their training through the NSQF, and are now prepared to train and mentor young apprentices in garment-making, shoemaking, and leatherwork through a free, 5-month apprenticeship program within the fashion clusters. This hands-on mentorship aims to equip apprentices with both technical expertise and market knowledge, building a local skilled workforce capable of driving growth.`,
      linkText: "  Read more",
      mainImageSrc: BlogPage3,
    },
    {
      id: 2,
      title:
        `𝗘𝘁𝗵𝗻𝗼𝗰𝗲𝗻𝘁𝗿𝗶𝗾𝘂𝗲 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝘀 𝘄𝗶𝘁𝗵 𝗔𝗯𝗶𝗮 𝗦𝘁𝗮𝘁𝗲 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁 𝘁𝗼 𝗣𝗿𝗼𝗺𝗼𝘁𝗲 𝗖𝗼𝗺𝗺𝗼𝗻 𝗙𝗮𝗰𝗶𝗹𝗶𝘁𝘆 𝗖𝗲𝗻𝘁𝗲𝗿𝘀 (𝗖𝗙𝗖𝘀) 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗳𝗼𝗿 𝗠𝗦𝗠𝗘𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗙𝗮𝘀𝗵𝗶𝗼𝗻 𝗙𝘂𝘁𝘂𝗿𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺`,
      description:
        `Imagine a future where creative MSMEs in Abia State have access to specialized shared spaces designed to improve their competitiveness and transform them into successful businesses. 

Through the Fashion Future Program (FFP), Ethnocentrique is working toward this vision by championing the development of Common Facility Centers (CFCs) for MSMEs. These centers are shared spaces where Micro, Small, and Medium Enterprises (MSMEs) can find the advanced equipment, resources, tools, and collaborative space needed for standardized and efficient local production.

𝗙𝗼𝗿𝗴𝗶𝗻𝗴 𝗮 𝗣𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗔𝗹𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗔𝗯𝗶𝗮 𝗦𝘁𝗮𝘁𝗲 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁
Ethnocentrique in collaboration with the Ministry of Industry and SME Abia State recently convened a pivotal workshop that brought together representatives from the Abia State government, including the Ministry of Industry and SMEs, Ministry of Finance, Ministry of budget, Ease of doing business, Nigerian Export Promotion Council, SMEDAN, Shippers Council, Ministry of Women Affairs amongst others. This collaboration explored pathways for state support in bolstering MSME clusters and CFC development, particularly for MSMEs in the creative industry in Aba, to nurture globally competitive artisans and enhance facilities for economic growth.

𝗪𝗵𝘆 𝗖𝗙𝗖𝘀 𝗠𝗮𝘁𝘁𝗲𝗿 𝗳𝗼𝗿 𝗔𝗯𝗮’𝘀 𝗠𝗦𝗠𝗘𝘀
Aba is a hub of creativity, yet artisans often face obstacles like limited access to quality equipment, affordable workspaces, and streamlined processes. With over 4,000 MSMEs ready to benefit, CFCs could transform Aba into a powerhouse of innovation, offering artisans—from shoemakers to leatherworks and garment makers—a space to hone their craft, collaborate, and scale their businesses, thus boosting the local economy and their visibility on a broader stage.

𝗔 𝗦𝗵𝗮𝗿𝗲𝗱 𝗩𝗶𝘀𝗶𝗼𝗻 𝗳𝗼𝗿 𝗘𝗰𝗼𝗻𝗼𝗺𝗶𝗰 𝗚𝗿𝗼𝘄𝘁𝗵
This initiative isn’t solely about infrastructure; it’s about creating a supportive ecosystem for artisans in Aba’s clusters, increasing their productivity and competitiveness. The Abia State government’s commitment highlights a shared belief in the potential of Aba’s fashion sector to drive lasting economic impact.

Together, Ethnocentrique and the Abia State government are laying the foundation for a prosperous future for Aba’s MSMEs and artisans.`,
      linkText: "  Read more",
      mainImageSrc: BlogPage4,
    },
    {
      id: 3,
      title:
        `𝗘𝗺𝗽𝗼𝘄𝗲𝗿𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 𝗧𝗵𝗿𝗼𝘂𝗴𝗵 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝗻𝗱 𝗔𝘄𝗮𝗿𝗲𝗻𝗲𝘀𝘀: 𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝟮𝗻𝗱 𝗖𝗼𝗵𝗼𝗿𝘁 𝗢𝗿𝗶𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝘁𝗵𝗲 𝗙𝗮𝘀𝗵𝗶𝗼𝗻 𝗙𝘂𝘁𝘂𝗿𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 `,
      description:
        `At Ethnocentrique, we believe that transformation begins with preparation, and the 5 day orientation event for the Fashion Future Program’s second cohort was a testament to this philosophy. 

The orientation brought together diverse voices, including state actors from Abia state who shared words of encouragement and underscored the importance of the initiative, reinforcing the program's significance as a catalyst for personal and community growth.

𝗔 𝗖𝗼𝗺𝗽𝗿𝗲𝗵𝗲𝗻𝘀𝗶𝘃𝗲 𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝘁𝗼 𝘁𝗵𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 
Participants were given an overview of the Fashion Future Program, including the technical skills they would acquire in garment making, shoemaking, and leatherworks. They also learned about the broader opportunities the program offers, such as access to finance, markets, and jobs. This holistic introduction laid the foundation for their journey, helping them see the bigger picture of what they can achieve through their participation. 

𝗚𝗲𝗻𝗱𝗲𝗿, 𝗦𝗮𝗳𝗲𝗴𝘂𝗮𝗿𝗱𝗶𝗻𝗴, 𝗮𝗻𝗱 𝗗𝗶𝘀𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗔𝘄𝗮𝗿𝗲𝗻𝗲𝘀𝘀 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 
One of the core sessions during the orientation focused on gender and safeguarding—topics vital to creating a safe and inclusive learning environment. Participants were educated on the importance of respecting diversity, ensuring safety in all interactions, and fostering equality in their approach to work and relationships. 

The program also prioritized 𝗱𝗶𝘀𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗮𝘄𝗮𝗿𝗲𝗻𝗲𝘀𝘀 𝘁𝗿𝗮𝗶𝗻𝗶𝗻𝗴, emphasizing empathy, inclusion, and the value of creating opportunities for individuals with disabilities. This session aimed to build a community where everyone feels seen, heard, and valued. 

𝗠𝗶𝗻𝗱𝘀𝗲𝘁 𝗦𝗵𝗶𝗳𝘁: 𝗣𝗿𝗲𝗽𝗮𝗿𝗶𝗻𝗴 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗝𝗼𝘂𝗿𝗻𝗲𝘆 𝗔𝗵𝗲𝗮𝗱 
A significant highlight of the orientation was the mindset shift session, which encouraged participants to reorient their thinking for the phase ahead. It was inspiring to see participants internalize the message of adaptability and determination, setting the stage for their success in the program and beyond. 

𝗟𝗼𝗼𝗸𝗶𝗻𝗴 𝗔𝗵𝗲𝗮𝗱 
The energy, enthusiasm, and commitment displayed by the participants have set a powerful tone for this cohort. As we move forward, we are excited to witness their transformation—not just in skill but in mindset and approach to opportunities. 

At Ethnocentrique, we are grateful to all who made this orientation a success—our partners, the Mastercard Foundation, the state actors, facilitators, and team members who brought their expertise and passion to the table. Together, we are building not just the future of fashion but a future of inclusion, empowerment, and impact. 
hashtag#FashionFutureProgram hashtag#Ethnocentrique hashtag#Impact hashtag#communitydevelopment hashtag#growth`,
      linkText: "  Read more",
      mainImageSrc: BlogPage5,
    },
    {
      id: 4,
      title:
        `𝗘𝘁𝗵𝗻𝗼𝗰𝗲𝗻𝘁𝗿𝗶𝗾𝘂𝗲 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝘀 𝘄𝗶𝘁𝗵 𝗔𝗯𝗶𝗮 𝗦𝘁𝗮𝘁𝗲 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁 𝘁𝗼 𝗣𝗿𝗼𝗺𝗼𝘁𝗲 𝗖𝗼𝗺𝗺𝗼𝗻 𝗙𝗮𝗰𝗶𝗹𝗶𝘁𝘆 𝗖𝗲𝗻𝘁𝗲𝗿𝘀 (𝗖𝗙𝗖𝘀) 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗳𝗼𝗿 𝗠𝗦𝗠𝗘𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗙𝗮𝘀𝗵𝗶𝗼𝗻 𝗙𝘂𝘁𝘂𝗿𝗲 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 `,
      description:
        `Imagine a future where creative MSMEs in Abia State have access to specialized shared spaces designed to improve their competitiveness and transform them into successful businesses. 

Through the Fashion Future Program (FFP), Ethnocentrique is working toward this vision by championing the development of Common Facility Centers (CFCs) for MSMEs. These centers are shared spaces where Micro, Small, and Medium Enterprises (MSMEs) can find the advanced equipment, resources, tools, and collaborative space needed for standardized and efficient local production.

𝗙𝗼𝗿𝗴𝗶𝗻𝗴 𝗮 𝗣𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗔𝗹𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗔𝗯𝗶𝗮 𝗦𝘁𝗮𝘁𝗲 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁
Ethnocentrique in collaboration with the Ministry of Industry and SME Abia State recently convened a pivotal workshop that brought together representatives from the Abia State government, including the Ministry of Industry and SMEs, Ministry of Finance, Ministry of budget, Ease of doing business, Nigerian Export Promotion Council, SMEDAN, Shippers Council, Ministry of Women Affairs amongst others. This collaboration explored pathways for state support in bolstering MSME clusters and CFC development, particularly for MSMEs in the creative industry in Aba, to nurture globally competitive artisans and enhance facilities for economic growth.

𝗪𝗵𝘆 𝗖𝗙𝗖𝘀 𝗠𝗮𝘁𝘁𝗲𝗿 𝗳𝗼𝗿 𝗔𝗯𝗮’𝘀 𝗠𝗦𝗠𝗘𝘀
Aba is a hub of creativity, yet artisans often face obstacles like limited access to quality equipment, affordable workspaces, and streamlined processes. With over 4,000 MSMEs ready to benefit, CFCs could transform Aba into a powerhouse of innovation, offering artisans—from shoemakers to leatherworks and garment makers—a space to hone their craft, collaborate, and scale their businesses, thus boosting the local economy and their visibility on a broader stage.

𝗔 𝗦𝗵𝗮𝗿𝗲𝗱 𝗩𝗶𝘀𝗶𝗼𝗻 𝗳𝗼𝗿 𝗘𝗰𝗼𝗻𝗼𝗺𝗶𝗰 𝗚𝗿𝗼𝘄𝘁𝗵
This initiative isn’t solely about infrastructure; it’s about creating a supportive ecosystem for artisans in Aba’s clusters, increasing their productivity and competitiveness. The Abia State government’s commitment highlights a shared belief in the potential of Aba’s fashion sector to drive lasting economic impact.

Together, Ethnocentrique and the Abia State government are laying the foundation for a prosperous future for Aba’s MSMEs and artisans.`,
      linkText: "  Read more",
      mainImageSrc: BlogPage6,
    },
  ];

	const itemsPerPage = 1;
	const [currentPage, setCurrentPage] = useState(0);

	const paginatedBlogs = blogData.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	);

	const handleReadMoreClick = (id: number) => {
		router.push(`/blog/${id}`);
	};

	const handlePageChange = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected);
	};

	const totalPages = Math.ceil(blogData.length / itemsPerPage);

  return (
    <>
      <div className=''>
        <ImageBackground
          imageSrc={heroImage}
          alt='A beautiful landscape background'
          className='h-screen '>
          <div className='text-white text-center px-4 py-8'>
            <h1 className='text-4xl font-medium md:max-w-[55rem] text-bright-orange mb-6 md:text-6xl lg:text-7xl'>
              Stories of Transformation and Innovation in Fashion
            </h1>
            <p className='text-lg text-dark-gray mb-8 md:text-xl md:max-w-[40rem] md:mx-auto'>
              Explore inspiring updates, success stories, and industry insights
              from the Fashion Future Program. Stay informed about how we’re
              shaping the future of fashion in Nigeria and beyond.
            </p>
            <div className='flex justify-center'>
              <Button
                className='text-sm px-6 py-2 md:text-base md:px-8 md:py-3'
                variant='primary'>
                Join the Program
              </Button>
            </div>
          </div>
        </ImageBackground>
      </div>

			<Image className='w-screen' src={Divider} alt='divider' />

      <div className=' container mx-auto py-[5rem]'>
      <div className="flex  flex-col-reverse lg:flex-row lg:justify-around">
          <Sidebar />
          <div>
            {paginatedBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                linkText={blog.linkText}
                onLinkClick={() => handleReadMoreClick(blog.id)}
                mainImageSrc={blog.mainImageSrc}
              />
            ))}
              <div className="flex justify-center">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={totalPages}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageLinkClassName={'page-link'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            disabledClassName={'disabled'}
          />
        </div>
          </div>
        </div>

        {/* Pagination */}
      
      </div>
    </>
  );
};

export default Index;
