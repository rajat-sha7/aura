import Layout from "@/app/Components/layout";
import Head from "next/head";
import Blog from "@/app/Components/Blog/Blog";


export default function blog({ blogPost }) {
  return (
    <Layout>
      <Head>
        <title>{`${blogPost?.meta?.title || blogPost?.title}`}</title>
        <meta
          name="description"
          content={`${blogPost?.meta?.description || blogPost?.description}`}
        />
      </Head>
      <div className="single-page">
        <Blog data={blogPost} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const BlogList = await import(`../../content/blog/index.json`);

  const paths = BlogList?.blog?.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const res = await import(`../../content/blog/${slug}.json`);
  const blogPost = JSON.parse(JSON.stringify(res));

  return { props: { blogPost } };
};
