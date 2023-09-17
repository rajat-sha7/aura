import React from 'react'
import Layout from '@/app/Components/layout';
import Head from 'next/head';
import Thanks from '@/app/Components/Thanks/Thanks';


export default function thanks() {
  return (
    <Layout>
          <Head>
            <title>Thanks for Submitting..</title>
          </Head>
          <Thanks/>
        </Layout>
  )
}

