import '../styles/globals.css'
import { PageContextProvider } from '../PageContext';

function MyApp({ Component, pageProps }) {
  
  return (
    <PageContextProvider>
      <Component {...pageProps} />
    </PageContextProvider>
  )
}

export default MyApp
