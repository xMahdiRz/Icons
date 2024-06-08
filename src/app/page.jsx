"use client";
import { useState } from 'react';

const Home = () => {
  const [icons, setIcons] = useState('');
  const [theme, setTheme] = useState('dark');
  const [perLine, setPerLine] = useState(10);
  const [space, setSpace] = useState(3);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleGenerateUrl = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api/icons';
    const url = `${baseUrl}?i=${icons}&theme=${theme}&perLine=${perLine}&space=${space}`;
    setGeneratedUrl(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Icon URL Generator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Icons (comma-separated):</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          value={icons}
          onChange={(e) => setIcons(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Theme:</label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Icons per line:</label>
        <input
          type="number"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          value={perLine}
          onChange={(e) => setPerLine(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Space between icons:</label>
        <input
          type="number"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          value={space}
          onChange={(e) => setSpace(e.target.value)}
        />
      </div>
      <button
        onClick={handleGenerateUrl}
        className="bg-blue-500 text-white p-2 rounded-md shadow-sm"
      >
        Generate URL
      </button>
      {generatedUrl && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <p>Generated URL:</p>
          <a href={generatedUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            {generatedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
