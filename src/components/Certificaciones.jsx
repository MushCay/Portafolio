export function Certificaciones() {
    const certs = [
        { title: "Uso de IA", issuer: "H Ayuntamiento/Microsoft • 2025" },
        { title: "Tecnico en Programacion", issuer: "CBTIS206 • 2024" }
    ];

    return (
        <section className="certificaciones-bar-section">
            <div className="certificaciones-bar-container">
                <h3 className="cert-bar-title">Certificaciones y Titulos:</h3>
                <div className="cert-items-wrapper">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-bar-item">
                            <span className="cert-text">
                                <strong>{cert.title}</strong> ({cert.issuer})
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}