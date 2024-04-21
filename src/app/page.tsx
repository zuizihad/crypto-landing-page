import CreditIdentity from "@/components/credit-identity";
import Footer from "@/components/footer";
import Graph from "@/components/graph";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Map from "@/components/map";
import Roadmap from "@/components/roadmap";
import TalkToSupport from "@/components/talk-to-support";
import Wallet from "@/components/wallet";
import WhyChoose from "@/components/why-choose";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-2 md:px-56">
      <Header />
      <Hero />
      <WhyChoose />
      <Graph />
      <Roadmap />
      <CreditIdentity />
      <Map />
      <Wallet />
      <TalkToSupport />
      <Footer />
    </main>
  );
}
