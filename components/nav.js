export default function Nav() {
    return (
        <div>
            <div className="h-12 fixed w-full z-40" id="nav"></div>
        <div className="2xl:px-64 xl:px-64 lg:px-64 md:px-64 sm:px-32 px-8 py-4 fixed container text-white h-12 w-screen z-50">
            <nav className="flex justify-between mr-128 w-full">
                <div>
                    <a href="#">
                        <h1>
                            <b>Portkit</b>
                        </h1>
                    </a>
                </div>
                <ul className="flex flex-row justify-self-end">
                    <li><a> </a></li>
                    <li><a> </a></li>
                    <li><a> </a></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}