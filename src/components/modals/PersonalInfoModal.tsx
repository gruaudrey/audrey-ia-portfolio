import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PersonalInfo } from "@/types/portfolio";

interface PersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (info: PersonalInfo) => void;
  info: PersonalInfo;
}

const PersonalInfoModal = ({ isOpen, onClose, onSave, info }: PersonalInfoModalProps) => {
  const [formData, setFormData] = useState(info);

  useEffect(() => {
    setFormData(info);
  }, [info]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Préserver la photo originale
    onSave({ ...formData, photoUrl: info.photoUrl });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Modifier les informations personnelles</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="title">Titre professionnel *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="Chef de Projet IA"
            />
          </div>
          <div>
            <Label htmlFor="subtitle">Sous-titre *</Label>
            <Input
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              required
              placeholder="Spécialiste en..."
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

export default PersonalInfoModal;
