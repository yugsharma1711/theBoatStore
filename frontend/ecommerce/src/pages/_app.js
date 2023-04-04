import '@/styles/globals.css'
import { Layout } from '../../components'
import Context from '../../context/Context'
export default function App({ Component, pageProps }) {
  
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}
