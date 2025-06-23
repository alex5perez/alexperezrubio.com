// Datos de los proyectos
const projects = [
    {
        id: 1,
        title: "BPlan",
        description: [
        "Descripción: B Plan es una aplicación web diseñada para ayudar a los usuarios a encontrar planes divertidos y atractivos. Está desarrollada con React.js en el frontend y Flask en el backend.",
        "Características:",
        "- Frontend con React.js, HTML y CSS.",
        "- Backend con Flask y SQLAlchemy.",
        "- Gestión de imágenes con Cloudinary.",
        "- Envío de correos con Flask-Mail.",
        "- Soporte para bases de datos SQLite, MySQL y PostgreSQL."
        ],
        technologies: ["React", "Node.js", "Flask", "MongoDB", "CSS", "JavaScript"],
        githubLink: "https://github.com/alex5perez/bplan",
        image: "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png",
        detailImages: [
            "bplan_1.png",
            "bplan_2.png",
            "bplan_3.png"
        ],
    },
    {
        id: 2,
        title: "CareerInsights.es",
        description: [
        "Código fuente del sitio web CareerInsights.es, una plataforma dedicada a ofrecer recursos, herramientas y orientación para el desarrollo profesional, búsqueda de empleo y crecimiento en el mundo laboral.",
        "Tecnologías utilizadas:",
        "- WordPress 6.x",
        "- PHP 8.0+",
        "- MySQL/MariaDB 5.7+",
        "- Servidor web: Apache o Nginx",
        "Frontend:",
        "- HTML5",
        "- CSS3",
        "- JavaScript (jQuery)",
        "- Bootstrap 5",
        "Control de versiones:",
        "- Git",
        "- GitHub",
        "Plugins clave:",
        "- Advanced Custom Fields (ACF)",
        "- Contact Form 7",
        "- Yoast SEO",
        "- Elementor"
    ],
        technologies: ["WordPress", "PHP", "MySQL", "Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/alex5perez/CareerInisghts.es",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png",
        detailImages: [
            "careerinsights_1.png",
            "careerinsights_2.png",
            "careerinsights_3.png"
        ],
    },
    {
        id: 3,
        title: "Recipe App (en desarrollo)",
        description:
            "Aplicación de recetas en curso que permite a los usuarios explorar y compartir recetas culinarias. Proyecto en desarrollo utilizando backend con Django y Django Rest Framework y frontend con Vue.js.",
        technologies: ["Python", "Django", "Django Rest Framework", "API REST", "VueJS"],
        githubLink: "#",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        detailImages: [
        "recipehub_1.png",
        "recipehub_2.png",
        "recipehub_3.png"
    ],
    },
];

// Componente ProjectCard
function ProjectCard({ project }) {
    return (
        <div className="col-md-4 mb-4">
            <a href={`#/project/${project.id}`} className="text-decoration-none">
                <div className="card project-card h-100">
                    <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p>
                            <strong>Competencias usadas:</strong>
                        </p>
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
}

// Componente ProjectDetail
function ProjectDetail({ project }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState('');

    const openImage = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
        setCurrentImage('');
    };

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>

            <div className="image-gallery">
                {project.detailImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="img-thumbnail"
                        onClick={() => openImage(image)}
                        style={{ cursor: "pointer", width: "30%", margin: "5px" }}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="lightbox" onClick={closeImage}>
                    <div className="lightbox-content">
                        <img src={currentImage} alt="Enlarged" className="lightbox-image" />
                    </div>
                </div>
            )}
            {Array.isArray(project.description) ? (
                <div>
                    <p><strong>{project.description[0]}</strong></p>
                    <p>{project.description[1]}</p>
                    <ul>
                        {project.description.slice(2).map((line, i) => (
                            <li key={i}>{line.replace("-", "").trim()}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>{project.description}</p>
            )}
            <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
            >
                Ver en GitHub
            </a>
            <br />
            <a href="#/" className="btn btn-secondary mt-3">
                Volver a la lista de proyectos
            </a>
        </div>
    );
}



// Componente principal de React
function App() {
    const [currentProject, setCurrentProject] = React.useState(null);

        React.useEffect(() => {
        const handleHashChange = () => {
    const parts = window.location.hash.split("/");
    if (parts.length >= 3) {
        const id = parts[2];
        const project = projects.find((p) => p.id === parseInt(id));
        setCurrentProject(project || null);
    } else {
        setCurrentProject(null);
    }
};


        window.addEventListener("hashchange", handleHashChange);
        handleHashChange();

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className="container">
            {currentProject ? (
                <ProjectDetail project={currentProject} />
            ) : (
                <div className="row">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
