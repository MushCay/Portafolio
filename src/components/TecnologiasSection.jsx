import imgGit from '../assets/gitu.png'; // Ajusta la ruta según donde tengas tus imágenes
import imgPython from '../assets/piton.png';
import imgPhp from '../assets/php.png';
import imgSql from '../assets/servidor-sql.png';
import imgHtml from '../assets/html.png';
import imgCSS from '../assets/css-3.png';
import imgJS from '../assets/js.png';
import imgReact from '../assets/react.png';
import imgGatito from '../assets/gatito.jpg'

export function Tecnologias() {
    return (
        <section className="tecnologias-section" id='tecnologias'>
            <div className='SeccionGato'>
                <img src={imgGatito} alt="Tecnologias" className='Gatito' />
            </div>
            <div className="tecnologias-content">
                <h2>Tecnologías</h2>
                <p>Estas son algunas de las tecnologías que utilizo en mis proyectos:</p>
                <ul className="tecnologias-list">
                    <li>
                        <img src={imgGit} alt="Git" className="tech-icon" />
                        Git
                    </li>
                    <li>
                        <img src={imgPython} alt="Python" className="tech-icon" />
                        Python
                    </li>
                    <li>
                        <img src={imgPhp} alt="PHP" className="tech-icon" />
                        PHP
                    </li>
                    <li>
                        <img src={imgSql} alt="SQL" className="tech-icon" />
                        SQL
                    </li>
                    <li>
                        <img src={imgHtml} alt="HTML" className="tech-icon" />
                        HTML</li>
                    <li>
                        <img src={imgCSS} alt="CSS" className="tech-icon" />
                        CSS</li>
                    <li>
                        <img src={imgJS} alt="JS" className="tech-icon" />
                        JavaScript</li>
                    <li>
                        <img src={imgReact} alt="React" className="tech-icon" />
                        React</li>
                </ul>
            </div>
        </section>
    );
}