import Link from 'next/link';

import AnimesList from '../components/AnimesList';
import {query} from '../Query';
import Index from './anime/[pageNum]/index';


const Home = ({pageData}) => {


  return (
    // <div>
    //   <Header home/>
    //   <AnimesList animes={pageData.data.Page.media} pagination={pageData.data.Page.pageInfo} />
    // </div>
    <Index pageData={pageData}/>
  )

}

export default Home;


export const getStaticProps = async () => {
  const res = await fetch(`https://graphql.anilist.co`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: query, variables: {page: 1, perPage: 10}}),
  });
  const pageData = await res.json();

  return {
    props: {
      pageData
    }
  }
}