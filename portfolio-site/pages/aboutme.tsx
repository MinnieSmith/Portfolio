import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'


const AboutMe: NextPage = () => {

  return (
    <ProjectLayout>
      <div className="flex flex-col gap-5">
        Something about myself
      </div>
      <Footer></Footer>
    </ProjectLayout>


  );
};

export default AboutMe
