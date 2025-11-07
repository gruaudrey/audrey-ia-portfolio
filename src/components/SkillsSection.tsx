import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Wrench, BookOpen, Brain, Target } from "lucide-react";
import { SkillCategory } from "@/types/portfolio";
import { useEditMode } from "@/contexts/EditModeContext";
import EditButton from "./EditButton";
import SkillsModal from "./modals/SkillsModal";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  onUpdateSkills: (categories: SkillCategory[]) => void;
}

const SkillsSection = ({ skillCategories, onUpdateSkills }: SkillsSectionProps) => {
  const { isEditMode } = useEditMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconMap: Record<string, any> = {
    Code2,
    BookOpen,
    Wrench,
    Brain,
    Target,
  };

  return (
    <section id="skills" className={`py-20 px-4 bg-muted/30 ${isEditMode ? "border-2 border-dashed border-primary/50 rounded-lg" : ""}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Compétences
            </h2>
            {isEditMode && <EditButton onClick={() => setIsModalOpen(true)} />}
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un ensemble de compétences techniques et méthodologiques 
            pour piloter des projets IA innovants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <Card
                key={category.id}
                className="p-8 shadow-elegant hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>

      <SkillsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onUpdateSkills}
        categories={skillCategories}
      />
    </section>
  );
};

export default SkillsSection;
