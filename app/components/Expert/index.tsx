"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Senior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/boyone.svg',
    },
    {
        profession: 'Junior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/girl.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/boytwo.svg',
    },
    {
        profession: 'Junior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/girl.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/girl.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Shoo Thar Mien',
        imgSrc: '/images/Expert/girl.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-10 sm:py-20 bg-darkpink">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>EXPERT CHEFS</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                                Let&apos;s meet the expert.
                            </h3>
                        </Fade>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="gaby" width={362} height={262} className="inline-block m-auto" />
                                        <div className="absolute top-[50%] right-[2%]">
                                            <Image src={'/images/Expert/Linkedin.svg'} alt="linkedin" width={220} height={120} />
                                        </div>
                                    </div>
                                    <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
