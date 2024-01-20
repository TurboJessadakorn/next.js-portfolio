import Image from 'next/image';
import React from 'react';
import nomadmlImg from '../public/assets/projects/NomadML.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const nomadml = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={nomadmlImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>NomadML</h2>
          <h3>Next JS / AntD / Nest JS / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            NomadML is a platform that allows users to effortlessly create machine learning models without any coding skills or extensive knowledge in machine learning. Developed using Next.js for the frontend, Nest.js for the backend, and MongoDB for the database, NomadML offers a seamless experience for users to harness the power of machine learning.
            With NomadML, users can dynamically generate machine learning models using JSON forms integrated into the Next.js frontend. The platform simplifies the model creation process, making it accessible to a wide audience. Additionally, NomadML ensures the security of user data through authentication powered by the Keycloak API.
            NomadML's user-friendly interface allows individuals to build, customize, and deploy machine learning models effortlessly. Say goodbye to complex coding and hello to the future of machine learning with NomadML.
          </p>

          {/* <a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
          <a
            href='https://dev.nomadml.in.th/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 ml-3'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AntD
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JSON Forms
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Keycloak API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default nomadml;
