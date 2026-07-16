import "./Folio.css";

function Folio({ title, children }) {
    return (
        <section className="folio">

            <div className="folio-header">

                <h2 className="folio-title">
                    {title}
                </h2>

                <div className="folio-line"></div>

            </div>

            <div className="folio-content">
                {children}
            </div>

        </section>
    );
}

export default Folio;