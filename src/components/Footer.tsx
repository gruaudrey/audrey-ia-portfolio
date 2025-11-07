const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/30 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Audrey Gruneisen. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
