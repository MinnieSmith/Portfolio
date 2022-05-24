import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import HomeButton from '../components/homebutton'
import ProjectLayout from '../components/projectslayout'

const GameServer: NextPage = () => {

  return (
      <div className="bg-indigo-50 flex w-screen h-screen">
        <div className='z-40 top-6 left-2 text-xl md:text-3xl opacity-80 absolute md:top-8 md:left-8 sm:top-8 sm:left-8 sm:text-2xl font-semibold text-white'> gameserver</div>
        <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/javier-martinez-hUD0PUczwJQ-unsplash.jpg")]'>
        </div>
        <ProjectLayout>
            <Footer/>
        </ProjectLayout> 
      </div>   

  );
};

export default GameServer
