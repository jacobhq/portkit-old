import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="h-full w-full">
      <Nav />
      <div className="bg-gray-800 h-full px-64" id="bg-page">
        <div className="h-full flex items-center">
            <div className="relative">
                <h1 className="text-white text-6xl pb-4">Welcome to <br /><b>Appfolio</b></h1>
                <p className="text-white">The portfolio site built for the modern web</p>
                <div className="flex">
                    <button className="p-3 mt-6 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ring-offset-gray-800">Get started</button>
                    <a href="#for" className="ml-3 p-3 mt-6 bg-gray-700 text-white rounded-lg focus:bg-gray-600 focus:outline-none">Learn more</a>
                </div>
            </div>
        </div>
        <div className="h-full pt-14" id="for">
            <h1 className="text-gray-800 text-6xl pb-4">
                Features for <b className="up">candidates</b>
            </h1>
        </div>
      </div>
    </div>
  )
}
