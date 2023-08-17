import Button from '../../../../components/Button/Button';
import design from './why.module.css';

const Why = () => {
  return (
    <div className={design.Why}>
      <h1 data-aos='zoom-in' data-aos-duration='1000'>
        Why GIG<span>Nexus</span>
      </h1>
      <div className={design.Why_flex}>
        <div
          className={design.Why_flex_item}
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Trust and Security</h3>
          <p>
            We place your trust at the core of our platform. Through
            blockchain-powered smart contracts, we ensure secure transactions
            and dispute resolution, leaving no room for uncertainties.
          </p>
        </div>
        <div
          className={design.Why_flex_item}
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Unparalleled Freedom</h3>
          <p>
            Gig Nexus grants freelancers the freedom they deserve. Set your own
            terms, rates, and work schedules to match your lifestyle. Embrace a
            platform that respects your individuality and creative prowess.
          </p>
        </div>

        <div
          className={design.Why_flex_item}
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3> Global Talent Pool</h3>
          <p>
            As a client, access a vast network of top-tier freelancers from
            around the globe. Talent knows no borders, and Gig Nexus enables you
            to find the perfect match for your project's vision.
          </p>
        </div>
        <div
          className={design.Why_flex_item}
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Lower Fees, More Earnings</h3>
          <p>
            Say farewell to exorbitant fees that eat into your hard-earned
            money. With Gig Nexus, freelancers can enjoy significantly lower
            fees, allowing you to retain more of what you earn.
          </p>
        </div>
        <div
          className={design.Why_flex_item}
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Seamless Collaboration</h3>
          <p>
            Our user-friendly interface fosters seamless collaboration between
            freelancers and clients. Communicate effortlessly, share project
            updates, and achieve excellence together.
          </p>
        </div>
      </div>
      <p className={design.Summary} data-aos='zoom-in' data-aos-duration='1000'>
        Whether you're a talented freelancer seeking autonomy or a client in
        pursuit of top-tier expertise, Gig Nexus is the nexus of opportunity.
        Come together, break barriers, and redefine the future of freelancing
        with us. Embark on your journey with Gig Nexus today, where limitless
        possibilities await. Together, we'll revolutionize freelancing and forge
        a brighter future for all.
      </p>
      <div className={design.Why_flex_button}>
        <Button
          content='Sign Up Now'
          style={{ width: '100%' }}
          route='/role-selection'
        />
        <Button content='Find Projects' style={{ width: '100%' }} />
        <Button content='Contact Us' style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Why;
