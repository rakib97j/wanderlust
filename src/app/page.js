import Banner from "@/components/Banner";
import FeaturedCard from "@/components/FeaturedCard";
import ReadyTo from "@/components/ReadyTo";
import TravelersSay from "@/components/TravelersSay";
import WhyChose from "@/components/WhyChose";


export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedCard/>
      <WhyChose/>
      <TravelersSay/>
      <ReadyTo/>
    </div>
  );
}
