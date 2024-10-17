// components/FilterPanel.jsx
import React from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h3>Filter</h3>
      <div className="filter-group">
        <h4>Category</h4>
        <ul>
          <li><input type="checkbox" /> All</li>
          <li><input type="checkbox" /> Trending</li>
          <li><input type="checkbox" /> Upcoming</li>
          <li><input type="checkbox" /> Music</li>
          <li><input type="checkbox" /> Movies</li>
        </ul>
      </div>
      <div className="filter-group">
        <h4>Pricing</h4>
        <ul>
          <li><input type="checkbox" /> Free</li>
          <li><input type="checkbox" /> Paid</li>
        </ul>
      </div>
      <div className="filter-group">
        <h4>Language</h4>
        <ul>
          <li><input type="checkbox" /> English</li>
          <li><input type="checkbox" /> Hindi</li>
          <li><input type="checkbox" /> Gujarati</li>
        </ul>
      </div>
      <button className="apply-button">Apply</button>
      <button className="clear-button">Clear all</button>
    </div>
  );
};

export default FilterPanel;
