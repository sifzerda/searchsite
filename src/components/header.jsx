import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={headerContainerStyle}>
        <h1>My React App</h1>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  width: '100%',
  padding: '10px 0',
};

const headerContainerStyle = {
  maxWidth: '1280px',
  margin: '0 auto',
  textAlign: 'center',
};

export default Header;