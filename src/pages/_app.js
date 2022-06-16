import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Slide | Bibbble</title>
      </Head>
    <Header/>
    <Footer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
