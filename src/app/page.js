import Banner from "@/components/Common/Banner/Banner";
import TerminalOperatingSystem from "@/components/Homepage/TerminalOperatingSystem/TerminalOperatingSystem";
import OurOffer from "@/components/Homepage/OurOffer/OurOffer";
import GetInTouch from "@/components/Homepage/GetInTouch/GetInTouch";
import CustomerReviews from "@/components/Homepage/CustomerReviews/CustomerReviews";
import Footer from "@/components/Common/Footer/Footer";
import img from "../assets/images/homepage/wave2.png";
export default function Home() {
  return (
    <main className="container mx-auto mt-28 flex flex-col gap-20 mb-10">
      <section className=" container mx-auto flex flex-col   bg-no-repeat ">
        <Banner />

        <TerminalOperatingSystem />
      </section>

      <OurOffer />

      <GetInTouch />

      <CustomerReviews />

      <Footer />
    </main>
  );
}
