import {useRouter} from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Film({ details })
{
    const router = useRouter();
    const {url} = router.query;

    return(
        <>
            <Head>
                <title>{details.title}</title>
            </Head>
            <Layout>
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${details.backdrop_path}`} alt=""/>
                <h1>{details.original_title}</h1>
                <p>{details.overview}</p>
                <span>{details.release_date} - {details.status}</span>
            </Layout>
        </>
    );
}

export async function getServerSideProps({ params })
{
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=8e9f5e6fe1f623170093e3f60845f09a&language=en-US`)
        , details = await request.json();

    return {
        props: {
            details
        }
    }
}