import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'


const AboutMe: NextPage = () => {

  return (
    <div bg-red-200>
      <ProjectLayout>
        <div className="flex flex-col gap-5">
          Something about myself
        </div>
        <Footer></Footer>
      </ProjectLayout>      
    </div>



  );
};

export default AboutMe
