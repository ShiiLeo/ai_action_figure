import Faq from "@/components/faq";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import { Metadata } from "next";
import { app, analytics } from "@/lib/firebase";

export const metadata: Metadata = {
  title: "AI Action Figure Generator with Chatgpt 4o image Feature",
  description:
    "Transform your photos into custom action figures using our AI-powered generator. No design skills needed—just upload a photo and describe your desired look. Generate your unique digital toy in minutes!",

  alternates: {
    canonical: "https://aifigure.net/",
  },
};

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <Howitwork></Howitwork>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
