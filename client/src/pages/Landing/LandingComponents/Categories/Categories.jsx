import Button from '../../../../components/Button/Button';
import design from './categories.module.css';
const Categories = () => {
  return (
    <div className={design.Categories}>
      <h1>Categories</h1>
      <div className={design.Categories_flex}>
        <div className={`${design.Categories_flex_item} ${design.Jobs}`}>
          <h3>JOBS</h3>
          <ul>
            <li>
              Embrace flexibility and set your own terms, rates, and work
              schedule. Enjoy the freedom of working on projects that truly
              inspire you.
            </li>
            <li>
              {' '}
              Elevate your freelance career by showcasing your talents to a
              global audience. Build a strong portfolio and gain recognition for
              your outstanding work.
            </li>
            <li>
              {' '}
              Discover a wide array of exciting freelance projects waiting for
              your expertise. From creative endeavors to technical challenges,
              there's a perfect match for your skills.
            </li>
          </ul>
          <Button
            content='See more'
            style={{ width: '90%', marginLeft: '20px' }}
          />
        </div>
        <div className={`${design.Categories_flex_item} ${design.Talents}`}>
          <h3>TALENTS</h3>
          <ul>
            <li>
              Showcase your skills and stand out among the best in your field.
              Our platform is a stage to exhibit your creative prowess and
              expertise.
            </li>
            <li>
              {' '}
              Rest assured, your hard work is valued. Get paid securely and
              promptly for your projects through our reliable payment system.
            </li>
            <li>
              Access a diverse range of projects from companies worldwide.
              Connect with innovative brands seeking your unique talents.
            </li>
          </ul>
          <Button
            content='See more'
            style={{ width: '90%', marginLeft: '20px' }}
          />
        </div>
        <div className={`${design.Categories_flex_item} ${design.Companies}`}>
          <h3>COMPANIES</h3>
          <ul>
            <li>
              Collaborate with skilled professionals to bring your innovative
              ideas to life. Our freelancers are ready to transform your vision
              into reality.
            </li>
            <li>
              Save on costs by hiring freelance talent. Benefit from lower fees
              and flexible options without compromising on quality.
            </li>
            <li>
              Find exceptional freelancers for your projects from a vast talent
              pool. Our platform connects you with experts from around the
              globe.
            </li>
          </ul>
          <Button
            content='See more'
            style={{ width: '90%', marginLeft: '20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
