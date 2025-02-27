import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
