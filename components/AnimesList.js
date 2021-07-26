import React, {useState} from 'react';
import Image from 'next/image';
import {Grid, Hidden, Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import {styled} from '@material-ui/core/styles';

import Spinner from './Spinner';

const AnimesList = (props) => {

    const [displayDialog, setDisplayDialog] = useState(false);
    const [currentAnimeInfo, setCurrentAnimeInfo] = useState(null);
    
    // function for displaying clicked anime Info (popup/dialog/modal)
    const dialogHandler = (animeInfo) => {
        setDisplayDialog(true);
        setCurrentAnimeInfo(animeInfo);
    }

    const animesList = props.animes.map((ani, index) => {
        return (
            <React.Fragment key={ani.id}>
                {index === 0 || index === 5 ? 
                    <Hidden mdDown>
                        <Grid item lg={1} />
                    </Hidden>
                : null}               
                <AnimeImg item lg={2} md={6} onClick={() => dialogHandler(ani)} title={ani.title.english || ani.title.romaji || ani.title.native}>
                    <Image src={ani.coverImage.extraLarge} alt={ani.title.english || ani.title.romaji || ani.title.native} width={600} height={800} />
                </AnimeImg>
                {index === 4 || index === 9 ? 
                    <Hidden mdDown>
                        <Grid item lg={1}/>
                    </Hidden>
                : null}
            </React.Fragment>
            
        )
    });

    return (
        <ListContainer>
            <Dialog open={displayDialog} onClose={() => setDisplayDialog(false)}>
                {!currentAnimeInfo
                ? 
                    <Spinner />
                :
                    <>
                    <Image src={currentAnimeInfo.coverImage.extraLarge} alt={currentAnimeInfo.title.english || currentAnimeInfo.title.romaji || currentAnimeInfo.title.native} width={400} height={600} />
                    <AnimeTitle>{currentAnimeInfo.title.english || currentAnimeInfo.title.romaji || currentAnimeInfo.title.native}</AnimeTitle>
                    <AnimeDescription>
                        <DialogContentText>
                            {currentAnimeInfo.description || "No description."}
                        </DialogContentText>
                    </AnimeDescription>
                    </>
                }
            </Dialog>
            <Grid container spacing={2}>
                {animesList}
            </Grid>
        </ListContainer>
    )
}

export default AnimesList;

const ListContainer = styled(Grid)({
    padding: '2rem 0',
    width: '100%',
    minHeight: 'calc(100vh - 10rem)',
    '@media (max-width: 1279px)': {
        padding: '2rem 4rem 2rem 4rem'
    }
});

const AnimeTitle = styled(DialogTitle)({
    backgroundColor: '#161616',
    color: 'white',
    fontFamily: 'Georgia, sans-serif',
})

const AnimeDescription = styled(DialogContent)({
    backgroundColor: '#1f1f1f',
    overflow: 'auto',
    '& p': {
        color: 'white',
    }
})

const AnimeImg = styled(Grid)({
    boxSizing: 'border-box !important',
    '&:hover': {
        cursor: 'pointer',
        '& div': {
            border: '0.2rem solid white',
        }
    },
    '@media (max-width: 1279px)': {
        padding: '2rem',
    },
    '@media (max-width: 960px)': {
        margin: '2rem auto',
    }
})