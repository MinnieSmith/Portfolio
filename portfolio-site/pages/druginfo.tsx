import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import HomeButton from '../components/homebutton'
import First from '../components/question'
import Question, { QuestionInterface } from '../components/question'
import { title } from 'process'
import Link from 'next/link'
import SourceCode from '../components/sourcecode'

const DrugInfo: NextPage = () => {


  return (
    <div className="bg-cyan-50 flex w-screen h-screen">
      <title>Drug Info App</title>
      <div className='z-40 top-6 left-4 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-10 sm:top-8 sm:left-10 sm:text-2xl font-semibold text-white'> drug info</div>
      <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/omid-roshan-lwbNXxRc_c8-unsplash.jpg")]'>
      </div>
      <ProjectLayout>
        <Question title={'Why I built it?'} answer={"This is the first app I've every created. It was my first exposure with fullstack developement through a nanodegree offered by Udacity. This was the final project which I customoised to make it my own drug information app."}></Question>
        <Question title={"What technologies were used?"} answer={"Flask, SQLAlchemy, Oauth user authentication"}></Question>
        <Question title={"What was the hardest part?"} answer={"Configuring the OAuth user login so that it integrated with existing users on the database"}></Question>
        <Question title={"What was the most rewarding part?"} answer={"Seeing it come together, customising it and actually seeing it work!"}></Question>
        <Question title={"What did I learn?"} answer={"To walk before you run!"}></Question>
        <Question title={"What I would like to improve?"} answer={'I would love get this app into production using a more advanced platform and seeing customers actually use it!'}></Question>
        <div className='text-center'>
            <SourceCode url={'https://github.com/MinnieSmith/flaskapp'}></SourceCode> 
        </div>
        <Footer />
      </ProjectLayout>
    </div>
  );
};

export default DrugInfo;
