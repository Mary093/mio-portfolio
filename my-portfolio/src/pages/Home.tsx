import { Link } from "react-router-dom";
import './Home.css';

interface HomeProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export default function Home({ theme, toggleTheme }: HomeProps) {
    return (
        <div className={`home-wrapper ${theme} animate-page`}>

            <div className="home-bg-layer"></div>

            <button onClick={toggleTheme} className="theme-btn fixed-top-right">
                Tema {theme === 'light' ? 'Scuro' : 'Chiaro'}
            </button>

            <h1 className="main-title">Maria Simone | Junior Web Developer</h1>
            <div className="intro-text glass-effect">
                <p>
                    Benvenuti nel mio portfolio digitale. Qui racconto la mia metamorfosi professionale:
                    un percorso che unisce la creatività e la cura del dettaglio del <strong>Fashion Design </strong>
                    alla logica strutturata dello <strong>Sviluppo Web</strong>.
                    Esplora le mie radici, il mio codice e i miei obiettivi futuri.
                </p>
            </div>

            <div className="cards-container">
                <Link to="/about" className="nav-card glass-effect">
                    <h2>Dal Tessuto al Codice</h2>
                    <p>Come 10 anni di esperienza nella moda hanno plasmato le mie Soft Skills e il mio approccio al design</p>
                </Link>

                <Link to="/portfolio" className="nav-card glass-effect">
                    <h2>Sviluppo & Competenze</h2>
                    <p>Il percorso in ITS, i progetti su GitHub e le tecnologie che utilizzo per costruire il web</p>
                </Link>

                <Link to="/roadmap" className="nav-card glass-effect">
                    <h2>Obiettivi & Crescita</h2>
                    <p>La mia mappa di crescita: dagli approfondimenti su React e Angular alle prossime sfide UX/UI</p>
                </Link>
            </div>
        </div>

    )
};
