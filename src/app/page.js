import Hero from '@/components/Hero/Hero';
import Contacts from '@/components/Contacts/Contacts';
import About from '@/components/About/About';
import Career from '@/components/Career/Career';
import Gallery from '@/components/Gallery/Gallery';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
