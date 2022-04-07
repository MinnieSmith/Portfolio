import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Profile from '../components/profile'
import Footer from '../components/footer'
import Title from '../components/title'
import Layout from '../components/layout'
import Project, {ProjectInterface} from '../components/project'

const Home: NextPage = () => {
  const projectDataArr = [];

  projectDataArr.push(
    {
      title: "Drug Information App",
      desc: "Flask app with user authentication",
      url: "/druginfo",
      image: "/madison-agardi-QNrjcp90tVc-unsplash.jpg",
    }
  );

  projectDataArr.push(
    {
      title: "Burger Builder App",
      desc: "Interactive React burger ordering app",
      url: "",
      image: "/likemeat-CZhehjoDe68-unsplash.jpeg",
    }
  );

  projectDataArr.push(
    {
      title: "Tiles Game Server",
      desc: "A real-time multiplayer socket game server",
      url: "",
      image: "/ella-don-JomkRNkzKhE-unsplash.jpg",
    }
  );

  const projectDataElements = [];

  for (let i = 0; i < projectDataArr.length; i ++) {
    const data = projectDataArr[i];
    const element = <Project {...data} key ={i} />;
    projectDataElements.push(element);
  };


  


  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <Header />
        <Title />
        <Profile />
        <div className="mt-3 flex flex-col gap-3">
          {projectDataElements}
        </div>

        <Footer />
      </div>
    </Layout>


  );
};

export default Home
