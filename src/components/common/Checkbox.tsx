import React from "react";

interface CheckboxProps {
  SubMenu: string
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ SubMenu, className }) => {


  return (
    <>
      <div className={`flex gap-[8px] border-b border-solid border-[#E5E6EB] py-[9px] `}>
        <input
          type="checkbox"
          name={SubMenu}
        />
        <label className={`${className}`}>{SubMenu}</label>
      </div>
    </>
  );
};

export default Checkbox;
