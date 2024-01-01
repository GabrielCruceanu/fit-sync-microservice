import HomeFaq from "@/components/home/HomeFaq";
import HomeBeAPro from "@/components/home/HomeBeAPro";
import HomeHero from "@/components/home/HomeHero";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";

export default function HomeScreen() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeHowItWorks />
      <HomeBeAPro />
      <HomeFaq />
    </>
  );
}
