import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import nomadmlImg from '../public/assets/projects/NomadML.png';
import imputationImg from '../public/assets/projects/Imputation.png'
import cassavaImg from '../public/assets/projects/cassava.png'
import connect4Img from '../public/assets/projects/connect4.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='NomadML'
            backgroundImg={nomadmlImg}
            projectUrl='/nomadml'
            tech='Next.js, Nest.js, MongoDB'
          />
          <ProjectItem
            title='Genotype Imputation Platform'
            backgroundImg={imputationImg}
            projectUrl='/imputation'
            tech='Nuxt.js, Django, MongoDB'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={cassavaImg}
            projectUrl='/netflix'
            tech='Vite.js, Django, MongoDB'

          />
          <ProjectItem
            title='Connect4 AI'
            backgroundImg={connect4Img}
            projectUrl='/connect4'
            tech='Python'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;