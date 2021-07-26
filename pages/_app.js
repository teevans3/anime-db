import '../styles/globals.css'
import { PageContextProvider } from '../context/PageContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
    </Layout>
  )
}

export default MyApp
