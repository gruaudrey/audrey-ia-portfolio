import { PortfolioData } from "@/types/portfolio";
import profilePhoto from "@/assets/profile-photo.jpg";

export const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "Audrey Gruneisen",
    title: "Chef de Projet IA",
    subtitle: "Spécialiste en solutions éducatives innovantes",
    description: "Passionnée par l'innovation pédagogique, je conçois et pilote des projets IA qui transforment l'apprentissage. Mon expertise combine gestion de projet agile et technologies de pointe pour créer des solutions éducatives impactantes.",
    photoUrl: profilePhoto,
  },
  projects: [
    {
      id: "1",
      title: "Assistant Pédagogique IA",
      description: "Système RAG intelligent pour accompagner les étudiants dans leur apprentissage avec des réponses contextualisées.",
      technologies: ["Python", "Qdrant", "OpenAI", "Streamlit"],
      status: "terminé",
    },
    {
      id: "2",
      title: "Automatisation Workflow n8n",
      description: "Orchestration de workflows éducatifs automatisés pour optimiser la gestion des contenus pédagogiques.",
      technologies: ["n8n", "Python", "API REST"],
      status: "en-cours",
    },
    {
      id: "3",
      title: "Plateforme d'Évaluation Adaptative",
      description: "Solution d'évaluation basée sur la taxonomie de Bloom avec adaptation au niveau de l'apprenant.",
      technologies: ["React", "Python", "OpenAI"],
      status: "terminé",
    },
  ],
  skillCategories: [
    {
      id: "1",
      title: "Technologies",
      icon: "Code2",
      skills: ["Python", "n8n", "Qdrant", "OpenAI API", "Streamlit", "React", "Git/GitHub"],
    },
    {
      id: "2",
      title: "Méthodologies",
      icon: "BookOpen",
      skills: ["Approche par Compétences (AEC)", "Ingénierie Rapide Inversée (IRI)", "Taxonomie de Bloom", "Priorisation RICE", "Analyse des besoins"],
    },
    {
      id: "3",
      title: "Outils & Compétences",
      icon: "Wrench",
      skills: ["Gestion de projet agile", "Déploiement (Render)", "Documentation technique", "Tests utilisateurs", "Veille technologique"],
    },
  ],
  contactInfo: {
    email: "audrey.gruneisen@example.com",
    linkedin: "https://linkedin.com/in/audrey-gruneisen",
    github: "https://github.com/audrey-gruneisen",
    availability: "Actuellement en alternance et ouverte aux opportunités de collaboration sur des projets IA innovants dans le domaine de l'éducation.",
  },
};
