import Image, { StaticImageData } from 'next/image';
import Button from './ui/Button';

const WhatWeDo: React.FC = () => {
    return (
        <div className="relative md:py-32 py-24 container md:mx-auto px-5 md:px-0">
            <div className="w-full max-w-5xl mx-auto overflow-visible space-y-14">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark-gray text-center my-4 md:my-6 lg:my-8">
                    Our Impact, Your Future
                </h1>
                <p className="text-center text-dark-gray text-base md:text-lg lg:text-2xl max-w-[90%] md:max-w-[40rem] my-4 md:my-5 lg:my-6 mx-auto">
                    Our programs are carefully crafted to meet the needs of aspiring fashion designers, artisans, and entrepreneurs—empowering them to succeed and contribute to the future of fashion.
                </p>

                {/* Card Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Card 1 */}
                    <div className="border bg-[#FFFBF5] border-bright-orange rounded-2xl p-6 space-y-2">
                        <h2 className="font-bold text-dark-gray text-lg">
                            Master the Craft: Expert-Led Skills Training
                        </h2>
                        <p className="font-medium text-sm text-swiper-gray">
                            Provide training in key areas of fashion, including garment
                            making, shoemaking, and leatherworks. Using the National Skills
                            Qualification Framework (NSQF) curriculum, our program is designed
                            to provide participants with the technical skills and hands-on
                            apprenticeship experience to standardize local fashion skills.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border bg-[#FFFBF5] border-bright-orange rounded-2xl p-6 space-y-2">
                        <h2 className="font-bold text-dark-gray text-lg">
                            Empowering Communities: Driving Local Development
                        </h2>
                        <p className="font-medium text-sm text-swiper-gray">
                            Our mission is to uplift local communities by nurturing homegrown talent and supporting sustainable fashion production. Through strategic partnerships and access to resources, we are driving job creation and supporting MSMEs to scale and compete in the industry.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border bg-[#FFFBF5] border-bright-orange rounded-2xl p-6 space-y-2">
                        <h2 className="font-bold text-dark-gray text-lg">
                            Shaping the Future: Advocating
                            for Policy Change
                        </h2>
                        <p className="font-medium text-sm text-swiper-gray">
                            We actively work to influence policies that foster the growth of the fashion industry in Nigeria and beyond. Through strategic partnerships with industry leaders and key stakeholders, we advocate for an ecosystem where fashion MSMEs are empowered to innovate, scale, and succeed on a global stage.
                        </p>
                    </div>
                </div>

                {/* Button Section */}
                <div className="flex justify-center mt-4 gap-x-4">
                    <Button
                        className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
                        variant="secondary"
                    >
                        Learn More
                    </Button>
                    <Button
                        className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
                        variant="primary"
                    >
                        Discover Our Programs
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
