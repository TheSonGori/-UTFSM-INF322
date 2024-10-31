import React from 'react';
import companyLogo from '../assets/Logo.png';

const CompanyIcon = () => {
    return (
        <div className="company-icon">
            <img src={companyLogo} alt="Empresa" className="company-icon__image" />
        </div>
    );
};

export default CompanyIcon;
