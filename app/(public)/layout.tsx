import NavBar from "@/components/shared/nav-bar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      {/* footer */}
    </>
  );
};

export default PublicLayout;
