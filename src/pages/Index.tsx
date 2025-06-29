import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://3.134.234.73:3001/api/message")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => {
        console.error("Error fetching backend:", err);
        setBackendMessage("⚠️ Backend not reachable");
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* ✅ Show backend message here */}
      <div className="text-center my-4 p-4 bg-yellow-100 text-yellow-800 font-semibold">
        Backend says: {backendMessage}
      </div>

      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

