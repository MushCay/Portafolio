import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/mainSection.jsx';
import { Certificaciones } from './components/Certificaciones.jsx';
import { ProyectosSection } from './components/ProyectosSection.jsx';
import { Tecnologias } from './components/TecnologiasSection.jsx';
import { Footer } from './components/footer.jsx';
import { ProjectSection } from './components/componentProject.jsx';



//SECCION DE IMAGENES
import imgSitio1 from './assets/imagenesRepo/estudioSi1.png';
import imgSitio2 from './assets/imagenesRepo/estudioSi2.png';
//SECCION 2
import imgGalac1 from './assets/imagenesRepo/galac1.png';
import imgGalac2 from './assets/imagenesRepo/galac2.png';
import imgGalac3 from './assets/imagenesRepo/galac3.png';
import imgGalac4 from './assets/imagenesRepo/galact4.png';
import imgGalac5 from './assets/imagenesRepo/galac5.png';

// Componente que junta todas tus secciones principales en la página de inicio
function Home() {
    return (
        <>
            <Main />
            <Certificaciones />
            <ProyectosSection />
            <Tecnologias />
            <Footer />
        </>
    );
}

export function App() {
    return (
        <Router basename="/Portafolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="proyecto/estudio-Sitio" element={
                    <ProjectSection
                        title="Estudio de Sitio"
                        description="Perteneciente a la materia de Comunicación de datos II, se trata de un estudio de sitio para la detección de fuentes de ruido o solapamiento que pudieran estar interfiriendo con la red de doméstica, así como también el análisis de la misma. Por medio de un programa de detección de redes, se realizó un muestreo en puntos estratégicos de la casa (4 puntos), evaluando la calidad de la red y la relación señal ruido, a partir de ello, con todos los resultados obtenidos se elaboró un mapa de calor, en donde se visualizará las zonas con mayor cobertura, media y las áreas que tuvieran interferencias. A partir de la información recabada se realizó una conclusión con una interpretación de los datos. "
                        casoUso={`  <b>Requerimientos del cliente:</b>
                                    •	Evaluar que la señal de red sea adecuada
                                    •	Realizar mediciones en puntos estratégicos
                                    •	Encontrar si existen interferencias
                                    <b>Diseño solución:</b>
                                    A partir de las mediciones hechas en la casa de este compañero, se realizó un análisis en torno a los resultados donde se evaluó que la red era adecuada, ya que de lo contrario se plantearía una forma de solucionarlo.
                                    <b>Implementación de Solución y Resultado:</b>
                                    En base a nuestros análisis, llegamos a la conclusión que la red era optima, ya que en general en las mediciones de las distintas áreas, no hubo interferencias significativas.
                            `}

                        images={[imgSitio1, imgSitio2]}
                        technologies={["inSSider", "Acrylic Suite"]}
                        documents={[
                            { name: "Proyecto (PDF)", description: "Documentación donde se desglosa la informacion.", url: "/Portafolio/ESTUDIO_SITIO_PROYECTO.pdf", icon: "📄", btnText: "Ver" },

                        ]}
                    />
                } />
                <Route path="proyecto/Figma" element={
                    <ProjectSection
                        title="Figma Interfaz para niños"
                        description="Este proyecto corresponde a la materia de Ingeniería de Sistemas de Información, fue básicamente construir una interfaz visual de un videojuego para niños acerca del espacio, haciendo uso de la herramienta figma. "
                        casoUso={`<b>Requerimientos del cliente:</b>
                                        •	Juego Educativo
                                        •	Que permita a los niños aprender
                                        •	Reforzar conocimiento
                                        •	Interactivo
                                        •	Colorido
                                        •	Interfaz Amigable 
                                        •	Intuitiva
                                        <b>Diseño solución:</b>
                                        A partir de los requerimientos se diseñó. un juego basado en el espacio cuyo objetivo, era que los niños se interesaran por este tema, mediante actividades interactivas y divertidas en donde el infante simulara ser parte de una tripulación espacial que en base a las actividades que realices logres salvar distintos planetas.
                                        <b>Implementación de Solución y Resultado: </b>
                                        La implementación se realizó a partir del diseño de un figma en donde se visualizará esta propuesta.
                        `}
                        technologies={["Figma"]}
                        images={[imgGalac1, imgGalac2, imgGalac3, imgGalac4, imgGalac5]}
                        documents={[
                            { name: "Figma", description: "Figma del Proyecto.", url: "https://www.figma.com/design/hxMYTzd253iuEADp1SHhTg/PROYECTOS_ISI?node-id=1824-43&p=f&t=5bHuTrTfabUwWd9W-0", icon: "​🖥️​", btnText: "Ver" }
                        ]}
                    />
                } />

                <Route path="/proyecto/Personajes" element={
                    <ProjectSection
                        title="Creador de Pe"
                        description="Este proyecto corresponde a la materia de Desarrollo III. La gestión manual de los atributos de los personajes no jugadores (NPC), como sus armas, habilidades, y clases, puede generar inconsistencias en los datos, duplicidad de información, y errores durante el proceso de desarrollo del juego.   
                                    Un sistema digital centralizado es necesario para estandarizar, organizar y visualizar estos atributos de manera clara y accesible. Con él, se evita la modificación directa de datos en archivos dispersos, se reducen los errores y se agiliza el flujo de trabajo del equipo. Este sistema transforma una tarea compleja y propensa a fallos en un proceso controlado, eficiente, y fácil de mantener. 
                                    "
                        casoUso={`<b>Requerimientos del cliente:</b>
                                        •	Juego Educativo
                                        •	Que permita a los niños aprender
                                        •	Reforzar conocimiento
                                        •	Interactivo
                                        •	Colorido
                                        •	Interfaz Amigable 
                                        •	Intuitiva
                                        <b>Diseño solución:</b>
                                        A partir de los requerimientos se diseñó. un juego basado en el espacio cuyo objetivo, era que los niños se interesaran por este tema, mediante actividades interactivas y divertidas en donde el infante simulara ser parte de una tripulación espacial que en base a las actividades que realices logres salvar distintos planetas.
                                        <b>Implementación de Solución y Resultado: <b/>
                                        La implementación se realizó a partir del diseño de un figma en donde se visualizará esta propuesta.
                        `}
                        technologies={["Figma"]}
                        images={[imgSitio1, imgSitio2]}
                        documents={[
                            { name: "Figma", description: "Figma del Proyecto.", url: "/ Portafolio / ESTUDIO_SITIO_PROYECTO.pdf", icon: "​🖥️​", btnText: "Ver" }
                        ]}
                    />
                } />
            </Routes>
        </Router>
    );
}