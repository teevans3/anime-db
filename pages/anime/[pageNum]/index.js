import { useEffect, useState } from 'react';
import Router from 'next/router';

import AnimesList from '../../../components/AnimesList';
import PageButtons from '../../../components/PageButtons';
import {query} from '../../../Query';
import {usePage} from '../../../context/PageContext';
import Spinner from '../../../components/Spinner';


const Index = (props) => {
    
    const page = usePage();
    const [loading, setLoading] = useState(false);

    // when page context changes, change the page (media items will change)
    useEffect(() => {
        setLoading(true);
        Router.push(`/anime/${page}`)
            .then(() => {
                setLoading(false);
            })
            
    }, [page])

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <AnimesList animes={props.media} />
            <PageButtons pageInfo={props.pageInfo} />
        </>
    )
    
}

export default Index;

export const getStaticProps = async (context) => {

    // fetch 10 animes on whichever page user is on
    const pageNum = context.params.pageNum;

    let animeData;
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
        const resData = await res.json();
        animeData = resData.data.Page.media;
        pageData = resData.data.Page.pageInfo;
    } catch(err) {
        animeData = [];
        pageData = {};
    }

    return {
        props: {
            media: animeData,
            pageInfo: pageData
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
            fallback: false,
        }
    }

    return {
        paths: paths,
        fallback: false,
    }
}
