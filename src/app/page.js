import Banner from "@/components/Common/Banner/Banner";
import TerminalOperatingSystem from "@/components/Homepage/TerminalOperatingSystem/TerminalOperatingSystem";
import OurOffer from "@/components/Homepage/OurOffer/OurOffer";
import GetInTouch from "@/components/Homepage/GetInTouch/GetInTouch";
import CustomerReviews from "@/components/Homepage/CustomerReviews/CustomerReviews";
import Footer from "@/components/Common/Footer/Footer";

export default function Home() {
  return (
    <main className="container flex flex-col gap-20 mb-10">
      <Banner />

      <TerminalOperatingSystem />

      <OurOffer />

      <GetInTouch />

      <CustomerReviews />

      <Footer />
    </main>
  );
}
