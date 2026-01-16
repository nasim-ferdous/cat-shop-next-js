import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero></Hero>
      <FeaturedItems></FeaturedItems>
      <WhyChooseUs></WhyChooseUs>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  );
}
