import About from '../components/Homepage/About';
import Hero from '../components/Homepage/Hero';
import SectionOne from '../components/Homepage/SectionOne';
import Services from '../components/Homepage/Services';
import Footer from '../components/Layout/Footer';

export default function Home() {
  return (
    <div className="-z-10">
      <Hero />
      <SectionOne />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
