import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Profile from '../components/profile'
import Footer from '../components/footer'
import Title from '../components/title'
import Layout from '../components/layout'
import Project, {ProjectInterface} from '../components/project'

const DrugInfo: NextPage = () => {

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        Something about my app
        <Footer />
      </div>
      <div>
          Back
      </div>
    </Layout>


  );
};

export default DrugInfo
