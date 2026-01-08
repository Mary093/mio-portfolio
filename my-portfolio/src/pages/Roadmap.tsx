import './Roadmap.css';
import { useState } from 'react';

const roadmapData = [
    { id: 1, title: "Approccio React Avanzato", status: "learning", desc: "Creazione di applicazioni web complesse, scalabili e performanti." },
    { id: 2, title: "Approccio Angular Avanzato", status: "planned", desc: "Sviluppo di applicazioni enterprise strutturate e modulari." },
    { id: 3, title: "UX/UI Design Avanzato", status: "planned", desc: "Studio dei principi avanzati per migliorare l'Esperienza Utente & Prototipazione avanzata su Figma." },
];

export default function Roadmap() {
    const [filter, setFilter] = useState<'all' | 'learning' | 'planned'>('all');

    const filteredItems = roadmapData.filter(item => {
        if (filter === 'all') return true;
        return item.status === filter;
    });

    return (
        <>
            <div className="roadmap-bg-layer animate-page"></div>
            <div className='page-container animate-page'>
                <section className='lab-intro'>
                    <h1 className="page-title">Obiettivi & Crescita</h1>

                    <div className="lab-description glass-effect glass-effect--blur-md">
                        <p><strong>L'evoluzione non si ferma mai.</strong><br />
                            In un settore che cambia velocemente, la formazione continua è fondamentale.
                            In questa sezione traccio la rotta del mio futuro professionale, monitorando le tecnologie che sto approfondendo
                            oggi e pianificando le competenze che voglio acquisire domani.
                        </p>
                    </div>
                </section>


                <section className="roadmap-section">
                    <h3 className='section-title-large'>Il mio percorso di studio</h3>
                    <p className='section-subtitle'>Le tecnologie attuali e i prossimi step:</p>

                    <section className="roadmap-controls" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <button onClick={() => setFilter('all')}
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}>Tutti</button>
                        <button onClick={() => setFilter('learning')}
                            className={`filter-btn ${filter === 'learning' ? 'active' : ''}`}>In corso</button>
                        <button
                            onClick={() => setFilter('planned')}
                            className={`filter-btn ${filter === 'planned' ? 'active' : ''}`}>Futuro</button>
                    </section>

                    <div className="roadmap-grid">
                        {filteredItems.map(item => (
                            <div key={item.id} className="roadmap-item glass-effect glass-effect--blur-md animate-item">
                                <span className={`status-dot ${item.status}`}>
                                    {item.status === 'learning' ? 'In Corso' : 'Futuro'}
                                </span>
                                <h4>{item.title}</h4>
                                {item.desc && <p>{item.desc}</p>}
                            </div>
                        ))}
                        {filteredItems.length === 0 && <p>Nessun elemento trovato per questa categoria.</p>}
                    </div>
                </section>

                <section className="learning-section">
                    <h3>Certificazioni & Corsi</h3>
                    <div className="courses-card glass-effect glass-effect--blur-md">
                        <ul className="courses-list">

                            <li className="course-item animate-item">
                                <div className="course-details">
                                    <strong>Adobe Photoshop Base</strong>
                                    <span className="course-provider">Corso IFOA (E-learning - 4 ore)</span>
                                    <p className="course-desc">Fondamenti di fotoritocco e gestione immagini digitali</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}