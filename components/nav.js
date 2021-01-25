export default function Nav() {
    return (
        <div className="mx-64 py-4 fixed container text-white" id="nav">
            <nav className="flex justify-between mr-128">
                <div>
                    <a href="#">
                        <h1>
                            <b>Appfolio</b>
                        </h1>
                    </a>
                </div>
                <ul className="flex flex-row justify-self-end">
                    <li><a>Get started</a></li>
                </ul>
            </nav>
        </div>
    )
}