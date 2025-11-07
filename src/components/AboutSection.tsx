import { Card } from "@/components/ui/card";
import { Brain, Target, Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Brain,
      title: "Expertise IA",
      description: "Conception et déploiement de systèmes RAG pour l'éducation",
    },
    {
      icon: Target,
      title: "Gestion de Projet",
      description: "Méthodologies agiles et pilotage de projets innovants",
    },
    {
      icon: Users,
      title: "Innovation Pédagogique",
      description: "Création de solutions d'apprentissage personnalisées",
    },
    {
      icon: Sparkles,
      title: "Technologies de Pointe",
      description: "Maîtrise des outils IA et frameworks modernes",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À propos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Étudiante en alternance passionnée par l'IA et l'éducation, 
            je combine formation académique et expérience terrain pour créer 
            des solutions qui font la différence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-scale shadow-elegant hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-elegant max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Mon Parcours
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            Actuellement en alternance, je développe une expertise solide en gestion de 
            projets IA avec un focus sur les applications éducatives. Ma passion pour 
            l'innovation pédagogique me pousse à explorer comment l'IA peut transformer 
            l'apprentissage et rendre l'éducation plus accessible et personnalisée.
          </p>
          <p className="text-foreground leading-relaxed">
            J'ai notamment travaillé sur des systèmes RAG (Retrieval-Augmented Generation) 
            pour créer des assistants pédagogiques intelligents, en utilisant des frameworks 
            comme Qdrant, OpenAI et Streamlit. Mon approche combine rigueur méthodologique 
            et créativité pour concevoir des solutions qui répondent aux besoins réels des apprenants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
