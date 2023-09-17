import React from "react";
import Layout from "@/app/Components/layout";
import Head from "next/head";
import About from "../app/Components/About/index";

export default function about({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <About />
    </Layout>
  );
}
