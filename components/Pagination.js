import Link from 'next/link';
import {Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    NextButton: {
        fontSize: '2rem',
    },
    PageButtonsContainer: {
        display: 'flex',
        justifyContent: 'center',
    }
})

export const Pagination = (props) => {

    const classes = useStyles();
    
    return (
        <Grid container >
            <Grid item xs={12} className={classes.PageButtonsContainer}>
                {props.pageInfo.currentPage !== 1 ? 
                <Link href="/anime/[pageNum]" as={`/anime/${props.pageInfo.currentPage - 1}`} passHref>
                    <Button className={classes.NextButton}>←</Button>
                </Link>
                : null}
                <Button disabled size="large" className={classes.NextButton} style={{color: 'black'}}>
                    {props.pageInfo.currentPage}
                </Button>
                {props.pageInfo.hasNextPage ? 
                <Link href="/anime/[pageNum]" as={`/anime/${props.pageInfo.currentPage + 1}`} passHref>
                    <Button className={classes.NextButton}>→</Button>
                </Link>
                : null}
            </Grid>
      </Grid>
    )
}

export default Pagination;
