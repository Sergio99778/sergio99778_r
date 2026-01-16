import React from 'react';

import './Footer.css';

interface SocialLink {
  name: string;
  href: string;
}

interface FooterProps {
  redes: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ redes }) => {
  return (
    <footer>
      <section className="footer--redes-section">
        <p>Contact with me :</p>
        <div className="redes-container">
          {redes.map((social, i) => (
            <a key={i} className={`fa fa-${social.name}`} href={social.href} target="_blank" rel="noreferrer">
              {' '}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
