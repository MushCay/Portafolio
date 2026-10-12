import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/mainSection.jsx';
import { Certificaciones } from './components/Certificaciones.jsx';
import { ProyectosSection } from './components/ProyectosSection.jsx';
import { Tecnologias } from './components/TecnologiasSection.jsx';
import { Footer } from './components/footer.jsx';
import { ProjectSection } from './components/componentProject.jsx'; // <--- Aquí importas tu archivo de blog/proyecto

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
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* RUTA PARA STOCKER LAB (Sin repositorio, con sus datos específicos) */}
                <Route path="/proyecto/stocker-lab" element={
                    <ProjectSection
                        title="Stocker Lab"
                        description="Sistema de Gestión de Laboratorios desarrollado con Python y Flask."
                        casoUso="Control y administración de equipos de laboratorio, reactivos y registro de incidencias por parte de los usuarios."
                        technologies={["Python", "Flask", "SQL Server", "JavaScript"]}
                        documents={[
                            { name: "Informe Técnico (PDF)", description: "Documentación completa del sistema y base de datos.", url: "#", icon: "📄", btnText: "Descargar" },
                            { name: "Manual de Usuario", description: "Guía paso a paso para el uso de la plataforma.", url: "#", icon: "📖", btnText: "Ver" }
                        ]}
                    />
                } />

                {/* RUTA PARA OTRO PROYECTO SIN REPOSITORIO (Ejemplo) */}
                <Route path="/proyecto/otro-proyecto" element={
                    <ProjectSection
                        title="Nombre de otro proyecto"
                        description="Descripción de este proyecto."
                        casoUso="Problematica que resuelve."
                        technologies={["React", "Tailwind"]}
                        documents={[
                            { name: "Documentación", description: "Detalles del proyecto.", url: "#", icon: "📄", btnText: "Ver" }
                        ]}
                    />
                } />
            </Routes>
        </Router>
    );
}