import React from 'react'
import Image from 'next/image';

export const AnimesList = (props) => {
    return props.animes.map((ani, index) => {
        return (
            <div key={ani.id}>
                <div >
                    <Image src={ani.coverImage.extraLarge} alt={ani.title.english} width={300} height={400} />
                    <h4>{ani.title.english}</h4>
                    <p>{ani.description}</p>
                </div>
            </div>
        )
    })
}

export default AnimesList;