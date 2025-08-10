const Footer = () => {
  const currenYear = new Date().getFullYear();

  return (
    <footer className="text-center border-t bg-background">
      <p>© {currenYear} Static E-Commerce Site</p>
    </footer>
  );
};

export default Footer;
