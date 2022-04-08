import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import HomeButton from '../components/homebutton'

const DrugInfo: NextPage = () => {

  return (
    <ProjectLayout>
      <div className="flex flex-col p-5">
        Something about my drug info app
        <Footer />
      </div>
    </ProjectLayout>
  );
};

export default DrugInfo
