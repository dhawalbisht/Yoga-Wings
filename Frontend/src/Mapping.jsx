// import Blogs from './components/Blogs';
import Cards from "./components/Cards";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';
import Features from "./components/Feature";
import Courses from "./components/Courses";
export default function Mapping() {
    return (
        <>
            <Hero />
            <Cards />
            {/* <Blogs /> */}
            <Features />
            <NewsLetter />
            <Contact />
            <Courses />
            <Footer />
        </>
    );
}
