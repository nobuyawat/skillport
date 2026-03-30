import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillCards from "@/components/SkillCards";
import Ecosystem from "@/components/Ecosystem";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillCards />
        <Ecosystem />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
