import React from 'react'
import Layout from '@/app/Components/layout'
import Service from '@/app/Components/Service/Service'
import Head from 'next/head'

export default function index() {
  return (
    <Layout>
    <Head>
      <title>Service</title>
    </Head>
     <Service/>
    </Layout>
  )
}


