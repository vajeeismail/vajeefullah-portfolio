import Hero from "../../components/Hero/Hero";
import Folio from "../../components/Folio/Folio";

import "./Portfolio.css";

function Portfolio() {
    return (
        <main className="portfolio">

            <div className="container">

                <Hero />

                <Folio title="Software Development">
                    <h3>Project Grid Coming Soon...</h3>
                </Folio>

                <Folio title="Creative Design">
                    <h3>Project Grid Coming Soon...</h3>
                </Folio>

            </div>

        </main>
    );
}

export default Portfolio;