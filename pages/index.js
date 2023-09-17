
import Homepage from "../app/Components/Homepage2/index"
import Layout from '@/app/Components/layout'
import Head from 'next/head'

export default function Home({ Component, pageProps }) {
  return (
    // <Layout>
    //   <main className="main">
    //     <Head>
    //       <title>Homepage</title>
    //     </Head>
    //     <section >
    //       <HeroSection />
    //       <StartupList />
    //       <Work />
    //       <Consultant />
    //       <Service />
    //       <CounterBox />
    //       <WhySection />
    //     </section>
    //     <Slider />
    //     <Award />
    //     <Community />
    //     <Meating />
    //   </main>
    // </Layout>
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Homepage/>
    </Layout>
  );
}


