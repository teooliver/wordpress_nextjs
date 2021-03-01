import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import client from '../apollo/client';
import { GET_MENUS } from '../queries/getMenus';

export default function Home({ headerMenus }) {
  console.log(headerMenus);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Hello Wordpress Graphql</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  if (!loading) {
    console.warn('data', data);
  }

  // const allPostsData = getSortedPostsData()
  return {
    props: {
      headerMenus: data?.headerMenus?.edges,
    },
  };
}
