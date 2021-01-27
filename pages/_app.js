import "../styles/app.css"
import "tailwindcss/tailwind.css";
import { Provider } from 'next-auth/client'

const App = ({ Component, pageProps }) => {
  const { session } = pageProps
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
