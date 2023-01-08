import React, {useState} from "react";
import {HiArrowNarrowLeft} from "react-icons/hi";
import {HiArrowNarrowRight} from "react-icons/hi";
import Slide from "./Slide";


const data = [
    {
        id: 1,
        src: "https://i.ibb.co/XszmG02/camera.jpg",
        headline: "DSLR cameras for stunning photos",
        body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
        cta: "Shop DSLR cameras now",
        category: "cameras",
    },
    {
        id: 2,
        src: "https://i.ibb.co/mtc8v16/tv.jpg",
        headline: "Upgrade your home entertainment with our TVs",
        body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
        cta: "Shop TVs and upgrade now",
        category: "tvs",
    },
    {
        id: 3,
        src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
        headline: "Enhance your listening experience",
        body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
        cta: "Experience enhanced sound",
        category: "headphones",
    },
    {
        id: 4,
        src: "https://i.ibb.co/JqxDhvZ/console.jpg",
        headline: "Take your gaming to the next level",
        body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
        cta: "Shop consoles and play now",
        category: "consoles",
    },
    {
        id: 5,
        src: "https://i.ibb.co/YbS7mL2/smart-watches.jpg",
        headline: "Stay connected with smart watches",
        body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
        cta: "Connect with a smart watch",
        category: "smart-watches",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1);
    };

    return (
        <div>
            <div
                style={{transform: `translateX(-${100 * currentSlide}vw)`}}
                className="slider-item relative">
                {data.map((item) => (
                    <div style={{backgroundImage: `url(${item.src})`}} className="slider relative">
                        <Slide item={item}/>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <div className="absolute bottom-10 flex gap-10">
                    <button
                        onClick={prevSlide}
                        className="btn-prev h-12 w-20 flex items-center justify-center bg-[#155263] hover:bg-orange-500 text-white">
                        <span><HiArrowNarrowLeft/></span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="btn-next btn-prev h-12 w-20 flex items-center justify-center bg-[#155263] hover:bg-orange-500 text-white">
                        <span>
                        <HiArrowNarrowRight/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
