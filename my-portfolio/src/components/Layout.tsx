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
                    <NavLink to="/" className={getNavLinkClass} end><span className="desktop-text">Home</span>
                        <div className="mobile-content">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
                            </svg>
                            <span>Home</span>
                        </div></NavLink>
                    <NavLink to="/about" className={getNavLinkClass}><span className="desktop-text">Dal Tessuto al Codice</span>
                        <div className="mobile-content">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                            </svg>
                            <span>Radici</span>
                        </div>
                    </NavLink>
                    <NavLink to="/portfolio" className={getNavLinkClass}><span className="desktop-text">Sviluppo & Competenze</span>
                        <div className="mobile-content">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                            <span>Codice</span>
                        </div>
                    </NavLink>
                    <NavLink to="/roadmap" className={getNavLinkClass}><span className="desktop-text">Obiettivi & Crescita</span>
                        <div className="mobile-content">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4,6L14,4H5V21H7V14H12L12.4,16H22V6H14.4M12,6V8H14V6H12Z" />
                            </svg>
                            <span>Obiettivi</span>
                        </div>
                    </NavLink>
                </div>

                <button onClick={toggleTheme} className="theme-btn desktop-only">
                    Tema {theme === 'light' ? 'Scuro' : 'Chiaro'}
                </button>

            </nav>

            <button onClick={toggleTheme} className="theme-btn mobile-only">
                Tema {theme === 'light' ? 'Scuro' : 'Chiaro'}
            </button>

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