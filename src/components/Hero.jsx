import React from "react";

const Hero = () => {
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Before they sold out
            <br className='hidden lg:inline-block' />
            readymade gluten
          </h1>
          <p className='mb-8 leading-relaxed'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='https://dummyimage.com/720x600'
          />
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='absolute top-0 -z-10'
      >
        <path
          fill='#0099ff'
          fill-opacity='1'
          d='M0,192L10.9,170.7C21.8,149,44,107,65,106.7C87.3,107,109,149,131,160C152.7,171,175,149,196,154.7C218.2,160,240,192,262,213.3C283.6,235,305,245,327,213.3C349.1,181,371,107,393,96C414.5,85,436,139,458,138.7C480,139,502,85,524,106.7C545.5,128,567,224,589,234.7C610.9,245,633,171,655,128C676.4,85,698,75,720,74.7C741.8,75,764,85,785,90.7C807.3,96,829,96,851,80C872.7,64,895,32,916,64C938.2,96,960,192,982,197.3C1003.6,203,1025,117,1047,85.3C1069.1,53,1091,75,1113,112C1134.5,149,1156,203,1178,208C1200,213,1222,171,1244,160C1265.5,149,1287,171,1309,186.7C1330.9,203,1353,213,1375,197.3C1396.4,181,1418,139,1429,117.3L1440,96L1440,0L1429.1,0C1418.2,0,1396,0,1375,0C1352.7,0,1331,0,1309,0C1287.3,0,1265,0,1244,0C1221.8,0,1200,0,1178,0C1156.4,0,1135,0,1113,0C1090.9,0,1069,0,1047,0C1025.5,0,1004,0,982,0C960,0,938,0,916,0C894.5,0,873,0,851,0C829.1,0,807,0,785,0C763.6,0,742,0,720,0C698.2,0,676,0,655,0C632.7,0,611,0,589,0C567.3,0,545,0,524,0C501.8,0,480,0,458,0C436.4,0,415,0,393,0C370.9,0,349,0,327,0C305.5,0,284,0,262,0C240,0,218,0,196,0C174.5,0,153,0,131,0C109.1,0,87,0,65,0C43.6,0,22,0,11,0L0,0Z'
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
