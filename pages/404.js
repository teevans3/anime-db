import Header from '../components/Header';
import { Typography, Grid } from '@material-ui/core';

export default function Custom404() {
    return (
        <Grid container>
            <Header />
            <Typography variant="h4" align="center">404 - Page Not Found</Typography>
        </Grid>
    )
}