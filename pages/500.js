import Header from '../components/Header';
import { Typography, Grid } from '@material-ui/core';

export default function Custom500() {
    return (
        <Grid container>
            <Header />
            <Typography variant="h4" align="center">500 - Internal Server Error</Typography>
        </Grid>
    )
}