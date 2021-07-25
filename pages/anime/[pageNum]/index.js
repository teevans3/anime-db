import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';

import Header from '../../../components/Header';
import AnimesList from '../../../components/AnimesList';
import PageButtons from '../../../components/PageButtons';
import Error from '../../../components/Error';
import {query} from '../../../Query';
import {usePage} from '../../../context/PageContext';
import {useError, useUpdateError} from '../../../context/ErrorContext';


const Index = (props) => {
    const page = usePage();

    const error = useError();
    const updateError = useUpdateError();

    // when page context changes, change the page (media items will change)
    useEffect(() => {
        Router.push(`/anime/${page}`)
    }, [page])

    // if error from server side, update error context
    useEffect(() => {
        if (JSON.parse(props.error)) {
            updateError(true)
        }

        // set error to false on cleanup
        return () => {
            updateError(false)
        }
    }, [props])

    return (
      <div style={{position: 'relative', minHeight: '100vh'}}>
          <Header />
          {
          error ? 
            <Error message="Server side error - could not fetch animes. Please try again later." />
          :
            <>
                <AnimesList animes={props.media} />
                <PageButtons pageInfo={props.pageInfo} />
            </>
            }
          
      </div>
    );
    
}

export default Index;

export const getStaticProps = async (context) => {

    // fetch 10 animes on whichever page user is on
    const pageNum = context.params.pageNum;

    let animeData;
    let pageData;
    let error = null;

    try {
        const res = await fetch(`https://graphql.anilist.co`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query: query, variables: {page: pageNum, perPage: 10}}),
        });
        const resData = await res.json();
        animeData = resData.data.Page.media;
        pageData = resData.data.Page.pageInfo;
    } catch(err) {
        error = err;
        animeData = [];
        pageData = {};
    }

    return {
        props: {
            media: animeData,
            pageInfo: pageData,
            error: error
        }
    }
}

export const getStaticPaths = async () => {

    const paths = [];
    let error = null;

    try {
        const res = await fetch(`https://graphql.anilist.co`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({query: query, variables: {perPage: 10}}),
        });
        const resData = await res.json();
        // calculate total pages (with 10 items per page) and create that number of paths
        const totalItems = resData.data.Page.pageInfo.total;
        const totalPages = Math.ceil(totalItems / 10);
        for (var i = 0; i < totalPages; i++) {
            paths.push({params: {pageNum: i.toString()}})
        }
    } catch(err) {
        return {
            paths: paths,
            fallback: false
        }
    }

    return {
        paths: paths,
        fallback: false
    }
}
