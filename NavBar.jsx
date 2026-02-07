
const NavBar = ({onClickCalendar, onClickHome}) => {

    return (
        <nav className={"nav"}>
            <div className={"navCenter"}>
                You can do anything you put your mind to!
            </div>

            <ul className={"navList"}>
                <li className={"navItem"}>

                <button className="nav-button" onClick={onClickHome}>Home</button>
                </li>
                <li className={"navItem"}>

                <button className="nav-button" onClick={onClickCalendar}>Calendar</button>
                </li>
                <li className={"navItem"}>
                    Photos
                </li>
                <li className={"navItem"}>
                    Videos
                </li>
            </ul>

        </nav>
    )

}

