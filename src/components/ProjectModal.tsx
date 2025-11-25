import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project | Omit<Project, "id">) => void;
  project?: Project;
}

const ProjectModal = ({ isOpen, onClose, onSave, project }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    demoUrl: "",
    imageUrl: "",
    status: "en-cours" as Project["status"],
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies.join(", "),
        githubUrl: project.githubUrl || "",
        demoUrl: project.demoUrl || "",
        imageUrl: project.imageUrl || "",
        status: project.status,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        demoUrl: "",
        imageUrl: "",
        status: "en-cours",
      });
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(",").map((t) => t.trim()),
      githubUrl: formData.githubUrl || undefined,
      demoUrl: formData.demoUrl || undefined,
      imageUrl: formData.imageUrl || undefined,
      status: formData.status,
    };

    if (project) {
      onSave({ ...projectData, id: project.id });
    } else {
      onSave(projectData);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {project ? "Modifier le projet" : "Ajouter un projet"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Titre du projet *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="technologies">Technologies (séparées par des virgules) *</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="Python, React, OpenAI"
              required
            />
          </div>
          <div>
            <Label htmlFor="githubUrl">Lien GitHub</Label>
            <Input
              id="githubUrl"
              type="url"
              value={formData.githubUrl}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              placeholder="https://github.com/..."
            />
          </div>
          <div>
            <Label htmlFor="demoUrl">Lien démo</Label>
            <Input
              id="demoUrl"
              type="url"
              value={formData.demoUrl}
              onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
              placeholder="https://demo.com/..."
            />
          </div>
          <div>
            <Label htmlFor="imageUrl">URL de l'image</Label>
            <Input
              id="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>
          <div>
            <Label htmlFor="status">Statut *</Label>
            <Select
              value={formData.status}
              onValueChange={(value: Project["status"]) =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-cours">En cours</SelectItem>
                <SelectItem value="terminé">Terminé</SelectItem>
                <SelectItem value="en-pause">En pause</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" className="gradient-primary">
              {project ? "Mettre à jour" : "Ajouter"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
