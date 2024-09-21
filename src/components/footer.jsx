// src/components/Footer.js

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My React App. All Rights Reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;