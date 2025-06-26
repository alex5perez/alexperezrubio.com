const projects = [
  {
    id: 1,
    category: "Full-Stack",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    detailImages: [
      "img/bplan_1.png",
      "img/bplan_2.png",
      "img/bplan_3.png"
    ]
  },
  {
    id: 2,
    category: "Full-Stack",
    title: "React Login Token Todolist",
    description: [
      "Descripción: Aplicación para la gestión de tareas con autenticación mediante tokens.",
      "Características:",
      "- Frontend desarrollado con React.js.",
      "- API RESTful desarrollada con Flask.",
      "- Autenticación JWT.",
      "- Funcionalidad CRUD."
    ],
    technologies: ["React", "Flask", "JWT", "CRUD"],
    githubLink: "https://github.com/alex5perez/React-Login-Token-Todolist",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    detailImages: [
      "img/tokenlist_1.png",
      "img/tokenlist_2.png"
    ]
  },
  {
    id: 3,
    category: "Backend/Data",
    title: "Gestor-Tareas-springboot",
    description: [
      "Descripción: API REST para la gestión de tareas utilizando Java y Spring Boot.",
      "Características:",
      "- Arquitectura limpia.",
      "- Validaciones integradas.",
      "- CRUD completo.",
      "- Base de datos H2 en memoria."
    ],
    technologies: ["Java", "Spring Boot", "H2", "Lombok"],
    githubLink: "https://github.com/alex5perez/gestor-tareas-springboot",
    image: "img/spring-boot.png",
    detailImages: [
      "img/gestor_1.png",
      "img/gestor_2.png"
    ]
  },
  {
    id: 4,
    category: "Frontend",
    title: "React-Webapp-Starwars",
    description: [
      "Descripción: Aplicación desarrollada en React para explorar el universo de Star Wars.",
      "Características:",
      "- Consumo de una API externa.",
      "- Diseño responsive con Bootstrap.",
      "- Listado de personajes y planetas."
    ],
    technologies: ["React", "Bootstrap", "API"],
    githubLink: "https://github.com/alex5perez/React-Webapp-Starwars",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    detailImages: [
      "img/starwars_1.png",
      "img/starwars_2.png"
    ]
  },
  {
    id: 5,
    category: "Frontend",
    title: "Landing-page-React",
    description: [
      "Descripción: Página de aterrizaje simple y responsiva desarrollada con React.",
      "Características:",
      "- Componentes reutilizables.",
      "- Diseño limpio con HTML y CSS."
    ],
    technologies: ["React", "HTML", "CSS"],
    githubLink: "https://github.com/alex5perez/Landing-page-React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    detailImages: [
      "img/landing_1.png"
    ]
  },
  {
    id: 6,
    category: "Frontend",
    title: "Todolist-React-Fetch",
    description: [
      "Descripción: Lista de tareas desarrollada con React usando Fetch API.",
      "Características:",
      "- Añadir, eliminar y actualizar tareas.",
      "- Sin backend, comunicación con API externa."
    ],
    technologies: ["React", "JavaScript", "Fetch"],
    githubLink: "https://github.com/alex5perez/Todolist-React-Fetch",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    detailImages: [
      "img/todolist_1.png"
    ]
  },
  {
    id: 7,
    category: "Backend/Data",
    title: "Starwars-REST-API",
    description: [
      "Descripción: API REST simulando el universo de Star Wars.",
      "Características:",
      "- Flask como framework backend.",
      "- SQLAlchemy para ORM.",
      "- Endpoints para personajes, planetas y naves."
    ],
    technologies: ["Python", "Flask", "REST"],
    githubLink: "https://github.com/alex5perez/Starwars-REST-API",
    image: "img/python-logo.png",
    detailImages: [
      "img/api_sw_1.png"
    ]
  },
  {
    id: 8,
    category: "Backend/Data",
    title: "Python-Flask-API",
    description: [
      "Descripción: API básica para practicar desarrollo backend con Flask.",
      "Características:",
      "- Endpoints simples GET/POST.",
      "- Ideal para principiantes."
    ],
    technologies: ["Python", "Flask", "API"],
    githubLink: "https://github.com/alex5perez/Python-Flask-API",
    image: "img/python-logo.png",
    detailImages: []
  },
  {
    id: 9,
    category: "Backend/Data",
    title: "Instagram Data Modeling",
    description: [
      "Descripción: Modelado de base de datos para una red social tipo Instagram.",
      "Características:",
      "- Diagrama UML.",
      "- Relaciones con SQLAlchemy.",
      "- Entidades: usuarios, publicaciones, comentarios."
    ],
    technologies: ["Python", "SQLAlchemy", "Modelado"],
    githubLink: "https://github.com/alex5perez/Instagram-data-modeling",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    detailImages: [
      "img/modeling_1.png"
    ]
  },
  {
    id: 10,
    category: "Full-Stack",
    title: "Recipe App (en desarrollo)",
    description: [
      "Descripción: Aplicación para compartir y descubrir recetas culinarias.",
      "Características:",
      "- Backend con Django REST Framework.",
      "- Frontend desarrollado en Vue.js.",
      "- Gestión de recetas por usuarios.",
      "- Funcionalidades en desarrollo."
    ],
    technologies: ["Django", "DRF", "Vue.js"],
    githubLink: "https://github.com/alex5perez/Recipe-App-VueJS-Django",
    image: "https://vuejs.org/images/logo.png",
    detailImages: []
  }
];

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
            <p><strong>Competencias usadas:</strong></p>
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

// ─────────── ProjectDetail ───────────
function ProjectDetail({ project }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState("");

  const openImage = (image) => { setCurrentImage(image); setIsOpen(true); };
  const closeImage = ()  => { setIsOpen(false);     setCurrentImage(""); };

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

// ─────────── App ───────────
function App() {
  const [currentProject, setCurrentProject] = React.useState(null);
  const [filtro, setFiltro] = React.useState("Full-Stack");   // ← categoría activa

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

  const categorias = ["Full-Stack", "Frontend", "Backend/Data"];

  return (
    <div className="container">
      {currentProject ? (
        <ProjectDetail project={currentProject} />
      ) : (
        <React.Fragment>
          {/* Botones de filtro */}
          <div className="text-center my-4">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`btn btn-outline-warning m-1 ${filtro === cat ? "active" : ""}`}
                style={filtro === cat ? { fontWeight: "600" } : null}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tarjetas filtradas */}
          <div className="row">
            {projects
              .filter((p) => p.category === filtro)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
