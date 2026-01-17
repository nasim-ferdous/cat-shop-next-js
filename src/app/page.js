import Image from "next/image";
import Hero from "./components/home/Hero";
import FeaturedItems from "./components/home/FeaturedItems";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Categories from "./components/home/Categories";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import CallToAction from "./components/home/CallToAction";

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
