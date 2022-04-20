import {Image, PageLayout} from '../common';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Slider1 from '../../static/img/slider-1.jpg';
import Slider2 from '../../static/img/slider-2.jpg';
import Slider3 from '../../static/img/slider-3.jpg';
import {blogData} from "../../seed/blog";
import {CardView} from "../common/CardView";
import styled from "styled-components";
import {radius} from "../../utils/variables";
import {Helmet} from 'react-helmet-async';

const CustomImage = styled(Image)`
  border-radius: ${radius.small};
`;

export default function Home() {
    return (
        <PageLayout>
            <Helmet>
                <title>Hubiti - هابیتی</title>
                <link rel="canonical" href="https://www.tacobell.com/"/>
            </Helmet>

            <section>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><CustomImage src={Slider1}/></SwiperSlide>
                    <SwiperSlide><CustomImage src={Slider2}/></SwiperSlide>
                    <SwiperSlide><CustomImage src={Slider3}/></SwiperSlide>
                </Swiper>
                <br/>
                <div>
                    {
                        blogData.map((item, index) => (
                            <CardView data={item}/>
                        ))
                    }
                </div>
            </section>
        </PageLayout>
    )
}
