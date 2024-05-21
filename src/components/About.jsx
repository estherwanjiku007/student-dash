import React from 'react';

import programmingImage from "./assets/programmingImage.png";
import dataScienceImage from './assets/DataScienceImage.webp';
import mobileImage from './assets/mobileImage.webp';
import cyberSecurityImage from './assets/CyberSecurityImage.png';
// import virtualImage from './assets/virtualImage.jpg'

function About() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-contain bg-center bg-repeat-x p-5 text-[#0b0505]">
            <div class="text-center max-w-800">
                <h2>About VirtuLearn Academy</h2>
                <p className="text-center max-w-[800px]">
                    VirtuLearn Academy is a virtual learning platform dedicated to providing high-quality education 
                    to learners worldwide. We offer a wide range of courses designed to meet the needs of students 
                    at every stage of their learning journey.
                </p>
                <p className="paragraph-text">
                    Our mission is to empower individuals through education, fostering a community of lifelong 
                    learners and driving positive change in the world.
                </p>
                <p className="paragraph-text">
                    Whether you're a student eager to expand your knowledge, a teacher passionate about 
                    sharing your expertise, or a school owner looking to provide top-notch education 
                    to your community, VirtuLearn Academy has something for you.
                </p>
                <h3>Our Courses</h3>
                <div className="flex flex-wrap justify-center">
                    <div className="course">
                        <img src={programmingImage} alt="Programming and Software Development" />
                        <div>
                            <h4>Programming and Software Development</h4>
                            <p>Learn programming languages and software development techniques to build applications and websites.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img src={dataScienceImage} alt="Data Science and Machine Learning" />
                        <div>
                            <h4>Data Science and Machine Learning</h4>
                            <p>Explore data analysis, machine learning algorithms, and data visualization tools.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img src={cyberSecurityImage} alt="Cyber Security" />
                        <div>
                            <h4>Cyber Security</h4>
                            <p>Learn about cybersecurity threats, protection techniques, and ethical hacking.</p>
                        </div>
                    </div>
                    <div className="w-[calc(50%-20px)] m-2 flex items-center">
                        <img src={mobileImage} alt="Mobile Application Development" />
                        <div>
                            <h4>Mobile Application Development</h4>
                            <p>Master mobile app development for iOS and Android platforms using industry-standard tools and technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-white p-0.5 text-center transition-colors duration-300 ease-in-out'>
                <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
            </div>
        </div>
    );
}

export default About;
