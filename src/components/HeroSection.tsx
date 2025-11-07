import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profilePhoto}
                alt="Audrey Gruneisen"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-elegant hover-scale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Audrey Gruneisen
              </h2>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                Chef de Projet IA
              </p>
              <p className="text-xl text-muted-foreground">
                Spécialiste en solutions éducatives innovantes
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Passionnée par l'innovation pédagogique, je conçois et pilote des projets IA 
              qui transforment l'apprentissage. Mon expertise combine gestion de projet 
              agile et technologies de pointe pour créer des solutions éducatives impactantes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gradient-primary shadow-elegant hover:shadow-glow"
              >
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/audrey-gruneisen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/audrey-gruneisen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:audrey.gruneisen@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
