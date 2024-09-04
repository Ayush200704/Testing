import React from 'react';
import SectionSvg from "../assets/svg/SectionSvg";
import './Section.css';

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
        section
        ${customPaddings || `section-padding ${crosses ? "section-padding-lg" : ""}`}
        ${className || ""}
      `}
    >
      {children}

      <div className="section-border section-border-left" />
      <div className="section-border section-border-right" />

      {crosses && (
        <>
          <div className={`section-cross ${crossesOffset || ""}`} />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;