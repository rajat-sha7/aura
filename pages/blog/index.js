import Blogs from "@/app/Components/Blogs/Blog";
import React from "react";
import Layout from "@/app/Components/layout";
import Head from "next/head";
import BlogList from "../../content/blog/index.json";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Blogs data={BlogList} />
    </Layout>
  );
}
