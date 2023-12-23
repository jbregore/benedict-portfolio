import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f7f3f2]">
      <Navigation />

      <Hero />
    </div>
  );
}
