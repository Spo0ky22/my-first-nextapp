import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '@/public/styles/reset.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
