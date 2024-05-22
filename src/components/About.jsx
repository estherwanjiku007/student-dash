import React from 'react';

import programmingImage from "./assets/programmingImage.png";
import dataScienceImage from './assets/DataScienceImage.webp';
import mobileImage from './assets/mobileImage.webp';
import cyberSecurityImage from './assets/CyberSecurityImage.png';
// import virtualImage from './assets/virtualImage.jpg'

function About() {
    return (
        <div className="absolute flex flex-col items-center min-h-screen bg-contain bg-center bg-repeat-x p-5 text-[#0b0505] justify-center">
            <div className="text-center max-w-[800px]">
                <h2>About VirtuLearn Academy</h2>
                <p className="text-center max-w-[800px]">
                    VirtuLearn Academy is a virtual learning platform dedicated to providing high-quality education 
                    to learners worldwide. We offer a wide range of courses designed to meet the needs of students 
                    at every stage of their learning journey.
                </p>
                <p class="paragraph-text">
                    Our mission is to empower individuals through education, fostering a community of lifelong 
                    learners and driving positive change in the world.
                </p>
                <p className="paragraph-text">
                    Whether you're a student eager to expand your knowledge, a teacher passionate about 
                    sharing your expertise, or a school owner looking to provide top-notch education 
                    to your community, VirtuLearn Academy has something for you.
                </p>
                <h3>Our Courses</h3>
                <div className="flex flex-wrap justify-between">
                    <div class="m-2.5 flex items-center w-calc-half-minus-20">
                        <img className="w-[150px] mr-5"src={programmingImage} alt="Programming and Software Development" />
                        <div>
                            <h4 class="text-[20px] mb-2.5">Programming and Software Development</h4>
                            <p class="text-base leading-relaxed">Learn programming languages and software development techniques to build applications and websites.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img className="w-[150px] mr-5"src={dataScienceImage} alt="Data Science and Machine Learning" />
                        <div>
                            <h4 class="text-[20px] mb-2.5">Data Science and Machine Learning</h4>
                            <p class="text-base leading-relaxed">Explore data analysis, machine learning algorithms, and data visualization tools.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img className="w-[150px] mr-5"src={cyberSecurityImage} alt="Cyber Security" />
                        <div>
                            <h4 class="text-[20px] mb-2.5">Cyber Security</h4>
                            <p class="text-base leading-relaxed">Learn about cybersecurity threats, protection techniques, and ethical hacking.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img className="w-[150px] mr-5"src={mobileImage} alt="Mobile Application Development" />
                        <div>
                            <h4 class="text-[20px] mb-2.5">Mobile Application Development</h4>
                            <p class="text-base leading-relaxed">Master mobile app development for iOS and Android platforms using industry-standard tools and technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-white p-0.5 text-center transition-colors duration-300 ease-in-out'>
                <p className='mx-0'>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
            </div>
        </div>
    );
}

export default About;
