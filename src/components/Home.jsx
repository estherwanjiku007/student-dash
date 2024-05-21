import React, { useState, useEffect } from 'react';
import firstImg from './assets/firstimg_1_1200x780.jpg';
import secondImg from './assets/secondimg_1_1200x780.jpg';
import thirdImg from './assets/thirdimg_1200x780.jpg';
import fourthImg from './assets/fourthimg_1200x780.jpg';
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react-router-dom'

const programs = ["Software-Engineer", "Cyber-Security", "Data Science", "Computer Science"];

function Home() {
    const slideshow = [
        { src: firstImg, alt: "Software Engineering" },
        { src: secondImg, alt: "Data Science" },
        { src: thirdImg, alt: "Cyber Security" },
        { src: fourthImg, alt: "Computer Science" }
    ];

    const [currentInd, setCurrentInd] = useState(0);
    const [currentProgram, setCurrentProgram] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const nextPic = () => {
            setCurrentInd((prevIndex) => (prevIndex === slideshow.length - 1 ? 0 : prevIndex + 1));
            setCurrentProgram((prevProgram) => (prevProgram + 1) % programs.length);
        };

        const interval = setInterval(nextPic, 2000);
        return () => clearInterval(interval);
    }, [slideshow.length, programs.length]);

    const handleNavigate = () => {
        navigate('/Register');
    };

    return (
        <div className="home-content flex flex-col items-center p-0 h-screen">
            <div className="relative w-full h-full overflow-hidden">
                {slideshow.map((image, index) => (
                    <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentInd === index ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                        <img
                            className="w-full h-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                            <h1 className="text-center text-3xl font-bold mb-4">
                                Ask Around and Find Out <br />
                                that we are the Best <br /> School in Town.
                            </h1>
                            <h2 className="text-3xl font-bold text-gray-200">Our Programs: {programs[currentProgram]}</h2>
                            <button className="bg-transparent border-4 border-orangered text-white py-2 px-4 rounded-md mt-4" onClick={handleNavigate}>
                                Join Us
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
