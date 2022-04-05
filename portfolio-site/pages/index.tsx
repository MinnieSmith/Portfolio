import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Profile from '../components/profile'
import Footer from '../components/footer'
import Title from '../components/title'
import Layout from '../components/layout'
import Project from '../components/project'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
      <Header/>
      <Title/>
      <Profile/>
      <Project/>
      <Footer/>
      </div>      
    </Layout>


  );
};

export default Home
