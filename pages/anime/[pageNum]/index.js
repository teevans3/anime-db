import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';

import Header from '../../../components/Header';
import AnimesList from '../../../components/AnimesList';
import PageButtons from '../../../components/PageButtons';
import {query} from '../../../Query';
import {usePage} from '../../../PageContext';


const Index = (props) => {
    const page = usePage();

    useEffect(() => {
        Router.push(`/anime/${page}`)
    }, [page])

    return (
      <div style={{position: 'relative', minHeight: '100vh'}}>
          <Header />
          <AnimesList animes={props.pageData.data.Page.media} />
          <PageButtons pageInfo={props.pageData.data.Page.pageInfo} />
      </div>
    );
    
}

export default Index;

export const getStaticProps = async (context) => {

    // fetch 10 animes on whichever page user is on
    const pageNum = context.params.pageNum;

    let pageData;

    try {
        const res = await fetch(`https://graphql.anilist.co`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({query: query, variables: {page: pageNum, perPage: 10}}),
        });
        pageData = await res.json();
    } catch(error) {
        // TODO...
    }

    return {
        props: {
            pageData
        }
    }
}

export const getStaticPaths = async () => {
    const paths = [];

    try {
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
        for (var i = 0; i < totalPages; i++) {
            paths.push({params: {pageNum: i.toString()}})
        }

    } catch(error) {
        // TODO...
    }

    return {
        paths,
        fallback: false
    }
}
