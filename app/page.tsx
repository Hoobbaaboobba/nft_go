import MainSection from "@/components/main-section";
import Navbar from "@/components/nabvar";
import Image from "next/image";
import bg from "../public/background.svg";

export default function Home() {
  return (
    <div className="w-full h-full px-6">
      <Image
        src={bg}
        alt="background"
        fill
        className="-z-10"
        style={{
          objectFit: "cover",
        }}
        placeholder="blur"
      />
      <Navbar />
      <MainSection />
    </div>
  );
}
