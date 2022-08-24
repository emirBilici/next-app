import Head from 'next/head';
import Layout from "../components/layout";
import Movies from "../components/movies";

export default function Home({ movies }) {
  return (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <Movies type="popular" data={movies} />
        </Layout>
    </>
  )
}

export async function getStaticProps()
{
    const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8e9f5e6fe1f623170093e3f60845f09a&language=en-US&page=1"
        , request = await fetch(apiUrl)
        , movies = await request.json();

    return {
        props: {
            movies
        }
    }
}