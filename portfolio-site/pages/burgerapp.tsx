import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'


const BurgerApp: NextPage = () => {

  return (
    <div className="bg-indigo-50 flex w-screen h-screen">
      <div className='z-40 top-6 left-6 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-12 sm:top-8 sm:left-12 sm:text-2xl font-semibold text-white'>burgers</div>
      <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/etienne-pauthenet-fbr7RVySrgI-unsplash.jpg")]'>
      </div>
      <ProjectLayout> 
          <Footer/>
      </ProjectLayout> 
  </div>  
  );
};

export default BurgerApp
