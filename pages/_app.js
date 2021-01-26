import "../styles/app.css"
import "tailwindcss/tailwind.css";
import Nav from "../components/nav"

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
