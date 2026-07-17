import "./WhatsappButton.css";

function WhatsappButton() {

    const phone = "97455095681";
    const message = "Hello Vajeefullah, I saw your portfolio and would like to discuss an opportunity.";

    return (

        <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="WhatsApp"
        >

            <div className="whatsapp-icon">

                <i className="fab fa-whatsapp"></i>

            </div>

            <span className="whatsapp-text">

                Text Me

            </span>

        </a>

    );

}

export default WhatsappButton;