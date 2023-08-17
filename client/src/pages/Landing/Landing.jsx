import Navbar from '../../components/Navbar/Navbar';
import About from './LandingComponents/About/About';
import Categories from './LandingComponents/Categories/Categories';
import Intro from './LandingComponents/Intro/Intro';
import Why from './LandingComponents/Why/Why';

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Why />
      <Categories />
    </div>
  );
};
