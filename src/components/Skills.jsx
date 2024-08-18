import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'remixicon/fonts/remixicon.css';
import 'react-circular-progressbar/dist/styles.css';


const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div  className="flex flex-col items-center justify-center p-6">
        
      <div className="flex mb-6">
        <button
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${activeTab === 'tab1' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('tab1')}
        >
          Frontend
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${activeTab === 'tab2' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('tab2')}
        >
          Backend
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${activeTab === 'tab3' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('tab3')}
        >
          Others
        </button>
      </div>

      {/* Frontend Skills */}
      {activeTab === 'tab1' && (
        <div className="w-full p-6 bg-black backdrop-blur-sm bg-opacity-30 shadow-md rounded-lg">
          <Slider {...settings}>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={90}
                  text={"90%"}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">HTML</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={95}
                  text={`95%`}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">CSS</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={80}
                  text={`80%`}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">JavaScript</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={85}
                  text={`85%`}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={85}
                  text={`85%`}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">React</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={90}
                  text={`90%`}
                  styles={buildStyles({
                    pathColor: 'url(#blue-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Tailwind CSS</p>
            </div>
          </Slider>
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#4682B4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4169E1', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Backend Skills */}
      {activeTab === 'tab2' && (
        <div className="w-full p-6 bg-black backdrop-blur-sm bg-opacity-30 shadow-md rounded-lg">
          <Slider {...settings}>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  styles={buildStyles({
                    pathColor: 'url(#green-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Node.js</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={75}
                  text={"80%"}
                  styles={buildStyles({
                    pathColor: 'url(#green-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Express.js</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={70}
                  text={"70%"}
                  styles={buildStyles({
                    pathColor: 'url(#green-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">MongoDB</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={65}
                  text={"65%"}
                  styles={buildStyles({
                    pathColor: 'url(#green-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Firebase</p>
            </div>
          </Slider>
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#98FB98', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#32CD32', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#228B22', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Others */}
      {activeTab === 'tab3' && (
        <div className="w-full p-6 bg-black backdrop-blur-sm bg-opacity-30 shadow-md rounded-lg">
          <Slider {...settings}>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={85}
                  text={"85%"}
                  styles={buildStyles({
                    pathColor: 'url(#orange-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Git</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={85}
                  text={"85%"}
                  styles={buildStyles({
                    pathColor: 'url(#orange-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">GitHub</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={90}
                  text={"90%"}
                  styles={buildStyles({
                    pathColor: 'url(#orange-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">VS Code</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-34 h-34">
                <CircularProgressbar
                  value={80}
                  text={"80%"}
                  styles={buildStyles({
                    pathColor: 'url(#orange-gradient)',
                    textColor: '#FFFFFF',
                    trailColor: '#4A4A4A',
                    strokeWidth: '8px',
                    textSize: '12px',
                  })}
                />
              </div>
              <p className="mt-2 text-white text-xs">Postman</p>
            </div>
          </Slider>
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Skills;
