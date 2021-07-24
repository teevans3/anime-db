import Link from 'next/link';
import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    Header: {
        fontSize: '4rem',
        padding: '1rem 0',
        textAlign: 'center'
    }
})

const Header = (props) => {
    
    const classes = useStyles();

    return (
        <Grid container>
            <Grid xs={12} className={classes.Header}>
                <Link href="/" passHref >
                    Anime Database
                </Link>
            </Grid>
            {/* add pseudo-"about" section if on home page */}
            {props.home ? 
                <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <Typography variant="h6" align="justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            : null}   
        </Grid>
    )
}

export default Header;