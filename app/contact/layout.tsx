import Navbar from "@/components/navbar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary1 min-h-screen">
      <div className="min-[915px]:flex hidden">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
