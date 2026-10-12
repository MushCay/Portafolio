export function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {new Date().getFullYear()} • Creado con 💜 y React
                </p>

                <div className="footer-links">
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#tecnologias">Tecnologías</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#certificaciones">Certificaciones</a>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}