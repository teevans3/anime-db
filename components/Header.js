import Link from 'next/link';
import {Grid, Typography} from '@material-ui/core'
import {styled} from '@material-ui/core/styles';

const Header = (props) => {
    
    return (
        <Grid container>
            <HeaderContainer item xs={12}>
                <Link href="/" passHref >
                    Anime Database
                </Link>
            </HeaderContainer>
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

const HeaderContainer = styled(Grid)({
    fontSize: '4rem',
    height: '6rem',
    textAlign: 'center'
})