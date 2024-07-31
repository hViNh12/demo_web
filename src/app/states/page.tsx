'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '@/CSS_states/state.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const names = result.map((user: { name: string }) => user.name);
        setData(names);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      setFilteredData(data.filter(item => item.toLowerCase().includes(lowercasedFilter)));
    }
  }, [searchTerm, data]);

  return (
    <div className="search-filter-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="home-button">
        <Link href="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SearchFilter;
