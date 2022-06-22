import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import ProjectLayout from '../components/projectslayout'
import Question from '../components/question';
import SourceCode from '../components/sourcecode';
import AppButton from '../components/appbutton';


const BurgerApp: NextPage = () => {

  return (
    <div className="bg-red-50 flex w-screen h-screen">
      <title>Burger App</title>
      <div className='z-40 top-6 left-6 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-12 sm:top-8 sm:left-12 sm:text-2xl font-semibold text-white'>burgers</div>
      <div className='rounded-lg flex-none w-32 sm:w-44 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/etienne-pauthenet-fbr7RVySrgI-unsplash.jpg")]'>
      </div>
      <ProjectLayout> 
        <Question title={'Why I built it?'} answer={"I was catching on to all the hype about React and after having built the previous project with Flask, I can understand the hype with React!"}></Question>
        <Question title={"What technologies were used?"} answer={"React.js, JavaScript, CSS, and Firebase"}></Question>
        <Question title={"What was the hardest part?"} answer={"Following the very long and detailed videos of the Udemy course. I would have appreciated if it would start with smaller projects like building a simple landing page first."}></Question>
        <Question title={"What was the most rewarding part?"} answer={"It's reactive and interactive! Oh and did I mention I love components!!!"}></Question>
        <Question title={"What did I learn?"} answer={"How much easier it was doing everything with React compared to Flask! Not to mention deploying with Firebase is a dream!"}></Question>
        <Question title={"What I would like to improve?"} answer={'I probably would make it more visually appealing and pick better colours! I would also love to add a few more things to the menu.'}></Question>
        <div className='lg:m-10 lg:p-5 sm:m-6 sm:p-3 mb:m-4 mb:p-2'>
          <img className="grow mb:mx-auto rounded-lg" src="/burgerapp2.png"/>
        </div>
        <div className='text-center'>
            <SourceCode url={'https://github.com/MinnieSmith/oldschoolburgerapp'}></SourceCode>
            <AppButton url={'https://burger-react-app-ef1a4.web.app/'}></AppButton>
        </div>
          <Footer/>
      </ProjectLayout> 
  </div>  
  );
};

export default BurgerApp;
