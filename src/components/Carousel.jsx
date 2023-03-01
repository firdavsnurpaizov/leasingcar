import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import styles from './Carousel.module.scss'

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        className: "carousel",
        dotsClass: "slick-dots red",
    };

    return (
        <div className="container">
                <Slider style={{width: 1200}}  {...settings}>
                    <div>
                        Авто в лизинг для физических лиц
                        Получите машину за 5 дней
                        Оставить заявку
                        <Image
                            src="/carousel/carousel.jpg"
                            width="1200"
                            height="473"
                            alt="logo"
                        />
                    </div>
                    <div>
                        Авто в лизинг для физических лиц
                        Получите машину за 5 дней
                        Оставить заявку
                        <Image
                            src="/carousel/carousel.jpg"
                            width="1200"
                            height="473"
                            alt="logo"
                        />
                    </div>
                    <div>
                        Авто в лизинг для физических лиц
                        Получите машину за 5 дней
                        Оставить заявку
                        <Image
                            src="/carousel/carousel.jpg"
                            width="1200"
                            height="473"
                            alt="logo"
                        />
                    </div>
                    <div>
                        Авто в лизинг для физических лиц
                        Получите машину за 5 дней
                        Оставить заявку
                        <Image
                            src="/carousel/carousel.jpg"
                            width="1200"
                            height="473"
                            alt="logo"
                        />
                    </div>
                </Slider>
        </div>
    );
};
