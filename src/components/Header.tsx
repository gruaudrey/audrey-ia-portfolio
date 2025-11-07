import { Button } from "@/components/ui/button";
import { Menu, X, Edit, Save } from "lucide-react";
import { useState } from "react";
import { useEditMode } from "@/contexts/EditModeContext";
import ImportExportData from "./ImportExportData";
import { PortfolioData } from "@/types/portfolio";

interface HeaderProps {
  portfolioData: PortfolioData;
  onImportData: (data: PortfolioData) => void;
}

const Header = ({ portfolioData, onImportData }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEditMode, setIsEditMode } = useEditMode();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "À propos", id: "about" },
    { label: "Projets", id: "projects" },
    { label: "Compétences", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
              {isEditMode && <ImportExportData data={portfolioData} onImport={onImportData} />}
              <Button
                variant={isEditMode ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditMode(!isEditMode)}
                className={isEditMode ? "gradient-primary shadow-elegant gap-2" : "gap-2"}
              >
                {isEditMode ? (
                  <>
                    <Save className="h-4 w-4" />
                    Mode Édition
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4" />
                    Mode Édition
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-border space-y-2">
              <Button
                variant={isEditMode ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditMode(!isEditMode)}
                className={isEditMode ? "gradient-primary w-full gap-2" : "w-full gap-2"}
              >
                {isEditMode ? (
                  <>
                    <Save className="h-4 w-4" />
                    Mode Édition
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4" />
                    Mode Édition
                  </>
                )}
              </Button>
              {isEditMode && (
                <div className="flex gap-2">
                  <ImportExportData data={portfolioData} onImport={onImportData} />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
