import { Grid, Typography } from "@material-ui/core";

const Error = (props) => {
    return (
        <Grid container>
            <Typography align="center" variant="h3">An error occurred...</Typography>
            <Typography align="center" variant="subtitle1">{props.message}</Typography>
        </Grid>
    )
}

export default Error;