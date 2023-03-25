import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import BlogBlock from '../components/blogblock'
import Image from "next/image";


const AboutMe: NextPage = () => {

  return (
    <div className="bg-red-50 flex w-screen h-screen">
      <title>About Me</title>
      <div className='z-40 top-6 left-4 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-10 sm:top-8 sm:left-10 sm:text-2xl font-semibold text-white'> about me</div>
      <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52'>
      <Image src={"/gantheume.jpeg"} width={250} height={1500} layout="responsive" alt="The furbabies"/>
      </div>
      <ProjectLayout>
        <BlogBlock />
        <div className='shadow-xl lg:mt-16 lg:mb-16 lg:ml-40 lg:mr-40 lg:p-5 sm:m-6 sm:p-3 mb:m-4 mb:p-2 opacity-90 bg-sky-50'>
          <Image className="grow mb:mx-auto rounded-lg shadow-xl" src={"/deskdog2.jpeg"} width={600} height={400} layout="responsive" alt="The furbabies"/>
          <div className='p-2 text-slate-700'>
            <figcaption>
              The babies while I code this site.
            </figcaption>
          </div>
        </div>
        <Footer />
      </ProjectLayout>
    </div>
  );
};

export default AboutMe;
