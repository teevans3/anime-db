import React from 'react'
import {Grid, Typography} from '@material-ui/core'

const Header = (props) => {
    return (
        <Grid container>
            <Typography variant="h2" align="center" gutterBottom >Anime Database</Typography>
            {/* add pseudo-"about" section if on home page */}
            {props.home ? 
                <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <Typography variant="subtitle1">
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