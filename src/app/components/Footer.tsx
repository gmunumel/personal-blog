const Footer = () => {
  return (
    <footer className="mt-16 py-6 border-t text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Gabriel — Powered by React & Next.js & MDX &
      Pyodide
    </footer>
  );
};

export default Footer;
