import React from "react";

interface CheckboxProps {
  content: string
}

const Checkbox: React.FC<CheckboxProps> = ({ content }) => {


  return (
    <>
      <div className={`flex gap-[8px] border-b border-solid border-[#E5E6EB] py-[9px] `}>
        <input
          type="checkbox"
          name={content}
        />
        <label>{content}</label>
      </div>
    </>
  );
};

export default Checkbox;
