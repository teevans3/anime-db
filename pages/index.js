import Link from 'next/link';

import AnimesList from '../components/AnimesList';
import Header from '../components/Header';


const Home = ({pageData}) => {
  return (
    <div>
      <Header home/>
      <AnimesList animes={pageData.data.Page.media} pagination={pageData.data.Page.pageInfo} />
    </div>
  )

}

export default Home;

var query = `
  query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media (type: ANIME) {
        id
        title {
          english
          romaji
          native
        }
        description
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

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