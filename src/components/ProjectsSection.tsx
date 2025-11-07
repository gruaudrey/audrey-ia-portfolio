import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Github, ExternalLink, Edit, Trash2, Lock, Unlock } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { toast } from "sonner";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>();
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Projets par défaut
      const defaultProjects: Project[] = [
        {
          id: "1",
          title: "Assistant Pédagogique IA",
          description: "Système RAG intelligent pour accompagner les étudiants dans leur apprentissage avec des réponses contextualisées.",
          technologies: ["Python", "Qdrant", "OpenAI", "Streamlit"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
        },
        {
          id: "2",
          title: "Automatisation Workflow n8n",
          description: "Orchestration de workflows éducatifs automatisés pour optimiser la gestion des contenus pédagogiques.",
          technologies: ["n8n", "Python", "API REST"],
          githubUrl: "https://github.com",
        },
        {
          id: "3",
          title: "Plateforme d'Évaluation Adaptative",
          description: "Solution d'évaluation basée sur la taxonomie de Bloom avec adaptation au niveau de l'apprenant.",
          technologies: ["React", "Python", "OpenAI"],
          githubUrl: "https://github.com",
          demoUrl: "https://demo.com",
        },
      ];
      setProjects(defaultProjects);
      localStorage.setItem("portfolio-projects", JSON.stringify(defaultProjects));
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem("portfolio-projects", JSON.stringify(updatedProjects));
  };

  const handleAddProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: Date.now().toString() };
    saveProjects([...projects, newProject]);
    toast.success("Projet ajouté avec succès");
  };

  const handleUpdateProject = (project: Project) => {
    saveProjects(projects.map((p) => (p.id === project.id ? project : p)));
    toast.success("Projet mis à jour");
  };

  const handleDeleteProject = (id: string) => {
    saveProjects(projects.filter((p) => p.id !== id));
    toast.success("Projet supprimé");
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mes Projets
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAdminMode(!isAdminMode)}
              className="text-muted-foreground hover:text-primary"
            >
              {isAdminMode ? <Unlock className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
            </Button>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mes réalisations en IA et innovation pédagogique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="p-6 hover-scale shadow-elegant hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 min-h-[60px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {isAdminMode && (
                  <>
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors ml-auto"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 rounded-lg bg-secondary hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {isAdminMode && (
          <div className="text-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => {
                setEditingProject(undefined);
                setIsModalOpen(true);
              }}
              className="gradient-primary shadow-elegant"
            >
              <Plus className="mr-2 h-5 w-5" />
              Ajouter un projet
            </Button>
          </div>
        )}

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProject(undefined);
          }}
          onSave={editingProject ? handleUpdateProject : handleAddProject}
          project={editingProject}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
