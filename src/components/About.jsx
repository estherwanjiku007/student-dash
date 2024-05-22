import React from 'react';

import programmingImage from "./assets/programmingImage.png";
import dataScienceImage from './assets/DataScienceImage.webp';
import mobileImage from './assets/mobileImage.webp';
import cyberSecurityImage from './assets/CyberSecurityImage.png';

function About() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-10 text-gray-700">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">About VirtuLearn Academy</h2>
                <p className="mb-4">
                    VirtuLearn Academy is a virtual learning platform dedicated to providing high-quality education 
                    to learners worldwide. We offer a wide range of courses designed to meet the needs of students 
                    at every stage of their learning journey.
                </p>
                <p className="mb-4">
                    Our mission is to empower individuals through education, fostering a community of lifelong 
                    learners and driving positive change in the world.
                </p>
                <p className="mb-6">
                    Whether you're a student eager to expand your knowledge, a teacher passionate about 
                    sharing your expertise, or a school owner looking to provide top-notch education 
                    to your community, VirtuLearn Academy has something for you.
                </p>
                <h3 className="text-3xl font-semibold text-blue-500 mb-4">Our Courses</h3>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-xs">
                        <img className="w-32 h-32 mb-3" src={programmingImage} alt="Programming and Software Development" />
                        <h4 className="text-xl font-semibold mb-2 text-center">Programming and Software Development</h4>
                        <p className="text-center">Learn programming languages and software development techniques to build applications and websites.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-xs">
                        <img className="w-32 h-32 mb-3" src={dataScienceImage} alt="Data Science and Machine Learning" />
                        <h4 className="text-xl font-semibold mb-2 text-center">Data Science and Machine Learning</h4>
                        <p className="text-center">Explore data analysis, machine learning algorithms, and data visualization tools.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-xs">
                        <img className="w-32 h-32 mb-3" src={cyberSecurityImage} alt="Cyber Security" />
                        <h4 className="text-xl font-semibold mb-2 text-center">Cyber Security</h4>
                        <p className="text-center">Learn about cybersecurity threats, protection techniques, and ethical hacking.</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-xs">
                        <img className="w-32 h-32 mb-3" src={mobileImage} alt="Mobile Application Development" />
                        <h4 className="text-xl font-semibold mb-2 text-center">Mobile Application Development</h4>
                        <p className="text-center">Master mobile app development for iOS and Android platforms using industry-standard tools and technologies.</p>
                    </div>
                </div>
            </div>
            <footer className='w-full bg-blue-600 text-white py-3 text-center mt-10'>
                <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
