import React from 'react';
import { companyLogos } from "../constants";
import './CompanyLogos.css';

const CompanyLogos = ({ className }) => {
  return (
    <div className={`company-logos ${className || ''}`}>
      <h5 className="company-logos-tagline">
        Helping people against violence
      </h5>
    </div>
  );
};

export default CompanyLogos;