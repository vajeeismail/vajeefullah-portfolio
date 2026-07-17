/* =========================
   Software Projects
========================= */

import techcare from "../assets/projects/Software/TechcareEcommerce/techcare-cover-img.png";
import personal01 from "../assets/projects/Software/PersonalWebsiteTemplate01/personalwebsite01-cover-img.png";
import personal02 from "../assets/projects/Software/PersonalWebsiteTemplate02/personalwebsite02-cover-img.png";
import codenest from "../assets/projects/Software/CodeNest/codenest-cover-img.png";
import tictactoe from "../assets/projects/Software/TicTacToe/tictactoe-cover-img.png";
import accountbook from "../assets/projects/Software/AccountBookUI/accountbook-cover-img.png";
import weatherapp from "../assets/projects/Software/WeatherApp/weatherapp-cover-img.png";
import sorc from "../assets/projects/Software/SROC/sorc-cover-img.png";
import didak from "../assets/projects/Software/DidakPOS/didak-cover-img.png";
import vjcafe from "../assets/projects/Software/VJCafe/vj-cafe-cover-img.png";

/* =========================
   UI / UX Projects
========================= */

import eventManage from "../assets/projects/UIUX/EventManage/event-cover-img.png";
import nmg from "../assets/projects/UIUX/NMG/nmg-cover-img.png";
import travelAgency from "../assets/projects/UIUX/TravelAgencyUIUX/travelagency-cover-img.png";

/* =========================
   Graphic Design Projects
========================= */

import techcareFolio from "../assets/projects/Graphics/TechcareFolio/techcarefolio-cover-img.jpeg";

const projects = [

    {
        id: 1,
        category: "Software",
        title: "Tech Care E-Commerce",
        slug: "tech-care",
        cover: techcare,
        previewType: "website",
        previewLink: "https://shop.techcare.qa/",
        responsive: true
    },

    {
        id: 2,
        category: "Software",
        title: "Personal Website Template 01",
        slug: "personal-website-template-01",
        cover: personal01,
        previewType: "website",
        previewLink: "https://yasthan.netlify.app/",
        responsive: true
    },

    {
        id: 4,
        category: "Software",
        title: "CodeNest",
        slug: "codenest",
        cover: codenest,
        previewType: "website",
        previewLink: "https://codenestsite.netlify.app/",
        responsive: true
    },

    {
        id: 5,
        category: "Software",
        title: "X or O Game",
        slug: "x-or-o-game",
        cover: tictactoe,
        previewType: "website",
        previewLink: "https://x-or-o-game.netlify.app/",
        responsive: true
    },

    {
        id: 3,
        category: "Software",
        title: "Personal Website Template 02",
        slug: "personal-website-template-02",
        cover: personal02,
        previewType: "website",
        previewLink: "https://wajeebullah-portfolio.netlify.app/",
        responsive: false
    },

    {
        id: 6,
        category: "Software",
        title: "Account Book UI",
        slug: "account-book-ui",
        cover: accountbook,
        previewType: "website",
        previewLink: "https://accountbookmrzdeals.netlify.app/",
        responsive: false     
    },

    {
        id: 7,
        category: "Software",
        title: "Weather App",
        slug: "weather-app",
        cover: weatherapp,
        previewType: "website",
        previewLink: "https://weathercondtionchecker.netlify.app/",
        responsive: true    
    },

    {
        id: 8,
        category: "Software",
        title: "SORC",
        slug: "sorc",
        cover: sorc,
        previewType: "github",
        previewLink: "https://github.com/vajeeismail/SORC",
        responsive: true
    },

    {
        id: 9,
        category: "Software",
        title: "Didak POS",
        slug: "didak-pos",
        cover: didak,
        previewType: "website",
        previewLink: "",
        responsive: false
    },

    {
        id: 10,
        category: "Software",
        title: "VJ Cofe & Rooms",
        slug: "vj-cofe-rooms",
        cover: vjcafe,
        previewType: "website",
        previewLink: "https://vjcoffeecafe.netlify.app/",
        responsive: false
    },
    
    /* =========================
        UI / UX Projects
    ========================= */

    {
        id: 11,
        category: "UIUX",
        title: "NGM Automobiles UI",
        slug: "ngm-automobiles-ui",
        cover: nmg,
        previewType: "figma",
        previewLink: "https://www.figma.com/proto/GPh17oFmlxPwIGyAnnR6q9/NGM?node-id=4-5",
        responsive: true
    },
    
    {
        id: 12,
        category: "UIUX",
        title: "Event Management UI",
        slug: "event-management-ui",
        cover: eventManage,
        previewType: "figma",
        previewLink: "https://www.figma.com/proto/rwDiys3MLOLZB73RsgcLLK/Event-Book?node-id=14-974&starting-point-node-id=14%3A720",
        responsive: true
    },

    {
        id: 13,
        category: "UIUX",
        title: "Travel Agency UI / UX",
        slug: "travel-agency-uiux",
        cover: travelAgency,
        previewType: "behance",
        previewLink: "https://www.behance.net/gallery/243834179/UIUX-DESIGN-TRAVEL-AGENCY",
        responsive: true
    },

    /* =========================
    Graphic Design Projects
    ========================= */

    {
        id: 14,
        category: "Graphics",
        title: "Tech Care Company Profile",
        slug: "tech-care-company-profile",
        cover: techcareFolio,
        previewType: "behance",
        previewLink: "https://www.behance.net/gallery/251814923/PORTFOLIO-TECH-CARE-(DESIGN-CONTENT-CREATION)",
        responsive: true
    } 

];



export default projects;