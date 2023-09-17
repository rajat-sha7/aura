import React from 'react'
import Layout from '@/app/Components/layout';
import Head from 'next/head'
import Homepage2 from "../app/Components/Homepage2/index"

export default function homepage() {
  return (
    <Layout>
    <Head>
      <title>Homepage v2</title>
    </Head>
    <Homepage2/>
  </Layout>
  )
}
