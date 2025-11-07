import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PersonalInfo, ContactInfo } from "@/types/portfolio";
import { useEditMode } from "@/contexts/EditModeContext";
import EditButton from "./EditButton";
import PersonalInfoModal from "./modals/PersonalInfoModal";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  onUpdatePersonalInfo: (info: PersonalInfo) => void;
}

const HeroSection = ({ personalInfo, contactInfo, onUpdatePersonalInfo }: HeroSectionProps) => {
  const { isEditMode } = useEditMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`min-h-screen pt-32 pb-20 px-4 ${isEditMode ? "border-2 border-dashed border-primary/50 rounded-lg" : ""}`}>
      <div className="container mx-auto">
        {isEditMode && (
          <div className="flex justify-end mb-4">
            <EditButton onClick={() => setIsModalOpen(true)} />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-elegant hover-scale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                {personalInfo.name}
              </h2>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                {personalInfo.title}
              </p>
              <p className="text-xl text-muted-foreground">
                {personalInfo.subtitle}
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              {personalInfo.description}
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
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <PersonalInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onUpdatePersonalInfo}
        info={personalInfo}
      />
    </section>
  );
};

export default HeroSection;
