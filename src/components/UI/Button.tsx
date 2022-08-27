import React from "react";

const Button: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <button className={`${"bg-main-purple hover:bg-hover-purple rounded-3xl text-white text-white "} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
