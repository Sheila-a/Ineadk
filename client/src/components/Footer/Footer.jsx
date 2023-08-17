import design from './footer.module.css';
const Footer = () => {
  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <clipPath clipPathUnits='objectBoundingBox' id='clip-path'>
            <path
              className={design.path}
              d='M502.084 15.2655C280.068 -23.8234 58.0097 20.574 0 54.3549V482H1566.26V15.2655L1553 28.5L1539 39L1525.5 48.25L1505.5 60L1480.5 68C1471 72.5 1459.22 73.6067 1448.5 75.0764C1137 117.798 716.717 53.0545 502.084 15.2655Z'
              fill='#4648AA'
            />
          </clipPath>
        </defs>
      </svg>
      <div className={design.clip_path}>
        <div className={design.Footer}>
          <div>
            <h1>GIGNexus</h1>
          </div>
          <div className={design.Companies}>
            <h3>Companies</h3>
            <p>Hire top-tier</p>
            <p>Access global</p>
            <p>Build innovative</p>
            <p>Collaborate & innovate</p>
          </div>
          <div className={design.Jobs}>
            <h3>Jobs</h3>
            <p>Find exciting</p>
            <p>Browse diverse</p>
            <p>Apply your</p>
            <p>Grow your</p>
          </div>
          <div className={design.Talent}>
            <h3>Talent</h3>
            <p>Showcase skills</p>
            <p>Set your own</p>
            <p>Get paid securely</p>
            <p>Explore platform</p>
          </div>
          <div className={design.Resources}>
            <h3>Resources</h3>
            <p>Learn to succeed</p>
            <p>Discover tips</p>
            <p>Stay updated</p>
            <p>Access valuable</p>
          </div>
        </div>
        <p> Copyright &copy; GIGNexus. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
