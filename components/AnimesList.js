import React from 'react'
import Image from 'next/image';

import Pagination from './Pagination';

export const AnimesList = (props) => {
    const animesList = props.animes.map((ani, index) => {
        return (
            <div key={ani.id}>
                <div >
                    <Image src={ani.coverImage.extraLarge} alt={ani.title.english} width={300} height={400} />
                    <h4>{ani.title.english}</h4>
                    <p>{ani.description}</p>
                </div>
            </div>
            
        )
    });

    return (
        <>
            <div>
                {animesList}
            </div>
            <Pagination pageInfo={props.pagination}/>
        </>
    )
}

export default AnimesList;