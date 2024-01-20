import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './components/Blogs';
import Cards from "./components/Cards";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Nav from './components/Nav';
import NavMobile from "./components/NavMobile";
import NewsLetter from './components/NewsLetter';
import Features from "./components/Feature";

export default function App() {
  return (
    <>
    <div className="overflow-hidden">
    <Hero />

    </div>
    
      <Cards />
      <Blogs />
      <Features/>
      <Instructor/>
      <Contact />
      {/* <NewsLetter /> */}
      <Footer />
      <Features />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
