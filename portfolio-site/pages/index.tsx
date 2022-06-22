import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Profile from '../components/profile'
import Footer from '../components/footer'
import Title from '../components/title'
import Layout from '../components/layout'
import Project, { ProjectInterface } from '../components/project'
import ProjectBlock from '../components/projectblock'

const Home: NextPage = () => {
  return (
    <div className="bg-fixed bg-cover bg-[url('/ecobeach.jpeg')]">
      <title>Minhimoo</title>
      <Layout>
        <Header />
        <Title />
        <Profile />
        <ProjectBlock/>
        <Footer />
      </Layout>
    </div>

  );
};

export default Home;
