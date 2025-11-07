import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="gap-2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/50"
    >
      <Edit className="h-4 w-4" />
      Éditer
    </Button>
  );
};

export default EditButton;
