import '../styles/global.css'
import { Inter, Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className={oswald.className} />
}

export default MyApp
