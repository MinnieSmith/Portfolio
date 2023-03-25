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
import AppButton from '../components/appbutton'

const Tooti: NextPage = () => {


  return (
    <div className="bg-amber-50 flex w-screen h-screen">
      <title>Tooti</title>
      <div className='z-40 top-6 left-4 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-10 sm:top-8 sm:left-10 sm:text-2xl font-semibold text-white'> Tooti </div>
      <div className='rounded-lg flex-none w-32 sm:w-44 md:w-52 relative bg-fixed bg-cover bg-[url("/Tooti_side.png")]'>
      </div>
      <ProjectLayout>
        <Question title={'Why I built it?'} answer={"This was our final uni project. We had a real client and had to work with them over 10 weeks to build an dental chatbot educational app, that will help the dentist gauge dental health status, promote good dental hygeine and interest in teeth and to make going to the dentist less scary. "}></Question>
        <Question title={"What technologies were used?"} answer={"NextJS(react), TailwindCss, OpenAI API, FastAPI, vercel and lambda function."}></Question>
        <Question title={"What was the hardest part?"} answer={"Debugging lambda functions"}></Question>
        <Question title={"What was the most rewarding part?"} answer={"Producing a working app that meet all of client's expection within 10 weeks."}></Question>
        <Question title={"What did I learn?"} answer={"The challenges of navigiting a team with varying technical knowledge and capabilities and managing client expections."}></Question>
        <Question title={"What I would like to improve?"} answer={"I would like to improve the firebase sign in functions and use a database to store responses, upgrade to GTP-4 engine, and also make more quizzes."}></Question>
        <div className='text-center'>
            <AppButton url={'https://live-project.vercel.app/user_profile'}></AppButton>
        </div>
        <Footer />
      </ProjectLayout>
    </div>
  );
};

export default Tooti
