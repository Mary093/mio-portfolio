import './Portfolio.css';
import { useState, useEffect } from 'react';

interface GithubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
}

export default function Portfolio() {
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const skills = [
        "HTML5 & CSS3", "JavaScript", "TypeScript", "React", "Angular",
        "React Native", "PHP & Laravel", "Java", "Python", "SQL / Database",
        "Git & GitHub", "UX-UI Design"
    ];

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Mary093/repos?sort=updated&per_page=4');
                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError('Impossibile caricare i progetti al momento');
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <>
            <div className="portfolio-bg-layer animate-page"></div>
            <div className='page-container animate-page'>
                <section className='portfolio-intro'>
                    <h1 className="page-title">Sviluppo & Competenze</h1>

                    <div className='its-card glass-effect glass-effect--blur-md'>
                        <h2>Formazione Tecnica & ITS</h2>
                        <p>
                            Attualmente sto frequentando un corso ITS (Istituto Tecnico Superiore) focalizzato sullo
                            <strong> Sviluppo Web Frontend</strong> con competenze basi di <strong>Backend</strong>.
                            È un percorso altamente pratico che mi sta permettendo di colmare il divario tra teoria e mondo del lavoro.
                        </p>
                        <p>
                            Durante questo percorso non mi limito a imparare la sintassi dei linguaggi, ma acquisisco una visione d'insieme del progetto software.
                            Mi concentro sulla strutturazione logica delle applicazioni e sulla gestione dell'intero ciclo di vita del prodotto,
                            dalla progettazione dell'interfaccia utente fino al deploy finale.
                        </p>
                    </div>
                </section>

                <section className='skills-section'>
                    <h3>Tecnologie & Strumenti studiati</h3>
                    <div className='skills-grid'>
                        {skills.map((skill, index) => (
                            <div key={index} className='skill-item animate-item'>
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section className='github-section'>
                    <div className='github-card-container glass-effect glass-effect--blur-md'>
                        <h3>I miei ultimi aggiornamenti su GitHub</h3>

                        {loading && <p>Caricamento progetti in corso...</p>}

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {!loading && !error && (
                            <div className='repos-grid'>
                                {repos.map((repo) => (
                                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card glass-effect glass-effect--blur-md animate-item">
                                        <h4>{repo.name}</h4>
                                        <p>{repo.description || "Nessuna descrizione disponibile"}</p>
                                        <div className='repo-footer'>
                                            <span className='repo-lang'> {repo.language || "Code"}</span>
                                        </div>
                                        <span className="card-cta">Vai al codice →</span>
                                    </a>
                                ))}
                            </div>
                        )}


                        <div style={{ marginTop: '30px' }}>
                            <a
                                href="https://github.com/Mary093?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn">
                                Vai al mio profilo completo
                            </a>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
}