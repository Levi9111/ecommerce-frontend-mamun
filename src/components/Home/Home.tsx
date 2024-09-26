import Navbar from '../Layout/Navbar/Navbar';
import Categories from './Categories';
import Hero from './Hero';

const Home = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Categories />
    </section>
  );
};

export default Home;
