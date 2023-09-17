import Layout from '@/app/Components/layout'
import Portfolio from '@/app/Components/Product/index'
import Head from 'next/head';
import ClientList from '../../content/clientlist/index.json'



export default function portfolio({ Component, pageProps }) {
  return (
    <Layout>
    <Head>
      <title>Portfolio</title>
    </Head>
      <Portfolio data={ClientList}/>
    </Layout>
  );
}