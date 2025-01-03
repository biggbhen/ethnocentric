import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { HiArrowUpLeft, HiArrowUpRight } from 'react-icons/hi2';
import Button from './ui/Button';
import { GoArrowUpRight } from 'react-icons/go';

interface Slide {
    image: StaticImageData;
    altText: string;
    smallTextBelowImage?: string;
    title?: string;
    description: string;
    extraText?: string;
    extraTextEnd?: string;
}

interface SwiperComponentProps {
    slides: Slide[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ slides }) => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="relative py-8 container mx-auto"> 
            <div className="w-full max-w-5xl mx-auto overflow-visible space-y-6"> 
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={30}
                    slidesPerView={1.4}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="h-[450px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col justify-between bg-white rounded-b-xl shadow-md h-[400px] space-y-4"> 
                                <Image
                                    src={slide.image}
                                    alt={slide.altText}
                                   
                                    className="w-full max-h-[150px] rounded-t-xl"
                                />
                                <div className="border-t-0 border border-[#E0E0E0] w-full p-5 flex-grow rounded-b-xl space-y-2"> 
                                    {slide.smallTextBelowImage && (
                                        <p className="text-xs font-bold text-bright-orange">
                                            {slide.smallTextBelowImage}
                                        </p>
                                    )}
                                    {slide.title && (
                                        <p className="text-dark-gray text-lg font-bold">
                                            {slide.title}
                                        </p>
                                    )}
                                    <p className="text-swiper-gray text-sm">{slide.description}</p>
                                    {slide.extraText && (
                                        <p className="text-sm text-[#FFA929] font-medium flex items-center cursor-pointer hover:underline w-fit">{slide.extraText}    <GoArrowUpRight /></p>
                                    )}
                                    {slide.extraTextEnd && (
                                        <p className="text-sm text-[#FFA929] font-medium flex items-center cursor-pointer hover:underline w-fit">{slide.extraText}    <GoArrowUpRight /></p>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center mt-4"> 
                    <Button
                        className="text-sm px-6 py-2 md:text-base md:px-8 md:py-3"
                        variant="primary"
                    >
                        Discover Our Programs
                    </Button>
                </div>
            </div>

            <div className="absolute hidden  top-1/2 w-full -translate-y-1/2 lg:flex justify-between px-[7rem]"> 
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-bright-orange text-white p-3 rounded-full hover:bg-orange-500"
                >
                    <HiArrowUpLeft />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-bright-orange text-white p-3 rounded-full hover:bg-orange-500"
                >
                    <HiArrowUpRight />
                </button>
            </div>
        </div>
    );
};

export default SwiperComponent;
