import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'


const BurgerApp: NextPage = () => {

  return (
    <ProjectLayout>
      <div className="flex flex-col gap-5">
        Something about my Burger app! What can I say about my burger?
      </div>
      <Footer></Footer>
    </ProjectLayout>


  );
};

export default BurgerApp
