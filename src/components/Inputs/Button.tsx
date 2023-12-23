import React from "react";

interface ButtonProps {
  title: string;
  icon: any;
}

const Button = (props: ButtonProps) => {
  const { title, icon } = props;
  return (
    <button
      type="button"
      className="text-white bg-[#f8791e] hover:bg-[#f07014] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
    >
      <div className="mr-2">{icon}</div>
      {title}
    </button>
  );
};

export default Button;
