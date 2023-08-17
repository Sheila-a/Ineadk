import design from './about.module.css';
import AboutImg from '../../../../assets/use1.jpg';
import Button from '../../../../components/Button/Button';

const About = () => {
  return (
    <div className={design.About}>
      <div data-aos='fade-up' data-aos-duration='1000'>
        <h1>About Us</h1>
        <p>
          At Gig Nexus, we're pioneering a new era of freelancing – one that
          leverages cutting-edge blockchain technology to create a decentralized
          freelance marketplace like no other. Our mission is to empower
          freelancers and clients with the tools and transparency needed to
          forge fruitful partnerships and succeed in the ever-evolving gig
          economy.
        </p>
        <Button
          content='Get Started'
          style={{ marginTop: '30px', width: '100%' }}
          // route='/role-selection'
          route='/dashboard'
        />
      </div>
      <div data-aos='zoom-in' data-aos-duration='1000'>
        <img src={AboutImg} />
      </div>
    </div>
  );
};

export default About;
