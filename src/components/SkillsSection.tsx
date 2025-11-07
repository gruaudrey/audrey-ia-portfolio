import { Card } from "@/components/ui/card";
import { Code2, Wrench, BookOpen } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technologies",
      skills: [
        "Python",
        "n8n",
        "Qdrant",
        "OpenAI API",
        "Streamlit",
        "React",
        "Git/GitHub",
      ],
    },
    {
      icon: BookOpen,
      title: "Méthodologies",
      skills: [
        "Approche par Compétences (AEC)",
        "Ingénierie Rapide Inversée (IRI)",
        "Taxonomie de Bloom",
        "Priorisation RICE",
        "Analyse des besoins",
      ],
    },
    {
      icon: Wrench,
      title: "Outils & Compétences",
      skills: [
        "Gestion de projet agile",
        "Déploiement (Render)",
        "Documentation technique",
        "Tests utilisateurs",
        "Veille technologique",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un ensemble de compétences techniques et méthodologiques 
            pour piloter des projets IA innovants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
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
    </section>
  );
};

export default SkillsSection;
