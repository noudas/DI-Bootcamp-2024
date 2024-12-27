import { Link } from "react-router";

const Navigation = () =>{
    return(
        <>
        <header>
            <nav>
                <Link to={"/Mountain"}>Mountain</Link>
                <Link to={"/Beaches"}>Beaches</Link>
                <Link to={"/Birds"}>Birds</Link>
                <Link to={"/Food"}>Food</Link>
            </nav>
        </header>
        </>
    )
}

export default Navigation;