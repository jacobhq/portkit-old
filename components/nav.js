export default function Nav() {
    return (
        <div className="px-64 py-4 fixed container text-white h-12 w-screen z-50" id="nav">
            <nav className="flex justify-between mr-128 w-full">
                <div>
                    <a href="#">
                        <h1>
                            <b>Appfolio</b>
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
    )
}