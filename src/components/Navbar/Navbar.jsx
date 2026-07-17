import { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setSticky(window.scrollY > 20);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className={`navbar ${sticky ? "sticky" : ""}`}>

            <ul>

                <li>
                    About Me
                </li>

                <li className="active">
                    Portfolio
                </li>

                <li>
                    Contact
                </li>

            </ul>

        </nav>

    );

}

export default Navbar;