import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const contentRef = useRef(null); // Create a ref for the content

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  const getContentText = () => {
    return contentRef.current ? contentRef.current.innerText : '';
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        {/* Search bar input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a keyword"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          {/* Content with ref */}
          <div ref={contentRef}>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s...
            </p>
            <p>
              Why do we use it? It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout...
            </p>
            {/* Add more paragraphs or content here */}
          </div>

          {/* Displaying highlighted text */}
          <div>
            {highlightText(getContentText(), searchTerm)}
          </div>
        </div>
        <p className="read-the-docs"></p>
      </div>
      <Footer />
    </>
  );
}

export default App;