import React from "react";
import Typewriter from "typewriter-effect";
import image from "/images/header.jpg";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with custom settings
AOS.init({
  duration: 1000, // Duration of the animation in milliseconds
  easing: 'ease-in-out', // Easing function for the animation
  once: true, // Whether animation should happen only once or every time you scroll up/down
  offset: 100, // Offset (in px) from the original trigger point
});

const Hero = () => {
  return (
    <div className="hero mt-10 px-4 lg:px-10 z-20">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0 relative"
          data-aos="fade-left" // Custom animation
          data-aos-delay="100" // Delay before animation starts
          data-aos-duration="1000" // Duration of the animation
          data-aos-offset="200" // Offset from the trigger point
        >
          <div className="w-3/4 lg:w-3/4 max-w-xs lg:max-w-lg h-auto lg:h-auto flex items-center justify-center">
            <img
              src={image}
              alt="Hero"
              className="hero-image shadow-2xl w-full h-auto object-cover border-none"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right" // Custom animation
          data-aos-delay="100" // Delay before animation starts
          data-aos-duration="1000" // Duration of the animation
          data-aos-offset="200" // Offset from the trigger point
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Hi, Greetings From Hassan
          </h1>
          <p className="text-2xl lg:text-3xl text-white py-4 font-bold flex gap-2 justify-center lg:justify-start">
            <span className="mr-2">I am a</span>
            <span className="text-blue-700">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Frontend Expert",
                    "Backend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p className="text-lg lg:text-xl text-gray-400 py-4">
            As a well developer, I specialize in crafting sophisticated and
            engaging digital experiences. With a passion for both front-end
            and back-end development, I create solutions that are not only
            functional but also innovative.
          </p>
          <div>
            <button
              className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 text-xl font-medium rounded-[20px] focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
            >
              <a target="_blank" href="https://drive.google.com/file/d/1W839PZWcdUd5v7vhlI3EzqhRbaK99RV4/view?usp=sharing">
                REVIEW RESUME
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
