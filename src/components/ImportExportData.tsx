import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { toast } from "sonner";
import { PortfolioData } from "@/types/portfolio";

interface ImportExportDataProps {
  data: PortfolioData;
  onImport: (data: PortfolioData) => void;
}

const ImportExportData = ({ data, onImport }: ImportExportDataProps) => {
  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `portfolio-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Données exportées avec succès");
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        onImport(importedData);
        toast.success("Données importées avec succès");
      } catch (error) {
        toast.error("Erreur lors de l'import du fichier");
        console.error(error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleExport}
        className="gap-2"
      >
        <Download className="h-4 w-4" />
        Exporter
      </Button>
      <label>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          asChild
        >
          <span>
            <Upload className="h-4 w-4" />
            Importer
          </span>
        </Button>
        <input
          type="file"
          accept=".json"
          onChange={handleImport}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImportExportData;
