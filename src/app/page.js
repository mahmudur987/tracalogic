import Banner from "@/components/Common/Banner/Banner";
import TerminalOperatingSystem from "@/components/Homepage/TerminalOperatingSystem/TerminalOperatingSystem";
import OurOffer from "@/components/Homepage/OurOffer/OurOffer";
import GetInTouch from "@/components/Homepage/GetInTouch/GetInTouch";
import CustomerReviews from "@/components/Homepage/CustomerReviews/CustomerReviews";
import Footer from "@/components/Common/Footer/Footer";
import img from "../assets/images/homepage/wave2.png";
export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-20 mb-10">
      <section
        className=" container mx-auto flex flex-col gap-20  bg-no-repeat "
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "center right",
          backgroundSize: "50%",
        }}
      >
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
