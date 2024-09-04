import React from 'react';
import ButtonSvg from "../assets/svg/ButtonSvg";
import './Button.css';

const Button = ({ className, href, onClick, children, px, white }) => {
  const baseClasses = `button ${white ? 'button-white' : 'button-default'}`;
  const paddingClasses = px || 'button-padding-default';
  const combinedClasses = `${baseClasses} ${paddingClasses} ${className || ''}`;

  const content = (
    <>
      <span className="button-text">{children}</span>
      {ButtonSvg(white)}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;