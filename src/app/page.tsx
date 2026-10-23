import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillCards from "@/components/SkillCards";
// import Ecosystem from "@/components/Ecosystem";  // いったん非公開
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillCards />
        {/* <Ecosystem />  2026-10-05 いったん非公開 */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}
