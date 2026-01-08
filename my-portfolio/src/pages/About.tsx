import './About.css';

const bridgeCardsData = [
    {
        title: "Orientamento al Risultato",
        text: "Nel settore produttivo ho imparato che un progetto non finisce con il design, ma con la realizzazione. Porto nel codice questa concretezza: scrivo software orientato al risultato."
    },
    {
        title: "Forma e Funzione",
        text: "Un abito deve essere bello, ma soprattutto comodo. Nello sviluppo web applico lo stesso principio: curo l'aspetto visivo affinché l'esperienza utente sia fluida."
    },
    {
        title: "Sensibilità Visiva",
        text: "Grazie al mio background, ho una naturale familiarità con colori, spazi e proporzioni. Realizzo interfacce esteticamente curate senza bisogno di continue correzioni."
    },
    {
        title: "Adattabilità e Risorse",
        text: "Lavorare nella moda significa gestire imprevisti. Quando il codice non fa quello che deve o le specifiche cambiano, cerco strade alternative per trovare la soluzione migliore."
    }
];

const softSkillData = ["Resilienza", "Gestione Scadenze", "Attenzione al Dettaglio", "Problem Solving", "Lavoro in Team"];

export default function About() {
    return (
        <>
            <div className="about-bg-layer animate-page"></div>
            <div className='page-container animate-page'>
                <section className='about-intro'>
                    <h1 className='page-title'>Le Mie Radici</h1>

                    <div className='about-content glass-effect glass-effect--blur-md'>
                        <div className="about-text">
                            <p><strong>Prima di strutturare pagine web, strutturavo capi d'abbigliamento.</strong><br />
                                Il mio percorso nasce nel <strong>Fashion Design</strong>, dove ho lavorato per oltre 10 anni.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bridge-section">
                    <h3>Dal tessuto al codice</h3>
                    <p className="bridge-intro">Come ho trasformato il mio background in un vantaggio competitivo per lo sviluppo web:</p>

                    <div className="bridge-grid">
                        {bridgeCardsData.map((card, index) => (
                            <div key={index} className='bridge-card glass-effect glass-effect--blur-sm glass-effect--shadow-sm animate-item'>
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="soft-skills-section">
                    <h3>Soft Skills</h3>
                    <div className="soft-skills-grid">
                        {softSkillData.map((skill, index) => (
                            <div key={index} className='soft-skill-item animate-item'>
                                {skill}</div>
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}