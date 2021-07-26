import {useEffect} from 'react';
import Router from 'next/router';

import {useUpdatePage} from '../context/PageContext';
import Spinner from '../components/Spinner';


const Home = () => {

  const updatePage = useUpdatePage();

  // want home page to be same as 'anime/1', so default will be spinner until first page is loaded
  useEffect(() => {
    Router.push('/anime/1');
    updatePage(1);
  }, [])


  return <Spinner />

}



export default Home;
