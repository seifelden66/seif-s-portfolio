'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import data from '../data.json'
import Link from "next/link";
const Projects = () => {
    return (
        <div className='projects clip-pentagon h-screen bg-[#181104] flex items-center'>
            <div className='cont' data-aos="fade-in" data-aos-duration="450" data-aos-delay="100">
                <div className='text-6xl text-center'>Projects</div>
                <Carousel showArrows={true} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                    {data.map((i) => (
                        <div key={i.id} className='flex flex-col items-center gap-5'>
                            <h1>{i.title}</h1>
                            <div id="one" className='md:w-[60vw] relative group'>
                                <img src={i.image} alt="image" className='w-full h-96 md:h-[22rem] bg-cover filter group-hover:brightness-[.25] transition cursor-pointer' />
                                <div className="flex">
                                    <div id="two" className="absolute top-[50%] w-full px-3 left-[50%] -translate-x-[50%] text-xl -translate-y-[50%] opacity-0 group-hover:opacity-100 transition grid grid-cols-[2fr,1fr] gap-10 text-white">
                                        <div className="text-left">{i.description}</div>
                                        <div className="flex flex-col gap-6">
                                            <Link className="bg-red-600 hover:bg-red-700 transition rounded p-2" href={i.demo}>LIVE_DEMO</Link>
                                            <Link className="bg-red-600 hover:bg-red-700 transition rounded p-2" href={i.code}>SHOW_CODE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    )
}

export default Projects