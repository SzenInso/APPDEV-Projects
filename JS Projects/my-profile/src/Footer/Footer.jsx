import './Footers.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
