import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Nav from './components/Nav';
import NavMobile from "./components/NavMobile";
import NewsLetter from './components/NewsLetter';
import { useEffect } from "react";

export default function App() {
  return (<>
    <Hero />
    <Blogs />
    <Contact />
    <NewsLetter />
    <Footer />
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
