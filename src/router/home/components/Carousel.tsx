// src/Carousel.js

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image0 from "@/assets/images/slides/000.png";
import image1 from "@/assets/images/slides/001.png";
import image2 from "@/assets/images/slides/002.png";
import image3 from "@/assets/images/slides/003.png";
import image4 from "@/assets/images/slides/004.png";
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (_current: any, next: any) => setCurrentSlide(next),
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1100, // Medium screen size breakpoint (e.g., 768px)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode for smaller screens if desired
                },
            },
            // You can add more breakpoints if needed
        ],
    };

    const cards = [
        { id: 1, content: image0 },
        { id: 2, content: image1 },
        { id: 3, content: image2 },
        { id: 4, content: image3 },
        { id: 5, content: image4 },
    ];

    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={card.id} className="p-4">
                        <div
                            className={`p-6 roundg ${
                                currentSlide === index
                                    ? "opacity-100"
                                    : "opacity-50"
                            } transition-opacity duration-300 ease-in-out flex items-center justify-center`}
                        >
                            <img src={card.content} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
