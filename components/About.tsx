import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about2.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            
          </p>
          <p className='py-2 text-gray-600'>
          Hello, I&#39;m Jessadakorn Paopatimakorn, a passionate individual with a profound interest in the realm of technology.  
          Despite not having completed my bachelor&#39;s degree, I have garnered invaluable experiences in the field. 
          My journey commenced with a compelling software engineering internship at the National Biobank of Thailand, offering me insights into impactful projects. 
          Currently, I am engaged in diverse projects at NECTEC, where I&#39;m actively contributing to technological advancements. 
          Welcome to my portfolio, where you can explore my journey and projects.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;