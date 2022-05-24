import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import HomeButton from '../components/homebutton'

const DrugInfo: NextPage = () => {

  return (
    <div className="bg-indigo-50 flex w-screen h-screen">
      <div className='z-40 top-6 left-4 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-10 sm:top-8 sm:left-10 sm:text-2xl font-semibold text-white'> drug info</div>
      <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/omid-roshan-lwbNXxRc_c8-unsplash.jpg")]'>
      </div>
      <ProjectLayout> 
          <Footer/>
      </ProjectLayout> 
  </div>  
  );
};

export default DrugInfo
