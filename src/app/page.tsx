import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickSteps from "@/components/QuickSteps";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import InstallMethods from "@/components/InstallMethods";
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
        <QuickSteps />
        <Problem />
        <Solution />
        <InstallMethods />
        <SkillCards />
        <Ecosystem />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
