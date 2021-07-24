import {useEffect} from 'react';
import Router from 'next/router';
import { CircularProgress } from '@material-ui/core';
import {styled} from '@material-ui/styles';


const Home = () => {
  // want home page to be same as 'anime/1', so default will be spinner until first page is loaded

  useEffect(() => {
    Router.push('/anime/1');
  }, [])

  return (
      <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Spinner size={124} thickness={5}/>
      </div>
  )

}

const Spinner = styled(CircularProgress)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
})

export default Home;
