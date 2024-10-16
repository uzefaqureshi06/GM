import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerLogo}>
        <img src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1728989166/Uzefa/molrfjlnaneg5mdqmq0u.png"
            style={styles.logo}
          />
        </div>
        <ul style={styles.footerLinks}>
          <li>
            <a href="about" style={styles.link}>
            ABOUT US
            </a>
          </li>
          <li>
            <a href="store" style={styles.link}>
              STORE
            </a>
          </li>
          <li>
            <a href="category" style={styles.link}>
              CATEGORY
            </a>
          </li>
          <li>
            <a href="contact" style={styles.link}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      <hr style={styles.hr} />
      <div style={styles.footerText}>
        &copy; 2023 Your Website
      </div>
    </footer>
  );
};

const styles = {
    
  footer: {
    width: '100%',
    backgroundColor: 'black',
    padding: '32px',
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  footerLogo: {
    flexShrink: 0,
  },
  logo: {
    filter: 'drop-shadow(0 0 10px red)',
    width: '97px',
  },
  
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  hr: {
    margin: '24px 0',
    border: 0,
    borderTop: '1px solid #ddd',
  },
  footerText: {
    color: '#fff',
    fontSize: '16px',
  },
  
  '@media (max-width: 768px)': {
    footerContainer: {
      flexDirection: 'column',
      gap: '15px',
    },
    logo: {
      width: '30px',
    },
    footerText: {
      fontSize: '14px',
    },
    footerLinks: {
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
};

export default Footer;
