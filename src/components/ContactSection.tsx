import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Je vous répondrai dans les plus brefs délais.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez un projet ou une question ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Votre message..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-primary shadow-elegant">
                <Send className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Restons connectés
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:audrey.gruneisen@example.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">audrey.gruneisen@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/audrey-gruneisen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/audrey-gruneisen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Disponibilité
              </h3>
              <p className="text-foreground leading-relaxed">
                Actuellement en alternance et ouverte aux opportunités de collaboration 
                sur des projets IA innovants dans le domaine de l'éducation.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
