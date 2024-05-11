import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Chai our code</h1>
      <HeroSection/>
      <FeaturedCourses/>
      {/* not working for  firefox */}
      {/* <WhyChooseUs/>   */}
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
