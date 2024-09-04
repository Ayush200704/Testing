import React from 'react';
import { loading } from "../assets";
import './Generating.css';

const Generating = ({ className }) => {
  return (
    <div className={`generating ${className || ""}`}>
      <img className="generating-icon" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;