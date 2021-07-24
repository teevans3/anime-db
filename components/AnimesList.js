import React, {useState} from 'react';
import Image from 'next/image';
import {Grid, Hidden, Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import {useTheme, styled} from '@material-ui/core/styles';

export const AnimesList = (props) => {
    const theme = useTheme();
    // const classes = useStyles(theme);

    const [displayDialog, setDisplayDialog] = useState(false);
    const [currentAnimeInfo, setCurrentAnimeInfo] = useState(null);
    
    const dialogHandler = (animeInfo) => {
        setDisplayDialog(true);
        setCurrentAnimeInfo(animeInfo);
    }


    const animesList = props.animes.map((ani, index) => {
        return (
            <React.Fragment key={ani.id}>
                {index === 0 || index === 5 ? 
                    <Hidden mdDown>
                        <Grid item lg={1}/>
                    </Hidden>
                : null}
                <AnimeImg item lg={2} md={6}  onClick={() => dialogHandler(ani)}>
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
                    <div>spinner</div>
                :
                    <>
                    <Image src={currentAnimeInfo.coverImage.extraLarge} alt={currentAnimeInfo.title.english || currentAnimeInfo.title.romaji || currentAnimeInfo.title.native} width={400} height={600} />
                    <DialogTitle>{currentAnimeInfo.title.english || currentAnimeInfo.title.romaji || currentAnimeInfo.title.native}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {currentAnimeInfo.description}
                        </DialogContentText>
                    </DialogContent>
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
    minHeight: 'calc(100vh - 4rem)',
    '@media (max-width: 1279px)': {
        padding: '0 4rem 6rem 4rem'
    }
});

const AnimeImg = styled(Grid)({
    '&:hover': {
        cursor: 'pointer'
    },
    '@media (max-width: 1279px)': {
        padding: '2rem',
    }
})