import Header from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
