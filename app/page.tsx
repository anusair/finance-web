import Cards from "./components/Cards";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <GetStarted />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}
