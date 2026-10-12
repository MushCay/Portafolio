import { NavBar } from './navBar.jsx';
import './sectionp.css';
import bannerImg from '../assets/banner.jpg'

export function ProjectSection({
    title = "Nombre del Proyecto",
    description = "Descripción detallada del proyecto y sus objetivos principales.",
    casoUso = "Descripción detallada del caso de uso del proyecto, explicando el flujo de trabajo o la problemática que resuelve.",
    images = [],
    documents = [],
    technologies = []
}) {
    return (
        <>
            <NavBar />
            <main className="project-page-container">
                <div className="project-layout-grid">

                    {/* COLUMNA IZQUIERDA: Información principal, caso de uso, imágenes y documentos */}
                    <div className="project-main-column">
                        <section className="project-header-card">
                            <h1>{title}</h1>
                            <p className="project-description">{description}</p>
                        </section>

                        <section className="project-casoUso">
                            <h3>Caso de Uso</h3>
                            <p>{casoUso}</p>
                        </section>

                        <section className="project-Imagenes">
                            <h3>Imágenes del Proyecto</h3>

                            {images.length > 0 ? (
                                <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
                                    {/* Indicadores de puntos abajo */}
                                    <div className="carousel-indicators">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                data-bs-target="#projectCarousel"
                                                data-bs-slide-to={index}
                                                className={index === 0 ? "active" : ""}
                                                aria-current={index === 0 ? "true" : "false"}
                                                aria-label={`Slide ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>

                                    {/* Diapositivas de imágenes */}
                                    <div className="carousel-inner rounded-carousel">
                                        {images.map((img, index) => (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                <img src={img} className="d-block w-100 project-img-carousel" alt={`${title} - captura ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botones de siguiente y anterior */}
                                    <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Anterior</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Siguiente</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="project-gallery-placeholder">
                                    <p>Galería / Carrusel de capturas</p>
                                </div>
                            )}
                        </section>

                        {/* SECCIÓN DINÁMICA PARA DOCUMENTOS */}
                        <section className="project-Documento">
                            <h3>Documentación y Archivos</h3>
                            <div className="doc-list">
                                {documents.length > 0 ? (
                                    documents.map((doc, index) => (
                                        <a key={index} href={doc.url} className="doc-item" target="_blank" rel="noopener noreferrer">
                                            <div className="doc-info">
                                                <span className="doc-icon">{doc.icon || "📄"}</span>
                                                <div>
                                                    <h4>{doc.name}</h4>
                                                    <p>{doc.description}</p>
                                                </div>
                                            </div>
                                            <span className="doc-btn">{doc.btnText || "Ver archivo"}</span>
                                        </a>
                                    ))
                                ) : (
                                    <p>No hay documentos adjuntos en este proyecto.</p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* COLUMNA DERECHA: Tecnologías dinámicas */}
                    <div className="project-sidebar-column">
                        <section className="project-Tecnologias">
                            <h3>Tecnologías Utilizadas</h3>
                            <div className="project-tech-tags">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </section>
                    </div>

                </div>
            </main>
        </>
    );
}