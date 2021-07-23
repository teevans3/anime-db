import Image from 'next/image';
import {Grid, Hidden, Card, CardHeader, CardMedia, CardContent} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles';

import Pagination from './Pagination';

const useStyles = (theme) => makeStyles({
    ListContainer: {
        paddingTop: '2rem',
        [theme.breakpoints.down('md')]: {
            padding: '2rem 6rem'
        }
    },
    Header: {
        height: '4rem',
    },
    Content: {
        height: '12rem',
        overflow: 'auto',
    }
})

export const AnimesList = (props) => {
    
    const theme = useTheme();
    const classes = useStyles(theme);

    const animesList = props.animes.map((ani, index) => {
        return (
            <>
                {index === 0 || index === 5 ? 
                    <Hidden mdDown>
                        <Grid item lg={1}/>
                    </Hidden>
                : null}
                <Grid item lg={2} md={6}>
                    <Card key={ani.id}>
                        <CardMedia>
                            <Image src={ani.coverImage.extraLarge} alt={ani.title.english || ani.title.romaji || ani.title.native} width={600} height={800} />
                        </CardMedia>
                        <CardHeader title={ani.title.english || ani.title.romaji || ani.title.native} className={classes.Header}/>
                        <CardContent className={classes.Content}>
                        {ani.description}
                        </CardContent>
                    </Card>
                </Grid>
                {index === 4 || index === 9 ? 
                    <Hidden mdDown>
                        <Grid item lg={1}/>
                    </Hidden>
                : null}
            </>
            
        )
    });

    return (
        <div className={classes.ListContainer}>
            <Grid container spacing={2}>
                {animesList}
            </Grid>
            <Pagination pageInfo={props.pagination}/>
        </div>
    )
}

export default AnimesList;