import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Left */}

                <div className="footer-left">

                    <p>

                        © {new Date().getFullYear()} Vajeefullah MI.
                        All Rights Reserved

                    </p>

                </div>

                {/* Center */}

                <div className="footer-center">

                    <span>

                        <i className="fas fa-phone-alt"></i>

                        +974 5509 5681

                    </span>

                    <span className="footer-divider">

                        |

                    </span>

                    <span>

                        <i className="fas fa-map-marker-alt"></i>

                        Doha, Qatar

                    </span>

                </div>

                {/* Right */}

                <div className="footer-right">

                    <a
                        href="https://www.linkedin.com/in/vajeefullah"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        href="https://github.com/vajeeismail"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>

                    <a
                        href="https://www.behance.net/vajee"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Behance"
                    >
                        <i className="fab fa-behance"></i>
                    </a>

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <i className="fab fa-tiktok"></i>
                    </a>

                </div>

            </div>

        </footer>

    );

}

export default Footer;