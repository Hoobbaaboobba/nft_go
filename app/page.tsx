import MainSection from "@/components/main-section";
import Navbar from "@/components/nabvar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full px-6">
      <Image
        src="/background.svg"
        alt="background"
        fill
        className="-z-10"
        style={{
          objectFit: "cover",
        }}
      />
      <Navbar />
      <MainSection />
    </div>
  );
}
