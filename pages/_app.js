import '../styles/globals.css'
import { PageContextProvider } from '../context/PageContext';
import { ErrorContextProvider } from '../context/ErrorContext';

function MyApp({ Component, pageProps }) {
  
  return (
    <ErrorContextProvider>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
    </ErrorContextProvider>

  )
}

export default MyApp
