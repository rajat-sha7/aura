import Layout from "@/app/Components/layout";
import TagList from "@/app/Components/CaseStudy/Tags/TagsList";
import Content from "@/app/Components/CaseStudy/ContentSection/Content";
import ImgWithContent from "@/app/Components/CaseStudy/ImgWithContent/ImgWithContent";
import TextSection from "@/app/Components/CaseStudy/OnlyContent/TextSection";
import ImgWithContent2 from "@/app/Components/CaseStudy/ImgWithContent2/ImgWithContent";
import Feedback from "@/app/Components/CaseStudy/Feedback/Feedback";
import ImgWithContent3 from "@/app/Components/CaseStudy/ImgWithContent3/ImgWithContent3";
// import { useRouter } from "next/router";
import ImgWithContent4 from "../../app/Components/CaseStudy/ImgWithContent4/ImgWithContent";

import Head from "next/head";
export default function CaseStudy({ clientData }) {
  // const router = useRouter();
  // const slug = router.query.slug;
  // const portfolioPost = data.find((post) => post.slug === slug);

  return (
    <Layout>
      <Head>
        <title>{`${clientData?.meta?.title}`}</title>
        <meta
          name="description"
          content={`${
            clientData?.meta?.description || clientData?.description
          }`}
        />
      </Head>
      <div className="single-page">
        <TagList data={clientData} />
        {/* <Content data={clientData} /> */}
        {/* <ImgWithContent /> */}
        {/* <ImgWithContent4 /> */}
        {/* <TextSection /> */}
        <ImgWithContent2 />
        <Feedback />
        {/* <ImgWithContent3 /> */}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const clientList = await import(`../../content/clientlist/index.json`);

  const paths = clientList?.clients.map((client) => ({
    params: { slug: client.slug.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const res = await import(`../../content/clientlist/${slug}.json`);
  const clientData = JSON.parse(JSON.stringify(res));

  return { props: { clientData } };
};
