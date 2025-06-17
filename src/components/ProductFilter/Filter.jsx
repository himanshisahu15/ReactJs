import React from 'react';
import './filter.css';

export default function Filter({ selectedYear, onChangeYear }) {
  const handleYearChange = (e) => {
    onChangeYear(e.target.value);
  };

  return (
    <div className="filter-container">
      <label>Filter by Year:</label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="All">All</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
    </div>
  );
}
