import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-128px)]">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;