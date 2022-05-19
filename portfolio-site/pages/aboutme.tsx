import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import BlogBlock from '../components/blogblock';


const AboutMe: NextPage = () => {

  return (
      <div className="bg-amber-50 flex w-screen h-screen">
        <div className='z-40 md:text-3xl opacity-80 absolute top-8 left-10 text-2xl font-semibold text-slate-600'> about me</div>
        <div className='rounded-lg flex-none w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/fields.jpeg")]'>
        </div>
        <ProjectLayout>
            <BlogBlock/>
        </ProjectLayout> 
      </div>    
  );
};

export default AboutMe
