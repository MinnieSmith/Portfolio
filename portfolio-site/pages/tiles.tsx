import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import HomeButton from '../components/homebutton'
import ProjectLayout from '../components/projectslayout'

const GameServer: NextPage = () => {

  return (
    <ProjectLayout>
      <div className="flex flex-col gap-5">
        Something about my Game Server
      </div>
      <Footer />
    </ProjectLayout>


  );
};

export default GameServer
