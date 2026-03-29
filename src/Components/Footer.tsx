import React from 'react';
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

import './Footer.css';
import type { SocialLink } from '../types';

interface FooterProps {
  redes: SocialLink[];
}

const iconMap: Record<string, React.ReactElement> = {
  facebook: <FaFacebook />,
  twitter: <FaXTwitter />,
  linkedin: <FaLinkedinIn />,
  github: <FaGithub />,
};

const Footer: React.FC<FooterProps> = ({ redes }) => {
  return (
    <footer>
      <section className="footer--redes-section">
        <p>Contact with me :</p>
        <div className="redes-container">
          {redes.map((social) => (
            <a
              key={social.name}
              className={`social-link social-link--${social.name}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${social.name.charAt(0).toUpperCase() + social.name.slice(1)} profile`}
            >
              {iconMap[social.name]}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
