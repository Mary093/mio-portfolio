import { Outlet, NavLink } from "react-router-dom";
import './Layout.css';

interface LayoutProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export default function Layout({ theme, toggleTheme }: LayoutProps) {

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
        isActive ? "nav-link active" : "nav-link";

    return (
        <div className={`layout-container ${theme}`}>

            <nav className="navbar">
                <div className="nav-links">
                    <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
                    <NavLink to="/about" className={getNavLinkClass}>Dal Tessuto al Codice</NavLink>
                    <NavLink to="/portfolio" className={getNavLinkClass}>Sviluppo & Competenze</NavLink>
                    <NavLink to="/roadmap" className={getNavLinkClass}>Obettivi & Crescita</NavLink>
                </div>

                <button onClick={toggleTheme} className="theme-btn">
                    Tema {theme === 'light' ? 'Scuro' : 'Chiaro'}
                </button>

            </nav>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/maria-simone-a97a8089/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ marginRight: '8px', verticalAlign: 'middle' }}
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                    <span className="separator">|</span>
                    <a
                        href="mailto:maria.simone93@gmail.com"
                        className="social-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ marginRight: '8px', verticalAlign: 'middle' }}
                        >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm5.377 2.738l-5.354-6.324-1.034 1.22 6.388 7.544 6.388-7.544-1.034-1.22-5.354 6.324zm5.377-2.738l4.623-5.462v11.174l-4.623-5.712z" />
                        </svg>
                        Email
                    </a>
                </div>
                <p>© 2026 Il Mio Portfolio React</p>
            </footer>
        </div>
    );
}