import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    LayoutContainer: {
        backgroundColor: '#eee000',
        maxWidth: '1400px',
        minHeight: '100vh',
        padding: '0 2rem',
        margin: '0 auto',
    }
})

export const Layout = (props) => {

    const classes = useStyles();

    return (
        <Grid className={classes.LayoutContainer}>
            {props.children}
        </Grid>
    )
}

export default Layout;