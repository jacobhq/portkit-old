import Head from 'next/head'
import Nav from '../components/nav'
import { signin, useSession } from 'next-auth/client'

export default function Home() {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Portkit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div className="bg-gray-800 h-full 2xl:px-64 xl:px-64 lg:px-64 md:px-64 sm:px-32 px-8" id="bg-page">
        <div className="h-full flex items-center">
            <div className="relative">
                <h1 className="text-white 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl text-3xl pb-4">Welcome to <br /><b>Portkit</b></h1>
                <p className="text-white">The portfolio site built for the modern web</p>
                <div className="flex">
                    <a href={`/api/auth/signin`} onClick={(e) => {
                e.preventDefault()
                signin()
              }} 
              className="p-3 mt-6 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ring-offset-gray-800">Get started</a>
                    <a href="#for" className="ml-3 p-3 mt-6 bg-gray-700 text-white rounded-lg focus:bg-gray-600 focus:outline-none">Learn more</a>
                </div>
            </div>
        </div>
        <div className="h-max-content py-14" id="for">
            <h1 className="text-gray-800 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl text-3xl pb-4">
                Greetings, we're Portkit. We want <b>everyone</b> to be able to have a <b>professional</b> portfolio.
            </h1>
        </div>
      </div>
    </div>
  )
}
