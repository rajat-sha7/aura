
import Contact from '@/app/Components/Contact';
import Layout from '@/app/Components/layout';
import Head from 'next/head'

export default function contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Contact/>
    </Layout>
  );
}
