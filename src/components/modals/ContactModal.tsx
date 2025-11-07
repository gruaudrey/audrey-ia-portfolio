import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactInfo } from "@/types/portfolio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (info: ContactInfo) => void;
  info: ContactInfo;
}

const ContactModal = ({ isOpen, onClose, onSave, info }: ContactModalProps) => {
  const [formData, setFormData] = useState(info);

  useEffect(() => {
    setFormData(info);
  }, [info]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Modifier les informations de contact</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn *</Label>
            <Input
              id="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              required
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div>
            <Label htmlFor="github">GitHub *</Label>
            <Input
              id="github"
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              required
              placeholder="https://github.com/..."
            />
          </div>
          <div>
            <Label htmlFor="availability">Disponibilité *</Label>
            <Textarea
              id="availability"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              required
              rows={3}
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

export default ContactModal;
