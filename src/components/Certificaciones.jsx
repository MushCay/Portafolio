export function Certificaciones() {
    const certs = [
        { title: "Certificación en Python", issuer: "Platzi • 2025", link: "#" },
        { title: "Desarrollo Web Frontend", issuer: "Coursera • 2025", link: "#" },
        { title: "Bases de Datos SQL", issuer: "Oracle • 2026", link: "#" }
    ];

    return (
        <section className="certificaciones-bar-section">
            <div className="certificaciones-bar-container">
                <h3 className="cert-bar-title">Certificaciones:</h3>
                <div className="cert-items-wrapper">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-bar-item">
                            <span className="cert-text">
                                <strong>{cert.title}</strong> ({cert.issuer})
                            </span>
                            <a href={cert.link} className="cert-bar-link">Ver</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}