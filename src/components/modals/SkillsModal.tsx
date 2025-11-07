import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SkillCategory } from "@/types/portfolio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plus } from "lucide-react";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (categories: SkillCategory[]) => void;
  categories: SkillCategory[];
}

const SkillsModal = ({ isOpen, onClose, onSave, categories }: SkillsModalProps) => {
  const [formData, setFormData] = useState(categories);

  useEffect(() => {
    setFormData(categories);
  }, [categories]);

  const handleAddCategory = () => {
    const newCategory: SkillCategory = {
      id: Date.now().toString(),
      title: "",
      icon: "Code2",
      skills: [],
    };
    setFormData([...formData, newCategory]);
  };

  const handleRemoveCategory = (id: string) => {
    setFormData(formData.filter((cat) => cat.id !== id));
  };

  const handleUpdateCategory = (id: string, field: keyof SkillCategory, value: any) => {
    setFormData(
      formData.map((cat) => (cat.id === id ? { ...cat, [field]: value } : cat))
    );
  };

  const handleAddSkill = (categoryId: string) => {
    setFormData(
      formData.map((cat) =>
        cat.id === categoryId ? { ...cat, skills: [...cat.skills, ""] } : cat
      )
    );
  };

  const handleUpdateSkill = (categoryId: string, index: number, value: string) => {
    setFormData(
      formData.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              skills: cat.skills.map((skill, i) => (i === index ? value : skill)),
            }
          : cat
      )
    );
  };

  const handleRemoveSkill = (categoryId: string, index: number) => {
    setFormData(
      formData.map((cat) =>
        cat.id === categoryId
          ? { ...cat, skills: cat.skills.filter((_, i) => i !== index) }
          : cat
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Modifier les compétences</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.map((category) => (
            <div key={category.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <Label>Titre de la catégorie</Label>
                  <Input
                    value={category.title}
                    onChange={(e) =>
                      handleUpdateCategory(category.id, "title", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="w-32">
                  <Label>Icône</Label>
                  <Select
                    value={category.icon}
                    onValueChange={(value) =>
                      handleUpdateCategory(category.id, "icon", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Code2">Code2</SelectItem>
                      <SelectItem value="BookOpen">BookOpen</SelectItem>
                      <SelectItem value="Wrench">Wrench</SelectItem>
                      <SelectItem value="Brain">Brain</SelectItem>
                      <SelectItem value="Target">Target</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveCategory(category.id)}
                  className="mt-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Compétences</Label>
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={skill}
                      onChange={(e) =>
                        handleUpdateSkill(category.id, index, e.target.value)
                      }
                      placeholder="Nom de la compétence"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveSkill(category.id, index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSkill(category.id)}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Ajouter une compétence
                </Button>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={handleAddCategory}
            className="w-full gap-2"
          >
            <Plus className="h-4 w-4" />
            Ajouter une catégorie
          </Button>

          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" className="gradient-primary">
              Enregistrer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsModal;
