import Layout from '@/app/Components/layout';
import Head from 'next/head'
import Policy from '@/app/Components/policy/Policy';

export default function policy() {
    return (
        <Layout>
          <Head>
            <title>Privacy Policies</title>
          </Head>
          <Policy/>
        </Layout>
      );
}
