import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultPortfolioData } from "@/data/defaultData";
import { PortfolioData } from "@/types/portfolio";
import { EditModeProvider } from "@/contexts/EditModeContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [portfolioData, setPortfolioData] = useLocalStorage<PortfolioData>(
    "portfolio-data",
    defaultPortfolioData
  );

  return (
    <EditModeProvider>
      <div className="min-h-screen bg-background">
        <Header
          portfolioData={portfolioData}
          onImportData={setPortfolioData}
        />
        <main>
          <HeroSection
            personalInfo={portfolioData.personalInfo}
            contactInfo={portfolioData.contactInfo}
            onUpdatePersonalInfo={(info) =>
              setPortfolioData({ ...portfolioData, personalInfo: info })
            }
          />
          <ProjectsSection
            projects={portfolioData.projects}
            onUpdateProjects={(projects) =>
              setPortfolioData({ ...portfolioData, projects })
            }
          />
          <SkillsSection
            skillCategories={portfolioData.skillCategories}
            onUpdateSkills={(categories) =>
              setPortfolioData({ ...portfolioData, skillCategories: categories })
            }
          />
          <ContactSection
            contactInfo={portfolioData.contactInfo}
            onUpdateContact={(info) =>
              setPortfolioData({ ...portfolioData, contactInfo: info })
            }
          />
        </main>
        <Footer />
      </div>
    </EditModeProvider>
  );
};

export default Index;
