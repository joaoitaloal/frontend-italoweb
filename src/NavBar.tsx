import { Link, Outlet } from "react-router-dom";

function NavBar(){
    return(
        <>
            <nav>
                <Link to='home'>main</Link> <br/>
                <Link to='test'>test</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar