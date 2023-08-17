import design from './intro.module.css';
import Star from '../../../../assets/star.png';
import Button from '../../../../components/Button/Button';

const Intro = () => {
  return (
    <div className={design.Intro}>
      <h1
        className={design.rotateStar}
        data-aos='zoom-in'
        data-aos-duration='1000'
      >
        THE WORLD OF <img src={Star} width={'20px'} />
        <span style={{ marginLeft: '100px' }}>SUPER TALENTED </span>{' '}
        <span className={design.rotateStar}>
          {' '}
          <img src={Star} />
          FREELANCERS
        </span>
      </h1>
      <div data-aos='zoom-in' data-aos-duration='1000'>
        <p>
          Welcome to the realm of extraordinary and exceptionally talented
          freelancers! Discover the finest minds to empower your project. Step
          into the decentralized freelance marketplace, where innovation knows
          no bounds.
        </p>
        <Button
          content='Get Started'
          style={{ marginTop: '30px', width: '100%' }}
          route='/role-selection'
        />
      </div>
    </div>
  );
};

export default Intro;
