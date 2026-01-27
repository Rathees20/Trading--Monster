import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import WhyMostTradersLose from "./components/WhyMostTradersLose.jsx";

export default function App() {
  return (
    <div className="tm-bg min-h-dvh text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyMostTradersLose />
      </main>
      <Footer />
    </div>
  );
}

