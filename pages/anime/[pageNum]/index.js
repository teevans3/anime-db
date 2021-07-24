import { useState, useEffect } from 'react';
import Router from 'next/router';

import Header from '../../../components/Header';
import AnimesList from '../../../components/AnimesList';
import PageButtons from '../../../components/PageButtons';
import {query} from '../../../Query';

const Index = (props) => {

    const [currentPage, setCurrentPage] = useState(props.pageData.data.Page.pageInfo.currentPage);

    useEffect(() => {
        Router.push(`/anime/${currentPage}`)
    }, [currentPage])

    return (
      <div style={{position: 'relative', minHeight: '100vh'}}>
          <Header />
          <AnimesList animes={props.pageData.data.Page.media} />
          <PageButtons pageInfo={props.pageData.data.Page.pageInfo} setCurrentPage={setCurrentPage} />
      </div>
    );
    
}

export default Index;

export const getStaticProps = async (context) => {

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
    const paths = [];
    for (var i = 0; i < totalPages; i++) {
        paths.push({params: {pageNum: i.toString()}})
    }
    // getting 1620 total pages, but can only access up to page 1619???

    return {
        paths,
        fallback: false
    }
}
