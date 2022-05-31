import type { NextPage } from 'next'
import Footer from '../components/footer'
import React from 'react'
import HomeButton from '../components/homebutton'
import ProjectLayout from '../components/projectslayout'
import Question from '../components/question'
import SourceCode from '../components/sourcecode'
import AppButton from '../components/appbutton'

const GameServer: NextPage = () => {

  return (
      <div className="bg-teal-50 flex w-screen h-screen">
        <title>Tiles Game</title>
        <div className='z-40 top-6 left-2 text-xl md:text-3xl opacity-90 absolute md:top-8 md:left-8 sm:top-8 sm:left-8 sm:text-2xl font-semibold text-white'> gameserver</div>
        <div className='rounded-lg flex-none w-32 sm:w-44 opacity-80 blur-sm md:w-52 relative bg-fixed bg-cover bg-[url("/kyle-nieber-siMO8TWzLYM-unsplash.jpg")]'>
        </div>
        <ProjectLayout>
        <Question title={'Why I built it?'} answer={"This one was for my networks unit project."}></Question>
        <Question title={"What technologies were used?"} answer={"Socket programming with Python and SocketIO"}></Question>
        <Question title={"What was the hardest part?"} answer={"Understanding the concepts behind socket programming and researching to build a multiplayer game server from scratch. Also, the code for the game itself was written by someone else, so it took a lot of time to pick up half way through and figure out the logic and intentions of their code."}></Question>
        <Question title={"What was the most rewarding part?"} answer={'It required a lot of problem solving, so the "ahah" moment was pretty sweet'}></Question>
        <Question title={"What did I learn?"} answer={"That I can build a socket game server from scratch in three weeks!"}></Question>
        <Question title={"What I would like to improve?"} answer={'To add more features, like player rankings and actually host it!'}></Question>
        <div className='lg:m-10 lg:p-5 sm:m-6 sm:p-3 mb:m-4 mb:p-2'>
          <img className="grow mb:mx-auto rounded-lg" src="/tiles.png"/>
        </div>
        <div className='text-center'>
            <SourceCode url={'https://github.com/MinnieSmith/CITS3002-Project'}></SourceCode>
        </div>
            <Footer/>
        </ProjectLayout> 
      </div>   

  );
};

export default GameServer
