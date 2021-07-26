import { Typography, Grid, Button } from "@material-ui/core"
import { styled } from "@material-ui/styles"
import Link from 'next/link';

export default function Custom404() {
    return (
      <ErrorContainer container>
        <Typography variant="h2" align="center">500 Error</Typography>
        <Typography variant="subtitle1" align="center">Server-side Error. Please try again later.</Typography>
        <Link href="/" passHref>
          <Button>Go back home</Button>
        </Link>
      </ErrorContainer>
    )
}

const ErrorContainer = styled(Grid)({
  height: 'calc(100vh - 6rem)',
  color: 'white',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h2, & h6': {
    paddingBottom: '1rem'
  },
  '& a': {
    backgroundColor: '#161616',
    color: 'white',
    padding: '1rem',
  }
})