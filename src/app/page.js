import Banner from "@/components/Banner";
import ReadyTo from "@/components/ReadyTo";
import TravelersSay from "@/components/TravelersSay";
import WhyChose from "@/components/WhyChose";


export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChose/>
      <TravelersSay/>
      <ReadyTo/>
    </div>
  );
}
