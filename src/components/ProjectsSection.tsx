import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Github, ExternalLink, Edit, Trash2 } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { toast } from "sonner";
import { Project } from "@/types/portfolio";
import { useEditMode } from "@/contexts/EditModeContext";
import EditButton from "./EditButton";

interface ProjectsSectionProps {
  projects: Project[];
  onUpdateProjects: (projects: Project[]) => void;
}

const ProjectsSection = ({ projects, onUpdateProjects }: ProjectsSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>();
  const { isEditMode } = useEditMode();

  const handleAddProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: Date.now().toString() };
    onUpdateProjects([...projects, newProject]);
    toast.success("Projet ajouté avec succès");
  };

  const handleUpdateProject = (project: Project) => {
    onUpdateProjects(projects.map((p) => (p.id === project.id ? project : p)));
    toast.success("Projet mis à jour");
  };

  const handleDeleteProject = (id: string) => {
    onUpdateProjects(projects.filter((p) => p.id !== id));
    toast.success("Projet supprimé");
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      "en-cours": "bg-accent/20 text-accent",
      "terminé": "bg-primary/20 text-primary",
      "en-pause": "bg-muted-foreground/20 text-muted-foreground",
    };
    const labels = {
      "en-cours": "En cours",
      "terminé": "Terminé",
      "en-pause": "En pause",
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <section id="projects" className={`py-20 px-4 ${isEditMode ? "border-2 border-dashed border-primary/50 rounded-lg" : ""}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mes Projets
            </h2>
            {isEditMode && (
              <EditButton
                onClick={() => {
                  setEditingProject(undefined);
                  setIsModalOpen(true);
                }}
              />
            )}
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
              className="overflow-hidden hover-scale shadow-elegant hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground flex-1">
                    {project.title}
                  </h3>
                  {getStatusBadge(project.status)}
                </div>
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
                  {isEditMode && (
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
              </div>
            </Card>
          ))}
        </div>

        {isEditMode && (
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
