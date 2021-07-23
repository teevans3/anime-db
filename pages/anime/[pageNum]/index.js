import Link from 'next/link';

import Header from '../../../components/Header';
import AnimesList from '../../../components/AnimesList';

const index = ({pageData}) => {
    console.log(pageData);
    return (
      <>
          <Header />
          <AnimesList animes={pageData.data.Page.media}/>)
          <div style={{width: '100%', margin: 'auto', display: 'flex', justifyContent: 'center', height: '6rem', alignItems: 'center'}}>
            {pageData.data.Page.pageInfo.currentPage !== 1 ? 
              <Link href="/anime/[pageNum]" as={`/anime/${pageData.data.Page.pageInfo.currentPage - 1}`}>
                Prev
              </Link>
            : null
            }
            <div>{pageData.data.Page.pageInfo.currentPage}</div>
            {pageData.data.Page.pageInfo.hasNextPage ? 
              <Link href="/anime/[pageNum]" as={`/anime/${pageData.data.Page.pageInfo.currentPage + 1}`}>
                Next
              </Link>
            : null
            }
          </div>
      </>
    );
    
}

export default index;

export var query = `
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


export const getStaticProps = async (context) => {
    console.log(context);

    // fetch 10 animes on whichever page user is on
    const pageNum = context.params.pageNum;
    const res = await fetch(`https://graphql.anilist.co`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({query: query, variables: {page: pageNum, perPage: 10}}),
    });
    const pageData = await res.json();

    return {
        props: {
            pageData
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://graphql.anilist.co`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({query: query, variables: {perPage: 10}}),
    });    const resData = await res.json();

    // calculate total pages (with 10 items per page) and create that number of paths
    const totalItems = resData.data.Page.pageInfo.total;
    const totalPages = Math.ceil(totalItems / 10);
    console.log('totalpages: ', totalPages)
    // getting 1620 total pages, but can only access up to page 1619??
    const paths = [];
    for (var i = 0; i < totalPages; i++) {
        paths.push({params: {pageNum: i.toString()}})
    }

    return {
        paths,
        fallback: false
    }
}
