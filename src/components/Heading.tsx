import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  titleColor?: string; 
  textColor?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  titleColor = "text-violet-400",
  textColor = "text-gray-300",
  align = "center",
  className = "",
}) => {
  return (
    <section
      className={`text-${align} py-2 px-6 ${className}`}
    >
      <h2
        className={`text-3xl md:text-5xl font-bold ${titleColor} mb-1`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${textColor} max-w-3xl mx-auto text-lg`}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default Heading;
