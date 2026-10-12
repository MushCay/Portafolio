export function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {new Date().getFullYear()} • Creado con 💜 y React
                </p>

                <div className="footer-socials">
                    <a href="https://github.com/MushCay" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abril-melissa-garcia-b1b678413/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}