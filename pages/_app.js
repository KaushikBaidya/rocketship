import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { AppProvider } from '../context/context'
import Private from '../components/private'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <AppProvider>
        {router.pathname.split('/')[1] !== 'dashboard' ? (
          <div className="max-w-screen-3xl mx-auto">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        ) : (
          <Private>
            <Component {...pageProps} />
          </Private>
        )}
      </AppProvider>
    </QueryClientProvider>
  )
}

export default MyApp
